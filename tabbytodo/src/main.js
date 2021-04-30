import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import MainBtn from "./components/MainBtn.vue";
import uuid from "vue-uuid";

const app = createApp(App);

app.use(store);
app.use(uuid.uuid);

app.component("main-btn", MainBtn);

app.mount("#app");
