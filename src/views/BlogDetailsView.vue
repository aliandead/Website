<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { setParam } from "@/global";
import Blogs from "@/assets/blogs.json";
import MarkdownIt from "markdown-it";

const route = useRoute();

const blogId = route.query.bid;
const blog = Blogs[blogId];
const blogExists = blog != undefined;

const markdownSource = ref("");

onMounted(() => {
    const container = document.getElementById("container");

    if (blogExists) {
        import(`@/assets/markdown/${blog.details}.blog.md`).then(module => {
            markdownSource.value = module.default || "";
            container.style.alignItems = "start";
        }).catch(err => {
            console.warn(`Markdown source was not found`);
            console.error(err);
        });
    }
});

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
    margin: 32px 16px 32px 16px;
    padding: 32px;
    max-width: 960px;
    color: white;
}

.markdown {
    background-color: $backgroundColor;
    border-radius: 16px;
    max-width: 960px;
    width: 90vw;
    margin: 32px 16px 32px 16px;
    padding: 16px 0 16px 0;
}
</style>