const Sequelize = require('sequelize');

const connection = new Sequelize('guiaperguntas', 'root', 'disaster13666',{
    host:'localhost', 
    dialect: 'mysql'
});

module.exports = connection;