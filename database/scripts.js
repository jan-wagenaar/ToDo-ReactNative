export const tableSetupScript = `
    CREATE TABLE list (
        id INTEGER primary key NOT NULL, 
        name TEXT, 
        datetime TEXT
    );
`
export const tableSetupListItemScript = `
    CREATE TABLE listitem (
        id INTEGER primary key NOT NULL,
        listid INTEGER REFERENCES list(id),
        name TEXT NOT NULL CHECK(name <> 0), 
        is_completed BOOLEAN DEFAULT 0 CHECK (is_completed IN (0, 1)),
        datetime TEXT DEFAULT CURRENT_TIMESTAMP
    );
`
export const tableDropTables = `
    DROP TABLE IF EXISTS listitem
    DROP TABLE IF EXISTS list
`

export const getListsScript = `SELECT * FROM list`;

export const insertListScript = `
    INSERT INTO list (name, datetime) 
    values (? , ?)
    returning id;
`;