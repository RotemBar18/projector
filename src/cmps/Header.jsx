import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

class _Header extends Component {
    render() {
        return (
            <header className="main-header">
            <div className="left-header">
            <Link to="/">Home</Link>
            <Link to="/board">Boards</Link>
            </div>
            <Link to="/">Projector</Link>
            <Link to="/login">Login</Link>
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




// const {loggedInUser} = this.props;
        // return <header className="main-header">
        //     <nav>
        //         <NavLink exact to="/">home<span role="img" aria-label="logo">🙏</span></NavLink>
        //         <NavLink to="/board">boards</NavLink>
        //         <NavLink to="/login">Login</NavLink>
        //     </nav>
        //     {loggedInUser && <span className="loggedin-user">

        //         <Link to={`user/${loggedInUser._id}`}>
        //             {loggedInUser.fullname}
        //         </Link>
                
        //         <span>{loggedInUser.score || 0}</span>
        //     </span>}
        // </header>