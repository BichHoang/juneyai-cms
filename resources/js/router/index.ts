import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { WHITE_LIST } from '../config/constants';
import useStore from '../store';
import { matchInArray } from '../utils';
import { getToken } from '../utils/auth';
import getPageTitle from '../utils/get-page-title';
import middleware from '../utils/middleware';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/dashboard',
        meta: {
            title: "home",
            hidden: true,
        },
    },
    {
        path: "/login",
        name: "Login",
        component: () => import("../components/auth/Login.vue"),
        meta: {
            title: "login",
            requiresAuth: false,
        }
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: () => import("../components/dashboard/Index.vue"),
        meta: {
            title: "dashboard",
            roles: ['owner', 'admin']
        }
    },
    {
        path: "/models",
        name: "Models",
        component: () => import("../components/models/Index.vue"),
        children: [
            {
                path: "users",
                name: "Users",
                component: () => import('../components/models/user/Index.vue'),
                meta: {
                    title: "Users",
                }
            },
            {
                path: "roles",
                name: "Roles",
                component: () => import('../components/models/role/Index.vue'),
                meta: {
                    title: "Roles",
                }
            },
            {
                path: "permissions",
                name: "Permissions",
                component: () => import('../components/models/permission/Index.vue'),
                meta: {
                    title: "Permissions",
                }
            },
        ]
    },
    {
        path: "/setting",
        name: "Setting",
        redirect: 'theme',
        children: [
            {
                path: "theme",
                name: "Theme",
                component: () => import('../components/settings/Theme.vue'),
                meta: {
                    title: "theme",
                }
            },
            {
                path: "pages",
                name: "Pages",
                component: () => import('../components/settings/Page.vue'),
                meta: {
                    title: "page_setting",
                }
            },
        ]
    },
    {
        path: '/:pathMatch(.*)*',
        component: () => import('../components/pages/404.vue'),
        name: 'NotFound',
        meta: {
            title: "404",
            requiresAuth: false,
        },
    },
    {
        path: '/401',
        component: () => import('../components/pages/401.vue'),
        name: 'NotPermission',
        meta: {
            title: "401",
        }
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

router.beforeEach(async (to, from, next) => {
    document.title = getPageTitle(to.meta.title);
    const store = useStore();
    const hasToken = getToken();
    console.log("hasToken: ", hasToken);
    if (hasToken) {
        if (to.path === '/login') {
            // if is logged in, redirect to the home page
            next(store.global.redirect);
        } else {
            // determine whether the user has obtained his permission roles through getInfo
            const canAccess = middleware.canAccess(to.meta.permissions, to.meta.roles);
            console.log("canAccess: ", canAccess)
            if (canAccess) {
                next();
            } else {
                try {
                    // get user info
                    next({ ...to, replace: true });
                } catch (error) {
                    // remove token and go to login page to re-login
                    store.auth.actFedLogout();
                    next(`/login?redirect=${to.path}`);
                }
            }
        }
    } else {
        /* has no token*/
        if (matchInArray(to.path, WHITE_LIST)) {
            // in the free login whitelist, go directly
            next();
        } else {
            // other pages that do not have permission to access are redirected to the login page.
            next(`/login?redirect=${to.path}`);
        }
    }
})

export default router;
