

CREATE TABLE `ecommerce`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `users` VARCHAR(45) NULL,
  `password` INT NULL,
  PRIMARY KEY (`id`));

INSERT INTO `ecommerce`.`users` (`id`, `username`, `password`) VALUES ('1', 'test', '123456');
INSERT INTO `ecommerce`.`users` (`id`, `username`, `password`) VALUES ('2', 'mahabub', '123456');

CREATE TABLE `ecommerce`.`products` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NULL,
  `price` DECIMAL(10,2) NULL,
  PRIMARY KEY (`id`));

  INSERT INTO `ecommerce`.`products` (`id`, `name`, `price`) VALUES ('1', 'apple', '10,000');
INSERT INTO `ecommerce`.`products` (`id`, `name`, `price`) VALUES ('2', 'samsung', '12,000');
INSERT INTO `ecommerce`.`products` (`id`, `name`, `price`) VALUES ('3', 'vivo', '5,000');


CREATE TABLE `ecommerce`.`cart` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NULL,
  `product_id` INT NULL,
  `quantity` INT NULL,
  PRIMARY KEY (`id`));