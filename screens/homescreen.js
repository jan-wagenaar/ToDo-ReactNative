import React, { useEffect, useState } from "react";
import { Button, Text, TextInput, View } from 'react-native';

import useLists from "../hooks/useLists";
import { database } from "../database/database";
import List from "../components/list";

const HomeScreen = ({ route }) => {
  const { getLists, getListById, getListItems } = useLists();
  const [list, setList] = useState({id: 0, name: '', datetime: ''});
  const [listItems, setListItems] = useState([]);
  const [text, onChangeText] = React.useState("Input text");

  const { listId } = route.params;
  console.log(listId)

  useEffect(() => {
    getListById(listId, (listRec) => {console.log(listRec);updateListState(listRec)});
    getListItems(listId, (listItems) => setListItems(listItems))
  }, [listId] )

  const updateListState = (listRec) => {
    if(typeof listRec != 'undefined') {
      setList(listRec);
    }
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <List items={listItems}/>
      <Text style={{ fontSize: 32 }}>{list.name}</Text>
      <Text style={{ fontSize: 32 }}>{listId}</Text>
      <Button
        onPress={() => getLists((lists) => {console.log(lists)})}
        title="Get lists"
        color="#841584"
      />
      <Button
        onPress={() => getListItems(listId, (listitems) => {console.log(listitems)})}
        title="Get list items"
        color="#841584"
      />
      <Button
        onPress={() => database.DBSetupListsAsync()}
        title="Insert dummy data"
        color="#841584"
      />
      <TextInput
        // style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />

      <Button
        onPress={() => getListItems(listId, (listitems) => {console.log(listitems)})}
        title="Add item"
        color="#841584"
      />
    </View>
  );
}

  export default HomeScreen;