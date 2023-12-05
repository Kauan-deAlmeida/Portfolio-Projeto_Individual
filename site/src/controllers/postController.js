var postModel = require("../models/postModel");
var progressoModel = require("../models/progressoModel");

function cadastrarPost(req, res){
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var titulo = req.body.tituloServer;
    var img = req.body.imgServer;

    // Faça as validações dos valores
    if(titulo == undefined){
        res.status(400).send("Seu titulo está undefined!");
    } else if(img == undefined){
        res.status(400).send("Seu img está undefined!");        
    } else{
        // Passe os valores como parâmetro e vá para o arquivo postModel.js
        postModel.cadastrar(titulo, img)
            .then(
                function (resultado) {
                    var ultimoIdpost = resultado.insertId

                    progressoModel.cadastrarProgresso(ultimoIdpost, 0)
                    .then(() => {
                        res.status(201).send("post cadastrado com sucesso")
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
    cadastrarPost
}