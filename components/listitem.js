import React from "react";
import { Vibration } from "react-native";

import useCurrentList from "../hooks/useCurrentList";
import useListItems from "../hooks/useListItems";
import StyledListItem from "./styledListItem";

const ListItem = ({ item }) => {
    const { refreshCurrentListItems} = useCurrentList();
    const { toggleListItem } = useListItems();

    const toggleItem = () => {
        Vibration.vibrate([100]);
        toggleListItem(item.id, refreshCurrentListItems);
    }

    return <StyledListItem 
                item={item}
                toggleItem={toggleItem}
            />
};


export default ListItem;