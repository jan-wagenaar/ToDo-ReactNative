import React from "react";

import useListItems from "../hooks/useListItems";
import StyledToDoItemForm from "./StyledToDoItemForm";

const ToDoItemForm = () => {
    const [itemName, SetItemName] = React.useState('');
    const { insertListItem } = useListItems();

    const insertNewListItem = () => {
        insertListItem(itemName);
        SetItemName('')
    };

    return <StyledToDoItemForm
                itemName={itemName} 
                SetItemName={SetItemName} 
                insertNewListItem={insertNewListItem}
            />
};

  
export default ToDoItemForm;