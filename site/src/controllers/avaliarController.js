var avaliarModel = require("../models/avaliarModel");

function atualizarAvaliacao(req, res){
    var idAluno = req.params.idAluno;
    var nota = req.body.notaServer;

    avaliarModel.atualizarAvaliacao(idAluno, nota)
    .then(
        function (resultado) {
            res.status(203).send("Atualizado")
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

function mostrarAvaliacao(req, res){
    var idAluno = req.params.idAluno;

    avaliarModel.mostrarAvaliacao(idAluno)
    .then((resultado) => {
        res.status(200).json(resultado);
    });
}

module.exports = {
    atualizarAvaliacao,
    mostrarAvaliacao
}