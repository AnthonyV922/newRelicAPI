const env = process.env;

const config = {
  db: {
    host: "localhost",
    user: 'postgres',
    port: 5432,
    password: "Suuchi",
    database: "newRelicDB",
    dialect: "postgres",
  },
  listPerPage: env.LIST_PER_PAGE || 10,
};

module.exports = config;

