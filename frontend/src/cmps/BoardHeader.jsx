import React from 'react';
import { Avatar } from '@material-ui/core';
import { utilService } from '../services/utilService.js'

export class BoardHeader extends React.Component {
    state = {
        isChangeBoardTitleOpen: false,
        board: {
            title: ''
        }
    }
    toggleChangeBoardTitle = () => {
        this.setState({ isChangeBoardTitleOpen: !this.state.isChangeBoardTitleOpen })
    }

    handleChange = (ev) => {
        console.log(ev);
        ev.preventDefault()
        const value = ev.target.value;
        const key = ev.target.name;
        this.setState({ ...this.state, board: { [key]: value } });
    }

    onChangeBoardTitle = (newBoardTitle) => {
        this.toggleChangeBoardTitle()
        this.props.changeBoardTitle(newBoardTitle)
    }

    render() {
        const { board, onToggleSideBar } = this.props
        const { members } = board
        const { isChangeBoardTitleOpen } = this.state
        const newBoardTitle = this.state.board.title
        return (
            <div className="board-header">
                <div className="header-options">
                    {!isChangeBoardTitleOpen &&
                        <div className='header-title' onClick={this.toggleChangeBoardTitle}>{board.title}</div>}
                    {isChangeBoardTitleOpen &&
                        <form  onSubmit={() => this.onChangeBoardTitle(newBoardTitle)}>
                            <input className='board-title-input' onChange={this.handleChange} type="text" name='title' placeholder={board.title} />
                        </form>}
                    <div className="header-stats">Statistics</div>
                    <div className="header-avatars">
                        {members.map(member =>
                            <Avatar className="header-avatar" key={member._id} src={member.imgUrl}>
                                {utilService.getNameInitials(member.fullname)}
                            </Avatar>)}
                    </div>
                    <button onClick={onToggleSideBar} className='open-side-bar-btn'>Show menu</button>
                </div>
            </div>
        )
    }
}