import React, {useEffect} from 'react';
import { database } from '../database/database'

export default function useDatabase() {
  const [isDBLoadingComplete, setDBLoadingComplete] = React.useState(false);

  useEffect(() => {
    async function loadDataAsync() {
      try {
        await database.DBDropDatabaseTablesAsync()
        await database.DBSetupDatabaseAsync()
        await database.DBSetupListsAsync()

        setDBLoadingComplete(true);
      } catch (e) {
        console.warn(e);
      }
    }

    loadDataAsync();
  }, []);

  return isDBLoadingComplete;
}