import React from 'react';
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { Group } from '../cmps/Group.jsx';
import { SideBar } from '../cmps/SideBar.jsx';
import { setBoard, loadBoards, saveBoard } from '../store/actions/boardActions.js'
import { groupService } from '../services/groupService.js'
import { taskService } from '../services/taskService.js';
import { TaskDetails } from '../pages/TaskDetails.jsx';
import { labelService } from '../services/labelService.js';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { boardService } from '../services/boardService.js';
// import { socketService } from '../services/socketService.js';
class _BoardDetails extends React.Component {

    state = {
        isSideBarOpen: false,
        isAddGroupOpen: false,
        isDragDisabled: false,
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

    onToggleSideBar = () => {
        console.log('toggi')
        this.setState({ isSideBarOpen: !this.state.isSideBarOpen })
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
    getDatePreview = (dateNum) => {
        return taskService.getDatePreview(dateNum)
    }

    toggleTaskMember = (task, member) => {
        const board = this.props.currBoard;
        taskService.toggleTaskMember(task, member)
        this.props.saveBoard(board)
    }

    handleOnDragEnd = (result) => {
        const board = this.props.currBoard;
        if (!result.destination) return
        if (result.type === 'list') {
            const groups = board.groups
            const [reorderedItem] = groups.splice(result.source.index, 1);
            groups.splice(result.destination.index, 0, reorderedItem)
        } else {
            const groupSource = board.groups.find(group => group.id === result.source.droppableId)
            const [reorderedItem] = groupSource.tasks.splice(result.source.index, 1);
            const groupDes = board.groups.find(group => group.id === result.destination.droppableId)
            groupDes.tasks.splice(result.destination.index, 0, reorderedItem)
        }
        this.props.saveBoard(board)
    }

    onChangeBg = (pick, imgUrl, bgColor) => {
        const board = this.props.currBoard;
        boardService.changeBg(pick, imgUrl, bgColor, board)
        this.props.saveBoard(board)
    }

    toggleDroppable = () =>{
        this.setState({...this.state, isDragDisabled: !this.state.isDragDisabled});
    }

    render() {

        const { isAddGroupOpen, isSideBarOpen, isDragDisabled } = this.state
        const newGroupTitle = this.state.group.title
        const board = this.props.currBoard
        if (!board) return <div>Loading</div>
        return <React.Fragment>
            <Route component={TaskDetails} path='/board/:boardId/:groupId/:taskId' />
            <div className='board-window' style={(board.style.imgUrl) ? { backgroundImage: `url(${board.style.imgUrl})` } : { backgroundColor: board.style.bgColor }} ></div>
            {!isSideBarOpen &&
                <button onClick={this.onToggleSideBar} className='open-side-bar-btn'>Show menu</button>
            }
            {isSideBarOpen &&

                <SideBar onChangeBg={this.onChangeBg} getDatePreview={this.getDatePreview} board={board} onToggleSideBar={this.onToggleSideBar} />
            }

            <DragDropContext onDragEnd={this.handleOnDragEnd}>
                <Droppable droppableId={board._id} direction="horizontal" type='list' >
                    {(provided) => (
                        <div className="board-container"{...provided.droppableProps} ref={provided.innerRef}>
                            {(board.groups) && board.groups.map((group, index) => {
                                return (
                                    <Draggable isDragDisabled={isDragDisabled} key={group.id} draggableId={group.id} index={index}>
                                        {(provided) => (
                                            <div
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                ref={provided.innerRef}>
                                                <Group toggleDroppable= {this.toggleDroppable} isDragDisabled ={isDragDisabled} toggleTaskMember={this.toggleTaskMember} updateLabel={this.updateLabel} addLabelToBoard={this.addLabelToBoard} checkLabel={this.checkLabel} onRemoveLabel={this.onRemoveLabel} onAddLabel={this.onAddLabel} onDeleteTask={this.onDeleteTask} onUpdateTask={this.onUpdateTask} onCopyGroup={this.onCopyGroup} onDeleteGroup={this.onDeleteGroup} board={board} group={group} onAddTask={this.onAddTask} />
                                            </div>
                                        )}
                                    </Draggable>
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

                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
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