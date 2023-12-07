var alunoModel = require("../models/alunoModel");
var progressoModel = require("../models/progressoModel");
var avaliarModel = require("../models/avaliarModel");

function buscarPorId(req, res){
    var idAluno = req.params.idAluno;

    alunoModel.buscarPorId(idAluno).then((resultado) => {
        res.status(200).json(resultado);
    })
}

function autenticar(req, res){
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if(email == undefined){
        res.status(400).send("Seu email está undefined!");
    } else if(senha == undefined){
        res.status(400).send("Sua senha está indefinida!");
    } else{
        alunoModel.autenticar(email, senha)
            .then(
                function (resultAutenticar){
                    console.log(`Resultados encontrados; ${JSON.stringify(resultAutenticar)}`); // transforma JSON em String
                        if (resultAutenticar.length == 1){
                            console.log(resultAutenticar);

                            alunoModel.buscarPorId(resultAutenticar[0].ra)
                                .then((resultadoCurso) => {
                                    if(resultadoCurso.length > 0){
                                    res.json({
                                        ra: resultAutenticar[0].ra,
                                        nomeAluno: resultAutenticar[0].nomeAluno,
                                        celular: resultAutenticar[0].celular,
                                        email: resultAutenticar[0].email,
                                        senha: resultAutenticar[0].senha,
                                        progresso: resultAutenticar[0].progresso,
                                        nota: resultAutenticar[0].nota,
                                    });
                                } else{
                                    res.status(204).json({ curso:[]});
                                }
                            })
                    } else if(resultAutenticar.length == 0){
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro){
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500),json(erro.sqlMessage);
                }
            );
    }
}

function cadastrar(req, res){
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var celular = req.body.celularServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    // Faça as validações dos valores
    if(nome == undefined){
        res.status(400).send("Seu nome está undefined!");
    } else if(celular == undefined){
        res.status(400).send("Seu celular está undefined!");        
    } else if(email == undefined){
        res.status(400).send("Seu email está undefined!");        
    } else if(senha == undefined){
        res.status(400).send("Seu senha está undefined!");        
    } else{
        // Passe os valores como parâmetro e vá para o arquivo AlunoModel.js
        alunoModel.cadastrar(nome, celular, email, senha)
            .then(
                function (resultado) {
                    var ultimoIdAluno = resultado.insertId

                    progressoModel.cadastrarProgresso(ultimoIdAluno, 0)
                    .then(() => {
                        res.status(201).send("Progresso cadastrado com sucesso")
                    })
                    .catch(
                        function (erro){
                            console.log(erro);
                        }
                    )

                    avaliarModel.cadastrarAvaliacao(ultimoIdAluno, 0)
                    .then(() => {
                        res.status(201).send("Avaliacao cadastrada com sucesso")
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
    buscarPorId,
    autenticar,
    cadastrar,
}