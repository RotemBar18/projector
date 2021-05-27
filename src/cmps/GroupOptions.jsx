import { Component } from 'react';
import { connect } from 'react-redux'

import React from 'react'
// import { Link } from 'react-router-dom'
import { LabelPreview } from './LabelPreview.jsx'

export class GroupOptions extends Component {

    

    render() {
        const {onToggleAddTask} = this.props
        return (
            <div className='group-options-container'>
            <div className='title'>List Actions</div>
            <hr />
            <button onClick={onToggleAddTask}>Add Card</button>
            <button>Copy List</button>
            <button>Delete List</button>
            </div>
            )

    }
}

