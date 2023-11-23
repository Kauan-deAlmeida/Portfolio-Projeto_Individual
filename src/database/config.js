var mysql = require("mysql2");
//  var sql = require('mssql');

//  CONEXÃO DO SQL SERVER - AZURE (NUVEM)
var sqlServerConfig = {
    server: "SEU_SERVIDOR",
    database: "SEU_BANCO_DE_DADOS",
    user: "SEU_USUARIO",
    password: "SUA_SENHA",
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    options: {
        encrypt: true, // for azure
    }
}

// CONEXÃO DO MYSQL WORKBENCH
var mysqlConfig = {
    host: "localhost",
    database: "TeamArt",
    user: "root",
    password: "110720",
};

function executar(instrucao){
    // VERIFICA A VARIÁVEL DE AMBIENTE SETADA EM app.js
    if (ProcessingInstruction.env.AMBIENTE_PROCESSO == "producao"){
        return new Promise(function (resolve, reject){
            sql.connect(sqlServerConfig).then(function () {
                return sql.query(instrucao);
            }).then(function (resultados){
                console.log(resulrtados);
                resolve(resultados.recordset);
            }).catch(function (erro) {
                reject(erro);
                console.log('Erro: ', erro);
            });
            sql.on('error', function (erro){
                return ("ERRO NO SQL SERVER (Azure): ", erro);
            });
        });
    } else if(process.env.AMBIENTE_PROCESSO == "desenvolvimento"){
        return new Promise(function (resolve, reject) {
            var conexao = mysql.createConnection(mysqlConfig);
            conexao.connect();
            conexao.quedy(instrucao, function (erro, resultados){
                conexao.end();
                if(erro){
                    reject(erro);
                }
                console.log(resultados);
                resolve(resultados);
            });
            conexao.on('error', function (erro){
                return ("ERRO NO MYSQL WORKBENCH: ", erro.sqlMessage);
            });
        });
    } else{
        return new Promise(function (resolve, reject){
            console.log("\nO AMBIENTE (produção ou desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
            reject("AMBIENTE NÃO CONFIGURADO EM app.js")
        });
    }
}

module.exports = {
    executar
}
