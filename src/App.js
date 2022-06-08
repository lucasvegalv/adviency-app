import { useState } from 'react'
import { v4 as uuid } from 'uuid'

function App() {

// HOOKS 
const [ value, setValue ] = useState('')
const [ items, setItems ] = useState([])

// GENERATE UNIVERSAL UNIQUE ID
const uniqueId = uuid()

// ITEM OBJ

// EVENT HANDLER FUNCTIONS

// SAVE INPUT CHANGES
const handleChange = (e) => {
  setValue(e.target.value)
  }
  
  // SELECT ITEM QUANTITY
  const handleSelect = (e) => {
    const itemQuant = e.target.value
    console.log(itemQuant)
  }
  
  // ADD INPUT TO THE LIST
  const handleAdd = () => {
    const item = {
      id: uniqueId,
      value: value,
      completed: false
    } 

    if(value != '') {
        setItems([...items, item])
    } else {
      alert("Please enter a present")
    }
    setValue('')
  }

  // ADD THE INPUT PRESSING 'ENTER' KEY 
  const handleKeyDown = (e) => { e.key === 'Enter' && handleAdd() }
  
  // DELETE ITEM
  const handleDelete = (id) => {
    const filteredItems = items.filter(items => items.id != id)
    setItems(filteredItems)
    console.log(items)
  }
  
  // DELETE ALL ITEMS
  const handleDeleteAllItems = () => {
    const deletedAll = items.filter(item => item != item)
    setItems(deletedAll)
  }


 
  // RENDER THE ITEM LIST
  const itemList = items.map(item => (<li key={item.id}> {item.value} <button onClick={() => handleDelete(item.id)}>X</button></li>))

  
  // ALERT THE USER IF THERE'S NO ITEMS YET
  const noItemsAlert = items.length === 0 && <p>Christmas is coming! Let's buy some cool things</p>

  return (
    <>
      <div>
        <h1>Adviency</h1>
        <p>Don't forget to buy your presents!</p>
      </div>

      <div>
        <input type="text" onKeyDown={handleKeyDown} onChange={handleChange} value={value} placeholder="Add a present to buy" autoFocus/>
        <select name="selectNumbers" id="selectNumbers" onChange={handleSelect}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
        <button onClick={handleAdd}>Add</button>
        <ul>
          {itemList}
          {noItemsAlert}
        </ul>
        <button onClick={handleDeleteAllItems}>Delete All</button>
      </div>
    </>
  );
}

export default App;
