<template>
  <div class="m-header">
    <router-link tag="div" class="mine" to="/user" >
      <i class="icon-mine" ></i>
    </router-link>
    <h1 class="text">我的音乐</h1>
    <router-link tag="div" class="search" to="/search">
      <i class="icon-search"></i>
    </router-link>
  </div>
</template>
<script type="text/ecmascript-6">
  export default{

}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
    @import "~common/stylus/mixin" 
  .m-header
    position:relative
    height:44px
    text-align:center
    color:$color-theme
    font-size:0
    .text
      display:inline-block
      vertical-align:top
      line-height:44px
      font-size:$font-size-large
    .mine
      position:absolute
      top: 0
      left: 0
      .icon-mine
        display:block
        padding:12px
        font-size:20px
        color:$color-theme
    .search
      position:absolute
      top:0
      right:0
      .icon-search
        display:block
        padding:12px
        font-size:22px
        color:$color-theme
</style>