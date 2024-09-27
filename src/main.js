import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from "primevue/config";
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css'
import Card from "primevue/card";
import Button from "primevue/button";
import SelectButton from "primevue/selectbutton";
import Drawer from "primevue/drawer";
import Avatar from "primevue/avatar";
import Menu from "primevue/menu";
import Menubar from "primevue/menubar";
import Toolbar from "primevue/toolbar";
import i18n from "./i18n.js";
import router from './router';
import InputText from 'primevue/inputtext';
import Select from 'primevue/select';
import DatePicker from 'primevue/datepicker';

import Theme from '@primevue/themes/lara'

const app = createApp(App).use(router);

app.use(PrimeVue, {
    ripple: true,
    theme: {
        preset: Theme,
        options: {
            prefix: 'p',
        }
    }
});

app.component('pv-card', Card)
    .component('pv-button', Button)
    .component('pv-select-button', SelectButton)
    .component('pv-drawer', Drawer)
    .component('pv-avatar', Avatar)
    .component('pv-menu', Menu)
    .component('pv-menubar', Menubar)
    .component('pv-toolbar', Toolbar)
    .component('pv-input-text', InputText)
    .component('pv-select', Select)
    .component('pv-datetime', DatePicker)

app.use(i18n);

app.mount('#app')
