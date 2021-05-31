import React from 'react';
import { Avatar } from '@material-ui/core';
import { utilService } from '../services/utilService.js'

export class BoardHeader extends React.Component {
    render() {
        const { board } = this.props
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
                </div>
                <button>Menu</button>
            </div>
        )
    }
}