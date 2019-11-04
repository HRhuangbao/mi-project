import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from "../pages/Home.vue";
import Classify from "../pages/Classify.vue";
const routes = [{
    path: '/Home',
    component: Home
},
{
    path: '/Classify',
    component: Classify
}
]
const router = new VueRouter({
    routes
})
export default router