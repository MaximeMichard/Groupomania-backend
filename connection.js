const Sequelize= require ('sequelize');
require('dotenv').config()

//Connection Base de donnée //
const sequelize = new Sequelize('	z5jp8801aj6yrr8o', 'fl8oyo3052j42tzb', 'aup07hemgzhlmt76', {
    host: 'un0jueuv2mam78uv.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306',
    dialect: 'mysql',
    logging: false
  })
sequelize.authenticate()
.then(()=> console.log('Connection BDD réussie! '))
.catch(err => console.log('Error'+ err));

module.exports= sequelize;
global.sequelize= sequelize; 

