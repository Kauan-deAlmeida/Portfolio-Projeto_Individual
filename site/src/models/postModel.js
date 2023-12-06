var database = require("../database/config")

function cadastrarPost(idAluno, titulo, img){
    var instrucao = `
        INSERT INTO post (fkAluno, titulo, img) VALUES 
        (${idAluno}, '${titulo}', '${img}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao)
}

module.exports = {    
    cadastrarPost
};