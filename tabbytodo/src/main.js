import { createApp } from "vue";

import App from "./App.vue";

import MainBtn from "./components/MainBtn.vue";

const app = createApp(App);

// app.use(store);

app.component("main-btn", MainBtn);

app.mount("#app");
