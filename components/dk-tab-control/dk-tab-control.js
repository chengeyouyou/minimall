Component({
  data:{
    active:0,
  },
  properties:{
    cates:{
      type:Array,
      value:[]
    }
  },
  methods:{
    clicktab(event){
      const index = event.currentTarget.dataset.index;
      this.setData({
        "active" : index
      });
      this.triggerEvent('item_click', this.properties.cates[index].code);
    }
  },
})