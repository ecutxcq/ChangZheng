<template>

	<div id="timeline">
		<transition name="el-zoom-in-center" style="background-color: black;">
			<div v-show="show" class="transition-box">
				<el-button type="danger" icon="el-icon-close" circle @click="show=false"
					style="position:absolute;right: 10px;top: 10px;"></el-button>
				<el-timeline>
					<el-timeline-item v-for="obj in events" :key="obj.id" placement="top">
						<el-card>
							<h4 @click="clear(),addmarkers(obj.position)" style="cursor: pointer;">
								{{obj.time}}</h4>
							<p @click="openbar(),show=false,changpage(obj.describe)" style="cursor: pointer;">{{obj.name}}</p>
						</el-card>
					</el-timeline-item>
				</el-timeline>
			</div>
		</transition>
	</div>


</template>

<script>
	import eventBus from '../EventBus/event.js';
	export default {
		//控制时间轴的开关
		props: ['show'],
		created() {
			eventBus.$on('open', (show) => {
				this.show = show;
			})
		},

		data: () => ({
			//长征事件信息
			events: [{
					id: 1,
					name: "于都",
					time: "1934年1月",
					position: [25.9518, 115.4154],
					describe: "在第五次反“围剿”期间，由于党内“左”倾机会主义的错误领导，以及国民党军队的重兵围剿及经济封锁，中央红军在根据地内英勇苦战一年，仍然没有打破敌人的围剿，根据地日益缩小，红军被迫转移。从1934年10月8日开始，红军一、三、五、八、九军团和第一、第二野战纵队分别从原驻地兴国、宁都、石城、长汀和瑞金陆续撤离，转移到于都的段屋、车溪、罗坳和县城，集结休整补充武器弹药、兵员、粮食等，布置转移西进事宜。",
					vedio: " "
				}, {
					id: 2,
					name: "突破四道防线",
					time: "1934年11月",
					position: [25.6117, 110.6714],
					describe:"123",
					vedio: " "
				},
				{
					id: 3,
					name: "强渡乌江",
					time: "1935年1月1日",
					position: [27.0859, 107.4758],
					describe:"",
					vedio: " "
				},
				{
					id: 4,
					name: "遵义会议",
					time: "1935年1月15日",
					position: [27.5362, 106.8292],
					describe:"",
					vedio: " "
				},
				{
					id: 5,
					name: "四渡赤水",
					time: "1935年1月-4月",
					position: [28.3274, 106.2038],
					describe:"",
					vedio: " "
				},
				{
					id: 6,
					name: "巧渡金沙江",
					time: "1935年5月",
					position: [25.5513, 102.4714],
					describe:"",
					vedio: " "
				},
				{
					id: 7,
					name: "强渡大渡河",
					time: "1935年5月24-25日",
					position: [29.2279, 102.3594],
					describe:"",
					vedio: " "
				},
				{
					id: 8,
					name: "飞夺泸定桥",
					time: "1935年5月29日",
					position: [29.9141, 102.2347],
					describe:"",
					vedio: " "
				},
				{
					id: 9,
					name: "翻雪山",
					time: "1935年6月",
					position: [30.8103, 102.7365],
					describe:"",
					vedio: " "
				},
				{
					id: 10,
					name: "过草地",
					time: "1935年8月",
					position: [32.6028, 103.0614],
					describe:"",
					vedio: " "
				},
				{
					id: 11,
					name: "激战腊子口",
					time: "1935年9月",
					position: [],
					describe:"",
					vedio: " "
				},
				{
					id: 12,
					name: "陕北吴起会师",
					time: "1935年10月19日",
					position: [],
					describe:"",
					vedio: " "
				},
				{
					id: 13,
					name: "直罗镇战役",
					time: "1935年11月",
					position: [],
					describe:"",
					vedio: " "
				},
				{
					id: 14,
					name: "会宁会师",
					time: "1936年10月",
					position: [],
					describe:"",
					vedio: " "
				},
				{
					id: 15,
					name: "将台堡会师",
					time: "1936年10月22日",
					position: [],
					describe:"",
					vedio: " "
				}
			],
			
		}),
		methods: {
			//添加marker
			addmarkers(position) {
				this.$parent.addMarker(position);
			},
			clear() {
				this.$parent.removelayer();
			},
			openbar() {
				this.$parent.openbar();
			},
			changpage(obj){
				var event = obj;
				this.$store.commit('setdescribe',event);
				this.$parent.getdes();
			}
		},
	}
</script>

<style>
	#timeline {
		border-radius: 4px;
		display: flex;
		margin-top: 20px;
		height: 80%;
		overflow: auto;
		position: absolute;
		right: 0;
	}

	.transition-box {
		margin-bottom: 10px;
		height: 80%;
		border-radius: 4px;
		text-align: center;
		color: blue;
		padding: 40px 20px;
		box-sizing: border-box;
		margin-right: 20px;
	}
</style>
