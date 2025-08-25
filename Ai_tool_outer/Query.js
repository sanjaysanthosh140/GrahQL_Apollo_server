"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = exports.typeDefs = void 0;
const pool = require("./db/postgresQL");
// const pool = new Pool({
// connectionString:
// "postgresql://neondb_owner:npg_dFOvUJ0m7oVr@ep-dawn-sun-a1yipn4i-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require",
// ssl: true,
// });
exports.typeDefs = `#graphql 

type Ai_web_tools {
  id:ID!
  name:String!
  description:String!
  officialurl:String!
  pricing:String!
  category:String!
}


type Ai_app_tools{
  id:ID!
  name:String!
  description:String!
  officialurl:String!
  pricing:String!
  category:String!
}

type Ai_api_tools{
  id:ID!
  name:String!
  description:String!
  officialurl:String!
  pricing:String!
  category:String!
}

type Ai_Sqlquery_tools{
  id:ID!
  name:String!
  description:String!
  officialurl:String!
  pricing:String!
  category:String!
}

type Query {
  #web
  ai_web_tools: [Ai_web_tools]
  ai_web_tool(id:ID!): Ai_web_tools
  
  #app
  ai_app_tools: [Ai_app_tools]
  ai_app_tool(id:ID!): Ai_app_tools

  #api
  ai_api_tools: [Ai_api_tools]
  ai_api_tool(id:ID!):Ai_api_tools
  
  #sql
  ai_Sqlquery_tools: [Ai_Sqlquery_tools]
  ai_Sqlquery_tool(id:ID!):Ai_Sqlquery_tools

}

`;
exports.resolvers = {
    Query: {
        ai_web_tools: (_, __, context) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                console.log("ai tools called");
                if (!context.user)
                    throw new Error("please login first");
                console.log("contex", context);
                const web_tools = yield pool.query("SELECT * FROM aitool");
                return web_tools.rows;
            }
            catch (error) {
                console.log(error);
            }
        }),
        ai_web_tool: (_, arg) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const web_tool = yield pool.query("SELECT * FROM aitool WHERE id = $1", [arg.id]);
                console.log(web_tool.rows[0]);
                return web_tool.rows[0];
            }
            catch (error) {
                console.log(error);
            }
        }),
        ai_app_tools: (_, __) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                console.log("ai app tools callsed");
                const app_tools = yield pool.query("SELECT * FROM ai_app_tools");
                return app_tools.rows;
            }
            catch (error) {
                console.log(error);
            }
        }),
        ai_app_tool: (_, arg) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const app_tool = yield pool.query("SELECT * FROM ai_app_tools WHERE id = $1", [arg.id]);
                console.log(app_tool);
                return app_tool.rows[0];
            }
            catch (error) {
                console.log(error);
            }
        }),
        ai_api_tools: () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const api_tools = yield pool.query("SELECT * FROM api_app_tools");
                return api_tools.rows;
            }
            catch (error) {
                console.log(error);
            }
        }),
        ai_api_tool: (_, arg) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const api_tool = yield pool.query("SELECT * FROM api_app_tools WHERE id = $1", [arg.id]);
                return api_tool.rows[0];
            }
            catch (error) {
                console.log(error);
            }
        }),
        ai_Sqlquery_tools: () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const sql_tools = yield pool.query("SELECT * FROM sql_query_tools");
                return sql_tools.rows;
            }
            catch (error) {
                console.log(error);
            }
        }),
        ai_Sqlquery_tool: (_, arg) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const sql_tool = yield pool.query("SELECT * FROM sql_query_tools WHERE id = $1", [arg.id]);
                return sql_tool.rows[0];
            }
            catch (error) {
                console.log(error);
            }
        }),
    },
};
