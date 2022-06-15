import React from 'react'
import { ListItem } from '../styled-components/Tags'
import { SpacedBtwWrapper, Wrapper } from '../styled-components/Wrapper'
import { DeleteItemBtn } from '../styled-components/Button'

function ItemList({ id, value, price, quant, onClickFunction }) {
  const valueAndQuant = `${value} - (x${quant})`;

  return (
      <ListItem> 

        <SpacedBtwWrapper>
          {/* <img src={item.img} style={{height:"3em", width:"5em"}}/> */}
          <Wrapper style={{ width: "7em", textAlign: "left" }}>
            { quant > 1 ? valueAndQuant : `${value}` } 
          </Wrapper>

          {price > 0 ? `$${(price).toLocaleString()}` : ''}
        
        </SpacedBtwWrapper>

        <DeleteItemBtn onClick={onClickFunction}>X</DeleteItemBtn> 

      </ListItem>
  )
}

export default ItemList