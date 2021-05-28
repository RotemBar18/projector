import { Component } from 'react';

import React from 'react'
// import { Link } from 'react-router-dom'

export class TaskOptions extends Component {
    state = {
        task: {
            title: ''
        }
    }

    onUpdateTask = (task) => {
        // this.props.onToggleTaskOptions()
        task = { ...task, title: this.state.task.title }
        this.props.onUpdateTask(task)
    }




    handleChange = (ev) => {
        const value = ev.target.value;
        const key = ev.target.name;
        this.setState({ task: { [key]: value } });
    }
    render() {
        const { task} = this.props
        return (
            <React.Fragment>
                <div onClick={onToggleTaskOptions} className='task-options-window'></div>
                <div className='task-options-container'>
                    <div className='change-task-title'>
                        <textarea cols='1' rows='8' type="text" className='new-title-input' placeholder={task.title} name='title' onChange={this.handleChange}></textarea>
                        <button onClick={() => this.onUpdateTask(task)}>Save</button>
                    </div>
                    <div className='options-btns'>
                        <button >Edit Labels</button>
                        <button >Change Members</button>
                        <button >Change Due Date</button>
                        <button onClick={onDeleteTask}>Delete</button>
                    </div>

                    {/* <button onClick={onDeleteTask}>Delete List</button> */}
                </div>
            </React.Fragment>
        )

    }
}

