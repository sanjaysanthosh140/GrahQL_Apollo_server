import { Pool } from "pg";
// const marketing = [
  // 
    // 
  // 
// ];

let pool: any;
export const connection = async () => {
  try {
    pool = new Pool({
      connectionString:
        "postgresql://neondb_owner:npg_dFOvUJ0m7oVr@ep-dawn-sun-a1yipn4i-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require",
      ssl: true,
    });

    pool.query("SELECT NOW()", (err: any, res: any) => {
      err ? console.log(err) : console.log(res.rows);
    });

    //console.log("pool from postgres",pool);
    console.log("this is connection");
    // marketing.map(async (item) => {
      // await pool.query(
        // `INSERT INTO ai_ugc_video_tool(name,description,officialurl,pricing,category)VALUES($1,$2,$3,$4,$5)`,
        // [
          // item.name,
          // item.description,
          // item.officialUrl,
          // item.pricing,
          // item.category,
        // ],
        // (err: any, res: any) => {
          // if (err) {
            // console.log(err);
          // }
          //  else {
          // console.log("data inserted successfully");
          // }
        // }
      // );
    // });
  } catch (error) {
    console.log(error);
  }
  module.exports = pool;
};
connection();
