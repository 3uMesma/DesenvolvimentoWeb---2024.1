const { Client } = require("pg");

const connectionString = `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
const client = new Client({
    connectionString,
    ssl: {
      rejectUnauthorized: false, // Esta opção pode ser ajustada conforme necessário
    },
  });

module.exports = client;
