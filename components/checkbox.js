import React from 'react';
import { View, StyleSheet } from "react-native";

const Checkbox = ({ isChecked }) => {
    return (
        <View 
            style={
                [
                    styles.container, 
                    isChecked ? styles.checked : undefined 
                ]
            }>
            <View 
                style={
                    [
                        styles.arrow1, 
                        isChecked ? styles.arrow1Checked : undefined, 
                        { 
                            transform: [{rotate: '-45deg'}],
                        } 
                    ]
                } />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        position: "relative",
        display: 'flex',
        flexDirection: 'row',
        padding: 12,
        marginRight: 12,
        aspectRatio: 1,
        backgroundColor: '#e6e1fc',
        borderWidth: 3,
        borderColor: '#7a7fdb',
        borderRadius: 40
    },
    checked: {
        backgroundColor: '#323ff9',
        borderColor: '#131fca'
    },
    arrow1: {
        position: 'absolute',
        top: 5,
        left: 3,
        borderWidth: 0,
        borderRightWidth: 0,
        borderTopWidth: 0,
        borderColor: 'white',
        height: 0,
        width: 0,
    }, 
    arrow1Checked: {
        height: 10,
        width: 18,
        borderWidth: 4,
        borderRightWidth: 0,
        borderTopWidth: 0,
    }, 
  });


//   [data-checkbox]:checked:after {
//     transform: rotate(-45deg);
//     position: absolute;
//     display: table;
//     top: 3px;
//     left: 3px;
//     width: 10px;
//     height: 6px;
//     border-width: 0 0 2px 2px;
//     border-style: solid;
//     border-color: white;
//     content: ' ';
// }
export default Checkbox;