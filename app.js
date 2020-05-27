App({

  data:{
    cartList: {}
  },

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
      // this.addCart({
      //   iid:1,
      //   imageURL: "http://s11.mogucdn.com/mlcdn/17f85e/180426_7k4fd5fj9kfe5a7g089b1e10ec8b9_640x960.jpg_320x999.jpg",
      //   title:"2018春夏季新款八色纯色浅色系时尚简约韩范纯棉学生休闲百搭基础款纯色圆领短袖上衣女T恤",
      //   desc:"简约而不简单的T恤，\n\n莫过于什么元素都别用，就是一身纯色，\n\n如此简单，却百搭得不行，\n\n搭配衣服的颜色毫无挑剔，\n\n穿出清爽怡人好心情，你心动了吗？\nS码：100斤以下 M码：100-110斤  L码：110-125斤  XL码：125-135斤",
      //   price:39.00
      // });
      // this.addCart({
      //   iid:2,
      //   imageURL: "http://s11.mogucdn.com/mlcdn/17f85e/180426_7k4fd5fj9kfe5a7g089b1e10ec8b9_640x960.jpg_320x999.jpg",
      //   title:"2018春夏季新款八色纯色浅色系时尚简约韩范纯棉学生休闲百搭基础款纯色圆领短袖上衣女T恤",
      //   desc:"简约而不简单的T恤，\n\n莫过于什么元素都别用，就是一身纯色，\n\n如此简单，却百搭得不行，\n\n搭配衣服的颜色毫无挑剔，\n\n穿出清爽怡人好心情，你心动了吗？\nS码：100斤以下 M码：100-110斤  L码：110-125斤  XL码：125-135斤",
      //   price:39.00
      // });
      // this.addCart({
      //   iid:3,
      //   imageURL: "http://s11.mogucdn.com/mlcdn/17f85e/180426_7k4fd5fj9kfe5a7g089b1e10ec8b9_640x960.jpg_320x999.jpg",
      //   title:"2018春夏季新款八色纯色浅色系时尚简约韩范纯棉学生休闲百搭基础款纯色圆领短袖上衣女T恤",
      //   desc:"简约而不简单的T恤，\n\n莫过于什么元素都别用，就是一身纯色，\n\n如此简单，却百搭得不行，\n\n搭配衣服的颜色毫无挑剔，\n\n穿出清爽怡人好心情，你心动了吗？\nS码：100斤以下 M码：100-110斤  L码：110-125斤  XL码：125-135斤",
      //   price:39.00
      // });
      // this.addCart({
      //   iid:4,
      //   imageURL: "http://s11.mogucdn.com/mlcdn/17f85e/180426_7k4fd5fj9kfe5a7g089b1e10ec8b9_640x960.jpg_320x999.jpg",
      //   title:"2018春夏季新款八色纯色浅色系时尚简约韩范纯棉学生休闲百搭基础款纯色圆领短袖上衣女T恤",
      //   desc:"简约而不简单的T恤，\n\n莫过于什么元素都别用，就是一身纯色，\n\n如此简单，却百搭得不行，\n\n搭配衣服的颜色毫无挑剔，\n\n穿出清爽怡人好心情，你心动了吗？\nS码：100斤以下 M码：100-110斤  L码：110-125斤  XL码：125-135斤",
      //   price:39.00
      // });
      // this.addCart({
      //   iid:2,
      //   imageURL: "http://s11.mogucdn.com/mlcdn/17f85e/180426_7k4fd5fj9kfe5a7g089b1e10ec8b9_640x960.jpg_320x999.jpg",
      //   title:"2018春夏季新款八色纯色浅色系时尚简约韩范纯棉学生休闲百搭基础款纯色圆领短袖上衣女T恤",
      //   desc:"简约而不简单的T恤，\n\n莫过于什么元素都别用，就是一身纯色，\n\n如此简单，却百搭得不行，\n\n搭配衣服的颜色毫无挑剔，\n\n穿出清爽怡人好心情，你心动了吗？\nS码：100斤以下 M码：100-110斤  L码：110-125斤  XL码：125-135斤",
      //   price:39.00
      // });
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  },

  addCart(goods){
    const cartList = this.data.cartList;
    if(cartList[goods.iid]){
      cartList[goods.iid].count += 1;
    }else{
      goods.count = 1;
      goods.checked = false;
      cartList[goods.iid] =  goods;
    }
  }
})
