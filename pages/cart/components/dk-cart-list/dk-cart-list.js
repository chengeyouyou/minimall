// pages/cart/components/dk-cart-list/dk-cart-list.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      cartList:{
        type:Object,
        value: {}
      },
      goodsTotal:{
        type:Object,
        value:{}
      }
  },

  /**
   * 组件的初始数据
   */
  /**
   * 组件的方法列表
   */
  methods: {
    checkClick(e){
      console.log(e);
       const item =  e.detail;
       const index = e.currentTarget.dataset.index;
       this.data.cartList[index] = item;
       this.triggerEvent('checkClick', this.data.cartList);
    },
  }
})
