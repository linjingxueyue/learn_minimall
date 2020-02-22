//index.js
//获取应用实例
Page({

  /**
   * 页面的初始数据
   */
  data: {
    obj: {
      name: "linjing",
      age: 18
    }
  },
  input(){
    console.log(' input ')
  },
  focus(){
    console.log(' focus ')
  },
  blur(){
    console.log(' blur ')
  }
})