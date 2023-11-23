var database = require("../database/config");

function buscarPorId(idCurso){
    var query = `select * from curso where id = '${idCurso}'`;

    return database.executar(query);
}

function listar(){
    var query = `select * from curso`;

    return database.executar(query);
}

function buscarPorTitulo(titulo){
    var query = `select * from curso where titulo = '${titulo}'`;

    return database.executar(query);
}

function cadastrar(titulo, dataCriacao){
    var query = `ìnsert into curso (titulo, dataCriacao) values ('${titulo}', '${dataCriacao}');`;
    return database.executar(query);
}

module.exports = {
    buscarPorTitulo,
    buscarPorId, 
    cadastrar, 
    listar
};