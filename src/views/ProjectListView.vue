<script setup>
import { ref } from "vue";
import { onMounted } from "vue";
import { setParam } from "@/global";
import Project from "@/components/Project.vue";

import Data from "@/assets/projects.json";

const isProjectListEmpty = ref(Data.project.length == 0);
const isWorkListEmpty = ref(Data.work.length == 0);

onMounted(() => {
    const projectBanners = document.getElementsByClassName("project-item-banner");
    for (const banner of projectBanners) {
        banner.addEventListener("load", () => {
            banner.setAttribute("style", "display: block;");
            banner.parentNode.querySelector(".project-banner-placeholder")
                .setAttribute("style", "display: none;");
        });
    }

    const projectIcons = document.getElementsByClassName("project-item-icon");
    for (const icon of projectIcons) {
        icon.addEventListener("load", () => {
            icon.setAttribute("style", "display: block;");
            icon.parentNode.querySelector(".project-icon-placeholder")
                .setAttribute("style", "display: none;");
        });
    }

    if (isProjectListEmpty.value && isWorkListEmpty.value) {
        const container = document.getElementById("container");
        container.style.alignItems = "center";
    }
});

setParam("globalNavigation", true);
setParam("globalPageTitle", "Projects");
</script>

<template>
    <div id="container">
        <div class="content">
            <h1 class="title" v-show="!isProjectListEmpty || !isWorkListEmpty">Project Discovery</h1>
            <p class="small-title" v-show="!isProjectListEmpty">Current Projects</p>
            <div class="card-container" v-show="!isProjectListEmpty">
                <Project :data="item" :projectId="i" v-for="(item, i) in Data.project" :key="i" />
            </div>
            <p class="small-title" v-show="!isWorkListEmpty">Previous works / ideas</p>
            <div class="card-container" v-show="!isWorkListEmpty">
                <Project :data="item" :projectId="i" :isWork="true" v-for="(item, i) in Data.work" :key="i" />
            </div>
            <div class="notice" v-show="isProjectListEmpty && isWorkListEmpty">
                <h1>Hold on...</h1>
                <p>Ah! Uh, never mind... I didn't find anything... 😬</p>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import "@/styles/common.scss";
@import "@/styles/notice.scss";

#container {
    display: flex;
    justify-content: center;
}

.content {
    min-width: 0;
}

.title {
    color: $titleColor;
    text-align: center;
    margin: 64px 0 32px 0;
}

.small-title {
    font-size: 24px;
    color: $titleColor;
    margin: 16px;
}

.card-container {
    padding: 32px;
    background-color: $backgroundColor;
    border-radius: 32px;
    display: flex;
    flex-wrap: wrap;
    max-width: 1039px;
    width: 90vw;
    gap: 2rem;
    margin-bottom: 16px;
}

@media screen and (max-width: 1170px) {
    .card-container {
        justify-content: center;
        max-width: initial;
        width: initial;
        margin: 16px;
    }
}

@media screen and (max-width: 400px) {
    .card-container {
        margin: 4px;
    }
}
</style>