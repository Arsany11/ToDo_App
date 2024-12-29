import React, { useState } from 'react';

import ItemContent from "./ItemContent";

function Items({items , removeItem , setListOfItems}) {
    const [draggableItemId, setDraggableItemId] = useState(null)
    
    const handleDragStart = (e, itemId) => {
        setDraggableItemId(itemId);
    }
    const handleDragOver = (e) => {
        e.preventDefault();
    }
    const handleDrop = (e, targetId) =>{
        e.preventDefault()
        if(draggableItemId === targetId)return
        swapItem(draggableItemId, targetId)
        setDraggableItemId(null)
    }
    const swapItem = (draggedId, targetId) => {
        const draggedIndex = items.findIndex(item => item.id === draggedId)
        const targetIndex = items.findIndex(item => item.id === targetId)
        const updatedItem = [...items]
        const [draggedItem] = updatedItem.splice(draggedIndex,1)
        updatedItem.splice(targetIndex, 0, draggedItem)

        setListOfItems(prevState => ({
            items : updatedItem,
            nextId : prevState.nextId
        }))
    }
return (
    <div className="items">
        <ul id="todoItems">
        {items.map((item) =>(
            <ItemContent key={item.id} content={item.content} remove={() => removeItem(item.id)}
            onDragStart={(e) => handleDragStart(e, item.id)}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, item.id)} />
        )
        )}
        
        </ul>
    </div>
);
}

export default Items;
