import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import EditorPage from "./Page/EditorPage.vue";
import ErrorPage from "./Page/ErrorPage.vue";

const router = createRouter({
  history: createWebHistory(),

  routes: [
    { path: "/", name: "Editor", component: EditorPage },
    { path: "/ErrorPage", name: "ErrorPage", component: ErrorPage },
  ],
});

createApp(App).use(router).mount("#app");
