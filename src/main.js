import Vue from 'vue'
import ElementUI from 'element-ui'
import $L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet.chinesetmsproviders'
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from 'vue-router'
import App from './App.vue'

import lmap from'../src/assets/js/map'
import system from '../src/views/system.vue'
import home from '../src/views/home.vue'

Vue.prototype.$map = lmap
Vue.L = Vue.prototype.$L = L
Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(ElementUI)

const routes = [
	{
		path:"/",
		redirect:"/home"
	},
	{
		path: "/home",
		component: home
	},
	{
		path: "/system",
		component: system
	}
]

const router = new VueRouter({
	routes
})

new Vue({
	router,
	render: h => h(App),
}).$mount('#app')

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
	iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
	iconUrl: require("leaflet/dist/images/marker-icon.png"),
	shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});
