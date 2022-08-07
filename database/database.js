import * as SQLite from "expo-sqlite"

const db = SQLite.openDatabase('db.db')

import { 
  tableSetupScript,
  tableSetupListItemScript,
  tableDropTables,
  getListsScript,
  insertListScript
} from './scripts';

import { 
  dataSetupListsScript, 
  dataSetupListsData,
  dataSetupListItemScript,
  dataSetupListItemData
} from './dummydata';

db.exec([{ sql: 'PRAGMA foreign_keys = ON;', args: [] }], false, () =>
  console.log('Foreign keys turned on')
);

const DBGetLists = (setListsFunc) => {
  return new Promise((resolve, reject) => {
    db.transaction(
      tx => {
        tx.executeSql(
          getListsScript,
          [],
          (_, { rows: { _array } }) => { resolve(setListsFunc(_array)) },
          (_, error) => { console.log("error retrieving lists"); reject(error) }
        );
      }
    );
  })
};

const DBGetListById = (id, setListFunc) => {
  return new Promise((resolve, reject) => {
    db.transaction(
      tx => {
        tx.executeSql(
          'SELECT * FROM list WHERE list.id = ?',
          [id],
          (_, { rows: { _array } }) => { resolve(setListFunc(_array[0])) },
          (_, error) => { console.log("error retrieving list table"); reject(error) }
        );
      }
    );
  })
}

const DBInsertList = (listRec, successFunc) => {
  db.transaction( tx => {
      tx.executeSql( insertListScript, 
        [listRec.name, listRec.datetime],
        (t, r) => { successFunc(r.insertId);})
    },
  )
}

const DBUpdateListById = (listRec, successFunc) => {
  db.transaction( tx => {
      tx.executeSql( 'UPDATE list SET name = ?,  datetime = ? WHERE ID = ?', [listRec.name, listRec.datetime, listRec.id] );
    },
    (t, error) => { console.log("db error insertList"); console.log(error);},
    (t, success) => { successFunc() }
  )
}

const DBDeleteListById = ( id, callBackFunc ) => {
  db.transaction(
    tx => {
      tx.executeSql(
        'DELETE FROM list WHERE list.ID = (?)', 
        [id]);
    },
    (t, error) => { console.log("db error deleting event"); console.log(error) },
    (_t, _success) => { callBackFunc(); console.log("Deleted event")}
  );
}

const DBGetListItems = (itemId, setListItemsFunc) => {
  return new Promise((resolve, reject) => {
    db.transaction(
      tx => {
        tx.executeSql(
          'SELECT * FROM listitem WHERE listid = ?', [itemId],
          (_, { rows: { _array } }) => { resolve(setListItemsFunc(_array)) },
          (_, error) => { console.log("error retrieving list items"); reject(error) }
        );
      }
    );
  })
};

const DBInsertListItem = (listItemRec, successFunc) => {
  db.transaction( tx => {
      tx.executeSql( 'INSERT INTO listitem (listid, name, datetime) VALUES (?,?,?)', [listItemRec.listId, listItemRec.name, listItemRec.dateTime], (t, r) => console.log(t) );
    },
    (_, error) => { console.log("db error insertListItem"); console.log(error);},
    (_, success) => { successFunc() }
  )
};

const DBDeleteListItemsFromList = ( listId, callBackFunc ) => {
  db.transaction(
    tx => {
      tx.executeSql(
        'DELETE FROM listItem WHERE list.ID = (?)', 
        [listId]);
    },
    (t, error) => { console.log("db error deleting list items"); console.log(error) },
    (_t, _success) => { callBackFunc(); console.log("Deleted event")}
  )
};

const DBDropDatabaseTablesAsync = async () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
        tx.executeSql('DROP TABLE IF EXISTS listitem', []),
        tx.executeSql('DROP TABLE IF EXISTS list', [])      
      },
      (_, error) => { console.log("db error dropping tables"); console.log(error); reject(error) },
      (_, success) => { resolve(success)}
    )
  })
};

const DBSetupDatabaseAsync = async () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
        tx.executeSql(tableSetupScript, []),
        tx.executeSql(tableSetupListItemScript, [])      
      },
      (_, error) => { console.log("db error creating tables"); console.log(error); reject(error) },
      (_, success) => { resolve(success)}
    )
  })
}

const DBSetupListsAsync = async () => {
  return new Promise((resolve, _reject) => {
    db.transaction( tx => {
        tx.executeSql( 'INSERT INTO list (name, datetime) VALUES (?,?)', ["Todays todo", "2022-07-24 12:00:00"],(_) => {}, (_, err) => console.log(err)),
        tx.executeSql( 'INSERT INTO listitem (listid, name, datetime) VALUES (?,?,?)', [1, "Create app", "2022-07-24 12:00:00"], (_) => {}, (_, err) => console.log(err))
      },
      (t, error) => { console.log("db error setup sample data"); console.log(error); resolve() },
      (t, success) => { resolve(success)}
    )
  })
}

export const database = {
  DBGetLists,
  DBInsertList,
  DBUpdateListById,
  DBGetListById,
  DBDeleteListById,
  DBGetListItems,
  DBInsertListItem,
  DBDeleteListItemsFromList,
  DBSetupDatabaseAsync,
  DBSetupListsAsync,
  DBDropDatabaseTablesAsync,
}