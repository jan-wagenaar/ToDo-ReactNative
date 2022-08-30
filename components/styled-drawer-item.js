import React from "react";
import { DrawerItem } from '@react-navigation/drawer';
import { View, Text } from 'react-native';

const StyledDrawerItem = ({ label, style, onPress}) => {
    return (
        <DrawerItem
              label={() => <DrawerItemLabel label={label} style={style}/>}
              onPress={onPress}
            />
    )
};

const DrawerItemLabel = ({ label, focused, style}) => {
    return (
        <View style= { style == 'button' ? { justifyContent: 'center', alignItems: 'center', padding: 12, backgroundColor: '#ff7a28', borderRadius: 30 } : undefined}>
        <Text 
            style= {[{ color: '#fff', fontSize: 18}, style == 'button' ? { fontWeight: 'bold' } : undefined ]}>
            {label}
        </Text>
        </View>
    )
};



  export default StyledDrawerItem;