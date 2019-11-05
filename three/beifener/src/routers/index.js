import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
//第一层
import Home from "../pages/Home.vue";
import Classify from "../pages/Classify.vue";
//第二层
import Commodity from "../pages/Commodity.vue";

import tow from "../components/tow.vue";
import three from "../components/three.vue";
import four from "../components/four.vue";

//第三层
import OneContent from "../components/OneContent.vue";
import six from "../components/six.vue";

const routes = [{
    path: '/Home',
    name: 'Home',
    component: Home,
    children: [
        {
            path: 'Commodity',
            name: 'Commodity',
            component: Commodity,
            children: [
                {
                    path: 'OneContent',
                    name: 'OneContent',
                    component: OneContent
                },
                {
                    path: 'six',
                    name: 'six',
                    component: six
                },
            ]
        },
        {
            path: 'tow',
            name: 'tow',
            component: tow
        },
        {
            path: 'three',
            name: 'three',
            component: three
        },
        {
            path: 'four',
            name: 'four',
            component: four
        },



    ]
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