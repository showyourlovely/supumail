<template>
    <div class="login">
        <header>
            <i class="fa fa-chevron-left"></i>
            <h4>顺丰优选登录</h4>
            <i></i>
        </header>
        <div class="login_body">
            <label for=""><input type="text" placeholder="请输入手机号/邮箱/用户名"></label>
            <label for=""><input type="password" placeholder="请输入密码"><a class="forget" href="">忘记密码？</a></label>
            <label for=""><input type="text" placeholder="请输入图形验证码"><i class="yzm"></i></label>
            <span class="ts"></span>
            <button>登录</button>
            <a href="" class="register">手机快速注册</a>
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
                .yzm{
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