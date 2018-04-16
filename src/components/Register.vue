<template>
    <div class="login">
        <header>
            <i class="fa fa-chevron-left"></i>
            <h4>优选注册</h4>
            <i></i>
        </header>
        <div class="login_body">
            <label for=""><input type="text" placeholder="请输入手机号"></label>
            <label for=""><input type="text" placeholder="请输入图形验证码"><i class="yzm"></i></label>
            <label for=""><input type="text" placeholder="请输入验证码"><i class="yzm">发送验证码</i></label>
            <label for=""><input type="password" placeholder="设置密码（6-18位字母和数字的组合）"></label>
            <span class="ts"></span>
            <button>注册</button>
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
        align-items: center;
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
        .login_body{
            display: flex;
            width:100%;
            flex: 1;
            flex-direction: column;
            align-items: center;
            padding: .12rem;
            label{
                width: 100%;
                border-bottom: 1px solid #ccc;
                display: flex;
                justify-content: space-between;
                align-items: center;
                .forget{
                    text-decoration: none;
                    font-size: .14rem;
                    color: #333;
                }
                i{
                    width:.85rem;
                    height: .34rem;
                    background: #f00;
                }
                input{
                    width: 2rem;
                    height:.46rem;
                    border:0;
                    
                }
                
            }
            .ts{
                height:.36rem;
                width:100%;
            }
            button{
                width:100%;
                height:.36rem;
                border-radius: 3px;
                color: #fff;
                border:0;
                background:#ccc
            }
            .register{
                text-decoration: none;
                margin-top: .25rem;
                font-size: .14rem;
                color: #333;
            }
        }
        
    }
    
</style>