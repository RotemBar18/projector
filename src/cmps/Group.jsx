import React from 'react'
import { TaskList } from './TaskList.jsx'
import { GroupOptions } from './GroupOptions.jsx'


export class Group extends React.Component {
    state = {
        isGroupOptionOpen: false,
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
        this.setState({ isGroupOptionOpen: false })
        this.setState({ isAddTaskOpen: !this.state.isAddTaskOpen })
    }
    onToggleGroupOptions = () => {
        this.setState({ isAddTaskOpen: false })
        this.setState({ isGroupOptionOpen: !this.state.isGroupOptionOpen })
    }

    onDeleteGroup = () => {
        this.onToggleGroupOptions()
        this.props.onDeleteGroup(this.props.group.id)

    }
    onCopyGroup = () => {
        this.onToggleGroupOptions()
        this.props.onCopyGroup(this.props.group)

    }
    onUpdateTask = (updatedTask) => {
        this.props.onUpdateTask(this.props.group.id, updatedTask)

    }
    onDeleteTask = (taskId) => {
        this.props.onDeleteTask(this.props.group.id, taskId)

    }

    render() {
        const { group, board, onAddTask, } = this.props
        const newTaskTitle = this.state.task.title
        const { isAddTaskOpen, isGroupOptionOpen } = this.state

        return (
            <React.Fragment>

                <div className="group">
                    <div className='header'>
                        <h4>{group.title}</h4>
                        <button className='options' onClick={this.onToggleGroupOptions}>...</button>
                    </div>

                    {(group.tasks) ? <TaskList onDeleteTask={this.onDeleteTask} onUpdateTask={this.onUpdateTask} board={board} tasks={group.tasks} group={group} /> : ''}
                    {!isAddTaskOpen &&
                        <button className='add-task-toggle-btn' onClick={this.onToggleAddTask}>+ Add another card</button>}
                    {isAddTaskOpen &&
                        <form className='add-task-form' onSubmit={this.onToggleAddTask}>
                            <textarea name='title' placeholder='Enter a title for this card...' className='task-title-input' cols="5" rows="5" onChange={this.handleChange}></textarea>
                            <div className='add-task-controls'>
                                <button className='add-task-add-btn' onClick={() => onAddTask(group.id, newTaskTitle)}>Add card</button>
                                <button className='add-task-close-btn' onClick={this.onToggleAddTask}> X </button>
                            </div>
                        </form>

                    }
                    {isGroupOptionOpen &&
                        <GroupOptions onToggleGroupOptions={this.onToggleGroupOptions} onCopyGroup={this.onCopyGroup} onDeleteGroup={this.onDeleteGroup} group={group} onToggleAddTask={this.onToggleAddTask} />}
                </div>
            </React.Fragment>
        )
    }

}