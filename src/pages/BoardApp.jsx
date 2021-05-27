import React from 'react';
import { connect } from 'react-redux'
import { Group } from '../cmps/Group.jsx';

import { setBoard, } from '../store/actions/board.actions.js'
// import { socketService } from '../services/socketService.js';
class _BoardApp extends React.Component {

    state = {
    }

    componentDidMount() {
        this.getToyDetails()
        socketService.emit('toy', 'hello toy')
    }

    getToyDetails = () => {
        const { boardId } = this.props.match.params;
        this.props.setBoard(boardId)
    }

    goBack = () => {
        this.props.history.push('/board')
    }

    // onRemoveReview = async (review, toy) => {
    //     if (this.props.loggedinUser._id !== review.by._id) return console.log('you are not the creator of this review')
    //     await this.props.removeReview(review._id, toy)
    //     this.getToyDetails()
    // }


    render() {
        const board = this.props.currBoard
        if (!board) return <div>Loading</div>
        return <div className="board-container">
            {board.groups.map(group => {
                return (
                    <div key={group.id}>
                        <Group group={group} />
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
    removeReview,
    addReview
}


export const BoardApp = connect(mapStateToProps, mapDispatchToProps)(_BoardApp)