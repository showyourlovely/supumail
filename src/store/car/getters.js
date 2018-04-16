export default {
    // totalMoney: (state) => {
    //     // let total = 0;
    //     return state.cars.reduce( (total) => {
    //         total.price
    //     })
    // }
    
    totalAll (state) {//计算总数和总价钱
       let total = { money: 0, num: 0 }
       state.cars.forEach(good => {
        total.money += good.price * good.num
        total.num += good.num
       });
       return total
    }
}