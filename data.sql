CREATE TABLE atable(
  id SERIAL PRIMARY KEY,
  name varchar(40)
);
INSERT INTO atable (name)
VALUES
('Hello'), ('World');