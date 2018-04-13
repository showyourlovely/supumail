<template>
  <div>
    <div class="swiper-container1">
        <div class="swiper-wrapper">
            <div v-for="item in bannerList" class="swiper-slide" :key="item.id">
                <img :src="item.imageUrl" :alt="item.name">
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import '../../../node_modules/swiper/dist/css/swiper.min.css'
import '../../../node_modules/swiper/dist/js/swiper.min.js'
export default {
name: 'appBanner',
    data () {
        return {
            bannerList:[]
        }
    },
    methods: {
        getBanners () {
        //    https://m.maizuo.com
            // 请求的真正接口前面的/mz其实只是一个暗号
            this.$http.get('/mz/v4/api/billboard/home',{
                params:{
                    __t:Date.now()
                }
            }).then( res => {
                this.bannerList = res.data.data.billboards
                // 作为一个 Promise 使用 (2.1.0 起新增，详见接下来的提示)
                this.$nextTick(function () {
                    // DOM 更新了
                    var mySwiper = new Swiper('.swiper-container1', {
                        freeMode : false,
                        autoplay : true,
                        slidesPerView : 'auto',
                    })
                })
            })
        }
    },
    created(){
        this.getBanners()
    },
    // updated(){
    //     var mySwiper = new Swiper('.swiper-container', {
    //         freeMode : false,
    //     })
    // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
h1, h2 {
  font-weight: normal;
}
img {
    width: 100%;
}
</style>
