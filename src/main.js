import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import store from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import TodoListPage from './views/TodoListPage'
import EventHandlingPage from './views/EventHandlingPage'
import FormHandlingPage from './views/FormHandlingPage'
import TableStylingPage from './views/TableStylingPage'
import ElementUiPage from './views/ElementUiPage'
import SlotsPage from './views/SlotsPage'
import ComponentIsPage from './views/ComponentIsPage'

import './assets/index.css';

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(ElementUI);

export const router = new VueRouter({
    mode: 'history', // tells VueRouter to use BrowserRouter instead of HashRouter
    routes: [
        { path: '/', name: 'TodoListPage', component: TodoListPage },
        { path: '/eventHandling', name: 'EventHandlingPage', component: EventHandlingPage },
        { path: '/formHandling', name: 'FormHandlingPage', component: FormHandlingPage },
        { path: '/tableStyling', name: 'TableStylingPage', component: TableStylingPage },
        { path: '/elementUi', name: 'ElementUiPage', component: ElementUiPage },
        { path: '/slots', name: 'SlotsPage', component: SlotsPage },
        { path: '/componentis', name: 'ComponentIs', component: ComponentIsPage }
    ]
});

new Vue({
    render: h => h(App),
    store,
    router,
}).$mount('#app');
