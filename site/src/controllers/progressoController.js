var progressoModel = require("../models/progressoModel");

function barraProgresso(req, res){
    var idAluno = req.body.idAlunoServer;
    var Progresso = req.body.progressoServer;
    
    progressoModel.barraProgresso(idAluno, Progresso)
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

module.exports = {
    barraProgresso
}