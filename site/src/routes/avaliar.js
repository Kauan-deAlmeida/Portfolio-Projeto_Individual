var express = require("express");
var router = express.Router();

var avaliarController = require("../controllers/avaliarController");

// Recebendo os dados do html e direcionando para a função cadastrar de avaliacaoController.js
router.post("/cadastrarAvaliacao", function (req, res){
    avaliarController.cadastrarAvaliacao(req, res);
})

router.put("/atualizarAvaliacao/:idAluno", function(req, res){
    avaliarController.atualizarAvaliacao(req, res);
})

module.exports = router;