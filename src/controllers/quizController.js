var quizModel = require("../models/quizModel.js");

function enviarCasaReal(req, res) {
    var resultadoFinal = req.body.resultadoFinalServer;
    var id_usuario = req.params.id_usuario;

    if (id_usuario == undefined) {
        res.status(400).send("Usuário indefinido!");
    } else {
        quizModel.enviarCasaReal(resultadoFinal, id_usuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro)
                    console.log("\nHouve um erro ao realizar o envio dos dados do jogo! Erro: ", erro.sqlMessage)
                    res.status(500).json(erro.sqlMessage)
                }
            )
    }
}

module.exports = {
    enviarCasaReal
}