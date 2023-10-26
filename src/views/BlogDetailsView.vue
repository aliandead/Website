<script setup>
import Blogs from "@/assets/blogs.json";
import { useRoute } from "vue-router";
import { ref } from "vue";
import MarkdownIt from "markdown-it";
import { setParam } from "@/global";

const route = useRoute();

const blogId = route.query.bid;
const blog = Blogs[blogId];
const blogExists = blog != undefined;

const markdownSource = ref("");

if (blogExists) {
    import(`@/assets/markdown/${blog.details}.md`).then(module => {
        markdownSource.value = module.default || "";
    }).catch(err => {
        console.warn(`Markdown source was not found`);
        console.error(err);
    });
}

const renderer = new MarkdownIt({ html: true });

setParam("globalNavigation", true);
</script>

<template>
    <div id="container">
        <div class="content">
            <div class="title" v-if="markdownSource">
                <h1>{{ blog.title }}</h1>
            </div>
            <div class="markdown" v-html="renderer.render(markdownSource)" v-if="markdownSource" />
            <div class="notice" v-if="!markdownSource && blogExists">
                <h1>Loading...</h1>
            </div>
            <div class="notice" v-if="!blogExists">
                <h1>404 - Not Found</h1>
                <p>Seems like this blog isn't available... 😔</p>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import "@/styles/common.scss";

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
    margin: 32px 16px 32px 16px;
    padding: 32px;
    max-width: 960px;
    color: white;
}

.markdown {
    background-color: $backgroundColor;
    border-radius: 16px;
    max-width: 960px;
    margin: 32px 16px 32px 16px;
    padding: 16px 0 16px 0;
}

.markdown :deep(img) {
    width: 100%;
    height: 100%;
    border-radius: 16px;
}

.markdown :deep(pre) {
    color: white;
    background-color: rgba(130, 130, 130, 0.25);
    padding: 8px;
    border-radius: 4px;
    overflow: auto;
    min-width: 0;
    white-space: nowrap;
}

.markdown :deep(a) {
    color: $linkColor;
}

.markdown > :deep(*) {
    word-wrap: break-word;
    margin: 16px;
    max-width: 100%;
    color: white;
}

.notice {
    background-color: $backgroundColor;
    border-radius: 16px;
    margin: 32px;
    padding: 32px;
    text-align: center;
}

.notice h1 {
    font-size: 48px;
    color: $titleColor;
}

.notice h2 {
    margin-top: 16px;
    font-size: 16px;
    font-weight: 400;
    color: white;
}

.notice a {
    color: $linkColor;
}

.notice p {
    font-size: 24px;
    color: $commonColor;
}

@media screen and (max-width: 700px) {
    .notice {
        margin-left: 24px;
        margin-right: 24px;
    }

    .notice h1 {
        font-size: 40px;
    }

    .notice p {
        font-size: 16px;
    }
}
</style>