import React from 'react'
import { ListItem } from '../styled-components/Tags'
import { SpacedBtwWrapper } from '../styled-components/Wrapper'
import { DeleteItemBtn } from '../styled-components/Button'

function ItemList({ id, value, price, onClickFunction }) {
  return (
      <ListItem> 

        <SpacedBtwWrapper>
          {/* <img src={item.img} style={{height:"3em", width:"5em"}}/> */}
          <div style={{marginRight: "3em", width: "5em", textAlign: "left"}}>
            {value} 
          </div>
          {price > 0 ? `$${(price).toLocaleString()}` : ''}
        </SpacedBtwWrapper>

        <DeleteItemBtn onClick={onClickFunction}>X</DeleteItemBtn> 

      </ListItem>
  )
}

export default ItemList