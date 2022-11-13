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
export const tableDropListItemTable = `
    DROP TABLE IF EXISTS listitem
`;

export const tableDropListTable = `
    DROP TABLE IF EXISTS list
`;

export const getListsScript = `SELECT * FROM list`;

export const GetLastListIdScript = `
    SELECT id 
    FROM list 
    ORDER BY datetime DESC 
    LIMIT 1
`;

export const GetListByIdScript = `
    SELECT * 
    FROM list 
    WHERE list.id = ?
`;

export const insertListScript = `
    INSERT INTO list (name, datetime) 
    VALUES (? , ?)
    RETURNING id;
`;

export const UpdateListByIdScript = `
    UPDATE list 
    SET name = (?),  datetime = (?) 
    WHERE id = (?)
`;

export const DeleteListItemsFromListScript = `
    DELETE 
    FROM listitem 
    WHERE listitem.listid = (?)
`;

export const DeleteListByIdScript = `
    DELETE 
    FROM list 
    WHERE list.ID = (?)
`;

export const GetListItemsScript = `
    SELECT * 
    FROM listitem 
    WHERE listid = (?)
`;

export const InsertListItemScript = `
    INSERT INTO listitem (listid, name) 
    VALUES (?,?)
`;

export const ToggleListItemScript = `
    UPDATE listitem 
    SET is_completed = ((is_completed | 1) - (is_completed & 1)) 
    WHERE id = ?
`;
