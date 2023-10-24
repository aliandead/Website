<script setup>
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import { getParam } from "./global";

const webGlobalNavigation = ref(false);

const onUpdate = () => {
  webGlobalNavigation.value = getParam("globalNavigation");
}
</script>

<template>
  <div id="master">
    <div id="default-navbar" v-if="webGlobalNavigation">

    </div>
    <RouterView @vue:updated="onUpdate" />
    <div class="footer">
      <RouterLink to="/legal-notice">Legal Notice</RouterLink>
      -
      <RouterLink to="/privacy-policy">Privacy Policy</RouterLink>
    </div>
  </div>
  <div class="particles">
    <div class="circle-container" v-for="i in 100" :key="i">
      <div class="circle"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
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

.footer {
  text-align: center;
  color: dimgray;
}

.footer a {
  color: white;
  text-decoration: none;

  transition: 0.25s;
}

.footer a:focus {
  color: gray;
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
  // pointer-events: none;
}

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

  @for $i from 1 through $particleNum { &:nth-child(#{$i}) {
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
}
</style>