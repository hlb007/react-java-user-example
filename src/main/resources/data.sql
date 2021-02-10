DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id INT PRIMARY KEY,
  FIRST_NAME VARCHAR(250) NOT NULL,
  LAST_NAME VARCHAR(250) NOT NULL,
  AGE INT NOT NULL,
  PIN_CODE INT NOT NULL,
  EMAIL VARCHAR(250) NOT NULL
);

INSERT INTO users (ID, FIRST_NAME, LAST_NAME, AGE, PIN_CODE, EMAIL) VALUES
  (1, 'first 1', 'last 1', '31', '411031', 'abc1@gmail.com'),
  (2, 'first 2', 'last 2', '31', '411031', 'abc2@gmail.com'),
  (3, 'first 3', 'last 3', '31', '411031', 'abc3@gmail.com');