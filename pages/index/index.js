//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '人脸组',
  },
  go_main: function(param){
    wx.navigateTo({
      url: '/pages/main/main'
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
})
