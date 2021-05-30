import { Link } from 'react-router-dom'
import React from 'react';
// import image from '../assets/imgs/b101.jpg'

export function BoardPreview({ board }) {
    const img = board.style.imgUrl
    const clr = board.style.bgColor
    return (
        <Link to={`/board/${board._id}`} key={board._id} style={{ textDecoration: 'none' }}>
            <div key={board._id} className="board-preview" style={(img) ? { backgroundImage: `url(${img})` } : { backgroundColor: clr }}>
                <h3>{board.title}</h3>
            </div>
        </Link>
    )
}
