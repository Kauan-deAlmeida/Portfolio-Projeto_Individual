var database = require("../database/config")

function cadastrarAvaliacao(fkAluno, nota){
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", fkAluno, nota);

    var instrucao = `
        INSERT INTO avaliacao (fkAluno, nota) VALUES 
        (${fkAluno}, ${nota});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao)
}

module.exports = {
    cadastrarAvaliacao
};