var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/quantUsuarios", function (req, res) {
    dashboardController.quantUsuarios(req, res);
});

router.get("/placarUsuarios", function (req, res) {
    dashboardController.placarUsuarios(req, res);
});

router.get("/partidasJogadas", function (req, res) {
    dashboardController.partidasJogadas(req, res);
});

router.get("/topJogadores", function (req, res) {
    dashboardController.topJogadores(req, res);
});

router.get("/casasMaisEscolhidas", function (req, res) {
    dashboardController.casasMaisEscolhidas(req, res);
});

router.get("/tiposDePartidas", function (req, res) {
    dashboardController.tiposDePartidas(req, res);
});


module.exports = router;