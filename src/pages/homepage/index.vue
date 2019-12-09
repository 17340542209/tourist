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
    <view style="padding: 15px;">
    <i-card v-for="item in top" :key="item" i-class="split" :title="item.name" :thumb="item.image">
      <view slot="footer">{{item.keyWord}}</view>
      <view slot="content">{{item.content}}</view>
    </i-card>
   </view>
</i-panel>
  </div>
</template>

<script>


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
     duration:1000
    }
  },


  methods: {
   goType(type){
     console.log(type)
     let url='../list/main?type=' + type.title
     mpvue.navigateTo({ url })
   }
  },

  created () {
  
}
}
</script>

<style scoped>
div >>> .no-border {
  border-width: 0pt;
}
div >>> .split {
  margin-bottom: 10pt;
}
</style>