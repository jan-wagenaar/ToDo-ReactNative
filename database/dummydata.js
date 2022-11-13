export const dataSetupListsScript = `
    INSERT INTO list (name, datetime) 
    VALUES (?,?)
`

export const dataSetupListsData = ["Today's todo", "2022-07-24 12:00:00"];

export const dataSetupListItemScript = `
    INSERT INTO listitem (listid, name, is_completed, datetime) 
    VALUES (?,?,?,?)
`;

export const dataSetupListItemDataItemOne = [1, "Get groceries", 1, "2022-07-24 12:00:00"];
export const dataSetupListItemDataItemTwo = [1, "Call Mike", 0, "2022-07-24 12:00:00"];