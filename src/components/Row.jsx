import React from 'react';
import Square from './Square';

function Row( {row, data, moveOn, findMoveAndUpdate }) {
    const newMoveOn=[...moveOn]
    return (
    <div className='row'>
        {moveOn[row] && console.log("HI")}
        <Square row={row} col={0} piece={data[row*8+0]} data={data} moveOn={newMoveOn[0]} findMoveAndUpdate={findMoveAndUpdate}/>
        <Square row={row} col={1} piece={data[row*8+1]} data={data} moveOn={newMoveOn[1]} findMoveAndUpdate={findMoveAndUpdate}/>
        <Square row={row} col={2} piece={data[row*8+2]} data={data} moveOn={newMoveOn[2]} findMoveAndUpdate={findMoveAndUpdate}/>
        <Square row={row} col={3} piece={data[row*8+3]} data={data} moveOn={newMoveOn[3]} findMoveAndUpdate={findMoveAndUpdate}/>
        <Square row={row} col={4} piece={data[row*8+4]} data={data} moveOn={newMoveOn[4]} findMoveAndUpdate={findMoveAndUpdate}/>
        <Square row={row} col={5} piece={data[row*8+5]} data={data} moveOn={newMoveOn[5]} findMoveAndUpdate={findMoveAndUpdate}/>
        <Square row={row} col={6} piece={data[row*8+6]} data={data} moveOn={newMoveOn[6]} findMoveAndUpdate={findMoveAndUpdate}/>
        <Square row={row} col={7} piece={data[row*8+7]} data={data} moveOn={newMoveOn[7]} findMoveAndUpdate={findMoveAndUpdate}/>
    </div>
  )
}

export default Row