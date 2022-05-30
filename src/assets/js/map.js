import L from "leaflet"
import {
	featureLayer
} from "esri-leaflet"
//初始化地图
const newMap = (id) => {
	var Gaode = L.tileLayer.chinaProvider('GaoDe.Normal.Map', {
		maxZoom: 18,
		minZoom: 5
	});
	Gaode.layerType = "basemap";
	let map = L.map(id, {
		center: [33, 113],
		zoom: 5,
		layers: [Gaode],
		zoomControl: true,
	});
	// var feature = featureLayer({
	// 		url: "https://lyh.augurit.com/server/rest/services/ChangZheng/hongyilocation/FeatureServer/0"
	// 	})
	// 	.addTo(map);
	return map;
};
//添加特征图层
const createLayer = async (map) => {
	let feature = await featureLayer({
		url: "https://116.63.143.162/server/rest/services/changzheng/red1location/FeatureServer/0"
	});
	feature.bindPopup(function(layer) {
		return L.Util.template('<strong>{location}</strong>', layer.feature.properties);
	});
	let layergroup = L.layerGroup([feature]).addTo(map);
	return layergroup;
};
//添加marker
const addmarker = async (map, position) => {
	map.flyTo(position);
	let marker = await L.marker(position)
		.addTo(map)
		.bindPopup(`<p>于都——长征第一渡<br>中央、军委机关、红军总部和毛泽东、朱德、周恩来、张闻天、博古就是从于都县城东门的渡口渡过于都河开始长征的。<br /></p>`)
		.openPopup();
	return marker;
};

const clear = (map) =>{
	map.eachLayer(function(layer){
		if(layer.layerType!="basemap"){
			map.removeLayer(layer);
		}
	})
};

export default {
	newMap,
	createLayer,
	addmarker,
	clear
}
