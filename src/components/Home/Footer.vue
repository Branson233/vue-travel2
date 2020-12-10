<template>
    <div class="header">
      <div class="item"><i class="iconfont">&#xe653;</i><span class="name">首页</span></div>
      <div class="item"><i class="iconfont">&#xe63a;</i><span class="name">订单</span></div>
      <div class="item"><i class="iconfont">&#xe63c;</i><span class="name">旅行攻略</span></div>
      <div class="item"><i class="iconfont">&#xe615;</i><span class="name">我的</span></div>
    </div>
  </template>
  
<script>
  export default {
    name: 'HomeFooter',
    props:{
      city:String
    }
  }
</script>

<style lang="stylus" scoped>
/*
这里的lang="stylus"表明用stylus语法写css,  scoped表示css只对这个组件有效，不会影响其他组件
1rem = html font-size 50px  在reset里设置的，可以设置需要的数，简化rem与px的化简
*/  
@import '../../assets/styles/varibles.styl'
.header
  display:flex
  height: .86rem
  width:100%
  background: white
  color: black
  line-height: $headerHeight
  width: 100%
  justify-content: space-around
  padding: 0.05rem 0
  overflow: hidden
  .item
    height:.86rem
    display: flex
    flex-flow: column
    justify-content: center
    align-items: center
    .iconfont
      color: #616161
      height:.43rem
      font-size:.4rem
    .name
      font-family: "PingFangSC-Regular"
      transform: scale(0.83)
      font-size: 0.1rem
      color:#616161


</style>