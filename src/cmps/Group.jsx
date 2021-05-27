import { render } from '@testing-library/react'
import React from 'react'
import { TaskList } from './TaskList.jsx'
import { GroupOptions } from './GroupOptions.jsx'


export class Group extends React.Component {
    state = {
        isGroupOptionOpen:false,
        isAddTaskOpen: false,
        task: {
            title: ''
        }
    }


    handleChange = (ev) => {
        const value = ev.target.value;
        const key = ev.target.name;
        this.setState({ task: { [key]: value } });
    }

    onToggleAddTask = () => {
        this.setState({ isGroupOptionOpen:false })
        this.setState({ isAddTaskOpen: !this.state.isAddTaskOpen })
    }
    onToggleGroupOptions = () => {
        this.setState({ isAddTaskOpen:false })
        this.setState({ isGroupOptionOpen: !this.state.isGroupOptionOpen })
    }
    render() {
        const { group, board, onAddTask } = this.props
        const newTaskTitle = this.state.task.title
        const { isAddTaskOpen,isGroupOptionOpen } = this.state

        return (
            <div className="group">
                <div className='header'>
                <h4>{group.title}</h4>
                <button className='options' onClick={this.onToggleGroupOptions}>more</button>
                </div>
                {isGroupOptionOpen &&
                    <GroupOptions onToggleAddTask={this.onToggleAddTask}/>}
                <TaskList board={board} tasks={group.tasks} />
                <button className='add-task-toggle-btn' onClick={this.onToggleAddTask}>+ Add another card</button>
                {isAddTaskOpen &&
                    <form onSubmit={this.onToggleAddTask}>
                        <input type="text" name='title' onChange={this.handleChange} />
                        <button className='add-task-close-btn' onClick={this.onToggleAddTask}> X </button>
                        <button className='add-task-add-btn' onClick={() => onAddTask(group.id, newTaskTitle)}> Add </button>
                    </form>
                }
            </div>
        )
    }

}