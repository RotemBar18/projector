import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class _Header extends Component {
    render() {
        const { loggedInUser } = this.props
        console.log('loggedInUser', loggedInUser);
        return (
            <header className="main-header">
                <Link className='home-link-header' to="/">Home</Link>
                <Link className='boards-link-header' to="/board">Boards</Link>
                <Link className='logo-header' to="/">Projector</Link>
                {(loggedInUser) ? <Link className='login-link-header' to="/login"> {loggedInUser.fullname} </Link>
                :<Link className='login-link-header' to="/login">Login</Link>}
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