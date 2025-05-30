var database = require("../database/config");

function enviarPontuacao (recorde, id_usuario, id_jogo) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function enviarPontuacao()");

    var instrucaoSql = `
    UPDATE pontuacao SET recorde = ${recorde}
    WHERE fk_usuario = ${id_usuario} AND fk_jogo = ${id_jogo};
    `

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql)

}

function buscarPontuacao (id_usuario) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function enviarPontuacao()");

    var instrucaoSql = `
    SELECT recorde FROM pontuacao WHERE fk_usuario = ${id_usuario};
    `

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql)

}

module.exports = {
    enviarPontuacao,
    buscarPontuacao
}