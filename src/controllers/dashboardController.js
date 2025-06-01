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
            console.log("Houve um erro ao buscar o placar de usuários: ", erro.sqlMessage);
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

function topJogadores(req, res) {
    dashboardModel.topJogadores()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar o top jogadores: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function casasMaisEscolhidas(req, res) {
    dashboardModel.casasMaisEscolhidas()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar a quantidade de casas: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function tiposDePartidas(req, res) {
    dashboardModel.tiposDePartidas()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar o tipo de partida: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    quantUsuarios,
    placarUsuarios,
    partidasJogadas,
    topJogadores,
    casasMaisEscolhidas,
    tiposDePartidas
}
