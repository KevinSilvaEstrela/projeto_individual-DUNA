var express = require("express");
var router = express.Router();

var snakeGameController = require("../controllers/snakeGameController");

router.post("/enviarPontuacao", function (req, res) {
    snakeGameController.enviarPontuacao(req, res);
})

module.exports = router;