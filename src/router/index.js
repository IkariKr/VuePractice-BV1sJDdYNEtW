import {createRouter, createWebHistory} from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            alias: '/home',
            component: () => import("../views/Home.vue")
        },
        {
            path: "/live",
            component: () => import("../views/Live.vue")
        },
        {
            path: "/my",
            component: () => import("../views/my.vue")
        },
        {
            path: "/Shopping",
            component: () => import("../views/Shopping.vue")
        },
        {
            path: "/search", // 修改路径为小写
            component: () => import("../views/Search.vue"),
            children: [{
                path: "", // 修改路径为                    空字符串
                name: 'index',
                component: () => import("../views/search/SearchIndex.vue")
            }, {
                path: 'list',
                name: 'list',
                component: () => import("../views/search/SearchList.vue")
            }]
        },
    ]
});



export default router;