CREATE DATABASE mytodolist;

CREATE TABLE todo(
  t_id SERIAL PRIMARY KEY,
  t_title VARCHAR(20),
  t_date DATE,
  t_description VARCHAR(255)
);