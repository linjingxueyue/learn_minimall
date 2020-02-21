//index.js

//获取应用实例对象
var app = getApp()
console.log("全局对象",app.globalData.age)
var gloal_age = app.globalData.age
var gloal_name = app.globalData.name


Page({
  /**
   * 页面的初始数据
   */
  data: {
    name:'linjing',
    movies:['金属','奎因','阿卡丽'],
    counter:0
  },
  btnclickadd(){
    // 1: 错误做法，此时界面 不会更新，尽管数值已经发生改变
    // console.log('btnclick', this.data.counter)
    // this.data.counter +=1;
    // 2： 正确做法
    this.setData({
      counter: this.data.counter +=1
    })
  },
  btnclicksub(){
    this.setData({
      counter: this.data.counter -= 1
    })
  },
  btnclick_getuserinfo(event){
    console.log('btnclick_getuserinfo: ',event.detail)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('index pages onShow')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('index pages hide')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})