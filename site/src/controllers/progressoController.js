var progressoModel = require("../models/progressoModel");

    function atualizarProgresso(req, res){
        var idAluno = req.params.idAluno;
        var progresso = req.body.progressoServer;

        progressoModel.atualizarProgresso(idAluno, progresso)
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

    function mostrarBarra(req, res){
        var idAluno = req.params.idAluno;

        progressoModel.mostrarBarra(idAluno)
        .then((resultado) => {
            res.status(200).json(resultado);
        });
    }

module.exports = {
    atualizarProgresso,
    mostrarBarra
}