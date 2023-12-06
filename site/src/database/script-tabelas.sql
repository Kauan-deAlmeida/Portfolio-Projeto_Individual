-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql - banco local - ambiente de desenvolvimento
*/

CREATE DATABASE TeamArt;

USE TeamArt;

CREATE TABLE Aluno(
    ra INT PRIMARY KEY AUTO_INCREMENT,
    nomeAluno VARCHAR(45) NOT NULL,
    celular char(11),
    email VARCHAR(45) NOT NULL,
    senha VARCHAR(20) NOT NULL,
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
    img varchar(2000) NOT NULL
);

CREATE TABLE Avaliacao(
	idAvaliacao INT PRIMARY KEY AUTO_INCREMENT,
    nota INT,
    check (nota = 0 OR nota = 1 OR nota = 2 OR nota = 3 OR nota = 4 OR nota = 5),
    fkAluno INT,
    CONSTRAINT fkRaIdAluno FOREIGN KEY (fkAluno) REFERENCES Aluno (ra)
);

INSERT INTO curso (idCurso, titulo, descricao, data_criacao) VALUES
    (1, 'Curso de desenho', 'Aulas de como desenhar realismo', now());