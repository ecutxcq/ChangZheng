<template>
	<div id="system">
		<div id="map" class="map-main"></div>
		<navbar></navbar>
		<div id="leftbar">
			<el-button icon="el-icon-close" circle style="position: absolute; right: 5px;" size = "mini" @click="closebar()"></el-button>
			<el-divider>
				<h2 class="el-icon-s-flag">{{name}}</h2>
			</el-divider>
			<img style="float: left;height: 150px;width: 180px;margin-top: 30px;" :src="imgsrc" />
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
	import eventBus from '../EventBus/event.js'
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
				show: false,
				mapurl: 'https://lyh.augurit.com/server/rest/services/ChangZheng/hongyilocation/FeatureServer/0',
				describe: " ",
				name: " ",
				imgsrc: " "
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
				position: 'right',
				closeButton:false
			});

			// this.$render.addarea(document.getElementById('map'));
			this.map.addControl(this.sidebar);

		},
		

		methods: {
			//初始化地图
			getMap() {
				this.map = this.$map.newMap('map');
			},
			//添加特征图层
			addLayer() {
				this.$render.addrender(this.map);
				this.layers = this.$map.createLayer(this.map);
			},
			//添加marker
			addMarker(postion) {
				this.$map.addmarker(this.map, postion);
				this.$render.addrender(this.map);
			},
			//清除图层
			removelayer() {
				this.$map.clear(this.map);
			},
			//打开右方的展示栏
			openbar() {
				this.sidebar.show();
			},
			closebar() {
				this.$store.commit('setshow',true);
				this.sidebar.hide();
			},
			//根据不同的地点显示不同的故事
			getdes() {
				this.describe = this.$store.getters.getdescribe;
			},
			//根据不同的地点显示不同的地名
			getname() {
				this.name = this.$store.getters.getname;
			},
			//根据不同的地点显示不同的图片
			getimg() {
				this.imgsrc = this.$store.getters.getimg;
			},


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
