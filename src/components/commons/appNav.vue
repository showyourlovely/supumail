<template>
  <div>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <router-link v-for='(item) in navList'
                tag="li"
                :to="{name: 'itemDetail',params: { id: item.appModelId}}"
                :key='item.appModelId'
                class="swiper-slide">
                    {{item.appModelName}}
                </router-link>
            </div>
            <i class="fa fa-th-large" aria-hidden="true"></i>
        </div>
  </div>

</template>

<script>
import Swiper from 'swiper'
import '../../../node_modules/swiper/dist/css/swiper.min.css'
import '../../../node_modules/swiper/dist/js/swiper.min.js'
export default {
name: 'appNav',
    data () {
        return {
            navList:[],
        }
    },
    methods: {
        getNavs () {
        //    https://m.maizuo.com
            // 请求的真正接口前面的/mz其实只是一个暗号
            this.$http.get('/sf/getModels?type=2',{
                params:{
                    
                }
            }).then( res => {
                this.navList = res.data.data.appModels
                this.$nextTick(function () {
                    // DOM 更新了
                    var mySwiper = new Swiper('.swiper-container', {
                        freeMode : false,
                        slidesPerView : 'auto',
                    })
                })
            } )
        }
    },
    created(){
        this.getNavs()
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
.router-link-active {
    color: #0f9029;
    border-bottom: 0.02rem solid #0f9029;
}
.top-nav {
    display: flex;
    flex-wrap: nowrap;
    width: 7.8rem;
}
.swiper-container{
    position: relative;
}
.fa{
    position: fixed;
    display: block;
    width: .4rem;
    text-align: center;
    color: #cccccc;
    background: #ffffff;
    right: 0;
    top: 0.42rem;
    line-height: .3rem;
    z-index: 9;
}
.swiper-slide{
    width: .5rem !important;
    height: .3rem;
    line-height: .3rem;
    margin: 0 0.1rem;
    padding: 0.04rem 0 0.07rem;
    color: #000000;
    text-align: center;
    box-sizing: border-box;
}
i{
    display: block;
    width: .2rem;
}
</style>
