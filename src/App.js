import { useState } from 'react'
import Popup from './components/popup/Popup'
import Title from './styled-components/Title'
import { Button } from './styled-components/Button'
import { CardWrapper, BtnWrapper, ColumnWrapper } from './styled-components/Wrapper'


function App() {

// HOOKS 
  const [ items, setItems ] = useState([])
  const [ popup, setPopup ] = useState(false)

//FUNCTIONS
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
  
// Handle Toggle Popup
  const handleTogglePopup = () => {
    setPopup(!popup)
  }

// Render The Item's List
  const itemList = items.map(item => 
    (
      <li key={item.id}> 
        <img src={item.img} height="40px"/>
        {item.value} 
        {(item.quant) > 1 && `(${item.quant})`} 
        <button onClick={() => handleDelete(item.id)}>X</button> 
      </li>
    ))
  
  // Alert the user if there's no items yet
  const noItemsAlert = items.length === 0 && <small>Christmas is coming! Let's buy some cool things</small>

  return (
    <>
    <ColumnWrapper>
      <CardWrapper>
        <Title>Adviency</Title>
      <div>
        <Button onClick={handleTogglePopup}>Add Item</Button>
        { popup && <Popup/> }
        <ul>
          {itemList}
          {noItemsAlert}
        </ul>
        <Button onClick={handleDeleteAllItems}>Delete All</Button>
      </div>
      </CardWrapper>
    </ColumnWrapper>
    </>
  );
}

export default App;