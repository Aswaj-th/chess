import React from 'react'
import { ReactSVG } from 'react-svg';
// import { useState } from 'react';

function Square({row, col, piece}) {
    // const [moveOn, setMoveOn] = useState(false);
    const white = ((row+col)%2 === 0)
    return (
        <div className="square" style={{background: white ? "white" : "#26f030"}} >
            {piece !== null && <ReactSVG src={piece.pic} />}
        </div>
  )
}

export default Square