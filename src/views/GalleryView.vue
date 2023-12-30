<script setup>
import { setParam } from "@/global";

setParam("globalNavigation", true);
setParam("globalPageTitle", "Gallery");
</script>

<template>
    <div id="container"></div>
</template>

<style scoped lang="scss">
@import "@/styles/common.scss";
</style>