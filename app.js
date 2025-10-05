const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const connection = require('./Ai_tool_outer/db/postgresQL.js');
const { typeDefs, resolvers } = require('./Ai_tool_outer/Query.js');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const PORT = 8383;
const cors = require('cors');
const jwt = require('jsonwebtoken');
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev'));

// ✅ FIXED CORS for Express app
const allowedOrigins = [
    'http://localhost:5173',
    //'http://localhost:3000',
    //'https://your-firebase-app.web.app',        // ADD YOUR FIREBASE DOMAIN
    //'https://your-firebase-app.firebaseapp.com' // ADD YOUR FIREBASE DOMAIN
];

app.use(cors({
    origin: allowedOrigins,
    credentials: true,
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Cookie']
}));

// ✅ OPTIMIZED Context - No HTTP calls for every request
const context = async ({ req }) => {
    try {
        // Method 1: Check JWT Token
        const token = req.headers.authorization?.replace('Bearer ', '');
        if (token) {
            try {
                const decoded = jwt.verify(token, process.env.JWT_SECRET);
                return { user: decoded };
            } catch (jwtError) {
                console.log('JWT invalid:', jwtError.message);
            }
        }

        // Method 2: Check Session via Cookie
        if (req.cookies && req.cookies['connect.sid']) {
            // Session will be handled by your REST API when needed
            return { user: null, hasSession: true };
        }

        return { user: null };

    } catch (error) {
        console.log('Context error:', error);
        return { user: null };
    }
};

const ApolloServer_start = async () => {
    try {
        const server = new ApolloServer({
            typeDefs,
            resolvers,
            context: async ({ req }) => {
                try {
                    console.log("contex is working now")
                    let cookies = req.cookies;
                    console.log("gql cookies", cookies);
                    let token = req.headers.authorization || '';
                    //console.log("token", token.length);

                    if (token || cookies) {
                        console.log("working");
                        const cookieHeader = Object.entries(cookies)
                            .map(([key, value]) =>
                                `${key}=${value}`
                            ).join(';');
                        // console.log(cookieHeader);
                        const user_data = await fetch('https://myapp-server-side-rafv.onrender.com/user_side/checkauth', {
                            method: 'GET',
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': `${token}`,
                                'Cookie': cookieHeader
                            },
                            credentials: "include"
                        })
                        // .then((data) => data.json().then((data) => {
                        // console.log(data);
                        // }))

                        if (user_data) {
                            console.log("userIn");
                            return {
                                user: await user_data.json()
                            }
                            // let user = await user_data.json();
                            // console.log(user)
                        } else {
                            console.log("no user");
                            return {
                                user: false
                            }
                        }

                    } else {
                        console.log("no cookies / tokens");
                    }


                } catch (error) {
                    console.log(error)
                }

            },

      cors: false // ✅ Disable Apollo CORS since we use Express CORS
        });

        await server.start();

        server.applyMiddleware({
            app,
            cors: false // ✅ Already handled by Express CORS
        });

        app.listen(PORT, '0.0.0.0', () => {
            console.log(`Server 2 running on: http://localhost:${PORT}${server.graphqlPath}`);
        });
    } catch (error) {
        console.log(error);
    }
};

ApolloServer_start();
