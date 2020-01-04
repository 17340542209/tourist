<<template>
    <div>
      <!-- <button class="btn" size="mini" type="success" @click='fresh'>刷新</button> -->
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
      {title:"重庆三天两夜游记"},
    ] 
  }
},
//   methods: {
//     fresh(){
//     //   const that = this
//       wx.getStorage({
//         key: 'position',
//         success (res){
//         console.log(res.data)
//         //   const item = {};
//         //   item.upstatus = res.data;
//         //   that.titles.push(item)
//         //   console.log(that.upstatues)
//           }
//         })
//     }
//   },
 }
</script>

<style scoped>
.btn{
  background:#FFFFCC;
  float: right;
}
</style>