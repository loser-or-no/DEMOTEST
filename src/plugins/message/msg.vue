<template>
  <div ref="msg" :class="['msg', {'active': msgStatus}]">
    <div class="msg-wrapper">
      {{ text }}
    </div>
  </div>
</template>

<script>

export default {
  // import引入的组件
  name: 'VueMessage',
  components: {},
  data() {
    return {
      msgStatus: false,
      text: ''
    }
  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
  },
  // 方法集合
  methods: {
    showMsg(msg, time = 2000) {
      this.text = msg
      this.msgStatus = true
      console.log('ffff')
      setTimeout(() => {
        this.msgStatus = false
      }, time)
    }
  }
}
</script>
<style lang="scss" scoped>
  .msg{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 0;
    min-height: 0;
    text-align: center;
    background-color: #333;
    border-radius: 5px;
    color: #fff;
    transition: all .5s;
    z-index: -1;
    opacity: 0;
  }
  .active{
    width: 150px;
    min-height: 25px;
    opacity: 1;
    z-index: 11;
  }
</style>
