import Vue from "vue";
import App from "./App.vue";

// Import Buefy:
import router from "./router";
import Buefy from "buefy";
import "buefy/dist/buefy.css";

// Import Font Awesome Icon Library:
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'


library.add(fas)
Vue.component('font-awesome-icon', FontAwesomeIcon)


// Global variable for URL
Vue.prototype.$URL = 'http://127.0.0.1:8000'
// Vue.prototype.$URL = 'https://lt-project4-backend.herokuapp.com'


Vue.use(Buefy);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
