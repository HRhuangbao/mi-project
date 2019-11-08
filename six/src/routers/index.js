import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
//第一层
import Home from "../pages/Home.vue";
import Behavior from "../pages/Behavior.vue";
//第二层home⬇️
import Commodity from "../pages/Commodity.vue";
import Tab from "../pages/Tab.vue";
import ShoppingCart from "../pages/ShoppingCart.vue";
//第二层Behavior⬇️
import LogIn from "../pages/LogIn.vue";
import SignIn from "../pages/SignIn.vue";


import Mine from "../components/Mine.vue";

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
            path: 'Mine',
            name: 'Mine',
            component: Mine
        },



    ]
},
{
    path: '/Behavior',
    name: 'Behavior',
    component: Behavior,
    children: [
        {
            path: 'LogIn',
            name: 'LogIn',
            component: LogIn
        },
        {
            path: 'SignIn',
            name: 'SignIn',
            component: SignIn
        },

    ]

}
]
const router = new VueRouter({
    routes
})
export default router