import {createWebHistory,createRouter} from 'vue-router'
import Home from "./View/Home.vue"
import Order from "./View/Order.vue"
export const routes = [
    {
        path : "/",
        name: "home",
        component: Home
    },
    {
        path : "/order",
        name: "order",
        component: Order
    },
    
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router