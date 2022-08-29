import React from "react";
import { DrawerItem } from '@react-navigation/drawer';
import { Text } from 'react-native';

const StyledDrawerItem = ({ label, onPress}) => {
    return (
        <DrawerItem
              label={() => <DrawerItemLabel label={label} />}
              onPress={onPress}
            />
    )
};

const DrawerItemLabel = ({ label, focused}) => {
    return (
        <Text 
            style= {{ color: '#fff', fontSize: 18}}>
            {label}
        </Text>
    )
};



  export default StyledDrawerItem;