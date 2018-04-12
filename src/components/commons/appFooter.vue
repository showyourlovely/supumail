<template>
    <div class="menu-tab">
        <a href="javascript:;">
            <span class="menu-item">
                <i class="fa fa-pinterest-square"></i>
                首页
            </span>
        </a>
        <a href="javascript:;">
            <span class="menu-item">
                <i class="fa fa-th-large"></i>
                分类
            </span>
        </a>
        <a href="javascript:;">
            <span class="menu-item">
                <i class="fa fa-dot-circle-o"></i>
                发现
            </span>
        </a>
        <a href="javascript:;">
            <span class="menu-item">
                <i class="fa fa-opencart"></i>
                购物车<i class="category-bg num" style="display:none !important;">0</i>
            </span>
        </a>
        <a href="javascript:;">
            <span class="menu-item">
                <i class="fa fa-user-circle"></i>
                我的优选
            </span>
        </a>
    </div>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .menu-tab{
        width: 100%;
        height: .46rem;
        background: fff;
        display: flex;
        justify-content: space-around;
        align-items: center;
        a{
            box-sizing: border-box;
            display: flex;
            align-items: center;
            justify-content: space-around;
            width: 20%;
            height: 100%;
            padding: 0.03rem 0;
            font-size: 0.12rem;
            color: #000;
            text-decoration:none;
            span{
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
                font-size: .1rem;
                i{
                    font-size:.18rem;
                    color:#ccc;
                    margin-bottom: .04rem;
                }
            }
        }
    }

</style>
