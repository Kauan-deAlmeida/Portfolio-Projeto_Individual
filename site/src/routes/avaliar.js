var express = require("express");
var router = express.Router();

var avaliacaoController = require("../controllers/avaliarController");

// Recebendo os dados do html e direcionando para a função cadastrar de avaliacaoController.js
router.post("/cadastrarAvaliacao", function (req, res){
    avaliacaoController.cadastrarAvaliacao(req, res);
})

module.exports = router;