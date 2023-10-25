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
            <h1>Available Blogs</h1>
            <div class="blog" v-for="(item, i) in Blogs" :key="i">
                <RouterLink class="blog-item" :to="{ path: '/blog/view', query: { bid: i } }">
                    <div class="blog-item-details">
                        <h3 class="blog-item-title">{{ item.title }}</h3>
                        <h4 class="blog-item-desc">{{ item.desc }}</h4>
                        <div class="blog-item-tags">
                            <h4 v-for="tag in item.tags">{{ tag }}</h4>
                        </div>
                    </div>
                </RouterLink>
            </div>
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

.content h1 {
    color: $titleColor;
    text-align: center;
    padding: 32px;
}

.blog {
    display: grid;
    grid-template-columns: 1fr;
    max-width: 800px;
    width: 90vw;
    padding-bottom: 16px;
}

.blog-item {
    background-color: rgba(0, 0, 0, 0.75);
    border-radius: 16px;
    text-decoration: none;
}

.blog-item-details {
    border-radius: 16px;
    padding-bottom: 8px;
}

.blog-item-title {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    max-width: 250px;

    color: white;
    padding-top: 0.5rem;
    padding-left: 1rem;
}

.blog-item-desc {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    max-width: 250px;

    color: lightgray;
    padding-left: 1rem;
}

.blog-item-tags {
    display: flex;
    padding-top: 0.5rem;
    padding-left: 1rem;
}

.blog-item-tags h4 {
    color: white;
    background-color: rgba(255, 255, 255, 0.125);
    margin-right: 0.5rem;
    padding: 0.25rem;
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