var postModel = require("../models/postModel");

function cadastrarPost(req, res){
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var idAluno = req.body.idAlunoServer
    var titulo = req.body.tituloServer;
    var img = req.body.imgServer;

    // Faça as validações dos valores
    if(titulo == undefined){
        res.status(400).send("Seu titulo está undefined!");
    } else if(img == undefined){
        res.status(400).send("Seu img está undefined!");        
    } else if(idAluno == undefined){
        res.status(400).send("Seu idAluno está undefined!");        
    } else{
        // Passe os valores como parâmetro e vá para o arquivo postModel.js
            postModel.cadastrarPost(idAluno, titulo, img)
                    .then(() => {
                        res.status(201).send("postagem cadastrado com sucesso")
                    })
                    .catch(
                        function (erro){
                            console.log(erro);
                        }
                    )
             .catch(
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

function mostrarPost(req, res){
    var idAluno = req.params.idAlunoVar;

    postModel.mostrarPost(idAluno)
    .then((resultado) => {
        res.status(200).json(resultado);
    });
}

module.exports = {
    cadastrarPost,
    mostrarPost
}