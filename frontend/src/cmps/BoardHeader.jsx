import React from 'react';
import { Avatar } from '@material-ui/core';
import { utilService } from '../services/utilService.js'

export class BoardHeader extends React.Component {
    render() {
        const { board,onToggleSideBar } = this.props
        const { members } = board
        return (
            <div className="board-header">
                <div className="header-options">
                    <div className="header-title">{board.title}</div>
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