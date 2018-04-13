<template>
  <div class="search-box">
    <div class="address"><span id="user-postion-name" class="omit1">北京</span><i class="fa fa-caret-down"></i></div>
    <div class="search"><i class="fa fa-search"></i><span>出游踏青</span></div>
  </div>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .search-box{
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 90%;
        height: .42rem;
        padding: .06rem .12rem;
        background: #fff;
        .address{
            width: .5rem;
            font-size: .12rem;
            display: flex;
            align-items: center;
            justify-content: center;
            .omit1{
                margin-right: .08rem;
            }
            .fa-caret-down{
                font-size:.03rem;
            }
        }
        .search{
            display: flex;
            align-items: center;
            justify-content: center; 
            width: 2rem;
            height:.26rem;
            font-size: .12rem;
            color: #7c7c7c;
            background-color: #f7f7f7;
            .fa-search{
                margin-right: .06rem
            }
            
        }
    }

</style>
