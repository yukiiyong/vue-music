<template>
	<transition name="slide">
		<div class="user-center">
      <div class="header">
        <div class="back" @click="back">
          <i class="icon-back"></i>
        </div>
        <div class="switches-wrapper">
          <switches :switches="switches" :currentIndex="currentIndex" @switch="switchItem"></switches>
        </div> 
        <div class="play-btn" @click="random">
          <i class="icon-play"></i>
          <span class="text">随机播放全部</span>
        </div>
      </div>      
      <div class="list-wrapper" ref="listWrapper">
        <scroll class="list-scroll" :data="favoriteList" ref="favoriteList" v-if="currentIndex===0">
          <div class="list-inner">
            <song-list :songs="favoriteList" @select="selectSong"></song-list>
          </div>
        </scroll>
        <scroll class="list-scroll" :data="playHistory" ref="playHistory" v-if="currentIndex===1">
          <div class="list-inner">
            <song-list :songs="playHistory" @select="selectSong"></song-list>
          </div>
        </scroll>
      </div>
      <div class="no-result-wrapper" v-show="noResult">
        <no-result :title="noResultDesc"></no-result>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import Scroll from 'base/scroll/scroll'
  import SongList from 'base/song-list/song-list'
  import Switches from 'base/switches/switches'
  import NoResult from 'base/no-result/no-result'
  import {playlistMixin} from 'common/js/mixin'
  import Song from 'common/js/song'
  import {mapGetters, mapActions} from 'vuex'

  export default {
    mixins: [playlistMixin],
    data() {
      return {
        switches: [
          {name:'我喜欢的'},
          {name:'最近听的'}
        ],
        currentIndex: 0
      }
    },
    computed: {
      noResultDesc() {
        if(this.currentIndex === 0) {
          if(!this.favoriteList.length) {
            return '暂无收藏歌曲'
          }
        } else {
          if(!this.playHistory.length) {
            return '你还没有听过歌曲'
          }
        }
      },
      noResult() {
        if(this.currentIndex === 0) {
          return !this.favoriteList.length
        } else {
          return !this.playHistory.length
        }
      },
      ...mapGetters([
        'playHistory',
        'favoriteList'
      ])
    },
    methods: {
      handlePlaylist(play) {
        const bottom = this.playlist.length > 0 ? '60px' : ''
        this.$refs.listWrapper.style.bottom = bottom
        this.$refs.playHistory && this.$refs.playHistory.refresh()
        this.$refs.favoriteList && this.$refs.favoriteList.refresh()
      },
      switchItem(index) {
        this.currentIndex = index
      },
      selectSong(song) {
        this.insertSong(new Song(song))
      },
      back() {
        this.$router.back()
      },
      random() {
        let list = this.currentIndex === 0 ? this.favoriteList : this.playHistory
        if(list.length === 0) {
          return 
        }
        list = list.map((song) => new Song(song))
        this.randomPlay({
          list
        })
      },
      ...mapActions([
        'insertSong',
        'randomPlay'
      ])
    },
    components: {
      Scroll,
      Switches,
      SongList,
      NoResult
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .user-center 
    position: fixed
    top: 0
    left: 0
    bottom: 0
    width: 100%
    z-index: 100
    background: $color-background
    &.slide-enter-active, &.slide-leave-active
      transition: all 0.3s
    &.slide-enter, &.slide-leave-to
      transform: translate3d(-100%, 0, 0)
    .header
      position: relative
      padding-bottom: 10px
      overflow:hidden
      .back
        position:absolute
        left: 6px
        top: 0
        .icon-back
          display:block
          padding: 10px
          font-size: 22px
          color: $color-theme
      .switches-wrapper
        margin: 5px 0 12px
    .play-btn
      margin: 0 auto
      box-sizing:border-box
      width: 135px
      padding: 7px 0
      text-align: center
      background: $color-background-dd
      border 1px solid $color-text-d
      border-radius: 100px
      color: $color-theme
      font-size: 0
      .icon-play
        display: inline-block
        font-size: $font-size-medium-x
        margin-right: 6px
        vertical-align: middle
      .text
        display: inline-block
        font-size: $font-size-small
        vertical-align: middle
    .list-wrapper
      position: absolute
      top: 110px
      bottom: 0
      width: 100%
      border-top-left-radius: 8px
      border-top-right-radius: 8px
      background: $color-background-main
      .list-scroll
        height: 100%
        overflow: hidden
        .list-inner
          padding: 10px 30px
    .no-result-wrapper
      position: absolute
      width: 100%
      top: 50%
      transform: translateY(-50%)
</style>