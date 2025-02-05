Guia de Perguntas e Respostas
Este projeto é uma aplicação simples de perguntas e respostas, desenvolvida utilizando Node.js, Express, Sequelize e MySQL. Ele permite que os usuários criem perguntas e respostas, que são armazenadas em um banco de dados MySQL.

Pré-requisitos
Antes de começar, certifique-se de ter instalado em sua máquina:

Node.js (versão 14 ou superior)

MySQL (ou um servidor MySQL remoto)

Git (para clonar o repositório)

Como Configurar o Projeto
1. Clonar o Repositório
Primeiro, clone o repositório para o seu ambiente local:

bash
Copy
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
2. Instalar as Dependências
Instale as dependências do projeto utilizando o npm (Node Package Manager):

bash
Copy
npm install
3. Configurar o Banco de Dados
Crie um banco de dados no MySQL:

Acesse o MySQL (via linha de comando ou uma ferramenta como phpMyAdmin).

Crie um banco de dados chamado guiaperguntas:

sql
Copy
CREATE DATABASE guiaperguntas;
Configure as credenciais do banco de dados:

No arquivo database.js, verifique se as credenciais do MySQL estão corretas:

javascript
Copy
const connection = new Sequelize('guiaperguntas', 'root', 'sua-senha', {
    host: 'localhost',
    dialect: 'mysql'
});
Substitua 'root' e 'sua-senha' pelo usuário e senha do seu MySQL.

4. Sincronizar o Banco de Dados
O Sequelize criará automaticamente as tabelas pergunta e respostas no banco de dados. Para sincronizar, execute o seguinte comando:

bash
Copy
node Pergunta.js
node Resposta.js
Isso criará as tabelas no banco de dados guiaperguntas.

5. Executar o Projeto
Para iniciar o servidor, execute:

bash
Copy
npm start
O servidor estará rodando em http://localhost:3000 (ou na porta configurada).

Estrutura do Projeto
database.js: Configuração da conexão com o banco de dados MySQL usando Sequelize.

Pergunta.js: Modelo Sequelize para a tabela pergunta, que armazena as perguntas dos usuários.

Resposta.js: Modelo Sequelize para a tabela respostas, que armazena as respostas relacionadas às perguntas.

Como Contribuir
Faça um fork do projeto.

Crie uma nova branch com sua feature ou correção:

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

Licença
Este projeto está licenciado sob a licença MIT. Consulte o arquivo LICENSE para mais detalhes.
