<script setup>
import Social from "@/components/Social.vue";
import MarkdownIt from "markdown-it";
import { setParam } from "@/global";

import Resume from "@/assets/markdown/about.resume.md";

const renderer = new MarkdownIt({
    html: true
});

setParam("globalNavigation", true);
setParam("globalPageTitle", "About");
</script>

<template>
    <div id="container">
        <div class="content">
            <div class="resume">
            <div class="header">
                <img  src="/static/liam_short_cover_no_bg.png" style="width: 64px; height: 64px;">
                <h1>RESUME</h1>
            </div>
            <div v-html="renderer.render(Resume)">
            </div>
        </div>
        <div class="notice">
            <Social />
            <h2>SVG Icons: Provided by <a href="https://github.com/FortAwesome/Font-Awesome" target="_blank">Font Awesome</a></h2>
            <h2>Background: <a href="https://www.flickr.com/photos/117317408@N03/12481560173/" target="_blank">Highway At Night</a> by <a href="https://instagram.com/billypwoodford" target="_blank">Billy Woodford</a> - <a href="https://youtube.com/@nocopyrightsounds" target="_blank">NCS</a> Founder</h2>
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
}
.content {
    min-width: 0;
    margin: 64px 16px 0 16px;
}


.resume {
    background-color: $backgroundColor;
    color: white;
    
    padding: 32px;
    border-radius: 16px;
    
    max-width: 800px;
}

.header {
    display: flex;
    align-items: center;

    font-size: 24px;
    font-style: italic;
    margin-bottom: 16px;
}
</style>