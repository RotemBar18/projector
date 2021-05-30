import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import { BgPicksList } from './BgPicksList.jsx'
export class SideBar extends React.Component {
    state = {
        isChangeBgOpen: false,
        isBgPickOpen: false,
        bgPicks: ''
    }

    onToggleChangeBg = () => {
        this.setState({ isChangeBgOpen: !this.state.isChangeBgOpen })
    }
    onTogglePickBg = (picks) => {
        this.setState({ bgPicks: picks })
        this.setState({ isBgPickOpen: !this.state.isBgPickOpen })
    }
    render() {
        const { isChangeBgOpen, isBgPickOpen, bgPicks } = this.state
        const { onToggleSideBar, board, getDatePreview } = this.props
        return (
            <React.Fragment>
                <div onClick={onToggleSideBar} className='side-bar-window'></div>
                <div className="side-bar">
                    <div className='side-bar-header'>
                        {isChangeBgOpen && !isBgPickOpen &&
                            <button className='close-change-bg-btn' onClick={this.onToggleChangeBg}>back</button>
                        }
                        {isChangeBgOpen && isBgPickOpen &&
                            <button className='close-change-bg-btn' onClick={this.onTogglePickBg}>back</button>
                        }
                        <div className='title'>Menu</div>
                        <button className='close-side-bar-btn' onClick={onToggleSideBar}>X</button>
                    </div>
                    {!isChangeBgOpen &&
                        <div className='side-bar-main'>

                            <div className='change-bg-btn-container'>
                                < button onClick={this.onToggleChangeBg} className='change-bg-btn'>Change Background</button>
                            </div>
                            <div className='activities-list'>
                                <h3 className='activities-title'>Activity</h3>
                                {(board.activities) ? board.activities.map(activity => {
                                    return <div key={activity.id} className='activity-preview'>
                                        {console.log(activity)}
                                        <Avatar className='avatar' alt={activity.byMember.fullname} src={activity.byMember.imgUrl} />
                                        <div className='activity-txt'>{activity.byMember.fullname}: {activity.txt} to {activity.task.title}
                                            <div className='at'>{getDatePreview(activity.createdAt)}</div>
                                        </div>
                                    </div>
                                }) : ''}
                            </div>
                        </div>
                    }
                    {isChangeBgOpen && !isBgPickOpen &&
                        <div className='change-bg-options'>
                            <div className='photos-option'>
                                <div onClick={() => this.onTogglePickBg('photos')} className='photos-btn'></div>
                                <div className='title'>Photos</div>
                            </div>
                            <div className='colors-option'>
                                <div onClick={() => this.onTogglePickBg('colors')} className='colors-btn'></div>
                                <div className='title'>colors</div>
                            </div>
                        </div>
                    }
                    {isBgPickOpen &&
                        <BgPicksList bgPicks={bgPicks} isBgPickOpen={isBgPickOpen} />}

                </div>

            </React.Fragment >


        )
    }
}