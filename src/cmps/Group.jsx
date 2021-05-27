import React from 'react'
import { TaskList } from './TaskList.jsx'

export function Group({ group,board }) {
    console.log(group);
    return (
            <div className="group">
                <h3>{group.title}</h3>
                <TaskList board={board} tasks={group.tasks} />
                <button className='add-task-btn'>+ Add another card</button>
            </div>
    )
}