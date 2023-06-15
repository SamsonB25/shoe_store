DROP TABLE IF EXISTS shoes;
DROP TABLE IF EXISTS reviews;
DROP TABLE IF EXISTS users;

CREATE TABLE users
(
  id          SERIAL  PRIMARY KEY,
  username    VARCHAR(20) UNIQUE NOT NULL,
  email       VARCHAR(50) NOT NULL,
  password    VARCHAR(255) NOT NULL,
  is_employee BOOLEAN DEFAULT 'f',
  cart        TEXT[]  ,
  purchases   TEXT[]
);

CREATE TABLE shoes
(
  id         SERIAL  PRIMARY KEY,
  type       VARCHAR(10) NOT NULL,
  name       VARCHAR(30) NOT NULL,
  image      VARCHAR[] NOT NULL,
  price      MONEY   NOT NULL,
  description VARCHAR NOT NULL,
  users_id   VARCHAR(20) REFERENCES users(username)
);


CREATE TABLE reviews
(
  id         SERIAL,
  review     VARCHAR(255),
  posted_on  DATE NOT NULL,
  users_id   VARCHAR(20) REFERENCES users(username)
);

