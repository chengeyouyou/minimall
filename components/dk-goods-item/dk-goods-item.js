// pages/home/components/dk-goods-item/dk-goods-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    item:{
      type:Object,
      value:{}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    itemClick(){
      const iid = this.properties.item.iid;
      wx.navigateTo({
        url: '/pages/detail/detail?iid=' + iid,
      })
    }
  },
  lifetimes:{
    ready(){
      
    }
  }
})
