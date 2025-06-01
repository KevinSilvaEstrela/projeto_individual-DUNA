var database = require("../database/config");

function enviarPontuacao (pontuacao, id_usuario) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function enviarPontuacao()");

    var instrucaoSql = `
    INSERT INTO pontuacao (pontuacao, fk_usuario, fk_jogo) VALUES
        (${pontuacao}, ${id_usuario}, 1);
    `

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql)

}

function buscarPontuacao (id_usuario) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function enviarPontuacao()");

    var instrucaoSql = `
    SELECT MAX(pontuacao) FROM pontuacao WHERE fk_usuario = ${id_usuario};
    `

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql)

}

function buscarImagemTitulo () {
    console.log("ACESSEI O JOGO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarImagemTitulo()");

    var instrucaoSql = `
    SELECT nome, imagem_fundo FROM jogo;
    `

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql)

}

module.exports = {
    enviarPontuacao,
    buscarPontuacao,
    buscarImagemTitulo
}