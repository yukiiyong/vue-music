webpackJsonp([5],{578:function(t,n,a){a(615);var i=a(9)(a(597),a(627),"data-v-106fcaa0",null);t.exports=i.exports},591:function(t,n,a){"use strict";function i(){var t=s()({},A.b,{uin:0,needNewCode:1,platform:"h5"});return a.i(r.a)("https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg",t,A.c)}function o(t){var n=s()({},A.b,{topid:t,needNewCode:1,uin:0,tpl:3,page:"detail",type:"top",platform:"h5"});return a.i(r.a)("https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg",n,A.c)}n.b=i,n.a=o;var e=a(87),s=a.n(e),r=a(200),A=a(65)},597:function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=a(57),o=a.n(i),e=a(66),s=a.n(e),r=a(201),A=a.n(r),l=a(591),c=a(65),p=a(86),d=a(48);n.default={mixins:[p.c],created:function(){this._getTopList()},data:function(){return{topList:[]}},methods:o()({handlePlaylist:function(t){var n=t.length>0?"60px":"";this.$refs.rank.style.bottom=n,this.$refs.toplist.refresh()},selectItem:function(t){this.$router.push({path:"/rank/"+t.id}),this.setTopList(t)},_getTopList:function(){var t=this;a.i(l.b)().then(function(n){n.code===c.a&&(t.topList=n.data.topList)})}},a.i(d.b)({setTopList:"SET_TOP_LIST"})),watch:{topList:function(){var t=this;setTimeout(function(){t.$Lazyload.lazyLoadHandler()},20)}},components:{Scroll:s.a,Loading:A.a}}},605:function(t,n,a){n=t.exports=a(575)(!0),n.push([t.i,"\n.rank[data-v-106fcaa0] {\n  position: fixed;\n  width: 100%;\n  top: 88px;\n  bottom: 0;\n}\n.rank .toplist[data-v-106fcaa0] {\n  height: 100%;\n  overflow: hidden;\n}\n.rank .toplist .item[data-v-106fcaa0] {\n  display: flex;\n  margin: 0 10px;\n  margin-top: 20px;\n  background: #800002;\n  border-radius: 10px;\n  height: 100px;\n}\n.rank .toplist .item[data-v-106fcaa0]:last-child {\n  padding-bottom: 20px;\n}\n.rank .toplist .item .icon[data-v-106fcaa0] {\n  flex: 0 0 100px;\n  width: 100px;\n  height: 100px;\n}\n.rank .toplist .item .icon img[data-v-106fcaa0] {\n  border-bottom-left-radius: 10px;\n  border-top-left-radius: 10px;\n}\n.rank .toplist .item .songlist[data-v-106fcaa0] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 0 20px;\n  height: 100px;\n  overflow: hidden;\n  backgrouns: $color-hightlight-background;\n  color: rgba(255,255,255,0.8);\n  font-size: 12px;\n}\n.rank .toplist .item .songlist .song[data-v-106fcaa0] {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  line-height: 26px;\n}\n.rank .toplist .loading-container[data-v-106fcaa0] {\n  position: absolute;\n  width: 100%;\n  top: 50%;\n  transform: translateY(-50%);\n}","",{version:3,sources:["D:/1/vue-music/src/components/rank/rank.vue"],names:[],mappings:";AACA;EACE,gBAAgB;EAChB,YAAY;EACZ,UAAU;EACV,UAAU;CACX;AACD;EACE,aAAa;EACb,iBAAiB;CAClB;AACD;EACE,cAAc;EACd,eAAe;EACf,iBAAiB;EACjB,oBAAoB;EACpB,oBAAoB;EACpB,cAAc;CACf;AACD;EACE,qBAAqB;CACtB;AACD;EACE,gBAAgB;EAChB,aAAa;EACb,cAAc;CACf;AACD;EACE,gCAAgC;EAChC,6BAA6B;CAC9B;AACD;EACE,QAAQ;EACR,cAAc;EACd,uBAAuB;EACvB,wBAAwB;EACxB,gBAAgB;EAChB,cAAc;EACd,iBAAiB;EACjB,yCAAyC;EACzC,6BAA6B;EAC7B,gBAAgB;CACjB;AACD;EACE,wBAAwB;EACxB,iBAAiB;EACjB,oBAAoB;EACpB,kBAAkB;CACnB;AACD;EACE,mBAAmB;EACnB,YAAY;EACZ,SAAS;EACT,4BAA4B;CAC7B",file:"rank.vue",sourcesContent:["\n.rank[data-v-106fcaa0] {\n  position: fixed;\n  width: 100%;\n  top: 88px;\n  bottom: 0;\n}\n.rank .toplist[data-v-106fcaa0] {\n  height: 100%;\n  overflow: hidden;\n}\n.rank .toplist .item[data-v-106fcaa0] {\n  display: flex;\n  margin: 0 10px;\n  margin-top: 20px;\n  background: #800002;\n  border-radius: 10px;\n  height: 100px;\n}\n.rank .toplist .item[data-v-106fcaa0]:last-child {\n  padding-bottom: 20px;\n}\n.rank .toplist .item .icon[data-v-106fcaa0] {\n  flex: 0 0 100px;\n  width: 100px;\n  height: 100px;\n}\n.rank .toplist .item .icon img[data-v-106fcaa0] {\n  border-bottom-left-radius: 10px;\n  border-top-left-radius: 10px;\n}\n.rank .toplist .item .songlist[data-v-106fcaa0] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 0 20px;\n  height: 100px;\n  overflow: hidden;\n  backgrouns: $color-hightlight-background;\n  color: rgba(255,255,255,0.8);\n  font-size: 12px;\n}\n.rank .toplist .item .songlist .song[data-v-106fcaa0] {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  line-height: 26px;\n}\n.rank .toplist .loading-container[data-v-106fcaa0] {\n  position: absolute;\n  width: 100%;\n  top: 50%;\n  transform: translateY(-50%);\n}"],sourceRoot:""}])},615:function(t,n,a){var i=a(605);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a(576)("46bc6118",i,!0)},627:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{ref:"rank",staticClass:"rank"},[a("scroll",{ref:"toplist",staticClass:"toplist",attrs:{data:t.topList}},[a("ul",t._l(t.topList,function(n){return a("li",{staticClass:"item",on:{click:function(a){t.selectItem(n)}}},[a("div",{staticClass:"icon"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:n.picUrl,expression:"item.picUrl"}],attrs:{width:"100",height:"100"}})]),t._v(" "),a("ul",{staticClass:"songlist"},t._l(n.songList,function(n,i){return a("li",{staticClass:"song"},[a("span",[t._v(t._s(i+1))]),t._v(" "),a("span",[t._v(t._s(n.songname)+"-"+t._s(n.singername))])])}))])})),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.topList.length,expression:"!topList.length"}],staticClass:"loading-container"},[a("loading")],1)]),t._v(" "),a("router-view")],1)},staticRenderFns:[]}}});
//# sourceMappingURL=5.179fcb6d9ab25012d6b2.js.map