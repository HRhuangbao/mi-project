export default {
    data: {
        pipei: 'shuju2',
        shuju: [],

        nub: true,
        login: [],
        //点击注册登陆


        tab: [],
        //tab页面的数据
    },
    mo(canshu) {
        this.data.shuju = canshu;
    },
    login(canshu) {
        this.data.login = canshu;
    },
    logintwo(canshu) {
        this.data.logintwo = canshu;
    },
    tab(canshu) {
        this.data.tab = canshu;

    }



}