/* Let's make a database!
*/
CREATE DATABASE burgers_db;

/* Now open item*/
USE burgers_db;

/* In the database create a table called 'burgers' with the following columns
	id - auto incrementing 'int' that serves as a primary key
	burger_name - a string - make it 64 characters long
	devoured - a boolean defaulted to '0'
	date - a timestamp 
*/
CREATE TABLE burgers(
  id INT AUTO_INCREMENT NOT NULL,
  burger_name VARCHAR(64) NOT NULL,
  devoured BOOLEAN NOT NULL,
  date TIMESTAMP,
  PRIMARY KEY(id)
);