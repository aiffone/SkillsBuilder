export const tokens = `CREATE TABLE IF NOT EXISTS tokens (
    id INT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    user_id INT,
    token VARCHAR,
    type VARCHAR NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);
`;
