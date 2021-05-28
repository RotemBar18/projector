import { Component } from 'react';
import { connect } from 'react-redux'

import React from 'react'
// import { Link } from 'react-router-dom'
import { LabelPreview } from './LabelPreview.jsx'

export class GroupOptions extends Component {

    
    render() {
        const {onToggleAddTask,onDeleteGroup,onCopyGroup} = this.props
        return (
            <div className='group-options-container'>
            <div className='title'>List Actions</div>
            <hr />
            <button onClick={onToggleAddTask}>Add Card</button>
            <button onClick={onCopyGroup}>Copy List</button>
            <button onClick={onDeleteGroup}>Delete List</button>
            </div>
            )

    }
}

