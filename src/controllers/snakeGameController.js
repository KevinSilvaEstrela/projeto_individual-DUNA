var snakeGameModel = require("../models/snakeGameModel.js");

function enviarPontuacao (req, res) {
    var recorde = req.body.recordeServer; 
    var id_usuario = req.body.id_usuarioServer;
    var id_jogo = req.body.id_jogoServer;

    snakeGameModel.enviarPontuacao(recorde, id_usuario, id_jogo)
        .then(
            function(resultado) {
                res.json(resultado);
            }
        ).catch(
            function(erro) {
                console.log(erro)
                console.log("\nHouve um erro ao realizar o envio dos dados do jogo! Erro: ", erro.sqlMessage)
                res.status(500).json(erro.sqlMessage)
            }
        )
}

module.exports = {
    enviarPontuacao
}