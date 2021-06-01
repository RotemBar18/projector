import { Link } from 'react-router-dom'
import React from 'react';
import { connect } from 'react-redux'
import { removeBoard } from '.././store/actions/boardActions.js'

class _BoardPreview extends React.Component {

    state = {
        isDeleteHidden: true
    }

    onDelete = (ev) =>{
        ev.preventDefault()
        var deleteConf = window.confirm('Are you sure you want to delete this board?')
        if (deleteConf) this.props.removeBoard(this.props.board._id)
    }

    render(){
        const { board } = this.props
        const img = board.style.imgUrl
        const clr = board.style.bgColor
        return (
        <Link to={`/board/${board._id}`} key={board._id} style={{ textDecoration: 'none' }}>
            <div key={board._id} className="board-preview" style={(img) ? { backgroundImage: `url(${img})` } : { backgroundColor: clr }}>
                <h3>{board.title}</h3>
                <button className="delete-button" onClick={this.onDelete}>Delete</button>
                <div className="delete-modal" hidden={this.state.isDeleteHidden}>
                </div>
            </div>
        </Link>
    )}
}


const mapDispatchToProps = {
    removeBoard
}


export const BoardPreview = connect(null, mapDispatchToProps)(_BoardPreview)
