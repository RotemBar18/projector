import React from 'react'
import {TaskPreview } from './TaskPreview.jsx'

export function TaskList({tasks,board,onRemoveTask}) {
    return (
        <React.Fragment>
        <div className="task-list">
            {tasks.map(task => {
                return (
                    <div  key={task.id}>
                        <TaskPreview board={board} task={task}  />
                    </div>
                )
            })
        }
        </div>
        </React.Fragment>
    )
}