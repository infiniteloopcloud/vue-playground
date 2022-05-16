import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/performance-tests",
    name: "performance-tests",
    component: () =>
      import(
        /* webpackChunkName: "performance-tests" */ "@/views/PerformanceTests.vue"
      ),
    children: [
      {
        path: "buttons",
        name: "performance-tests-buttons",
        component: () =>
          import(
            /* webpackChunkName: "performance-tests-buttons" */ "@/views/performance-tests/ButtonsPerformance.vue"
          ),
        children: [
          {
            path: "component-buttons",
            name: "performance-tests-base-buttons",
            component: () =>
              import(
                /* webpackChunkName: "performance-tests-base-buttons" */ "@/views/performance-tests/buttons/BaseButtons.vue"
              ),
          },
          {
            path: "html-buttons",
            name: "performance-tests-html-buttons",
            component: () =>
              import(
                /* webpackChunkName: "performance-tests-html-buttons" */ "@/views/performance-tests/buttons/HtmlButtons.vue"
              ),
          },
        ],
      },
      {
        path: "inputs",
        name: "performance-tests-inputs",
        component: () =>
          import(
            /* webpackChunkName: "performance-tests-inputs" */ "@/views/performance-tests/InputsPerformance.vue"
          ),
        children: [
          {
            path: "component-inputs",
            name: "performance-tests-base-inputs",
            component: () =>
              import(
                /* webpackChunkName: "performance-tests-base-inputs" */ "@/views/performance-tests/inputs/BaseInputs.vue"
              ),
          },
          {
            path: "html-inputs",
            name: "performance-tests-html-inputs",
            component: () =>
              import(
                /* webpackChunkName: "performance-tests-html-inputs" */ "@/views/performance-tests/inputs/HtmlInputs.vue"
              ),
          },
        ],
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
