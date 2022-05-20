<template>

	<div id="timeline">
		<transition name="el-zoom-in-center" style="background-color: black;">
			<div v-show="show" class="transition-box">
				<el-button type="danger" icon="el-icon-close" circle @click="show=false"
					style="position:absolute;right: 10px;top: 10px;"></el-button>
				<el-timeline>
					<el-timeline-item v-for="obj in events" :key="obj.id" placement="top">
						<el-card>
							<h4>{{obj.time}}</h4>
							<p>{{obj.name}}</p>
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
		props:['show'],
		created(){
			eventBus.$on('open',(show) => {
				this.show = show;
			})
		},

		data: () => ({
			events: [{
					id: 1,
					name: "于都",
					time: "1934年1月",
					position: [25.9518, 115.4154],
					vedio: " "
				}, {
					id: 2,
					name: "突破四道防线",
					time: "1934年11月",
					position: [25.6117, 110.6714],
					vedio: " "
				},
				{
					id: 3,
					name: "强渡乌江",
					time: "1935年1月1日",
					position: [27.0859, 107.4758],
					vedio: " "
				},
				{
					id: 4,
					name: "遵义会议",
					time: "1935年1月15日",
					position: [27.5362, 106.8292],
					vedio: " "
				},
				{
					id: 5,
					name: "四渡赤水",
					time: "1935年1月-4月",
					position: [28.3274, 106.2038],
					vedio: " "
				},
				{
					id: 6,
					name: "巧渡金沙江",
					time: "1935年5月",
					position: [25.5513, 102.4714],
					vedio: " "
				},
				{
					id: 7,
					name: "强渡大渡河",
					time: "1935年5月24-25日",
					position: [29.2279, 102.3594],
					vedio: " "
				},
				{
					id: 8,
					name: "飞夺泸定桥",
					time: "1935年5月29日",
					position: [29.9141, 102.2347],
					vedio: " "
				},
				{
					id: 9,
					name: "翻雪山",
					time: "1935年6月",
					position: [30.8103, 102.7365],
					vedio: " "
				},
				{
					id: 10,
					name: "过草地",
					time: "1935年8月",
					position: [32.6028, 103.0614],
					vedio: " "
				},
				{
					id: 11,
					name: "激战腊子口",
					time: "1935年9月",
					position: [],
					vedio: " "
				},
				{
					id: 12,
					name: "陕北吴起会师",
					time: "1935年10月19日",
					position: [],
					vedio: " "
				},
				{
					id: 13,
					name: "直罗镇战役",
					time: "1935年11月",
					position: [],
					vedio: " "
				},
				{
					id: 14,
					name: "会宁会师",
					time: "1936年10月",
					position: [],
					vedio: " "
				},
				{
					id: 15,
					name: "将台堡会师",
					time: "1936年10月22日",
					position: [],
					vedio: " "
				}

			],
		}),
		methods: {
			addmarkers(){
				var position = this.events.position;
				this.map.flyTo(position);
				var marker = L.marker(position)
					.addTo(this.map)
					.bindPopup(`<p>于都——长征第一渡<br>中央、军委机关、红军总部和毛泽东、朱德、周恩来、张闻天、博古就是从于都县城东门的渡口渡过于都河开始长征的。<br /></p>`)
					.openPopup();
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
