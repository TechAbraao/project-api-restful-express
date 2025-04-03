CREATE TABLE IF NOT EXISTS PRODUTO (
    ID INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    NOME VARCHAR(100) NOT NULL,
    PRECO DECIMAL(9,2) NOT NULL,
    DESCRICAO VARCHAR(255) NOT NULL,
    QUANTIDADE INT NOT NULL,
    CATEGORIA VARCHAR(20) NOT NULL
) ENGINE=InnoDB;
