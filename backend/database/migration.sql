DROP TABLE IF EXISTS shoes;
DROP TABLE IF EXISTS users;

CREATE TABLE users
(
  id          SERIAL  PRIMARY KEY,
  username    VARCHAR(20) NOT NULL,
  email       VARCHAR(50) NOT NULL,
  password    VARCHAR(30) NOT NULL,
  is_employee BOOLEAN NOT NULL,
  cart        INT[]  ,
  purchases   INT[]
);

CREATE TABLE shoes
(
  id         SERIAL  PRIMARY KEY,
  shoe_name  VARCHAR(30) NOT NULL,
  shoe_img   VARCHAR[] NOT NULL,
  shoe_price MONEY   NOT NULL,
  shoe_desc  VARCHAR NOT NULL,
  users_id   INT REFERENCES users(id)
);

CREATE TABLE reviews
(
  id         SERIAL,
  review     VARCHAR(255),
  users_id   INT REFERENCES users(id) 
);

