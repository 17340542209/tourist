<template>
    <div>
      <i-panel v-for="title in titles" :key="title" >
        <view style="padding: 15px;">{{title.title}}</view>
      </i-panel>
      <button @click='fresh'>刷新</button>
    </div>
</template>

<script>
export default {
  data () {
    return {
    titles:[
      {title:"重庆完全攻略"},
      {title:"上海韩国街最全美食攻略"},
      {title:"迪士尼拍照姿势"},
    ] 
  }
},
 methods: {
   fresh(){
    wx.getStorage({
    key: 'key',
    success (res) {
    console.log(res.data)
  }
})
   }
 },
 }
</script>