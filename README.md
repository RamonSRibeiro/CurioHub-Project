# 📝 Guia de Perguntas e Respostas

![GitHub](https://img.shields.io/github/license/seu-usuario/seu-repositorio?style=flat-square)
![Node.js](https://img.shields.io/badge/Node.js-v14%2B-green?style=flat-square&logo=node.js)
![MySQL](https://img.shields.io/badge/MySQL-v8.0%2B-blue?style=flat-square&logo=mysql)
![Sequelize](https://img.shields.io/badge/Sequelize-v6%2B-orange?style=flat-square&logo=sequelize)

Este projeto é uma aplicação simples de perguntas e respostas, desenvolvida utilizando **Node.js**, **Express**, **Sequelize** e **MySQL**. Ele permite que os usuários criem perguntas e respostas, que são armazenadas em um banco de dados MySQL.

---

## 🚀 Como Executar o Projeto

Siga os passos abaixo para configurar e executar o projeto em sua máquina.

### 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [MySQL](https://www.mysql.com/) (ou um servidor MySQL remoto)
- [Git](https://git-scm.com/) (para clonar o repositório)

---

### 🔧 Passos de Configuração

1. **Clone o Repositório**

   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
Instale as Dependências

bash
Copy
npm install
Configure o Banco de Dados

Crie um banco de dados no MySQL chamado guiaperguntas:

sql
Copy
CREATE DATABASE guiaperguntas;
No arquivo database.js, configure as credenciais do MySQL:

javascript
Copy
const connection = new Sequelize('guiaperguntas', 'root', 'sua-senha', {
    host: 'localhost',
    dialect: 'mysql'
});
Substitua 'root' e 'sua-senha' pelo usuário e senha do seu MySQL.

Sincronize o Banco de Dados

Execute os seguintes comandos para criar as tabelas no banco de dados:

bash
Copy
node Pergunta.js
node Resposta.js
Inicie o Servidor

bash
Copy
npm start
O servidor estará rodando em http://localhost:3000.

🗂 Estrutura do Projeto
Aqui está uma visão geral da estrutura do projeto:

Copy
📁 seu-repositorio
├── 📄 database.js          # Configuração da conexão com o MySQL
├── 📄 Pergunta.js          # Modelo Sequelize para a tabela "pergunta"
├── 📄 Resposta.js          # Modelo Sequelize para a tabela "respostas"
├── 📄 README.md            # Documentação do projeto
└── 📄 package.json         # Dependências e scripts do projeto
🛠 Tecnologias Utilizadas
Node.js: Ambiente de execução JavaScript.

Express: Framework para construção de APIs.

Sequelize: ORM para interação com o banco de dados MySQL.

MySQL: Banco de dados relacional para armazenamento de dados.

🤝 Como Contribuir
Contribuições são bem-vindas! Siga os passos abaixo:

Faça um fork do projeto.

Crie uma nova branch:

bash
Copy
git checkout -b minha-feature
Faça commit das suas alterações:

bash
Copy
git commit -m 'Adicionando nova feature'
Envie para o repositório remoto:

bash
Copy
git push origin minha-feature
Abra um Pull Request no repositório original.

📄 Licença
Este projeto está licenciado sob a licença MIT. Consulte o arquivo LICENSE para mais detalhes.

