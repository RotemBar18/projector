import React from 'react'
import { connect } from 'react-redux'
import { TextField } from '@material-ui/core';

class _Dates extends React.Component {

    state = {
        date: null
    }

    onChange = ({ target }) => {
        const { value } = target
        this.props.setDate(value)
    }

    render() {
        const {task} = this.props
        // if (!task) return
        return <form className='dates-form flex' noValidate>
            <TextField className="dates"
                id="datetime-local"
                label="Due date"
                type="datetime-local"
                defaultValue={task.dueDate || "2021-05-30T10:30"}
                onChange={this.onChange}
                InputLabelProps={{
                    shrink: true,
                }}
            />
        </form>
    }
}

function mapStateToProps(state) {
    return {
        currBoard: state.boardModule.currBoard,
    }
}

export const Dates = connect(mapStateToProps)(_Dates)