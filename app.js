const Apollo_server = require('apollo-server-express');
const express = require('express');
const connection = require('./Ai_tool_outer/db/postgresQL.js')
const { typeDefs, resolvers } = require('./Ai_tool_outer/Query.js');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan')
const PORT = 8383;
const cors = require('cors');
const app = express();

const ApolloServer_start = async () => {
    // Middleware setup
    // app.use(express.json());
    // app.use(cookieParser());
    // app.use(morgan('dev'));
    // app.use(bodyParser.json());

    // ✅ ADD Express CORS middleware
    app.use(cors({
        origin: [
            'https://saastoola-b3f60.web.app',
            'https://myapp-server-side-rfxp.onrender.com',
            'https://myapp-server-side-rafv.onrender.com',
        ],
        credentials: true,
        methods: ['GET', 'POST', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization', 'Cookie']
    }));

    try {
        const server = new Apollo_server.ApolloServer({

            typeDefs,
            resolvers,
            context: async ({ req }) => {
                try {
                    console.log("=== GRAPHQL CONTEXT ===");
                    console.log("Cookies received:", req.cookies);
                    console.log("Authorization header:", req.headers.authorization);
                    let token = req.headers.authorization || '';

                    if (token) {
                        console.log("Making auth check to Server 1...");
                        const user_data = await fetch('https://myapp-server-side-rfxp.onrender.com/user_side/checkauth', {
                            method: 'GET',
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': `${token}`,
                            },
                            credentials: "include"
                        });

                        if (user_data.ok) {
                            console.log("this is a debugger authentication response ",user_data)
                            const user = await user_data.json();
                            console.log("Auth result from Server 1:", user);
                            return { user: user };
                        } else {
                            console.log("Auth check failed");
                            return { user: null };
                        }
                    } else {
                        console.log("No auth credentials found");
                        return { user: null };
                    }
                } catch (error) {
                    console.log("Context error:", error);
                    return { user: null };
                }
            }
        });
        app.use(morgan("dev"));
        app.use(express.json());
        app.use(bodyParser.json());
        app.use(cookieParser())

        await server.start();

        server.applyMiddleware({
            app,
            cors: false // ✅ DISABLE Apollo CORS since we use Express CORS
        });

        app.listen(PORT, '0.0.0.0', () => {
            console.log(`Server 2 running on: http://localhost:${PORT}${server.graphqlPath}`);
        });

    } catch (error) {
        console.log(error);
    }
}

ApolloServer_start();

