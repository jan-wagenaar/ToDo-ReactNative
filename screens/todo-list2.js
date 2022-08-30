import React, { useEffect, useState, useContext } from "react";
import { Platform, KeyboardAvoidingView, TouchableWithoutFeedback, StyleSheet, Keyboard, Button, Text, TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { ListsContext } from "../context/lists-context";
import useLists from "../hooks/useLists";
import List from "../components/list";
import ListItemInput from "../components/listitem-input";

const TodoList = ({ route }) => {
  const { currentListItems, currentList, refreshCurrentListItems } = useContext(ListsContext);
  
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.inner}>
          <List 
            items={currentListItems}
            refreshFunc={refreshCurrentListItems}
          />
          <ListItemInput 
            listId={currentList.id} 
            refreshFunc={refreshCurrentListItems}
          />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3441fc',
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