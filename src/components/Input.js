import React from 'react'
import { SpacedBtwWrapper } from '../styled-components/Wrapper'
import { Input } from '../styled-components/Input'
import { AddButton } from '../styled-components/Button'
import SelectInput from './SelectInput'

function InputComp ({ keyDown, itemChange, priceChange, selectChange, value, price, addClick}) {
  return (
    <SpacedBtwWrapper style={{width: "100%"}}>
      <Input type="text" onKeyDown={keyDown} onChange={itemChange} value={value} placeholder="Fruits" autoFocus/>
      <Input type="text" step="0.1" min="0" onKeyDown={keyDown} onChange={priceChange} value={price} placeholder="100.50"/>
      {/* <Input type="url" onKeyDown={handleKeyDown} name="itemImg" id="itemImg" onChange={handleImgChange} value={imgValue} placeholder="Image URL"/> */}

      <SelectInput onKeyDownFunc={keyDown} onChangeFunc={selectChange}/>

      <AddButton onKeyDown={keyDown} onClick={addClick}>Add</AddButton>
    </SpacedBtwWrapper>
  )
}

export default InputComp