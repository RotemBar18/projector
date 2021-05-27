import { Component } from 'react'
import { Link } from 'react-router-dom'

export class Home extends Component {
    render() {
        return (
            <div className="home">
            <h1>Home Page</h1>
            <Link to="/board">Come on in</Link>
            </div>
        )
    }
}