import React from 'react';
import { connect } from 'react-redux'
// import { Group } from '../cmps/Group.jsx';
import { setBoard, loadBoards } from '../store/actions/boardActions.js'
import {TaskDetails } from '../cmps/TaskDetails'
// import { socketService } from '../services/socketService.js';
class _BoardDetails extends React.Component {

    state = {
        isTaskDetailsShow: true,
    }

    componentDidMount() {
        const { boardId } = this.props.match.params;
        console.log('boardId',boardId);
        this.getBoardDetails()
    }

    getBoardDetails = () => {
        const { boardId } = this.props.match.params;
        console.log('boardId',boardId);
        this.props.setBoard(boardId)
    }

    goBack = () => {
        this.props.history.push('/board')
    }

    toggleTaskDetails = () => {
        this.setState({ isTaskDetailsShow: !this.state.isTaskDetailsShow })
      }

    render() {
        const {isTaskDetailsShow} = this.state;
        console.log(isTaskDetailsShow)
        // const board = this.props.currBoard
        // console.log(board);
        // if (!board) return <div>Loading</div>
        return 
            {isTaskDetailsShow &&
            <button>
                <TaskDetails toggleTaskDetails={this.toggleAddMail}>TaskDetails</TaskDetails>
            </button>}
    }
}

function mapStateToProps(state) {
    return {
        currBoard: state.boardModule.currBoard,
        // loggedinUser: state.userModule.loggedinUser,
    }
}
const mapDispatchToProps = {
    setBoard,
    loadBoards
}

export const BoardDetails = connect(mapStateToProps, mapDispatchToProps)(_BoardDetails)