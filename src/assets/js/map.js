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
	return map;
};
//添加位置图层
const addlocation = async (map,url) => {
	let feature = await featureLayer({
		url: url
	});
	feature.bindPopup(function(layer) {
		return L.Util.template('<strong>{location}<p>{time}  {event}<p/></strong>', layer.feature.properties);
	});
	let layergroup = L.layerGroup([feature]).addTo(map);
	return layergroup;
};
//添加面线图层
const addpoly = async (map,url,layercolor) =>{
	let polygon = await featureLayer({
		url:url,
		style:{
			opacity:1,
			weight:0.5,
			color:layercolor,			
		}
	})
	polygon.bindTooltip(function(layer) {
		return L.Util.template('<strong>{location}</strong>', layer.feature.properties);
	}).openTooltip();
	let layergroup = L.layerGroup([polygon]).addTo(map);
	return layergroup;
}

//添加marker
const addmarker = async (map, position,pop) => {
	map.flyTo(position,7);
	let marker = await L.marker(position)
		.addTo(map)
		.bindPopup(pop)
		.openPopup();
	return marker;
};
//视角跳转
const changeview = (map,position) =>{
	map.flyTo(position,8);
};
//清除图层
const clear = (map) =>{
	map.eachLayer(function(layer){
		if(layer.layerType!="basemap"){
			map.removeLayer(layer);
		}
	})
};

export default {
	newMap,
	addlocation,
	addmarker,
	addpoly,
	clear,
	changeview
}
