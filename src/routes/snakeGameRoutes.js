var express = require("express");
var router = express.Router();

var snakeGameController = require("../controllers/snakeGameController");

router.post("/enviarPontuacao/:id_usuario", function (req, res) {
    snakeGameController.enviarPontuacao(req, res);
});

router.get("/buscarPontuacao/:id_usuario", function (req, res) {
    snakeGameController.buscarPontuacao(req, res);
});

router.get("/buscarImagemTitulo", function (req, res) {
    snakeGameController.buscarImagemTitulo(req, res);
});


module.exports = router;