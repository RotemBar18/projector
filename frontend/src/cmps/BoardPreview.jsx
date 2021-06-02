import { Link } from 'react-router-dom'
import React from 'react';
import { connect } from 'react-redux'
import { removeBoard } from '.././store/actions/boardActions.js'
import { DeleteBoardConfirm } from './DeleteBoardConfirm.jsx'
class _BoardPreview extends React.Component {

    state = {
        isDeleteBoardOpen: false
    }

    onToggleDelete = (ev) => {
        ev.preventDefault()
        this.setState({ isDeleteBoardOpen: !this.state.isDeleteBoardOpen })
    }
    onRemoveBoard = (boardId, ev) => {
        console.log(ev);
        ev.preventDefault()
        this.props.removeBoard(boardId)
    }

    render() {
        const { board } = this.props
        console.log(board);
        const { isDeleteBoardOpen } = this.state
        const img = board.style?.imgUrl
        const clr = board.style?.bgColor
        return (
            <Link to={`/board/${board._id}`} key={board._id} style={{ textDecoration: 'none' }}>
                <div key={board._id} className="board-preview" style={(img) ? { backgroundImage: `url(${img})` } : { backgroundColor: clr }}>
                    <h3>{board.title}</h3>
                    <button className="delete-button" onClick={this.onToggleDelete}>Delete</button>
                    {isDeleteBoardOpen &&
                        <DeleteBoardConfirm onToggleDelete={this.onToggleDelete} board={board} onRemoveBoard={this.onRemoveBoard} />
                    }
                </div>
            </Link>
        )
    }
}


const mapDispatchToProps = {
    removeBoard
}


export const BoardPreview = connect(null, mapDispatchToProps)(_BoardPreview)