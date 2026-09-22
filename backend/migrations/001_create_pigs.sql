CREATE TABLE pigs (
    id SERIAL PRIMARY KEY,
    tag_number VARCHAR(50) UNIQUE NOT NULL,
    birth_date DATE,
    breed VARCHAR(100),
    sex VARCHAR(10),
    status VARCHAR(50) NOT NULL DEFAULT 'growing',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);