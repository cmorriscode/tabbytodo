import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import MainBtn from "./components/MainBtn.vue";
import VueCountdown from "@chenfengyuan/vue-countdown";

const app = createApp(App);

app.use(store);

app.component("main-btn", MainBtn);
app.component("vue-countdown", VueCountdown);

app.mount("#app");
