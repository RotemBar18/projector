import { Link } from 'react-router-dom'
import React from 'react';

export function BoardPreview({ board }) {
    return (
        <Link to={`/board/${board._id}`} key={board._id} style={{ textDecoration: 'none' }}>
            <div key={board._id} className="board-preview">
                <h3>{board.title}</h3>
            </div>
        </Link>
    )
}