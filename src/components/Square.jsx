import React from 'react'

function Square({row, col}) {
    let white = (row+col)%2===1;
  return (
    <div className="square" style={{background: white ? "white" : "black"}}>{row} {col}</div>
  )
}

export default Square