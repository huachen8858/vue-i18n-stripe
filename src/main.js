import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import EN from "./locale/en.json";
import ZHTW from "./locale/zhTw.json";
import "./style.css";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

const i18n = createI18n(
  {
    legacy: false,
    globalInjection: true,
    locale: document.cookie.split('locale=')[1],
    messages: {
      EN: EN,
      ZHTW: ZHTW,
    },
  }
);

app.use(i18n);
app.use(router);
app.mount("#app");
