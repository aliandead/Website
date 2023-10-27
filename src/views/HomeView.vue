<script setup>
import { RouterLink } from 'vue-router';
import { setParam } from "@/global";

setParam("globalNavigation", false);
</script>

<template>
    <div id="home-container">
        <div class="content">
            <RouterLink to="/">
                <h1 class="title">Liam/DEV</h1>
            </RouterLink>
            <div class="navbar">
                <RouterLink to="/blogs">Blogs</RouterLink>
                <RouterLink to="/projects">Projects</RouterLink>
                <RouterLink to="/services">Services</RouterLink>
                <RouterLink to="/about">About</RouterLink>
            </div>
            <p class="description">Hello, I'm a french developer!</p>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import "@/styles/common.scss";

.content {
    text-align: center;
}

.title {
    font-size: 128px;
    color: $LDColor;

    transition: $transitionDuration;
}

.navbar {
    margin-bottom: 32px;
}

.navbar a {
    font-size: 32px;

    margin-left: 8px;
    margin-right: 8px;

    transition: $transitionDuration;
}

.navbar a:hover {
    text-shadow: $shadow;
}

.description {
    font-size: $fontDescription;
    color: $commonColor;

    transition: $transitionDuration;
}

@media screen and (max-width: 650px) {
    .title {
        font-size: 96px;
    }

    .navbar {
        margin-bottom: 24px;
    }

    .navbar a {
        font-size: 24px;
    }

    .description {
        font-size: 20px;
    }
}

@media screen and (max-width: 450px) {
    .title {
        font-size: 64px;
    }

    .navbar {
        margin-bottom: 20px;
    }

    .navbar a {
        font-size: 20px;
    }

    .description {
        font-size: 16px;
    }
}

@media screen and (max-width: 400px) {
    .title {
        font-size: 64px;
    }

    .navbar {
        margin-bottom: 18px;
    }

    .navbar a {
        font-size: 18px;
    }

    .description {
        font-size: 14px;
    }
}

@media screen and (max-width: 350px) {
    .title {
        font-size: 64px;
    }

    .navbar {
        margin-bottom: 16px;
    }

    .navbar a {
        font-size: 16px;
    }

    .description {
        font-size: 14px;
    }
}
</style>