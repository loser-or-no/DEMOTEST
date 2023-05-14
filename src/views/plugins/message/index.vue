<template>
  <div class="app-container">
    <div ref="msg" :class="['msg', {'active': msgStatus}]">
      <div class="msg-wrapper">{{ text }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TextMsg',
  data() {
    return {
      msgStatus: false,
      text: 'vvvv'
    }
  },
  created() {
  },
  methods: {
    msgPlugin(msg) {
      this.text = msg
      this.msgStatus = true
      setTimeout(() => {
        this.msgStatus = false
      }, 3000)
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
  background:#000;
  border-radius: 5px;
  color: #fff;
  transition: all .5s ;
  z-index: -1;
  opacity: 0;
}
.msg .active{
  width: 180px;
  height: 30px;
  opacity: 1;
  z-index: 11;
}
</style>
