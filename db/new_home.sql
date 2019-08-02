INSERT INTO house
(house_name, house_price, house_address)
VALUES
(${house_name}, ${house_price}, ${house_address})
returning *;