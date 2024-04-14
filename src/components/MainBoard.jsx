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
    const [whitesMove, setWhitesMove] = useState(true);
    const [highlight, setHighlight] = useState({
        on: false,
        square: null
    });

    const changeMoveOn = (row, col, piece) => {
        if(piece.piece === 'r') {
            let i = row;
            let j = col;
            let arr = highlight.on ? Array(64).fill(false, 0) : [...moveOn];
            while(i < 7) {
                i++;
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
            while(j < 7) {
                j++;
                if(data[(i*8)+j] != null) {
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
            let arr = highlight.on ? Array(64).fill(false, 0) : [...moveOn];
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
        } else if(piece.piece === 'q') {
            let i = row;
            let j = col;
            let arr = highlight.on ? Array(64).fill(false, 0) : [...moveOn];
            while(i < 7) {
                i++;
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
            while(j < 7) {
                j++;
                if(data[(i*8)+j] != null) {
                    // console.log(data[i*8+j])
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
        } else if(piece.piece === 'k') {
            let i = row;
            let j = col;
            let arr = highlight.on ? Array(64).fill(false, 0) : [...moveOn];
            if(i > 0) {
                if(data[(i-1)*8+j] == null || data[(i-1)*8+j].col !== piece.col) {
                    arr[(i-1)*8+j] = true;
                }
                if(j > 0 && (data[(i-1)*8+j-1] == null || data[(i-1)*8+j-1].col !== piece.col)) {
                    arr[(i-1)*8+j-1] = true;
                }
                if(j < 7 && (data[(i-1)*8+j+1] == null ||  data[(i-1)*8+j+1].col !== piece.col)) {
                    arr[(i-1)*8+j+1] = true;
                }
            }
            if(j > 0 && (data[i*8+j-1] == null || data[i*8+j-1].col !== piece.col)) {
                arr[i*8+j-1] = true;
            }
            if(j < 7 && (data[i*8+j+1] == null || data[i*8+j+1].col !== piece.col)) {
                arr[i*8+j+1] = true;
            }
            if(i < 7) {
                if(data[(i+1)*8+j].col == null || data[(i+1)*8+j].col !== piece.col) {
                    arr[(i+1)*8+j] = true;
                }
                if(j > 0 && (data[(i+1)*8+j-1] == null || data[(i+1)*8+j-1].col !== piece.col)) {
                    arr[(i+1)*8+j-1] = true;
                }
                if(j < 7 && (data[(i+1)*8+j+1] == null || data[(i+1)*8+j+1].col !== piece.col)) {
                    arr[(i+1)*8+j+1] = true;
                }
            }
            setMoveOn(arr);
        } else if(piece.piece === 'n') {
            let i = row;
            let j = col;
            let arr = highlight.on ? Array(64).fill(false, 0) : [...moveOn];
            if(i > 0) {
                if(j > 1 && (data[(i-1)*8+j-2] == null || data[(i-1)*8+j-2].col !== piece.col)) {
                    arr[(i-1)*8+j-2] = true;
                }
                if(j < 6 && (data[(i-1)*8+j+2] == null || data[(i-1)*8+j+2].col !== piece.col)) {
                    arr[(i-1)*8+j+2] = true;
                }
            }
            if(i > 1) {
                if(j > 0 && (data[(i-2)*8+j-1] == null || data[(i-2)*8+j-1].col !== piece.col)) {
                    arr[(i-2)*8+j-1] = true;
                }
                if(j < 7 && (data[(i-2)*8+j+1] == null || data[(i-2)*8+j+1].col !== piece.col)) {
                    arr[(i-2)*8+j+1] = true;
                }
            }
            if(i < 6) {
                if(j > 0 && (data[(i+2)*8+j-1] == null || data[(i+2)*8+j-1].col !== piece.col)) {
                    arr[(i+2)*8+j-1] = true;
                }
                if(j < 7 && (data[(i+2)*8+j+1] == null || data[(i+2)*8+j+1].col !== piece.col)) {
                    arr[(i+2)*8+j+1] = true;
                }
            }
            if(i < 7) {
                if(j > 1 && (data[(i+1)*8+j-2] == null || data[(i+1)*8+j-2].col !== piece.col)) {
                    arr[(i+1)*8+j-2] = true;
                }
                if(j < 6 && (data[(i+1)*8+j+2] == null || data[(i+1)*8+j+2].col !== piece.col)) {
                    arr[(i+1)*8+j+2] = true;
                }
            }
            setMoveOn(arr);
        } else if(piece.piece === 'p') {
            let i = row;
            let j = col;
            let arr = highlight ? Array(64).fill(false, 0) : [...moveOn];
            if(piece.col === 'b') {
                if(data[(i+1)*8+j] == null) {
                    arr[(i+1)*8+j] = true;
                }
                if(i === 1 && data[(i+2)*8+j] == null) {
                    arr[(i+2)*8+j] = true;
                }
                if(j > 0 && data[(i+1)*8+j-1] != null && data[(i+1)*8+j-1].col !== piece.col) {
                    arr[(i+1)*8+j-1] = true;
                }
                if(j < 7 && data[(i+1)*8+j+1] != null && data[(i+1)*8+j+1].col !== piece.col) {
                    arr[(i+1)*8+j+1] = true;
                }
            } else if(piece.col === 'w') {
                if(data[(i-1)*8+j] == null) {
                    arr[(i-1)*8+j] = true;
                }
                if(i === 6 && data[(i-2)*8+j] == null) {
                    arr[(i-2)*8+j] = true;
                }
                if(j > 0 && data[(i-1)*8+j-1] != null && data[(i-1)*8+j-1].col !== piece.col) {
                    arr[(i-1)*8+j-1] = true;
                }
                if(j < 7 && data[(i-1)*8+j+1] != null && data[(i-1)*8+j+1].col !== piece.col) {
                    arr[(i-1)*8+j+1] = true;
                }
            }
            setMoveOn(arr);
        }
        if(highlight.on) {
            
        }
        setHighlight({
            on: true,
            square: row*8+col
        });
    }

    const findMoveAndUpdate = (e, row, col, piece) => {
        // console.log(e.currentTarget);
        if(piece === null) return;
        if(!moveOn[(row*8)+col] && ((whitesMove && piece.col === 'w') || (!whitesMove && piece.col) === 'b')) {
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