const Sequelize = require("sequelize");
const connection = require("./database");

const Pergunta = connection.define("pergunta", {
    titulo: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    descricao: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
});

Pergunta.sync({ force: false }) // Cria a tabela, se ainda não existir
    .then(() => {
        console.log("Tabela pergunta criada/sincronizada com sucesso!");
    })
    .catch((error) => {
        console.error("Erro ao sincronizar a tabela pergunta:", error);
    });

module.exports = Pergunta;
