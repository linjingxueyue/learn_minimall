//index.js
//获取应用实例
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titles:["流行","新款","热销"],
    counter:0
  },

  add_click(event){
    console.log(event,event.detail)
    this.setData({
      counter: this.data.counter +1
    })
  },
  update_btnclick(){
    var myselect = this.selectComponent('.select-mycpn')
    myselect.setData({
      title:"我在主页面修改了组件的title"
    })
  }
})