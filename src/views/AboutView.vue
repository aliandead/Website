<script setup>
import Social from "@/components/social.vue";

import { setParam } from "@/global";
setParam("globalNavigation", true);
</script>

<template>
    <div id="container">
        <div class="notice">
            <h1>About</h1>
            <p>I'm a french developer with over 4 years of experience.</p>
            <Social />
            <h2>SVG Icons: Provided by <a href="https://github.com/FortAwesome/Font-Awesome" target="_blank">Font Awesome</a></h2>
            <h2>Background: <a href="https://www.flickr.com/photos/117317408@N03/12481560173/" target="_blank">Highway At Night</a> by <a href="https://instagram.com/billypwoodford" target="_blank">Billy Woodford</a> - <a href="https://youtube.com/@nocopyrightsounds" target="_blank">NCS</a> Founder</h2>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import "@/styles/common.scss";
@import "@/styles/notice.scss";

#container {
  display: flex;
  align-items: center;
  justify-content: center;
}

:deep(.social) a svg {
    width: 36px;
    height: 36px;
}
</style>