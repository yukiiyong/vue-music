<template>
	<div class="music-list">
		<div class="back" @click="back">
			<i class="icon-back"></i>
		</div>
		<h1 class="title" v-html="title"></h1>
		<div class="bg-image" :style="bgStyle" ref="bgImage">
      <div class="play-icon-wrapper" ref="playBtn" v-show="songs.length>0" @click="random">
        <img src="../../common/image/play.png" alt="" width="24" height="24" class="play-icon" />
      </div>
      <div class="filter" ref="filter"></div>
		</div>
    <div class="bg-layer" ref="layer"></div>  
    <scroll :data="songs" @scroll="scroll" 
            :listenScroll="listenScroll" :probe-type="probeType" class="list" ref="list">       
      <div class="song-list-wrapper">
        <song-list :songs="songs" :rank="rank" @select="selectItem"></song-list>
      </div>
      <div class="loading-container" v-show="!songs.length">
        <loading></loading>
      </div>
    </scroll>   
	</div>
</template>

<script type="text/ecmascript-6">
  import Scroll from 'base/scroll/scroll'
  import Loading from 'base/loading/loading'
  import SongList from 'base/song-list/song-list'
  import {prefixStyle} from 'common/js/dom'
  import {playlistMixin} from 'common/js/mixin'
  import {mapActions} from 'vuex'

  const RESERVED_HEIGHT = 40
  const transform = prefixStyle('transform')
  const backdrop = prefixStyle('backdrop-filter')
  export default {
    mixins: [playlistMixin],
    props: {
      bgImage: {
        type: String,
        default: ''
      },
      songs: {
        type: Array, 
        default: []
      },
      title: {
        type: String,
        default: ''
      },
      rank: {
        type:Boolean,
        default:false
      }
    },
    data() {
      return {
        scrollY: 0
      }
    },
    computed: {
      bgStyle() {
        return `background-image:url(${this.bgImage})`
      }
    },
    created() {
      this.probeType = 3
      this.listenScroll = true
    },
    mounted() {
      this.imageHeight = this.$refs.bgImage.clientHeight
      this.minTranslateY = -this.imageHeight + RESERVED_HEIGHT
      this.$refs.list.$el.style.top = `${this.imageHeight}px`
    },
    methods: {
      handlePlaylist(playlist) {
        const bottom = playlist.length > 0 ? '60px' : ''
        this.$refs.list.$el.style.bottom = bottom
        this.$refs.list.refresh()
      },
      scroll(pos) {
        this.scrollY = pos.y
      },
      back() {
        this.$router.back()
      },
      selectItem(item,index) {
        this.selectPlay({
          list: this.songs,
          index
        })
      },
      random() {
        this.randomPlay({
          list: this.songs
        })
      },
      ...mapActions([
        'selectPlay',
        'randomPlay'
      ])
    },
    watch: {
      scrollY(newVal) {
        let translateY = Math.max(this.minTranslateY, newVal)
        let scale = 1
        let zIndex = 0
        let blur = 0 //模糊
        const percent = Math.abs(newVal / this.imageHeight)
        //下拉放大 上拉模糊 下拉newVal>0
        if(newVal > 0) {
          scale = 1 + percent
          zIndex = 10
        } else {
          blur = Math.min(20, percent *20)
        }

        this.$refs.layer.style[transform] = `translate3d(0,${translateY}px,0)`
        this.$refs.filter.style[backdrop] = `blur(${blur}px)`
        if(newVal < this.minTranslateY) {
          zIndex = 10
          this.$refs.bgImage.style.paddingTop = 0
          this.$refs.bgImage.style.height = `${RESERVED_HEIGHT}px`
          this.$refs.playBtn.style.display = 'none'
        } else {
          this.$refs.bgImage.style.paddingTop = '70%'
          this.$refs.bgImage.style.height = 0
          this.$refs.playBtn.style.display = ''
        }
        this.$refs.bgImage.style[transform] = `scale(${scale})`
        this.$refs.bgImage.style.zIndex = zIndex
      }
    },
  components: {
    Scroll,
    Loading,
    SongList
  }
} 
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"

  .music-list
    position: fixed
    z-index: 100
    top: 0 
    left: 0
    bottom: 0
    right: 0
    background: $color-background-dd
    .back
      position: absolute
      top: 0
      left: 0
      z-index: 50
      .icon-back
        display: block
        padding: 10px
        font-size: $font-size-large-x
        color: $color-theme
    .title
      position: absolute
      top: 0
      left: 10%
      z-index: 40
      width: 80% 
      no-wrap()
      text-align: center
      line-height: 40px
      font-size: $font-size-large
      color: $color-theme
    .bg-image
      position: relative
      width: 100%
      height: 0
      padding-top: 70%
      transform-origin: top
      background-size: cover
      .filter
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 100%
        background: rgba(7, 17, 27, 0.4)
      .play-icon-wrapper
        position: absolute
        bottom: 10px
        right: 30px
        width: 38px
        height: 32px
        padding: 7px 0 0
        border-radius: 19px
        background: $color-background-main
        text-align: center
        color: $color-background
        z-index: 100
        .play-icon
          display:inline-block
          font-size: $font-size-large-x 
    .bg-layer
      position: relative
      height: 100%
      background: $color-background-main
      border-top-left-radius: 8px
      border-top-right-radius: 8px
    .list     
      position: fixed
      top: 0
      bottom: 0
      width:100%
      border-top-left-radius: 8px
      border-top-right-radius: 8px
      background: $color-background-main
      .song-list-wrapper
        padding: 20px 30px
      .loading-container  
        position: absolute
        width: 100%
        top: 50%
        transform: translateY(-50%)
</style>