// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cartList:{},
    goodsTotal:{
      allChecked: false,
      total: 0,
      count: 0
    }
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
    const app = getApp();
    this.setData({
      cartList: app.data.cartList
    });
    // this._refreshGoodsTotal();
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

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

  },

  checkClick(e){
    this.setData({
      cartList: e.detail
    });
    this._refreshGoodsTotal();
    this._refreshAppGodds();
    this._refreshGoodsTotal();
  },

  allCheck(e){
    const cartList = this.data.cartList;
    let total = 0;
    for (const index in cartList) {
        cartList[index].checked = e.detail;
        e.detail && (total += cartList[index].price * cartList[index].count);
    }
    this.setData({
      cartList:cartList
     }
    );
    const goodsTotal = {
      count: e.detail ? Reflect.ownKeys(cartList).length : 0,
      total: total,
      allChecked: e.detail
    };
    this.setData({
        goodsTotal:goodsTotal
    });
    this._refreshGoodsTotal();
  },

  _refreshGoodsTotal(){
    const cartList = this.data.cartList;
    let count = 0;
    let total = 0;

    for (const index in cartList) {
      cartList[index].checked && (total += cartList[index].price * cartList[index].count);
      cartList[index].checked && count++;
    }
    const goodsTotal = {
      count: count,
      total: total,
      allChecked: count == Reflect.ownKeys(cartList).length
    };
    this.setData({
        goodsTotal:goodsTotal
    })
  },

  _refreshAppGodds(){
    getApp().data.cartList = this.data.cartList;
  }
 
})