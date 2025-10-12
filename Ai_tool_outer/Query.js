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
const errs = require("./custom_Error/err");
// const pool = new Pool({
// connectionString:
// "postgresql://neondb_owner:npg_dFOvUJ0m7oVr@ep-dawn-sun-a1yipn4i-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require",
// ssl: true,
// });
let message = false;
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
  name:String!
  description:String!
  officialurl:String!
  pricing:String!
  category:String!
}

type AI_marketing_seo_tools{
  id:ID!
  name:String!
  description:String!
  officialurl:String!
  pricing:String!
  category:String!
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
  name:String!
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
  category:String!
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
 category:String!
 pricing:String!
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
 type Ai_frv_tools{
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
  
  ai_google_add_tools:[AI_marketing_googleADD_tools]
  ai_google_add_tool(id:ID!):AI_marketing_googleADD_tools#

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
  

  # frv_cart
   frv_toolslist:[Ai_frv_tools]
    
  }

`;
exports.resolvers = {
    Query: {
        // software_developing_ai_tools
        ai_web_tools: (_, __, context) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                console.log("ai tools called");
                // if (!context.user) {
                // }
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
        ai_app_tools: (_, __, context) => __awaiter(void 0, void 0, void 0, function* () {
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
                // console.log(app_tool);
                return app_tool.rows[0];
            }
            catch (error) {
                console.log(error);
            }
        }),
        ai_api_tools: (_, __, context) => __awaiter(void 0, void 0, void 0, function* () {
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
        ai_sql_tools: (_, __, context) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                if (!context.user.isAuthenticate) {
                    throw new Error("login first");
                }
                console.log("context", context.user.user_id);
                console.log("ai sql query is called");
                const sql_tools = yield pool.query("SELECT * FROM sql_query_tools");
                console.log("here worked from api");
                return sql_tools.rows;
            }
            catch (error) {
                console.log(error);
                throw error;
            }
        }),
        ai_sql_tool: (_, arg) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const sql_tool = yield pool.query("SELECT * FROM sql_query_tools WHERE id = $1", [arg.id]);
                return sql_tool.rows[0];
            }
            catch (error) {
                console.log(error);
            }
        }),
        // frv_toolslist: async (_: any, __: any, context: any) => {
        //  
        // try {
        //let pin_tool
        // console.log("function is called for frv_tools");
        // console.log(context.user.user_id);
        // let id = context.user.user_id;
        // console.log(id._id)
        // const response = await fetch(
        // `https://myapp-server-side-rafv.onrender.com/user_side/retrive_wish/${id}`
        // );
        // const data = await response.json();
        // const user_frv_tools: any = await retrive_Pin_tools(data);
        // console.log("##", user_frv_tools);
        // ADD THIS DEBUG CODE TO FIND THE NULL VALUE
        // user_frv_tools.forEach(
        // (tool: { name: null | undefined }, index: any) => {
        // if (!tool || tool.name === null || tool.name === undefined) {
        // console.error(`❌ NULL TOOL FOUND at index ${index}:`, tool);
        // }
        // }
        // );
        // Filter out any null values before returning
        // const filteredTools = user_frv_tools.filter(
        // (tool: { name: null | undefined }) =>
        // tool && tool.name !== null && tool.name !== undefined
        // );
        // console.log("Filtered tools count:", filteredTools.length);
        // return filteredTools;
        // } catch (error) {
        // console.log(error);
        // }
        // },
        ////////////////////
        // Drop_ship
        ai_shopify_tools: (_, __, context) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                console.log("marketing function called");
                const shopify_tools = yield pool.query("SELECT * FROM ai_marketing_tool");
                return shopify_tools.rows;
            }
            catch (error) {
                console.log(error);
            }
        }),
        // gap fetching $id
        ai_web_design_tool: (_, __, context) => __awaiter(void 0, void 0, void 0, function* () {
            console.log("working id");
        }),
        ai_web_design_tools: (_, __, context) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                console.log("working on web_design");
                const web_design = yield pool.query("SELECT * FROM ai_marketing_web_design");
                return web_design.rows;
            }
            catch (error) {
                console.log(error);
            }
        }),
        ai_seo_tools: (_, __, context) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                console.log("working on seo");
                const seo_tools = yield pool.query("SELECT * FROM ai_marketing_seo_tools");
                return seo_tools.rows;
            }
            catch (error) {
                console.log(error);
            }
        }),
        ai_google_add_tools: (_, __, context) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                console.log("working on google add");
                const googleadd = yield pool.query("SELECT * FROM ai_googleadd");
                return googleadd.rows;
            }
            catch (error) {
                console.log(error);
            }
        }),
        // ai_detectors
        ai_free_detector_tools: (_, __, context) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const ai_free_tool = yield pool.query("SELECT * FROM ai_free_detector_tool");
                return ai_free_tool.rows;
            }
            catch (error) {
                console.log(error);
            }
        }),
        ai_bypasser_tools: (_, __, context) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const ai_bypasser = yield pool.query("SELECT * FROM ai_detector_bypass_tool");
                return ai_bypasser.rows;
            }
            catch (error) {
                console.log(error);
            }
        }),
        ai_content_detector_tools: (_, __, context) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const ai_contetn_detet = yield pool.query("SELECT * FROM ai_content_detector_tool");
                return ai_contetn_detet.rows;
            }
            catch (error) {
                console.log(error);
            }
        }),
        ai_humanizor_tools: (_, __, context) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const ai_humanizor = yield pool.query("SELECT * FROM ai_humanizor_tool");
                return ai_humanizor.rows;
            }
            catch (error) {
                console.log(error);
            }
        }),
        // education
        ai_know_manage_tools: (_, __, context) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const know_mange = yield pool.query("SELECT * FROM ai_edu_know_mange_tool");
                return know_mange.rows;
            }
            catch (error) {
                console.log(error);
            }
        }),
        ai_image_analist_tools: (_, __, contect) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const img_analist = yield pool.query("SELECT * FROM ai_edu_img_tool");
                return img_analist.rows;
            }
            catch (error) {
                console.log(error);
            }
        }),
        ai_mind_map_tools: (_, __, context) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const mind_map = yield pool.query("SELECT * FROM ai_edu_mind_maping");
                return mind_map.rows;
            }
            catch (error) {
                console.log(error);
            }
        }),
        ai_video_summerizer_tools: (_, __, context) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const video_summerizer = yield pool.query("SELECT * FROM ai_edu_video_tool");
                return video_summerizer.rows;
            }
            catch (error) {
                console.log(error);
            }
        }),
        ////////videos
        ai_video_creator_tools: (_, __, context) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const video_creator = yield pool.query("SELECT * FROM ai_video_generator_tool");
                return video_creator.rows;
            }
            catch (error) {
                console.log(error);
            }
        }),
        ai_video_summerizor_tools: (_, __, context) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const ai_video_tools = yield pool.query("SELECT * FROM ai_video_summarizer_tool");
                return ai_video_tools.rows;
            }
            catch (error) {
                console.log(error);
            }
        }),
        ai_long_video_short_tools: (_, __, context) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const long_to_short = yield pool.query("SELECT * FROM ai_long_videotoshort_tool");
                return long_to_short.rows;
            }
            catch (error) {
                console.log(error);
            }
        }),
        ai_ugc_tools: (_, __, context) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const ugc_video_tool = yield pool.query("SELECT * FROM ai_ugc_video_tool");
                return ugc_video_tool.rows;
            }
            catch (error) {
                console.log(error);
            }
        }),
    },
};
