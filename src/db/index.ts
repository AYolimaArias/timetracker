import pg from "pg";
const { Pool } = pg;

const dbConfig = {
  user: "postgres",
  host: "127.0.0.1",
  database: "timetracker",
  password: "postgres",
  port: 5432,
};

const pool = new Pool(dbConfig);

export const query = (text: string, params?: string[]) => {
  return pool.query(text, params);
};
