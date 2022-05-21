<template>
	<div id="system">
		<div id="map" class="map-main"></div>
		<navbar></navbar>
		<div id="leftbar">
				<el-divider>
					<h2 class="el-icon-video-camera">于都</h2>
				</el-divider>

		</div>

		<timeline :show="show"></timeline>
	</div>
</template>

<script>
	import {
		featureLayer
	} from "esri-leaflet"
	import '../assets/js/render.js'
	import navbar from '../components/navbar.vue';
	import timeline from '../components/timeline.vue';
	import 'leaflet-sidebar';
	import sidebar from '../components/siderbar.vue';

	export default {
		name: 'system',
		components: {
			navbar,
			timeline,
			sidebar
		},
		data() {
			return {
				map: null,
				layers: null,
				sidebar:null,
				show: true,
				mapurl: 'https://lyh.augurit.com/server/rest/services/ChangZheng/hongyilocation/FeatureServer/0',
			}
		},
		//关闭时初始化map
		destroyed() {
			this.map = null;
		},
		//打开时加载map
		mounted() {
			this.getMap();
			this.sidebar = L.control.sidebar('leftbar', {
				position: 'right'
			});
			this.map.addControl(this.sidebar);
		},
		methods: {
			//初始化地图
			getMap() {
				this.map = this.$map.newMap('map');
			},
			//添加特征图层
			addLayer() {
				this.layers = this.$map.createLayer(this.map);
				console.log(this.layers);
			},
			//添加marker
			addMarker(postion) {
				this.$map.addmarker(this.map, postion);
			},
			//清除图层
			removelayer() {
				this.$map.clear(this.map);
			},
			openbar(){
				this.sidebar.show();
			}
		},

	}
</script>

<style>
	.map-main {
		z-index: 0;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: #CCC;
	}
</style>
