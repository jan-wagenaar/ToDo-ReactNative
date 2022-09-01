import React from "react";
import { View, StyleSheet } from "react-native";

const Checkbox = ({ isChecked }) => {
    return (
        <View style={[styles.container, isChecked ? styles.checked : undefined ]} />
    )
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        padding: 12,
        marginRight: 12,
        backgroundColor: '#e6e1fc',
        borderWidth: 3,
        borderColor: '#7a7fdb',
        borderRadius: 40
    },
    checked: {
        backgroundColor: '#ff7927',
        borderColor: '#a04e1c'
    }
  });

export default Checkbox;