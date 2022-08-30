import React, {useState} from "react";
import { View, StyleSheet, Text, TextInput, SafeAreaView } from "react-native";

const ListTitle = (props) => {
    const [isEditing, setIsEditing] = React.useState(false);
    const [listName, setListName] = React.useState(props.children);

    const startEditingText = () => {
        setIsEditing(true);
    }

    const updateListName = (e) => {
        setListName(e.value)
    }

    const saveListName = () => {
        setIsEditing(false);
    }

    return (
        <View>
            <TextInput
                style={[styles.input, isEditing ?  styles.inputEditing : null ]}
                onChangeText={updateListName}
                onFocus={startEditingText}
                onEndEditing={saveListName}
                returnKeyType='done'
                value={listName}
                placeholder="List title"
            />
        </View>  
    )
};

const styles = StyleSheet.create({
    input: {
        width: '100%',
        fontSize: 18,
        padding: 12,
        paddingLeft: 18,
        paddingRight: 18,
        borderRadius: 5,
        color: '#fff'
    },
    inputEditing: {
        backgroundColor: '#757bd6',
        color: '#000'
    }
});

export default ListTitle;