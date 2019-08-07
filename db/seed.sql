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


-- https://4.bp.blogspot.com/-n3uaBhcVxBQ/W2m8qtqJTiI/AAAAAAAAICs/VRpEn9sAefskzXx_0MMsIYaQeRPxuwAOACLcBGAs/s1600/pink_house_streets_of_london_soinspo.jpg
-- https://www.littlethings.com/app/uploads/2017/04/pink-house.jpeg

-- https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070__340.jpg