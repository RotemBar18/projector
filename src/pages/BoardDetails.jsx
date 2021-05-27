import React from 'react';
import { connect } from 'react-redux'
import { Group } from '../cmps/Group.jsx';
import { setBoard, loadBoards } from '../store/actions/boardActions.js'
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

    goBack = () => {
        this.props.history.push('/board')
    }

    render() {
        const {isTaskDetailsShow} = this.state;
        // const board = this.props.currBoard
        // console.log(board);
        // if (!board) return <div>Loading</div>
        const board = this.props.currBoard
        if (!board) return <div>Loading</div>
        return <div className="board-container">
            {board.groups.map(group => {
                return (
                    <div key={group.id}>
                        <Group board={board} group={group} />
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
        // loggedinUser: state.userModule.loggedinUser,
    }
}
const mapDispatchToProps = {
    setBoard,
    loadBoards
}

export const BoardDetails = connect(mapStateToProps, mapDispatchToProps)(_BoardDetails)