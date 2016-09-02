import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routerMap from './router'

Vue.use(VueRouter);
const router= new VueRouter();
routerMap(router);
router.start(App,'app')

