<template>
	<div id="system">
		<div id="map" class="map-main"></div>
		<navbar></navbar>
		<div id="leftbar">
			<el-divider>
				<h2 class="el-icon-s-flag">于都</h2>
			</el-divider>
			<img style="float: left;height: 150px;width: 180px;margin-top: 30px;" src="../assets/img/于都.png" />
			<div style="float: right;width: 200px;margin-top: 30px;">
				{{describe}}
			</div>

		</div>
		<timeline :show="show" @cgpg="getdes()"></timeline>
	</div>
</template>

<script>
	import navbar from '../components/navbar.vue';
	import timeline from '../components/timeline.vue';
	import 'leaflet-sidebar';
	import sidebar from '../components/siderbar.vue';
	export default {
		name: 'system',
		components: {
			navbar,
			timeline,
			sidebar,
		},
		data() {
			return {
				map: null,
				layers: null,
				sidebar: null,
				show: true,
				mapurl: 'https://lyh.augurit.com/server/rest/services/ChangZheng/hongyilocation/FeatureServer/0',
				describe: " "
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
			this.$render.addrender(this.map);
		},
		methods: {
			//初始化地图
			getMap() {
				this.map = this.$map.newMap('map');
			},
			//添加特征图层
			addLayer() {
				this.layers = this.$map.createLayer(this.map);
			},
			//添加marker
			addMarker(postion) {
				this.$map.addmarker(this.map, postion);
			},
			//清除图层
			removelayer() {
				this.$map.clear(this.map);
			},
			openbar() {
				this.sidebar.show();
			},
			getdes() {
				this.describe = this.$store.getters.getdescribe;
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
