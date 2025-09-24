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
//app.use(bodyParser.json());
app.use(morgan('dev'));

const ApolloServer_start = async () => {
    try {
        const server = new Apollo_server.ApolloServer({
            typeDefs,
            resolvers,
            context: async ({ req }) => {
                try {
                    let cookies = req.cookies;
                    console.log("gql cookies", cookies);
                    let token = req.headers.authorization || '';
                    console.log("token", token.length);

                    if (token || cookies) {
                        console.log("working");
                        const cookieHeader = Object.entries(cookies)
                            .map(([key, value]) =>
                                `${key}=${value}`
                            ).join(';');
                        // console.log(cookieHeader);
                       const user_data = await fetch('https://myapp-server-side-rfxp.onrender.com/user_side/checkauth', {
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
                                    user : await  user_data.json()
                                }
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

            }

        })

        await server.start();
        server.applyMiddleware({
            app,
            cors: {
                origin: 'http://localhost:5173',
                credentials: true,
                allowedHeaders: ['Content-Type', 'Authorization']
            }
        });
        app.listen(PORT,'0.0.0.0' ,() => {
            console.log(`Server is running on port: http://localhost:8383${server.graphqlPath}`)
        })
    } catch (error) {
        console.log(error)
    }


}

ApolloServer_start();