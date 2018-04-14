<template>
  <div class="ite">
      <div v-for="item in itemList" :key="item.productId">
        <router-link
                :to="{name: 'detail',params: { id: item.productId}}">{{item.productName}}</router-link>
        <img :src="item.imageUrl" alt="">
      </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import '../../node_modules/swiper/dist/css/swiper.min.css'
import '../../node_modules/swiper/dist/js/swiper.min.js'
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
  }
</style>
