import { v4 as uuid } from 'uuid'
import { useState } from 'react'
import { Title, UnList, ListItem } from './styled-components/Tags'
import { Button, AddButton, DeleteAllBtn, DeleteItemBtn } from './styled-components/Button'
import { Wrapper, CardWrapper, BtnWrapper, ColumnWrapper, SpacedBtwWrapper } from './styled-components/Wrapper'
import { Input, Select } from './styled-components/Input'
import Total from './components/Total'
import HLine from './components/HorizLine'
import SelectInput from './components/SelectInput'
import DeleteAllButton from './components/DeleteAllBtn'
import ItemList from './components/ItemList'

function App() {

// HOOKS 
  const [ items, setItems ] = useState([])
  const [ value, setValue ] = useState('')
  const [ price, setPrice ] = useState('')
  const [ quant, setQuant ] = useState('')
  const [ total, setTotal ] = useState(0)
  // const [ imgValue, setImgValue ] = useState('')

//FUNCTIONS

// Generate Universal Unique IDs
  const uniqueId = uuid()



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
    setTotal(0)
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
    price: quant > 1 ? parseFloat(price) * quant : parseFloat(price),
    isCompleted: false
    // img: isValidUrl(imgValue) ? imgValue : defaultImg, 
  } 
  
  const pricesArr = items.map(item => item.price)
  const totalPrices = pricesArr.reduce((acc, price) => acc += price, 0)

  if(value !== '') {
    setTotal(totalPrices)
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

  // Delete Item
  const handleDelete = (id) => {
    const filteredItems = items.filter(items => items.id !== id)
    const deletedItem = items.filter(items => items.id === id)
    const deletedItemPrice = deletedItem[0].price
    const filteredTotal = parseFloat(total) - deletedItemPrice
    
    // console.log(deletedItemPrice)
    console.log(total);
    console.log(parseFloat(total));
    console.log(deletedItemPrice);
    // console.log(filteredTotal)
    setItems(filteredItems)
    setTotal(filteredTotal)    
  }

// Render The Item's List
  const itemList = items.map(item => 
    (
      <ItemList onClickFunction={() => handleDelete(item.id)} key={item.id} id={item.id} value={item.value} price={item.price} />
    ))
  
  // Alert the user if there's no items yet
  const noItemsAlert = items.length === 0 && <p style={{margin: "1em", width: "100%", textAlign: "left"}}>Let's buy some cool things!</p>

  return (
  <CardWrapper>
    <Title>Adviency</Title>

    <SpacedBtwWrapper style={{width: "100%"}}>
      <Input type="text" onKeyDown={handleKeyDown} onChange={handleItemChange} value={value} placeholder="Fruits" autoFocus/>
      <Input type="text" step="0.1" min="0" onKeyDown={handleKeyDown} onChange={handlePriceChange} value={price} placeholder="100.50"/>
      {/* <Input type="url" onKeyDown={handleKeyDown} name="itemImg" id="itemImg" onChange={handleImgChange} value={imgValue} placeholder="Image URL"/> */}

      <SelectInput onKeyDownFunc={handleKeyDown} onChangeFunc={handleSelectQuant}/>

      <AddButton onKeyDown={handleKeyDown} onClick={handleAdd}>Add</AddButton>
    </SpacedBtwWrapper>

    <UnList>
      {itemList}
      {noItemsAlert}
    </UnList>

    <HLine />

    <Total total={total}/>
    
    <DeleteAllButton deleteAllFunction={handleDeleteAllItems} />
  </CardWrapper>
  );
}

export default App;