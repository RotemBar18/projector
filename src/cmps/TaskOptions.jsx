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
        this.props.onToggleTaskOptions()
        task = { ...task, title: this.state.task.title }
        this.props.onUpdateTask(task)
    }




    handleChange = (ev) => {
        const value = ev.target.value;
        const key = ev.target.name;
        this.setState({ task: { [key]: value } });
    }
    render() {
        const { task, onToggleTaskOptions, onDeleteTask } = this.props
        return (
            <div className='group-options-container'>
                <input type="text" placeholder={task.title} name='title' onChange={this.handleChange} />
                <button onClick={() => this.onUpdateTask(task)}>Save</button>
                {/* <button onClick={onDeleteTask}>Delete List</button> */}
            </div>
        )

    }
}

