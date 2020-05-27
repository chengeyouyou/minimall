// pages/home/dk-recommend/dk-recommend.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    recommend:{
      type:Array,
      vale:[]
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
    clickRecommend(event){
      const link = event.currentTarget.dataset.link;
      console.log(link);
    }
  }
})
