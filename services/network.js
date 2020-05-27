export default function request(option){
  return new Promise((resolve, reject)=>{
    wx.showLoading({
      title: '数据加载ing',
    })
    wx.request({
      url: option.url,
      method: option.method || 'get',
      timeout:option.timeout || 5000,
      data: option.data || {},
      success(res){
        resolve(res.data);
      },
      fail:reject,
      complete(res){
        wx.hideLoading();
      }
    })
  });
}