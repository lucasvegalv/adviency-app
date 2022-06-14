import React from 'react'

function Total({total}) {
  return (
    <>
      <h3 style={{width: "100%", textAlign: "left", margin: "0"}}>
        Total: ${total}
      </h3>
    </>
  )
}

export default Total