import { createRouter, createWebHistory } from "vue-router";
import TopPage from '../pages/TopPage.vue';
import FormPage from '../pages/FormPage.vue';

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