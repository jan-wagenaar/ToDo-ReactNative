export const tableSetupScript = `
    CREATE TABLE IF NOT EXISTS list (
        id INTEGER primary key NOT NULL, 
        name TEXT, 
        datetime TEXT
    );
`
export const tableSetupListItemScript = `
    CREATE TABLE IF NOT EXISTS listitem (
        id INTEGER primary key NOT NULL,
        listid INTEGER REFERENCES list(id),
        name TEXT, 
        datetime TEXT
    );
`
export const tableDropTables = `
    DROP TABLE IF EXISTS listitem;
    DROP TABLE IF EXISTS list;
`

export const getListsScript = `SELECT * FROM list`