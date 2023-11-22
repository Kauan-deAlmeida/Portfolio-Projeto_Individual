create database TeamArt;

use TeamArt;

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