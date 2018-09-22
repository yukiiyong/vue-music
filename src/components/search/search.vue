<template>
  <transition name="slide" >
    <div class="search">
      <div class="search-header">
        <div class="back" @click="back">
            <i class="icon-back" ></i>
        </div>
        <h1 class="search-title">搜索</h1>
      </div>
      <div class="search-box-wrapper">
        <search-box ref="searchBox" @query="onQueryChange"></search-box>
      </div> 
      <div class="shortcut-wrapper" ref="shortcutWrapper" v-show="!query">
        <scroll :refreshDelay="refreshDelay" ref="shortcut" class="shortcut" :data="shortcut">
          <div>
            <div class="hot-key">
              <h1 class="title">热门搜索</h1>
              <ul>
                <li @click="addQuery(item.k)" class="item" v-for="item in hotKey">
                  <span>{{item.k}}</span>
                </li>
              </ul>
            </div>
            <div class="search-history" v-show="searchHistory.length">
              <h1 class="title">
                <span class="text">搜索历史</span>
                <span class="clear" @click="showConfirm">
                  <i class="icon-clear"></i>
                </span>
              </h1>
              <search-list @delete="deleteSearchHistory" @select="addQuery" :searches="searchHistory"></search-list>
            </div>
          </div>
        </scroll>
      </div>
      <div class="search-result" v-show="query" ref="searchResult">
        <suggest @listScroll="blurInput" @select="saveSearch" ref="suggest" :query="query"></suggest>
      </div>
      <confirm ref="confirm" @confirm="clearSearchHistory" text="是否清空所有搜索历史" confirmBtnText="清空"></confirm>
      <router-view></router-view>
    </div>
  </transition>
	
</template>

<script type="text/ecmascript-6">
  import SearchBox from 'base/search-box/search-box'
  import SearchList from 'base/search-list/search-list'
  import Scroll from 'base/scroll/scroll'
  import Confirm from 'base/confirm/confirm'
  import Suggest from 'components/suggest/suggest'
  import {getHotKey} from 'api/search'
  import {ERR_OK} from 'api/config'
  import {playlistMixin, searchMixin} from 'common/js/mixin'
  import {mapActions} from 'vuex'

  export default {
    mixins: [playlistMixin, searchMixin],
    data() {
      return {
        hotKey: []
      }
    },
    computed: {
      shortcut() {
        return this.hotKey.concat(this.searchHistory)
      }
    },
    created() {
      this._getHotKey()
    },
    methods: {
      handlePlaylist(playlist) {
        const bottom = playlist.length > 0 ? '60px' : ''

        this.$refs.searchResult.style.bottom = bottom
        this.$refs.suggest.refresh()

        this.$refs.shortcutWrapper.style.bottom = bottom
        this.$refs.shortcut.refresh()
      },
      showConfirm() {
        this.$refs.confirm.show() 
      },
      _getHotKey() {
        getHotKey().then((res) => {
          if(res.code === ERR_OK) {
            this.hotKey = res.data.hotkey.slice(0, 10)
          }
        })
      },
      back() {
        this.$router.back()
      },
      ...mapActions([
        'clearSearchHistory'
      ])
    },
    watch: {
      query(newQuery) {
        if(!newQuery) {
          setTimeout(() => {
            this.$refs.shortcut.refresh()
          }, 20)
          console.log('newQuery' + newQuery)
        }
      }
    },
    components: {
      SearchBox,
      SearchList,
      Scroll,
      Confirm,
      Suggest
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"

  .search
    position: fixed
    top: 0
    left: 0
    right: 0
    width: 100%
    z-index: 100
    background: $color-background
    &.slide-enter-active, &.slide.leave-active
      transition: all 0.3s
    &.slide-leave-to, &.slide-enter
      transform: translate(100%, 0)
    .search-header
      position: relative
      height: 42px
      .search-title
        font-size: $font-size-large
        line-height: 42px
        color: $color-text
        text-align: center
        z-index: 44
        no-wrap()
      .back
        position: absolute
        top: 0
        left: 0
        .icon-back
          display:block
          padding: 10px
          font-size: 22px
          color: $color-theme
    .search-box-wrapper
      margin: 20px 
    .shortcut-wrapper
      position: fixed
      top: 170px
      bottom: 0
      width: 100%
      .shortcut
        height: 100%
        overflow: hidden
        .hot-key
          margin: 0 20px 20px 20px
          .title
            margin-bottom: 20px
            font-size: $font-size-medium
            font-weight: bold
            color: $color-text-ll
          .item
            display: inline-block
            padding: 5px 10px
            margin: 0 20px 10px 0
            border-radius: 6px
            background: $color-highlight-background
            font-size: $font-size-medium
            color: $color-text-l
        .search-history
          position: relative
          margin: 0 20px
          .title
            display: flex
            align-items: center
            height: 40px
            font-size: $font-size-medium
            color: $color-text-l
            .text
              flex: 1
            .clear 
              extend-click()
              .icon-clear
                font-size: $font-size-medium
                color: $color-text-ll
    .search-result
      position: fixed
      width: 100%
      top: 178px
      bottom: 0
</style>