<template>
    <div class="floor">
    <app-banner></app-banner>


      <div class="floor_one">


        <ul class="shoplist">
          <li v-for='item in shopList' class="shop-1" :key="item.productId">
            <router-link
            :to='{name: "detail", params: { id: item.productId } }'>
              <div class="p-img">
                  <img class="" :src="item.imageUrl">
              </div>
              <div class="p-info">
                  <div class="p-lable"><span class="sp1"></span></div>
                  <div class="p-name omit1">{{item.productName}}</div>
                  <div class="p-price">￥{{item.sfbestPrice}}</div>
              </div>

            </router-link>
          </li>
        </ul>
        <ul class="shoplist">
          <li v-for='item in shopList' class="shop-1" :key="item.productId">
            <a href="">
              <div class="p-img">
                  <img class="" :src="item.imageUrl">
              </div>
              <div class="p-info">
                  <div class="p-lable"><span class="sp1"></span></div>
                  <div class="p-name omit1">{{item.productName}}</div>
                  <div class="p-price">￥{{item.sfbestPrice}}</div>
              </div>
            </a>
          </li>
        </ul>


      </div>




    </div>    

</template>

<script>
  import appBanner from './commons/appBanner' 


export default {
  name: 'Index',
  data () {
    return {
      msg: '这是index',
      shopList:[ ]
    }
  },
  components: {
    appBanner
  },
  methods: {
    getId () {
    //    https://m.maizuo.com
        // 请求的真正接口前面的/mz其实只是一个暗号
        this.$http.get('/sf/getAppFloorDetailById',{
            params:{
                floorId: 11
            }
        }).then( res => {
          console.log(res)
            this.shopList = res.data.data.appfloor.productArray
        } )
    }
  },
  created(){
    this.getId()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang=scss scoped >
*{box-sizing:border-box}
  .floor{
    display: flex;
    flex: 1;
    overflow: auto;
    flex-direction: column;

    .floor_one{
      display: flex;
      flex:1;
      flex-direction: column;
      .shoplist{
        padding:0 2%;
        li{
          height: 1.64rem;
          width: 30%;
          margin: 0 1.6%;
          float:left;
          a{
            text-decoration: none;
          }
          .p-img{
            width: .92rem;
            height: .92rem;
            img{
              width: 100%;
              height:100%;
            }
          }
          .omit1 {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
        .p-lable {
          height: 0.15rem;
          padding-top: 0.02rem;
        }
      }
    }

  }
</style>
