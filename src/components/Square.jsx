import React from 'react'
import { ReactSVG } from 'react-svg';
import './Square.css';
// import { useState } from 'react';

const findMoveAndUpdate = (row, col, piece, moveOn, data, setData, setMoveOn) => {
    if(piece === null) return;
    if(!moveOn) {
        
    }
}

function Square({row, col, piece, data, setData, moveOn, setMoveOn}) {
    const white = ((row+col)%2 === 0)
    return (
        <div className="square" style={{background: white ? "white" : "#26f030"}} onClick={findMoveAndUpdate(row, col, piece, moveOn, data, setData, setMoveOn)}>
            {piece !== null && <ReactSVG src={piece.pic} />}
            {moveOn && <div className='dot'></div>}
        </div>
  )
}

export default Square