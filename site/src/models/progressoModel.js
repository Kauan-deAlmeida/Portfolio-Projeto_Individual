var database = require("../database/config")

function cadastrarProgresso(idAluno, Progresso){
        var instrucao = `
           INSERT INTO ProgressoAluno (fkAluno, Progresso) VALUES
           (${idAluno}, ${Progresso});
        `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao)
}

// Atualizando a barra de progresso do aluno
function atualizarProgresso(idAluno, progresso){
    var instrucao = `
        UPDATE progressoAluno set progresso = ${progresso} where fkAluno = ${idAluno}
    `;
    console.log("Exercutando a intrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function mostrarBarra(idAluno){
    var instrucao = `
        select progresso from progressoAluno where fkAluno = ${idAluno}
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao)
}

module.exports = {
    cadastrarProgresso,
    atualizarProgresso,
    mostrarBarra
}