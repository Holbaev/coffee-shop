import { createApp } from "vue";
import App from "./app/App.vue";
import router from "./shared/router/router";

const app = createApp(App);
app.use(router);
app.mount("#app");
