
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

//创建store的时候要配置好里面需要管理的state,getters,mutations,actions
const others = {
    state, getters, mutations, actions
}

export default others