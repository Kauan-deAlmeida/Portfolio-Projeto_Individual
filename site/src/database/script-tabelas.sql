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
    ra INT PRIMARY KEY AUTO_INCREMENT,
    nomeAluno VARCHAR(45),
    celular char(11),
    email VARCHAR(45),
    senha VARCHAR(20),
    fkCurso INT,
    CONSTRAINT fkIdCurso FOREIGN KEY (fkCurso) REFERENCES Curso(idCurso)
)AUTO_INCREMENT = 1000;

CREATE TABLE ProgressoAluno(
    idProgresso INT AUTO_INCREMENT,
    fkAluno INT,
    CONSTRAINT fkIdAluno FOREIGN KEY (fkAluno) REFERENCES Aluno(ra),
    Progresso INT,
    PRIMARY KEY(idProgresso, fkAluno)
);

CREATE TABLE Post(
	idAluno INT PRIMARY KEY AUTO_INCREMENT,
    fkAluno INT,
    CONSTRAINT fkIdAluno FOREIGN KEY (fkAluno) REFERENCES Aluno (ra),
    Titulo VARCHAR(50),
    img varchar(2000)
);

CREATE TABLE Avaliacao(
	idAvaliacao INT PRIMARY KEY AUTO_INCREMENT,
    nota INT,
    check (nota = 1 OR nota = 2 OR nota = 3),
    fkAluno INT,
    CONSTRAINT fkRaIdAluno FOREIGN KEY (fkAluno) REFERENCES Aluno (ra)
);

INSERT INTO curso (idCurso, titulo, descricao, data_criacao) VALUES
    (1, 'Curso de desenho', 'Aulas de como desenhar realismo', now());