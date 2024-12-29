import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faTrash, faPen, faFloppyDisk } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck as faCircleCheckSolid } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck as faCircleCheckRegular } from '@fortawesome/free-regular-svg-icons';

function ItemContent({content , remove ,onDragStart, onDrop, onDragOver}){

    const [isDone , setIsDone] = useState(false)
    const [isEditing, setIsEditing] = useState(false);
    const [itemContent, setItemContent] = useState(content);

    const handleCheck=()=> {
        setIsDone(!isDone);
    }

    const handleEdit = () => {
        setIsEditing(!isEditing);
    };
    
    const handleChange = (e) => {
        setItemContent(e.target.value);
    };
    
    return(
        <li className={`todo draggable ${isDone ? 'done' : ''}`} draggable="true"
            onDragStart={onDragStart} 
            onDragOver={onDragOver}
            onDrop={onDrop}
        >
        <FontAwesomeIcon icon={faList} className="listIcon" />
        <FontAwesomeIcon icon={isDone ? faCircleCheckSolid : faCircleCheckRegular}
        className="checkIcon" onClick={handleCheck} />
        <FontAwesomeIcon icon={faTrash} className="trashIcon" onClick={remove} />
        {isEditing ? (
        <input
            type="text"
            value={itemContent}
            onChange={handleChange}
            className="mytext"
            autoFocus
        />
        ) : (
        <span className="mytext">
            {itemContent}
        </span>
        )}
        <FontAwesomeIcon icon={isEditing ? faFloppyDisk : faPen}
            className="editIcon" onClick={handleEdit}/>
    </li>
    )
}
export default ItemContent