var database = require("../database/config");

function enviarPontuacao (recorde, fk_usuario, fk_jogo) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function enviarPontuacao()");

    var instrucaoSql = `
    INSERT INTO pontuacao (recorde, fk_usuario, fk_jogo)
    VALUES
        (${recorde}, ${fk_usuario}, ${fk_jogo})
    `

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql)

}

module.exports = {
    enviarPontuacao    
}