import echarts from '../js/echarts'
import axios from 'axios'
import '../js/leafletecharts4'
const addrender = (map) => {
	var geoCoordMap = {
		'于都': [115.4154, 25.9518],
		'兴安': [110.6714, 25.6117],
		'通道': [109.7844, 26.1579],
		'黎平': [109.1371, 26.2292],
		'翁安': [107.4758, 27.0859],
		'遵义': [106.8292, 27.5362],
		'习水': [106.2038, 28.3274],
		'禄劝': [102.4714, 25.5513],
		'石棉': [102.3594, 29.2279],
		'泸定': [102.2347, 29.9141],
		'夹金山': [102.7365, 30.8103],
		'毛儿盖': [103.0614, 32.6028],
		'包座': [103.3766, 33.4729],
		'腊子口': [103.9061, 34.0693],
		'吴起': [108.1758, 36.9272],
		'直罗': [109.0042, 35.9644],
		'会宁': [105.0533, 35.6929],
		'将台堡': [105.8499, 35.8234]
	};
	var czData = [
		[{
			name: '于都'
		}, {
			name: '于都',
			value: 90
		}],
		[{
			name: '于都'
		}, {
			name: '兴安',
			value: 90
		}],
		[{
			name: '兴安'
		}, {
			name: '通道',
			value: 90
		}],
		[{
			name: '通道'
		}, {
			name: '翁安',
			value: 90
		}],
		[{
			name: '翁安'
		}, {
			name: '遵义',
			value: 90
		}],
		[{
			name: '遵义'
		}, {
			name: '习水',
			value: 90
		}],
		[{
			name: '习水'
		}, {
			name: '禄劝',
			value: 90
		}],
		[{
			name: '禄劝'
		}, {
			name: '石棉',
			value: 90
		}],
		[{
			name: '石棉'
		}, {
			name: '泸定',
			value: 90
		}],
		[{
			name: '泸定'
		}, {
			name: '夹金山',
			value: 90
		}],
		[{
			name: '夹金山'
		}, {
			name: '毛儿盖',
			value: 90
		}],
		[{
			name: '毛儿盖'
		}, {
			name: '包座',
			value: 90
		}],
		[{
			name: '包座'
		}, {
			name: '腊子口',
			value: 90
		}],
		[{
			name: '腊子口'
		}, {
			name: '吴起',
			value: 90
		}],
		[{
			name: '吴起'
		}, {
			name: '直罗',
			value: 90
		}],
		[{
			name: '直罗'
		}, {
			name: '会宁',
			value: 90
		}],
		[{
			name: '会宁'
		}, {
			name: '将台堡',
			value: 90
		}],

	];



	// var planePath = 'image://src/assets/img/火苗.png';
	var planePath =
		'path://M496 814.272L246.848 945.28a32 32 0 0 1-46.432-33.728l47.584-277.44-201.6-196.48a32 32 0 0 1 17.76-54.592l278.56-40.48 124.576-252.416a32 32 0 0 1 57.408 0l124.576 252.416 278.56 40.48a32 32 0 0 1 17.728 54.592l-201.568 196.48 47.584 277.44a32 32 0 0 1-46.4 33.728L496 814.272z';

	var convertData = function(data) {
		var res = [];
		for (var i = 0; i < data.length; i++) {
			var dataItem = data[i];
			var fromCoord = geoCoordMap[dataItem[0].name];
			var toCoord = geoCoordMap[dataItem[1].name];
			if (fromCoord && toCoord) {
				res.push({
					fromName: dataItem[0].name,
					toName: dataItem[1].name,
					coords: [fromCoord, toCoord]
				});
			}
		}
		return res;
	};

	var color = ['red'];
	var series = [];
	[
		['长征', czData]
	].forEach(function(item, i) {
		series.push({
			name: item[0],
			type: 'lines',
			zlevel: 1,
			effect: {
				show: true,
				period: 6,
				trailLength: 0.7,
				color: '#fff',
				symbolSize: 3
			},
			lineStyle: {
				normal: {
					color: color[i],
					width: 0,
					curveness: 0.2
				}
			},
			data: convertData(item[1])
		}, {
			name: item[0],
			type: 'lines',
			zlevel: 2,
			effect: {
				show: true,
				period: 6,
				trailLength: 0,
				symbol: planePath,
				symbolSize: 15
			},
			lineStyle: {
				normal: {
					color: color[i],
					width: 1,
					opacity: 0.6,
					curveness: 0.2
				}
			},
			data: convertData(item[1])
		}, {
			name: item[0],
			type: 'effectScatter',
			coordinateSystem: 'geo',
			zlevel: 2,
			rippleEffect: {
				brushType: 'stroke'
			},
			label: {
				normal: {
					show: true,
					position: 'right',
					formatter: '{b}'
				}
			},
			symbolSize: function(val) {
				return val[2] / 15;
			},
			itemStyle: {
				normal: {
					color: color[i]
				}
			},
			data: item[1].map(function(dataItem) {
				return {
					name: dataItem[1].name,
					value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
				};
			})
		});
	});

	var option = {
		//backgroundColor: '#404a59',
		title: {
			text: '',
			left: 'center',
			textStyle: {
				color: '#fff'
			}
		},
		tooltip: {
			trigger: 'item'
		},
		legend: {
			orient: 'vertical',
			bottom: 30,
			left: 'right',
			data: ['长征'],
			textStyle: {
				color: '#fff'
			},
			selectedMode: 'single'
		},
		geo: {
			map: '',
			label: {
				emphasis: {
					show: false
				}
			},
			roam: true,
			itemStyle: {
				normal: {
					areaColor: '#323c48',
					borderColor: '#404a59'
				},
				emphasis: {
					areaColor: '#2a333d'
				}
			}
		},
		series: series
	};
	L.overlayEcharts(option).addTo(map);
}

const addroad = (map) => {
	var geoCoordMap = {
		'于都': [115.4154, 25.9518],
		'兴安': [110.6714, 25.6117],
		'通道': [109.7844, 26.1579],
		'黎平': [109.1371, 26.2292],
		'翁安': [107.4758, 27.0859],
		'遵义': [106.8292, 27.5362],
		'习水': [106.2038, 28.3274],
		'禄劝': [102.4714, 25.5513],
		'石棉': [102.3594, 29.2279],
		'泸定': [102.2347, 29.9141],
		'夹金山': [102.7365, 30.8103],
		'毛儿盖': [103.0614, 32.6028],
		'包座': [103.3766, 33.4729],
		'腊子口': [103.9061, 34.0693],
		'吴起': [108.1758, 36.9272],
		'直罗': [109.0042, 35.9644],
		'会宁': [105.0533, 35.6929],
		'将台堡': [105.8499, 35.8234]
	};
	var czData = [
		[{
			name: '于都'
		}, {
			name: '于都',
			value: 90
		}],
		[{
			name: '于都'
		}, {
			name: '兴安',
			value: 90
		}],
		[{
			name: '兴安'
		}, {
			name: '通道',
			value: 90
		}],
		[{
			name: '通道'
		}, {
			name: '翁安',
			value: 90
		}],
		[{
			name: '翁安'
		}, {
			name: '遵义',
			value: 90
		}],
		[{
			name: '遵义'
		}, {
			name: '习水',
			value: 90
		}],
		[{
			name: '习水'
		}, {
			name: '禄劝',
			value: 90
		}],
		[{
			name: '禄劝'
		}, {
			name: '石棉',
			value: 90
		}],
		[{
			name: '石棉'
		}, {
			name: '泸定',
			value: 90
		}],
		[{
			name: '泸定'
		}, {
			name: '夹金山',
			value: 90
		}],
		[{
			name: '夹金山'
		}, {
			name: '毛儿盖',
			value: 90
		}],
		[{
			name: '毛儿盖'
		}, {
			name: '包座',
			value: 90
		}],
		[{
			name: '包座'
		}, {
			name: '腊子口',
			value: 90
		}],
		[{
			name: '腊子口'
		}, {
			name: '吴起',
			value: 90
		}],
		[{
			name: '吴起'
		}, {
			name: '直罗',
			value: 90
		}],
		[{
			name: '直罗'
		}, {
			name: '会宁',
			value: 90
		}],
		[{
			name: '会宁'
		}, {
			name: '将台堡',
			value: 90
		}],

	];

	var convertData = function(data) {
		var res = [];
		for (var i = 0; i < data.length; i++) {
			var dataItem = data[i];
			var fromCoord = geoCoordMap[dataItem[0].name];
			var toCoord = geoCoordMap[dataItem[1].name];
			if (fromCoord && toCoord) {
				res.push({
					fromName: dataItem[0].name,
					toName: dataItem[1].name,
					coords: [fromCoord, toCoord]
				});
			}
		}
		return res;
	};

	var color = ['red'];
	var series = [];
	[
		['长征', czData]
	].forEach(function(item, i) {
		series.push( {
			name: item[0],
			type: 'effectScatter',
			coordinateSystem: 'geo',
			zlevel: 2,
			rippleEffect: {
				brushType: 'stroke'
			},
			label: {
				normal: {
					show: true,
					position: 'right',
					formatter: '{b}'
				}
			},
			symbolSize: function(val) {
				return val[2] / 15;
			},
			itemStyle: {
				normal: {
					color: color[i]
				}
			},
			data: item[1].map(function(dataItem) {
				return {
					name: dataItem[1].name,
					value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
				};
			})
		});
	});

	var option = {
		//backgroundColor: '#404a59',
		title: {
			text: '',
			left: 'center',
			textStyle: {
				color: '#fff'
			}
		},
		tooltip: {
			trigger: 'item'
		},
		legend: {
			orient: 'vertical',
			bottom: 30,
			left: 'right',
			data: ['长征总路线'],
			textStyle: {
				color: '#fff'
			},
			selectedMode: 'single'
		},
		geo: {
			map: '',
			label: {
				emphasis: {
					show: false
				}
			},
			roam: true,
			itemStyle: {
				normal: {
					areaColor: '#323c48',
					borderColor: '#404a59'
				},
				emphasis: {
					areaColor: '#2a333d'
				}
			}
		},
		series: series
	};
	L.overlayEcharts(option).addTo(map);
}

const addarea = (map) => {
	var myChart = echarts.init(map);
	axios.get("/长征根据地.json").then(function(response) {
		echarts.registerMap('xch', response);

		var name_title = "红军人数统计"
		var nameColor = " rgb(0, 0, 155)"
		var name_fontFamily = '等线'

		var name_fontSize = 25;
		var mapName = 'xch';
		var hours = ['1934年10月', '1934年11月', '1935年1月', '1935年1月', '1935年5月', '1935年6月', '1935年8月'];
		var value = [
			[{
					name: '中央革命根据地',
					value: [116.3195, 26.4823, 86800]
				}

			],
			[{
				name: '湘赣革命根据地',
				value: [114.14839, 27.30855, 30000]
			}],
			[{
				name: '闽浙赣革命根据地',
				value: [118.22166, 28.42293, 37000]
			}],
			[{
				name: '湘粤赣革命根据地',
				value: [114.03485, 29.15220, 24000]
			}],
			[{
				name: '鄂豫皖革命根据地',
				value: [115.85187, 31.78659, 22000]
			}],
			[{
				name: '湘鄂川黔革命根据地',
				value: [110.6323, 29.49889, 20000]
			}],
			[{
				name: '陕甘宁革命根据地',
				value: [108.48524, 37.67804, 13000]
			}]

		];
		/*获取地图数据*/

		var max = 100000,
			min = 10000;
		var maxSize4Pin = 100,
			minSize4Pin = 20;

		var convertData = function(value) {
			var res = [];
			for (var i = 0; i < value.length; i++) {
				res.push(value[i]);
			}
			return res;
		};
	    var option = {
			timeline: {
				axisType: 'category',
				orient: 'vertical',
				autoPlay: true,
				inverse: true,
				playInterval: 1500,
				loop: true,
				left: null,
				right: 10,
				top: 20,
				bottom: 20,
				width: 55,
				height: null,
				label: {
					normal: {
						textStyle: {
							color: '#000'
						}
					},
					emphasis: {
						textStyle: {
							color: '#ff0000'
						}
					}
				},
				symbol: 'none',
				lineStyle: {
					color: '#555'
				},
				checkpointStyle: {
					color: '#bbb',
					borderColor: '#777',
					borderWidth: 2
				},
				controlStyle: {
					showNextBtn: false,
					showPrevBtn: false,
					normal: {
						color: '#666',
						borderColor: '#666'
					},
					emphasis: {
						color: '#aaa',
						borderColor: '#aaa'
					}
				},
				data: hours
			},

			baseOption: {
				tooltip: {
					trigger: 'item',
					formatter: function() {

					}
				},
				title: {
					text: name_title,

					x: 'center',
					textStyle: {
						color: nameColor,
						fontFamily: name_fontFamily,
						fontSize: name_fontSize
					},
					subtextStyle: {

						fontFamily: name_fontFamily
					}
				},

				visualMap: {
					show: true,
					min: min,
					max: max,
					left: 'left',
					top: 'bottom',
					text: ['人数'], // 文本，默认为数值文本
					calculable: true,
					seriesIndex: [1],
					inRange: {
						color: ['#edfbfb', '#b7d6f3', '#40a9ed', '#3598c1', '#215096', ]
					}
				},
				geo: {
					show: true,
					map: mapName,
					label: {
						normal: {
							show: false
						},
						emphasis: {
							show: false,
						}
					},
					roam: true,
					itemStyle: {
						normal: {
							areaColor: '#aaaaff',
							borderColor: '#3B5077',
						},
						emphasis: {
							areaColor: '#2B91B7',
						}
					}
				},
				series: [{
						name: '散点',
						type: 'scatter',
						coordinateSystem: 'geo',
						data: value[0],
						symbolSize: function(val) {
							return val[2] / 2000;
						},
						label: {
							normal: {
								formatter: '{b}',
								position: 'right',
								show: true
							},
							emphasis: {
								show: true
							}
						},
						itemStyle: {
							normal: {
								color: '#ffffff'
							}
						}
					},
					{
						name: '长征',
						type: 'map',
						map: mapName,
						geoIndex: 0,
						aspectScale: 0.75, //长宽比
						showLegendSymbol: false, // 存在legend时显示
						label: {
							normal: {
								show: true
							},
							emphasis: {
								show: false,
								textStyle: {
									color: '#fff'
								}
							}
						},
						roam: true,
						itemStyle: {
							normal: {
								areaColor: '#031525',
								borderColor: '#3B5077',
							},
							emphasis: {
								areaColor: '#2B91B7'
							}
						},
						animation: false,
						data: value[0]
					},
					{
						name: '点',
						type: 'scatter',
						coordinateSystem: 'geo',
						symbol: 'pin', //气泡
						symbolSize: function(val) {
							var a = (maxSize4Pin - minSize4Pin) / (max - min);
							var b = minSize4Pin - a * min;
							b = maxSize4Pin - a * max;
							return a * val[2] + b;
						},
						label: {
							normal: {
								show: true,
								textStyle: {
									color: '#0c0c0c',
									fontSize: 12,
									fontWeight: 'bold'
								},
								formatter: '{@[2]}'
							}
						},
						itemStyle: {
							normal: {
								color: '#0055ff', //标志颜色
							}
						},
						zlevel: 6,
						data: value[0],
					},
					{
						name: 'Top 5',
						type: 'effectScatter',
						coordinateSystem: 'geo',
						data: [],
						symbolSize: function(val) {
							return val[2] / 1000;
						},
						showEffectOn: 'render',
						rippleEffect: {
							brushType: 'stroke'
						},
						hoverAnimation: true,
						label: {
							normal: {
								formatter: '{b}',
								position: 'right',
								show: true
							}
						},
						itemStyle: {
							normal: {
								color: 'red',
								shadowBlur: 10,
								shadowColor: 'red'
							}
						},
						zlevel: 1
					}

				]
			},
			options: []
		};
		for (var n = 0; n < hours.length; n++) {
			option.options.push({
				title: {
					subtext: hours[n],
				},

				series: [{
						data: value[n]
					},
					{
						data: value[n]
					},
					{
						data: value[n]
					},
					{
						data: convertData(value[n].sort(function(a, b) {
							return b.value[2] - a.value[2];
						}).slice(0, 5))
					}

				]

			});
		}
		myChart.setOption(option);
	})
}






export default {
	addrender,
	addarea,
	addroad
}
