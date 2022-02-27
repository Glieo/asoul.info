import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import Router from "./utils/router";
import i18n from "./utils/i18n";

createApp(App).use(Router).use(i18n).use(createPinia()).mount("#app");
