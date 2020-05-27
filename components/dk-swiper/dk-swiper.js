// components/dk-swiper/dk-swiper.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    banners:{
      type:Array,
      value:[]
    }
  },
  externalClasses:['swiper'],
  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleImage(event){
      const index = event.currentTarget.dataset.index;
      console.log(this.properties.images[index]);
    }
  }
})
