import React from 'react'
import { TaskList } from './TaskList.jsx'

export function Group({ group }) {
    return (
            <div className="group">
                <h3>{group.title}</h3>
                <TaskList tasks={group.tasks} />
                <button className='add-task-btn'>+ Add another card</button>
            </div>
    )
}