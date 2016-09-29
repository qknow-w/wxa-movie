// 拿到全局应用程序实例
const app = getApp()

const API_URL = 'https://api.douban.com/v2/movie/in_theaters'




// 创建一个页面对象用于控制页面的逻辑
Page({
  data: {
    title: '加载中...',
    movies: [],
    loading: true,
  },

  onLoad () {
    //调用应用实例的方法获取全局数据
    // app.fetchApi(API_URL, (err, data) => {
    //   //更新数据
    //   this.setData({ title: data.title, movies: data.subjects, loading: false })
    // })


    //Cannot read property 'then' of undefined

    // wx.request({
    //   API_URL,
    //   header: { 'Content-Type': 'application/json'}
    // }).then(function(data){
    //   console.log("message",data);
    //
    // })

  //  use promise
    app.fetchApiPromise(API_URL).then((data) => {
      console.log("message",data);
      this.setData({ title: data.title, movies: data.subjects, loading: false })
    },(err) => {
      this.setData({ title: "数据加载出错，请重新获取"})
    })


  }
})
