CREATE TABLE rooms (id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
room VARCHAR(100)
);

ALTER TABLE `rooms` CHANGE COLUMN `room` `room_type` VARCHAR(255) NOT NULL;
