webpackJsonp([5],{578:function(t,n,i){i(614);var a=i(9)(i(596),i(626),"data-v-106fcaa0",null);t.exports=a.exports},590:function(t,n,i){"use strict";function a(){var t=s()({},r.b,{uin:0,needNewCode:1,platform:"h5"});return i.i(l.a)("https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg",t,r.c)}function o(t){var n=s()({},r.b,{topid:t,needNewCode:1,uin:0,tpl:3,page:"detail",type:"top",platform:"h5"});return i.i(l.a)("https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg",n,r.c)}n.b=a,n.a=o;var e=i(87),s=i.n(e),l=i(200),r=i(65)},596:function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=i(57),o=i.n(a),e=i(66),s=i.n(e),l=i(201),r=i.n(l),c=i(590),A=i(65),p=i(86),d=i(48);n.default={mixins:[p.c],created:function(){this._getTopList()},data:function(){return{topList:[]}},methods:o()({handlePlaylist:function(t){var n=t.length>0?"60px":"";this.$refs.rank.style.bottom=n,this.$refs.toplist.refresh()},selectItem:function(t){this.$router.push({path:"/rank/"+t.id}),this.setTopList(t)},_getTopList:function(){var t=this;i.i(c.b)().then(function(n){n.code===A.a&&(t.topList=n.data.topList)})}},i.i(d.b)({setTopList:"SET_TOP_LIST"})),watch:{topList:function(){var t=this;setTimeout(function(){t.$Lazyload.lazyLoadHandler()},20)}},components:{Scroll:s.a,Loading:r.a}}},604:function(t,n,i){n=t.exports=i(575)(!0),n.push([t.i,"\n.rank[data-v-106fcaa0] {\n  position: fixed;\n  width: 100%;\n  top: 88px;\n  bottom: 0;\n}\n.rank .toplist[data-v-106fcaa0] {\n  height: 100%;\n  overflow: hidden;\n}\n.rank .toplist .item[data-v-106fcaa0] {\n  display: flex;\n  margin: 0 20px;\n  padding-top: 20px;\n  height: 100px;\n}\n.rank .toplist .item[data-v-106fcaa0]:last-child {\n  padding-bottom: 20px;\n}\n.rank .toplist .item .icon[data-v-106fcaa0] {\n  flex: 0 0 100px;\n  width: 100px;\n  height: 100px;\n}\n.rank .toplist .item .songlist[data-v-106fcaa0] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 0 20px;\n  height: 100px;\n  overflow: hidden;\n  backgrouns: $color-hightlight-background;\n  color: rgba(255,255,255,0.3);\n  font-size: 12px;\n}\n.rank .toplist .item .songlist .song[data-v-106fcaa0] {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  line-height: 26px;\n}\n.rank .toplist .loading-container[data-v-106fcaa0] {\n  position: absolute;\n  width: 100%;\n  top: 50%;\n  transform: translateY(-50%);\n}","",{version:3,sources:["D:/1/vue-music/src/components/rank/rank.vue"],names:[],mappings:";AACA;EACE,gBAAgB;EAChB,YAAY;EACZ,UAAU;EACV,UAAU;CACX;AACD;EACE,aAAa;EACb,iBAAiB;CAClB;AACD;EACE,cAAc;EACd,eAAe;EACf,kBAAkB;EAClB,cAAc;CACf;AACD;EACE,qBAAqB;CACtB;AACD;EACE,gBAAgB;EAChB,aAAa;EACb,cAAc;CACf;AACD;EACE,QAAQ;EACR,cAAc;EACd,uBAAuB;EACvB,wBAAwB;EACxB,gBAAgB;EAChB,cAAc;EACd,iBAAiB;EACjB,yCAAyC;EACzC,6BAA6B;EAC7B,gBAAgB;CACjB;AACD;EACE,wBAAwB;EACxB,iBAAiB;EACjB,oBAAoB;EACpB,kBAAkB;CACnB;AACD;EACE,mBAAmB;EACnB,YAAY;EACZ,SAAS;EACT,4BAA4B;CAC7B",file:"rank.vue",sourcesContent:["\n.rank[data-v-106fcaa0] {\n  position: fixed;\n  width: 100%;\n  top: 88px;\n  bottom: 0;\n}\n.rank .toplist[data-v-106fcaa0] {\n  height: 100%;\n  overflow: hidden;\n}\n.rank .toplist .item[data-v-106fcaa0] {\n  display: flex;\n  margin: 0 20px;\n  padding-top: 20px;\n  height: 100px;\n}\n.rank .toplist .item[data-v-106fcaa0]:last-child {\n  padding-bottom: 20px;\n}\n.rank .toplist .item .icon[data-v-106fcaa0] {\n  flex: 0 0 100px;\n  width: 100px;\n  height: 100px;\n}\n.rank .toplist .item .songlist[data-v-106fcaa0] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 0 20px;\n  height: 100px;\n  overflow: hidden;\n  backgrouns: $color-hightlight-background;\n  color: rgba(255,255,255,0.3);\n  font-size: 12px;\n}\n.rank .toplist .item .songlist .song[data-v-106fcaa0] {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  line-height: 26px;\n}\n.rank .toplist .loading-container[data-v-106fcaa0] {\n  position: absolute;\n  width: 100%;\n  top: 50%;\n  transform: translateY(-50%);\n}"],sourceRoot:""}])},614:function(t,n,i){var a=i(604);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i(576)("46bc6118",a,!0)},626:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{ref:"rank",staticClass:"rank"},[i("scroll",{ref:"toplist",staticClass:"toplist",attrs:{data:t.topList}},[i("ul",t._l(t.topList,function(n){return i("li",{staticClass:"item",on:{click:function(i){t.selectItem(n)}}},[i("div",{staticClass:"icon"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:n.picUrl,expression:"item.picUrl"}],attrs:{width:"100",height:"100"}})]),t._v(" "),i("ul",{staticClass:"songlist"},t._l(n.songList,function(n,a){return i("li",{staticClass:"song"},[i("span",[t._v(t._s(a+1))]),t._v(" "),i("span",[t._v(t._s(n.songname)+"-"+t._s(n.singername))])])}))])})),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.topList.length,expression:"!topList.length"}],staticClass:"loading-container"},[i("loading")],1)]),t._v(" "),i("router-view")],1)},staticRenderFns:[]}}});
//# sourceMappingURL=5.187f81292844b454fe3b.js.map