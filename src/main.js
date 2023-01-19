
/* eslint-disable */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons'
import { faUser, faCartShopping, faLocationDot, faBars, faRubleSign, faMagnifyingGlass, faChevronRight, faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons'
import { faVk, faYoutubeSquare, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons' 


library.add(faHeartRegular, faUser, faCartShopping, faLocationDot, faVk, faYoutubeSquare, faFacebook, faInstagram, faBars, faRubleSign, faMagnifyingGlass, faChevronRight, faHeartSolid)
const app = createApp(App);
app
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(store)
    .use(router)
    .mount('#app')
