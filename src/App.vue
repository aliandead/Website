<script setup>
import { onMounted, ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import { getParam } from "./global";

const webGlobalNavigation = ref(false);
const webGlobalFooter = ref(false);
const webShowParticles = ref(false);

onMounted(() => {
  const mobileNavButton = document.getElementById("mobile-navbar-button");
  const mobileNavbar = document.getElementById("mobile-navbar");
  const mobileMenu = document.getElementById("mobile-navbar-items");

  window.addEventListener("click", (e) => {
    console.log(e);

    if (mobileMenu.style.display != "block") {
      return;
    }

    if (e.target.id == "mobile-navbar-button") {
      return;
    }

    let currentElement = e.target;
    let isChildElement = false;

    while (currentElement !== null) {
      if (currentElement === mobileNavbar) {
        isChildElement = true;
      }

      currentElement = currentElement.parentNode;
    }

    if (!isChildElement) {
      mobileMenu.style.display = "none";
    }
  });

  mobileNavButton.addEventListener("click", () => {
    if (mobileMenu.style.display == "block") {
      mobileMenu.style.display = "none";
    } else {
      mobileMenu.style.display = "block";
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 750) {
      mobileMenu.style.display = "none";
    }
  });

  webGlobalFooter.value = getParam("globalFooter");
  webShowParticles.value = getParam("showParticles");
});

const onUpdate = () => {
  webGlobalNavigation.value = getParam("globalNavigation");

  const mobileNavigation = document.getElementById("mobile-navbar-items");
  mobileNavigation.style.display = "none";
}
</script>

<template>
  <div id="master">
    <div id="default-navbar" v-show="webGlobalNavigation">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/blogs">Blogs</RouterLink>
      <RouterLink to="/projects">Projects</RouterLink>
      <RouterLink to="/services">Services</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </div>
    <div id="mobile-navbar" v-show="webGlobalNavigation">
      <RouterLink to="/">
        <h1>Liam/DEV</h1>
      </RouterLink>
      <div id="mobile-navbar-button" v-show="webGlobalNavigation">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
          stroke-linecap="round" stroke-linejoin="round">
          <path d="M3 12h18M3 6h18M3 18h18"></path>
        </svg>
      </div>
    </div>
    <div id="mobile-navbar-mask"/>
    <ul id="mobile-navbar-items">
      <li>
        <RouterLink to="/">Home</RouterLink>
      </li>
      <li>
        <RouterLink to="/blogs">Blogs</RouterLink>
      </li>
      <li>
        <RouterLink to="/projects">Projects</RouterLink>
      </li>
      <li>
        <RouterLink to="/services">Services</RouterLink>
      </li>
      <li>
        <RouterLink to="/about">About</RouterLink>
      </li>
    </ul>
    <RouterView @vue:updated="onUpdate" />
    <div class="footer" v-show="webGlobalFooter">
      <RouterLink to="/legal">Legal</RouterLink>
      -
      <RouterLink to="/privacy">Privacy Policy</RouterLink>
    </div>
  </div>
  <div class="particles" v-show="webShowParticles">
    <div class="circle-container" v-for="i in 100" :key="i">
      <div class="circle"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/styles/common.scss";

#master {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

#container {
  flex: 1;
}

#home-container {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

#default-navbar {
  background: $backgroundColor;
  padding: 24px 64px 24px 64px;
  border-radius: $borderMedium;
  align-self: center;
}

#default-navbar a {
  margin-left: 24px;
  margin-right: 24px;
  font-size: $fontDescription;
}

#default-navbar a:hover {
  text-shadow: $shadow;
}

#default-navbar .router-link-active {
  text-shadow: $shadow;
}

#mobile-navbar {
  z-index: 1;
  height: $mobileNavHeight;
  width: 100%;
  border-radius: $borderMedium;
  background-color: $backgroundColor;
  align-items: center;
  justify-content: space-between;
  display: none;
}

#mobile-navbar h1 {
  margin-left: 24px;
  color: $LDColor;
}

#mobile-navbar-button {
  width: 64px;
  height: 64px;
  margin: 16px;
  border-radius: 64px;
  display: none;
}

#mobile-navbar-button svg {
  color: white;
  margin: 8px;
}

#mobile-navbar-mask {
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: none;
}

#mobile-navbar-items {
  display: none;
  align-self: center;
  position: absolute;
  list-style: none;
  width: 95%;
  padding: 0;
  margin-top: 100px;
  background-color: rgba(0, 0, 0, 0.90);
  border-radius: 16px;
}

#mobile-navbar-items li {
  text-align: center;
}

#mobile-navbar-items li a {
  display: block;
  padding: 12px;
}

#mobile-navbar-items li a:hover {
  text-shadow: $shadow;
}

#mobile-navbar-items li .router-link-active {
  text-shadow: $shadow;
}

@media screen and (max-width: 750px) {
  #default-navbar {
    display: none;
  }

  #mobile-navbar {
    display: flex;
  }

  #mobile-navbar-button {
    display: block;
  }
}

.footer {
  text-align: center;
  color: dimgray;
}

.footer a:hover {
  color: gray;
}

.particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
}

// Particle animation
.circle-container {

  $particleWidth: 10;
  $particleNum: 200;
  $particleColor: hsl(180, 100%, 80%);

  position: absolute;
  transform: translateY(-10vh);
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  .circle {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    mix-blend-mode: screen;
    background-image: radial-gradient(hsl(180, 100%, 80%), hsl(180, 100%, 80%) 10%, hsla(180, 100%, 80%, 0) 56%);

    animation: fadein-frames 200ms infinite, scale-frames 2s infinite;

    @keyframes fade-frames {
      0% {
        opacity: 1;
      }

      50% {
        opacity: 0.7;
      }

      100% {
        opacity: 1;
      }
    }

    @keyframes scale-frames {
      0% {
        transform: scale3d(0.4, 0.4, 1);
      }

      50% {
        transform: scale3d(2.2, 2.2, 1);
      }

      100% {
        transform: scale3d(0.4, 0.4, 1);
      }
    }
  }

  @for $i from 1 through $particleNum {
    &:nth-child(#{$i}) {
      $circleSize: random($particleWidth);
      width: $circleSize + px;
      height: $circleSize + px;

      $startPositionY: random(10) + 100;
      $framesName: "move-frames-" + $i;
      $moveDuration: 7000 + random(4000) + ms;

      animation-name: #{$framesName};
      animation-duration: $moveDuration;
      animation-delay: random(11000) + ms;

      @keyframes #{$framesName} {
        from {
          transform: translate3d(#{random(100) + vw}, #{$startPositionY + vh}, 0);
        }

        to {
          transform: translate3d(#{random(100) + vw}, #{- $startPositionY - random(30) + vh}, 0);
        }
      }

      .circle {
        animation-delay: random(4000) + ms;
      }
    }
  }
}</style>