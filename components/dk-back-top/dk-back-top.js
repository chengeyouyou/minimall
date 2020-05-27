// components/dk-back-top/dk-back-top.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },
  externalClasses:['top'],

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    imgclick(){
      this.triggerEvent('topClick');
    
    }
  }
})
