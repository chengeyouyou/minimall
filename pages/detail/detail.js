// pages/detail/detail.js
import { 
  getDetail,
  GoodsBaseInfo,
  ShopInfo,
  ParamInfo,
  getRecommends
 } from "../../services/detail.js";

 const DIS_TOP = 2000;
 const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    iid:0,
    topImages:[],
    goodsBaseInfo:{},
    shopInfo:{},
    paramInfo:{},
    detailInfo:{},
    isShow:false,
    topNum: 0,
    commentInfo:{},
    recommend:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      iid:options.iid
    });
    //请求商品数据
    this._requestGoodsDetail(options.iid);
    //请求推荐商品信息
    this._requestRecomment();
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

  onScroll(event){
    const scrollTop = event.detail.scrollTop;
    //根据滚动的距离显示回到顶部标签
    if(scrollTop >= DIS_TOP && !this.data.isShow){
      this.setData({
        isShow : true
      });
    }else if(scrollTop < DIS_TOP && this.data.isShow){
      this.setData({
        isShow : false
      });
    }
  },

  _requestGoodsDetail(iid){
    getDetail(iid).then(res=>{
      console.log(res)
      // 6.获取评论信息
      let commentInfo = {}
      if (res.result.rate && res.result.rate.cRate > 0) {
        commentInfo = res.result.rate.list[0]
      }
      this.setData({
        goodsBaseInfo: new GoodsBaseInfo(res.result.itemInfo, res.result.columns, res.result.shopInfo.services),
        shopInfo: new ShopInfo(res.result.shopInfo),
        paramInfo: new ParamInfo(res.result.itemParams),
        topImages: res.result.itemInfo.topImages,
        detailInfo: res.result.detailInfo,
        commentInfo: commentInfo
      });
    });
  },

  _requestRecomment(){
    getRecommends().then(res=>{
      this.setData({
        recommend: res.data.list
      })
    });
  },

  topClick(){
      this.setData({
        topNum : 0
      }); 
  },


  addCart(){
      // 1.获取商品对象
      const obj = {}
      obj.iid = this.data.iid;
      obj.imageURL = this.data.topImages[0];
      obj.title = this.data.goodsBaseInfo.title;
      obj.desc = this.data.goodsBaseInfo.desc;
      obj.price = this.data.goodsBaseInfo.realPrice;
      app.addCart(obj);
      console.log(app.data.cartList);
      wx.showToast({
        title: '加入购物车成功',
      })
  }
})