import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import BlogListView from "@/views/BlogListView.vue";
import ProjectListView from "@/views/ProjectListView.vue";
import ServiceView from "@/views/ServiceView.vue";
import AboutView from "@/views/AboutView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView
  },
  {
    path: "/blogs",
    name: "blog-list",
    component: BlogListView
  },
  {
    path: "/projects",
    name: "project-list",
    component: ProjectListView
  },
  {
    path: "/services",
    name: "service",
    component: ServiceView
  },
  {
    path: "/about",
    name: "about",
    component: AboutView
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
});

export default router;