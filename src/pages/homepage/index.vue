<template>
  <div>
    <swiper
    :indicator-dots="indicatorDots"
    :autoplay="autoplay"
    :interval="interval"
    :duration="duration"
    >
    <block v-for="img in imgUrls" :key="img">
      <swiper-item>
        <image :src="img" style="width:1000px height:1000px" />
      </swiper-item>
    </block>
    </swiper>
  <i-grid i-class="no-border">
    <i-grid-item @click="goType(grid)" v-for="grid in grids" :key="grid" i-class="no-border">
        <i-grid-icon>
            <image :src="grid.image" />
        </i-grid-icon>
        <i-grid-label>{{grid.title}}</i-grid-label>
    </i-grid-item>
  </i-grid>

  <i-panel :title="title_name">
    <block v-for=" item in top" :key="item">
    <i-card i-class="split" :title="item.name" :thumb="item.image">
      <view slot="footer">{{item.keyWord}}</view>
      <view slot="content">{{item.content}}</view>
    </i-card>
    <view class="tool">
  <view class="tool-item" catchtap='onUpTop' data-post-id="post.postId">
    <image src="/static/images/dianzan.png"></image>
    <text>{{post.upNum}}</text>
  </view>
  <view class="tool-item comment" catchtap='onCommentTap' data-post-id="post.postId">
    <image src="/static/images/pinlun.png"></image>
    <text>{{post.commentNum}}</text>
  </view>
  <view class="tool-item" @click='on' data-post-id="post.postId">
   <image v-show="post.collectionStatus" src="/static/images/collect.png"></image>
   <image v-show="post.collectionStatus2" src="/static/images/_collect.png"></image>
    <text>{{post.upNum}}</text>
  </view>
</view>
  </block>
  </i-panel>
  </div>
</template>

<script>

const { $Toast } = require('../../../static/dist/toast/index');
export default {
  data () {
    return {
     title_name:"热门攻略",
     grids:[
       { title:"地图",image:"/static/images/1.png"},
       { title:"酒店",image:"/static/images/2.png"},
       { title:"景点",image:"/static/images/3.png"},
       { title:"攻略",image:"/static/images/4.png"},
     ],
     top:[
       {name:"武汉之粮道街过早",keyWord:"粮道街 过早",image:"/static/images/liangdaojie.jpg",content:"从去年国庆开始就一直说要去粮道街过早，直到今年的五月份才去，这就是懒惰的女大学生，周六早上八点多起床突发奇想要去，去了也就临近中午了，装作过早的样子，以下几个是我觉得好吃的：爆浆生煎，桂林米粉，七个蛋烘糕，赵师傅油饼包烧麦"},
       {name:"重庆三天两夜游记",keyWord:"贫民窟女孩 学生党",image:"/static/images/CQ.jpg",content:"由于这是小李同学心血来潮做的一次旅游攻略，做的不好还请大家多多见谅。那么开始喽"},
       {name:"最全西安攻略",keyWord:"1000块三天三夜玩转西安",image:"/static/images/shanxi.jpg",content:"西安交通 地铁：zfb搜索'西安电子地铁卡'绑定即可 公交：zfb搜索'长安通电子卡'绑定即可"},
     ],
     imgUrls:[
       '/static/images/wuhan1.jpg',
       '/static/images/xian1.jpg',
       '/static/images/chongqing1.jpg',
     ],
     indicatorDots:false,
     autoplay:false,
     interval:5000,
     duration:1000,
     post: {
       collectionStatus: true,
       collectionStatus2: false,
     }
    }
  },
  methods: {
   goType(type) {
     console.log(type)
     let url='../list/main?type=' + type.title
     mpvue.navigateTo({ url })
   },
   //更新本地的点赞、评论信息、收藏、阅读量
updatePostData(category){
    var itemData = this.getPostItemById(),
     postData = itemData.data,
    allPostData = this.getAllPostData();
    switch(category){
        case 'collect':
          //处理收藏
          if(!postData.collectionStatus){
            //如果当前状态是未收藏
            postData.collectionNum++;
            postData.collectionStatus = true;
          }else{
            //如果当前状态是已收藏
            postData.collectionNum--;
            postData.collectionStatus = false;
          }
          break;
        case 'up':
          if(!postData.upStatus){
            postData.upNum++;
            postData.upStatus = true;
            }else{
              postData.upNum--;
              postData.upStatus = false;
            }
            break;
          
        default:break;
    }
    //更新缓存数据库  
    allPostData[itemData.index] = postData;
    this.execSetStorageSync(allPostData);
    return postData;
},   
    collect(){
      return this.updatePostData('collect');
    },

  on() {
      this.post.collectionStatus = !this.post.collectionStatus;
      this.post.collectionStatus2 = !this.post.collectionStatus2;
     
      this.onLoad();
  },

  
  onLoad() {
      wx.showToast({
     title:newData.collectionStatus?"收藏成功":"收藏取消",
    //  duration:1000,
    //  icon:"sucess",
     make:true
     })
  }
  }
}
</script>

<style scoped>
.tool{
  height: 64rpx;
  text-align: right;
  line-height: 64rpx;
  margin: 20rpx 28rpx 20rpx 0;
}
.tool-item{
  display: inline-block;
  vertical-align: top;
  margin-right: 30rpx;
}
.tool-item image{
  height: 30rpx;
  width: 30rpx;
  vertical-align: -3px;
  margin-right: 10rpx;
}
.comment image{
  transform: scale(.85);
}
div >>> .no-border {
  border-width: 0pt;
}
div >>> .split {
  margin-bottom: 10pt;
}
</style>