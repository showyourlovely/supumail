import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import car from './car'
import others from './others'
//创建store的时候要配置好里面需要管理的state,getters,mutations,actions
const store = new Vuex.Store({
    modules: {
        a: car,
        b: others
    }
})

export default store