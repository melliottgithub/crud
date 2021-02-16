DROP DATABASE task;

CREATE DATABASE task;

USE task;

CREATE TABLE tasks (
/* Describe the scehma of task
    column id, name where id is auto increment and name is not null and char.
*/

  id int NOT NULL AUTO_INCREMENT,
  name varchar(40) NOT NULL,
  PRIMARY KEY(ID)
);


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

