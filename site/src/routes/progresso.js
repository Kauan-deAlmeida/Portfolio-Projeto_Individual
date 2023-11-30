var express = require("express");
var router = express.Router();

var progressoController = require("../controllers/progressoController");

router.post("/barraProgresso", function(req, res){
    progressoController.barraProgresso(req, res);
})

module.exports = router;