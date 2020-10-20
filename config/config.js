require('dotenv').config();
 
module.exports = {

    "development": {
      "username": "fl8oyo3052j42tzb",
      "password": "aup07hemgzhlmt76",
      "database": "z5jp8801aj6yrr8o",
      "host": "un0jueuv2mam78uv.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
      "dialect": "mysql"
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

