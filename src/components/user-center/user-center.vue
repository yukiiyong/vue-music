<template>
	<transition name="slide">
		<div class="user-center">
      <div class="back">
        <i class="icon-back"></i>
      </div>
      <div class="switches-wrapper">
        <switches :switches="switches" :currentIndex="currentIndex" @switch="switchItem"></switches>
      </div> 
      <div class="play-btn" @click="random">
        <i class="icon-play"></i>
        <span class="text">随机播放全部</span>
      </div>
      <div class="list-wrapper">
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
      handlePlayMixin(play) {
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


</style>