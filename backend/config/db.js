import { neon } from "@neondatabase/serverless";
import dotenv from "dotenv/config";
const { PGUSER, PGPASSWORD, PGHOST, PGDATABASE } = process.env;
const sql = neon(
  `postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?sslmode=require&channel_binding=require`
);
// psql 'postgresql://neondb_owner:npg_V2pyS0wqTQIR@ep-aged-fog-aecnha0r-pooler.c-2.us-east-2.aws.neon.tech/productdb?sslmode=require&channel_binding=require'

export default sql;
