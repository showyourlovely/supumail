<template>
    <div class="login">
        <header>
            <i class="fa fa-chevron-left"></i>
            <h4>顺丰优选登录</h4>
            <i></i>
        </header>
        <div class="login_body">
            <input type="text">
            <input type="text">
            <input type="text">
        </div>
    </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
    *{box-sizing: border-box;}
    .login{
        display:flex;
        flex-direction: column;
        header{
            display: flex;
            width: 100%;
            height: .4rem;
            justify-content: space-between;
            align-items: center;
            h4{
                width: 100%;
                height: .4rem;
                font-size: 0.16rem;
                color: #000000;
                line-height: .4rem;
            }
            i{
                width:.4rem;
                height:.4rem;
                line-height: .4rem;
                text-align: center
            }
        }
    }
    
</style>