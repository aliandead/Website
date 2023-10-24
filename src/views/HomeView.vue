<script setup>
import { RouterLink } from 'vue-router';
import { setParam } from '../global';
setParam("globalNavigation", false);
</script>

<template>
    <div id="home-container">
        <div class="content">
            <h1 class="title">Liam/DEV</h1>
            <div class="navbar">
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/blogs">Blogs</RouterLink>
                <RouterLink to="/projects">Projects</RouterLink>
                <RouterLink to="/services">Services</RouterLink>
                <RouterLink to="/about">About</RouterLink>
            </div>
            <p class="description">Hello, I'm a french developer!</p>
        </div>
    </div>
</template>

<style scoped>
.content {
    text-align: center;
}

.title {
    font-size: 128px;
    color: gray;

    transition: 0.25s;
}

.navbar {
    margin-bottom: 32px;
}

.navbar a {
    font-size: 32px;
    text-decoration: none;
 
    margin-left: 8px;
    margin-right: 8px;

    color: white;

    transition: 0.25s;
}

.navbar a:focus {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 40px #fff;
}

.navbar a:hover {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 40px #fff;
}

.description {
    font-size: 24px;
    color: rgb(240, 240, 240);

    transition: 0.25s;
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