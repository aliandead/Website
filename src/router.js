import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import BlogListView from "@/views/BlogListView.vue";
import BlogDetailsView from "@/views/BlogDetailsView.vue";
import ProjectListView from "@/views/ProjectListView.vue";
import ProjectDetailsView from "@/views/ProjectDetailsView.vue";
import GalleryView from "@/views/GalleryView.vue";
import ServiceView from "@/views/ServiceView.vue";
import AboutView from "@/views/AboutView.vue";
import LegalView from "@/views/LegalView.vue";
import PrivacyView from "@/views/PrivacyView.vue";
import NotFoundView from "@/views/NotFoundView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
    meta: { inNavbar: true }
  },
  {
    path: "/blogs",
    name: "Blogs",
    component: BlogListView,
    meta: { inNavbar: true }
  },
  {
    path: "/blog/view",
    name: "BlogView",
    component: BlogDetailsView
  },
  {
    path: "/projects",
    name: "Projects",
    component: ProjectListView,
    meta: { inNavbar: true }
  },
  {
    path: "/project/details",
    name: "ProjectDetails",
    component: ProjectDetailsView
  },
  {
    path: "/gallery",
    name: "Gallery",
    component: GalleryView,
    meta: { inNavbar: false }
  },
  {
    path: "/services",
    name: "Services",
    component: ServiceView,
    meta: { inNavbar: true }
  },
  {
    path: "/about",
    name: "About",
    component: AboutView,
    meta: { inNavbar: true }
  },
  {
    path: "/legal",
    name: "Legal",
    component: LegalView
  },
  {
    path: "/privacy",
    name: "Privacy",
    component: PrivacyView
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFoundView
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
});

export default router;