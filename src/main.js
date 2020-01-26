import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import store from './store'
import TodoListPage from './components/TodoListPage/TodoListPage'
import EventHandlingPage from './components/EventHandlingPage/EventHandlingPage'
import FormHandlingPage from './components/FormHandlingPage/FormHandlingPage'
import TableStylingPage from './components/TableStylingPage/TableStylingPage'
import ElementUiPage from './components/ElementUiPage/ElementUiPage'
import SlotsPage from './components/SlotsPage'

import './assets/index.css';

Vue.config.productionTip = false;

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history', // tells VueRouter to use BrowserRouter instead of HashRouter
    routes: [
        { path: '/', name: 'TodoListPage', component: TodoListPage },
        { path: '/eventHandling', name: 'EventHandlingPage', component: EventHandlingPage },
        { path: '/formHandling', name: 'FormHandlingPage', component: FormHandlingPage },
        { path: '/tableStyling', name: 'TableStylingPage', component: TableStylingPage },
        { path: '/elementUi', name: 'ElementUiPage', component: ElementUiPage },
        { path: '/slots', name: 'SlotsPage', component: SlotsPage }
    ]
});

new Vue({
    render: h => h(App),
    store,
    router,
}).$mount('#app');
