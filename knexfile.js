// Update with your config settings.
require("dotenv").config();

const pg = require("pg");


const sharedConfig = {
  client: "pg",
  migrations: { directory: "./data/migrations" },
  seeds: { directory: "./data/seeds" },
};

module.exports = {
  development: {
    // ...sharedConfig,
    client: "sqlite3",
    migrations: { directory: "./data/migrations" },
    seeds: { directory: "./data/seeds" },
    connection: {
      filename: "./data/development.db3",
    },
    useNullAsDefault: true,
    // pool: {
    //   afterCreate: (conn, done) => {
    //     conn.run("PRAGMA foreign_keys=ON", done);
    //   },
    // },
  },
  testing: {
    ...sharedConfig,
    connection: process.env.TEST_DATABASE_URL,
  },

  production: {
    ...sharedConfig,
    connection: {
      connectionString: process.env.DATABASE_URL ,
      ssl: { rejectUnauthorized: false },
    },
    pool: {
      min: 2,
      max: 10,
    },
  },
};
