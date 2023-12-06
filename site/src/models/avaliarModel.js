var database = require("../database/config")

function cadastrarAvaliacao(idAluno, nota){
    var instrucao = `
        INSERT INTO avaliacao (fkAluno, nota) VALUES 
        (${idAluno}, ${nota});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao)
}

function atualizarAvaliacao(idAluno, nota){
    var instrucao = `
        UPDATE avaliacao set nota = ${nota} where fkAluno = ${idAluno}
    `;
    console.log("Exercutando a intrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function mostrarAvaliacao(idAluno){
    var instrucao = `
        select nota from avaliacao where fkAluno = ${idAluno}
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao)
}

module.exports = {
    cadastrarAvaliacao,
    atualizarAvaliacao,
    mostrarAvaliacao
};