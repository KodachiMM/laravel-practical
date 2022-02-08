const Home = () => import('../pages/Home');
const Login = () => import('../pages/Login');
const Register = () => import('../pages/Register');
const CreateForm = () => import('../pages/CreateForm');

export default [
    {
        path: '/',
        component: Home,
        name: 'home',
    },
    {
        path: '/login',
        component: Login,
        name: 'login',
        meta: {
            guard: 'guest',
        },
    },
    {
        path: '/register',
        component: Register,
        name: 'register',
        meta: {
            guard: 'guest',
        },
    },
    {
        path: '/forms/create',
        component: CreateForm,
        name: 'create-form',
        meta: {
            guard: 'auth',
        },
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/',
    },
];
