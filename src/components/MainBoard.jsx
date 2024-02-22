import React from 'react'
import Square from './Square'
import './MainBoard.css'

const createRow = (i) => {
    let content = [];
    for(let j = 0; j < 8; j++) {
        content.push(<Square row={i} col={j}/>)
    }
    return content;
}

const createBoard = () => {
    let content = [];
    for(let i = 0; i < 8; i++) {
        content.push(
            <div className="row">
                {createRow(i)}
            </div>
        )
    }
    return content;
}   

function MainBoard() {
  return (
    <div className="mainBoard">
        {createBoard()}
    </div>
  )
}

export default MainBoard