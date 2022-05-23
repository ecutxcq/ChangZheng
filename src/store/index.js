import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    describe:'123',
}

const getters = {
    getdescribe() {
        return state.describe;
    }
}
const mutations = {
    setdescribe(state, value) {
        state.describe = value;
    }
}

const store = new Vuex.Store({
    state,
    getters,
    mutations
});

export default store;


