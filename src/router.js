import { createRouter, createWebHistory } from 'vue-router';
import Login from './pages/Login.vue';
import ForgotPassword from './pages/ForgotPassword.vue';
import Register from './pages/Register.vue';
import RegisterOwner from './pages/RegisterOwner.vue';
import RegisterDriver from './pages/RegisterDriver.vue';
import DashboardDriver from './pages/DashboardDriver.vue'; // Importa el componente del Dashboard

const routes = [
    {
        path: '/',
        redirect: '/login',
    },
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/forgot-password',
        component: ForgotPassword,
    },
    {
        path: '/register',
        component: Register,
    },
    {
        path: '/register-owner',
        component: RegisterOwner,
    },
    {
        path: '/register-driver',
        component: RegisterDriver,
    },
    {
        path: '/dashboard-driver', // Ruta para el dashboard
        component: DashboardDriver,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
