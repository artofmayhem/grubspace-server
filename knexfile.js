const pg = require('pg')
//const parse = require("pg-connection-string").parse;

// // Parse the environment variable into an object containing User, Password, Host, Port etc at separate key-value pairs
//const pgconfig = parse(process.env.DATABASE_URL);

// // Add SSL setting to default environment variable on a new key-value pair (the value itself is an object)
//pgconfig.ssl = { rejectUnauthorized: false };

// if (process.env.DATABASE_URL) {
//   pg.defaults.ssl = { rejectUnauthorized: false }
// }
console.log(">>>>>>>>>>>>>>> process.env.DATABASE_URL: ", process.env.DATABASE_URL);
const sharedConfig = {
  client: 'pg',
  migrations: { directory: './data/migrations' },
  seeds: { directory: './data/seeds' },
}

module.exports = {
  development: {
      client: 'sqlite3',
  migrations: { directory: './data/migrations' },
  seeds: { directory: './data/seeds' },
  connection: {
    filename: "./data/development.db3"
  },
  useNullAsDefault: true,
  pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys=ON", done);
      },
    },

  },
  testing: {
    ...sharedConfig,
    connection: process.env.TESTING_DATABASE_URL,
  },
  production: {
    ...sharedConfig,
    connection: {
          connectionString: process.env.DATABASE_URL,
          ssl: {
            rejectUnauthorized: false,
          },
     },
     pool: { min: 2, max: 10 },
  },
  use_env_variable: 'POSTGRES_DB_URL',
  dialect: 'postgres'
}