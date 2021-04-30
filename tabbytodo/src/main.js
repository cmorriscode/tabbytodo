import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import MainBtn from "./components/MainBtn.vue";
import UUID from "vue-uuid";

const app = createApp(App);

app.use(store);
app.use(UUID);

app.component("main-btn", MainBtn);

app.mount("#app");
