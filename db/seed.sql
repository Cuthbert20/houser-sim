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

SELECT * FROM house;