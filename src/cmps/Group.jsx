import React from 'react'
import { TaskList } from './TaskList.jsx'
import { GroupOptions } from './GroupOptions.jsx'


export class Group extends React.Component {
    state = {
        isGroupOptionOpen: false,
        isAddTaskOpen: false,
        isChangeGroupNameOpen: false,
        group: {
            title: ''
        },
        task: {
            title: ''
        }
    }

    handleTaskChange = (ev) => {
        const value = ev.target.value;
        const key = ev.target.name;
        this.setState({ task: { [key]: value } });
    }
    handleGroupChange = (ev) => {
        const value = ev.target.value;
        const key = ev.target.name;
        this.setState({ group: { [key]: value } });
    }

    onToggleAddTask = () => {
        this.props.toggleDroppable()
        this.setState({ isGroupOptionOpen: false })
        this.setState({ isAddTaskOpen: !this.state.isAddTaskOpen })
    }
  
    onToggleGroupOptions = () => {
        this.props.toggleDroppable()
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
    toggleChangeGroupName = () => {
        this.setState({ isChangeGroupNameOpen: !this.state.isChangeGroupNameOpen })
    }
    onDeleteTask = (taskId) => {
        this.props.onDeleteTask(this.props.group.id, taskId)

    }

    onAddLabel = (taskId, labelId) => {
        this.props.onAddLabel(this.props.group.id, taskId, labelId)
    }
    checkLabel = (taskId, labelId) => {
        return this.props.checkLabel(this.props.group.id, taskId, labelId)
    }
    onRemoveLabel = (taskId, labelId) => {
        this.props.onRemoveLabel(this.props.group.id, taskId, labelId)
    }

    onChangeGroupName = (newGroupTitle) => {
        this.toggleChangeGroupName()
        this.props.changeGroupName(newGroupTitle, this.props.group)
    }
    render() {

        const { group, board, onAddTask, updateLabel, addLabelToBoard, toggleTaskMember } = this.props
        const newTaskTitle = this.state.task.title
        const newGroupTitle = this.state.group.title
        const { isAddTaskOpen, isGroupOptionOpen, isChangeGroupNameOpen } = this.state

        return (
            <React.Fragment>
                <div className="group">
                    <div className='header'>
                        {!isChangeGroupNameOpen &&
                            <div className='title' onClick={this.toggleChangeGroupName}>{group.title}</div>}
                        {isChangeGroupNameOpen &&
                            <form onSubmit={() => this.onChangeGroupName(newGroupTitle)}>
                                <input onChange={this.handleGroupChange} type="text" name='title' placeholder={group.title} />
                            </form>}

                        <button className='options' onClick={this.onToggleGroupOptions}>...</button>
                    </div>
                    {(group.tasks) ? <TaskList isDragDisabled={this.props.isDragDisabled} toggleDroppable={this.props.toggleDroppable} isAddTaskOpen={isAddTaskOpen} onToggleAddTask={this.onToggleAddTask} handleTaskChange={this.handleTaskChange} onAddTask={this.onAddTask} group={group} newTaskTitle={newTaskTitle} toggleTaskMember={toggleTaskMember} updateLabel={updateLabel} addLabelToBoard={addLabelToBoard} checkLabel={this.checkLabel} onRemoveLabel={this.onRemoveLabel} board={board} onAddLabel={this.onAddLabel} onDeleteTask={this.onDeleteTask} onUpdateTask={this.onUpdateTask} tasks={group.tasks} group={group} /> : ''}
                    {!isAddTaskOpen &&
                        <button className='add-task-toggle-btn' onClick={this.onToggleAddTask}>+ Add another card</button>}
                    {isGroupOptionOpen &&
                        <GroupOptions onToggleGroupOptions={this.onToggleGroupOptions} onCopyGroup={this.onCopyGroup} onDeleteGroup={this.onDeleteGroup} group={group} onToggleAddTask={this.onToggleAddTask} />}
                </div>
            </React.Fragment>
        )
    }

}