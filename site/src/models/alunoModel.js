var database = require("../database/config")

function autenticar(email, senha){
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT id, nome, cpf, email, fkCurso as empresaId FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

//  Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(nome, cpf, celular, email, senha, fkCurso){
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);

    // Insira exatamente a query do banco aqui, lembrando da nomenClatura exata nos valores
    // e na ordem de inserção do dados.
    var instrucao = `
        INSERT INTO Aluno (nomeAluno, cpf, celular, email, senha, fkCurso) VALUES 
        ('${nome}', '${cpf}', '${celular}', '${email}', '${senha}', '${fkCurso}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    autenticar,
    cadastrar
};