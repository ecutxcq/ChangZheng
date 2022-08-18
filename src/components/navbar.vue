<template>
	<div class="menu">

		<el-menu default-active="1-5-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
			:collapse="isCollapse">
			<el-menu-item index="1" @click="isCollapse= !isCollapse">
				<i class="el-icon-menu"></i>
				<span slot="title">切换菜单</span>
			</el-menu-item>
			<el-menu-item index="2" @click="gohome()">
				<i class="el-icon-s-home"></i>
				<span slot="title">回到首页</span>
			</el-menu-item>
			<el-submenu index="3" >
				<template slot="title">
					<i class="el-icon-location"></i>
					<span slot="title">长征路线</span>
				</template>
				<el-menu-item index="3-1" @click="timelineopen(),addlayer(roadurl),closesidebar(),addroad()">重走长征路</el-menu-item>
				<el-menu-item index="3-2" @click="addall()">长征总路线</el-menu-item>
			</el-submenu>

			<el-menu-item index="4" @click="opencard(),addlayer(momurl)">
				<i class="el-icon-star-on"></i>
				<span slot="title">长征纪念馆</span>
			</el-menu-item>
			<el-submenu index="5">
				<template slot="title">
					<i class="el-icon-s-flag"></i>
					<span slot="title">战役还原</span>
				</template>
				<el-menu-item index="5-1" @click="sdfx(),opentime()">突破四道防线</el-menu-item>
				<el-menu-item index="5-2" @click="sdcs(),opentime()">四渡赤水</el-menu-item>
				<el-menu-item index="5-3" @click="ddh(),opentime()">强渡大渡河</el-menu-item>
				<el-submenu index="5-4">
					<span slot="title">翻雪山过草地</span>
					<el-menu-item index="5-4-1" @click="xscd(),opentime()">二维展示</el-menu-item>
					<el-menu-item index="5-4-2" @click="anys()">三维展示</el-menu-item>
				</el-submenu>
			</el-submenu>
			<el-menu-item index="6">
				<i class="el-icon-phone"></i>
				<span slot="title">联系我们</span>
			</el-menu-item>
		</el-menu>
	</div>
</template>

<script>
	import eventBus from '../EventBus/event.js';
	export default {
		data() {
			return {
				roadurl: "https://116.63.143.162/server/rest/services/changzheng/hongyilocation/FeatureServer/0",
				momurl: "https://116.63.143.162/server/rest/services/changzheng/jnglocation/FeatureServer/0",
				//控制菜单的折叠
				isCollapse: true,
				events: [{
						id: 1,
						title: "一渡",
						name: " ",
						positon: [27.86212, 106.615182],
						icon: "el-icon-s-flag",
						url1: "https://116.63.143.162/server/rest/services/changzheng/sdcs1location/FeatureServer/0",
						url2: "https://116.63.143.162/server/rest/services/changzheng/sdcs1road/FeatureServer/0",
						color: "#ff0000f5",
					},
					{
						id: 2,
						title: "二渡",
						name: " ",
						positon: [27.894817, 106.661175],
						icon: "el-icon-s-flag",
						url1: "https://116.63.143.162/server/rest/services/changzheng/sdcs2location/FeatureServer/0",
						url2: "https://116.63.143.162/server/rest/services/changzheng/sdcs2road/FeatureServer/0",
						color: "#ff0000f5"
					},
					{
						id: 3,
						title: "三渡",
						name: " ",
						positon: [27.727137, 106.803754],
						icon: "el-icon-s-flag",
						url1: "https://116.63.143.162/server/rest/services/changzheng/sdcs3location/FeatureServer/0",
						url2: "https://116.63.143.162/server/rest/services/changzheng/sdcs3road/FeatureServer/0",
						color: "#ff0000f5"
					},
					{
						id: 4,
						title: "四渡",
						name: " ",
						positon: [27.222536, 106.748562],
						icon: "el-icon-s-flag",
						url1: "https://116.63.143.162/server/rest/services/changzheng/sdcs4location/FeatureServer/0",
						url2: "https://116.63.143.162/server/rest/services/changzheng/sdcs4road/FeatureServer/0",
						color: "#ff0000f5"
					},
				],
				obs: [{
						id: 1,
						title: "路线",
						name: " ",
						positon: [25.344337, 112.782876],
						icon: "el-icon-s-flag",
						url1: "https://116.63.143.162/server/rest/services/changzheng/sdfxlocation/FeatureServer/0",
						url2: "https://116.63.143.162/server/rest/services/changzheng/sdfxroad/FeatureServer/0",
						color: "#ff0000f5"
					},
					{
						id: 2,
						title: "根据地",
						name: " ",
						positon: [26.690826, 116.204773],
						icon: "el-icon-s-home",
						url1: " ",
						url2: "https://116.63.143.162/server/rest/services/changzheng/sdfxgjd/FeatureServer/0",
						color: "#ff0000f5"
					},
					{
						id: 3,
						title: "四道防线",
						name: " ",
						positon: [25.844855, 113.886714],
						icon: "el-icon-aim",
						url1: " ",
						url2: "https://116.63.143.162/server/rest/services/changzheng/sdfx/FeatureServer/0",
						color: "#0055fff5"
					},
				],
				snow: [{
						id: 1,
						title: "雪山",
						name: " ",
						positon: [31.681093, 102.783945],
						icon: "el-icon-map-location",
						url1: "https://116.63.143.162/server/rest/services/changzheng/snowmountain/FeatureServer/0",
						url2: "https://116.63.143.162/server/rest/services/changzheng/snowroad/FeatureServer/0",
						color: "#ff0000f5"
					},
					{
						id: 2,
						title: "草地",
						name: " ",
						positon: [33.202162, 103.142692],
						icon: "el-icon-place",
						url1: " ",
						url2: "https://116.63.143.162/server/rest/services/changzheng/caodi/FeatureServer/0",
						color: "green"
					},
				],
				ddrv: [{
						id: 1,
						title: "大渡河",
						name: " ",
						positon: [29.507256, 102.651714],
						icon: "el-icon-place",
						url1: " ",
						url2: "https://116.63.143.162/server/rest/services/changzheng/ddh/FeatureServer/0",
						color: "#0055fff5"
					},
					{
						id: 2,
						title: "红军路线",
						name: " ",
						positon: [26.64382, 102.375755],
						icon: "el-icon-ship",
						url1: "https://116.63.143.162/server/rest/services/changzheng/ddhlocation/FeatureServer/0",
						url2: "https://116.63.143.162/server/rest/services/changzheng/ddhroad/FeatureServer/0",
						color: "#ff0000f5"
					},

				]
			};
		},
		methods: {
			//切换路由至主页页面
			gohome() {
				this.$router.push('/home');
			},
			//添加图层函数
			addlayer(url) {
				this.$parent.removelayer();
				this.$store.commit('setmap', url);
				this.$parent.addLayer();
			},
			//添加总路线
			addall() {
				this.$parent.removelayer();
				this.$parent.addroad();
				this.$store.commit('setmap',
					'https://116.63.143.162/server/rest/services/changzheng/%E6%80%BB%E8%B7%AF%E7%BA%BF/FeatureServer/0'
				);
				this.$parent.addLayer();
				this.$store.commit('setcolor', '#ff0000f5');
				this.$store.commit('setmap',
					'https://116.63.143.162/server/rest/services/changzheng/%E6%80%BB%E8%B7%AF%E7%BA%BF/FeatureServer/1'
				);
				this.$parent.addpoly();
				this.$store.commit('setcolor', '#0055fff5');
				this.$store.commit('setmap',
					'https://116.63.143.162/server/rest/services/changzheng/%E6%80%BB%E8%B7%AF%E7%BA%BF/FeatureServer/2'
				);
				this.$parent.addpoly();
				this.$store.commit('setcolor', '#000000f5');
				this.$store.commit('setmap',
					'https://116.63.143.162/server/rest/services/changzheng/%E6%80%BB%E8%B7%AF%E7%BA%BF/FeatureServer/4'
				);
				this.$parent.addpoly();
				this.$store.commit('setcolor', '#55ff00f5');
				this.$store.commit('setmap',
					'https://116.63.143.162/server/rest/services/changzheng/%E6%80%BB%E8%B7%AF%E7%BA%BF/FeatureServer/5'
				);
				this.$parent.addpoly();
				this.$store.commit('setcolor', '#d08b00f5');
				this.$store.commit('setmap',
					'https://116.63.143.162/server/rest/services/changzheng/%E6%80%BB%E8%B7%AF%E7%BA%BF/FeatureServer/3'
				);
				this.$parent.addpoly();
				this.$store.commit('setlegendshow', true);
			},
			//添加动态路线
			addroad() {
				this.$parent.addline();
			},
			//打开时间轴
			timelineopen() {
				this.$store.commit('settimeshow', false);
				this.$store.commit('setshow', true);
			},
			//关闭菜单
			closesidebar() {
				this.$parent.closebar();
			},
			//打开纪念馆模块
			opencard() {
				this.$store.commit('settimeshow', false);
				this.$store.commit('setcardshow', true);
			},
			//打开时间轴
			opentime() {
				this.$store.commit('settimeshow', true);
			},
			//时间轴切换为四渡赤水
			sdcs() {
				this.$store.commit('setitem', this.events);
			},
			//时间轴切换为四道防线
			sdfx() {
				this.$store.commit('setitem', this.obs);
			},
			//时间轴切换为雪山草地
			xscd() {
				this.$store.commit('setitem', this.snow);
			},
			//时间轴切换为大渡河
			ddh() {
				this.$store.commit('setitem', this.ddrv);
			},
			anys() {
				window.location.href = "http://127.0.0.1:8848/cesium_app/cesium_app/index.html";
			},
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			}
		},
		computed: {

		}
	}
</script>

<style>
	.menu {
		position: absolute;
		top: 130px;
		left: 30px;
	}

	.el-menu-vertical-demo:not(.el-menu--collapse) {
		width: 200px;
		min-height: 450px;
	}
</style>
