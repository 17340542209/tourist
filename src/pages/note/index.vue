<template>
    <div>
      <button class="btn" size="mini" type="success" @click='fresh'>刷新</button>
      <i-panel v-for="title in titles" :key="title" >
        <view style="padding: 15px;">{{title.title}}</view>
      </i-panel>
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
      const that = this
      wx.getStorage({
        key: 'title',
        success (res){
          // console.log(typeof(res.data))
          const item = {};
          item.title = res.data;
          that.titles.push(item)
          console.log(that.titles)
          }
        })
    }
  },
}
</script>

<style scoped>
.btn{
  background:#FFFFCC;
  float: right;
}
</style>