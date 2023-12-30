<script setup>
import { setParam } from "@/global";

setParam("globalNavigation", true);
setParam("globalPageTitle", "404 Not Found");
</script>

<template>
    <div id="container">
        <div class="notice">
            <h1>404 - Not Found</h1>
            <p>Looks like the page you requested isn't available!</p>
            <p>¯\_(ツ)_/¯</p>
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