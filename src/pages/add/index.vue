<template>
  <div>
    <i-panel >
        <i-input :value="title" type="textarea" mode="wrapped"  placeholder="填写标题会有更多赞哦~" />
        <i-input :value="key" type="textarea" mode="wrapped" placeholder="为您的分享添加一个关键字吧" />
        <i-input :value="cntent" type="textarea" mode="wrapped" placeholder="添加正文" i-class="btn" />
    </i-panel>
     <i-button @click="handleClick" type="success" shape="circle">发布</i-button>
  </div>
</template>

<script>
export default {
    data(){
        return{
            title:"",
            key:"",
            content:"",
        }
    },
}

</script>

<style scope>

</style>