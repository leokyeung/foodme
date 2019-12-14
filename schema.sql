DROP DATABASE IF EXISTS food;

CREATE DATABASE if not exists food;

use food;

CREATE TABLE foodlist (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    foodName VARCHAR(100),
    calories int,
    protein int,
    sugar int,
    carb int
);
    