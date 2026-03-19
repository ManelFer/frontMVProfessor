import { createRouter, createWebHistory} from "vue-router"

import Login from "../pages/Login.vue"
import Register from "../pages/Register.vue"
import DashBoard from "../pages/DashBoard.vue"
import AdicionarAlunos from "../pages/AdicionarAlunos.vue"
import AdicionarAtividade from "../pages/AdicionarAtividade.vue"
import Feadback from "../pages/Feadback.vue"


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
    },
    {
        path: '/adicionarAtividades',
        component: AdicionarAtividade
    },
    {
        path: '/feadback',
        component: Feadback
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router