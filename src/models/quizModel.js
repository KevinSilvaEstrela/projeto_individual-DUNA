var database = require("../database/config");

function enviarCasaReal (resultadoFinal, id_usuario) {
    console.log("ACESSEI O QUIZ MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function enviarCasaReal()");

    var instrucaoSql = `
    INSERT INTO quiz (nome_casa, fk_usuario) VALUES
        ('${resultadoFinal}', ${id_usuario});
    `

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql)

}

module.exports = {
    enviarCasaReal
}