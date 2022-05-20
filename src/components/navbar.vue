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
			<el-submenu index="3">
				<template slot="title">
					<i class="el-icon-location"></i>
					<span slot="title">长征路线</span>
				</template>
				<el-menu-item index="3-1" @click="timelineopen(),addlayer()">红一方面军</el-menu-item>
				<el-menu-item index="3-2">红二、四方面军</el-menu-item>
				<el-menu-item index="3-3">红六方面军</el-menu-item>
			</el-submenu>
			<el-submenu index="4">
				<template slot="title">
					<i class="el-icon-star-on"></i>
					<span slot="title">长征资料</span>
				</template>
				<el-menu-item index="4-1">长征纪念馆</el-menu-item>
				<el-menu-item index="4-2">长征组歌</el-menu-item>
				<el-menu-item index="4-3">参考书目</el-menu-item>
			</el-submenu>
			<el-submenu index="5">
				<template slot="title">
					<i class="el-icon-s-flag"></i>
					<span slot="title">事件展示</span>
				</template>
				<el-menu-item index="5-1">强渡大渡河</el-menu-item>
				<el-menu-item index="5-2">雪山草地</el-menu-item>
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
				//控制菜单的折叠
				isCollapse: true,
			};
		},
		methods: {
			//切换路由至主页页面
			gohome(){
				this.$router.push('/home');
			},
			//添加图层函数
			addlayer(){
				this.$parent.addLayer();
			},
			//打开时间轴
			timelineopen() {
				eventBus.$emit('open', this.show = true)
			},
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			}
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
