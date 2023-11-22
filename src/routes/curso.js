var express = require("express");
var router = express.Router();

var cursoController = require("../controllers/cursoController");

router.get("/:cursoId", function (req, res){
    cursoController.buscarAquarioPorEmpresa(req, res);
});

router.post("/cadastrar", function (req, res){
    cursoController.cadastrar(req, res);
});

module.exports = router;