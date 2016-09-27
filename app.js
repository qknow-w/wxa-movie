// 创建应用程序对象
App({
  // ========== 全局数据对象（整个应用程序共享） ==========
  globalData: {
    hasLogin: false,
  },

  // ========== 应用程序全局方法 ==========
  fetchApi (url, callback) {
    // return callback(null, top250)
    wx.request({
      url,
      data: {},
      header: { 'Content-Type': 'application/json' },
      success (res) {
        callback(null, res.data)
      },
      fail (e) {
        callback(e)
      }
    })
  },

  //生命周期

  //当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
  onLauch(){

    console.log("APP launch");

  },

  //当小程序启动，或从后台进入前台显示，会触发 onShow
  onShow () {
  console.log('App Show')
  },

  //当小程序从前台进入后台，会触发 onHide
  onHide () {
    console.log('App Hide')
  }
})
