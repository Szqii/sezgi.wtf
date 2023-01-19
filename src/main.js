import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router.js";
import { library } from "../node_modules/@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "../node_modules/@fortawesome/vue-fontawesome";

import { faLink, faArrowLeftLong } from "../node_modules/@fortawesome/free-solid-svg-icons";

library.add(faLink, faArrowLeftLong);

createApp(App)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
