import { Link } from 'react-router-dom'
import React from 'react';
// import image from '../assets/imgs/b101.jpg'

export function BoardPreview({ board }) {
    const img = {backgroundImage: `url(` + board.style.imgUrl + `)`}
    const clr = {backgroundColor: board.style.bgColor}
    let style = clr;
    if (board.style.imgUrl) style = img
    return (
        <Link to={`/board/${board._id}`} key={board._id} style={{ textDecoration: 'none' }}>
            <div key={board._id} className="board-preview"  style={style}>
                <h3>{board.title}</h3>
            </div>
        </Link>
    )
}
