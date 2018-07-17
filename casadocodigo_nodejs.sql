CREATE DATABASE IF NOT EXISTS `casadocodigo_nodejs`;
USE `casadocodigo_nodejs`;

CREATE TABLE IF NOT EXISTS livros (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `titulo` varchar(255) NULL,
    `descricao` text NULL,
    `preco` decimal(10,2) NULL,
    PRIMARY KEY (`id`)
);

CREATE DATABASE IF NOT EXISTS `casadocodigo_nodejs_test`;
USE `casadocodigo_nodejs_test`;

CREATE TABLE IF NOT EXISTS livros (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `titulo` varchar(255) NULL,
    `descricao` text NULL,
    `preco` decimal(10,2) NULL,
    PRIMARY KEY (`id`)
);