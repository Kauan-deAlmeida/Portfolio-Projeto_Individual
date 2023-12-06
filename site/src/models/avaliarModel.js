var database = require("../database/config")

function cadastrarAvaliacao(idAluno, nota){

    var instrucao = `
        INSERT INTO avaliacao (fkAluno, nota) VALUES 
        (${idAluno}, ${nota});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao)
}

module.exports = {
    cadastrarAvaliacao
};