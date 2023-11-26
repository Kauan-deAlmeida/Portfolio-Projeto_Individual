var alunoModel = require("../models/alunoModel");
var cursoModel = require("../models/cursoModel");

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

                            cursoModel.buscarPorId(resultAutenticar[0].fkCurso)
                                .then((resultadoCurso) => {
                                    if(resultadoCurso.length > 0){
                                    res.json({
                                        idAluno: resultAutenticar[0].idAluno,
                                        nomeAluno: resultAutenticar[0].nomeAluno,
                                        celular: resultAutenticar[0].celular,
                                        email: resultAutenticar[0].email,
                                        senha: resultAutenticar[0].senha,
                                        fkCurso: resultAutenticar[0].fkCurso
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
    var fkCurso = req.body.fkCursoServer;

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
        alunoModel.cadastrar(nome, celular, email, senha, fkCurso)
            .then(
                function (resultado) {
                    res.json(resultado);
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
    autenticar,
    cadastrar
}