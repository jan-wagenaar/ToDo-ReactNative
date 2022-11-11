import React from "react";
import { DrawerItem } from '@react-navigation/drawer';
import { View, Text } from 'react-native';

const StyledDrawerItem = ({ label, type, style, onPress}) => {
    return (
        <DrawerItem
              label={() => <DrawerItemLabel label={label} type={type} style={style}/>}
              onPress={onPress}
            />
    )
};

const DrawerItemLabel = ({ label, type, style}) => {
    return (
        <View style={ 
            type == 'button' ? 
            { 
                justifyContent: 'center', 
                alignItems: 'center', 
                padding: 12, 
                backgroundColor: '#ff7a28', 
                borderRadius: 30 
                } 
            : undefined}>
        <Text 
            style={[{color: '#fff', fontSize: 18}, style]}>
            {label}
        </Text>
        </View>
    )
};



  export default StyledDrawerItem;