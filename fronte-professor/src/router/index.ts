import { createRouter, createWebHistory} from "vue-router"

import Login from "../pages/Login.vue"
import Register from "../pages/Register.vue"
import DashBoard from "../pages/DashBoard.vue"
import AdicionarAlunos from "../pages/AdicionarAlunos.vue"


const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/register',
        component: Register
    },
    {
        path: '/dashboard',
        component: DashBoard
    },
    {
        path: '/adicionarAlunos',
        component: AdicionarAlunos 
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router