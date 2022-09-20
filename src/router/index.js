import { createRouter, createWebHistory } from "vue-router";
import TopPage from './';
import FormPage from './';

const routes = [
    {
        path: '/',
        name: 'TopPage',
        component: TopPage
    },
    {
        path: '/form',
        name: 'Form',
        component: FormPage
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;