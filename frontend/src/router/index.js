import Vue from "vue";
import VueRouter from "vue-router";
import Cookies from "js-cookie";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: "/home",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "Home Layout" */ "../views/Layout/Home.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/auth",
    name: "auth",
    // redirect: '/home',
    component: () =>
      import(/* webpackChunkName: "Auth" */ "../views/Auth/Auth.vue"),
  },
  {
    path: '/pdf',
    name: "pdfdoc",
    component: () =>
      import(/* webpackChunkName: "Auth" */ "../views/PdfDoc/Pdfdoc.vue"),
    meta: {
      requiresAuth: true
    }
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
  const auth = Cookies.get("auth");
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!auth) {
      next({
        path: "/auth",
        // query: { redirect: to.fullPath }
      });
    } else {
      next() 
    }
  } else {
    next(); // make sure to always call next()!
  }
});


export default router;
