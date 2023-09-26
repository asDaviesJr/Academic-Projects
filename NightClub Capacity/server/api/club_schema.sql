DROP table if EXISTS clubs CASCADE; 

CREATE TABLE clubs (
    id SERIAL PRIMARY KEY NOT NULL, 
    name VARCHAR(30), 
    city VARCHAR(30), 
    genre VARCHAR(30),
    occupancy INT NOT NULL DEFAULT 0, 
    max_occ INT NOT NULL, 
    thres_occ INT NOT NULL DEFAULT 0

); 

INSERT INTO clubs (name, city, genre, max_occ, thres_occ) VALUES 
        ('Club Arcane','Washington D.C', 'Hip-Hop', 100, 70), 
        ('Club Underground','New York City', 'NY Drill', 50, 30), 
        ('Club Soda', 'Tennessee','Country', 20, 12 ), 
        ('Studio 52', 'Detroit', 'Rap', 52, 32); 

