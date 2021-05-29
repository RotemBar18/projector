import React from 'react';
import { connect } from 'react-redux'
import { saveBoard } from '../store/actions/boardActions.js'
import Plus from '../assets/imgs/plus.png'
import tempImg from '../assets/imgs/uc.png'

class _BoardCreate extends React.Component {

    state = {
        isCreateHidden: true,
        board: {
            "title": '',
            "bgColor": '#000',
            // "imgUrl": "https://bit.ly/3yLM7uN"
        }
    }

    toggleModalVisibility = (boolean) => {
        console.log('boolean', boolean);
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
        this.setState({ isCreateHidden: true })
    }

    render() {
        return (
            <div>
                <div className="board-create" onClick={() => { this.toggleModalVisibility(false) }}>
                    <img className="plus-icon" src={Plus} />
                </div>
                <form className="create-board" hidden={this.state.isCreateHidden} onSubmit={this.onCreateBoard}>
                    <input type="text" name="title" placeholder="Enter Board Name..." onChange={this.handleChange}></input>
                    <div className="board-background-options">
                    <div className="board-background-thumb"><img src={tempImg}/></div>
                    <div className="board-background-thumb"><img src={tempImg}/></div>
                    <div className="board-background-thumb"><img src={tempImg}/></div>
                    <div className="board-background-thumb"><img src={tempImg}/></div>
                    <div className="board-background-thumb"><img src={tempImg}/></div>
                    <div className="board-background-thumb"><img src={tempImg}/></div>
                    <div className="board-background-thumb"><img src={tempImg}/></div>
                    <div className="board-background-thumb"><img src={tempImg}/></div>
                    <div className="board-background-thumb"><img src={tempImg}/></div>
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