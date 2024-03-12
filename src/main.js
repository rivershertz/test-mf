import './assets/main.css';

import {createApp} from 'vue';
import App from './App.vue';
import router from './router';
import ClientArea from '@UtopiaTechCorp/trading-client-area';
import {createI18n} from 'vue-i18n';
import '../node_modules/@UtopiaTechCorp/trading-client-area/dist/style.css';
const app = createApp(App);
const i18n = createI18n({
  globalInjection: true,
  messages: ClientArea.translations,
  fallbackLocale: 'en',
  locale: 'en',
});

app.use(router);
app.use(i18n);
app.use(ClientArea);
app.mount('#app');
