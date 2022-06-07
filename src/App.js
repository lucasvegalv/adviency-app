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
  
  // ADD INPUT TO THE LIST
  const handleClick = () => {
    
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
    // PENDING VALIDATION
    // if(items.find(item => item.value = value)) {
    //   alert("Este item ya lo tenes!")
    // }
  }

  // ADD THE INPUT PRESSING 'ENTER' KEY 
  const handleKeyDown = (e) => { e.key === 'Enter' && handleClick() }
  
  // DELETE ITEM
  const handleDelete = (id) => {
    const filteredItems = items.filter(items => items.id != id)
    setItems(filteredItems)
    console.log(items)
  }
    
 


  // RENDER THE ITEM LIST
  const itemList = items.map(item => (<li key={item.id} >{item.value} <button onClick={() => handleDelete(item.id)}>X</button></li>))

  return (
    <>
      <div>
        <h1>Adviency</h1>
        <p>Don't forget to buy your presents!</p>
      </div>

      <div>
        <input type="text" onKeyDown={handleKeyDown} onChange={handleChange} value={value} placeholder="Add a present to buy" autoFocus/>
        <button  onClick={handleClick}>Add</button>
        <ul>
          {itemList}
        </ul>
      </div>
    </>
  );
}

export default App;
