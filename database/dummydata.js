export const dataSetupListsScript = `
    INSERT INTO list (id, name, datetime) VALUES (?,?,?)
`

export const dataSetupListsData = [1, "Todays todo", "2022-07-24 12:00:00"];

export const dataSetupListItemScript = `INSERT INTO listitem (id, listid, name, is_completed, datetime) VALUES (?,?,?,?,?)`

export const dataSetupListItemData = [1, 1, "Create app", 0, "2022-07-24 12:00:00"];