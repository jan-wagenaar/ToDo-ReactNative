import React, { useContext } from "react";
import { Platform, KeyboardAvoidingView, TouchableWithoutFeedback, StyleSheet, Keyboard, Button, Text, TextInput, View, SafeAreaView } from 'react-native';

import { ListsContext } from "../context/lists-context";
import List from "../components/list";
import ListItemInput from "../components/new-item";
import ListEmptyState from "../components/list-empty-state";

const TodoList = () => {
  const { 
    currentListItems, 
    currentList, 
    refreshCurrentListItems 
  } = useContext(ListsContext);
  
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={120}
      style={styles.flexOne}
    >
        {
          currentList === undefined 
          ? <ListEmptyState />
          : <View 
              style={styles.container}
            >
              <TouchableWithoutFeedback 
                onPress={Keyboard.dismiss}
              >
                <View style={styles.inner}>
                  <List 
                    items={currentListItems}
                    refreshFunc={refreshCurrentListItems}
                  />
                </View>
              </TouchableWithoutFeedback>
              <ListItemInput 
                listId={currentList.id} 
                refreshFunc={refreshCurrentListItems}
              />
            </View>
      
        }
    </KeyboardAvoidingView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3441fc',
  },
  flexOne: {
    flex: 1
  },
  inner: {
    flex: 1,
    justifyContent: "space-around",
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