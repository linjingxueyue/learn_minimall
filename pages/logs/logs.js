//logs.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imagepath: ''
  },
  selectimage() {
    // 系统API，让用户在相册中选择图片或者拍照

    wx.chooseImage({
      success: (res) => {
        var path = res.tempFilePaths[0]
        this.setData({
          imagepath: path
        })
      },
    })
  }

})