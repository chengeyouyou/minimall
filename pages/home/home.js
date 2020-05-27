// pages/home/home.js
import { 
  getMultiData,
  getProduct
 } from "../../services/home.js";

const POP = 'pop';
const NEW = 'new';
const SELL = 'sell';
const DIS_TOP = 1000;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShow:false,
    isTabControlFixed:false,
    tab_topHeight: 0,
    banner:[],
    recommend:[],
    active_cate:"pop",
    cates: [{
      code:POP,
      title:'流行'
    }, {
      code:NEW,
      title:'上新'
    }, {
      code:SELL,
      title:'热销'
    }],
    goods:{
      [POP]:{
        page:1,
        list:[]
      },
      [NEW]:{
        page:1,
        list:[]
      },
      [SELL]:{
        page:1,
        list:[]
      },
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //请求轮播图和推荐数据
    this._fetchMultiData();
    //请求商品数据
    this._fetchGoods();
  },

  _fetchMultiData(){
    getMultiData().then(
      res=>{
        console.log(res);
        this.setData({
          "banner" : res.data.banner.list,
          "recommend": res.data.recommend.list
        })
      }
    ).catch(err=>{
        console.log(res);
    });
  },

  _fetchGoods(){
    this._fetchGood(POP);  
    this._fetchGood(NEW);  
    this._fetchGood(SELL);  
  },

  _fetchGood(type){
    const page = this.data.goods[type].page;
    getProduct(type, page).then(
      res=>{
        const t =  "goods." + type + ".list";
        const p =  "goods." + type + ".page";
        this.data.goods[type].list.push(...res.data.list);
        
        this.setData({
            [t]: this.data.goods[type].list,
            [p]: this.data.goods[type].page + 1
        });
      }
    ).catch(
      err=>{
        console.log(err);
      }
    );
  },



  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    setTimeout(() => {
      var selectorQuery = wx.createSelectorQuery();
      selectorQuery.select('#tab-control').boundingClientRect(rect=>{
        this.setData({
          tab_topHeight : rect.top
        });
      }).exec();
    }, 500);
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
    this._fetchGoods();
  },

  onPageScroll(event){
    //根据滚动的距离显示回到顶部标签
    if(event.scrollTop >= DIS_TOP && !this.data.isShow){
      this.setData({
        isShow : true
      });
    }else if(event.scrollTop < DIS_TOP && this.data.isShow){
      this.setData({
        isShow : false
      });
    }
    //根据滚动的距离切换tab-control的状态
     if(event.scrollTop > this.data.tab_topHeight && !this.data.isTabControlFixed){
          this.setData({
            isTabControlFixed:!this.data.isTabControlFixed
          });
      }else if(event.scrollTop <= this.data.tab_topHeight  && this.data.isTabControlFixed){
          this.setData({
            isTabControlFixed:!this.data.isTabControlFixed
          });
      }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title:'哈哈'
    }
  },

  // --------------------------------------------
  /**
   * 切换tab-control
   * @param {*} event 
   */
  handlecate(event){
    this.setData({
      'active_cate' : event.detail
    });
  },

  topClick(){
      wx.pageScrollTo({
        scrollTop:0,
        complete: (res) => {},
      })
  }
})