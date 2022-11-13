import React from "react";
import { Platform, KeyboardAvoidingView, TouchableWithoutFeedback, StyleSheet, Keyboard, Button, Text, TextInput, View, SafeAreaView } from 'react-native';

import useCurrentList from "../hooks/useCurrentList"
import List from "../components/list";
import ToDoItemForm from "../components/toDoItemForm";
import ListEmptyState from "../components/listEmptyState";

const TodoList = () => {
  const { 
    currentList, 
    currentListItems, 
  } = useCurrentList();
  
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
                  />
                </View>
              </TouchableWithoutFeedback>
              <ToDoItemForm />
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