import React from 'react'
// import { Link } from 'react-router-dom'
import { LabelPreview } from './LabelPreview.jsx'


export function TaskPreview({ board, task }) {
    console.log(task);

    function getLableById(labelId) {
        console.log(labelId);
        return board.labels.find(label => label.id === 'l' + labelId)
    }
    function convertNumToDate(deuDate) {
        const date = new Date(1546108200 * 1000);
        const month = date.getUTCMonth()
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        const subMonth = monthNames[month].substring(0,3)
        const day = date.getUTCDate()
        return `${subMonth} ${day} `
    }

    return (
        <article className={`task-container`}>
            <div className='label-list'>
                {(task.labelIds) ? task.labelIds.map(labelId => {
                    const label = getLableById(labelId)
                    return <LabelPreview lable={label} />
                }) : ''}
            </div>
            <h4>{task.title} </h4>
            <div className='dew-date'>
                {convertNumToDate(task.dueDate)}
            </div>
            {/* <button onClick={() => onRemoveToy(toy._id)}>x</button> */}
            {/* <Link className="toy-details" to={`/toy/details/${toy._id}`}>Details</Link> */}
            {/* <Link className="toy-edit" to={`/toy/edit/${toy._id}`}>edit</Link> */}
        </article>
    )

}

