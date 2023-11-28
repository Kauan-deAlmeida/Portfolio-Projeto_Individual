var progressoModel = require("../models/progressoModel");

function mostrarProgresso(req, res){
    var processo = req.body.porcentagemProgressoServer;

    processoModel.mostrarProgresso(processo)
        .then(
            function (resultAutenticar){
            console.log(`Resultados encontrados; ${JSON.stringify(resultAutenticar)}`); // transforma JSON em String
            if (resultAutenticar.length == 1){
                console.log(resultAutenticar);

                progressoModel.buscarPorProgresso(resultAutenticar[0].progresso)
                    .then((resultadoCurso) => {
                        if(resultadoCurso.length > 0){
                        res.json({
                            progresso: resultAutenticar[0].progersso
                        });
                    } else{
                        res.status(204).json({ curso:[]});
                    }
                    })
            }
        })
    }
            

function atualizarProgresso(req, res){
    var ra = req.body.raServer;
    var progresso = req.body.porcentagemProgressoServer;

    progressoModel.atualizarProgresso(ra, progresso)
    .then(
        function (resultado) {
            res.json(resultado);
        }
    ) 
}

module.exports = {
    atualizarProgresso
}