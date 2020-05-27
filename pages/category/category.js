// pages/category/category.js
import { 
  getCategory,
  getSubcategory,
  getCategoryDetail
 } from "../../services/category.js";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    //菜单
    cates:[],
    //子菜单
    subCates:[],
    categoryDetail:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    getCategory().then(res=>{
      this.setData({
        cates :  res.data.category.list
      });
      return Promise.all([this._getSubcategory(res.data.category.list[0].maitKey), this._getCategoryDetail(res.data.category.list[0].miniWallkey)])
    }).then(res=>{
      this.setData({
        subCates :  res[0].data.list,
        categoryDetail : res[1],
      });
    });
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

  //------------------------------------
  menuclick(event){
    let maitKey = event.detail.maitKey;
    let miniWallkey = event.detail.miniWallkey;
    Promise.all([ this._getSubcategory(maitKey), this._getCategoryDetail(miniWallkey)]).then(res=>{
      this.setData({
        subCates :  res[0].data.list,
        categoryDetail : res[1],
      });
    });
  },

  _getSubcategory(maitKey){
    return getSubcategory(maitKey)
  },

  _getCategoryDetail(miniWallkey){
   return  getCategoryDetail(
      miniWallkey,
      'pop'
    )
  }
})