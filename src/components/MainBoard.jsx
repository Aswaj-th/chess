import React from 'react'
import Square from './Square'
import './MainBoard.css'
import jsonData from '../pieces.json';
import { useState } from 'react';

const findPiece = (row, col, data) => {
    //console.log(jsonData[(row*8)+col]);
    return data[(row*8)+col]
}

const createRow = (i, data, setData) => {
    let content = [];
    for(let j = 0; j < 8; j++) {
        const piece = findPiece(i, j, data)
        content.push(<Square key={j} row={i} col={j} piece={piece} data={data} setData={setData}/>)
        // console.log(piece);
    }
    return content;
}

const createBoard = (data, setData) => {
    let content = [];
    for(let i = 0; i < 8; i++) {
        content.push(
            <div className="row" key={i}>
                {createRow(i, data, setData)}
            </div>
        )
    }
    //console.log(content);
    return content;
}

const createData = (jsonData) => {
    let arr = [];
    let j = 0;
    for(let i = 0; i < 64; i++) {
        if(i < 16) arr.push(jsonData[j++]);
        else if(i < 48) arr.push(null);
        else arr.push(jsonData[j++]);
    }
    //  console.log(arr);
    return arr;
}

const createMoveOnArray = () => {
    let arr = Array(64).fill(false, 0);
    console.log(arr);
    return arr;
}

function MainBoard() {
    //console.log(jsonData);
    const [started, setStarted] = useState(false);
    const [data, setData] = useState(createData(jsonData));
    const [moveOn, setMoveOn] = useState(createMoveOnArray());
    return (
        <div className="mainBoard">
            {!started && createBoard(data, setData)}
            {started && createBoard(data, setData)}
        </div>
    )
}

export default MainBoard