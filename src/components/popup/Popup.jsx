import React from 'react'
import { v4 as uuid } from 'uuid'
import { useState } from 'react'
import { PopupAddBtn, PopupCancelBtn } from '../../styled-components/Button'
import { CardWrapper, Wrapper, SpacedBtwWrapper } from '../../styled-components/Wrapper'
import { Input, Select } from '../../styled-components/Input'


function Popup() {
  // HOOKS
  const [ value, setValue ] = useState('')
  const [ quant, setQuant ] = useState('')
  const [ img, setImg ] = useState('')
  const [ items, setItems ] = useState([])

  // FUNCTIONS 
  // Generate Universal Unique IDs
  const uniqueId = uuid()

  // Add Input To The List
  const handleAdd = () => {
    const item = {
      id: uniqueId,
      value: value,
      img: img,
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

  // Save Input Changes
  const handleChange = (e) => {
    setValue(e.target.value)
    }
  
  // Add the input pressing 'enter' key
    const handleKeyDown = (e) => { 
      e.key === 'Enter' && handleAdd() 
    }
    
  // Select Item Quantity
    const handleSelectQuant = (e) => {
      const itemQuant = e.target.value
      setQuant(itemQuant)
      console.log(quant)
    }
  
  // Handle Image Input 
    const handleItemImage = (e) => {
      const url = e.target.value
      setImg(url)
      console.log(url)
      console.log(img)
    }

  return (
    <>
      <CardWrapper>

          <Input type="text" onKeyDown={handleKeyDown} onChange={handleChange} value={value} placeholder="Add a present to buy" autoFocus/>
          <Input type="url" name="itemImg" id="itemImg" onChange={handleItemImage} placeholder="Add an image URL to represent the item"/>

          <SpacedBtwWrapper>
            <p>Item Quantity: </p>
            <Select name="selectNumbers" id="selectNumbers" onChange={handleSelectQuant}>
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
          </SpacedBtwWrapper>

        <SpacedBtwWrapper>
          <PopupCancelBtn>Cancel</PopupCancelBtn>
          <PopupAddBtn onClick={handleAdd}>Add</PopupAddBtn>
        </SpacedBtwWrapper>
        
      </CardWrapper>
    </>
  )
}

export default Popup