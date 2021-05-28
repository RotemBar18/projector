import { Home } from './pages/Home.jsx'
import { BoardPage } from './pages/BoardPage.jsx'
import { BoardDetails } from './pages/BoardDetails.jsx'
import { LoginSignup } from './pages/LoginSignup.jsx'
import { TaskDetails } from './pages/TaskDetails.jsx'

export const routes = [{
        path: '/',
        component: Home,
    },
    {
        path: '/board',
        component: BoardPage,
    },
    {
        path: '/board/:boardId?',
        component: BoardDetails,
    },
    {
        path: '/board/:boardId?/:groupId?/:taskId?',
        component: TaskDetails,
    },
    {
        path: '/login',
        component: LoginSignup,
    },
]