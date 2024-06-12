-- Active: 1718132599104@@127.0.0.1@5432@softjobs
CREATE DATABASE softjobs;

\cd softjobs;

CREATE TABLE usuarios (
  id        SERIAL        NOT NULL,
  email     VARCHAR(50)   NOT NULL  UNIQUE,
  password  VARCHAR(60)   NOT NULL,
  rol       VARCHAR(25)   NOT NULL,
  lenguage  VARCHAR(20)   NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO usuarios (email, password, rol, lenguage) VALUES ( 'vdonosin@gmail.com', 'valerio', 'Frontend Developer', 'JavaScript')