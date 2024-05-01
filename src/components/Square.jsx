import React from 'react'
import { ReactSVG } from 'react-svg';
import './Square.css';
// import { useState } from 'react';

function Square({row, col, piece, data, moveOn, findMoveAndUpdate, highlight}) {


    // const [thisMoveOn, changeThisMoveOn] = useState(moveOn[row*8+col]);
    const currentMoveOn = moveOn;
    // console.log(moveOn);
    const white = ((row+col)%2 === 0);
    return (
        <div className="square" style={{background: highlight === row*8+col ? 'yellow' : white ? "white" : "#26f030"}} onClick={(e) => findMoveAndUpdate(e, row, col, piece)}>
            {piece !== null && <ReactSVG src={piece.pic} />}
            {currentMoveOn && <div className='dot'></div>}
        </div>
  )
}

export default Square