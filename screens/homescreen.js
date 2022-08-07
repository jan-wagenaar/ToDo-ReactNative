import React, { useEffect, useState } from "react";
import { Platform, KeyboardAvoidingView, TouchableWithoutFeedback, StyleSheet, Keyboard, Button, Text, TextInput, View } from 'react-native';

import useLists from "../hooks/useLists";
import List from "../components/list";
import ListItemInput from "../components/listitem-input";

const HomeScreen = ({ route }) => {
  const { getListById, getListItems } = useLists();
  const [list, setList] = useState({id: 0, name: '', datetime: ''});
  const [listItems, setListItems] = useState([]);

  const { listId } = route.params;

  useEffect(() => {
    updateList();
    updateListItems();
  }, [listId] )

  const updateList = () => {
    getListById(listId, (listRec) => {
      if(typeof listRec != 'undefined') {
        setList(listRec);
      }
    });  
  };

  const updateListItems = () => {
    getListItems(listId, (listItems) => setListItems(listItems));
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.inner}>
          <List items={listItems}/>
          <ListItemInput 
            listId={listId} 
            refreshFunc={updateListItems}
          />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: "space-around"
  },
  header: {
    fontSize: 36,
    marginBottom: 48
  },
  btnContainer: {
    backgroundColor: "white",
    marginTop: 12
  }
})

  export default HomeScreen;