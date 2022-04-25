import Home from './components/Home.vue'
import SignUp from './components/SignUp.vue'
import {createRouter,createWebHistory} from 'vue-router'
import LoginPage from './components/LoginPage.vue'
import About from './components/AboutPage.vue'
const routes=[
    {
        name:'HomePage',
        component:Home,
        path:'/'
    },
    {
        name:'AboutPage',
        component:About,
        path:'/about'
    },
    {
        name:'SignUp',
        component:SignUp,
        path:'/signup'
    },
    {
        name:'LoginPage',
        component:LoginPage,
        path:'/login'
    },
      
]
const router=createRouter({
    history:createWebHistory(),
    routes
});
export default router;