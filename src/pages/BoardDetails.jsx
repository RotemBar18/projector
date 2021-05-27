import React from 'react';
import { connect } from 'react-redux'
import { Group } from '../cmps/Group.jsx';
import { setBoard, loadBoards, saveBoard } from '../store/actions/boardActions.js'
import { groupService } from '../services/groupService.js'
// import { socketService } from '../services/socketService.js';
class _BoardDetails extends React.Component {

    state = {
    }

    componentDidMount() {
        this.getBoardDetails()
    }

    getBoardDetails = () => {
        const { boardId } = this.props.match.params;
        this.props.setBoard(boardId)
    }

    onAddTask = (groupId,newTitle) => {
        const board = this.props.currBoard
        groupService.addTask(board, groupId,newTitle)
        this.props.saveBoard(board)

    }

    goBack = () => {
        this.props.history.push('/board')
    }

    render() {
        const { isTaskDetailsShow } = this.state;
        // const board = this.props.currBoard
        // console.log(board);
        // if (!board) return <div>Loading</div>
        const board = this.props.currBoard
        if (!board) return <div>Loading</div>
        return <div className="board-container">
            {(board.groups) && board.groups.map(group => {
                return (
                    <div key={group.id}>
                        <Group board={board} group={group} onAddTask={this.onAddTask} />
                    </div>
                )
            })
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