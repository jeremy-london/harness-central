const config = {
  NODE_ENV: process.env.NODE_ENV || 'development',

  DATABASE_NAME: process.env.DATABASE_NAME || 'master',
  DATABASE_HOST: process.env.DATABASE_HOST || 'localhost',
  DATABASE_USERNAME: process.env.DATABASE_USERNAME || 'SA',
  DATABASE_PASSWORD: process.env.DATABASE_PASSWORD || 'yourStrong(!)Password',
  DATABASE_PORT: process.env.DATABASE_PORT || 1433,
  DATABASE_DIALECT: process.env.DATABASE_DIALECT || 'mssql',

  graphqlEndpoint: '/',
  port: 8000,
  graphql: {
    ide: true,
    pretty: true,
  },
};

module.exports = config;
