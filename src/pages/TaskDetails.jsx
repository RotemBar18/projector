import { Component } from 'react';
import { connect } from 'react-redux'

import { Avatar, TextField, Input, Grid} from '@material-ui/core';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import LabelOutlinedIcon from '@material-ui/icons/LabelOutlined';
import ListOutlinedIcon from '@material-ui/icons/ListOutlined';
import TodayOutlinedIcon from '@material-ui/icons/TodayOutlined';
import AttachFileOutlinedIcon from '@material-ui/icons/AttachFileOutlined';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import DoneOutlinedIcon from '@material-ui/icons/DoneOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';

import { saveBoard } from '../store/actions/boardActions.js';
import { taskService } from '../services/taskService.js';
import { utilService } from '../services/utilService.js';
import { LabelPreview } from '../cmps/LabelPreview.jsx';
import { LabelEdit } from '../cmps/LabelEdit';
import { labelService } from '../services/labelService.js';

class _TaskDetails extends Component {

    state = {
        task: null,
        isMembersModalShow: false,
        isLabelsModalShow: false,
        isEditLabelsShow: false,
        isEditDateShow: false,
        isAttachmentShow: true,
        currLabel: null,
        comment:{
            txt: '',
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

    toggleTaskMember = (member) => {
        const board = this.props.currBoard;
        const { task } = this.state
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

    toggleEditLabel = (currLabel = null) => {
        this.setState({ ...this.state, isEditLabelsShow: !this.state.isEditLabelsShow, currLabel })
        console.log(this.state)
    }

    updateLabel = (currLabel, labelUpdates) => {
        const board = this.props.currBoard
        labelService.updateLabel(board, currLabel, labelUpdates)
        this.props.saveBoard(board)
    }

    getLableById = (labelId) => {
        return this.props.currBoard.labels.find(label => label.id === 'l' + labelId)
    }

    getLabelProperty = (labelId) => {
        const board = this.props.currBoard;
        return board.labels?.find(label => label.id === 'l' + labelId)
    }


    render() {
        const { task, currLabel } = this.state
        if (!task) return <div>loading</div>
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
                            <Input defaultValue={task.title}
                                disableUnderline
                                fullWidth
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
                {this.state.isMembersModalShow && <div className="modal members flex column">
                    {board.members && board.members.map(member => {
                        return <div className="member flex" onClick={() => this.toggleTaskMember(member)}><Avatar className="avatar"
                            key={member._id} src={member.imgUrl}>{utilService.getNameInitials(member.fullname)}</Avatar>
                            <p>{member.fullname}</p>
                            {this.checkIfMemberInTask(member.fullname) && <DoneOutlinedIcon />}
                        </div>
                    })}
                </div>}
                {this.state.isLabelsModalShow &&
                    <div className="modal labels-list">
                        {labelIds?.map(labelId => {
                            const labelProperty = this.getLabelProperty(labelId)
                            console.log(labelProperty)
                            return <div className="flex">
                                <div className="label" style={{ backgroundColor: labelProperty.color }}>
                                    {labelProperty.title || ''}
                                </div>
                                <EditOutlinedIcon onClick={() => this.toggleEditLabel(labelProperty)} color="disabled" />
                            </div>
                        })
                        }
                    </div>}
                {this.state.isEditLabelsShow && <LabelEdit toggleEditLabel={this.toggleEditLabel} updateLabel={this.updateLabel} currLabel={currLabel}></LabelEdit>}
                {this.state.isEditDateShow && <form className='dates-form flex' noValidate>
                    <TextField className="dates"
                        id="datetime-local"
                        label="Due date"
                        type="datetime-local"
                        defaultValue="2021-05-30T10:30"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </form>}
                {/* {this.state.isAttachmentShow && <AddFile/>} */}
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