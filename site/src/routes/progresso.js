var express = require("express");
var router = express.Router();

var progressoController = require("../controllers/progressoController");

router.put("/atualizarProgresso/:idAluno", function(req, res){
    progressoController.atualizarProgresso(req, res);
})

router.get("/mostrar-barra/:idAluno", function(req, res){
    progressoController.mostrarBarra(req, res);
})

module.exports = router;