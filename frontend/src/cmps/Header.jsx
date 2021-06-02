import React, { Component } from 'react'
import { Link} from 'react-router-dom'
import { connect } from 'react-redux'

class _Header extends Component {
    render() {
        return (
            <header className="main-header">
            <Link className='home-link-header' to="/">Home</Link>
            <Link className='boards-link-header' to="/board">Boards</Link>
            <Link className='logo-header' to="/">Projector</Link>
            <Link className='login-link-header' to="/login">Login</Link>
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