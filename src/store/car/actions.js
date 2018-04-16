import { ADD_GOOD, REDUCE_GOOD } from './actionTypes'
export default {
    add_good ( {commit},goodInfo ){
        commit(ADD_GOOD,goodInfo)
    },
    reduce_good ( {commit},goodInfo ){
        commit(REDUCE_GOOD,goodInfo)
    }
}