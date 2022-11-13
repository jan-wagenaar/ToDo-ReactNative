import * as SQLite from "expo-sqlite"

const db = SQLite.openDatabase('db.db')

import { 
  tableSetupScript,
  tableSetupListItemScript,
  tableDropListItemTable,
  tableDropListTable,
  getListsScript,
  GetListByIdScript,
  UpdateListByIdScript,
  GetLastListIdScript,
  insertListScript,
  DeleteListItemsFromListScript,
  DeleteListByIdScript,
  GetListItemsScript,
  InsertListItemScript,
  ToggleListItemScript
} from './db-scripts';

import { 
  dataSetupListsScript, 
  dataSetupListsData,
  dataSetupListItemScript,
  dataSetupListItemDataItemOne,
  dataSetupListItemDataItemTwo
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

const DBGetLastListId = () => {
  return new Promise((resolve, reject) => {
    db.transaction(
      tx => {
        tx.executeSql(
          GetLastListIdScript,
          [],
          (_, { rows: { _array } }) => { if(_array[0]) {resolve(_array[0].id)} else {resolve(undefined)} },
          (_, error) => { console.log("error retrieving list table"); reject(error) }
          );
      }
    );
  });
}

const DBGetListById = (id, successFunc) => {
  return new Promise((resolve, reject) => {
    db.transaction(
      tx => {
        tx.executeSql(
          GetListByIdScript,
          [id],
          (_, { rows: { _array } }) => { resolve(successFunc(_array[0])) },
          (_, error) => { console.log("error retrieving list table"); reject(error) }
        );
      }
    );
  })
}

const DBInsertList = (listRec, successFunc) => {
  db.transaction( tx => {
      tx.executeSql( 
        insertListScript, 
        [listRec.name, listRec.datetime],
        (t, r) => { successFunc(r.insertId);})
    },
  )
}

const DBUpdateListById = (listRec) => {
  db.transaction( tx => {
      tx.executeSql( 
        UpdateListByIdScript, 
        [listRec.name, listRec.datetime, listRec.id]);
    },
    (t, error) => { console.log("db error insertList"); console.log(error);},
    (t, success) => { }
  )
}

const DBDeleteListById = ( id, callBackFunc ) => {
  db.transaction(
    tx => {
      tx.executeSql(
        DeleteListItemsFromListScript, 
        [id])
      tx.executeSql( 
        DeleteListByIdScript, 
        [id]);
    },
    (t, error) => { console.log("db error deleting list"); console.log(error) },
    (_t, _success) => { callBackFunc()}
  );
}

const DBGetListItems = (itemId, setListItemsFunc) => {
  return new Promise((resolve, reject) => {
    db.transaction(
      tx => {
        tx.executeSql(
          GetListItemsScript, 
          [itemId],
          (_, { rows: { _array } }) => { resolve(setListItemsFunc(_array)) },
          (_, error) => { console.log("error retrieving list items"); reject(error) }
        );
      }
    );
  })
};

const DBInsertListItem = (listItemRec, successFunc) => {
  db.transaction( tx => {
      tx.executeSql( InsertListItemScript, 
        [listItemRec.listId, listItemRec.name] );
    },
    (_, error) => { console.log("db error insertListItem"); console.log(error);},
    (_, success) => { successFunc()}
  )
};

const DBToggleListItem = (listItemId, successFunc) => {
  db.transaction( tx => {
      tx.executeSql( ToggleListItemScript, 
        [listItemId],(_) => {}, (_, err) => console.log(err) );
    },
    (_, error) => { console.log("db error insertListItem"); console.log(error);},
    (_, success) => { successFunc() }
  )
};

const DBDropDatabaseTablesAsync = async () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
        tx.executeSql(tableDropListItemTable, []),
        tx.executeSql(tableDropListTable, [])      
      },
      (_, error) => { console.log("db error dropping tables"); console.log(error); reject(error) },
      (_, success) => { resolve(success)}
    )
  })
};

const DBSetupDatabaseAsync = async () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
        tx.executeSql(tableSetupScript, [], (t) => {}, (error) => console.log(error)),
        tx.executeSql(tableSetupListItemScript, [], (t) => {}, (error) => console.log(error))      
      },
      (_, error) => { console.log("db error creating tables"); console.log(error); reject(error) },
      (_, success) => { resolve(success)}
    )
  })
}

const DBSetupListsAsync = async () => {
  return new Promise((resolve, _reject) => {
    db.transaction( tx => {
        tx.executeSql( dataSetupListsScript, dataSetupListsData,(_) => {}, (_, err) => console.log(err)),
        tx.executeSql( dataSetupListItemScript, dataSetupListItemDataItemOne, (_) => {}, (_, err) => console.log(err))
        tx.executeSql( dataSetupListItemScript, dataSetupListItemDataItemTwo, (_) => {}, (_, err) => console.log(err))

      },
      (t, error) => { console.log("db error setup sample data"); console.log(error); resolve() },
      (t, success) => { resolve(success)}
    )
  })
}

export const database = {
  DBGetLists,
  DBGetLastListId,
  DBInsertList,
  DBUpdateListById,
  DBGetListById,
  DBDeleteListById,
  DBGetListItems,
  DBInsertListItem,
  DBToggleListItem,
  DBSetupDatabaseAsync,
  DBSetupListsAsync,
  DBDropDatabaseTablesAsync,
}