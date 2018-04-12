<template>
  <div class="hello">

  </div>
</template>

<script>


export default {
  name: 'Index',
  data () {
    return {
      msg: '这是index'
    }
  },
  components: {
    
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
        } )
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >

</style>
