// pages/cart/components/dk-cart-item/dk-cart-item.js
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
    isAddButtonPress:false,
    isMinusButtonPress:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    check(e){
      this.data.item.checked = e.detail.value.length > 0;
      this.triggerEvent('checkClick', this.data.item);
    },

    addtouchstart(e){
      this.setData({
        isAddButtonPress : true
      });
    },

    addtouchend(e){
      this.setData({
        isAddButtonPress : false
      });
    },
    minustouchstart(e){
      this.setData({
        isMinusButtonPress : true
      });
    },

    minustouchend(e){
      this.setData({
        isMinusButtonPress : false
      });
    },

    add(){
      this.data.item.count++;
      this.setData({
        item: this.data.item
      });
      this.triggerEvent('checkClick', this.data.item);
    },
    minus(){
      if(this.data.item.count > 1){
        this.data.item.count--;
        this.setData({
          item: this.data.item
        });
        this.triggerEvent('checkClick', this.data.item);
      }
      
    }
  }
})
