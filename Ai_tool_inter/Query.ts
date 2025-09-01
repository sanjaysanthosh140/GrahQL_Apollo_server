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

type Ai_sql_tools{
  id:ID!
  name:String!
  description:String!
  officialurl:String!
  pricing:String!
  category:String!
}
#  Drop_Shiping
type AI_marketing_shopify_tools{
  id:ID!
  name:String!
  description:String!
  officialurl:String!
  pricing:String!
  category:String!
}
type AI_marketing_web_design_tools{
  id:ID!
  name:Sting!
  decription:String!
  officialurl:String!
  pricing:String!
  category:Sting!
}

type AI_marketing_seo_tools{
  id:ID!
  name:Sting!
  description:Sting!
  officialurl:Sting!
  pricing:String!
  category:string!
}

type AI_marketing_googleADD_tools{
  id:ID!
  name:String!
  description:String!
  officialurl:String!
  pricing:String!
  category:String!
}

# Education_tools
type AI_edu_video_summarizer_tools{
  id:ID!
  name:String!
  description:String!
  officialurl:String!
  pricing:String!
  category:String!
}
type AI_edu_image_analist_tools{
  id:ID!
  name:string!
  description:String!
  officialurl:String!
  pricing:String!
  category:String!
}
type AI_edu_mindmaping_tools{
  id:ID!
  name:String!
  description:String!
  officialurl:String!
  pricing:String!
  category:String!
}

type AI_edu_knowmanage_tools{
  id:ID!
  name:String!
  description:String!
  officialurl:String!
  pricing:String!
  category:String!
}

# AI_Detection
type AI_Bypasser_tools{
  id:ID!
  name:String!
  description:String!
  officialurl:String!
  pricing:String!
  category:String!
}
type AI_content_detect_tools{
  id:ID!
  name:String!
  description:String!
  officialurl:String!
  pricing:String!
  category:string!
}
type AI_free_detect_tools{
  id:ID!
  name:String!
  description:String!
  officialurl:String!
  pricing:String!
  category:String!
}
type AI_huminator_tools{
 id:ID!
 name:String!
 description:String!
 officialurl:String!
 pricing:String!
 category:String!
}
# video_generation tools
type AI_video_generator_tools{
  id:ID!
  name:String!
  description:String!
  officialurl:String!
  pricing:String!
  category:String!
}
 
 type AI_video_generator_tools{
   id:ID!
   name:String!
   description:String!
   officialurl:String!
   pricing:String!
   category:String!
 }
 type AI_long_videoto_short_tools{
  id:ID!
  name:String!
  description:String!
  officialurl:String!
  pricing:String!
  category:String!
 }
 type AI_ugc_video_tools{
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
  ai_sql_tools: [Ai_sql_tools]
  ai_sql_tool(id:ID!):Ai_sql_tools
  
  #Drop_ship
  ai_shopify_tools:[AI_marketing_shopify_tools]
  ai_shopify_tool(id:ID!):AI_marketing_shopify_tools #,

  ai_web_design_tools:[AI_marketing_web_design_tools]
  ai_web_design_tool(id:ID!):AI_marketing_web_design_tools#,

  ai_seo_tools:[AI_marketing_seo_tools]
  ai_seo_tool(id:ID!):AI_marketing_seo_tools#,

  # Education 
  ai_video_summerizer_tools:[AI_edu_video_summarizer_tools]
  ai_video_summerizer_tool(id:ID!):AI_edu_video_summarizer_tools#,

  ai_image_analist_tools:[AI_edu_image_analist_tools]
  ai_image_analist_tool(id:ID!):AI_edu_image_analist_tools#,
  
  ai_mind_map_tools:[AI_edu_mindmaping_tools]
  ai_mind_map_tool(id:ID!):AI_edu_mindmaping_tools

  ai_know_manage_tools:[AI_edu_knowmanage_tools]
  ai_know_manage_tool(id:ID!):AI_edu_knowmanage_tools

  # Ai_detection
  ai_bypasser_tools:[AI_Bypasser_tools]
  ai_bypasser_tool(id:ID!):AI_Bypasser_tools#,

  ai_content_detector_tools:[AI_content_detect_tools]
  ai_content_detector_tool(id:ID!):AI_content_detect_tools#,
  
  ai_free_detector_tools:[AI_free_detect_tools]
  ai_free_detector_tool(id:ID!):AI_free_detect_tools#,

  ai_humanizor_tools:[AI_huminator_tools]
  ai_humanizor_tool(id:ID!):AI_huminator_tools

  # Video_Generation
  ai_video_creator_tools:[AI_video_generator_tools]
  ai_video_creator_tool(id:ID!):AI_video_generator_tools#,

  ai_video_summerizor_tools:[AI_video_generator_tools]
  ai_video_summerizor_tool(id:ID!):AI_video_generator_tools#,

  ai_long_video_short_tools:[AI_long_videoto_short_tools]
  ai_long_video_short_tool(id:ID!):AI_long_videoto_short_tools#,

  ai_ugc_tools:[AI_ugc_video_tools]
  ai_ugc_tool(id:ID!):AI_ugc_video_tools#,
  
   






}

`;

export const resolvers = {
  Query: {
    ai_web_tools: async (_: any, __: any, context: any) => {
      try {
        console.log("ai tools called");
        if (!context.user) throw new Error("please login first");
        console.log("contex", context);
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

    ai_app_tools: async (_: any, __: any, context: any) => {
      try {
        console.log("ai app tools callsed");
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

    ai_api_tools: async (_: any, __: any, context: any) => {
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

    ai_sql_tools: async (_: any, __: any, context: any) => {
      try {
        console.log("ai sql query is called");
        const sql_tools = await pool.query("SELECT * FROM sql_query_tools");
        return sql_tools.rows;
      } catch (error) {
        console.log(error);
      }
    },

    ai_sql_tool: async (_: any, arg: any) => {
      try {
        const sql_tool = await pool.query(
          "SELECT * FROM sql_query_tools WHERE id = $1",
          [arg.id]
        );
        return sql_tool.rows[0];
      } catch (error) {
        console.log(error);
      }
    }
  }
};
