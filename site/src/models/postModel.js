var database = require("../database/config")

function cadastrarPost(titulo, img){
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);

    // Insira exatamente a query do banco aqui, lembrando da nomenClatura exata nos valores
    // e na ordem de inserção do dados.
    var instrucao = `
        INSERT INTO Aluno (nomeAluno, celular, email, senha) VALUES 
        ('${nome}', ${celular},'${email}', '${senha}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao)
}

module.exports = {    
    cadastrarPost
};