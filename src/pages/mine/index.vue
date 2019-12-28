<template>
  <div>
    <view class="userinfo">
    <view class="userinfo-avatar">
    <open-data type="userAvatarUrl"></open-data>
    </view>
    <open-data type="userNickName"></open-data>
    </view>
  <block  v-for=" item in userListInfo" :key="item">
    <view class="b2" @click="goType(item)">
        <view class="b3" >
          <image :src="item.image"></image>
        </view>
        <view class="b4">
          <view>{{item.text}}</view>
        </view>
        <view class="listimage" style='background-image:url(/static/images/jiantou.png);'></view>
    </view>
  </block>
  </div>
</template>

<script>

export default {
  data () {
    return {
      userListInfo:[
        {image:"/static/images/biji.png",text:"我的笔记",zhuan:"file",url: "../collect/main"},
        {image:"/static/images/zan.png",text:"我的赞",zhuan:"like"},
        {image:"/static/images/shoucang.png",text:"我的收藏",zhuan:"collect"},
        ]
   }
  },

  methods: {
      goType(type){
      console.log(type)
      // let url='../collect/main?'+type.zhuan;
      let url = type.url;
      mpvue.navigateTo( {url} )
      }
  },

  created () {
  
}
}

</script>

<style scoped>
.userinfo {
  position: relative;
  width: 750rpx;
  height: 320rpx;
  color: #666;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.userinfo-avatar {
  overflow:hidden;
  display: block;
  width: 160rpx;
  height: 160rpx;
  margin: 20rpx;
  margin-top: 50rpx;
  border-radius: 50%;
  border: 2px solid #fff;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
}

.b2{
  position:relative;
  display: flex;
  padding: 15px;
  align-items: center;
  border-bottom: 1px solid #F5F5F5;
  background-color: white;
  padding-top: 20PX;
}
.head{
  overflow: hidden;
  border-radius: 60%;
  width:240rpx;
  height:240rpx;
  margin:16rpx 60rpx;
}
.name{
  line-height: 60rpx;
  width:280rpx;
  height:240rpx;
  margin:100rpx 50rpx;
  font-size: 96rpx;
}
.float{
  float:left;
}
.listimage{
  position:absolute;
  top:18px;
  right:25px;
  width: 25px;
  height:25px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.b3{
  display:inline-block;
  width:20px;
  margin-right: 5px;
}
.b3 image{
  width:100%;
  height: 20px;
  vertical-align: -2px;
}
.b4{
  display: inline-block;
  font-size: 14px;
  color:black;
}
</style>
