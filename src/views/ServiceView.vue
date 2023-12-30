<script setup>
import { setParam, getParam } from "@/global";

setParam("globalNavigation", true);
setParam("globalPageTitle", "Services");
</script>

<template>
    <div id="container">
        <div class="content" v-if="getParam('enableServices')"/>
        <div class="notice" v-else>
            <h1>Notice</h1>
            <p>Paid services aren't available at the moment.</p>
            <p>If you have a request, please send it at <a href="mailto:contact@liam-dev.fr">contact@liam-dev.fr</a></p>
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