<template>
	<div id="system">
		<div id="map" class="map-main"></div>
		<navbar></navbar>
		<timeline :show="show"></timeline>
	</div>
</template>

<script>
	import {
		featureLayer
	} from "esri-leaflet";
	import '../assets/js/render.js'
	import navbar from '../components/navbar.vue';
	import timeline from '../components/timeline.vue';

	export default {
		name: 'system',
		components: {
			navbar,
			timeline
		},
		data() {
			return {
				map: null,
				show: true
			}
		},
		mounted() {
			var Gaode = L.tileLayer.chinaProvider('GaoDe.Normal.Map', {
				maxZoom: 18,
				minZoom: 5
			});
			this.map = L.map("map", {
				center: [33, 113],
				zoom: 5,
				layers: [Gaode],
				zoomControl: true,
			});
			addmarker(this.map);
		},
		methods: {
			init() {	
				//添加红一位置图层
				var hongyiweizhi = featureLayer({
					url: 'https://lyh.augurit.com/server/rest/services/ChangZheng/hongyilocation/FeatureServer/0',
				}).addTo(this.map);
				hongyiweizhi.bindPopup(function(layer) {
					return L.Util.template('<strong>{location}</strong>', layer.feature.properties);
				});
				addmarker(this.map);
			},
			addlayers() {
				var featurelayer = featureLayer({
					url: 'https://lyh.augurit.com/server/rest/services/ChangZheng/hongyilocation/FeatureServer/0',
				}).addTo(this.map)
				featureLayer.bindPopup(function(layer) {
					return L.Util.template('<strong>{location}</strong>', layer.feature.properties);
				});
			},
			addmarker(map) {
				// this.map.flyTo([25.9518, 115.4154]);
				var marker = L.marker([25.9518, 115.4154])
					.addTo(map)
					.bindPopup(`<p>于都——长征第一渡<br>中央、军委机关、红军总部和毛泽东、朱德、周恩来、张闻天、博古就是从于都县城东门的渡口渡过于都河开始长征的。<br /></p>`)
					.openPopup();
			}
		},

	}
</script>

<style>
	.map-main {
		z-index: 0;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: #CCC;
	}
</style>
