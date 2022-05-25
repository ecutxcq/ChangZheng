import echarts from '../js/echarts'
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
		'path://M830.386555 223.731092c-146.285714 34.420168-172.10084 154.890756-154.890757 223.731093C572.235294 326.991597 572.235294 197.915966 572.235294 0c-326.991597 120.470588-249.546218 473.277311-258.15126 576.537815-77.445378-68.840336-94.655462-223.731092-94.655463-223.731092C133.378151 395.831933 90.352941 516.302521 90.352941 610.957983c0 232.336134 189.310924 413.042017 421.647059 413.042017s421.647059-189.310924 421.647059-413.042017c0-137.680672-103.260504-206.521008-103.260504-387.226891z';

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

export default {
	addrender
}
