import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    describe:'none',
	name:'none',
	imgsrc:"../assets/img/于都.png",
	show:false
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
	}
}

const store = new Vuex.Store({
    state,
    getters,
    mutations
});

export default store;


