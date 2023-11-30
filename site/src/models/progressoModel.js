var database = require("../database/config")

function barraProgresso(idAluno, Progresso){

        var instrucao = `
           INSERT INTO ProgressoAluno (fkAluno, Progresso) VALUES
           (${idAluno}, ${Progresso});
        `;

        // var instrucao = `
        //    UPDATE ProgressoAluno SET Progresso = ${Progresso} WHERE fkAluno = ${idAluno};
        // `;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao)
}

module.exports = {
    barraProgresso
}