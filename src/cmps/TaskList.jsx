import React from 'react'
import { TaskPreview } from './TaskPreview.jsx'

export function TaskList({ tasks, group, board, onDeleteTask, onUpdateTask, onAddLabel,checkLabel, onRemoveLabel }) {
    return (
        <div className="task-list">
            {tasks.map(task => {
                return (
                    <div key={task.id}>
                        <TaskPreview checkLabel={checkLabel} onRemoveLabel={onRemoveLabel} onUpdateTask={onUpdateTask} onAddLabel={onAddLabel} onDeleteTask={onDeleteTask} board={board} task={task} group={group} />
                    </div>
                )
            })
            }
        </div>


    )
}