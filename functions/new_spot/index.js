// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
    env: "cloud-tirp-89b834"
})
const db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()

  await db.collection('top').add({
    // data 字段表示需新增的 JSON 数据
    data: event
  })
    .then(res => {
      console.log(res)
    })

  return {
    event,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
  }
}