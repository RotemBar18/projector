import { Component } from 'react';
import { taskService } from '../services/taskService.js'
import React from 'react'
import { Link } from 'react-router-dom'
import { LabelPreview } from './LabelPreview.jsx'
import { TaskOptions } from './TaskOptions.jsx';

export class TaskPreview extends Component {

    state = {
        isTaskOptionsShow: false
    }

    getLableById = (labelId) => {
        return this.props.board.labels.find(label => label.id === 'l' + labelId)
    }

    toggleTaskDetails = () => {
        this.setState({ isTaskDetailsShow: !this.state.isTaskDetailsShow })
    }
    toggleTaskOptions = ()=>{
        this.setState({ isTaskOptionsShow: !this.state.isTaskOptionsShow })
        
    }

    convertNumToDate = (deuDate) => {
        if (!deuDate) return
        const deuDatePreview = taskService.getDueDatePreview(deuDate)
        return deuDatePreview
    }
    getChecklistsPreview = (checklists) => {
        const preview = taskService.getPreview(checklists)
        return (preview)
    }

    render() {
        const {board, group, task,onUpdateTask } = this.props
        const {isTaskOptionsShow } = this.state
        return (
            <article className={`task-container`}>
                <div className='label-list'>
                    {(task.labelIds) ? task.labelIds.map(labelId => {
                        const label = this.getLableById(labelId)
                        return <LabelPreview lable={label} />
                    }) : ''}
                </div>
                <Link to={`/board/${board._id}/${group.id}/${task.id}`} className="link"><h5>{task.title}</h5>
</Link>
                <div className='badges'>
                    <div className='dew-date'>
                        {this.convertNumToDate(task.dueDate)}
                    </div>
                    <div className='checklists-preview'>
                        {(task.checklists) ? this.getChecklistsPreview(task.checklists) : ''}
                    </div>
                </div>
                <button onClick={this.toggleTaskOptions} className='task-options'>Edit</button>
                {isTaskOptionsShow &&
                    <TaskOptions onUpdateTask={onUpdateTask} task={task} onToggleTaskOptions={this.toggleTaskOptions}/>}
            </article>
        )

    }
}

