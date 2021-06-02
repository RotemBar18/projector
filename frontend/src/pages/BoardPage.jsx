import React from 'react';
import { connect } from 'react-redux'
import { loadBoards, saveBoard } from '../store/actions/boardActions.js'
import { BoardList } from '../cmps/BoardList'

class _BoardPage extends React.Component {

    state = {
        isCreateHidden: true,
        board: {
            "title": '',
            "bgColor": '#000'
        }
    }

    componentDidMount() {
        this.props.loadBoards()
        console.log('boards', this.props.boards)
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
        this.setState({ isCreateHidden: true })
    }

    render() {
        const { boards } = this.props
        if (!boards) return <div>Loading...</div>
        return (
            <section className="board-page">
                <h1>Your Boards</h1>
                <BoardList boards={boards}/>
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


export const BoardPage = connect(mapStateToProps, mapDispatchToProps)(_BoardPage)