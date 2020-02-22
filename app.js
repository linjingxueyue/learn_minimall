App({
  globalData: {
    code: 'sdasds',
    token: ''
  },
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function() {
    // 登录操作
    // 1： 先从本地取出token
    var token = wx.getStorageSync('token')
    if (token && token.length > 0) {
      // 已经有token,接下来判断token是否过期
      this.checktoken(token)
      console.log('------')
    } else {  // 没有token 进行登录操作
      this.login()
    }

  },
  login() {
    wx.login({
      success: (res) => {
        console.log(res)
        this.globalData.code = res.code
        wx.request({
          url: 'http://123.207.32.32:3000/login',
          method: "post",
          data: {
            code: res.code
          },
          success: (res) => {
            // 1: 将token 保存在globalData中
            this.globalData.token = res.data.token
            // 2: 进行本地存储
            wx.setStorageSync('token', res.data.token)
            console.log("token: ", this.globalData.token)
          },
          fail(res) {
            console.log("fail:　", res)
          }
        })
      }
    })
  },
  checktoken(token){
    wx.request({
      url: 'http://123.207.32.32:3000/auth',
      method:"post",
      header:{
        token
      },
      success:(res)=>{
        if(!res.data.errCode){
          this.globalData.token = token
        }else{
          this.login()
        }
      }
    })
  }
})