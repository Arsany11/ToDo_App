import Input from './components/Input.jsx';
import Items from './components/Items.jsx';
import logo from './logo.svg';
import { useState } from "react";
import './style/App.css';
import './style/bootstrap.min.css'


function App() {
const [listofItems, setListOfItem]= useState({
  items: [],
  nextId: 1})
const addItem = (newItem) =>{
setListOfItem({items:[...listofItems.items, { id: listofItems.nextId, content: newItem }],
  nextId: listofItems.nextId + 1
});
}
const removeItem = (id) => {
  setListOfItem({...listofItems,
    items:listofItems.items.filter((item) => item.id !== id)});
}

  return (

    <>
      <Input addItem={addItem}/>
      {/* will cerate a use state cary array that carry the items and add each item it by spread operator ... then map this list and path the content to item conponent */}
      <Items items={listofItems.items} removeItem ={removeItem} setListOfItems={setListOfItem}/>
    </ >
  );
}

export default App;
