import Home123U from './components/Home123U.vue';
import About123U from './components/NavBar-comp/About123U.vue';
import Contact123U from './components/NavBar-comp/Contact123U.vue';
import SignUp from './components/SignUp.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        name: 'Home123U',
        component: Home123U,
        path: '/'
    },
    {
        name: 'About123U',
        component: About123U,
        path: '/about'
    },
    {
        name: 'Contact123U',
        component: Contact123U,
        path: '/contact'
    },
    {
        name: 'SignUp',
        component: SignUp,
        path: '/sign-up'
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
