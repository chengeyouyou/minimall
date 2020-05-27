// pages/cart/components/dk-bottom-bar/dk-bottom-bar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      total:{
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
    allCheck(e){
      this.triggerEvent('allCheck', e.detail.value.length > 0);
    }
  }
})
