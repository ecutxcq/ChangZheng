<template>
	<el-row style="margin-top: 30px;">
		<el-col :span="18" :offset="3">
			<el-container>
				<el-container>
					<el-main style="height: 750px;">
						<div>
							<div>
								<el-divider>
									<h3 class="el-icon-video-camera">相关资料</h3>
								</el-divider>

							</div>
						</div>
						<div style="margin-top: 20px;position: relative;" v-for="(obj,index) in news" :key="obj.id">
							<el-card shadow="hover">
								<el-link :href="obj.url" target="_blank"
									style="font-size: 130%;font-weight: 900;text-align: left;position: absolute;top:6%;left: 230px;line-height: 2;">
									{{obj.title}}
								</el-link>

								<p style="text-align: left;position: absolute;top:20%;left: 230px;line-height: 2;">
									{{obj.describe}}
								</p>
								<img :src="obj.img" class="image"
									style="margin-bottom: 15px;width: 200px;height: 160px;float: left;">

							</el-card>

						</div>
					</el-main>
					<el-main>
						<div>
							<el-divider>
								<h3 class="el-icon-reading">知识答题</h3>
							</el-divider>
						</div>
						<div style="margin-top: 20px;position: relative;">
							<el-carousel trigger="click" height="350px" indicator-position="none" :autoplay=false
								ref="carousel">
								<el-carousel-item v-for="(obj,index) in ques" :key="obj.id"
									style="background-color: aliceblue;">
									<h4 class="small" style="line-height: 2;">{{ obj.title }}</h4>
									<p class="ans" :style="{backgroundColor:color1}"
										@click="answer(obj.ans1,obj.right,1)" @mouseout="change()" style="cursor: pointer;">
										{{obj.ans1}}
									</p>
									<p class="ans" :style="{backgroundColor:color2}"
										@click="answer(obj.ans2,obj.right,2)" @mouseout="change()" style="cursor: pointer;">
										{{obj.ans2}}
									</p>
									<p class="ans" :style="{backgroundColor:color3}"
										@click="answer(obj.ans3,obj.right,3)" @mouseout="change()" style="cursor: pointer;">
										{{obj.ans3}}
									</p>
								</el-carousel-item>
								<el-carousel-item style="background-color: aliceblue;">
									<h4 class="small" style="line-height: 2;">你一共答对了{{ count }}道题</h4>
									<p style="line-height: 2;">{{eva}}</p>
								</el-carousel-item>
							</el-carousel>
						</div>
					</el-main>
				</el-container>
			</el-container>
		</el-col>
	</el-row>
</template>

<script>
	export default {
		data() {
			return {
				color1: " ",
				color2: " ",
				color3: " ",
				eva: " ",
				count: 0,
				rep: false,
				news: [{
						id: 1,
						img: require("../assets/img/七律长征.png"),
						title: "《七律·长征》",
						url: "https://baike.baidu.com/item/%E4%B8%83%E5%BE%8B%C2%B7%E9%95%BF%E5%BE%81/1188448?fromtitle=%E4%B8%83%E5%BE%8B%E9%95%BF%E5%BE%81&fromid=4477146&fr=aladdin",
						describe: "《七律·长征》是一首七言律诗，选自《毛泽东诗词集》，这首诗写于1935年10月，当时毛泽东率领中央红军越过岷山，长征即将结束。回顾长征一年来所战胜的无数艰难险阻，他满怀喜悦的战斗豪情。"
					},
					{
						id: 2,
						img: require("../assets/img/雪山.png"),
						title: "重走长征路丨爬雪山",
						url: "https://baijiahao.baidu.com/s?id=1700783144702771023&wfr=spider&for=pc",
						describe: "为庆祝建党一百周年，由四川广播电视台全媒体新闻中心、四川县级融媒体中心省级技术平台联合全省县级融媒体中心共同推出了《重走长征路——四川县级融媒体中心大型全媒体新闻行动》。"
					},
					{
						id: 3,
						img: require("../assets/img/长城.png"),
						title: "长征精神：中华民族自强不息的象征",
						url: "https://baijiahao.baidu.com/s?id=1714298397650186866&wfr=spider&for=pc",
						describe: "硝烟虽已散尽，时代却发生着深刻变革，伟大长征精神已经成为中国共产党人精神谱系的重要组成部分，深深融入中华民族的血脉和灵魂，成为激励中国共产党和中国人民不断攻坚克难、从胜利走向胜利的精神伟力。"
					}
				],
				ques: [{
						id: 4,
						title: "1、红军长征出发第一渡的河流名叫?",
						ans1: "A、雩江",
						ans2: "B、于都河",
						ans3: "C、赣江",
						right: "B、于都河"
					},
					{
						id: 5,
						title: "2、红军长征出发时间是?",
						ans1: "A、1934年10月",
						ans2: "B、1935年1月",
						ans3: "C、1936年10月",
						right: "A、1934年10月"
					},
					{
						id: 6,
						title: "3、中央红军主力是由于第几次反围剿失败而踏上长征之路?",
						ans1: "A、第三次",
						ans2: "B、第四次",
						ans3: "C、第五次",
						right: "C、第五次"
					},
					{
						id: 7,
						title: "4、中央红军湘江之战通过的是第几道封锁线?",
						ans1: "A、第三道",
						ans2: "B、第四道",
						ans3: "C、第五道",
						right: "B、第四道"
					},
					{
						id: 8,
						title: "5、()会议决定着中共中央和红军的命运和未来，否定了博古、李德顽固坚持的使红军遭受巨大损失错误战略方针，让中国革命重新走上正确道路。",
						ans1: "A、黎平会议",
						ans2: "B、通道会议",
						ans3: "C、遵义会议",
						right: "A、黎平会议"
					},
					{
						id: 9,
						title: "6、在会宁会师的是红军的哪几个主力部队?",
						ans1: "A、红一方面军和红二方面军",
						ans2: "B、红一军团和红三军团",
						ans3: "C、红一方面军和红四方面军",
						right: "C、红一方面军和红四方面军"
					},
					{
						id: 10,
						title: "7、中央红军长征中一共有几次会师?",
						ans1: "A、六次",
						ans2: "B、八次",
						ans3: "C、十次",
						right: "B、八次"
					},
					{
						id: 11,
						title: "8、标志着红军长征胜利结束的最后一次会师是?",
						ans1: "A、将台堡会师",
						ans2: "B、会宁会师",
						ans3: "C、甘泉会师",
						right: "A、将台堡会师"
					},
				],

			}
		},
		methods: {
			change() {
				console.log(this.color1);
				this.color1 = "#fffffff5";
				this.color2 = "#fffffff5";
				this.color3 = "#fffffff5";
			},

			answer(asw, key, id) {
				if (asw == key) {
					console.log("答对了");
					if (id == 1) {
						this.color1 = "#55aaff";
					} else if (id == 2) {
						this.color2 = "#55aaff";
					} else if (id == 3) {
						this.color3 = "#55aaff";
					}
					if (this.rep == false) {
						this.count++;
						this.rep = true;
					}
				} else {
					console.log("答错了");
					if (id == 1) {
						this.color1 = "#ff0000f5";
					} else if (id == 2) {
						this.color2 = "#ff0000f5";
					} else if (id == 3) {
						this.color3 = "#ff0000f5";
					}
				}
				setTimeout(
					this.$refs.carousel.next(), 2000);
				this.rep = false;
			}
		},
		watch: {
			count() {
				if (this.count >= 4) {
					this.eva = "您对长征知识比较了解，再接再厉！"
				} else {
					this.eva = "您对长征知识还是不太了解，请多多学习！"
				}
			}
		}
	}
</script>

<style>
	.ans {
		background-color: aliceblue;
		line-height: 3;
		border-style: solid;

	}
</style>
