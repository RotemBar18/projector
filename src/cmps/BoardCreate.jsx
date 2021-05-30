import React from 'react';
import { connect } from 'react-redux'
import { saveBoard } from '../store/actions/boardActions.js'
import Plus from '../assets/imgs/plus.png'
import tempImg from '../assets/imgs/uc.png'

class _BoardCreate extends React.Component {

    state = {
        isCreateHidden: true,
        board: {
            title: '',
            bgColor: '#000',
        }
    }

    toggleModalVisibility = (boolean) => {
        this.setState({ isCreateHidden: boolean })
    }

    handleChange = (ev) => {
        this.setState({ board: { ...this.state.board, [ev.target.name]: ev.target.value } })
    }

    onCreateBoard = (ev) => {
        const { boards } = this.props
        const lastBoardId = boards[boards.length - 1]._id

        ev.preventDefault()
        if (!this.state.board.title) return
        this.props.saveBoard(this.state.board, lastBoardId)
        this.setState({isCreateHidden: true, board: { ...this.state.board, title: ''}})
    }

    render() {
        return (
            <div>
                <div className="board-create" onClick={() => { this.toggleModalVisibility(false) }}>
                    <img className="plus-icon" alt = "" src={Plus} />
                </div>
                <form className="create-board" hidden={this.state.isCreateHidden} onSubmit={this.onCreateBoard} autoComplete="off">
                    <input type="text" name="title" placeholder="Enter Board Name..." onChange={this.handleChange} value={this.state.board.title}></input>
                    <div className="board-background-options">
                        <div className="board-background-thumb"><img src={tempImg} alt = ""/></div>
                        <div className="board-background-thumb"><img src={tempImg} alt = ""/></div>
                        <div className="board-background-thumb"><img src={tempImg} alt = ""/></div>
                        <div className="board-background-thumb"><img src={tempImg} alt = ""/></div>
                        <div className="board-background-thumb"><img src={tempImg} alt = ""/></div>
                        <div className="board-background-thumb"><img src={tempImg} alt = ""/></div>
                        <div className="board-background-thumb"><img src={tempImg} alt = ""/></div>
                        <div className="board-background-thumb"><img src={tempImg} alt = ""/></div>
                        <div className="board-background-thumb"><img src={tempImg} alt = ""/></div>
                    </div>
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