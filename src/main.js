import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import router from "./router";
import HighchartsVue from "highcharts-vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(HighchartsVue);

app.mount("#app");
