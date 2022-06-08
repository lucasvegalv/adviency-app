import { useState } from 'react'
import { v4 as uuid } from 'uuid'

function App() {

// HOOKS 
const [ value, setValue ] = useState('')
const [ items, setItems ] = useState([])
const [ quant, setQuant ] = useState('')

// Generate Universal Unique IDs
const uniqueId = uuid()

// EVENT HANDLER FUNCTIONS

// Save Input Changes
const handleChange = (e) => {
  setValue(e.target.value)
  }
  
  
  // Add Input To The List
  const handleAdd = () => {
    const item = {
      id: uniqueId,
      value: value,
      quant: quant,
      completed: false
    } 

    if(value !== '') {
      setItems([...items, item])
    } else {
      alert("Please enter a present")
    }
    setValue('')
  }

  // Add the input pressing 'enter' key
  const handleKeyDown = (e) => { e.key === 'Enter' && handleAdd() }
  
  // Delete Item
  const handleDelete = (id) => {
    const filteredItems = items.filter(items => items.id !== id)
    setItems(filteredItems)
  }
  
  // Delete All Items
  const handleDeleteAllItems = () => {
    const deletedAll = items.filter(item => item !== item)
    setItems(deletedAll)
  }
  
  // Select Item Quantity
  const handleSelectQuant = (e) => {
    const itemQuant = e.target.value
    setQuant(itemQuant)
    console.log(quant)
  }

  // Render The Item's List
  const itemList = items.map(item => 
    (
      <li key={item.id}> {item.value} {(item.quant) > 1 && `(${item.quant})`} <button onClick={() => handleDelete(item.id)}>X</button> </li>
    ))
  
  // Conditional Item Quant Render  
  // Alert the user if there's no items yet
  const noItemsAlert = items.length === 0 && <p>Christmas is coming! Let's buy some cool things</p>

  return (
    <>
      <div>
        <h1>Adviency</h1>
        <p>Don't forget to buy your presents!</p>
      </div>

      <div>
        <input type="text" onKeyDown={handleKeyDown} onChange={handleChange} value={value} placeholder="Add a present to buy" autoFocus/>
        <select name="selectNumbers" id="selectNumbers" onChange={handleSelectQuant}>
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
