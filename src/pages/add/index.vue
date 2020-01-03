<template>
  <div>
    <i-panel>
        <i-input :value="title" @change="changeTitle($event)" type="textarea" mode="wrapped"  placeholder="填写标题会有更多赞哦~" />
        <i-input :value="key" @change="changeKey($event)" type="textarea" mode="wrapped" placeholder="为您的分享添加一个关键字吧" />
        <i-input :value="content"  @change="changeContent($event)" type="textarea" mode="wrapped" placeholder="添加正文" i-class="btn" />
    </i-panel>
    <i-button @click="handleClick" type="success" shape="circle">发布</i-button>
    <i-toast id="toast" />
  </div>
</template>

<script>
const { $Toast } = require('../../../static/dist/base/index');
export default {
    data(){
        return{
            title:"",
            key:"",
            content:"",
        }
    },

methods: {
    changeTitle(event) {
      console.log(event)
      this.title = event.mp.detail.detail.value
    },
    changeKey(event) {
      console.log(event)
      this.key = event.mp.detail.detail.value
    },
    changeContent(event) {
      console.log(event)
      this.content = event.mp.detail.detail.value
    },    
    handleClick() {
      wx.setStorage({
        key:"key",
        data:"this.title"
      })  
      if (this.title && this.key && this.content) {
        let event = {
          title: this.title,
          key: this.key,
          content: this.content,
          image: 'cloud://edu-868a10.6564-edu-868a10/food/4.png'
        }
        wx.cloud.callFunction({ name: 'new_spot', data: event }).then(
          res => {
            console.log(res)
          }
        )
        $Toast({
          content: '分享成功',
          type: 'success'
        });
       } else {
        $Toast({
          content: '请填写完整信息',
          type: 'warning'
        });
      }
    }
  }
}
</script>

<style scope>

</style>