<template>
	<div id="home">
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
					</el-carousel-item>
				</el-carousel>
			</el-col>
		</el-row>
		<information></information>
	</div>
</template>

<script>
	import information from '../components/information.vue'
	export default {
		data() {
			return {
				imgs: [{
						id: 1,
						url: ""
					},
					{
						id: 2,
						url: ""
					},
					{
						id: 3,
						url: ""
					},
					{
						id: 4,
						url: ""
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
