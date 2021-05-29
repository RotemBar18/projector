import { Component } from 'react';

import React from 'react'

export class EditLabels extends Component {

    state = {
        isEditLabelOpen: false,
        currLabel: null
    }

    toggleEditLabel = (label = null) => {
        this.setState({ isEditLabelOpen: !this.state.isEditLabelOpen })
        this.setState({ currLabel: label })
    }
    render() {
        const { isEditLabelOpen, currLabel } = this.state
        const { task, board, toggleEditLabels, onAddLabel } = this.props
        return (<React.Fragment>

            {!isEditLabelOpen &&
                <div className='edit-labels-container'>
                    <div className='edit-labels-header'>
                        <div className='title'>List Actions</div>
                        <button className='close-edit-labels-btn' onClick={toggleEditLabels}>X</button>
                    </div>
                    {(board.labels) ?
                        <div className='labels'>
                            {board.labels.map(label => {
                                return <div key={label.id} className='label-preview'>
                                    <div style={{ backgroundColor: label.color }} className='label-title' onClick={() => onAddLabel(task.id, label.id)}>{label.title}</div>
                                    <button className='open-edit-label-btn' onClick={() => this.toggleEditLabel(label)}>Edit</button>
                                </div>

                            })}
                        </div> : ''}
                    <button className='create-label-btn' onClick={() => this.toggleEditLabel()}>+Create New Label</button>
                </div>}
            {isEditLabelOpen &&
                <div className='edit-label-container'>
                    <div className='edit-label-header'>
                        <div className='title'>{(currLabel) ? 'Edit Label' : 'Create Label'}</div>
                        <button className='close-edit-label-btn' onClick={this.toggleEditLabel}>X</button>
                    </div>
                    <form className='edit-label-form'>
                        <label >Name</label>
                        <input type="text" placeholder={(currLabel) ? currLabel.title : ''} />
                        <label >Select a color</label>
                        <div className='edit-label-colors-pick'>
                            <div style={{ backgroundColor: '#f1d600' }} className='color #f1d600'></div>
                            <div style={{ backgroundColor: '#ff9f1a' }} className='color #ff9f1a'></div>
                            <div style={{ backgroundColor: '#eb5a46' }} className='color #eb5a46'></div>
                            <div style={{ backgroundColor: '#c377e0' }} className='color #c377e0'></div>
                            <div style={{ backgroundColor: '#0279bf' }} className='color #0279bf'></div>
                            <div style={{ backgroundColor: '#00c2e0' }} className='color #00c2e0'></div>
                            <div style={{ backgroundColor: '#60be50' }} className='color #60be50'></div>
                            <div style={{ backgroundColor: '#50e898' }} className='color #50e898'></div>
                            <div style={{ backgroundColor: '#fe78cb' }} className='color #fe78cb'></div>
                            <div style={{ backgroundColor: '#344563' }} className='color #344563'></div>
                            <div style={{ backgroundColor: '#b3bac5' }} className='color #b3bac5'></div>
                        </div>
                        <div className='edit-label-controls'>
                            <button className='confirm-btn'>{(currLabel) ? 'Update' : 'Create'}</button>
                            <button className='delete-btn'>Delete</button>
                        </div>
                    </form>
                </div>
            }
        </React.Fragment>
        )

    }
}

