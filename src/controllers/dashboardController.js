var dashboardModel = require("../models/dashboardModel");

function quantUsuarios(req, res) {
    dashboardModel.quantUsuarios()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar a quantidade de usuários: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });

}

function placarUsuarios(req, res) {
    dashboardModel.placarUsuarios()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar a quantidade de usuários: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function partidasJogadas(req, res) {
    dashboardModel.partidasJogadas()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar a quantidade de usuários: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    quantUsuarios,
    placarUsuarios,
    partidasJogadas
}
