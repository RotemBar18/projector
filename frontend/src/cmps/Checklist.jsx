import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';
import { Checkbox } from '@material-ui/core';
import { Component } from 'react';
import React from 'react'

export class Checklist extends Component {

    state = {
        checklists: null
    }

    componentDidMount() {
        const { checklists } = this.props
        console.log(checklists)
        this.setState({ checklists })
    }

    toggleComplete = (checklistIdx, todoIdx) => {
        const { checklists } = this.state;
        checklists[checklistIdx][todoIdx].idDone = !checklists[checklistIdx][todoIdx].idDone
        this.setState({ ...this.state, checklists }, () => {
            this.props.updateChecklist(this.state.checklists)
        })
    }

    render() {
        const checklists = this.state
        if (!checklists) return
        const { todos } = checklists
        console.log(checklists)
        return <div className='checklists'>
            <div className="flex title">
                <CheckBoxOutlinedIcon className="description-icon" color="disabled" />
                <h3 className="title">Checklists</h3>
                <div className="checklist">
                    {checklists.map((checklist, checklistIdx) => {
                        return <div className='todos flex column'key={checklist}>
                            {checklist.todos.map((todo, checklistIdx, todoIdx) => {
                                return <div className='todo' key={checklist}>
                                    <Checkbox className="checkbox"
                                        onChange={() => this.toggleComplete(checklistIdx, todoIdx)}
                                        checked={todo.isDone} />
                                </div>
                            })
                            }
                        </div>
                    })
                    }
                </div>

            </div>


        </div>
    }
}