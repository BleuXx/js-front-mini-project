// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import App from "./App.vue";
import Create from "./components/pages/Create.vue";
import Details from "./components/pages/Details.vue";
import Edit from "./components/pages/Edit.vue";
import Home from "./components/pages/Home.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/create", component: Create },
  { path: "/:id", component: Details },
  { path: "/:id/edit", component: Edit },
];

// 3. Create.vue the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
});

// 5. Create.vue and mount the root instance.
const app = createApp(App);
// Make sure to _use_ the router instance to make the
// whole app router-aware.
app.use(router);

app.mount("#app");

// Now the app has started!
