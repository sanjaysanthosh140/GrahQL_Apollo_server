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

app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev'));

const ApolloServer_start = async () => {
    try {
        const server = new Apollo_server.ApolloServer({
            typeDefs,
            resolvers,
            context: async ({ req }) => {
                try {
                    console.log("contex is working now")
                    let cookies = req.cookies;
                    console.log("gql cookies", cookies);
                    let token = req.headers.authorization || '';

                    if (token || cookies) {
                        console.log("working");
                        const cookieHeader = Object.entries(cookies)
                            .map(([key, value]) => `${key}=${value}`)
                            .join(';');
                        
                        const user_data = await fetch('https://myapp-server-side-rafv.onrender.com/user_side/checkauth', {
                            method: 'GET',
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': `${token}`,
                                'Cookie': cookieHeader
                            },
                            credentials: "include"
                        })

                        if (user_data) {
                            console.log("userIn");
                            const user = await user_data.json();
                            console.log(user);
                            return {
                                user: user
                            }
                        } else {
                            console.log("no user");
                            return {
                                user: false
                            }
                        }

                    } else {
                        console.log("no cookies / tokens");
                        return { user: null };
                    }

                } catch (error) {
                    console.log(error);
                    return { user: null };
                }
            }
        });

        await server.start();
        server.applyMiddleware({
            app,
            cors: {
<<<<<<< HEAD
                origin: ['http://localhost:5173','https://myapp-server-side-rafv.onrender.com','https://my-app-clientisde-rf1p-lejlrl2w0-sanjaysanthosh140s-projects.vercel.app'],
=======
                origin: [
                    'https://saastoola-b3f60.web.app',
                    'https://myapp-server-side-rfxp.onrender.com',
                    'https://myapp-server-side-rafv.onrender.com',
                ],
>>>>>>> 52f4e73478ea22c6d74ba91ca1d4f69bf6df5539
                credentials: true,
                allowedHeaders: ['Content-Type', 'Authorization']
            }
        });
        
        app.listen(PORT, '0.0.0.0', () => {
            console.log(`Server is running on port: http://localhost:8383${server.graphqlPath}`)
        });
        
    } catch (error) {
        console.log(error);
    }
}

ApolloServer_start();
