<template>

	<div id="rightpanel">
		<transition name="el-zoom-in-center" style="background-color: black;">
			<div v-show="show" class="transition-box">
				<el-button  icon="el-icon-close" circle @click="close"
					style="position:absolute;right: 10px;top: 10px;"></el-button>
				<el-timeline>
					<el-timeline-item v-for="(obj,index) in events" :key="obj.id" placement="top">
						<el-card>
							<h4 @click="clear(),addmarkers(obj.position,obj.pop)" style="cursor: pointer;">
								{{obj.time}}
							</h4>
							<p @click="openbar(),close(),changpage(obj)" style="cursor: pointer;">{{obj.name}}</p>
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
		// props: ['show'],
		// created() {
		// 	eventBus.$on('open', (show) => {
		// 		this.show = show;
		// 	})
		// },

		data: () => ({
			//长征事件信息
			events: [{
					id: 1,
					name: "于都",
					time: "1934年1月",
					position: [25.9518, 115.4154],
					pop:`<p>于都——长征第一渡<br>中央、军委机关、红军总部和毛泽东、朱德、周恩来、张闻天、博古就是从于都县城东门的渡口渡过于都河开始长征的。<br /></p>`,
					describe: "在第五次反“围剿”期间，由于党内“左”倾机会主义的错误领导，以及国民党军队的重兵围剿及经济封锁，中央红军在根据地内英勇苦战一年，仍然没有打破敌人的围剿，根据地日益缩小，红军被迫转移。从1934年10月8日开始，红军一、三、五、八、九军团和第一、第二野战纵队分别从原驻地兴国、宁都、石城、长汀和瑞金陆续撤离，转移到于都的段屋、车溪、罗坳和县城，集结休整补充武器弹药、兵员、粮食等，布置转移西进事宜。",
					vedio: " ",
					img: require('../assets/img/于都.png')
				}, {
					id: 2,
					name: "突破四道防线",
					time: "1934年11月",
					position: [25.6117, 110.6714],
					pop:`<p>兴安——突破四道防线<br>在中央红军突围的前进道路中，蒋介石指挥广东的陈济棠、湖南的何键和广西的白崇禧等先后布置了四道封锁线，妄图阻止以至消灭红军。<br /></p>`,
					describe: "长征初期,中央红军开始突破国民党军四道封锁线 1934年10月17日,中央红军按照中革军委的计划,从于都南渡贡水,于21日晚攻占了王母渡、韩坊、固陂、新田等地,突破了国民党军第一道封锁线,25日全部渡过信丰河。11月8日,红军在汝城以南之天马山至城口之间通过了国民党军第二道封锁线。15日,在良田、宜章之间通过了国民党军第三道封锁线。接着,分两路西进,先后占领临武、嘉禾、蓝山、道县、江华等地,渡过潇水。27日,先头红2师、红4师各一部于广西的兴安、全州之间,突破国民党第四道封锁线，渡过湘江",
					vedio: " ",
					img: require('../assets/img/四道防线.png')
				},
				{
					id: 3,
					name: "强渡乌江",
					time: "1935年1月1日",
					position: [27.0859, 107.4758],
					pop:`<p>翁安——强渡乌江<br>“猴场会议”以后，中央红军立即作出强渡乌江战斗的决定。毛泽东、朱德、周恩来等率领中央红军，经过3天3夜的顽强战斗，强渡乌江，击败黔军，向遵义挺进。<br/></p>`,
					describe: "中央红军分三路向乌江进发。右路红一军团在回龙场、 左路红三军团在茶山关、中路军委纵队在江界河等地强渡乌江。而防守乌江的则是贵州军阀王家烈部。此时各个渡口已被他构筑了坚固的工事，沿江民房、船只都被烧毁。",
					vedio: " ",
					img: require('../assets/img/强渡乌江.png')
				},
				{
					id: 4,
					name: "遵义会议",
					time: "1935年1月15日",
					position: [27.5362, 106.8292],
					pop:`<p>遵义——遵义会议（占领遵义）<br>中国工农红军长征到达遵义,随即开展遵义会议（即中共中央政治局扩大会议）。这次会议确立了以毛泽东为代表的新的中央领导集体。遵义会议成为中国共产党的历史上一个生死攸关的转折点。<br/></p>`,
					describe: "为了总结第五次反“围剿”的西征军事指挥上的经验教训，根据黎平政治局会议的决定，在毛泽东、张闻天、王稼祥等领导同志的努力促成下，红军占领遵义后，1935年1月15日至17日，在遵义召开中共中央政治局扩大会议。",
					vedio: " ",
					img: require('../assets/img/遵义会议.png')
				},
				{
					id: 5,
					name: "四渡赤水",
					time: "1935年1月-4月",
					position: [28.3274, 106.2038],
					pop:`<p>习水——四渡赤水<br>毛泽东指挥中央红军三个月的时间六次穿越三条河流，转战川贵滇三省，巧妙地穿插于国民党军重兵集团围剿之间，不断创造战机，在运动中大量歼灭敌人，牢牢地掌握战场的主动权，取得了红军长征史上以少胜多，变被动为主动的光辉战例。<br/></p>`,
					describe: "毛泽东指挥中央红军三个月的时间六次穿越三条河流，转战川贵滇三省，巧妙地穿插于国民党军重兵集团围剿之间，不断创造战机，在运动中大量歼灭敌人，牢牢地掌握战场的主动权，取得了红军长征史上以少胜多，变被动为主动的光辉战例。",
					vedio: " ",
					img: require('../assets/img/四渡赤水.png')
				},
				{
					id: 6,
					name: "巧渡金沙江",
					time: "1935年5月",
					position: [25.5513, 102.4714],
					pop:`<p>禄劝——巧渡金沙江<br>长征途中，中央红军军委干部团接到抢夺皎平渡的任务。他们在金沙江边找到一条敌军送探子来南岸探查情况的船，又在当地农民的协助下，从水里捞出一条破船。然后，他们乘坐这两条船渡到北岸。红军突然袭击，一举控制皎平渡两岸渡口。<br/></p>`,
					describe: "",
					vedio: " ",
					img: " "
				},
				{
					id: 7,
					name: "强渡大渡河",
					time: "1935年5月24-25日",
					position: [29.2279, 102.3594],
					pop:`<p>石棉——强渡大渡河<br>中央红军长征巧渡金沙江后，沿会理至西昌大道继续北上，准备渡过大渡河进入川西北。红1团第1营营长孙继先从第2连挑选17名勇士组成渡河突击队，突击队迅速登岸，并在右岸火力的支援下奋勇冲杀，控制了渡口，红1军团第1师和干部团由此渡过了被国民党军视为不可逾越的天险大渡河。<br/></p>`,
					describe: "",
					vedio: " ",
					img: " "
				},
				{
					id: 8,
					name: "飞夺泸定桥",
					time: "1935年5月29日",
					position: [29.9141, 102.2347],
					pop:`<p>泸定——飞夺泸定桥<br>中央红军部队在四川省中西部强渡大渡河成功，红四团战士在天下大雨的情况下，在崎岖陡峭的山路上跑步前进，一昼夜奔袭竟达240里，终于在5月29日凌晨6时许按时到达泸定桥西岸。第2连连长和22名突击队员沿着枪林弹雨和火墙密布的铁索踩着铁链夺下桥头，并与东岸部队合围占领了泸定桥。<br/></p>`,
					describe: "",
					vedio: " ",
					img: " "
				},
				{
					id: 9,
					name: "翻雪山",
					time: "1935年6月",
					position: [30.8103, 102.7365],
					pop:`<p>夹金山——翻越夹金山（翻雪山）<br>红军在汉源击溃川军杨森部后，经天全、芦山抵宝兴。6月12日，自宝兴县硗碛村出发，翻越长征以来的第一座雪山夹金山。夹金山总面积840平方公里，海拔4000多米，一上一下要走70里路，高山缺氧，积雪终年不化，翻越十分困难，有些人坐下休息就再也起不来。<br/></p>`,
					describe: "",
					vedio: " ",
					img: " "
				},
				{
					id: 10,
					name: "过草地",
					time: "1935年8月",
					position: [32.6028, 103.0614],
					pop:`<p>毛儿盖——过草地<br>红军行军队左右两路，平行前进。右路军由毛泽东、周恩来、徐向前等率领，自四川毛儿盖出发，进入松潘草地。左翼为林彪的红一方面军、中央领导机关、红军大学学生等。右翼为徐向前、陈昌浩率领的红三十军和红四军。彭德怀率红三军团垫后，走左翼行军路线。<br/></p>`,
					describe: "",
					vedio: " ",
					img: " "
				},
				{
					id: 11,
					name: "激战腊子口",
					time: "1935年9月",
					position: [],
					describe: "",
					vedio: " ",
					img: " "
				},
				{
					id: 12,
					name: "陕北吴起会师",
					time: "1935年10月19日",
					position: [],
					describe: "",
					vedio: " ",
					img: " "
				},
				{
					id: 13,
					name: "直罗镇战役",
					time: "1935年11月",
					position: [],
					describe: "",
					vedio: " ",
					img: " "
				},
				{
					id: 14,
					name: "会宁会师",
					time: "1936年10月",
					position: [],
					describe: "",
					vedio: " ",
					img: " "
				},
				{
					id: 15,
					name: "将台堡会师",
					time: "1936年10月22日",
					position: [],
					describe: "",
					vedio: " ",
					img: " "
				}
			],

		}),
		methods: {
			close() {
				this.$store.commit('setshow',false);
			},

			//添加marker
			addmarkers(position,pop) {
				this.$parent.addline();
				this.$parent.addMarker(position,pop);
			},
			clear() {
				this.$parent.removelayer();
			},
			openbar() {
				this.$parent.openbar();
			},
			changpage(obj) {
				var event = obj;
				this.$store.commit('setdescribe', event.describe);
				this.$store.commit('setname', event.name);
				this.$store.commit('setimg', event.img);
				this.$parent.getdes();
				this.$parent.getname();
				this.$parent.getimg();
			}
		},
		computed:{
			show(){
				return this.$store.state.show;
			}
		},
		
		
	}
</script>

<style>
	#rightpanel {
		border-radius: 4px;
		display: flex;
		margin-top: 30px;
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
