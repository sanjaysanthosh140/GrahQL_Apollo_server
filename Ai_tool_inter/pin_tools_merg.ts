const pool = require("./db/postgresQL");
export const retrive_Pin_tools = async (category: any) => {
  return new Promise(async (resolve: any, reject: any) => {
    try {
      //category.result.map((data: any) => {
      //console.log(category);
      //});
      //let pinned_tool_list: frv_tools_user[] = [];
      const user_frv_tools = await Promise.all(
        category.result.map(async (item: any) => {
          ////aitool[i]
          // console.log(item.category)
          switch (item.category) {
            case "ai_sql_tools": {
              const query = "SELECT * FROM sql_query_tools WHERE id = $1;";
              let id = item.toolId;
              const result = await pool.query(query, [id]);
              return result.rows[0];

              break;
            }
            case "ai_app_tools": {
              const query = "SELECT * FROM api_app_tools WHERE id = $1;";
              let id = item.toolId;
              const result = await pool.query(query, [id]);
              return result.rows[0];
              break;
            }
            case "ai_api_tools": {
              const query = "SELECT * FROM api_app_tools WHERE id = $1";
              let id = item.toolId;
              const result = await pool.query(query, [id]);
              return result.rows[0];

              break;
            }
            case "ai_web_tools": {
              const query = "SELECT * FROM aitool WHERE id = $1;";
              let id = item.toolId;
              const result = await pool.query(query, [id]);
              return result.rows[0];

              break;
            }
            case "ai_web_design_tools": {
              const query =
                "SELECT * FROM ai_marketing_web_design WHERE id = $1;";
              let id = item.toolId;
              const result = await pool.query(query, [id]);
              return result.rows[0];

              break;
            }
            case "ai_google_add_tools": {
              const query = "SELECT * FROM ai_googleadd WHERE id = $1;";
              let id = item.toolId;
              const result = await pool.query(query, [id]);
              return result.rows[0];

              break;
            }
            case "ai_seo_tools": {
              const query =
                "SELECT * FROM ai_marketing_seo_tools WHERE id = $1;";
              let id = item.toolId;
              const result = await pool.query(query, [id]);
              return result.rows[0];

              break;
            }
            case "ai_shopify_tools": {
              const query = "SELECT * FROM ai_marketing_tool WHERE id = $1;";
              let id = item.toolId;
              const result = await pool.query(query, [id]);
              return result.rows[0];
              break;
            }
            case "ai_free_detector_tools": {
              const query =
                "SELECT * FROM ai_free_detector_tool WHERE id = $1;";
              let id = item.toolId;
              const result = await pool.query(query, [id]);
              return result.rows[0];

              break;
            }
            case "ai_bypasser_tools": {
              const query =
                "SELECT * FROM ai_detector_bypass_tool WHERE id = $1;";
              let id = item.toolId;
              const result = await pool.query(query, [id]);
              return result.rows[0];

              break;
            }
            case "ai_content_detector_tools": {
              const query =
                "SELECT * FROM ai_content_detector_tool WHERE id = $1;";
              let id = item.toolId;
              const result = await pool.query(query, [id]);
              return result.rows[0];

              break;
            }
            case "ai_humanizor_tools": {
              const query = "SELECT * FROM ai_humanizor_tool WHERE id = $1;";
              let id = item.toolId;
              const result = await pool.query(query, [id]);
              return result.rows[0];
              break;
            }

            case "ai_know_manage_tools": {
              const query =
                "SELECT * FROM ai_edu_know_mange_tool WHERE id = $1";
              let id = item.toolId;
              const result = await pool.query(query, [id]);
              return result.rows[0];
              break;
            }

            case "ai_video_summerizer_tools": {
              const query = "SELECT * FROM ai_edu_video_tool WHERE id = $1";
              let id = item.toolId;
              const result = await pool.query(query, [id]);
              return result.rows[0];

              break;
            }
            case "ai_image_analist_tools": {
              const query = "SELECT * FROM ai_edu_img_tool WHERE id = $1";
              let id = item.toolId;
              const result = await pool.query(query, [id]);
              return result.rows[0];
              break;
            }

            case "ai_mind_map_tools": {
              const query = "SELECT * FROM ai_edu_mind_maping WHERE id = $1";
              let id = item.toolId;
              const result = await pool.query(query, [id]);

              return result.rows[0];
              break;
            }
            case "ai_video_creator_tools": {
              const query =
                "SELECT * FROM ai_video_generator_tool WHERE id = $1;";
              let id = item.toolId;
              const result = await pool.query(query, [id]);
              return result.rows[0];

              break;
            }
            case "ai_long_video_short_tools": {
              const query =
                "SELECT * FROM ai_long_videotoshort_tool WHERE id = $1";
              let id = item.toolId;
              const result = await pool.query(query, [id]);
              return result.rows[0];
              break;
            }
            case "ai_ugc_tools": {
              const query = "SELECT * FROM ai_ugc_video_tool WHERE id = $1";
              let id = item.toolId;
              const result = await pool.query(query, [id]);
              return result.rows[0];

              break;
            }

            case "ai_video_summerizor_tools": {
              const query =
                "SELECT * FROM ai_video_summarizer_tool WHERE id = $1";
              let id = item.toolId;
              const result = await pool.query(query, [id]);
              return result.rows[0];

              break;
            }
            default: {
              console.log("not working");
              break;
            }
          }
        })
      );
      //console.log(user_frv_tools);

      
      //console.log(user_frv_tools)
      resolve(user_frv_tools);
      //if (filtertools) {
      //resolve(filtertools);
      //}
      if (!user_frv_tools) throw new reject("not value");
    } catch (error) {
      console.log(error);
    }
  });
};
