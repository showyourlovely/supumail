import { ADD_GOOD } from './actionTypes'
import { REDUCE_GOOD } from './actionTypes'
export default{
    // 我们可以使用 ES2015 风格的计算属性命名功能来使用一个常量作为函数名
    ADD_GOOD (state,goodInfo) {
        // mutate state
        let isHas = state.cars.some( good => {
            if( good.id === goodInfo.id ) {
                good.num++
                return true
            }
            return false
        })

        if ( !isHas ) {
            goodInfo.num = 1
            state.cars.push( goodInfo )
            state.cars = state.cars.slice()
            console.log(state)
            console.log(state.cars)
        }
    },
    REDUCE_GOOD (state,goodInfo) {
        // mutate state
        state.cars = state.cars.filter( good => {
            if( good.id === goodInfo.id ) {
                good.num--
                if( good.num <= 0 ){
                    return false
                }
                return true
            }
            return true
        })
    }
    
}