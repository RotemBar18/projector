import { Component } from 'react';
import { LabelsList } from './LabelsList.jsx'
import { MembersList } from './MembersList.jsx'
import { Draggable } from 'react-beautiful-dnd';
import React from 'react'
// import { Link } from 'react-router-dom'

export class TaskOptions extends Component {
    state = {
        isEditLabelsOpen: false,
        isEditMembersOpen: false,
        task: {
            title: ''
        }
    }

    onUpdateTask = (task) => {
        this.props.onToggleTaskOptions()
        task = { ...task, title: this.state.task.title }
        this.props.onUpdateTask(task)
    }
    handleChange = (ev) => {
        const value = ev.target.value;
        const key = ev.target.name;
        this.setState({ task: { [key]: value } });
    }

    toggleEditLabels = () => {
        this.setState({ isEditLabelsOpen: !this.state.isEditLabelsOpen })
    }
    toggleEditMembers = () => {
        this.setState({ isEditMembersOpen: !this.state.isEditMembersOpen })
    }

    preventDragHandler = (e) => {
        console.log(e)
        e.preventDefault();
      }

    render() {
        const { isEditLabelsOpen, isEditMembersOpen} = this.state
        const { checkLabel, updateLabel, addLabelToBoard, onRemoveLabel, onDeleteTask, onToggleTaskOptions, task, board, onAddLabel, toggleTaskMember } = this.props
        return (
            <React.Fragment>
                <div  onClick={onToggleTaskOptions} className='task-options-window' ></div>
                <div className='task-options-container'>
                    <div className='change-task-title'>
                        <textarea cols='1' rows='8' type="text" className='new-title-input' placeholder={task.title} name='title' onChange={this.handleChange}></textarea>
                        <button onClick={() => this.onUpdateTask(task)}>Save</button>
                    </div>
                    <div className='options-btns'>
                        <button className='options-btn' onClick={this.toggleEditLabels} >Edit Labels</button>
                        {isEditLabelsOpen &&
                            <LabelsList updateLabel={updateLabel} addLabelToBoard={addLabelToBoard} checkLabel={checkLabel} onRemoveLabel={onRemoveLabel} task={task} onAddLabel={onAddLabel} toggleEditLabels={this.toggleEditLabels} board={board} />
                        }
                        {isEditMembersOpen &&
                            <MembersList toggleTaskMember={toggleTaskMember} board={board} task={task} toggleEditMembers={this.toggleEditMembers} />
                        }

                        <button className='options-btn' onClick={this.toggleEditMembers} >Change Members</button>
                        <button className='options-btn' onClick={this.toggleChangeDueDate} >Change Due Date</button>
                        <button className='options-btn' onClick={() => onDeleteTask(task.id)}>Delete</button>
                    </div>

                    {/* <button onClick={onDeleteTask}>Delete List</button> */}
                </div>
            </React.Fragment>
        )

    }
}

