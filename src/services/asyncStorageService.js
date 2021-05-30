export const storageService = {
    query,
    get,
    post,
    put,
    remove,
}

var gBoards = [{
    "_id": "b101",
    "title": "The Better Trello",
    "createdAt": 1589983468418,
    "createdBy": {
        "_id": "u101",
        "fullname": "Roey Barda",
        "imgUrl": "https://bit.ly/3fxLayU"
    },
    "style": {
        "imgUrl": "https://bit.ly/3yQz8rN"
    },
    "labels": [{
        "id": "l101",
        "title": "Done",
        "color": "#61bd4f"
    }, {
        "title": "Waiting",
        "color": "#ff9f1a",
        "id": "lfFu98"
    }, {
        "title": "To-do",
        "color": "#00c2e0",
        "id": "lF2mRT"
    }, {
        "title": "Doing",
        "color": "#f1d600",
        "id": "lOmqYf"
    }],
    "members": [{
        "_id": "u101",
        "fullname": "Roey Barda",
        "imgUrl": "https://bit.ly/3fxLayU"
    }, {
        "_id": "u102",
        "fullname": "Rotem Bar",
        "imgUrl": "https://bit.ly/34HUb2d"
    }, {
        "_id": "u103",
        "fullname": "Noa Kaplan",
        "imgUrl": "https://bit.ly/2SDYecT"
    }, {
        "_id": "u104",
        "fullname": "Hila Meri",
        "imgUrl": ""
    }],
    "groups": [{
        "id": "gLNMeY",
        "title": "Backlog",
        "tasks": [{
            "id": "c5nVjK",
            "title": "Operation: All The Bugs",
            "description": "One week, all outstanding bugs!",
            "byMember": {
                "_id": "u101",
                "username": "Roey",
                "fullname": "Roey Barda",
                "imgUrl": "https://bit.ly/3fxLayU"
            },
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
            "labelIds": ["F2mRT"],
            "style": {
                "bgColor": "#0279bf"
            },
            "checklists": [{
                "id": "YEhmF",
                "title": "Checklist",
                "todos": [{
                    "id": "212jX",
                    "title": "To Do 1",
                    "isDone": false
                }]
            }],
            "dueDate": 1622370903876,
            "members": [{
                "_id": "u101",
                "fullname": "Roey Barda",
                "imgUrl": "https://bit.ly/3fxLayU"
            }, {
                "_id": "u102",
                "fullname": "Rotem Bar",
                "imgUrl": "https://bit.ly/34HUb2d"
            }, {
                "_id": "u103",
                "fullname": "Noa Kaplan",
                "imgUrl": "https://bit.ly/3wHMPHH"
            }, {
                "_id": "u104",
                "fullname": "Hila Meri",
                "imgUrl": ""
            }]
        }, {
            "id": "covUhe",
            "title": "Multiple Emojis select",
            "byMember": {
                "_id": "u101",
                "username": "Roey",
                "fullname": "Roey Barda",
                "imgUrl": "https://bit.ly/3fxLayU"
            },
            "members": [{
                "_id": "u101",
                "fullname": "Roey Barda",
                "imgUrl": "https://bit.ly/3fxLayU"
            }, {
                "_id": "u102",
                "fullname": "Rotem Bar",
                "imgUrl": "https://bit.ly/34HUb2d"
            }],
            "description": "Repro Windows/Chrome\n\n1.Open checklist\n2.Use Shift+Click to highlight multiple items\nExpected: Ability to select multiple items",
            "labelIds": ["F2mRT"]
        }, {
            "id": "cvb1Rn",
            "title": "Company RoadMap",
            "byMember": {
                "_id": "u101",
                "username": "Roey",
                "fullname": "Roey Barda",
                "imgUrl": "https://bit.ly/3fxLayU"
            },
            "labelIds": ["F2mRT"],
            "style": {
                "imgUrl": "https://i.pinimg.com/originals/f6/b0/8e/f6b08efbe82b77db463cee9770223d5e.gif"
            },
            "members": [{
                "_id": "u104",
                "fullname": "Hila Meri",
                "imgUrl": ""
            }, {
                "_id": "u103",
                "fullname": "Noa Kaplan",
                "imgUrl": "https://bit.ly/3wHMPHH"
            }]
        }, {
            "id": "c8m7vF",
            "title": "Metrics and KPI ",
            "byMember": {
                "_id": "u101",
                "username": "Roey",
                "fullname": "Roey Barda",
                "imgUrl": "https://bit.ly/3fxLayU"
            },
            "labelIds": ["F2mRT"],
            "members": [{
                "_id": "u103",
                "fullname": "Noa Kaplan",
                "imgUrl": "https://bit.ly/3wHMPHH"
            }, {
                "_id": "u101",
                "fullname": "Roey Barda",
                "imgUrl": "https://bit.ly/3fxLayU"
            }]
        }, {
            "id": "cgjwZ3",
            "title": "Add Tab to react on images",
            "byMember": {
                "_id": "u101",
                "username": "Roey",
                "fullname": "Roey Barda",
                "imgUrl": "https://bit.ly/3fxLayU"
            },
            "description": "1.Open any image\n2.Press 'tab'\nExpected: Focus on the emoji reaction field",
            "labelIds": ["F2mRT"],
            "style": {
                "imgUrl": "https://bit.ly/3ftTAaq"
            },
            "members": [{
                "_id": "u102",
                "fullname": "Rotem Bar",
                "imgUrl": "https://bit.ly/34HUb2d"
            }, {
                "_id": "u103",
                "fullname": "Noa Kaplan",
                "imgUrl": "https://bit.ly/3wHMPHH"
            }]
        }]
    }, {
        "id": "grHLeX",
        "title": "In Progress",
        "tasks": [{
            "id": "ccwPce",
            "title": "Emoji Reaction on comments",
            "byMember": {
                "_id": "u101",
                "username": "Roey",
                "fullname": "Roey Barda",
                "imgUrl": "https://bit.ly/3fxLayU"
            },
            "description": "The Emoji Guide To Team Productivity [Infographic]",
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
            "labelIds": ["OmqYf"],
            "style": {
                "imgUrl": "https://bit.ly/3c3kTGr"
            },
            "members": [{
                "_id": "u102",
                "fullname": "Rotem Bar",
                "imgUrl": "https://bit.ly/34HUb2d"
            }]
        }, {
            "id": "cuvFE9",
            "title": "The Emoji Guide To Team Productivity [Infographic]",
            "byMember": {
                "_id": "u101",
                "username": "Roey",
                "fullname": "Roey Barda",
                "imgUrl": "https://bit.ly/3fxLayU"
            },
            "labelIds": ["OmqYf"],
            "members": [{
                "_id": "u101",
                "fullname": "Roey Barda",
                "imgUrl": "https://bit.ly/3fxLayU"
            }]
        }, {
            "id": "cGnBxQ",
            "title": "Build Emoji Reactions in our tool - Project Overview",
            "byMember": {
                "_id": "u101",
                "username": "Roey",
                "fullname": "Roey Barda",
                "imgUrl": "https://bit.ly/3fxLayU"
            },
            "description": "Let's add Emoji reaction capabilities to our tools",
            "labelIds": ["OmqYf"],
            "members": [{
                "_id": "u103",
                "fullname": "Noa Kaplan",
                "imgUrl": "https://bit.ly/3wHMPHH"
            }]
        }, {
            "id": "cxSDAj",
            "title": "Localization",
            "byMember": {
                "_id": "u101",
                "username": "Roey",
                "fullname": "Roey Barda",
                "imgUrl": "https://bit.ly/3fxLayU"
            },
            "labelIds": ["OmqYf"],
            "style": {
                "bgColor": "#60be50"
            },
            "members": [{
                "_id": "u101",
                "fullname": "Roey Barda",
                "imgUrl": "https://bit.ly/3fxLayU"
            }]
        }, {
            "id": "cE1n29",
            "title": "Allow Custom Emojis",
            "byMember": {
                "_id": "u101",
                "username": "Roey",
                "fullname": "Roey Barda",
                "imgUrl": "https://bit.ly/3fxLayU"
            },
            "labelIds": ["OmqYf"],
            "members": [{
                "_id": "u104",
                "fullname": "Hila Meri",
                "imgUrl": ""
            }]
        }]
    }, {
        "id": "ggHGbO",
        "title": "General Information",
        "tasks": [{
            "id": "cW0f4S",
            "title": "How to use this board",
            "members": [{
                "_id": "u101",
                "fullname": "Roey Barda",
                "imgUrl": "https://bit.ly/3fxLayU"
            }, {
                "_id": "u102",
                "fullname": "Rotem Bar",
                "imgUrl": "https://bit.ly/34HUb2d"
            }]
        }, {
            "id": "chMMKG",
            "title": "Add Emoji Reactions on images",
            "byMember": {
                "_id": "u101",
                "username": "Roey",
                "fullname": "Roey Barda",
                "imgUrl": "https://bit.ly/3fxLayU"
            },
            "description": "1. log in.\n2. go to any board.\n3. change the board name upper left corner\nexpeted: board name change\nactual: board name change but not save",
            "members": [{
                "_id": "u103",
                "fullname": "Noa Kaplan",
                "imgUrl": "https://bit.ly/3wHMPHH"
            }, {
                "_id": "u104",
                "fullname": "Hila Meri",
                "imgUrl": ""
            }]
        }, {
            "id": "cyg5R9",
            "title": "Team Members Responsibilities",
            "byMember": {
                "_id": "u101",
                "username": "Roey",
                "fullname": "Roey Barda",
                "imgUrl": "https://bit.ly/3fxLayU"
            },
            "description": "Project manager\nAlexia\n\nDev team:\nAmy, Samantha and Chris T\n\nDesign:\nAndre\n\nMarketing\nMarques\n\nSupport\nPriscilla",
            "members": [{
                "_id": "u101",
                "fullname": "Roey Barda",
                "imgUrl": "https://bit.ly/3fxLayU"
            }, {
                "_id": "u102",
                "fullname": "Rotem Bar",
                "imgUrl": "https://bit.ly/34HUb2d"
            }, {
                "_id": "u103",
                "fullname": "Noa Kaplan",
                "imgUrl": "https://bit.ly/3wHMPHH"
            }]
        }]
    }, {
        "id": "gsFMxg",
        "title": "Market Research",
        "tasks": [{
            "id": "c9pckh",
            "title": "Video load issues on IE 11",
            "byMember": {
                "_id": "u101",
                "username": "Roey",
                "fullname": "Roey Barda",
                "imgUrl": "https://bit.ly/3fxLayU"
            },
            "description": "Repro Windows on IE 11\n\nUpload a video greater than 100mb\n1.Play video\n2.Expected: Video streams in player\n\nActual: Video does not load or stream",
            "style": {
                "bgColor": "#eb5a46"
            },
            "members": [{
                "_id": "u102",
                "fullname": "Rotem Bar",
                "imgUrl": "https://bit.ly/34HUb2d"
            }]
        }]
    }, {
        "id": "gT1WXg",
        "title": "Live",
        "byMember": {
            "_id": "u101",
            "username": "Roey",
            "fullname": "Roey Barda",
            "imgUrl": "https://bit.ly/3fxLayU"
        },
        "tasks": [{
            "id": "c50q9s",
            "title": "Custom emoji for web",
            "byMember": {
                "_id": "u101",
                "username": "Roey",
                "fullname": "Roey Barda",
                "imgUrl": "https://bit.ly/3fxLayU"
            },
            "members": [{
                "_id": "u103",
                "fullname": "Noa Kaplan",
                "imgUrl": "https://bit.ly/3wHMPHH"
            }]
        }, {
            "id": "cEbkg4",
            "title": "Emoji support",
            "byMember": {
                "_id": "u101",
                "username": "Roey",
                "fullname": "Roey Barda",
                "imgUrl": "https://bit.ly/3fxLayU"
            },
            "members": [{
                "_id": "u102",
                "fullname": "Rotem Bar",
                "imgUrl": "https://bit.ly/34HUb2d"
            }, {
                "_id": "u104",
                "fullname": "Hila Meri",
                "imgUrl": ""
            }]
        }, {
            "id": "cipfRb",
            "title": "Material design for Android",
            "byMember": {
                "_id": "u101",
                "username": "Roey",
                "fullname": "Roey Barda",
                "imgUrl": "https://bit.ly/3fxLayU"
            },
            "members": [{
                "_id": "u101",
                "fullname": "Roey Barda",
                "imgUrl": "https://bit.ly/3fxLayU"
            }]
        }]
    }, {
        "id": "gfLEh5",
        "title": "Done",
        "tasks": [{
            "id": "cogeY9",
            "title": "Create demo data",
            "byMember": {
                "_id": "u101",
                "username": "Roey",
                "fullname": "Roey Barda",
                "imgUrl": "https://bit.ly/3fxLayU"
            },
            "labelIds": ["101"],
            "members": [{
                "_id": "u101",
                "fullname": "Roey Barda",
                "imgUrl": "https://bit.ly/3fxLayU"
            }, {
                "_id": "u102",
                "fullname": "Rotem Bar",
                "imgUrl": "https://bit.ly/34HUb2d"
            }, {
                "_id": "u104",
                "fullname": "Hila Meri",
                "imgUrl": ""
            }, {
                "_id": "u103",
                "fullname": "Noa Kaplan",
                "imgUrl": "https://bit.ly/3wHMPHH"
            }]
        }]
    }],
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
    "title": "Sprint 4",
    "bgColor": "#000",
    "_id": "b102",
    "style": {
        "imgUrl": "https://bit.ly/3yLM7uN"
    },
    "activities": {},
    "createdAt": 1622312265790,
    "createdBy": {
        "_id": "u101",
        "fullname": "Roey Barda",
        "imgUrl": "https://bit.ly/3p16jEB"
    },
    "groups": [{
        "id": "gQ3Z3T",
        "title": "Backlog",
        "tasks": [{
            "id": "cG2KTJ",
            "title": "Adding a login page",
            "byMember": {
                "_id": "u101",
                "username": "Roey",
                "fullname": "Roey Barda",
                "imgUrl": "https://bit.ly/3fxLayU"
            },
            "labelIds": ["kk92g"],
            "members": [{
                "_id": "u101",
                "fullname": "Roey Barda",
                "imgUrl": "https://bit.ly/3fxLayU"
            }]
        }, {
            "id": "cT1jJ4",
            "title": "Adding a drag & drop option",
            "byMember": {
                "_id": "u101",
                "username": "Roey",
                "fullname": "Roey Barda",
                "imgUrl": "https://bit.ly/3fxLayU"
            },
            "labelIds": ["kk92g"],
            "style": {
                "bgColor": "#ffcc99"
            },
            "members": [{
                "_id": "u103",
                "fullname": "Noa Kaplan",
                "imgUrl": "https://bit.ly/3wHMPHH"
            }]
        }, {
            "id": "c9pIp2",
            "title": "Adding Attachments",
            "byMember": {
                "_id": "u101",
                "username": "Roey",
                "fullname": "Roey Barda",
                "imgUrl": "https://bit.ly/3fxLayU"
            },
            "labelIds": ["kk92g"],
            "style": {
                "bgColor": "purple"
            },
            "members": [{
                "_id": "u103",
                "fullname": "Noa Kaplan",
                "imgUrl": "https://bit.ly/3wHMPHH"
            }]
        }, {
            "id": "c8lT6S",
            "title": "Adding Checklists",
            "byMember": {
                "_id": "u101",
                "username": "Roey",
                "fullname": "Roey Barda",
                "imgUrl": "https://bit.ly/3fxLayU"
            },
            "labelIds": ["kk92g"],
            "style": {
                "bgColor": "#cc99ff"
            },
            "members": [{
                "_id": "u103",
                "fullname": "Noa Kaplan",
                "imgUrl": "https://bit.ly/3wHMPHH"
            }]
        }, {
            "id": "cjkAPd",
            "title": "Creating a logo",
            "byMember": {
                "_id": "u101",
                "username": "Roey",
                "fullname": "Roey Barda",
                "imgUrl": "https://bit.ly/3fxLayU"
            },
            "labelIds": ["kk92g"],
            "members": [{
                "_id": "u101",
                "fullname": "Roey Barda",
                "imgUrl": "https://bit.ly/3fxLayU"
            }]
        }, {
            "id": "c6nx4D",
            "title": "Change buttons text to icons",
            "byMember": {
                "_id": "u101",
                "username": "Roey",
                "fullname": "Roey Barda",
                "imgUrl": "https://bit.ly/3fxLayU"
            },
            "labelIds": ["kk92g"]
        }, {
            "id": "cqxmAn",
            "title": "Having some drinks and go to the beach once the sprint is over",
            "byMember": {
                "_id": "u101",
                "username": "Roey",
                "fullname": "Roey Barda",
                "imgUrl": "https://bit.ly/3fxLayU"
            },
            "labelIds": ["kk92g"],
            "style": {
                "imgUrl": "https://bit.ly/3wJ6ffy"
            },
            "members": [{
                "_id": "u101",
                "fullname": "Roey Barda",
                "imgUrl": "https://bit.ly/3fxLayU"
            }, {
                "_id": "u103",
                "fullname": "Noa Kaplan",
                "imgUrl": "https://bit.ly/3wHMPHH"
            }, {
                "_id": "u102",
                "fullname": "Rotem Bar",
                "imgUrl": "https://bit.ly/34HUb2d"
            }]
        }]
    }, {
        "id": "gHIs2O",
        "title": "In Progress",
        "tasks": [{
            "id": "cGLmGX",
            "title": "Creating activity log",
            "byMember": {
                "_id": "u101",
                "username": "Roey",
                "fullname": "Roey Barda",
                "imgUrl": "https://bit.ly/3fxLayU"
            },
            "labelIds": ["RH4XC"],
            "members": [{
                "_id": "u104",
                "fullname": "Hila Meri",
                "imgUrl": ""
            }, {
                "_id": "u102",
                "fullname": "Rotem Bar",
                "imgUrl": "https://bit.ly/34HUb2d"
            }]
        }, {
            "id": "cxqw5C",
            "title": "Trying not to go crazy during the sprint",
            "byMember": {
                "_id": "u101",
                "username": "Roey",
                "fullname": "Roey Barda",
                "imgUrl": "https://bit.ly/3fxLayU"
            },
            "labelIds": ["RH4XC"],
            "style": {
                "imgUrl": "https://bit.ly/2SIkSkc"
            },
            "members": [{
                "_id": "u102",
                "fullname": "Rotem Bar",
                "imgUrl": "https://bit.ly/34HUb2d"
            }, {
                "_id": "u103",
                "fullname": "Noa Kaplan",
                "imgUrl": "https://bit.ly/3wHMPHH"
            }, {
                "_id": "u104",
                "fullname": "Hila Meri",
                "imgUrl": ""
            }, {
                "_id": "u101",
                "fullname": "Roey Barda",
                "imgUrl": "https://bit.ly/3fxLayU"
            }]
        }, {
            "id": "cPcuox",
            "title": "Trying really hard not go crazy during the sprint",
            "byMember": {
                "_id": "u101",
                "username": "Roey",
                "fullname": "Roey Barda",
                "imgUrl": "https://bit.ly/3fxLayU"
            },
            "labelIds": ["RH4XC"],
            "style": {
                "imgUrl": "https://bit.ly/34tMKeL"
            },
            "members": [{
                "_id": "u104",
                "fullname": "Hila Meri",
                "imgUrl": ""
            }, {
                "_id": "u103",
                "fullname": "Noa Kaplan",
                "imgUrl": "https://bit.ly/3wHMPHH"
            }, {
                "_id": "u102",
                "fullname": "Rotem Bar",
                "imgUrl": "https://bit.ly/34HUb2d"
            }, {
                "_id": "u101",
                "fullname": "Roey Barda",
                "imgUrl": "https://bit.ly/3fxLayU"
            }]
        }]
    }, {
        "id": "gpPaKf",
        "title": "Done",
        "tasks": [{
            "id": "cA02R6",
            "title": "Creating Demo Data",
            "byMember": {
                "_id": "u101",
                "username": "Roey",
                "fullname": "Roey Barda",
                "imgUrl": "https://bit.ly/3fxLayU"
            },
            "labelIds": ["2dqpH"],
            "members": [{
                "_id": "u104",
                "fullname": "Hila Meri",
                "imgUrl": ""
            }, {
                "_id": "u103",
                "fullname": "Noa Kaplan",
                "imgUrl": "https://bit.ly/3wHMPHH"
            }]
        }, {
            "id": "cvumru",
            "title": "Building a Homepage",
            "byMember": {
                "_id": "u101",
                "username": "Roey",
                "fullname": "Roey Barda",
                "imgUrl": "https://bit.ly/3fxLayU"
            },
            "labelIds": ["2dqpH"],
            "members": [{
                "_id": "u103",
                "fullname": "Noa Kaplan",
                "imgUrl": "https://bit.ly/3wHMPHH"
            }, {
                "_id": "u102",
                "fullname": "Rotem Bar",
                "imgUrl": "https://bit.ly/34HUb2d"
            }]
        }, {
            "id": "cLnvy7",
            "title": "Adding custom labels",
            "byMember": {
                "_id": "u101",
                "username": "Roey",
                "fullname": "Roey Barda",
                "imgUrl": "https://bit.ly/3fxLayU"
            },
            "labelIds": ["2dqpH"],
            "members": [{
                "_id": "u102",
                "fullname": "Rotem Bar",
                "imgUrl": "https://bit.ly/34HUb2d"
            }]
        }, {
            "id": "cNm0P8",
            "title": "Come up with a name",
            "byMember": {
                "_id": "u101",
                "username": "Roey",
                "fullname": "Roey Barda",
                "imgUrl": "https://bit.ly/3fxLayU"
            },
            "labelIds": ["2dqpH"],
            "style": {
                "bgColor": "#0099ff"
            },
            "members": [{
                "_id": "u101",
                "fullname": "Roey Barda",
                "imgUrl": "https://bit.ly/3fxLayU"
            }]
        }]
    }],
    "labels": [{
        "title": "To-do",
        "color": "#eb5a46",
        "id": "lkk92g"
    }, {
        "title": "Doing",
        "color": "#f1d600",
        "id": "lRH4XC"
    }, {
        "title": "Done",
        "color": "#60be50",
        "id": "l2dqpH"
    }],
    "members": [{
        "_id": "u101",
        "fullname": "Roey Barda",
        "imgUrl": "https://bit.ly/3fxLayU"
    }, {
        "_id": "u102",
        "fullname": "Rotem Bar",
        "imgUrl": "https://bit.ly/34HUb2d"
    }, {
        "_id": "u103",
        "fullname": "Noa Kaplan",
        "imgUrl": "https://bit.ly/3wHMPHH"
    }, {
        "_id": "u104",
        "fullname": "Hila Meri",
        "imgUrl": ""
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

function _makeNewId(lastdId) {
    let IdLetter = lastdId.substring(0, 1)
    let lastId = +(lastdId.substring(1, lastdId.length))
    lastId = lastId + 1
    let newId = IdLetter + lastId
    return newId
}

function _makeNewBoard(newEntity, lastdId) {
    newEntity._id = _makeNewId(lastdId)
    newEntity.style = {
        "imgUrl": newEntity.style.imgUrl
    }
    newEntity.activities = {}
    newEntity.createdAt = Date.now()
    newEntity.createdBy = {
        "_id": "u101",
        "fullname": "Roey Barda",
        "imgUrl": "https://bit.ly/3p16jEB"
    }
    newEntity.groups = [{
        id: _makeId(),
        style: {},
        tasks: [{
            id: _makeId(),
            labelsIds: [],
            style: {},
            title: "task 1"
        }],
        title: "Group 1"
    }]
    newEntity.labels = []
    newEntity.members = []
    return newEntity
}