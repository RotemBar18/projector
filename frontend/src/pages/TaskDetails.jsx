import { Component } from 'react';
import { connect } from 'react-redux'

import { Avatar, TextField, Input, Grid } from '@material-ui/core';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import LabelOutlinedIcon from '@material-ui/icons/LabelOutlined';
import ListOutlinedIcon from '@material-ui/icons/ListOutlined';
import TodayOutlinedIcon from '@material-ui/icons/TodayOutlined';
import AttachFileOutlinedIcon from '@material-ui/icons/AttachFileOutlined';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';

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
        comment: {
            txt: '',
        },
        style: {
            imgUrl: '',
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
        // const { task } = this.state
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

    checkIfLabelInTask = (taskId, labelId) => {
        if (labelId.charAt() === 'l') labelId = labelId.substring(1)
        return this.state.task.labelIds?.some(taskLabelId => {
            console.log(this.state.task)
            console.log(taskLabelId)
            console.log(labelId)
            return taskLabelId === labelId
        })
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
        const { value } = target
        const { imgUrl } = this.state.style
        this.setState({ style: { ...this.state.style, imgUrl: value } })
    }

    handleSubmissionFile = () => {
       const {imgUrl} = this.state.style;
       const {task} = this.state;
       console.log(imgUrl)
       task.style?.imgurl? task.style.imgUrl = imgUrl : task.style = { imgUrl }
       const board = this.props.currBoard
       this.props.saveBoard(board)
       this.toggleModal('isAttachmentShow')
    }

    render() {
        const { task } = this.state
        if (!task) return <div>loading</div>
        console.log(task)
        const description = (task.description) || ''
        const { byMember, comments, members, labelIds, style } = task;
        const board = this.props.currBoard;
        return (
            <section className="task-details flex">
                <div className="window" onClick={this.goBack}></div>
                <div className="card flex column">
                    <div className="cover flex column">
                        <CloseOutlinedIcon className='btn task-details-close' onClick={this.goBack} />
                        <button className="btn flex">cover</button>
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
                            {members && <div className="members">
                                <h4>Members</h4>
                                <AvatarGroup max={10}>
                                    {members && members.map(member => {
                                        return <Avatar className="avatar"
                                            key={member._id} src={member.imgUrl}>{utilService.getNameInitials(member.fullname)}</Avatar>
                                    })}
                                </AvatarGroup>
                            </div>}
                            {(task.dueDate) &&
                                <div className='dew-date'>
                                    {this.convertNumToDate(task.dueDate)}
                                </div>}
                            {labelIds && <div className="labels flex">
                                {labelIds.map(labelId => {
                                    const label = this.getLableById(labelId)
                                    return <LabelPreview key={label.id} lable={label} />
                                })}
                            </div>}
                            <div className="form flex column">
                                <h4><DescriptionOutlinedIcon className="icon" color="disabled" /> Description</h4>
                                <TextField className="textarea"
                                    name="description"
                                    id="outlined-multiline-static"
                                    multiline
                                    rows={1}
                                    placeholder="add a more detailed description..."
                                    value={description}
                                    variant="outlined"
                                    size='small'
                                    onChange={this.handleChange}
                                />
                            </div>
                            {style?.imgUrl && <img className='preview-img' src={`${style.imgUrl}`} alt="" />}
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
                                    {byMember && <Avatar src={byMember.imgUrl} className="avatar">{!byMember.imgUrl && utilService.getNameInitials(byMember.fullname)}</Avatar>}
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
                            <button className="btn flex" onClick={() => this.toggleModal('isMembersModalShow')}><PersonOutlineOutlinedIcon className="icon" /> Members</button>
                            <button className="btn flex" onClick={() => this.toggleModal('isLabelsModalShow')}><LabelOutlinedIcon className="icon" /> Labels</button>
                            <button className="btn flex"><ListOutlinedIcon className="icon" /> Checklist</button>
                            <button className="btn flex" onClick={() => this.toggleModal('isEditDateShow')}><TodayOutlinedIcon className="icon" /> Dates</button>
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
                    <label htmlFor="text">Attach a link</label>
                    <input type="text" name="text" value={this.state.style.imgUrl || ''} onChange={this.changeHandlerFile} placeholder="Paste any link here..." />
                    <button onClick={this.handleSubmissionFile}>Attach</button>
                </div>}
            </section>
        )
    }
}

function mapStateToProps(state) {
    return {
        currBoard: state.boardModule.currBoard,
    }
}

const mapDispatchToProps = {
    saveBoard,
}


export const TaskDetails = connect(mapStateToProps, mapDispatchToProps)(_TaskDetails)