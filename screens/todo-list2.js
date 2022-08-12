import React, { useEffect, useState, useContext } from "react";
import { Platform, KeyboardAvoidingView, TouchableWithoutFeedback, StyleSheet, Keyboard, Button, Text, TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { ListsContext } from "../context/lists-context";
import useLists from "../hooks/useLists";
import List from "../components/list";
import ListItemInput from "../components/listitem-input";

const TodoList = ({ route }) => {
  const { getFirstListId, getListById, getListItems } = useLists();
  const { listItems } = useContext(ListsContext);
  const [list, setList] = useState({id: 0, name: '', datetime: ''});

  const navigation = useNavigation();
  const { listId } = route.params;

  useEffect(() => {
    if(listId === 0) {
      getFirstListId(result => navigation.navigate('Home', { listId: result.id }));
    } else {
      updateList();
      updateListItems();
    }
  }, [listId] )

  const updateList = () => {
    getListById(listId, (listRec) => {
      if(typeof listRec != 'undefined') {
        setList(listRec);
      }
    });  
  };

  const updateListItems = () => {
    // getListItems(listId, (listItems) => setListItems(listItems));
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.inner}>
          <List 
            items={listItems}
            refreshFunc={updateListItems}
          />
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
    flex: 1,
    backgroundColor: '#e4e0fd',
  },
  inner: {
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

  export default TodoList;