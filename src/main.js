import "./styles/main.scss";

import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router";
import { setParam } from "@/global";

setParam("globalFooter", false);
setParam("showParticles", true);

createApp(App).use(router)
              .mount("#app");