import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import router from "./router";
import UUID from "vue-uuid";
import VuexUndoRedo from "vuex-undo-redo";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

Vue.use(Vuex);
Vue.use(UUID);
Vue.use(VuexUndoRedo);

import { store } from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
