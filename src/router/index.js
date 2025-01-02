import {createRouter,createWebHistory} from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
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

    ]
});

export default router;