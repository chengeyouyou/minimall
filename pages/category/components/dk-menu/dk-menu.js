// pages/category/components/dk-menu.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    cates:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    active:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    menuclick(event){
      const index = event.currentTarget.dataset.index;
      if(this.data.active != index){
        this.setData({
          active:index
        });
        this.triggerEvent('submenu', {
          maitKey:this.data.cates[index].maitKey,
          miniWallkey:this.data.cates[index].miniWallkey
        });
      }    
    }
  }
})
