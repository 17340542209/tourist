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
        <image :src="img" style="width:100%" />
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
    <i-card v-for="item in top" :key="item" i-class="split" :title="item.name" :extra="item.keyWord" :thumb="item.image">
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
       { title:"线路",image:"/static/images/1.png"},
       { title:"酒店",image:"/static/images/2.png"},
       { title:"景点",image:"/static/images/3.png"},
       { title:"攻略",image:"/static/images/4.png"},
     ],
     top:[
       {name:"攻略1",keyWord:"关键字1",image:"https://i.loli.net/2017/08/21/599a521472424.jpg",content:"内容1"},
       {name:"攻略2",keyWord:"关键字2",image:"图片1",content:"内容2"},
       {name:"攻略3",keyWord:"关键字3",image:"图片1",content:"内容3"},
       {name:"攻略4",keyWord:"关键字4",image:"图片1",content:"内容4"},
     ],
     imgUrls:[
       'https://i.loli.net/2017/08/21/599a521472424.jpg',
       'https://i.loli.net/2017/08/21/599a521472424.jpg',
       'https://i.loli.net/2017/08/21/599a521472424.jpg',
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
     let url='../list/main?type=' + type
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