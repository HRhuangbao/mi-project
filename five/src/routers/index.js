import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
//第一层
import Home from "../pages/Home.vue";
import Classify from "../pages/Classify.vue";
//第二层
import Commodity from "../pages/Commodity.vue";
import Tab from "../pages/Tab.vue";
import ShoppingCart from "../pages/ShoppingCart.vue";

import four from "../components/four.vue";

//第三层
import ContentOne from "../pages/ContentOne.vue";
import ContentTwo from "../pages/ContentTwo.vue";
import ContentThree from "../pages/ContentThree.vue";
import ContentFour from "../pages/ContentFour.vue";
import ContentFive from "../pages/ContentFive.vue";
import ContentSix from "../pages/ContentSix.vue";
import ContentSeven from "../pages/ContentSeven.vue";

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
                    path: 'ContentOne',
                    name: 'ContentOne',
                    component: ContentOne
                },
                {
                    path: 'ContentTwo',
                    name: 'ContentTwo',
                    component: ContentTwo
                },
                {
                    path: 'ContentThree',
                    name: 'ContentThree',
                    component: ContentThree
                },
                {
                    path: 'ContentFour',
                    name: 'ContentFour',
                    component: ContentFour
                },
                {
                    path: 'ContentFive',
                    name: 'ContentFive',
                    component: ContentFive
                },
                {
                    path: 'ContentSix',
                    name: 'ContentSix',
                    component: ContentSix
                },
                {
                    path: 'ContentSeven',
                    name: 'ContentSeven',
                    component: ContentSeven
                }


            ]
        },
        {
            path: 'Tab',
            name: 'Tab',
            component: Tab
        },
        {
            path: 'ShoppingCart',
            name: 'ShoppingCart',
            component: ShoppingCart
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