DROP DATABASE IF EXISTS `RestaurantDB`

CREATE DATABASE `RestaurantDB`

USE `RestaurantDB`

CREATE TABLE reservations (
    `id` = INT NOT NULL AUTO_INCREMENT,
    `name` = VARCHAR(50) NOT NULL,
    `email` = VARCHAR(50) NOT NULL,
    `phone` = INT(10) NOT NULL,
    `uniqueID` = VARCHAR(50) NOT NULL,
    PRIMARY KEY(id)
)