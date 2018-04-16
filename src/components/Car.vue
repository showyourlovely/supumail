<template>
  <div class="ite">
    <mt-cell :title=item.title v-for="item of cars" :key=item.id>
      <img slot="icon" src="" width="24" height="24">
      <span>{{ item.price }}元</span>
      <mt-button 
      size="small"
          @click.native.stop.prevent="unHandleClick({id:item.id,title:item.title,price:item.price})"
          >-</mt-button>
      <input type="text" :value=item.num>
      <mt-button 
          size="small"
          @click.native.stop.prevent="handleClick({id:item.id,title:item.title,price:item.price})"
          >+</mt-button>
    </mt-cell>
    <p>欢迎您！{{newName}}</p>
    <h1>{{totalMoney}}</h1>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations} from 'vuex'
export default {
  name: 'Car',
  computed: {
    ...mapState({
      cars: state => state.a.cars
      }),
    ...mapGetters({
      newName: 'newName',
      totalAll: 'totalAll'
    }),
    totalMoney(){
      return "一共"+this.totalAll.money+"元"
    },
    totalNum(){
      return this.totalAll.num
    }
    
  },
  methods: {
    ...mapActions({
      handleClick:'add_good',
      unHandleClick: 'reduce_good'
    }),
  },
  mounted(){
    console.log(this)
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  input{
    height: 0.33rem;
    width: .4rem;
    text-align: center;
  }
  .ite{
    span {
      margin-right: .1rem
    }
  }
  h1{
    color: red;
    font: .25rem/.25rem "";
  }
</style>
