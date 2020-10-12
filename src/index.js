import Vue from 'vue'
import Buefy from 'buefy'
import '@fortawesome/fontawesome-free/js/all'
import './mystyles.scss'
import './app.js'

Vue.use(Buefy, {
  defaultIconPack: 'fas'
})

const app = new Vue({
  el: '#app'
})

export default app
