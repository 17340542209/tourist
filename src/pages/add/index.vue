<template>
<div>
<i-panel >
    <i-input value="" type="textarea" mode="wrapped" autofocus placeholder="填写标题会有更多赞哦~" />
    <i-input value="" type="textarea" mode="wrapped" placeholder="为您的分享添加一个关键字吧" />
    <i-input value="" type="textarea" mode="wrapped" placeholder="添加正文" i-class="btn" />
</i-panel>
<i-button bind:click="handleClick" type="success" shape="circle" size="small">发布</i-button>
</div>
</template>

<script>
export default {
    data(){
        return{

        }
    }
}


  methods: {
   
   }

</script>

<style>
.bottom{
    width:200rpx;
    height:30rpx;
}
</style>