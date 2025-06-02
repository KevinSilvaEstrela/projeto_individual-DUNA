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
	nome VARCHAR(45),
	email VARCHAR(45),
	senha VARCHAR(45)
);

CREATE TABLE jogo (
	id_jogo INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	imagem_fundo VARCHAR (100)
);

CREATE TABLE pontuacao (
	id_pontuacao INT AUTO_INCREMENT,
	pontuacao INT NOT NULL,
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id_usuario),
	fk_jogo INT,
	FOREIGN KEY (fk_jogo) REFERENCES jogo(id_jogo),
	data DATETIME DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (id_pontuacao, fk_usuario, fk_jogo)
);

CREATE TABLE quiz (
	id_quiz INT AUTO_INCREMENT,
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id_usuario),
	nome_casa VARCHAR(30),
	data DATETIME DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (id_quiz, fk_usuario)
);
-- Tabela: usuario
INSERT INTO usuario (nome, email, senha) VALUES
('Kevin', 'kevin@gmail.com', '123'),
('Jorge', 'jorge@gmail.com', '123'),
('mario', 'mario@gmail', '12345'),
('Amado', 'amado@gmail.com', '12345'),
('dona benta', 'donabenta@gmail.com', '123'),
('garfield', 'garfield@gmail.com', '123'),
('dasds', 'dasdsa', '123'),
('hjhj', 'kjkj', '123'),
('douglas', 'douglas@gmail.com', '123'),
('berta', 'berta@gmail.com', '123'),
('ADM', 'adm@gmail.com', '1234');

-- Tabela: jogo
INSERT INTO jogo (nome, imagem_fundo) VALUES
("Shai Hulud's Game", '../jogo-cobra/top-down-desert.png');

-- Tabela: pontuacao
INSERT INTO pontuacao (pontuacao, fk_usuario, fk_jogo, data) VALUES
(7, 2, 1, '2025-05-31 14:00:07'),
(9, 1, 1, '2025-05-31 14:00:07'),
(3, 1, 1, '2025-05-31 14:01:51'),
(7, 11, 1, '2025-05-31 14:09:02'),
(7, 11, 1, '2025-05-31 14:20:49'),
(10, 11, 1, '2025-05-31 14:21:33'),
(0, 11, 1, '2025-05-31 14:24:04'),
(7, 12, 1, '2025-05-31 14:30:01'),
(7, 12, 1, '2025-05-31 14:31:49'),
(3, 12, 1, '2025-05-31 14:32:16'),
(1, 12, 1, '2025-05-31 14:32:34'),
(3, 12, 1, '2025-05-31 14:32:46'),
(5, 12, 1, '2025-05-31 14:33:07'),
(1, 2, 1, '2025-05-31 14:37:55'),
(10, 2, 1, '2025-05-31 14:38:34'),
(2, 8, 1, '2025-05-31 14:41:28'),
(3, 8, 1, '2025-05-31 14:42:33');

-- Tabela: quiz
INSERT INTO quiz (fk_usuario, nome_casa, data) VALUES
(1, 'atreides', '2025-06-01 11:46:00'),
(1, 'Corrino', '2025-06-01 11:50:08'),
(1, 'Atreides', '2025-06-01 11:53:22'),
(1, 'Harkonnen', '2025-06-01 13:45:58'),
(1, 'Richese', '2025-06-01 13:47:11'),
(11, 'Harkonnen', '2025-06-01 14:48:58'),
(11, 'Harkonnen', '2025-06-01 14:54:58'),
(11, 'Atreides', '2025-06-01 15:11:56'),
(11, 'Vernius', '2025-06-01 15:12:53'),
(11, 'Corrino', '2025-06-01 16:13:06'),
(11, 'Harkonnen', '2025-06-01 17:03:47');
