-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE DATABASE duna;

USE duna;

CREATE TABLE usuario (
	id_usuario INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);

CREATE TABLE jogo (
	id_jogo INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
);

CREATE TABLE pontuacao (
	id_pontuacao INT PRIMARY KEY AUTO_INCREMENT,
	pontuacao INT NOT NULL,
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id_usuario),
	fk_jogo INT,
	FOREIGN KEY (fk_jogo) REFERENCES jogo(id_jogo),
	data DATETIME DEFAULT CURRENT_TIMESTAMP
);

insert into jogo (nome) values ('Shai Hulud"s game');