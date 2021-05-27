import React from 'react';
import { connect } from 'react-redux'
import { loadBoards, saveBoard } from '../store/actions/boardActions.js'
import { Link } from 'react-router-dom'

export class _BoardList extends React.Component {

    state = {
        isCreateHidden: true,
        board: {
            "title": '',
            "bgColor": '#000'
        }
    }

    componentDidMount() {
        this.props.loadBoards()
    }

    toggleModalVisibility = (boolean) => {
        this.setState({isCreateHidden : boolean})
    }

    handleChange = (ev) => {
        this.setState({ board: { ...this.state.board, [ev.target.name]: ev.target.value } })
    }

    onCreateBoard = (ev) => {
        ev.preventDefault()
        this.props.saveBoard(this.state.board)
    }

    render() {
        const { boards } = this.props
        if (!boards) return <div>Loading...</div>
        return (
            <section>
                <h1>Board List</h1>
                <button onClick={()=>{this.toggleModalVisibility(false)}}>Create New Board</button>
                <form className="create-board" hidden={this.state.isCreateHidden} onSubmit={this.onCreateBoard}>
                <label htmlFor="title">Board Name</label>
                <input type="text" name="title" placeholder="Board Name" onChange={this.handleChange}></input>
                <label htmlFor="bgColor">Background Color</label>
                <input type="color" name="bgColor" onChange={this.handleChange}></input>
                <button>Create</button>
                <button onClick={()=>{this.toggleModalVisibility(true)}}>Cancel</button>
                </form>
                <ul>
                    {boards.map((board => 
                        <Link to={`/board/${board._id}`} key={board._id}>
                        <li key={board._id}>
                            <h3>{board.title}</h3>
                            <p>Created By: {(!board.createdBy) ? "Geust" : board.createdBy.fullname}</p>
                            <p>Created At: {(Date(board.createdAt)).substring(4, 15)}</p>
                        </li>
                        </Link>
                    ))}
                </ul>
            </section>
        )
    }
}

function mapStateToProps(state) {
    return {
        boards: state.boardModule.boards
    }
}
const mapDispatchToProps = {
    loadBoards,
    saveBoard
}


export const BoardList = connect(mapStateToProps, mapDispatchToProps)(_BoardList)