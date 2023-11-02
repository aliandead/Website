<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { setParam } from "@/global";
import MarkdownIt from "markdown-it";
import Projects from "@/assets/projects.json";

const route = useRoute();

const projectId = route.query.pid;
const project = Projects[projectId] || {};
const projectExists = Object.keys(project).length != 0;

const markdownSource = ref(null);

onMounted(() => {
    const projectBanner = document.getElementsByClassName("project-head-banner")[0];
    if (projectBanner != undefined) {
        projectBanner.addEventListener("load", () => {
            projectBanner.setAttribute("style", "display: block;");
            projectBanner.parentNode.getElementsByClassName("project-banner-placeholder")[0]
                                    .setAttribute("style", "display: none;");
        });
    }

    const projectIcon = document.getElementsByClassName("project-head-icon")[0];
    if (projectIcon != undefined) {
        projectIcon.addEventListener("load", () => {
            projectIcon.setAttribute("style", "display: block;");
            projectIcon.parentNode.getElementsByClassName("project-icon-placeholder")[0]
                                  .setAttribute("style", "display: none;");
        });
    }

    const container = document.getElementById("container");

    if (projectExists) {
        import(`@/assets/markdown/${project.details}.project.md`).then(module => {
            markdownSource.value = module.default;
        }).catch(err => {
            markdownSource.value = "";
            console.warn("Did you forget to create the markdown file?");
        }).finally(() => {
            container.style.alignItems = "start";
        });
    }
});

const renderer = new MarkdownIt({
     html: true
 });

setParam("globalNavigation", true);
</script>

<template>
    <div id="container">
        <div class="content">
            <div class="title" v-show="markdownSource != null">
                <h1>{{ project.name }}</h1>
            </div>
            <div class="project" v-show="markdownSource != null">
                <div class="project-head">
                <svg class="project-head-svg">
                    <defs>
                        <mask id="through">
                            <rect width="100%" height="100%" fill="white" />
                            <rect x="20" y="91" width="262" height="262" rx="128" fill="black" />
                        </mask>
                    </defs>
                    <defs>
                        <rect id="rounded" rx="128" width="240" height="240" x="32" y="100" />
                        <clipPath id="rounded-clip">
                            <use xlink:href="#rounded" />
                        </clipPath>
                    </defs>
                    <image class="project-head-banner" :href="project.banner" width="100%" height="245" preserveAspectRatio="xMidYMid slice" mask="url(#through)" style="display: none;" />
                    <rect class="project-banner-placeholder" width="100%" height="245" preserveAspectRatio="xMidYMid slice" fill="#000000" mask="url(#through)" />
                    <image class="project-head-icon" :href="project.icon" width="240" height="240" x="32" y="100" clip-path="url(#rounded-clip)" style="display: none;" />
                    <rect class="project-icon-placeholder" width="240" height="240" x="32" y="100" rx="128" fill="#000000" />
                </svg>
                </div>
                <div class="markdown" v-html="renderer.render(markdownSource)" v-if="markdownSource != null"/>
            </div>
            <div class="notice" v-if="markdownSource == null && projectExists">
                <h1>Loading...</h1>
            </div>
            <div class="notice" v-if="!projectExists">
                <h1>404 - Not Found</h1>
                <p>Oh... Seems like this project does not exist! 😐</p>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import "@/styles/common.scss";
@import "@/styles/notice.scss";
@import "@/styles/markdown.scss";

#container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.content {
    min-width: 0;
}

.title {
    background-color: $backgroundColor;
    border-radius: 16px;
    margin: 32px;
    padding: 32px;
    max-width: 960px;
    color: white;
}

.project {
    max-width: 960px;
    width: 85vw;

    border-radius: 32px;
    margin: 32px;
    padding-bottom: 16px;
    background-color: $backgroundColor;
}

.project-head-svg {
    width: 100%;
    height: 350px;
    overflow: hidden;
    border-radius: 32px 32px 0 0;
}

.markdown {
    margin-left: 30px;
}
</style>