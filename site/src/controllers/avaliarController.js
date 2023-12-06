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


module.exports = {
    atualizarAvaliacao
}