import { v4 as uuid } from 'uuid'
import { useState } from 'react'
import { Title, UnList, ListItem } from './styled-components/Tags'
import { Button, AddButton, DeleteAllBtn, DeleteItemBtn } from './styled-components/Button'
import { Wrapper, CardWrapper, BtnWrapper, ColumnWrapper, SpacedBtwWrapper } from './styled-components/Wrapper'
import { Input, Select } from './styled-components/Input'


function App() {

// HOOKS 
  const [ items, setItems ] = useState([])
  const [ value, setValue ] = useState('')
  // const [ imgValue, setImgValue ] = useState('')
  const [ price, setPrice ] = useState('')
  const [ quant, setQuant ] = useState('')

//FUNCTIONS

// Generate Universal Unique IDs
  const uniqueId = uuid()

// Delete Item
  const handleDelete = (id) => {
    const filteredItems = items.filter(items => items.id !== id)
    setItems(filteredItems)
  }
// Save Input Changes
  const handleItemChange = (e) => {
    setValue(e.target.value)
  }
// Save IMG URL Input Changes 
  // const handleImgChange = (e) => {
  //   setImgValue(e.target.value)
  // }

  const handlePriceChange = (e) => {
    setPrice(e.target.value)
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
  }
  
  // const isValidUrl = (str) => {
  //   const matchPattern = /^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/;
  //   return matchPattern.test(str);
  // }

// Add Input To The List
const handleAdd = () => {
  
    // const defaultImg = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS83g_cMIkYmsVOSF_pn9jkF9Ty849X-2vzaA&usqp=CAU'
    
    const item = {
      id: uniqueId,
      value: value,
      price: quant >= 1 ? price * quant : price,
      // img: isValidUrl(imgValue) ? imgValue : defaultImg, 
      // quant: quant,
      completed: false
    } 
        
    if(value !== '') {
      setItems([...items, item])
    } else {
      alert("Please enter a present")
    }
  setValue('')
  setPrice('')
  // setImgValue('')
}
  
// Add the input pressing 'enter' key
  const handleKeyDown = (e) => { 
    e.key === 'Enter' && handleAdd() 
  }

// Render The Item's List
  const itemList = items.map(item => 
    (
      <ListItem key={item.id}> 

        <SpacedBtwWrapper>
          {/* <img src={item.img} style={{height:"3em", width:"5em"}}/> */}
          <div style={{"margin-right": "3em", width: "5em", "text-align": "left"}}>
            {item.value} 
          </div>
          {item.price > 0 ? `$${item.price}` : ''}
        </SpacedBtwWrapper>

        <DeleteItemBtn onClick={() => handleDelete(item.id)}>X</DeleteItemBtn> 
      </ListItem>
    ))
  
  // Alert the user if there's no items yet
  const noItemsAlert = items.length === 0 && <p style={{margin: "1em", width: "100%", "text-align": "left"}}>Let's buy some cool things!</p>

  return (
  <CardWrapper>
    <Title>Adviency</Title>

    <SpacedBtwWrapper style={{width: "100%"}}>
      <Input type="text" onKeyDown={handleKeyDown} onChange={handleItemChange} value={value} placeholder="Name" autoFocus/>
      <Input type="number" onKeyDown={handleKeyDown} onChange={handlePriceChange} value={price} placeholder="Price"/>
      {/* <Input type="url" onKeyDown={handleKeyDown} name="itemImg" id="itemImg" onChange={handleImgChange} value={imgValue} placeholder="Image URL"/> */}

      <Select onKeyDown={handleKeyDown} name="selectNumbers" id="selectNumbers" onChange={handleSelectQuant}>
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
      </Select>

      <AddButton onKeyDown={handleKeyDown} onClick={handleAdd}>Add</AddButton>
    </SpacedBtwWrapper>

    <UnList>
      {itemList}
      {noItemsAlert}
    </UnList>

    <hr style={{color: "black", "background-color":"black", width:"100%", "margin-top":"0"}}/>

    <h3 style={{width: "100%", "text-align": "left", margin: "0"}}>Total: </h3>

    <DeleteAllBtn onClick={handleDeleteAllItems}>Delete All</DeleteAllBtn>
  </CardWrapper>
  );
}

export default App;