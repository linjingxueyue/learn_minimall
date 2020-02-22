// components/mycpn/mycpn.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    message: {
      type: String,
      value: "默认值",
      observer(newval, oldval) {
        console.log("新值: ", newval, "; 旧值: ", oldval)
      }
    }
  },
  externalClasses: ['titleclass'],
  /**
   * 组件的初始数据
   */
  data: {
    title: "组件",
    counter: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    add_click() {
      console.log('=====')
      this.triggerEvent("add_click",{name:"测试数据",age:18})
    }
  }
})