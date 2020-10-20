require('dotenv').config();

module.exports = {

    "development": {
      "username": process.env.DB_USERNAMES,
      "password": process.env.DB_PASSWORDS,
      "database": process.env.DB_DATABASES,
      "host": process.env.DB_HOSTS,
      "dialect": process.env.DB_DIALECTS
    },
    "test": {
      "username": process.env.DB_USERNAMES,
      "password": process.env.DB_PASSWORDS,
      "database": process.env.DB_DATABASES,
      "host": process.env.DB_HOSTS,
      "dialect": process.env.DB_DIALECTS
    },
    "production": {
      "username": process.env.DB_USERNAMES,
      "password": process.env.DB_PASSWORDS,
      "database": process.env.DB_DATABASES,
      "host": process.env.DB_HOSTS,
      "dialect": process.env.DB_DIALECTS
    } 
}

