import { boardService } from './boardService.js';
export const taskService = {
    getPreview,
    getDueDatePreview,
    getTaskById,
}

function getPreview(checklists) {
    var todosSum = 0
    var doneTodosSum = 0
    checklists.forEach(checklist => {
        const currTodosSum = checklist.todos.length
        var currDoneTodosSum = checklist.todos.filter(todo => todo.isDone).length
        currDoneTodosSum = (!currDoneTodosSum) ? 0 : currDoneTodosSum
        todosSum += currTodosSum
        doneTodosSum += currDoneTodosSum
    })
    return `${doneTodosSum}/${todosSum}`
}

function getDueDatePreview(deuDate) {
    const date = new Date(deuDate * 1000);
    const month = date.getUTCMonth()
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const subMonth = monthNames[month].substring(0, 3)
    const day = date.getUTCDate()
    return `${subMonth} ${day} `
}

async function getTaskById(taskId, groupId, boardId) {
    const board = await boardService.getById(boardId);
    const groupIdx = board.groups.findIndex(group => group.id === groupId)
    const task = board.groups[groupIdx].tasks.find(task => task.id === taskId)
    return task
}