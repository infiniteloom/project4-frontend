import Vue from "vue";
import App from "./App.vue";

// Import Buefy:
import router from "./router";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
import axios from 'axios'

// Import Font Awesome Icon Library:
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)
Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.prototype.$axios = axios

// Making House data globally available
// Vue.prototype.$globalHouseData = function(){
//   axios.get('http://127.0.0.1:8000/api/listings/')
//   .then(res => {
//     console.log(res.data) 
//   })
// }
// Vue.prototype.$globalHouseData = null


Vue.prototype.$getHouseData = function(){
      fetch(`http://127.0.0.1:8000/api/listings/`)
    // fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
        this.houseData = data.results
        console.log(data.results)
        })
}     

Vue.use(Buefy);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
