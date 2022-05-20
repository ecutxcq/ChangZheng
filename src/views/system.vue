<template>
	<div id="system">
		<div id="map" class="map-main"></div>
		<navbar></navbar>
		<timeline :show="show"></timeline>
	</div>
</template>

<script>
	import { featureLayer } from "esri-leaflet"
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
				layers: null,
				show: true,
				mapurl: 'https://lyh.augurit.com/server/rest/services/ChangZheng/hongyilocation/FeatureServer/0',
			}
		},
		destroyed(){
			this.map = null;
		},
		mounted() {
			this.getMap();
			this.addLayer();
			this.addMarker();
		},
		methods: {
			getMap() {
				this.map = this.$map.newMap('map'); 
			},
			addLayer(){
				this.$map.createLayer(this.map);
			},
			addMarker(){
				this.$map.addmarker(this.map);
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
