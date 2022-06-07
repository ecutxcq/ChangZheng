<template>
	<div id="system">
		<div id="map" class="map-main"></div>
		<navbar></navbar>
		<div id="leftbar">
			<el-button icon="el-icon-close" circle style="position: absolute; right: 5px;" size="mini"
				@click="closebar()"></el-button>
			<el-divider>
				<h2 class="el-icon-s-flag">{{name}}</h2>
			</el-divider>
			<img style="float: left;height: 150px;width: 180px;margin-top: 30px;" :src="imgsrc" />
			<div style="float: right;width: 200px;margin-top: 30px;">
				{{describe}}
			</div>

		</div>
		<rightpanel :show="show" @cgpg="getdes()"></rightpanel>
		<timeline></timeline>
		<mem></mem>
	</div>
</template>

<script>
	import navbar from '../components/navbar.vue';
	import rightpanel from '../components/rightpanel.vue';
	import 'leaflet-sidebar';
	import sidebar from '../components/siderbar.vue';
	import timeline from '../components/timeline.vue';
	import mem from '../components/card.vue'
	export default {
		name: 'system',
		components: {
			navbar,
			rightpanel,
			sidebar,
			timeline,
			mem
		},
		data() {
			return {
				map: null,
				layers: null,
				sidebar: null,
				show: false,
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
				closeButton: false
			});

			// this.$render.addarea(document.getElementById('map'));
			this.map.addControl(this.sidebar);

		},


		methods: {
			//初始化地图
			getMap() {
				this.map = this.$map.newMap('map');
			},
			//添加echarts路线
			addline() {
				this.$render.addrender(this.map);
			},
			//添加位置图层
			addLayer() {
				this.layers = this.$map.addlocation(this.map, this.mapurl);
			},
			//添加面图层
			addpoly(){
				this.layers = this.$map.addpoly(this.map, this.mapurl,this.polycolor);
				console.log(this.polycolor)
			},
			//切换视角
			changeview(position){
				this.$map.changeview(this.map,position);
			},
			//添加marker
			addMarker(postion,pop) {
				this.$map.addmarker(this.map, postion,pop);
			},
			//清除图层
			removelayer() {
				this.$map.clear(this.map);
			},
			//打开右方的展示栏
			openbar() {
				this.sidebar.show();
			},
			//关闭右方的展示栏
			closebar() {
				this.$store.commit('setshow', true);
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

		computed: {
			mapurl() {
				return this.$store.state.mapurl;
			},
			polycolor(){
				return this.$store.state.layercolor;
			}
		}

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
