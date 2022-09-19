require('dotenv').config();

module.exports = {
  dialect: 'mysql',
  username: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB_NAME,
  host: process.env.MYSQL_DATABASE_HOST,
  port: process.env.MYSQL_DATABASE_PORT
};
