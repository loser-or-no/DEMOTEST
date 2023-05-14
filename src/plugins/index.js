// 入口文件 =》插件入口 =》 统一管理组件

// webpack动态引入文件 参数1当前路径 参数2是否匹配子级文件 参数3文件类型
const requireComponent = require.context('./', true, /\.vue$/)

const install = (Vue) => {
  if (install.installed) return
  install.installed
  // requestComponent.keys() 收集到的数据是数组
  console.log(requireComponent, requireComponent.keys(), 'requireComponent')
  requireComponent.keys().forEach(fileName => {
    const config = requireComponent(fileName) // 当前组件
    const componentName = config.default.name // 组件名称name  组件下面的export default 下面的name
    console.log(fileName, config, componentName, '>>><<<<')
    Vue.component(componentName, config.default || config)
  })

  // 全局自定义组件
  Vue.directive('focus', {
    inserted: function(el) {
      el.focus()
    }
  })
}
// 环境检测
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install
}
