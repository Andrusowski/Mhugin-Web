import './assets/main.css'

import { createApp } from 'vue'
import * as VueRouter from 'vue-router';
import HomePage from './pages/HomePage.vue';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage.vue';
import LegalNoticePage from './pages/LegalNoticePage.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const routes = [
  { path: '/', component: HomePage },
  { path: '/legal/legal-notice', component: LegalNoticePage },
  { path: '/legal/privacy-policy', component: PrivacyPolicyPage },
]

const router = VueRouter.createRouter({
    // 4. Provide the history implementation to use. We
    // are using the hash history for simplicity here.
    history: VueRouter.createWebHashHistory(),
    routes, // short for `routes: routes`
  })

const app = createApp({});
app.component('FontAwesomeIcon', FontAwesomeIcon)
app.use(router);
app.mount('#app')
