var snakeGameModel = require("../models/snakeGameModel.js");

function enviarPontuacao(req, res) {
    var pontuacao = req.body.pontuacaoServer;
    var id_usuario = req.params.id_usuario;

    if (id_usuario == undefined) {
        res.status(400).send("Usuário indefinido!");
    } else {
        snakeGameModel.enviarPontuacao(pontuacao, id_usuario)
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

function buscarPontuacao(req, res) {
    var id_usuario = req.params.id_usuario;

    if (id_usuario == undefined) {
        res.status(400).send("Usuário indefinido!");
    } else {
        snakeGameModel.buscarPontuacao(id_usuario)
            .then(
                function (resultado) {
                    if (resultado.length > 0) {
                        res.status(200).json(resultado)
                    } else {
                        res.status(204).send("Nenhum resultado encontrado")
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("Erro ao fazer a requisição!", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function buscarImagemTitulo(req, res) {

    snakeGameModel.buscarImagemTitulo()
        .then(
            function (resultado) {
                if (resultado.length > 0) {
                    res.status(200).json(resultado)
                } else {
                    res.status(204).send("Nenhum resultado encontrado")
                }
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("Erro ao fazer a requisição!", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );

}

module.exports = {
    enviarPontuacao,
    buscarPontuacao,
    buscarImagemTitulo
}