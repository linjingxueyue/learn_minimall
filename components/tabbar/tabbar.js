// components/tabbar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentindex:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    tabbar_item_click(event){
      // this.triggerEvent('tabbar_item_click')
      console.log(event)
      this.setData({
        currentindex: event.currentTarget.dataset.index
      })
    }
  }
})
