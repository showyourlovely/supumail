<template>
  <div class="ite">
    <div class="swiper-container2">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in imgList" :key="index">
                <img :src="item">
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
        {{itemName}}
  </div>
</template>

<script>
import Swiper from 'swiper'
import '../../node_modules/swiper/dist/css/swiper.min.css'
import '../../node_modules/swiper/dist/js/swiper.min.js'
export default {
  name: 'detail',
  data () {
    return{
      imgList:[],
      itemName:"",
    }
  },
  watch: {
    '$route' (to, from) {
      // 对路由变化作出响应...
      this.getDetail()
    }
  },
  created(){
    this.getDetail()
  },
  methods: {
    getDetail () {
        this.$http.get('/sf/newproduct/info/',{
          params:{
            productId: this.$route.params.id
          }
        })
        .then( res => {
            this.$nextTick(function () {
              var mySwiper = new Swiper('.swiper-container2', {
                observer:true,
                observeParents:true,
                autoplay : true,
                slidesPerView : 1,
                pagination: {
                    el: '.swiper-pagination'
                },
              })
                // DOM 更新了
            console.log(res)
            this.itemName = res.data.data.product.productName
            this.imgList = res.data.data.product.imageUrls
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
<style scoped lang="scss">
  .swiper-container2{
    width: 3.2rem;
    height: 3.2rem;
    position: relative;
    img{
      width: 100%;
      height: 100%;
    }
  }
</style>
