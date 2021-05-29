export const storageService = {
    query,
    get,
    post,
    put,
    remove,
}

var gBoards = [{
    "_id": "b101",
    "title": "Robot dev proj",
    "createdAt": 1589983468418,
    "createdBy": {
        "_id": "u101",
        "fullname": "Abi Abambi",
        "imgUrl": "http://some-img"
    },
    "style": {
        "bgColor":'#ffffff',
        "imgUrl": "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg"
        
    },
    "labels": [{
            "id": "l101",
            "title": "Done",
            "color": "#61bd4f"
        },
        {
            "id": "l102",
            "title": "30 min",
            "color": "#54eef9"
        }
    ],
    "members": [{
            "_id": "u101",
            "fullname": "Tal Tarablus",
            "imgUrl": "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg"
        },
        {
            "_id": "u107",
            "fullname": "Noa Kaplan",
        },
        {
            "_id": "u108",
            "fullname": "Roey Barda",
        },
        {
            "_id": "u108",
            "fullname": "Rotem Bar",
            "imgUrl": "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg"
        },
    ],
    "groups": [{
            "id": "g101",
            "title": "Group 1",
            "tasks": [{
                    "id": "c101",
                    "title": "Replace logo",
                    "labelIds": ["101", "102"],
                    "style": {
                        "bgColor": "#26de81",
                    }
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
            "tasks": [{
                    "id": "c103",
                    "title": "Do that"
                },
                {
                    "id": "c104",
                    "title": "Help me",
                    "description": "i describe that i need help",
                    "comments": [{
                        "id": "ZdPnm",
                        "txt": "also @yaronb please CR this",
                        "createdAt": 1590999817436.0,
                        "byMember": {
                            "_id": "u101",
                            "fullname": "Tal Tarablus",
                            "imgUrl": "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg"
                        }
                    }],
                    "checklists": [{
                            "id": "YEhmF",
                            "title": "Checklist",
                            "todos": [{
                                "id": "212jX",
                                "title": "To Do 1",
                                "isDone": false
                            }, {
                                "id": "394kdk",
                                "title": "To Do 1",
                                "isDone": true
                            }, {
                                "id": "421uel",
                                "title": "To Do 1",
                                "isDone": true
                            }]
                        },
                        {
                            "id": "IYGku",
                            "title": "Checklist2",
                            "todos": [{
                                "id": "321lds",
                                "title": "To Do 1",
                                "isDone": true
                            }, {
                                "id": "394kdk",
                                "title": "To Do 1",
                                "isDone": false
                            }, {
                                "id": "02i5f",
                                "title": "To Do 1",
                                "isDone": true
                            }]
                        },

                    ],
                    "members": [{
                            "_id": "u101",
                            "username": "Tal",
                            "fullname": "Tal Tarablus",
                            "imgUrl": "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg"
                        },
                        {
                            "_id": "u102",
                            "username": "Rotem",
                            "fullname": "Rotem Bar",
                        },
                        {
                            "_id": "u103",
                            "username": "Roey",
                            "fullname": "Roey Barda",
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
                        "bgColor": "#26de81",
                        "imgUrl": "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg"
                    }
                }
            ],
            "style": {}
        }
    ],
    "activities": [{
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
    }]
}, {
    "_id": "b102",
    "title": "The Better Trello",
    "createdAt": 1589983468418,
    "createdBy": {
        "_id": "u102",
        "fullname": "Roey Barda",
        "imgUrl": "http://some-img"
    },
    "style": {"imgUrl": "https://bit.ly/3yLM7uN"},
    "labels": [{
        "id": "l101",
        "title": "Done",
        "color": "#61bd4f"
    }],
    "members": [{
        "_id": "u101",
        "fullname": "Tal Tarablus",
        "imgUrl": "https://www.google.com"
    }],
    "groups": [{
            "id": "g101",
            "title": "Group 1",
            "tasks": [{
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
            "tasks": [{
                    "id": "c103",
                    "title": "Do that",
                },
                {
                    "id": "c104",
                    "title": "Help me",
                    "description": "description",
                    "comments": [{
                        "id": "ZdPnm",
                        "txt": "also @yaronb please CR this",
                        "createdAt": 1590999817436.0,
                        "byMember": {
                            "_id": "u101",
                            "fullname": "Tal Tarablus",
                            "imgUrl": "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg"
                        }
                    }],
                    "checklists": [{
                        "id": "YEhmF",
                        "title": "Checklist",
                        "todos": [{
                            "id": "212jX",
                            "title": "To Do 1",
                            "isDone": false
                        }]
                    }],
                    "members": [{
                        "_id": "u101",
                        "username": "Tal",
                        "fullname": "Tal Tarablus",
                        "imgUrl": "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg"
                    }],
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
                        "bgColor": "#26de81",
                        "imgUrl": ''
                    }
                }
            ],
            "style": {}
        }
    ],
    "activities": [{
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
    }]
}]

const STORAGE_KEY = 'board_db'

function query(entityType) {
    var entities = JSON.parse(localStorage.getItem(entityType)) || []
    if (!entities || !entities.length) {
        entities = gBoards;
        _save(STORAGE_KEY, entities)
    }
    return Promise.resolve(entities)
}

function get(entityType, entityId) {
    return query(entityType)
        .then(entities => {
            return entities.find(entity => entity._id === entityId || entity.id === entityId)
        })
}

function post(entityType, newEntity, lastBoardId) {
    newEntity = _makeNewBoard(newEntity, lastBoardId)
    return query(entityType)
        .then(entities => {
            entities.push(newEntity)
            _save(entityType, entities)
            return newEntity
        })
}

function put(entityType, updatedEntity) {
    return query(entityType)
        .then(entities => {
            const idx = entities.findIndex(entity => entity._id === updatedEntity._id)
            entities.splice(idx, 1, updatedEntity)
            _save(entityType, entities)
            return updatedEntity
        })
}

function remove(entityType, entityId) {
    return query(entityType)
        .then(entities => {
            const idx = entities.findIndex(entity => entity._id === entityId)
            entities.splice(idx, 1)
            _save(entityType, entities)
        })
}

function _save(entityType, entities) {
    localStorage.setItem(entityType, JSON.stringify(entities))
}

function _makeId(length = 5) {
    var text = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return text
}

function _makeNewId(lastdId){
    let IdLetter = lastdId.substring(0, 1)
    let lastId = +(lastdId.substring(1, lastdId.length))
    lastId = lastId + 1
    let newId = IdLetter + lastId
    return newId
}

function _makeNewBoard(newEntity, lastdId){
    newEntity._id = _makeNewId(lastdId)
    newEntity.style = {"imgUrl": "https://bit.ly/3yLM7uN"}
    newEntity.activities = {}
    newEntity.createdAt = Date.now()
    newEntity.createdBy = {  "_id": "u101", "fullname": "Roey Barda", "imgUrl": "https://bit.ly/3p16jEB"}
    newEntity.groups = [{id: _makeId(), style: {}, tasks: [{id: _makeId(), labelsIds: [], style:{}, title:"task 1"}], title: "Group 1"}]
    newEntity.labels = []
    newEntity.members = []
    return newEntity
}