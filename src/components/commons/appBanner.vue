<template>
  <div>
    <h1>{{ msg }}</h1>
    <button @click="getBanners">获取</button>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="https://pic.maizuo.com/h5PicUpload/65b08dba38aca8c44d78872e4723eaa9.jpg" alt=""></div>
            <div class="swiper-slide"><img src="https://pic.maizuo.com/h5PicUpload/5060be84ba0c02a89bea04f4e7eff9e0.jpg" alt=""></div>
            <div class="swiper-slide"><img src="https://pic.maizuo.com/h5PicUpload/65b08dba38aca8c44d78872e4723eaa9.jpg" alt=""></div>
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
            msg: '这是banner'
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
                console.log(res) 
            } )
        }
    },
    updated(){
        var mySwiper = new Swiper('.swiper-container', {
            autoplay: true,//可选选项，自动滑动
        })
    }
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
