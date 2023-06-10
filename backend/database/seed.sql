INSERT INTO shoes (type, name, image, price, description)
VALUES
    -- Fancy Shoes
('fancy', 'Samson 1623''s', ARRAY['https://i.imgur.com/sksdTM8.png'], '899.99', 'This is the world''s comfiest shoe. Not only is it comfortable, it''ll even get a compliment out of Conor McGregor.'),
('fancy', 'Samson Blood red''s', ARRAY['https://i.imgur.com/zAkAGBu.png'], '699.99', 'A retro-style sneaker with a suede upper and a comfortable fit.'),
('fancy', 'Samson Blax', ARRAY['https://i.imgur.com/BEFSaq1.png'], '799.99', 'A versatile shoe with a supportive cushioning and stylish design.'),
('fancy', 'Samson Fiesta 14''s', ARRAY['https://i.imgur.com/FtikGRU.png'], '699.99', 'A timeless court shoe with a clean and minimalist aesthetic.'),
('fancy', 'Samson Ultra rare''s', ARRAY['https://i.imgur.com/PTfyTXZ.png'], '1025.99', 'A high-performance running shoe with responsive cushioning and a breathable upper.'),
    -- Sport Shoes
('sport', 'Samson runners', ARRAY['https://i.imgur.com/ASTWYiQ.png'], '149.99', 'Lightweight and cushioned athletic shoes for optimal performance.'),
('sport', 'Samson Dunks', ARRAY['https://i.imgur.com/x6ST2gD.png'], '179.99', 'Durable and comfortable hiking shoes for outdoor adventures.'),
('sport', 'Samson Ultra Lights', ARRAY['https://i.imgur.com/UHdmvuT.png'], '199.99', 'Track shoes designed for maximum speed and performance.'),
('sport', 'Samson Trainers', ARRAY['https://i.imgur.com/s1zPzJi.png'], '169.99', 'Versatile sneakers engineered for CrossFit training and workouts.'),
('sport', 'Samson Rocket Lawnchas', ARRAY['https://i.imgur.com/QknhwW4.png'], '229.99', 'High-top basketball shoes with excellent ankle support.'),
    -- Casual Shoes
('casual', 'Samson Red Walkers', ARRAY['https://i.imgur.com/ISDBmJe.png'], '79.99', 'Casual and comfortable shoe for everyday wear.'),
('casual', 'Samson Classic Sneakers', ARRAY['https://i.imgur.com/1TwQwUn.png'], '99.99', 'Iconic sneakers that go well with any outfit.'),
('casual', 'Samson Foreign Steppers', ARRAY['https://i.imgur.com/avQnwkD.png'], '129.99', 'Stylish shoes crafted from vintage leather for a retro look.'),
('casual', 'Samson Bohemian Espadrilles', ARRAY['https://i.imgur.com/tIKz6WS.png'], '89.99', 'Comfortable and bohemian-style espadrilles for a laid-back vibe.'),
('casual', 'Samson Casual Slip-On Sandals', ARRAY['https://i.imgur.com/BUMpLGH.png'], '69.99', 'Easy-to-wear and Easy-to-flex for a relaxed yet still stylish feel.');

INSERT INTO users(username, email, password)
VALUES('samson', '@email', '1234');