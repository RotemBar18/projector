import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Avatar } from '@material-ui/core';
import { utilService } from '../services/utilService';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';

class _Header extends Component {
    render() {
        const { loggedInUser } = this.props
        return (
            <header className="main-header">
                <Link className='home-link-header' to="/"><HomeOutlinedIcon /></Link>
                <Link className='boards-link-header' to="/board">Boards</Link>
                <Link className='logo-header' to="/">EasyTask</Link>
                {(loggedInUser) ? <Link className='login-link-header' to="/login"> <Avatar className='logged-in-user-avatar' key={loggedInUser._id} src={loggedInUser.imgUrl}>{(!loggedInUser.imgUrl) && utilService.getNameInitials(loggedInUser.fullname)}</Avatar> {loggedInUser.fullname} </Link>
                    : <Link className='login-link-header' to="/login">Login</Link>}
            </header>
        )
    }
}
const mapStateToProps = state => {
    return {
        loggedInUser: state.userModule.loggedInUser
    }
}
const mapDispatchToProps = {}


export const Header = connect(mapStateToProps, mapDispatchToProps)(_Header)