var database = require("../database/config");

function quantUsuarios() {
    console.log("ACESSEI O DASHBOARD  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function quantUsuarios()");
    var instrucaoSql = `
        SELECT COUNT(*) FROM usuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function placarUsuarios() {
    console.log("ACESSEI O DASHBOARD  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function placarUsuarios()");
    var instrucaoSql = `
        SELECT u.nome, p.pontuacao, p.data FROM usuario u
            JOIN pontuacao p 
                ON u.id_usuario = p.fk_usuario
        ORDER BY p.pontuacao DESC
        LIMIT 10;

    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function partidasJogadas() {
    console.log("ACESSEI O DASHBOARD  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function partidasJogadas()");
    var instrucaoSql = `
        SELECT COUNT (*) FROM pontuacao;

    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    quantUsuarios,
    placarUsuarios,
    partidasJogadas
}