<script setup>
import { setParam } from "@/global";
import Blogs from "@/assets/blogs.json";
import { ref } from "vue";

const isBlogListEmpty = ref(Blogs.length == 0);

setParam("globalNavigation", true);
</script>

<template>
    <div id="container">
        <div class="content">
            <h1 class="title">Available Blogs</h1>
            <RouterLink class="blog-item" :to="{ path: '/blog/view', query: { bid: i } }" v-for="(item, i) in Blogs" :key="i">
                <h1 class="blog-item-title">{{ item.title }}</h1>
                <h2 class="blog-item-desc">{{ item.desc }}</h2>
                <div class="blog-item-tags">
                    <h3 v-for="tag in item.tags">{{ tag }}</h3>
                </div>
            </RouterLink>
            <div class="message" v-show="isBlogListEmpty">
                <h1>Whops...</h1>
                <p>Seems like there is not a single blog available... 😭</p>
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

.title {
    color: $titleColor;
    text-align: center;
    padding: 32px;
}

.blog-item {
    display: grid;
    width: 90vw;
    max-width: 800px;
    background-color: rgba(0, 0, 0, 0.75);
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

.message {
    background-color: $backgroundColor;
    border-radius: 16px;
    padding: 32px;
    text-align: center;
}

.message h1 {
    font-size: 48px;
    color: $titleColor;
}

.message p {
    font-size: 24px;
    color: $commonColor;
}

@media screen and (max-width: 700px) {
    .message {
        margin-left: 24px;
        margin-right: 24px;
    }

    .message h1 {
        font-size: 40px;
    }

    .message p {
        font-size: 16px;
    }
}
</style>