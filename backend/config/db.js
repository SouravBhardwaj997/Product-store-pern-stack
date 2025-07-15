import { neon } from "@neondatabase/serverless";
import "dotenv/config";
const { PGUSER, PGPASSWORD, PGHOST, PGDATABASE } = process.env;
const sql = neon(
  `postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?sslmode=require&channel_binding=require`
);

export default sql;
