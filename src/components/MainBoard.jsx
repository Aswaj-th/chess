import React from 'react'
import Row from './Row';
import './MainBoard.css'
import jsonData from '../pieces.json';
import { useState } from 'react';

const createData = () => {
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
    //console.log(arr);
    return arr;
}

function MainBoard() {
    
    const [data, setData] = useState(createData());
    const [moveOn, setMoveOn] = useState(createMoveOnArray());

    const changeMoveOn = (row, col, piece) => {
        if(piece.piece === 'r') {
            let i = row;
            let j = col;
            let arr = [...moveOn];
            while(i < 7) {
                i++;
                if(data[(i*8)+j] != null) {
                    console.log(`i: ${i} j:${j} datacol:${data[i*8+j]} piececol: ${piece.col}`)
                    if(data[(i*8)+j].col !== piece.col) {
                        arr[(i*8)+j] = true;
                    }
                    break;
                } else {
                    arr[(i*8)+j] = true;
                }
            }
            i=row;
            j=col;
            while(j < 7) {
                j++;
                if(data[(i*8)+j] != null) {
                    console.log(`i: ${i} j:${j} datacol:${data[i*8+j]} piececol: ${piece.col}`)
                    console.log(data[i*8+j])
                    if(data[(i*8)+j].col !== piece.col) {
                        arr[(i*8)+j] = true;
                    }
                    break;
                } else {
                    arr[(i*8)+j] = true;
                }
            }
            i = row;
            j = col;
            while(i > 0) {
                i--;
                if(data[(i*8)+j] != null) {
                    console.log(`i: ${i} j:${j} datacol:${data[i*8+j]} piececol: ${piece.col}`)
                    if(data[(i*8)+j].col !== piece.col) {
                        arr[(i*8)+j] = true;
                    }
                    break;
                } else {
                    arr[(i*8)+j] = true;
                }
            }
            i=row;
            j=col;
            while(j > 0) {
                j--;
                if(data[(i*8)+j] != null) {
                    console.log(`i: ${i} j:${j} datacol:${data[i*8+j]} piececol: ${piece.col}`)
                    if(data[(i*8)+j].col !== piece.col) {
                        arr[(i*8)+j] = true;
                    }
                    break;
                } else {
                    arr[(i*8)+j] = true;
                }
            }
            setMoveOn(arr);
            // console.log(moveOn);
        } else if(piece.piece === 'b') {
            let i = row;
            let j = col;
            let arr = [...moveOn];
            while(i < 7 && j < 7) {
                i++;
                j++;
                if(data[(i*8)+j] != null) {
                    if(data[(i*8)+j].col !== piece.col) {
                        arr[(i*8)+j] = true;
                    }
                    break;
                } else {
                    arr[(i*8)+j] = true;
                }
            }
            i = row;
            j = col;
            while(i < 7 && j > 0) {
                i++;
                j--;
                if(data[(i*8)+j] != null) {
                    if(data[(i*8)+j].col !== piece.col) {
                        arr[(i*8)+j] = true;
                    }
                    break;
                } else {
                    arr[(i*8)+j] = true;
                }
            }
            i = row;
            j = col;
            while(i > 0 && j < 7) {
                i--;
                j++;
                if(data[(i*8)+j] != null) {
                    if(data[(i*8)+j].col !== piece.col) {
                        arr[(i*8)+j] = true;
                    }
                    break;
                } else {
                    arr[(i*8)+j] = true;
                }
            }
            i=row;
            j=col;
            while(i > 0 && j > 0) {
                i--;
                j--;
                if(data[(i*8)+j] != null) {
                    if(data[(i*8)+j].col !== piece.col) {
                        arr[(i*8)+j] = true;
                    }
                    break;
                } else {
                    arr[(i*8)+j] = true;
                }
            }
            setMoveOn(arr);
            // console.log(moveOn);
        }
    }

    const findMoveAndUpdate = (e, row, col, piece) => {
        // console.log(e.currentTarget);
        if(piece === null) return;
        if(!moveOn[(row*8)+col]) {
            e.currentTarget.style.background = 'yellow';
            changeMoveOn(row, col, piece);
        }
    }

    //console.log(jsonData);
    return (
        <div className="mainBoard">
            <Row row={0} data={data} moveOn={moveOn.slice(0, 8)} findMoveAndUpdate={findMoveAndUpdate}/>
            <Row row={1} data={data} moveOn={moveOn.slice(8, 16)} findMoveAndUpdate={findMoveAndUpdate}/>
            <Row row={2} data={data} moveOn={moveOn.slice(16, 24)} findMoveAndUpdate={findMoveAndUpdate}/>
            <Row row={3} data={data} moveOn={moveOn.slice(24, 32)} findMoveAndUpdate={findMoveAndUpdate}/>
            <Row row={4} data={data} moveOn={moveOn.slice(32, 40)} findMoveAndUpdate={findMoveAndUpdate}/>
            <Row row={5} data={data} moveOn={moveOn.slice(40, 48)} findMoveAndUpdate={findMoveAndUpdate}/>
            <Row row={6} data={data} moveOn={moveOn.slice(48, 56)} findMoveAndUpdate={findMoveAndUpdate}/>
            <Row row={7} data={data} moveOn={moveOn.slice(56)} findMoveAndUpdate={findMoveAndUpdate}/>
        </div>
    )
}

export default MainBoard