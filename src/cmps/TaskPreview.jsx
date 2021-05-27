import { Component } from 'react';
import {TaskDetails} from './TaskDetails.jsx'

import React from 'react'
// import { Link } from 'react-router-dom'
import { LabelPreview } from './LabelPreview.jsx'

export class TaskPreview extends Component {

    state = {
        isTaskDetailsShow: false,
    }

   getLableById = (labelId) => {
        return this.props.board.labels.find(label => label.id === 'l' + labelId)
    }

    toggleTaskDetails = () => {
        this.setState({ isTaskDetailsShow: !this.state.isTaskDetailsShow })
      }

    convertNumToDate = (deuDate) => {
        const date = new Date(1546108200 * 1000);
        const month = date.getUTCMonth()
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        const subMonth = monthNames[month].substring(0,3)
        const day = date.getUTCDate()
        return `${subMonth} ${day} `
    }

    render(){ 
        const {task} = this.props
        const {isTaskDetailsShow} = this.state
        return (
            <article onClick = {this.toggleTaskDetails} className={`task-container`}>
        <div className='label-list'>
        {(task.labelIds) ? task.labelIds.map(labelId => {
            const label = this.getLableById(labelId)
            return <LabelPreview lable={label}/>
        }) : ''}
        </div>
        <h4>{task.title} </h4>
        <div className='dew-date'>
        {this.convertNumToDate(task.dueDate)}
        </div>
            {/* <button onClick={() => onRemoveToy(toy._id)}>x</button> */}
            {/* <Link className="toy-details" to={`/toy/details/${toy._id}`}>Details</Link> */}
            {/* <Link className="toy-edit" to={`/toy/edit/${toy._id}`}>edit</Link> */}

            {isTaskDetailsShow &&
                <TaskDetails toggleTaskDetails={this.toggleAddMail}>TaskDetails</TaskDetails>
            }
        </article>
    )
    
}
}

