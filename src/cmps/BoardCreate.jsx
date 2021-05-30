import React from 'react';
import { connect } from 'react-redux'
import { saveBoard } from '../store/actions/boardActions.js'
import Plus from '../assets/imgs/plus.png'

class _BoardCreate extends React.Component {

    state = {
        isCreateHidden: true,
        board: {
            title: '',
            style: {
                imgUrl: 'https://bit.ly/3yLM7uN'
            }
        }
    }

    toggleModalVisibility = (boolean) => {
        this.setState({ isCreateHidden: boolean })
    }

    handleChange = (ev) => {
        this.setState({ board: { ...this.state.board, [ev.target.name]: ev.target.value } })
    }

    handleBackground = (ev) =>{
        const imgUrl = {imgUrl: ev.target.src}
        this.setState({ board: { ...this.state.board, ['style']: imgUrl}})
    }

    onCreateBoard = (ev) => {
        const { boards } = this.props
        const lastBoardId = boards[boards.length - 1]._id

        ev.preventDefault()
        if (!this.state.board.title) return
        this.props.saveBoard(this.state.board, lastBoardId)
        this.setState({isCreateHidden: true, board: { ...this.state.board, ['title']: ''}})
    }

    render() {
        return (
            <div>
                <div className="board-create" onClick={() => { this.toggleModalVisibility(false) }}>
                    <img className="plus-icon" src={Plus} />
                </div>
                <form className="create-board" hidden={this.state.isCreateHidden} onSubmit={this.onCreateBoard} autoComplete="off">
                    <input type="text" name="title" placeholder="Enter Board Name..." onChange={this.handleChange} value={this.state.board.title}></input>
                    <div className="board-background-options">
                        <div className="board-background-thumb" style={{backgroundColor: '#60be50'}}></div>
                        <div className="board-background-thumb" onClick={this.handleBackground}><img src="https://bit.ly/3yLM7uN" /></div>
                        <div className="board-background-thumb" style={{backgroundColor: '#0279bf'}}></div>
                        <div className="board-background-thumb" onClick={this.handleBackground}><img src="https://bit.ly/3yQz8rN" /></div>
                        <div className="board-background-thumb" style={{backgroundColor: '#ff9f1a'}}></div>
                        <div className="board-background-thumb" onClick={this.handleBackground}><img src="https://bit.ly/3i3i4c9" /></div>
                        <div className="board-background-thumb" style={{backgroundColor: '#eb5a46'}}></div>
                        <div className="board-background-thumb" onClick={this.handleBackground}><img src="https://bit.ly/3uAGJY4" /></div>
                        <div className="board-background-thumb" onClick={this.handleBackground}><img src="https://bit.ly/3p5Xiuc" /></div>
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