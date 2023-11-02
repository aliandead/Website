<script setup>
import { ref } from "vue";
import { onMounted } from "vue";
import { setParam } from "@/global";
import Projects from "@/assets/projects.json";

const isProjectListEmpty = ref(Projects.length == 0);

onMounted(() => {
    const projectBanners = document.getElementsByClassName("project-item-banner");
    for (const banner of projectBanners) {
        banner.addEventListener("load", () => {
            banner.setAttribute("style", "display: block;");
            banner.parentNode.getElementsByClassName("project-banner-placeholder")[0]
                             .setAttribute("style", "display: none;");
        });
    }

    const projectIcons = document.getElementsByClassName("project-item-icon");
    for (const icon of projectIcons) {
        icon.addEventListener("load", () => {
            icon.setAttribute("style", "display: block;");
            icon.parentNode.getElementsByClassName("project-icon-placeholder")[0]
                           .setAttribute("style", "display: none;");
        });
    }

    if (isProjectListEmpty.value) {
        const container = document.getElementById("container");
        container.style.alignItems = "center";
    }
});

setParam("globalNavigation", true);
</script>

<template>
    <div id="container">
        <div class="content">
            <h1 class="title" v-show="!isProjectListEmpty">Project Discovery</h1>
            <div class="project-container" v-show="!isProjectListEmpty">
                <div class="project" v-for="(item, i) in Projects" :key="i">
                <div class="project-item">
                    <div class="project-head">
                        <svg class="project-item-svg" width="325" height="125">
                            <defs>
                                <mask id="through">
                                    <rect width="100%" height="100%" fill="white" />
                                    <rect x="20" y="20" width="105" height="105" rx="64" fill="black" />
                                </mask>
                            </defs>
                            <defs>
                                <rect id="rounded" rx="64" width="96" height="96" x="24" y="24"/>
                                <clipPath id="rounded-clip">
                                    <use xlink:href="#rounded"/>
                                </clipPath>
                            </defs>

                            <image class="project-item-banner" :href="item.banner" width="100%" height="98" preserveAspectRatio="xMidYMid slice" mask="url(#through)" style="display: none;"/>
                            <rect class="project-banner-placeholder" width="325" height="98" fill="#000000" mask="url(#through)" />
                            <image class="project-item-icon" :href="item.icon" width="96" height="96" x="24" y="24" clip-path="url(#rounded-clip)" style="display: none;"/>
                            <rect class="project-icon-placeholder" width="96" height="96" x="24" y="24" rx="64" fill="#000000"/>
                        </svg>
                    </div>
                    <h1 class="project-item-title">{{ item.name }}</h1>
                    <h2 class="project-item-desc">{{ item.desc }}</h2>
                    <RouterLink class="project-item-details" :to="{ path: 'project/details', query: { pid: i } }">
                        View details
                    </RouterLink>
                </div>
            </div>
            </div>
            <div class="notice" v-show="isProjectListEmpty">
                <h1>Hold on...</h1>
                <p>Ah! Uh, never mind... I didn't find any project... 😬</p>
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

.title {
    color: $titleColor;
    text-align: center;
    margin: 64px 0 32px 0;
}

.project-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: space-between;
    max-width: 1200px;
    width: 90vw;
    gap: 2rem;
}

.project {
    width: 325px;
    height: 300px;
    background-color: rgba(30,30,30,0.75);
    border-radius: 16px;
}

.project-item-svg {
    border-radius: 16px 16px 0 0;
}

.project-item-title {
    font-size: 32px;
    margin-left: 12.5px;
    color: white;
}

.project-item-desc {
    max-width: 300px;
    word-wrap: break-word;

    text-overflow: ellipsis;
    overflow: hidden;
    max-height: 80px;
    height: 80px;

    color: white;

    font-weight: 400;
    font-size: 16px;

    margin-left: 12.5px;
    margin-right: 12.5px;
}

.project-item a {
    background-color: rgba(0, 0, 0, 0.75);
    text-decoration: none;
    text-align: center;
    width: 85%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding: 8px;
    border-radius: 8px;
}

@media screen and (max-width: 500px) {
    .project-container {
        max-width: initial;
        width: initial;
    }
}
</style>