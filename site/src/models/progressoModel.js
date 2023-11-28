var database = require("../database/config")

function buscarPorProgresso(progresso){
    var query = `select ProgressoAluno from ${progresso};`
    return database.executar(query);
}

function mostrarProgresso(progresso){
    var instrucao = `select ProgressoAluno from ${progresso};`
    console.log(exibirProgresso);
    return database.executar(instrucao)
}

function atualizarProgresso(ra, progresso){
    var instrucao = `
        UPDATE ProgressoAluno set progresso = ${progresso} where fkAluno = ${ra};
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao)
}

module.exports = {
    atualizarProgresso,
    mostrarProgresso
}