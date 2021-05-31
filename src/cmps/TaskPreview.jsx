import { Component } from 'react';
import { taskService } from '../services/taskService.js'
import React from 'react'
import Avatar from '@material-ui/core/Avatar';
// import { Link } from 'react-router-dom'
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
    toggleTaskOptions = () => {
        this.setState({ isTaskOptionsShow: !this.state.isTaskOptionsShow })

    }

    convertNumToDate = (deuDate) => {
        if (!deuDate) return
        const deuDatePreview = taskService.getDatePreview(deuDate)
        return deuDatePreview
    }
    getChecklistsPreview = (checklists) => {
        const preview = taskService.getPreview(checklists)
        return (preview)
    }

    render() {
        const { toggleTaskMember, checkLabel, updateLabel, addLabelToBoard, onRemoveLabel, board, group, task, onUpdateTask, onDeleteTask, onAddLabel } = this.props
        const { isTaskOptionsShow } = this.state
        return (
            <article className={`task-container`}>
                {isTaskOptionsShow &&
                    <TaskOptions toggleTaskMember={toggleTaskMember} updateLabel={updateLabel} addLabelToBoard={addLabelToBoard} checkLabel={checkLabel} onRemoveLabel={onRemoveLabel} onAddLabel={onAddLabel} board={board} onDeleteTask={onDeleteTask} onUpdateTask={onUpdateTask} task={task} onToggleTaskOptions={this.toggleTaskOptions} />}
                {(task.style) ? (task.style.bgColor || task.style.imgUrl) ? <div className='task-cover'>
                    {(task.style) ? (task.style.imgUrl) ? <img className='img-cover' src={task.style.imgUrl} alt="" /> : <div className='bgc-cover' style={{ backgroundColor: task.style.bgColor }}></div> : ''}
                </div> : '' : ''}
                {(task.labelIds) ? <div className='label-list'>
                    {(task.labelIds) ? task.labelIds.map(labelId => {
                        const label = this.getLableById(labelId)
                        return <LabelPreview key={label.id} lable={label} />
                    }) : ''}
                </div> : ''}
                <Link to={`/board/${board._id}/${group.id}/${task.id}`} className="link"><h5>{task.title}</h5>
                    {(task.dueDate || task.checklists || task.members) ? <div className='badges'>
                        {(task.dueDate) &&
                            <div className='dew-date'>
                                {this.convertNumToDate(task.dueDate)}
                            </div>}

                        {(task.checklists) ? <div className='checklists-preview'>
                            {this.getChecklistsPreview(task.checklists)}
                        </div> : ''}
                        <div className='avatars'>
                            {(task.members) ? task.members.map(member => {
                                return <Avatar key={member._id} className='avatar' alt={member.fullName} src={member.imgUrl} />
                            }) : ''}
                        </div>
                    </div> : ''}
                </Link>
                <button onClick={this.toggleTaskOptions} className='task-options'>...</button>

            </article>
        )

    }
}

