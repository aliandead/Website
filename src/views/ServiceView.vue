<script setup>
import { setParam, getParam } from "@/global";
setParam("globalNavigation", true);
</script>

<template>
    <div id="container">
        <div class="content" v-if="getParam('enableServices')"/>
        <div class="notice" v-else>
            <h1>Notice</h1>
            <p>Paid services aren't available at the moment.</p>
            <p>If you have a request, please send it at <a href="mailto:contact@example.com">contact@example.com</a></p>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import "@/styles/common.scss";

#container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.notice {
    background-color: $backgroundColor;
    border-radius: 16px;
    padding: 32px;
    text-align: center;
}

.notice h1 {
    font-size: 48px;
    color: $titleColor;
}
.notice p {
    font-size: 24px;
    color: $commonColor;
}

.notice a {
    color: $linkColor;
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