var database = require("../database/config")

function cadastrarPost(idAluno, titulo, img){
    var instrucao = `
        INSERT INTO post (fkAluno, titulo, img) VALUES 
        (${idAluno}, '${titulo}', '${img}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao)
}

function mostrarPost(idAluno){
    var instrucao = `
        select img from post where fkAluno = ${idAluno}
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao)
}

module.exports = {    
    cadastrarPost,
    mostrarPost
};