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
exports.connection = void 0;
const pg_1 = require("pg");
// const marketing = [
// 
// 
// 
// ];
let pool;
const connection = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        pool = new pg_1.Pool({
            connectionString: "postgresql://neondb_owner:npg_dFOvUJ0m7oVr@ep-dawn-sun-a1yipn4i-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require",
            ssl: true,
        });
        pool.query("SELECT NOW()", (err, res) => {
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
    }
    catch (error) {
        console.log(error);
    }
    module.exports = pool;
});
exports.connection = connection;
(0, exports.connection)();
