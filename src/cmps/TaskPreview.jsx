import React from 'react'
// import { Link } from 'react-router-dom'

export function TaskPreview({ task }) {

    return (
        <article className={`task-container`}>
            <h4>{task.title} </h4>
            {/* <button onClick={() => onRemoveToy(toy._id)}>x</button> */}
            {/* <Link className="toy-details" to={`/toy/details/${toy._id}`}>Details</Link> */}
            {/* <Link className="toy-edit" to={`/toy/edit/${toy._id}`}>edit</Link> */}
        </article>
    )

}

