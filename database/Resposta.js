const Sequelize = require("sequelize");
const connection = require("./database");
const Pergunta = require("./Pergunta");

const Resposta = connection.define("respostas", {
    corpo:{
        type:Sequelize.TEXT,
        allowNull:true 
    },   
    perguntaId:{
        type:Sequelize.INTEGER,
        allowNull:false
    }
});

Resposta.sync({force:false});
module.exports = Resposta;