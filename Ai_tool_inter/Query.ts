import { Pool } from "pg";
const pool = require("./db/postgresQL");
// const pool = new Pool({
// connectionString:
// "postgresql://neondb_owner:npg_dFOvUJ0m7oVr@ep-dawn-sun-a1yipn4i-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require",
// ssl: true,
// });
export const typeDefs = `#graphql 

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

export const resolvers = {
  Query: {
    ai_web_tools: async (_: any, __: any, context: any) => {
      try {
        if (!context.user) throw new Error("please login first");
        console.log(context);
        const web_tools = await pool.query("SELECT * FROM aitool");
        return web_tools.rows;
      } catch (error) {
        console.log(error);
      }
    },

    ai_web_tool: async (_: any, arg: any) => {
      try {
        const web_tool = await pool.query(
          "SELECT * FROM aitool WHERE id = $1",
          [arg.id]
        );
        console.log(web_tool.rows[0]);
        return web_tool.rows[0];
      } catch (error) {
        console.log(error);
      }
    },

    ai_app_tools: async () => {
      try {
        const app_tools = await pool.query("SELECT * FROM ai_app_tools");
        return app_tools.rows;
      } catch (error) {
        console.log(error);
      }
    },

    ai_app_tool: async (_: any, arg: any) => {
      try {
        const app_tool = await pool.query(
          "SELECT * FROM ai_app_tools WHERE id = $1",
          [arg.id]
        );
        console.log(app_tool);
        return app_tool.rows[0];
      } catch (error) {
        console.log(error);
      }
    },

    ai_api_tools: async () => {
      try {
        const api_tools = await pool.query("SELECT * FROM api_app_tools");
        return api_tools.rows;
      } catch (error) {
        console.log(error);
      }
    },

    ai_api_tool: async (_: any, arg: any) => {
      try {
        const api_tool = await pool.query(
          "SELECT * FROM api_app_tools WHERE id = $1",
          [arg.id]
        );
        return api_tool.rows[0];
      } catch (error) {
        console.log(error);
      }
    },

    ai_Sqlquery_tools: async () => {
      try {
        const sql_tools = await pool.query("SELECT * FROM sql_query_tools");
        return sql_tools.rows;
      } catch (error) {
        console.log(error);
      }
    },

    ai_Sqlquery_tool: async (_: any, arg: any) => {
      try {
        const sql_tool = await pool.query(
          "SELECT * FROM sql_query_tools WHERE id = $1",
          [arg.id]
        );
        return sql_tool.rows[0];
      } catch (error) {
        console.log(error);
      }
    },
  },
};
