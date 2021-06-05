import { Component } from 'react';
import { connect } from 'react-redux'

import { Avatar, TextField, Input, Grid, Checkbox } from '@material-ui/core';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import LabelOutlinedIcon from '@material-ui/icons/LabelOutlined';
import AttachFileOutlinedIcon from '@material-ui/icons/AttachFileOutlined';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';


import { saveBoard } from '../store/actions/boardActions.js';
import { taskService } from '../services/taskService.js';
import { utilService } from '../services/utilService.js';
import { LabelPreview } from '../cmps/LabelPreview.jsx';
import { labelService } from '../services/labelService.js';
import { MembersList } from '../cmps/MembersList';
import { LabelsList } from '../cmps/LabelsList';
import { Dates } from '../cmps/Dates';

class _TaskDetails extends Component {

    state = {
        task: null,
        isMembersModalShow: false,
        isLabelsModalShow: false,
        isEditLabelsShow: false,
        isEditDateShow: false,
        isAttachmentShow: false,
        isChooseCoverShow: false,
        comment: {
            txt: '',
        },
        attachment: {
            url: '',
            timestamp: '',
            name: ''
        }
    }

    async componentDidMount() {
        const { taskId, groupId } = this.props.match.params;
        const board = this.props.currBoard;
        const task = await taskService.getTaskById(taskId, groupId, board);
        this.setState({ ...this.state, task });
    }

    handleChange = ({ target }) => {
        let { name, value } = target
        const { task } = this.state
        this.setState({ task: { ...task, [name]: value } }, () => {
            const board = this.props.currBoard;
            taskService.updateTask(board, this.props.match.params.groupId, this.state.task)
            this.props.saveBoard(board)
        })
    }

    // addComment = ({ target }) => {
    //     let { name, value } = target
    //     const { task } = this.state;
    //     const { comment } = this.state;
    //     this.setState({comment: {...comment, [name]: value }}, () => {
    //         setTimeout(()=>{
    //             taskService.addComment(task, value)
    //         },3000)
    //     })
    // }


    // getBtnList = () => {
    //     const btns = [
    //         { name: 'Members', icon: <PersonOutlineOutlinedIcon className="icon" /> },
    //         { name: 'Labels', icon: <LabelOutlinedIcon className="icon" /> },
    //         { name: 'Checklist', icon: <ListOutlinedIcon className="icon" /> },
    //         { name: 'Dates', icon: <TodayOutlinedIcon className="icon" /> },
    //         { name: 'Attachment', icon: <AttachFileOutlinedIcon className="icon" /> }];
    //     return btns;
    // }

    goBack = () => {
        this.props.history.push(`/board/${this.props.match.params.boardId}`)
    }

    toggleModal = (modal) => {
        this.setState({ ...this.state, [modal]: !this.state[modal] })
    }

    toggleTaskMember = (task, member) => {
        const board = this.props.currBoard;
        taskService.toggleTaskMember(task, member)
        this.setState({ ...this.state, task }, () => {
            this.props.saveBoard(board)
        })
    }

    checkIfMemberInTask = (name) => {
        var patten = new RegExp(name);
        return this.state.task.members?.some(member => {
            return patten.test(member.fullname)
        })
    }

    //dont delete taskId
    checkIfLabelInTask = (taskId, labelId) => {
        if (labelId.charAt() === 'l') labelId = labelId.substring(1)
        return this.state.task.labelIds?.some(taskLabelId => taskLabelId === labelId)
    }

    toggleEditLabel = (currLabel = null) => {
        this.setState({ ...this.state, isEditLabelsShow: !this.state.isEditLabelsShow, currLabel })
    }

    getLableById = (labelId) => {
        return this.props.currBoard.labels.find(label => label.id === 'l' + labelId)
    }

    getLabelProperty = (labelId) => {
        const board = this.props.currBoard;
        return board.labels?.find(label => label.id === 'l' + labelId)
    }

    onRemoveLabel = (taskId, labelId) => {
        const board = this.props.currBoard
        const { groupId } = this.props.match.params
        taskService.onRemoveLabel(board, groupId, taskId, labelId)
        this.props.saveBoard(board)
    }

    onAddLabel = (taskId, labelId) => {
        const board = this.props.currBoard
        const { groupId } = this.props.match.params
        taskService.addLabel(board, groupId, taskId, labelId)
        this.props.saveBoard(board)
    }

    updateLabel = (currLabel, labelUpdates) => {
        const board = this.props.currBoard
        labelService.updateLabel(board, currLabel, labelUpdates)
        this.props.saveBoard(board)
    }

    addLabelToBoard = (newLabel) => {
        const board = this.props.currBoard
        labelService.addLabelToBoard(board, newLabel)
        this.props.saveBoard(board)
    }

    convertNumToDate = (deuDate) => {
        if (!deuDate) return
        const deuDatePreview = taskService.getDatePreview(deuDate)
        return deuDatePreview
    }

    setDate = (date) => {
        const board = this.props.currBoard
        const { task } = this.state
        taskService.setTaskDate(task, date);
        this.setState({ ...this.state, task })
        this.props.saveBoard(board)
    }

    changeHandlerFile = ({ target }) => {
        let { name, value } = target
        const { task } = this.state;
        if (!task.attachments) task.attachments = []
        const board = this.props.currBoard
        this.props.saveBoard(board)
        // const { imgUrl } = this.state.style
        this.setState({
            attachment: {
                ...this.state.attachment, [name]: value,
                timestamp: taskService.getTimeStemp()
            }
        })
    }

    handleSubmissionFile = () => {
        const { attachment } = this.state;
        const { task } = this.state;
        // task.style?.imgurl ? task.style.imgUrl = imgUrl : task.style = { imgUrl }
        task.attachments.push(attachment)
        task.style.imgUrl = attachment.url
        const board = this.props.currBoard
        this.props.saveBoard(board)
        this.toggleModal('isAttachmentShow')
    }

    removeLink = (urlIdx = null) => {
        const { task } = this.state;
        if (task.style.imgUrl) task.style.imgUrl = ''
        else task.attachments.splice(urlIdx, 1)
        const board = this.props.currBoard
        this.props.saveBoard(board)
    }

    setCover = (style) => {
        if (style && style.imgUrl) return 'img-hight'
        if (style && style.bgColor) return 'bgc-hight'
    }

    changeCover = (bgColor) => {
        const { task } = this.state;
        task.style.bgColor = bgColor;
        const board = this.props.currBoard
        this.props.saveBoard(board)
        this.toggleModal('isChooseCoverShow')
    }

    checkIfDateComplete = (date) => {
        const { task } = this.state;
        if (typeof task.dueDate === 'object') {
            return task.dueDate.complete ?
                <div className="label complete">COMPLETE</div> :
                <div className="label complete overdue">OVERDUE</div>
        } else {
            task.dueDate = {
                date,
                complete: false
            }
            const board = this.props.currBoard
            this.props.saveBoard(board)
        }
    }

    toggleDateComplete = () => {
        const { task } = this.state;
        task.dueDate.complete = !task.dueDate.complete;
        const board = this.props.currBoard
        this.props.saveBoard(board)
    }

    render() {
        const { task } = this.state
        if (!task) return <div>loading</div>
        console.log(task)
        const description = (task.description) || ''
        const { byMember, comments, members, labelIds, style, attachments } = task;
        const board = this.props.currBoard;
        const { loggedInUser } = this.props
        // console.log(board)
        console.log(this.state)
        const colors = ['#f1d600', '#ff9f1a', '#eb5a46', '#c377e0', '#0279bf', '#00c2e0', '#60be50', '#50e898', '#fe78cb', '#344563', '#b3bac5']
        var date = null
        if (task.dueDate) date = task.dueDate.date || task.dueDate
        return (
            <section className="task-details flex">
                <div className="window" onClick={this.goBack}></div>
                <div className="card flex column">
                    <div className={'cover flex column ' + this.setCover(style)} style={{ backgroundColor: style?.bgColor && !style?.imgUrl ? style.bgColor : '' }}>
                        <CloseOutlinedIcon className='btn task-details-close' onClick={this.goBack} />
                        <button className="btn flex" onClick={() => this.toggleModal('isChooseCoverShow')}>cover</button>
                        {style?.imgUrl && <img className='preview-img' src={`${style.imgUrl}`} alt="" />}
                    </div>
                    <div className="header">
                        <div className="title flex">
                            <AssignmentOutlinedIcon className="taskIcon" color="disabled" />
                            <input className="title-input" defaultValue={task.title}
                                onChange={this.handleChange}
                                name="title"
                            />
                        </div>
                    </div>
                    <div className="main flex row">
                        <div className="details flex column">
                            <div className="details-labeld-members flex">
                                {members && <div className="members">
                                    <h3>MEMBERS</h3>
                                    <AvatarGroup max={10}>
                                        {members && members.map(member => {
                                            return <Avatar className="avatar"
                                                key={member._id} src={member.imgUrl}>{utilService.getNameInitials(member.fullname)}</Avatar>
                                        })}
                                        <Avatar className="add-avatar" onClick={() => this.toggleModal('isMembersModalShow')}>+</Avatar>
                                    </AvatarGroup>
                                </div>}

                                {labelIds && <div className="labels flex column">
                                    <h3>LABELS</h3>
                                    <div className="labels flex">
                                        {labelIds.map(labelId => {
                                            const label = this.getLableById(labelId)
                                            return <LabelPreview key={label.id} lable={label} />
                                        })}
                                        <div className="label add-label" onClick={() => this.toggleModal('isLabelsModalShow')}>+</div>
                                    </div>
                                </div>}
                            </div>
                            {(task.dueDate) &&
                                <div className='dew-date flex column'>
                                    <h3>DUE DATE</h3>
                                    <div className="flex">
                                        <Checkbox className="checkbox"
                                            onChange={this.toggleDateComplete}
                                            checked={task.dueDate?.complete} />
                                        <div className='dew-date-details flex' onClick={() => this.toggleModal('isEditDateShow')}>
                                            <p>{this.convertNumToDate(date)} at {date.substring(11)}</p>
                                            {this.checkIfDateComplete(date)}
                                            <KeyboardArrowDownIcon />
                                        </div>
                                    </div>
                                </div>}


                            <div className="form flex column">
                                <div className="flex title">
                                    <DescriptionOutlinedIcon className="description-icon" color="disabled" />
                                    <h3 className="title">Description</h3>
                                </div>
                                <TextField className="textarea"
                                    name="description"
                                    id="outlined-multiline-static"
                                    multiline
                                    rowsMin={4}
                                    placeholder="add a more detailed description..."
                                    value={description}
                                    variant="outlined"
                                    size='large'
                                    onChange={this.handleChange}
                                />
                            </div>
                            {attachments && <div >
                                <div className='imgs flex'>
                                    <AttachFileOutlinedIcon className="icon" color="disabled" />
                                    <h3 className="title">Attachment</h3>
                                </div>
                                {attachments.map((attachment, index) => {
                                    return <div className="img-details flex" key={index}>
                                        <div className="img-container flex">
                                            <img className='preview-img' src={attachment.url} alt="" />
                                        </div>
                                        <div className="container flex column">
                                            <p className="title">{attachment.name || 'img.jpng'}</p>
                                            <div className="flex">
                                                <p>Added at: {attachment.timestamp}</p>
                                                <span>-</span>
                                                <p className="btn" onClick={() => this.removeLink(index)}>Delete</p>
                                                <span>-</span>
                                                <p className="btn">Edit</p>
                                            </div>
                                        </div>
                                    </div>
                                })}
                            </div >}
                            <div className="comments flex column">
                                {comments && comments.map(comment => {
                                    return <Grid item className="comment flex" key={comment.id}>
                                        {comment.byMember && <Avatar src={comment.byMember.imgUrl} className="avatar">{!comment.byMember.imgUrl && utilService.getNameInitials(comment.byMember.fullname)}</Avatar>}
                                        <Input id="input-with-icon-grid" placeholder="Write a comment..." value={comment.txt}
                                            disableUnderline
                                            fullWidth
                                        /></Grid>
                                })}
                                <Grid item className="comment flex">
                                    {<Avatar src={loggedInUser?.imgUrl || ''} className="avatar">{!loggedInUser?.imgUrl && utilService.getNameInitials(loggedInUser?.fullname || '')}</Avatar>}
                                    <Input id="input-with-icon-grid " placeholder="Write a comment..." value={this.state.comment.txt}
                                        disableUnderline
                                        fullWidth
                                        name="txt"
                                    // onChange={this.addComment}
                                    />
                                </Grid>
                            </div>
                        </div>
                        <div className="sidebar flex column">
                            <h3 className="sidebar-title">ADD TO CARD</h3>
                            <button className="btn flex" onClick={() => this.toggleModal('isMembersModalShow')}><PersonOutlineOutlinedIcon className="icon" /> Members</button>
                            <button className="btn flex" onClick={() => this.toggleModal('isLabelsModalShow')}><LabelOutlinedIcon className="icon" /> Labels</button>
                            <button className="btn flex"><CheckBoxOutlinedIcon className="icon" /> Checklist</button>
                            <button className="btn flex" onClick={() => this.toggleModal('isEditDateShow')}><AccessTimeIcon className="icon" /> Dates</button>
                            <button className="btn flex" onClick={() => this.toggleModal('isAttachmentShow')}><AttachFileOutlinedIcon className="icon" /> Attachment</button>
                        </div>
                    </div>
                </div>
                {this.state.isMembersModalShow && <MembersList board={board}
                    task={task}
                    toggleEditMembers={() => { this.toggleModal('isMembersModalShow') }}
                    toggleTaskMember={this.toggleTaskMember}></MembersList>}

                {this.state.isLabelsModalShow && <LabelsList
                    task={task} board={board}
                    toggleEditLabels={() => { this.toggleModal('isLabelsModalShow') }}
                    checkLabel={this.checkIfLabelInTask}
                    onRemoveLabel={this.onRemoveLabel}
                    onAddLabel={this.onAddLabel}
                    updateLabel={this.updateLabel}
                    addLabelToBoard={this.addLabelToBoard}
                ></LabelsList>}

                {this.state.isEditDateShow && <Dates prevPage={'task-details'} toggleModal={this.toggleModal} task={task} setDate={this.setDate}></Dates>}

                {this.state.isAttachmentShow && <div className="attachment flex column">
                    <div className="flex container">
                        <label htmlFor="text">Attach a link</label>
                        <CloseOutlinedIcon className='btn task-details-close' onClick={() => this.toggleModal('isAttachmentShow')} />
                    </div>
                    <input type="text" name="url" value={this.state.attachment.url || ''} onChange={this.changeHandlerFile} placeholder="Paste any link here..." />
                    <label htmlFor="text">Link name</label>
                    <input type="text" name="name" value={this.state.attachment.name || ''} onChange={this.changeHandlerFile} />
                    <button onClick={this.handleSubmissionFile}>Attach</button>
                </div>}

                {this.state.isChooseCoverShow && <div className='colors-pick flex'>
                    <label>Select a color</label>
                    {colors.map((color, index) => {
                        return <div key={index} style={{ backgroundColor: color }} className='color' onClick={() => this.changeCover(color)}></div>
                    })
                    }
                </div>}


            </section>
        )
    }
}

function mapStateToProps(state) {
    return {
        currBoard: state.boardModule.currBoard,
        loggedInUser: state.userModule.loggedInUser,
    }
}

const mapDispatchToProps = {
    saveBoard,
}


export const TaskDetails = connect(mapStateToProps, mapDispatchToProps)(_TaskDetails)