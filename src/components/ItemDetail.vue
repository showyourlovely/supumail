<template>
  <div class="ite">
      <mt-cell
        v-for="item in itemList" 
        :key="item.productId"
        :to="{name: 'detail',params: { id: item.productId}}"
        is-link
        :label=item.productName>
        <img slot="icon" :src="item.imageUrl" width="90" height="90">
        <span>{{item.sfbestPrice}}</span>
        <mt-button 
          @click.native.stop.prevent="handleClick({id:item.productId,title:item.productName,price:item.sfbestPrice})"
          type="danger"
          size="small">加入购物车
        </mt-button>
      </mt-cell>
  </div>
</template>

<script>
import Swiper from 'swiper'
import '../../node_modules/swiper/dist/css/swiper.min.css'
import '../../node_modules/swiper/dist/js/swiper.min.js'
import { mapMutations,mapActions } from 'vuex'
export default {
  name: 'ItemDetail',
  data () {
    return{
      itemList:[]
    }
  },
  watch: {
    '$route' (to, from) {
      // 对路由变化作出响应...
      this.getItem()
    }
  },
  created(){
    this.getItem()
  },
  methods: {
    ...mapActions({
      handleClick:'add_good'
    }),
    getItem () {
        this.$http.get('/sf/getHomeTabDetail',{
          params:{
            pageNo: 1,
            pageSize: 10,
            appModelId: this.$route.params.id
          }
        })
        .then( res => {
            this.$nextTick(function () {
                // DOM 更新了
            this.itemList = res.data.data.appModelPage.appModel.appModelProductResource
            })
        } )
    }

  },
  beforeDestroy(){
    this.itemList = []
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
  .ite{
    overflow: auto;
    font-size: .12rem;
  }
  mt-cell{
    margin-top: 5px;
  }
</style>
