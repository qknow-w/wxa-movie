// 拿到全局应用程序实例
const app = getApp()

const API_URL = 'https://api.douban.com/v2/movie/top250'

console.log("message",window.fetch);



// 创建一个页面对象用于控制页面的逻辑
Page({
  data: {
    title: '加载中...',
    movies: [],
    loading: true,
    start:0, //开始
    count:20
  },

  onLoad () {
    //调用应用实例的方法获取全局数据
    app.fetchApi(API_URL+`?start=${this.data.start}&count=${this.data.count}`, (err, data) => {
      //更新数据
      this.setData({ title: "小电影Top250", movies: data.subjects, loading: false })
    })
  },

  //下拉刷新
  loadMore(){
    this.setData({
      loading: true,
      count:this.data.count*2
    })
    app.fetchApi(API_URL+`?start=${this.data.start}&count=${this.data.count}`, (err, data) => {
      //更新数据
      this.setData({  movies: data.subjects, loading: false})
    })
  }
})
