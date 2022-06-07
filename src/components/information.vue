<template>
	<el-row style="margin-top: 30px;">
		<el-col :span="18" :offset="3">
			<el-container>
				<el-container>
					<el-main style="height: 300px;">
						<div>
							<div>
								<el-divider>
									<h3 class="el-icon-video-camera">相关资料</h3>
								</el-divider>

							</div>							
						</div>
					<!-- 	<div style="margin-top: 20px;position: relative;" v-for="obj in news">
							<div style="float: left;padding: 10px;">
								<img :src="obj.img" class="image" style="width: 200px;height: 160px;">
							</div>
							<div>
								<h3 style="text-align: left;position: absolute;top: 0px;left: 230px;line-height: 2;">
									{{obj.title}}</h3>
								
							</div>
						</div> -->
					</el-main>
					<el-main>
						<div>
							<el-divider>
								<h3 class="el-icon-reading">长征知识</h3>
							</el-divider>
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
					},
				]
			}
		}
	}
</script>

<style>
</style>
