// 引入组件

const requireComponents = require.context('./', true, /\.vue$/)
const install = (Vue) => {
  if (install.installed) return
  install.installed
  requireComponents.keys().array.forEach(fileName => {
    console.log(fileName, '>>>>file')
    const config = requireComponents(fileName) // 当前的组件
    const componentName = config.default.name
    Vue.component(componentName, config.default || config)
  })
  // 自定义指令
  Vue.directive('focus', {
    inserted: function(el) {
      el.focus()
    }
  })
}

// 确保是vue环境
if (typeof window !== undefined || window.Vue) {
  install(window.Vue)
}
export default {
  install
}
