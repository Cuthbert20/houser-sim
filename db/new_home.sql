INSERT INTO house
(house_name, house_address, image, mortgage, rent, state, zipcode, city)
VALUES
(${house_name}, ${house_address}, ${image}, ${mortgage}, ${rent}, ${state}, ${zipcode}, ${city})
returning *;