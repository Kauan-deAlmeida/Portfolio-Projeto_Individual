const { resourceUsage } = require("process");
var cursoModel = require("../models/cursoModel");

function buscarPorTitulo(req, res){
    var titulo = req.query.cnpj;

    cursoModel.buscarPorTitulo(titulo).then((resultado) => {
        res.status(200).json(resultado);
    });
}

function listar(req, res){
    cursoModel.listar().then((resultado) => {
        res.status(200).json(resultado);
    });
}

function buscarPorId(req, res){
    var idCurso = req.params.idCurso;

    cursoModel.buscarPorId(idCurso).then((resultado) => {
        res.status(200).json(resultado);
    });
}

function cadastrar(req, res){
    var titulo = req.body.titulo;
    var dataCriacao = req.body.dataCriacao;

    cursoModel.buscarPorTitulo(titulo).then((resultado) => {
        if (resultado.length > 0) {
            res
                .status(401)
                .json({mensagem: `O Curso com o titulo ${titulo} já existe` });
        } else {
            cursoModel.cadastrar(dataCriacao, titulo).then((resultado) => {
                res.status(201).json(resultado);
            });
        }
    });
}

module.exports = {
    buscarPorTitulo,
    buscarPorId,
    cadastrar,
    listar,
};