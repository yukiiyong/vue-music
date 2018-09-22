
<template>
	<div class="recommend" ref="recommend">
		<scroll ref="scroll" class="recommend-content" :data="discList">
			<div>
				<div v-if="recommends.length" class="slider-wrapper" ref="sliderWrapper">
					<slider>
						<div v-for="item in recommends">
							<a :href="item.linkUrl">
								<img class="needsclick" @load="loadImage" :src="item.picUrl">
							</a>
						</div>
					</slider>
				</div>
				<div class="recommend-list">
					<h1 class="list-title">歌单推荐</h1> 
					<div class="list-content-wrapper">
						<ul class="list-content">
							<li @click="selectItem(item)" v-for="item in discList" class="item">
								<div class="icon">
									<img width="100" height="100" v-lazy="item.imgurl">
								</div>
								<div class="text">
									<p class="desc" v-html="item.dissname"></p>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="loading-container" v-show="!discList.length">  
				<loading></loading> 
			</div>
		</scroll>
		<router-view></router-view>
	</div>
</template>

<script type="text/ecmascript-6">
	import Slider from 'base/slider/slider'
	import Loading from 'base/loading/loading'
	import Scroll from 'base/scroll/scroll'
	import {getRecommend, getDiscList} from 'api/recommend'
	import {ERR_OK} from 'api/config' 
  import {playlistMixin} from 'common/js/mixin'
  import {mapMutations} from 'vuex' 

	export default{
        mixins: [playlistMixin],
		data(){
			return {
				recommends:[],
				discList:[]
			}
		},
		created(){
			this._getRecommend()

			this._getDiscList()
		},
		methods:{
      handlePlaylist(playlist){
          const bottom=playlist.length > 0? '60px' : ''

          this.$refs.recommend.style.bottom=bottom
          this.$refs.scroll.refresh()
      },
			loadImage(){
				if(!this.checkloaded){
					this.checkloaded=true
					this.$refs.scroll.refresh()   
				}
			},
      selectItem(item){ 
				this.$router.push({
					path:`/recommend/${item.dissid}`
				})
				this.setDisc(item)
			}, 
			_getRecommend(){ 
				getRecommend().then((res)=>{
					if(res.code === ERR_OK){ 
						this.recommends=res.data.slider
					}
				})
			},
			_getDiscList(){
				getDiscList().then((res)=>{
					if(res.code===ERR_OK){
						this.discList=res.data.list
					}
				})
			},
      ...mapMutations({
          setDisc: 'SET_DISC'
      })
		},
		components:{
			Slider,
			Loading,
			Scroll
	}
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
	@import "~common/stylus/variable"
	@import "~common/stylus/mixin"
	.recommend
		position:fixed 
		width:100%
		top:88px
		bottom:0
		.recommend-content
			height:100%
			overflow:hidden
			.slider-wrapper
				position:relative
				width:100%
				overflow:hidden
			.recommend-list	
				.list-title
					height:65px
					line-height:65px
					text-align:center
					font-size:$font-size-large
					font-weight: bold
					color:$color-text-ll
				.list-content-wrapper
					width: 320px
					margin: 0 auto
					.list-content
						width: 330px
						overflow:hidden
						.item
							float:left
							width: 100px
							margin: 0 10px 10px 0		
							background: $color-background-d	
							border-radius: 5px		
							.icon	
								width:100px
								img
									border-radius: 5px
							.text
								height: 40px
								padding: 5px
								overflow:hidden			
								.desc
									text-overflow: ellipsis 
									line-height:20px
									font-size:$font-size-small
									color:$color-text-l
			.loading-container
				position:absolute
				width:100%
				top:50%
				transform:translateY(-50%)
</style>