CREATE TABLE users
(
    id SERIAL PRIMARY KEY ,
    name VARCHAR(255) NOT NULL ,
    email VARCHAR(255) NOT NULL UNIQUE CHECK ( position('@' in email) > 0 ),
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
)
