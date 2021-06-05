import React from 'react';
import { Avatar } from '@material-ui/core';
import { utilService } from '../services/utilService.js'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { AddUsers } from './AddUsers';
import { Link } from 'react-router-dom'

export class BoardHeader extends React.Component {
    state = {
        isChangeBoardTitleOpen: false,
        isAddMembersOpen: false,
        board: {
            title: ''
        }
    }
    toggleChangeBoardTitle = () => {
        this.setState({ isChangeBoardTitleOpen: !this.state.isChangeBoardTitleOpen })
    }
    toggleAddMembers = () => {
        this.setState({ isAddMembersOpen: !this.state.isAddMembersOpen })
    }

    handleChange = (ev) => {
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
        const { board, onToggleSideBar, users, toggleUser } = this.props
        const { members } = board
        const { isChangeBoardTitleOpen, isAddMembersOpen } = this.state
        const newBoardTitle = this.state.board.title
        return (
            <div className="board-header">
                <div className="header-options">
                    {!isChangeBoardTitleOpen &&
                        <div className='header-title' onClick={this.toggleChangeBoardTitle}>{board.title}</div>}
                    {isChangeBoardTitleOpen &&
                        <form onSubmit={() => this.onChangeBoardTitle(newBoardTitle)}>
                            <input className='board-title-input' onChange={this.handleChange} type="text" name='title' placeholder={board.title} />
                        </form>}
                    <Link className='header-stats' to={`/board/${board._id}/stats`}>Statistics</Link>
                    <div className="header-avatars">
                        {members.map(member =>
                            <Avatar className="header-avatar" key={member._id} src={member.imgUrl}>
                                {utilService.getNameInitials(member.fullname)}
                            </Avatar>)}
                        <Avatar onClick={this.toggleAddMembers} className="header-avatar add-member-avatar" >
                            <PersonAddIcon />
                        </Avatar>
                    </div>

                    {isAddMembersOpen &&
                        <AddUsers toggleUser={toggleUser} board={board} toggleAddMembers={this.toggleAddMembers} users={users} />}
                    <button onClick={onToggleSideBar} className='open-side-bar-btn'>{<MoreHorizIcon />}Show menu</button>
                </div>
            </div >
        )
    }
}