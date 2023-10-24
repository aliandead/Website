<script setup>
import { setParam } from "@/global";
setParam("globalNavigation", true);
</script>

<template>
    <div id="container">
        <div class="content">
            <h1>404 - Not Found</h1>
            <p>Looks like the page you requested isn't available!</p>
            <p>¯\_(ツ)_/¯</p>
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

.content {
    background-color: $backgroundColor;
    border-radius: 16px;
    padding: 32px;
    text-align: center;
}

h1 {
    font-size: 48px;
    color: $titleColor;
}

h4 {
    margin-top: 16px;
    color: white;
}

a {
    color: $linkColor;
}

p {
    font-size: 24px;
    color: $commonColor;
}

@media screen and (max-width: 700px) {
    .content {
        margin-left: 24px;
        margin-right: 24px;
    }

    h1 {
        font-size: 40px;
    }

    p {
        font-size: 16px;
    }
}
</style>