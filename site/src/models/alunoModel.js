var database = require("../database/config")

function autenticar(email, senha){
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT ra, nomeAluno, celular, email, fkCurso FROM aluno WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

//  Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(ra, nome, celular, email, senha, fkCurso, progresso){
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);

    // Insira exatamente a query do banco aqui, lembrando da nomenClatura exata nos valores
    // e na ordem de inserção do dados.
    var instrucaoAluno = `
        INSERT INTO Aluno (ra, nomeAluno, celular, email, senha, fkCurso) VALUES 
        (${ra}, '${nome}', '${celular}','${email}', '${senha}', ${fkCurso});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoAluno);
    return database.executar(instrucaoAluno)
    .then(function (alunoResultado){
        var ra = alunoResultado.insertId;
        barraProgresso(ra, progresso)
    });
}

function barraProgresso(ra, progresso){    
    var instrucao = `
        INSERT INTO ProgressoAluno (fkAluno, Progresso) VALUES
        (${ra}, ${progresso});
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao)
}

module.exports = {
    autenticar,
    cadastrar,
    barraProgresso
};