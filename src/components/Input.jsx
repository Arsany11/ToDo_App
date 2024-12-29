import { useState } from "react";

function Input({addItem}) {
const [item , setItem] = useState('')
function handleAddItem(e){
    e.preventDefault()
console.log(item);
    if (item.trim()) {
        addItem(item); 
        setItem('')
    }
}
function handleChange(event){
    setItem(event.target.value)
}
return(
    <form className="input" onSubmit={handleAddItem}>
            <input type="text"
            placeholder="Add New Item"
            className="newitem"
            id="inputtxt" 
            value={item}
            onChange={handleChange}
            />
            <button id="add" type="submit">+</button>
    </form>
    );

}
export default Input