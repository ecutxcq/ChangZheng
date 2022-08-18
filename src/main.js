import Vue from 'vue'
import ElementUI from 'element-ui'
import $L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet.chinesetmsproviders'
import 'element-ui/lib/theme-chalk/index.css'
import 'leaflet-sidebar/src/L.Control.Sidebar.css'
import VueRouter from 'vue-router'
import App from './App.vue'
import store from './store/index'
import 'video.js/dist/video-js.css'
import '.././src/assets/js/leafletecharts4'
import axios from 'axios'

import render from '../src/assets/js/render'

import lmap from'../src/assets/js/map'
//引入两个路由页面
import system from '../src/views/system.vue'
import home from '../src/views/home.vue'



//将axios挂载到vue对象
Vue.prototype.$axios = axios;
//将render.js以map为名字挂载到vue对象
Vue.prototype.$render = render
//将map.js以map为名字挂载到vue对象
Vue.prototype.$map = lmap
//将leaflet.js挂载到vue对象上
Vue.L = Vue.prototype.$L = L

Vue.config.productionTip = false

//启用vue的路由插件
Vue.use(VueRouter)
//启用elementui
Vue.use(ElementUI)
//设定路由
const routes = [
	{
		//默认页面
		path:"/",
		redirect:"/home"
	},
	{
		//主页页面
		path: "/home",
		component: home
	},
	{
		//系统页面
		path: "/system",
		component: system
	}
]
//建立路由对象
const router = new VueRouter({
	mode:'history',
	routes
})

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app')
//导入leaflet图标文件                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
	iconRetinaUrl: require("../src/assets/img/火炬.png"),
	iconUrl: require("leaflet/dist/images/marker-icon.png"),
	shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});
