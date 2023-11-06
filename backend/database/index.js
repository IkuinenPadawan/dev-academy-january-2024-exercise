const dotenv = require('dotenv');
const { Pool } = require('pg');

dotenv.config({ path: './config.env' });

const pool = new Pool({
  host: process.env.DB_LOCAL,
  user: process.env.DB_USER,
  port: process.env.DB_PORT,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  max: 10,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});
