基于Vue.js的音乐播放器
```概述：
    该项目是基于Vue.js的移动端音乐播放器，该项目使用vue-cli构建，vue-router作路由跳转，stylus编写样式代码，vuex存取多页面间需要用到的数据。
    该项目组件化的实现了歌单页、歌手页、歌手详情页、排行榜及排行榜详情页、搜索页、用户中心页。
    该项目的数据来源于qq音乐，利用jsonp和axios抓取来自qq音乐的接口，当不能直接抓取数据的时候，采用了node进行后端接口代理。还在该项目中实现了类似qq音乐播放器的功能，如展现歌曲进度、图片，歌词左右滑动，播放模式切换、播放器展开收起动画等。
技术栈：
    Vue：用于构建用户页面的MVVM框架，它的核心是响应的数据绑定和组建系统
    VueX：Vue集中状态管理，在多个组件共享某些状态的时候非常便捷
    VueRouter：为单页面应用提供了路由系统，项目上线前使用了Lazying Loading Routes 技术来实现异步加载优化性能
	Vue-lazyload：第三方图片加载库，用于优化页面加载性能
	better-scroll：iscroll的优化版，是移动端滑动体验更加流畅
    Vue-cli: VUE脚手架工具，快速初始化项目
    Axios： 服务端通讯，结合Node 进行后端接口代理，抓取	QQ音乐数据
    Stylus
难点： 
    1.player组件： 放在App.vue下，通过Vuex传递数据，触发action提交mutation，从而使播放器开始工作
    2.歌曲切换： 当歌曲切换过快会导致歌曲播放错误，使用audio的play事件可以在歌曲未准备好时使图标不可点击，从而避免了这个问题
组件树：
       <app> ................... 根组件
  	<my-player> ........... 全局的播放器内核组件
  	<my-header> ........... 头部组件
  	<my-tab> .............. 导航栏组件
  	<router-view> ......... 路由
    	   <recommend> ......... 推荐页
    	   <singer> ............ 歌手页
    	   <rank> .............. 排行页
    	   <search> ............ 搜索页
实现细节：
	1、推荐页
		上部分是一个轮播图组件，使用了第三方库better-scroll辅助实现，使用jsonp抓取qq音乐的数据。
		下部分是一个歌单推荐列表，使用node + axios，伪造header，绕过主机限制，从而抓取QQ音乐数据
		歌单推荐列表的图片，使用vue-lazyload按需加载，优化了加载速度
		当不能抓取到数据时，显示loading组件，以达到更好的用户体验
	2、推荐页 -> 歌单详情页
		在这个页面中使用vuex来管理歌手状态
		这个页面中有很多原生动画，如下拉图片放大，列表跟随滚动，上拉图片模糊等
	3、歌手页
		这个页面分左右两个部分，两部分可以联动。
		左侧显示歌手列表，从QQ音乐抓取数据并重组成一个数组
		列表图片使用懒加载技术，优化加载速度
		右侧是一个字母列表，与左侧歌手列表联动，滚动固定标题实现
	4、歌手页 -> 歌手详情页
		复用歌单详情页，只改变数据
	5、播放器内核
		这是一个核心组件，使用vuex管理播放状态。播放、暂停使用audio的api
		中部唱片区域使用第三方动画库 create-keyframe-animation 实现播放器最大化时的动画效果，唱片区右滑可以切换到歌词区，歌词跟随当前进度高亮显示
		底部操作区图标使用iconfonts
		播放器可以最大化和最小化，抽象出了两个插件process-bar（normal）和process-circle（mini），当用户点击和拖动process-bar组件中的进度条时，可以改变歌曲的播放进度，圆形进度条使用SVG<circle>实现
		播放模式有顺序播放、循环播放和随机播放，原理是改变播放列表中的项目
		歌词爬取利用node代理后端接口，伪造headers实现，先将歌词从jsonp 格式转成json格式，然后用base64进行解码，然后用第三方库lyric-parser进行歌词的格式化
		实现了在播放器最小化时点击展开播放列表，可以添加或删除歌曲
	6、排行页
		利用jsonp抓取qq音乐数据并展现
	7、排行页  -> 歌单详情页
		复用上面的歌手页 -> 歌单详情页
	8、搜索页
		实现了根据数据特征进行上拉刷新的功能，同时考虑到数据量大，对请求进行了节流处理
		对搜索结果进行localstorage缓存（使用了第三方good-storage库）
		考虑到移动端体验问题，在搜索结果列表滚动前对input进行blur处理
	9、个人中心
		展现被缓存的收藏列表和播放历史列表（均使用vuex管理）
效果图：
   

```

## Build Setup

``` 
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
# vue-music

