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

import { setBoard, loadBoards } from '../store/actions/boardActions.js';

// import { Link } from 'react-router-dom';

class _TaskDetails extends Component {

    state = {
        board: null,
        task: null
    }

    async componentDidMount() {
        const task = this.props.task;
        const board = this.props.currBoard;
        this.setState({ board, task })
    }

    handleChange = ({ target }) => {
        let { name, value } = target
        const { task } = this.state
        this.setState({ task: { ...task, [name]: value } })
    }

    getNameInitials = (name) => {
        let rgx = new RegExp(/(\p{L}{1})\p{L}+/, 'gu');
        let initials = [...name.matchAll(rgx)] || [];
        initials = (
            (initials.shift()?.[1] || '') + (initials.pop()?.[1] || '')
        ).toUpperCase();
        return initials
    }

    getBtnList = () =>{
       const btns = [
        {name: 'Members', icon: <PersonOutlineOutlinedIcon className= "icon"/>},
        {name: 'Labels', icon: <LabelOutlinedIcon className= "icon"/>},
        {name:'Checklist', icon: <ListOutlinedIcon className= "icon"/>},
        {name: 'Dates', icon: <TodayOutlinedIcon className= "icon"/>},
        {name: 'Attachment', icon: <AttachFileOutlinedIcon className= "icon"/>} ];
        return btns;
    }


    render() {
        const { task } = this.state
        if (!task) return <div>loading</div>
        console.log(task)
        const content = (task.description) || ''
        const {byMember} = task;
        return (
            <section className="task-details">
                <div className="window flex">
                    <div className="card flex column">
                        <div className="cover flex column">
                            <CloseOutlinedIcon className='btn task-details-close'onClick={this.props.toggleTaskDetails}/>
                            <button className="btn flex">cover</button>
                        </div>
                        <div className="header">
                            <h2 className="title flex">
                                <AssignmentOutlinedIcon className="taskIcon" color="disabled"/>
                                <Input defaultValue={task.title}
                                    disableUnderline
                                />
                            </h2>
                        </div>
                        <div className="main flex row">
                            <div className="details flex column">
                                {task.members && <div className="members">
                                    <h3>MEMBERS</h3>
                                    <AvatarGroup max={10}>
                                        {task.members && task.members.map(member => {
                                            return <Avatar className="avatar"
                                                key={member._id}>{this.getNameInitials(member.fullname)}</Avatar>
                                        })}
                                    </AvatarGroup>
                                </div>}
                                <div className="form flex column">
                                    <h3><DescriptionOutlinedIcon color="disabled"/> Description</h3>
                                    <TextField className="textarea"
                                        name="content"
                                        id="outlined-multiline-static"
                                        multiline
                                        rows={2}
                                        placeholder="add a more detailed description..."
                                        value={content}
                                        variant="outlined"
                                        size='small'
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <Grid item className="comment flex">
                                   {byMember &&<Avatar className="avatar">{this.getNameInitials(byMember.fullname)}</Avatar>}
                                    <TextField id="input-with-icon-grid" label="Write a comment..." />
                                </Grid>
                            </div>
                            <div className="sidebar flex column">
                                {this.getBtnList().map(btn => {
                                    return <button className="btn flex" key={btn.name}>{btn.icon} {btn.name}</button>
                                })}
                            </div>
                        </div>
                    </div>
                </div>

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
    setBoard,
    loadBoards
}


export const TaskDetails = connect(mapStateToProps, mapDispatchToProps)(_TaskDetails)