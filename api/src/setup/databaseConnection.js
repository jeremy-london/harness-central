// Imports
import { Sequelize } from 'sequelize';

// App Imports
import config from '../config/env';

// Create new database connection
const connection = new Sequelize(config.DATABASE_NAME, config.DATABASE_USERNAME, config.DATABASE_PASSWORD, {
  host: config.DATABASE_HOST,
  dialect: config.DATABASE_DIALECT,
  logging: false,
  operatorsAliases: Sequelize.Op,
});

// Test connection
console.info('SETUP - Connecting database...');

connection
  .authenticate()
  .then(() => {
    console.info('INFO - Database connected.');
  })
  .catch(err => {
    console.error('ERROR - Unable to connect to the database:', err);
  });

export default connection;
