import { Home } from './pages/Home.jsx'
import { BoardList } from './pages/BoardList.jsx'
import { BoardDetails } from './pages/BoardDetails.jsx'
import { LoginSignup } from './pages/LoginSignup.jsx'

export const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/board',
        component: BoardList,
    },
    {
        path: '/board/:boardId?',
        component: BoardDetails,
    },
    {
        path: '/login',
        component: LoginSignup,
    },
]