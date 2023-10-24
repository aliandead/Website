import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import BlogListView from "@/views/BlogListView.vue";
import ProjectListView from "@/views/ProjectListView.vue";
import ServiceView from "@/views/ServiceView.vue";
import AboutView from "@/views/AboutView.vue";
import LegalView from "@/views/LegalView.vue";
import PrivacyView from "@/views/PrivacyView.vue";
import NotFoundView from "@/views/NotFoundView.vue";

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
  },
  {
    path: "/legal",
    name: "legal",
    component: LegalView
  },
  {
    path: "/privacy",
    name: "privacy",
    component: PrivacyView
  },
  {
      "path": "/:catchAll(.*)",
      "name": "not-found",
      "component": NotFoundView
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
});

export default router;