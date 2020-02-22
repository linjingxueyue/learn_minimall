export default function request(options) {
  return new Promise((res, rej) => {
    wx.request({
      url: options.url,
      method: options.method || 'get',
      success: res,
      fail: rej
    })
  })
}