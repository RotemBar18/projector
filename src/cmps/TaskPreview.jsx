import { Component } from 'react';
import { connect } from 'react-redux'
import { TaskDetails } from './TaskDetails.jsx'
import { taskService } from '../services/taskService.js'

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
        const deuDatePreview = taskService.getDueDatePreview(deuDate)
        return deuDatePreview
    }
    getChecklistsPreview = (checklists) => {
        const preview = taskService.getPreview(checklists)
        return (preview)
    }

    render() {
        const { task } = this.props
        const { isTaskDetailsShow } = this.state
        return (
            <article onClick={this.toggleTaskDetails} className={`task-container`}>
                <div className='label-list'>
                    {(task.labelIds) ? task.labelIds.map(labelId => {
                        const label = this.getLableById(labelId)
                        return <LabelPreview lable={label} />
                    }) : ''}
                </div>
                <h4>{task.title} </h4>
                <div className='dew-date'>
                    {this.convertNumToDate(task.dueDate)}
                </div>
                {/* <button onClick={() => onRemoveToy(toy._id)}>x</button> */}
                {/* <Link className="toy-details" to={`/toy/details/${toy._id}`}>Details</Link> */}
                {/* <Link className="toy-edit" to={`/toy/edit/${toy._id}`}>edit</Link> */}
                <div className='checklists-preview'>
                    {(task.checklists) ? this.getChecklistsPreview(task.checklists) : ''}
                </div>
                {isTaskDetailsShow &&
                    <TaskDetails toggleTaskDetails={this.toggleAddMail}>TaskDetails</TaskDetails>
                }
            </article>
        )

    }
}

