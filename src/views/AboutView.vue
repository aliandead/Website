<script setup>
import { setParam } from "@/global";
setParam("globalNavigation", true);
</script>

<template>
    <div id="container">
        <div class="notice">
            <h1>About</h1>
            <p>I'm a french developer with over 4 years of experience.</p>
            <h2>Background: <a href="https://www.flickr.com/photos/117317408@N03/13445568174/" target="_blank">Redlight A Night</a> by <a href="https://instagram.com/billypwoodford" target="_blank">Billy Woodford</a> - <a href="https://youtube.com/@nocopyrightsounds" target="_blank">NCS</a> Founder</h2>
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
</style>