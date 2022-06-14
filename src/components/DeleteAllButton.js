import React from 'react'
import { DeleteAllBtn } from '../styled-components/Button'

function DeleteAllButton({deleteAllFunction}) {
  return (
    <DeleteAllBtn onClick={deleteAllFunction}>Delete All</DeleteAllBtn>
  )
}

export default DeleteAllButton