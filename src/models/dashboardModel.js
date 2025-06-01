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
        SELECT COUNT(*) FROM pontuacao;

    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function topJogadores() {
    console.log("ACESSEI O DASHBOARD  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function topJogadores()");
    var instrucaoSql = `
        SELECT u.nome, COUNT(*) AS 'partidas' FROM pontuacao p
            JOIN usuario u ON id_usuario = fk_usuario
        GROUP BY u.nome
        ORDER BY COUNT(*) DESC
        LIMIT 3;

    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function casasMaisEscolhidas() {
    console.log("ACESSEI O DASHBOARD  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function casasMaisEscolhidas()");
    var instrucaoSql = `
        SELECT nome_casa AS 'Nome da Casa', count(nome_casa) AS 'Quantidade' FROM quiz
        GROUP BY nome_casa;

    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function tiposDePartidas() {
    console.log("ACESSEI O DASHBOARD  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function tiposDePartidas()");
    var instrucaoSql = `
        SELECT dia, tipo_partida, COUNT(*) AS total_partidas FROM (
            SELECT DATE(data) AS dia, 'jogo' AS tipo_partida FROM pontuacao
    
            UNION ALL

    
            SELECT DATE(data) AS dia, 'quiz' AS tipo_partida FROM quiz) AS partidas_normalizadas
        GROUP BY dia, tipo_partida
        ORDER BY dia ASC, tipo_partida;


    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



module.exports = {
    quantUsuarios,
    placarUsuarios,
    partidasJogadas,
    topJogadores,
    casasMaisEscolhidas,
    tiposDePartidas
}