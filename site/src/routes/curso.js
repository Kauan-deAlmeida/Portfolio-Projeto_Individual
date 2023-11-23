var express = require("express");
var router = express.Router();

var cursoController = require("../controllers/cursoController");

// Recebendo os dados do html e direcionando para a função cadastrar de alunoController.js
router.post("../cadastrar", function(req, res){
    cursoController.cadastrar(req, res);
})

router.get("/buscar", function (req, res){
    cursoController.buscarPorTitulo(req, res);
});

router.get("/buscar/:id", function (req, res){
    cursoController.buscarPorId(req, res);
})

router.post("/listar", function (req, res){
    cursoController.listar(req, res);
});

module.exports = router;