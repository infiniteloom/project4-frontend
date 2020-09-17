import Vue from "vue";
import App from "./App.vue";

// Import Buefy:
import router from "./router";
import Buefy from "buefy";
import "buefy/dist/buefy.css";

// Import Font Awesome Icon Library:
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faUserCircle)
Vue.component('font-awesome-icon', FontAwesomeIcon)



Vue.use(Buefy);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
