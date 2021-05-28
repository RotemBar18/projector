import React from 'react';
import { connect } from 'react-redux'
import { Group } from '../cmps/Group.jsx';
import { setBoard, loadBoards, saveBoard } from '../store/actions/boardActions.js'
import { groupService } from '../services/groupService.js'
import { taskService } from '../services/taskService.js';
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
        const board = this.props.currBoard
        groupService.addGroup(board, newGroupTitle)
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
    render() {
        const { isAddGroupOpen } = this.state
        const newGroupTitle = this.state.group.title
        const board = this.props.currBoard
        if (!board) return <div>Loading</div>
        return <div className="board-container">
            {(board.groups) && board.groups.map(group => {
                return (
                    <div key={group.id}>
                        <Group onDeleteTask={this.onDeleteTask} onUpdateTask={this.onUpdateTask} onCopyGroup={this.onCopyGroup} onDeleteGroup={this.onDeleteGroup} board={board} group={group} onAddTask={this.onAddTask} />
                    </div>
                )
            })
            }
            {!isAddGroupOpen &&
                <button className='add-group-toggle-btn' onClick={this.onToggleAddGroup}>+ Add another list</button>}
            {isAddGroupOpen &&
                <form >
                    <textarea name='title' id="" cols="1" rows="1" onChange={this.handleChange}></textarea>
                    <button className='add-group-close-btn' onClick={this.onToggleAddGroup}> X </button>
                    <button className='add-group-add-btn' onClick={this.onAddGroup(newGroupTitle)}> Add list</button>
                </form>
            }


        </div>
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