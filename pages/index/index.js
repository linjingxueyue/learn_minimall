 import request from "../../utils/network.js"
 //index.js
 //获取应用实例
 Page({

   /**
    * 页面的初始数据
    */
   data: {

   },

   /**
    * 生命周期函数--监听页面加载
    */
   onLoad: function(options) {
     request({
       url: 'http://123.207.32.32:8000/api/hy/recommend'
     }).then(res => {
       console.log(res)
     })
   },
   showtap() {
     wx.showToast({
       title: 'linjjing-toast test',
       icon: 'loading',
       mask: true,
       duration: 1000
     })
   },
   showmodel() {
     wx.showModal({
       title: "model_标题",
       content: "副标题",
       success(res) {
         console.log('i am ok', res.confirm, res.cancel)
       },
       fail() {
         console.log('i am terrible')
       },
       complete() {
         console.log(('i am complete'))
       }
     })
   },
   showLoading() {
     wx.showLoading({
       title: 'loading...',
       success(res) {
         console.log(res)
       }
     })
     setTimeout(() => {
       wx.hideLoading()
     }, 2000)
   },
   showActionSheet() {
     wx.showActionSheet({
       itemList: ['a', 'b', 'c'],
       itemColor: "black",
       success(res) {
         console.log(res)
       }
     })
   },
   onShareAppMessage(options) {
     console.log(options)
     return {
       title: "linjing 的小程序",
       imageUrl: "http://s3.mogucdn.com/mlcdn/c45406/180927_141h3e6je4gf79ih0f8g1359ll894_640x960.jpg_320x999.jpg"
     }
   }
 })