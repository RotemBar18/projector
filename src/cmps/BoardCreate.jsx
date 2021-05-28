import React from 'react';
import { connect } from 'react-redux'
import { saveBoard } from '../store/actions/boardActions.js'
import Plus from '../assets/imgs/plus.png'

class _BoardCreate extends React.Component {

    state = {
        isCreateHidden: true,
        board: {
            "title": '',
            "bgColor": '#000'
        }
    }

    toggleModalVisibility = (boolean) => {
        this.setState({ isCreateHidden: boolean })
    }

    handleChange = (ev) => {
        this.setState({ board: { ...this.state.board, [ev.target.name]: ev.target.value } })
    }

    onCreateBoard = (ev) => {
        ev.preventDefault()
        if (!this.state.board.title) return
        this.props.saveBoard(this.state.board)
        this.setState({ isCreateHidden: true })
    }

    render() {
        return (
            <div className="board-create" onClick={() => { this.toggleModalVisibility(false)}}>
            <img className="plus-icon" src={Plus}/>
                <form className="create-board" hidden={this.state.isCreateHidden} onSubmit={this.onCreateBoard}>
                    <label htmlFor="title">Board Name</label>
                    <input type="text" name="title" placeholder="Board Name" onChange={this.handleChange}></input>
                    <label htmlFor="bgColor">Background Color</label>
                    <input type="color" name="bgColor" onChange={this.handleChange}></input>
                    <button>Create</button>
                    <button onClick={() => { this.toggleModalVisibility(true) }}>Cancel</button>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        boards: state.boardModule.boards
    }
}
const mapDispatchToProps = {
    saveBoard
}


export const BoardCreate = connect(mapStateToProps, mapDispatchToProps)(_BoardCreate)