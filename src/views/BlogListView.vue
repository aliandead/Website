<script setup>
import { onMounted, ref } from "vue";
import { setParam } from "@/global";
import Blogs from "@/assets/blogs.json";

const isBlogListEmpty = ref(Blogs.length == 0);

onMounted(() => {
    if (isBlogListEmpty.value) {
        const container = document.getElementById("container");
        container.style.alignItems = "center";
    }
});

setParam("globalNavigation", true);
</script>

<template>
    <div id="container">
        <div class="content">
            <h1 class="title" v-show="!isBlogListEmpty">Available Blogs</h1>
            <RouterLink class="blog-item" :to="{ path: '/blog/view', query: { bid: Blogs.length - 1 - i } }" v-for="(item, i) in Blogs.slice().reverse()" :key="i">
                <h1 class="blog-item-title">{{ item.title }}</h1>
                <h2 class="blog-item-desc">{{ item.desc }}</h2>
                <div class="blog-item-tags">
                    <h3 v-for="tag in item.tags">{{ tag }}</h3>
                </div>
            </RouterLink>
            <div class="notice" v-show="isBlogListEmpty">
                <h1>Whops...</h1>
                <p>Seems like there is not a single blog available... 😭</p>
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
    margin: 32px;
}

.title {
    color: $titleColor;
    text-align: center;
    padding: 32px;
}

.blog-item {
    display: grid;
    width: 90vw;
    max-width: 800px;
    background-color: $backgroundColor;
    border-radius: 16px;
    text-decoration: none;
    margin-bottom: 16px;
    padding-bottom: 8px;
}

.blog-item-title {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

    color: white;
    font-size: 1.17em;
    padding-top: 0.5rem;
    padding-left: 1rem;

    margin-right: 12px;
}

.blog-item-desc {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

    color: lightgray;
    font-size: 16px;
    font-weight: normal;
    padding-left: 1rem;
    margin-right: 12px;
}

.blog-item-tags {
    display: flex;
    padding-top: 0.5rem;
    padding-left: 1rem;
}

.blog-item-tags h3 {
    color: white;
    background-color: rgba(255, 255, 255, 0.125);
    margin-right: 0.5rem;
    padding: 0.25rem;
    font-size: 16px;
    font-weight: 400;
    border-radius: 4px;
}
</style>