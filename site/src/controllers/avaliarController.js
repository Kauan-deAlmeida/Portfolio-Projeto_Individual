var avaliacaoModel = require("../models/avaliarModel");

function cadastrarAvaliacao(req, res){
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var fkAluno = req.body.fkAlunoServer;
    var nota = req.body.notaServer;

    // Faça as validações dos valores
    if(fkAluno == undefined){
        res.status(400).send("Seu id do Aluno está undefined!");
    } else if(nota == undefined){
        res.status(400).send("Sua nota está undefined!");        
    } else{
        // Passe os valores como parâmetro e vá para o arquivo avaliacaoModel.js
        avaliacaoModel.cadastrar(fkAluno, nota)
            .then(
                function (resultado) {
                    var ultimoIdavaliacao = resultado.insertId

                    progressoModel.cadastrarProgresso(ultimoIdavaliacao, 0)
                    .then(() => {
                        res.status(201).send("avaliacao cadastrado com sucesso")
                    })
                    .catch(
                        function (erro){
                            console.log(erro);
                        }
                    )
                }
            ) .catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(3000).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    cadastrarAvaliacao
}