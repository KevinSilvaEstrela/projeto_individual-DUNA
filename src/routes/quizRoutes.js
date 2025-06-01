var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.post("/enviarCasaReal/:id_usuario", function (req, res) {
    quizController.enviarCasaReal(req, res);
});

module.exports = router;