import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import store from './store'
import TodoListPage from './components/TodoListPage'
import EventHandlingPage from './components/EventHandlingPage'
import FormHandlingPage from './components/FormHandlingPage'
import TableStylingPage from './components/TableStylingPage'

import './assets/index.css';

Vue.config.productionTip = false;

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history', // tells VueRouter to use BrowserRouter instead of HashRouter
    routes: [
        { path: '/', name: 'TodoListPage', component: TodoListPage },
        { path: '/eventHandling', name: 'EventHandlingPage', component: EventHandlingPage },
        { path: '/formHandling', name: 'FormHandlingPage', component: FormHandlingPage },
        { path: '/tableStyling', name: 'TableStylingPage', component: TableStylingPage }
    ]
});

new Vue({
    render: h => h(App),
    store,
    router,
}).$mount('#app');
