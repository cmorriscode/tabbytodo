import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import MainBtn from "./components/MainBtn.vue";
<<<<<<< HEAD
import UUID from "vue-uuid";
=======
import VueCountdown from "@chenfengyuan/vue-countdown";
>>>>>>> timer

const app = createApp(App);

app.use(store);
app.use(UUID);

app.component("main-btn", MainBtn);
app.component("vue-countdown", VueCountdown);

app.mount("#app");
