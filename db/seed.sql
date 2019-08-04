CREATE TABLE house(
house_id SERIAL PRIMARY KEY,
house_name VARCHAR(255),
house_price INT,
house_address VARCHAR(255)
)

INSERT INTO house
(house_name, house_price, house_address)
VALUES
('read house', 50000, '123 pickle street'),
('blue house', 85858, '145 dill ave'),
('green house', 99999, '594 sexy lane')

ALTER TABLE house
ADD rent INT;

SELECT * FROM house;

-- https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070__340.jpg