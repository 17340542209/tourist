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
     title:""
    }
  },

 methods: {
  onload:function(option){
    wx.getStorage({
      key: 'key',
       function(res){
          console.log(res.data)
      },
    })
  }
},
}
</script>