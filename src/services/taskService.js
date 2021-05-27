export const taskService = {
    getPreview,
    getDueDatePreview,
}


function getPreview(checklists) {
    console.log('checklists', checklists)
    var todosSum = 0
    var doneTodosSum = 0
    checklists.forEach(checklist => {
        console.log('checklist', checklist)
        const currTodosSum = checklist.todos.length
        console.log('currTodosSum', currTodosSum)
        var currDoneTodosSum = checklist.todos.filter(todo => todo.isDone).length
        currDoneTodosSum = (!currDoneTodosSum) ? 0 : currDoneTodosSum
        todosSum += currTodosSum
        doneTodosSum += currDoneTodosSum
    })
    return `${doneTodosSum}/${todosSum}`
}

function getDueDatePreview(deuDate) {
    const date = new Date(1546108200 * 1000);
    const month = date.getUTCMonth()
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const subMonth = monthNames[month].substring(0, 3)
    const day = date.getUTCDate()
    return `${subMonth} ${day} `
}