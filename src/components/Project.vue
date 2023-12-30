<script setup>
import {defineProps } from "vue";

defineProps({
    data: Object,
    projectId: Number,
    isWork: Boolean 
});
</script>

<template>
    <div class="project">
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
                        <rect id="rounded" rx="64" width="96" height="96" x="24" y="24" />
                        <clipPath id="rounded-clip">
                            <use xlink:href="#rounded" />
                        </clipPath>
                    </defs>

                    <image class="project-item-banner" :href="data.banner" width="100%" height="98"
                        preserveAspectRatio="xMidYMid slice" mask="url(#through)" style="display: none;" />
                    <rect class="project-banner-placeholder" width="325" height="98" fill="#000000" mask="url(#through)" />
                    <image class="project-item-icon" :href="data.icon" width="96" height="96" x="24" y="24"
                        clip-path="url(#rounded-clip)" style="display: none;" />
                    <rect class="project-icon-placeholder" width="96" height="96" x="24" y="24" rx="64" fill="#000000" />
                </svg>
            </div>
            <h1 class="project-item-title">{{ data.name }}</h1>
            <h2 class="project-item-desc">{{ data.desc }}</h2>
            <RouterLink class="project-item-details" :to="{ path: 'project/details', query: { work: isWork ? 1 : 0, pid: projectId } }">
                View details
            </RouterLink>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import "@/styles/common.scss";

.project {
    width: 325px;
    height: 300px;
    background-color: rgba(30, 30, 30, 0.50);
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
</style>