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


module.exports = router;