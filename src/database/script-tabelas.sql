-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql - banco local - ambiente de desenvolvimento
*/

CREATE DATABASE TeamArt;

USE TeamArt;

CREATE TABLE Curso(
    idCurso INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(225),
    data_cricacao DATETIME
);

CREATE TABLE Aluno(
    idAluno INT PRIMARY KEY AUTO_INCREMENT,
    nomeAluno VARCHAR(45),
    cpf CHAR(11),
    celular CHAR(11),
    email VARCHAR(45),
    senha VARCHAR(20),
    fkCurso INT,
    CONSTRAINT fkIdCurso FOREIGN KEY (fkCurso) REFERENCES Curso(idCurso)
);