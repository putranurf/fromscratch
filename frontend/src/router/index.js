import Vue from "vue";
import VueRouter from "vue-router";
import Cookies from "js-cookie";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/auth'
  },
  {
    path: "/auth",
    name: "auth",
    meta: {
      requiresAuth: true
    },
    component: () => import(/* webpackChunkName: "Auth" */ "../views/Auth/Auth.vue"),
    children: [
      {
        path: "home",
        name: "home",
        component: () => import(/* webpackChunkName: "Home Layout" */ "../views/Layout/Home.vue")
      }
    ]
  },
  //Halaman 404 Not Found
  {
    path: "*",
    name: "404",
    component: () =>
      import(/* webpackChunkName: "404" */ "../views/404/404.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.

    const auth = Cookies.get("auth");

    if (auth) {
      next({
        path: "/auth",
        query: { redirect: to.fullPath }
      });
    } else {
      next();
    }
  } else {
    next(); // make sure to always call next()!
  }
});

export default router;
