import React from 'react'
import { ReactSVG } from 'react-svg';
const findImg = (row, col) => {
    if(row === 2 || row === 3 || row === 4 || row === 5) {
        return;
    }
    if(row === 1) return (
        <ReactSVG src="piecesPics/Chess_pdt45.svg" />
    )
    if(row === 6) return (
        <ReactSVG src="piecesPics/Chess_plt45.svg" />
    )
    if(row === 0) {
        if(col === 0 || col === 7) return (
            <ReactSVG src='piecesPics/Chess_rdt45.svg' />
        )
        if(col === 1 || col === 6) return (
            <ReactSVG src="piecesPics/Chess_ndt45.svg" />
        )
        if(col === 2 || col === 5) return (
            <ReactSVG src="piecesPics/Chess_bdt45.svg" />
        )
        if(col === 3) return (
            <ReactSVG src="piecesPics/Chess_kdt45.svg" />
        )
        if(col === 4) return (
            <ReactSVG src="piecesPics/Chess_qdt45.svg" />
        )
    }
    if(row === 7) {
        if(col === 0 || col === 7) return (
            <ReactSVG src='piecesPics/Chess_rlt45.svg' />
        )
        if(col === 1 || col === 6) return (
            <ReactSVG src="piecesPics/Chess_nlt45.svg" />
        )
        if(col === 2 || col === 5) return (
            <ReactSVG src="piecesPics/Chess_blt45.svg" />
        )
        if(col === 3) return (
            <ReactSVG src="piecesPics/Chess_klt45.svg" />
        )
        if(col === 4) return (
            <ReactSVG src="piecesPics/Chess_qlt45.svg" />
        )
    }
    return;
}

function Square({row, col}) {
    let white = (row+col)%2===1;
  return (
    <div className="square" style={{background: white ? "white" : "#26f030"}}>
        {findImg(row, col)}
    </div>
  )
}

export default Square