
import { storageService } from './async-storage.service.js'
import { utilService } from './utilService.js'

const STORAGE_KEY = 'board'
var gBoards = []
export const toyService = {
    query,
    getById,
    save,
    remove,
}


function query() {
    return storageService.query(STORAGE_KEY)
        .then(boards => {
            if (!boards || !boards.length) {
                gBoards = [
                    {
                        "_id": "b101",
                        "title": "Robot dev proj",
                        "createdAt": 1589983468418,
                        "createdBy": {
                            "_id": "u101",
                            "fullname": "Abi Abambi",
                            "imgUrl": "http://some-img"
                        },
                        "style": {},
                        "labels": [
                            {
                                "id": "l101",
                                "title": "Done",
                                "color": "#61bd4f"
                            }
                        ],
                        "members": [
                            {
                                "_id": "u101",
                                "fullname": "Tal Tarablus",
                                "imgUrl": "https://www.google.com"
                            }
                        ],
                        "groups": [
                            {
                                "id": "g101",
                                "title": "Group 1",
                                "tasks": [
                                    {
                                        "id": "c101",
                                        "title": "Replace logo"
                                    },
                                    {
                                        "id": "c102",
                                        "title": "Add Samples"
                                    }
                                ],
                                "style": {}
                            },
                            {
                                "id": "g102",
                                "title": "Group 2",
                                "tasks": [
                                    {
                                        "id": "c103",
                                        "title": "Do that"
                                    },
                                    {
                                        "id": "c104",
                                        "title": "Help me",
                                        "description": "description",
                                        "comments": [
                                            {
                                                "id": "ZdPnm",
                                                "txt": "also @yaronb please CR this",
                                                "createdAt": 1590999817436.0,
                                                "byMember": {
                                                    "_id": "u101",
                                                    "fullname": "Tal Tarablus",
                                                    "imgUrl": "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg"
                                                }
                                            }
                                        ],
                                        "checklists": [
                                            {
                                                "id": "YEhmF",
                                                "title": "Checklist",
                                                "todos": [
                                                    {
                                                        "id": "212jX",
                                                        "title": "To Do 1",
                                                        "isDone": false
                                                    }
                                                ]
                                            }
                                        ],
                                        "members": [
                                            {
                                                "_id": "u101",
                                                "username": "Tal",
                                                "fullname": "Tal Tarablus",
                                                "imgUrl": "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg"
                                            }
                                        ],
                                        "labelIds": ["101"],
                                        "createdAt": 1590999730348,
                                        "dueDate": 16156215211,
                                        "byMember": {
                                            "_id": "u101",
                                            "username": "Tal",
                                            "fullname": "Tal Tarablus",
                                            "imgUrl": "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg"
                                        },
                                        "style": {
                                            "bgColor": "#26de81"
                                        }
                                    }
                                ],
                                "style": {}
                            }
                        ],
                        "activities": [
                            {
                                "id": "a101",
                                "txt": "Changed Color",
                                "createdAt": 154514,
                                "byMember": {
                                    "_id": "u101",
                                    "fullname": "Abi Abambi",
                                    "imgUrl": "http://some-img"
                                },
                                "task": {
                                    "id": "c101",
                                    "title": "Replace Logo"
                                }
                            }
                        ]
                    }
                ]
                storageService.save(STORAGE_KEY, gBoards)
            }
            else gBoards = boards

            return gBoards
        })
}
function getById(boardId) {
    return storageService.get(STORAGE_KEY, boardId)
}
function remove(boardId) {
    return storageService.remove(STORAGE_KEY, boardId)
}
function save(board) {
    if (board._id) {
        return storageService.put(STORAGE_KEY, board)
    } else {
        return storageService.post(STORAGE_KEY, board)
    }
}


// TEST DATA
// storageService.post(STORAGE_KEY, {vendor: 'Subali Rahok 2', price: 500}).then(x => console.log(x))


