<template>
    <div>
        <i-input :value="comment" @change="changeComment($event)" type="textarea" mode="wrapped"  placeholder="说出你的看法" />
        <i-button @click="successComment" type="success" shape="circle">发送</i-button>
    </div>
</template>

<script>
export default {
    data:{
      comment:""
    },
    methods: {
      changeComment (event) {
      this.comment = event.mp.detail.value
    },
    successComment(){
      if (this.comment=='') {
        wx.showToast({
          title: "请说出你的想法呦",
          icon: 'success',
          duration: 2000
        })
      } else {
        wx.navigateBack({
          delta: 1
        })
        wx.showToast({
          title: '评论成功',
          icon: 'none',
          duration: 2000
        })
      }
    },
  },
}
</script>
