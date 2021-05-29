import React from 'react';
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { Group } from '../cmps/Group.jsx';
import { setBoard, loadBoards, saveBoard } from '../store/actions/boardActions.js'
import { groupService } from '../services/groupService.js'
import { taskService } from '../services/taskService.js';
import { TaskDetails } from '../pages/TaskDetails.jsx';
import { labelService } from '../services/labelService.js';
// import { socketService } from '../services/socketService.js';
class _BoardDetails extends React.Component {

    state = {
        isAddGroupOpen: false,
        group: {
            title: ''
        }
    }

    componentDidMount() {
        this.getBoardDetails()
    }

    handleChange = (ev) => {
        ev.preventDefault()
        const value = ev.target.value;
        const key = ev.target.name;
        this.setState({ group: { [key]: value } });
    }

    getBoardDetails = () => {
        const { boardId } = this.props.match.params;
        this.props.setBoard(boardId)
    }

    onDeleteGroup = (groupId) => {
        const board = this.props.currBoard
        groupService.deleteGroup(board, groupId)
        this.props.saveBoard(board)
    }
    onCopyGroup = (group) => {
        const board = this.props.currBoard
        groupService.copyGroup(board, group)
        this.props.saveBoard(board)
    }
    onToggleAddGroup = () => {
        this.setState({ isAddGroupOpen: !this.state.isAddGroupOpen })
    }
    onAddGroup = (newGroupTitle) => {
        this.onToggleAddGroup()
        const board = this.props.currBoard
        groupService.addGroup(board, newGroupTitle)
        this.props.saveBoard(board)
    }

    goBack = () => {
        this.props.history.push('/board')
    }

    onAddTask = (groupId, newTitle) => {
        const board = this.props.currBoard
        taskService.addTask(board, groupId, newTitle)
        this.props.saveBoard(board)
    }
    onUpdateTask = (groupId, updatedTask) => {
        const board = this.props.currBoard
        taskService.updateTask(board, groupId, updatedTask)
        this.props.saveBoard(board)
    }

    onDeleteTask = (groupId, taskId) => {
        const board = this.props.currBoard
        taskService.deleteTask(board, groupId, taskId)
        this.props.saveBoard(board)
    }

    onAddLabel = (groupId, taskId, labelId) => {
        const board = this.props.currBoard
        taskService.addLabel(board, groupId, taskId, labelId)
        this.props.saveBoard(board)
    }
    checkLabel = (groupId, taskId, labelId) => {
        const board = this.props.currBoard
        return taskService.checkLabel(board, groupId, taskId, labelId)
    }
    onRemoveLabel = (groupId, taskId, labelId) => {
        const board = this.props.currBoard
        taskService.onRemoveLabel(board, groupId, taskId, labelId)
        this.props.saveBoard(board)
    }
    
    updateLabel = (currLabel, labelUpdates) => {
        const board = this.props.currBoard
        labelService.updateLabel(board, currLabel, labelUpdates)
        this.props.saveBoard(board)
    }
    addLabelToBoard = (newLabel) => {
        const board = this.props.currBoard
        labelService.addLabelToBoard(board, newLabel)
        this.props.saveBoard(board)
    }

    render() {
        const { isAddGroupOpen } = this.state
        const newGroupTitle = this.state.group.title
        const board = this.props.currBoard
        if (!board) return <div>Loading</div>
        return <React.Fragment>
            <Route component={TaskDetails} path='/board/:boardId/:groupId/:taskId' />
            <div className='board-window' style={(board.style.imgUrl) ? { backgroundImage: `url(${board.style.imgUrl})` } : { backgroundColor: board.style.bgColor }} ></div>
            <div className="board-container">
                {(board.groups) && board.groups.map(group => {
                    return (
                        <div key={group.id}>
                            <Group updateLabel={this.updateLabel} addLabelToBoard={this.addLabelToBoard} checkLabel={this.checkLabel} onRemoveLabel={this.onRemoveLabel} onAddLabel={this.onAddLabel} onDeleteTask={this.onDeleteTask} onUpdateTask={this.onUpdateTask} onCopyGroup={this.onCopyGroup} onDeleteGroup={this.onDeleteGroup} board={board} group={group} onAddTask={this.onAddTask} />
                        </div>
                    )
                })
                }
                {!isAddGroupOpen &&
                    <button className='add-group-toggle-btn' onClick={this.onToggleAddGroup}>+ Add another list</button>}
                {isAddGroupOpen &&
                    <form className='add-group-form' onSubmit={this.handleChange}>
                        <textarea name='title' placeholder='Enter list title...' className='group-title-input' id="" cols="1" rows="1" onChange={this.handleChange}></textarea>
                        <div className='add-group-controls'>
                            <button className='add-group-add-btn' onClick={() => this.onAddGroup(newGroupTitle)}> Add list</button>
                            <button className='add-group-close-btn' onClick={this.onToggleAddGroup}> X </button>
                        </div>
                    </form>
                }


            </div>
        </React.Fragment>
    }
}

function mapStateToProps(state) {
    return {
        currBoard: state.boardModule.currBoard,
        boards: state.boardModule.boards,
    }
}
const mapDispatchToProps = {
    setBoard,
    loadBoards,
    saveBoard
}

export const BoardDetails = connect(mapStateToProps, mapDispatchToProps)(_BoardDetails)