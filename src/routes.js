import { Home } from './pages/Home.jsx'
import { BoardsList } from './pages/BoardsList.jsx'
import { BoardPreview } from './pages/BoardApp.jsx'
import { LoginSignup } from './pages/LoginSignup.jsx'

export const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/board',
        component: BoardsList,
    },
    {
        path: '/board/:boardId?',
        component: BoardPreview,
    },
    {
        path: '/login',
        component: LoginSignup,
    },
]