const { Client } = require('pg');

const client = new Client({
  host: process.env.DB_LOCAL,
  user: process.env.DB_USER,
  port: process.env.DB_PORT,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});
client.connect().then(() => console.log('DB connection succesful'));
