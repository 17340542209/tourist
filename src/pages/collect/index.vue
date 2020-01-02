<template>
    <div>
      <i-panel >
        <view style="padding: 15px;">{{title}}</view>
      </i-panel>
    </div>
</template>

<script>
export default {
  data () {
    return {
      title:wx.getStorageSync('title')
    }
  },
  onload:function(options){
    console.log (this.data.title)
  }
}
</script>