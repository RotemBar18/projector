import React from 'react'
import {taskPreview } from './taskPreview.jsx'

export function TaskList({tasks,onRemoveTask}) {
    return (
        <React.Fragment>

            <h3>tasks</h3>
        <div className="task-list">
            {tasks.map(task => {
                return (
                    <div  key={task._id}>
                        <ToysPreview  onRemoveTask={onRemoveTask} task={task}  />
                    </div>
                )
            })
        }
        </div>
        </React.Fragment>
    )
}