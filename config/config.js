require('dotenv').config();

module.exports = {

    "development": {
      "username": process.env.DB_USERNAME1,
      "password": process.env.DB_PASSWORD1,
      "database": process.env.DB_DATABASE1,
      "host": process.env.DB_HOST1,
      "dialect": process.env.DB_DIALECT1
    },
    "test": {
      "username": process.env.DB_USERNAME,
      "password": process.env.DB_PASSWORD,
      "database": process.env.DB_DATABASE,
      "host": process.env.DB_HOST,
      "dialect": process.env.DB_DIALECT
    },
    "production": {
      "username": process.env.DB_USERNAME,
      "password": process.env.DB_PASSWORD,
      "database": process.env.DB_DATABASE,
      "host": process.env.DB_HOST,
      "dialect": process.env.DB_DIALECT
    } 
}

