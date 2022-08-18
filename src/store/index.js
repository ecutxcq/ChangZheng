import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	layercolor:'#ff0000f5',
    describe:'none',
	name:'none',
	imgsrc:"../assets/img/于都.png",
	show:false,
	mapurl:'https://server.tctc.com/server/rest/services/changzheng/hongyilocation/FeatureServer/0',
	timeitem:[],
	timeshow:false,
	cardshow:false,
	legendshow:false
}

const getters = {
    getdescribe() {
        return state.describe;
    },
	getname(){
		return state.name;
	},
	getimg(){
		return state.imgsrc;
	},
	getshow(){
		return state.show;
	},
	getmap(){
		return state.mapurl;
	},
	getitem(){
		return state.timeitem;
	},
	getcolor(){
		return state.color;
	},
	gettimeshow(){
		return state.timeshow;
	},
	getcarshow(){
		return state.cardshow;
	},
	getlegendshow(){
		return state.legendshow;
	}
}
const mutations = {
    setdescribe(state, value) {
        state.describe = value;
    },
	setname(state,value){
		state.name = value
	},
	setimg(state,value){
		state.imgsrc = value
	},
	setshow(state,value){
		state.show = value
	},
	setmap(state,value){
		state.mapurl = value
	},
	setitem(state,value){
		state.timeitem = value
	},
	setcolor(state,value){
		state.layercolor = value
	},
	settimeshow(state,value){
		state.timeshow = value
	},
	setcardshow(state,value){
		state.cardshow = value
	},
	setlegendshow(state,value){
		state.legendshow = value;
	}
}

const store = new Vuex.Store({
    state,
    getters,
    mutations
});

export default store;


