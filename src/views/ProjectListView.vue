<script setup>
import { setParam } from "@/global";
import Projects from "@/assets/projects.json";

setParam("globalNavigation", true);
</script>

<template>
    <div id="container">
        <div class="content">
            <h1>Project Discovery</h1>
            <div class="project-container">
                <div class="project" v-for="(item, i) in Projects" :key="i">
                <div class="project-item">
                    <div class="project-head">
                        <svg class="project-item-banner" width="325" height="125">
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
                            <image :href="item.banner" width="325" height="98" mask="url(#through)" />
                            <image :href="item.icon" width="96" height="96" x="24" y="24" clip-path="url(#rounded-clip)"/>
                        </svg>
                    </div>
                    <h3 class="project-item-title">{{ item.name }}</h3>
                    <h4 class="project-item-desc">{{ item.desc }}</h4>
                    <RouterLink class="project-item-details" :to="{ path: 'project/details', query: { pid: i } }">
                        View details
                    </RouterLink>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import "@/styles/common.scss";

#container {
    display: flex;
    justify-content: center;
}

.content h1 {
    color: $titleColor;
    text-align: center;
    padding: 32px;
}

.project-container {
    max-width: 75vw;
    width: 90vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: space-between;
    gap: 2rem;
}

.project {
    width: 325px;
    height: 300px;
    background-color: rgba(99, 99, 99, 0.4);
    margin-top: 32px;
    border-radius: 16px;
}

.project-item-banner {
    border-radius: 16px 16px 0 0;
}

.project-item h3 {
    font-size: 32px;
    margin-left: 12.5px;
    color: white;
}

.project-item h4 {
    max-width: 300px;
    word-wrap: break-word;

    text-overflow: ellipsis;
    overflow: hidden;
    max-height: 80px;
    height: 80px;

    color: white;
    text-align: justify;

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