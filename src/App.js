import { v4 as uuid } from 'uuid'
import { useState } from 'react'
import { Title, UnList } from './styled-components/Tags'
import { CardWrapper } from './styled-components/Wrapper'
import Total from './components/Total'
import HLine from './components/HorizLine'
import DeleteAllButton from './components/DeleteAllButton'
import ItemList from './components/ItemList'
import NoItemsAlert from './components/NoItemsAlert'
import InputComp from './components/Input'

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
    quant: quant, 
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
    
    console.log(total);
    console.log(parseFloat(total));
    console.log(deletedItemPrice);

    setItems(filteredItems)
    setTotal(filteredTotal)    
  }

// Render The Item's List
  const itemList = items.map(item => 
    (
      <ItemList onClickFunction={() => handleDelete(item.id)} key={item.id} id={item.id} value={item.value} price={item.price} quant={item.quant}/>
    ))
  
  return (
  <CardWrapper>
    <Title>Adviency</Title>

    <InputComp value={value} price={price} keyDown={handleKeyDown} itemChange={handleItemChange} priceChange={handlePriceChange} selectChange={handleSelectQuant} addClick={handleAdd} />

    <UnList>
      { itemList }
      { items.length === 0 && <NoItemsAlert /> }
    </UnList>

    <HLine />

    <Total total={total}/>
    
    <DeleteAllButton deleteAllFunction={handleDeleteAllItems} />
  </CardWrapper>
  );
}

export default App;