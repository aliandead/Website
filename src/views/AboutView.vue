<script setup>
import { setParam } from "@/global";
setParam("globalNavigation", true);
</script>

<template>
    <div id="container">
        <div class="content">
            <h1>About</h1>
            <p>I'm a french developer with over 4 years of experience.</p>
            <h2>Background: <a href="https://www.flickr.com/photos/117317408@N03/13445568174/" target="_blank">Redlight A Night</a> by <a href="https://instagram.com/billypwoodford" target="_blank">Billy Woodford</a> - <a href="https://youtube.com/@nocopyrightsounds" target="_blank">NCS</a> Founder</h2>
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

h2 {
    margin-top: 16px;
    font-size: 16px;
    font-weight: 400;
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