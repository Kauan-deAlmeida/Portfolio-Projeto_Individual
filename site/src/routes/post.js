var express = require("express");
var router = express.Router();

var postController = require("../controllers/postController");

// Recebendo os dados do html e direcionando para a função cadastrar de postController.js
router.post("/cadastrarPost", function (req, res){
    postController.cadastrarPost(req, res);
})

// router.get("/buscar/:id", function (req, res){
//     postController.buscarPorId(req, res);
// })

module.exports = router;