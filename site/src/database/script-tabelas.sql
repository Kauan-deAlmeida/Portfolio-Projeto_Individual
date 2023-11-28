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
    descricao VARCHAR(300),
    data_criacao DATETIME
);

CREATE TABLE Aluno(
    RA INT PRIMARY KEY,
    nomeAluno VARCHAR(45),
    celular char(11),
    email VARCHAR(45),
    senha VARCHAR(20),
    fkCurso INT,
    CONSTRAINT fkIdCurso FOREIGN KEY (fkCurso) REFERENCES Curso(idCurso)
);

CREATE TABLE ProgressoAluno(
    idProgresso INT AUTO_INCREMENT,
    fkAluno INT,
    CONSTRAINT fkIdAluno FOREIGN KEY (fkAluno) REFERENCES Aluno(RA),
    PRIMARY KEY (idProgresso, fkAluno),
    Progresso INT
);

INSERT INTO curso (titulo, descricao, data_criacao) VALUES
    (1, 'Curso de desenho', 'Aulas de como desenhar realismo', now());