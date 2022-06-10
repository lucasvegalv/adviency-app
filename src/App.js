import { useState } from 'react'
import Popup from './components/popup/Popup'
import Title from './styled-components/Title'
import { Button } from './styled-components/Button'
import { CardWrapper, BtnWrapper, ColumnWrapper } from './styled-components/Wrapper'

// NECESITAMOS TRAER de Popup.jsx LA VARIBALE "items" DEL ESTADO SETITEMS ACA PARA PODER HACER EL MAP Y RENDERIZAR LA LISTA

function App() {

// HOOKS 
const [ popup, setPopup ] = useState(false)

//FUNCTIONS
  
// Delete All Items
  const handleDeleteAllItems = () => {
    const deletedAll = items.filter(item => item !== item)
    setItems(deletedAll)
  }
  
// Handle Toggle Popup
  const handleTogglePopup = () => {
    setPopup(!popup)
  }
  
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
          {/* {itemList} */}
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
