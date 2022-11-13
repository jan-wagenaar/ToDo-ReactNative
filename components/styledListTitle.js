import React from "react";
import { View, StyleSheet, TextInput } from "react-native";

const StyledListTitle = ({
    listName, 
    startEditingText,
    updateListName,
    saveListName,
    isEnabled
}) => {
    return (
        <View>
            {
                isEnabled &&
                <TextInput
                    style={styles.input}
                    onChangeText={updateListName}
                    onFocus={startEditingText}
                    onEndEditing={saveListName}
                    returnKeyType='done'
                    value={listName}
                    placeholder="List title"
                />
            }
        </View>  
    )
};

const styles = StyleSheet.create({
    input: {
        width: '100%',
        fontSize: 22,
        padding: 12,
        paddingLeft: 18,
        paddingRight: 18,
        borderRadius: 5,
        color: '#fff'
    }
});

export default StyledListTitle;