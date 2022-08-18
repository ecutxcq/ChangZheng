<template>
	<div id="card">
		<transition name="el-zoom-in-center" style="background-color: black;">
			<div v-show="show" class="transition-box">
				<el-carousel style="width: 370px;" indicator-position="none" :autoplay=false >	
					<el-carousel-item v-for="obj in mem" :key="obj.id" id="item">
						<el-tooltip content="点击查看场馆所在地" placement="right-start" effect="light">
						  <h3 class="medium" id="title" style="cursor: pointer;" @click="addmarkers(obj.position,obj.pop)">{{obj.name}}</h3>
						</el-tooltip>
						<div style="width: 280px;position: absolute;left: 45px;margin-top: 0;"><p id="describe">{{obj.describe}}</p></div><el-link style="position: absolute;left: 25px;bottom: 25px;" @click="newwindow(obj.url)">详情</el-link><el-button icon="el-icon-close" style="position: absolute;right: 15px;bottom: 15px;" @click="close()"></el-button>
					</el-carousel-item>
				</el-carousel>
			</div>
		</transition>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				mem:[{
					id:1,
					position:[25.874865, 116.022311],
					name:"瑞金革命烈士纪念馆",
					img:require("../assets/img/四道防线.png"),
					pop:`<p>瑞金革命烈士纪念馆<br><img src="../assets/img/四道防线.png" style="width:240px;height:160px"><br/></p>`,
					url:"https://baike.baidu.com/item/%E7%91%9E%E9%87%91%E9%9D%A9%E5%91%BD%E7%BA%AA%E5%BF%B5%E9%A6%86/2504575?fr=aladdin",
					describe:"瑞金革命烈士纪念馆是为了纪念瑞金人民在中国共产党的领导下，同敌人进行了艰苦卓绝的斗争，35000多人为革命献出了宝贵的生命，英烈们为理想作出了重大贡献，在中国革命史上写下了光辉篇章。"
				},
				{
					id:2,
					position:[25.964213, 115.437133],
					name:"中央红军长征出发纪念园（馆）",
					img:" ",
					pop:`<p>会宁红军会师旧址<br><img src="img/会宁红军会师旧址.png" style="width:240px;height:160px"><br/></p>`,
					url:"https://baike.baidu.com/item/%E4%B8%AD%E5%A4%AE%E7%BA%A2%E5%86%9B%E9%95%BF%E5%BE%81%E5%87%BA%E5%8F%91%E5%9C%B0%E7%BA%AA%E5%BF%B5%E5%9B%AD/1715391?fr=aladdin",
					describe:"中央红军长征出发地纪念园位于江西省于都县城东门渡口，是为了纪念中央红军长征从于都出发，于2009年修建。"
				},
				{
					id:3,
					position:[39.377487, 99.83183],
					name:"中国工农红军西路军纪念馆",
					img:" ",
					pop:`<p>会宁红军长征胜利纪念馆<br><img src="img/红军长征胜利纪念馆.png" style="width:240px;height:160px"><br/></p>`,
					url:"https://baike.baidu.com/item/%E4%B8%AD%E5%9B%BD%E5%B7%A5%E5%86%9C%E7%BA%A2%E5%86%9B%E8%A5%BF%E8%B7%AF%E5%86%9B%E7%BA%AA%E5%BF%B5%E9%A6%86/762100?fr=aladdin",
					describe:"中国工农红军西路军纪念馆位于有“塞上江南、北凉古都”之称的甘肃省张掖市，园内掩埋着转战河西、血战高台而壮烈牺牲的红五军军长董振堂、政治部主任杨克明等3000多名红西路军革命烈士的忠骨。"
				},
				{
					id:4,
					position:[26.655401, 102.248584],
					name:"会理县红军长征纪念馆",
					img:" ",
					pop:`<p>会理县红军长征纪念馆<br><img src="../assets/img/四道防线.png" style="width:240px;height:160px"><br/></p>`,
					url:"https://baike.baidu.com/item/%E4%BC%9A%E7%90%86%E5%8E%BF%E7%BA%A2%E5%86%9B%E9%95%BF%E5%BE%81%E7%BA%AA%E5%BF%B5%E9%A6%86/16612275?fr=aladdin",
					describe:"会理县红军长征纪念馆属专题性纪念馆，展览以毛泽东的著名诗句“金沙水拍云崖暖”为主题，采用图文并茂、实物陈列、文物复制、场景复原、以及多媒体影像等新的陈列方式来进行展出。"
				},
				{
					id:5,
					position:[26.320224, 109.637904],
					name:"湖南通道转兵纪念馆",
					img:" ",
					pop:`<p>湖南通道转兵纪念馆<br><img src="../assets/img/四道防线.png" style="width:240px;height:160px"><br/></p>`,
					url:"https://baike.baidu.com/item/%E6%B9%96%E5%8D%97%E9%80%9A%E9%81%93%E8%BD%AC%E5%85%B5%E7%BA%AA%E5%BF%B5%E9%A6%86/16533141?fr=aladdin",
					describe:"湖南通道转兵纪念馆位于湖南省西南边陲通道侗族自治县，是为了更好地弘扬长征精神，保护革命文物，纪念通道会议而建设的纪念馆。"
				},
				{
					id:6,
					position:[25.611033, 110.661927],
					name:"红军长征突破湘江纪念馆",
					img:" ",
					pop:`<p>红军长征突破湘江纪念馆<br><img src="../assets/img/四道防线.png" style="width:240px;height:160px"><br/></p>`,
					url:"https://baike.baidu.com/item/%E7%BA%A2%E5%86%9B%E9%95%BF%E5%BE%81%E7%AA%81%E7%A0%B4%E6%B9%98%E6%B1%9F%E7%BA%AA%E5%BF%B5%E9%A6%86/58007930?fr=aladdin",
					describe:"红军长征突破湘江纪念馆位于广西桂林兴安县，纪念了湘江战役中，红军将士浴血奋战七昼夜，以折损过半的沉重代价突破湘江封锁线。"
				},
				{
					id:7,
					position:[26.23715, 109.145922],
					name:"黎平会议纪念馆",
					img:" ",
					pop:`<p>黎平会议纪念馆<br><img src="../assets/img/四道防线.png" style="width:240px;height:160px"><br/></p>`,
					url:"http://www.lphy.org.cn/#/",
					describe:"黎平会议纪念馆陈列展厅分“战略转移，北上抗日”、“伟大转折的起点——黎平会议”、“走向胜利”、“红色记忆”、“今日黎平”5个部分，生动形象地展现了黎平会议在中国革命史上的地位和作用。"
				},
				{
					id:8,
					position:[34.139361, 103.929266],
					name:"腊子口战役纪念馆",
					img:" ",
					pop:`<p>腊子口战役纪念馆<br><img src="../assets/img/四道防线.png" style="width:240px;height:160px"><br/></p>`,
					url:"http://www.lzkzyjng.com/",
					describe:"腊子口战役纪念馆纪念了腊子口战役的光辉战绩和缅怀在这场战役中牺牲的革命烈士。"
				},
				{
					id:9,
					position:[29.918091, 102.237383],
					name:"泸定桥革命文物陈列馆",
					img:" ",
					pop:`<p>泸定桥革命文物陈列馆<br><img src="../assets/img/四道防线.png" style="width:240px;height:160px"><br/></p>`,
					url:"https://baike.baidu.com/item/%E6%B3%B8%E5%AE%9A%E6%A1%A5%E9%9D%A9%E5%91%BD%E6%96%87%E7%89%A9%E9%99%88%E5%88%97%E9%A6%86/10246756?fr=aladdin",
					describe:"泸定桥革命文物陈列馆里，陈列着实物、图片、资料240余件，真实地展现了大渡河战役和泸定桥战斗的历史原貌。"
				},
				{
					id:10,
					position:[29.2802, 102.290934],
					name:"中国工农红军强渡大渡河纪念馆",
					img:" ",
					pop:`<p>中国工农红军强渡大渡河纪念馆<br><img src="../assets/img/四道防线.png" style="width:240px;height:160px"><br/></p>`,
					url:"https://baike.baidu.com/item/%E7%BA%A2%E5%86%9B%E5%BC%BA%E6%B8%A1%E5%A4%A7%E6%B8%A1%E6%B2%B3%E7%BA%AA%E5%BF%B5%E9%A6%86/17381682?fr=aladdin",
					describe:"中国工农红军强渡大渡河纪念馆展厅以弘扬红军精神为主题，分为长征、大渡河战役、红军长征过安雅、翼王悲歌、历史评述等五个部分。"
				},
				{
					id:11,
					position:[28.282421, 106.005499],
					name:"四渡赤水纪念馆",
					img:" ",
					pop:`<p>四渡赤水纪念馆<br><img src="../assets/img/四道防线.png" style="width:240px;height:160px"><br/></p>`,
					url:"http://www.sdcs1935.com/",
					describe:"四渡赤水纪念馆由中央军委原副主席张震题写馆名，分战史陈列和辅助陈列两部分陈列进行，再现了红军遵义会议后在毛泽东等的领导下，取得战略转移伟大胜利的光辉历史。辅助陈列包括“四渡赤水精神，光耀革命老区”专题书画展，彭德怀、杨尚昆同志住室复原等，馆内收藏红军文物300余件。"
				},
				{
					id:12,
					position:[25.541179, 113.361007],
					name:"红军长征粤北纪念馆",
					img:" ",
					pop:`<p>红军长征粤北纪念馆<br><img src="../assets/img/四道防线.png" style="width:240px;height:160px"><br/></p>`,
					url:"https://baike.baidu.com/item/%E7%BA%A2%E5%86%9B%E9%95%BF%E5%BE%81%E7%B2%A4%E5%8C%97%E7%BA%AA%E5%BF%B5%E9%A6%86/23926566?fr=aladdin",
					describe:"红军长征粤北纪念馆依托红军长征过境粤北并留下丰富红色遗迹资料的史实，旨在将分散在粤北地区的各类红军历史文物、文献纳入加以保护，形成一个以纪念馆为中心辐射全省的红色教育基地，以更好地开展以红军长征为主题的爱国主义教育和党史军史教育。"
				},
				{
					id:13,
					position:[25.912299, 116.07972],
					name:"瑞金革命遗址",
					img:" ",
					pop:`<p>瑞金革命遗址<br><img src="../assets/img/四道防线.png" style="width:240px;height:160px"><br/></p>`,
					url:"https://baike.baidu.com/item/%E7%91%9E%E9%87%91%E9%9D%A9%E5%91%BD%E9%81%97%E5%9D%80/3449339?fr=aladdin",
					describe:"瑞金革命遗址位于江西省东南部、武夷山西麓的瑞金县。瑞金革命遗址主要集中在叶坪、沙洲坝、乌石垅、云石山等地。叶坪在瑞金东北月六公里处，中华苏维埃第一次全国代表大会就在这里召开，中央工农民主政府旧址也也位于此。"
				},
				{
					id:14,
					position:[25.45512, 115.16918],
					name:"红军长征第一仗百石战斗遗址",
					img:" ",
					pop:`<p>红军长征第一仗百石战斗遗址<br><img src="../assets/img/四道防线.png" style="width:240px;height:160px"><br/></p>`,
					url:"https://baike.baidu.com/item/%E7%99%BE%E7%9F%B3%E6%88%98%E6%96%97/53351459?fr=aladdin",
					describe:"百石战斗是长征以来的第一次战斗，并取得了胜利，标志着国民党军第一道封锁线被突破了。"
				},
				{
					id:15,
					position:[29.280283, 102.290863],
					name:"强渡大渡河遗址",
					img:" ",
					pop:`<p>强渡大渡河遗址<br><img src="../assets/img/四道防线.png" style="width:240px;height:160px"><br/></p>`,
					url:"https://baike.baidu.com/item/%E7%BA%A2%E5%86%9B%E5%BC%BA%E6%B8%A1%E5%A4%A7%E6%B8%A1%E6%B2%B3%E9%81%97%E5%9D%80/6515204?fr=aladdin",
					describe:"红军·强渡大渡河遗址位于石棉县安顺场。1935年5月，红一方面军渡过金沙江，由会理沿安宁河谷北上，抵达石棉县安顺场大渡河渡口。"
				},
				{
					id:16,
					position:[27.382324, 107.703014],
					name:"红军强渡乌江战斗遗址",
					img:" ",
					pop:`<p>红军强渡乌江战斗遗址<br><img src="../assets/img/四道防线.png" style="width:240px;height:160px"><br/></p>`,
					url:"https://baike.baidu.com/item/%E7%BA%A2%E5%86%9B%E5%BC%BA%E6%B8%A1%E4%B9%8C%E6%B1%9F%E6%88%98%E6%96%97%E9%81%97%E5%9D%80",
					describe:"红军强渡乌江战斗遗址距离瓮安县城45公里。1935年1月1日，毛泽东、朱德、周恩来等率领中央红军，经过3天3夜的顽强战斗，强渡乌江，击败黔军，向遵义挺进。"
				},
				{
					id:17,
					position:[35.697753, 105.058766],
					name:"会宁红军会师旧址",
					img:" ",
					pop:`<p>会宁红军会师旧址<br><img src="../assets/img/四道防线.png" style="width:240px;height:160px"><br/></p>`,
					url:"https://baike.baidu.com/item/%E4%BC%9A%E5%AE%81%E7%BA%A2%E5%86%9B%E4%BC%9A%E5%B8%88%E6%97%A7%E5%9D%80/8575533?fr=aladdin",
					describe:"会宁红军会师旧址位于甘肃省会宁县会师镇会师路，是为纪念中国工农红军第一、二、四方面军胜利会师而扩建的革命遗址。"
				},
				{
					id:18,
					position:[35.696021, 105.059751],
					name:"会宁红军长征胜利纪念馆",
					img:" ",
					pop:`<p>会宁红军长征胜利纪念馆<br><img src="../assets/img/四道防线.png" style="width:240px;height:160px"><br/></p>`,
					url:"https://baike.baidu.com/item/%E4%BC%9A%E5%AE%81%E7%BA%A2%E5%86%9B%E9%95%BF%E5%BE%81%E8%83%9C%E5%88%A9%E7%BA%AA%E5%BF%B5%E9%A6%86/12776835?fromtitle=%E7%BA%A2%E5%86%9B%E9%95%BF%E5%BE%81%E8%83%9C%E5%88%A9%E7%BA%AA%E5%BF%B5%E9%A6%86&fromid=9887194&fr=aladdin",
					describe:"会宁红军长征胜利纪念馆是会宁红军会师旧址重要组成部分。是一座集文物陈列和现代化多媒体展示为一体的纪念性展馆。纪念馆以'红军长征胜利'为主题，真实再现红军三大主力静宁会宁会师的英雄史诗。"
				},
				{
					id:19,
					position:[36.92968, 108.181288],
					name:"中央红军长征胜利纪念园",
					img:" ",
					pop:`<p>中央红军长征胜利纪念园<br><img src="../assets/img/四道防线.png" style="width:240px;height:160px"><br/></p>`,
					url:"https://baike.baidu.com/item/%E4%B8%AD%E5%A4%AE%E7%BA%A2%E5%86%9B%E9%95%BF%E5%BE%81%E8%83%9C%E5%88%A9%E7%BA%AA%E5%BF%B5%E5%9B%AD/12419083?fr=aladdin",
					describe:"中央红军长征胜利纪念园位于陕北革命老区吴起县，在胜利山“切尾巴战役”遗址建立。纪念园内包括的项目主要由中央红军长征胜利纪念碑、中央红军长征胜利纪念馆、红军烈士陵园等。"
				},
				{
					id:20,
					position:[36.933347, 108.183534],
					name:"吴起镇革命旧址",
					img:" ",
					pop:`<p>吴起镇革命旧址<br><img src="../assets/img/四道防线.png" style="width:240px;height:160px"><br/></p>`,
					url:"https://www.sohu.com/a/150567844_780948",
					describe:"吴起镇革命旧址位于延安市吴起县城内。1935年10月19日，中共中央率领中央红军经过二万五千里长征到达吴起镇，在吴起县胜利山彻底击退了国民党追兵，标志着红军长征的结束。"
				},
				{
					id:21,
					position:[35.966537, 109.004817],
					name:"富县直罗镇战役纪念馆",
					img:" ",
					pop:`<p>富县直罗镇战役纪念馆<br><img src="../assets/img/四道防线.png" style="width:240px;height:160px"><br/></p>`,
					url:"https://baike.baidu.com/item/%E7%9B%B4%E7%BD%97%E9%95%87%E6%88%98%E5%BD%B9%E6%97%A7%E5%9D%80/4421889?fr=aladdin",
					describe:"直罗镇战役旧址位于富县直罗镇直罗村一带。 直罗镇战役的胜利，彻底粉碎了敌人对陕北根据地的第三次“围剿”，给党中央把全国革命大本营放在西北的任务，举行了一个奠基礼。"
				},
				{
					id:22,
					position:[25.399716, 113.036481],
					name:"中央红军长征突破第三道封锁线指挥部旧址",
					img:" ",
					pop:`<p>中央红军长征突破第三道封锁线指挥部旧址<br><img src="../assets/img/四道防线.png" style="width:240px;height:160px"><br/></p>`,
					url:"https://baike.baidu.com/item/%E4%B8%AD%E5%A4%AE%E7%BA%A2%E5%86%9B%E9%95%BF%E5%BE%81%E7%AA%81%E7%A0%B4%E7%AC%AC%E4%B8%89%E9%81%93%E5%B0%81%E9%94%81%E7%BA%BF%E6%8C%87%E6%8C%A5%E9%83%A8%E6%97%A7%E5%9D%80/23812050?fr=aladdin",
					describe:"中央红军长征突破第三道防线指挥部旧址位于宜章县境内，是1934年11月长征初期中央红军突破国民党第三道防线时的指挥和活动中心。"
				},
				{
					id:23,
					position:[27.694643, 106.927126],
					name:"遵义会议会址",
					img:" ",
					pop:`<p>遵义会议会址<br><img src="../assets/img/四道防线.png" style="width:240px;height:160px"><br/></p>`,
					url:"https://baike.baidu.com/item/%E9%81%B5%E4%B9%89%E4%BC%9A%E8%AE%AE%E4%BC%9A%E5%9D%80/415831?fr=aladdin",
					describe:"遵义会议会址，位于贵州省遵义市红花岗区子尹路96号。遵义会议确立了以毛泽东为代表的新的中央领导集体，成为中国共产党的历史上一个生死攸关的转折点。"
				},
				{
					id:24,
					position:[35.824291, 105.847305],
					name:"将台堡红军会师纪念馆",
					img:" ",
					pop:`<p>将台堡红军会师纪念馆<br><img src="../assets/img/四道防线.png" style="width:240px;height:160px"><br/></p>`,
					url:"https://baike.baidu.com/item/%E5%B0%86%E5%8F%B0%E5%A0%A1%E7%BA%A2%E5%86%9B%E4%BC%9A%E5%B8%88%E7%BA%AA%E5%BF%B5%E9%A6%86/3075319?fr=aladdin",
					describe:"将台堡位于宁夏固原市西吉县南部葫芦河与马莲川河交汇处，距县城30公里。1936年10月22日，中国工农红军一、二、四方面军在将台堡会师，标志着红军长征胜利结束。"
				},
				{
					id:25,
					position:[30.374234, 102.818469],
					name:"红军长征翻越夹金山纪念馆",
					img:" ",
					pop:`<p>红军长征翻越夹金山纪念馆<br><img src="../assets/img/四道防线.png" style="width:240px;height:160px"><br/></p>`,
					url:"https://baike.baidu.com/item/%E7%BA%A2%E5%86%9B%E9%95%BF%E5%BE%81%E7%BF%BB%E8%B6%8A%E5%A4%B9%E9%87%91%E5%B1%B1%E7%BA%AA%E5%BF%B5%E9%A6%86/10949568?fr=aladdin",
					describe:"红军长征翻越夹金山纪念馆位于四川省雅安市宝兴县县城西侧的青衣江畔，占地面积约4500平方米，是为了追忆史诗般的红军长征，弘扬红军长征精神，继承先辈优良传统而修建。"
				},
				{
					id:26,
					position:[33.676523, 103.357544],
					name:"包座战役遗址",
					img:" ",
					pop:`<p>包座战役遗址<br><img src="../assets/img/四道防线.png" style="width:240px;height:160px"><br/></p>`,
					url:"https://baike.baidu.com/item/%E5%8C%85%E5%BA%A7%E6%88%98%E5%BD%B9%E9%81%97%E5%9D%80/3159268",
					describe:"包座战役遗址位于若尔盖县求吉乡和包座乡交界处，1935年8月29日红三十军和红四军发动包座战役，经过一天一夜的英勇奋战，取得重大胜利，打开了北上的通道，使红军北出四川创建川陕甘根据地的计划得以实现。"
				},
				]
			}
		},
		methods:{
			newwindow(url){
				window.open(url)
			},
			//添加marker
			addmarkers(position,pop) {
				this.$parent.removelayer();
				this.$parent.addMarker(position,pop);
			},
			change(){
				console.log("切换");
			},
			//关闭模块
			close(){
				this.$store.commit('setcardshow', false);
			}
			
		},
		computed:{
			show(){
				return this.$store.state.cardshow;
			}
		}
	}
</script>

<style>
	#item{
		background-color: white;
	}
	#card{
		border-radius: 4px;
		display: flex;
		position: absolute;
		left: 7%;
		top: 0px;
	}
	#describe{
		color: black;
		font-weight: 100;
		font-size: 18px
	}
	#title{
		color: black;
		margin-top: 10px;
		height: 5px;
	}
</style>