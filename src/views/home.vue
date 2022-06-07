<template>
	<div id="home">
		<el-row style="margin-top: 20px;">
			<el-col :span="18" :offset="3">
				<h1 style="text-align: center;font-size: 1.2cm;">GIS视角下的红军长征故事展示系统</h1>
			</el-col>
		</el-row>
		<el-row style="margin-top: 30px;">
			<el-col :span="5" :offset="3" style="opacity: 0.9;">
				<el-card :body-style="{ padding: '20px' }">
					<h3>长征是人类的奇迹</h3>
					<img src="http://fms.news.cn/swf/2016_sjxw/czqjdt/img/p1_yudu.jpg" class="image">
					<div style="padding: 14px;">
						<span>1934年10月，第五次反“围剿”失败后，中央主力红军为摆脱国民党军队的包围追击，被迫实行战略性转移，退出中央根据地，进行长征。</span>
						<div class="bottom clearfix">
							<time class="time">{{ currentDate }}</time>
							<el-button type="text" class="button" @click="gosystem()">进入系统</el-button>
						</div>
					</div>
				</el-card>
			</el-col>
			<el-col :span="12" :offset="1">
				<el-carousel height="440px">
					<el-carousel-item v-for="obj in imgs" :key="obj.id">
						<h3 class="medium" style="margin-top: 0;"><img :src="obj.url" alt="" style="width: 100%;height: 100%;"></h3>
					</el-carousel-item>
				</el-carousel>
			</el-col>
		</el-row>
		<information></information>
	</div>
</template>

<script>
	//information组件为下方的长征资料模块，其为单独的一个vue文件
	import information from '../components/information.vue'
	export default {
		data() {
			return {
				//走马灯图片
				imgs: [{
						id: 1,
						url: require("../assets/img/四道防线.png")
					},
					{
						id: 2,
						url: require("../assets/img/强渡乌江.png")
					},
					{
						id: 3,
						url: require("../assets/img/遵义会议.png")
					},
					{
						id: 4,
						url: require("../assets/img/四渡赤水.png")
					},
				]

			};
		},
		name: 'home',
		components: {
			information

		},
		methods: {
			gosystem() {
				//切换路由到系统页面
				this.$router.push('/system');
			}
		}
	}
</script>

<style>
	html,
	body,
	#home {
		background-image: url("../assets/img/background.png");
		height: 100%;
		margin: 0px;
		padding: 0px;
	}



	.el-container {
		border-radius: 4px;

	}

	.el-main {
		opacity: 0.9;
		background-color: white;
		text-align: center;
		line-height: 160px;
	}


	.bottom {
		margin-top: 13px;
		line-height: 12px;
	}

	.button {
		padding: 0;
		float: right;
	}

	.image {
		width: 100%;
		display: block;
	}

	.clearfix:before,
	.clearfix:after {
		display: table;
		content: "";
	}

	.clearfix:after {
		clear: both
	}


	.el-carousel__item:nth-child(2n) {
		background-color: #99a9bf;
	}

	.el-carousel__item:nth-child(2n+1) {
		background-color: #d3dce6;
	}
</style>
