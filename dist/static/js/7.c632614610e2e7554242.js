webpackJsonp([7],{580:function(t,e,r){r(613);var s=r(9)(r(598),r(625),"data-v-0e6b8440",null);t.exports=s.exports},598:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=r(57),a=r.n(s),n=r(209),o=r.n(n),c=r(210),i=r.n(c),h=r(66),A=r.n(h),p=r(207),l=r.n(p),u=r(212),C=r.n(u),d=r(204),v=r(65),x=r(86),f=r(48);e.default={mixins:[x.c,x.b],data:function(){return{hotKey:[]}},computed:{shortcut:function(){return this.hotKey.concat(this.searchHistory)}},created:function(){this._getHotKey()},methods:a()({handlePlaylist:function(t){var e=t.length>0?"60px":"";this.$refs.searchResult.style.bottom=e,this.$refs.suggest.refresh(),this.$refs.shortcutWrapper.style.bottom=e,this.$refs.shortcut.refresh()},showConfirm:function(){this.$refs.confirm.show()},_getHotKey:function(){var t=this;r.i(d.b)().then(function(e){e.code===v.a&&(t.hotKey=e.data.hotkey.slice(0,10))})}},r.i(f.c)(["clearSearchHistory"])),watch:{query:function(t){var e=this;t||(setTimeout(function(){e.$refs.shortcut.refresh()},20),console.log("newQuery"+t))}},components:{SearchBox:o.a,SearchList:i.a,Scroll:A.a,Confirm:l.a,Suggest:C.a}}},603:function(t,e,r){e=t.exports=r(575)(!0),e.push([t.i,"\n.search .search-box-wrapper[data-v-0e6b8440] {\n  margin: 20px;\n}\n.search .shortcut-wrapper[data-v-0e6b8440] {\n  position: fixed;\n  top: 170px;\n  bottom: 0;\n  width: 100%;\n}\n.search .shortcut-wrapper .shortcut[data-v-0e6b8440] {\n  height: 100%;\n  overflow: hidden;\n}\n.search .shortcut-wrapper .shortcut .hot-key[data-v-0e6b8440] {\n  margin: 0 20px 20px 20px;\n}\n.search .shortcut-wrapper .shortcut .hot-key .title[data-v-0e6b8440] {\n  margin-bottom: 20px;\n  font-size: 14px;\n  color: rgba(255,255,255,0.5);\n}\n.search .shortcut-wrapper .shortcut .hot-key .item[data-v-0e6b8440] {\n  display: inline-block;\n  padding: 5px 10px;\n  margin: 0 20px 10px 0;\n  border-radius: 6px;\n  background: #333;\n  font-size: 14px;\n  color: rgba(255,255,255,0.3);\n}\n.search .shortcut-wrapper .shortcut .search-history[data-v-0e6b8440] {\n  position: relative;\n  margin: 0 20px;\n}\n.search .shortcut-wrapper .shortcut .search-history .title[data-v-0e6b8440] {\n  display: flex;\n  align-items: center;\n  height: 40px;\n  font-size: 14px;\n  color: rgba(255,255,255,0.5);\n}\n.search .shortcut-wrapper .shortcut .search-history .title .text[data-v-0e6b8440] {\n  flex: 1;\n}\n.search .shortcut-wrapper .shortcut .search-history .title .clear[data-v-0e6b8440] {\n  position: relative;\n}\n.search .shortcut-wrapper .shortcut .search-history .title .clear[data-v-0e6b8440]:before {\n  content: '';\n  position: absolute;\n  top: -10px;\n  left: -10px;\n  right: -10px;\n  bottom: -10px;\n}\n.search .shortcut-wrapper .shortcut .search-history .title .clear .icon-clear[data-v-0e6b8440] {\n  font-size: 14px;\n  color: rgba(255,255,255,0.3);\n}\n.search .search-result[data-v-0e6b8440] {\n  position: fixed;\n  width: 100%;\n  top: 178px;\n  bottom: 0;\n}","",{version:3,sources:["D:/1/vue-music/src/components/search/search.vue"],names:[],mappings:";AACA;EACE,aAAa;CACd;AACD;EACE,gBAAgB;EAChB,WAAW;EACX,UAAU;EACV,YAAY;CACb;AACD;EACE,aAAa;EACb,iBAAiB;CAClB;AACD;EACE,yBAAyB;CAC1B;AACD;EACE,oBAAoB;EACpB,gBAAgB;EAChB,6BAA6B;CAC9B;AACD;EACE,sBAAsB;EACtB,kBAAkB;EAClB,sBAAsB;EACtB,mBAAmB;EACnB,iBAAiB;EACjB,gBAAgB;EAChB,6BAA6B;CAC9B;AACD;EACE,mBAAmB;EACnB,eAAe;CAChB;AACD;EACE,cAAc;EACd,oBAAoB;EACpB,aAAa;EACb,gBAAgB;EAChB,6BAA6B;CAC9B;AACD;EACE,QAAQ;CACT;AACD;EACE,mBAAmB;CACpB;AACD;EACE,YAAY;EACZ,mBAAmB;EACnB,WAAW;EACX,YAAY;EACZ,aAAa;EACb,cAAc;CACf;AACD;EACE,gBAAgB;EAChB,6BAA6B;CAC9B;AACD;EACE,gBAAgB;EAChB,YAAY;EACZ,WAAW;EACX,UAAU;CACX",file:"search.vue",sourcesContent:["\n.search .search-box-wrapper[data-v-0e6b8440] {\n  margin: 20px;\n}\n.search .shortcut-wrapper[data-v-0e6b8440] {\n  position: fixed;\n  top: 170px;\n  bottom: 0;\n  width: 100%;\n}\n.search .shortcut-wrapper .shortcut[data-v-0e6b8440] {\n  height: 100%;\n  overflow: hidden;\n}\n.search .shortcut-wrapper .shortcut .hot-key[data-v-0e6b8440] {\n  margin: 0 20px 20px 20px;\n}\n.search .shortcut-wrapper .shortcut .hot-key .title[data-v-0e6b8440] {\n  margin-bottom: 20px;\n  font-size: 14px;\n  color: rgba(255,255,255,0.5);\n}\n.search .shortcut-wrapper .shortcut .hot-key .item[data-v-0e6b8440] {\n  display: inline-block;\n  padding: 5px 10px;\n  margin: 0 20px 10px 0;\n  border-radius: 6px;\n  background: #333;\n  font-size: 14px;\n  color: rgba(255,255,255,0.3);\n}\n.search .shortcut-wrapper .shortcut .search-history[data-v-0e6b8440] {\n  position: relative;\n  margin: 0 20px;\n}\n.search .shortcut-wrapper .shortcut .search-history .title[data-v-0e6b8440] {\n  display: flex;\n  align-items: center;\n  height: 40px;\n  font-size: 14px;\n  color: rgba(255,255,255,0.5);\n}\n.search .shortcut-wrapper .shortcut .search-history .title .text[data-v-0e6b8440] {\n  flex: 1;\n}\n.search .shortcut-wrapper .shortcut .search-history .title .clear[data-v-0e6b8440] {\n  position: relative;\n}\n.search .shortcut-wrapper .shortcut .search-history .title .clear[data-v-0e6b8440]:before {\n  content: '';\n  position: absolute;\n  top: -10px;\n  left: -10px;\n  right: -10px;\n  bottom: -10px;\n}\n.search .shortcut-wrapper .shortcut .search-history .title .clear .icon-clear[data-v-0e6b8440] {\n  font-size: 14px;\n  color: rgba(255,255,255,0.3);\n}\n.search .search-result[data-v-0e6b8440] {\n  position: fixed;\n  width: 100%;\n  top: 178px;\n  bottom: 0;\n}"],sourceRoot:""}])},613:function(t,e,r){var s=r(603);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);r(576)("440a21f5",s,!0)},625:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"search"},[r("div",{staticClass:"search-box-wrapper"},[r("search-box",{ref:"searchBox",on:{query:t.onQueryChange}})],1),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:!t.query,expression:"!query"}],ref:"shortcutWrapper",staticClass:"shortcut-wrapper"},[r("scroll",{ref:"shortcut",staticClass:"shortcut",attrs:{refreshDelay:t.refreshDelay,data:t.shortcut}},[r("div",[r("div",{staticClass:"hot-key"},[r("h1",{staticClass:"title"},[t._v("热门搜索")]),t._v(" "),r("ul",t._l(t.hotKey,function(e){return r("li",{staticClass:"item",on:{click:function(r){t.addQuery(e.k)}}},[r("span",[t._v(t._s(e.k))])])}))]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.searchHistory.length,expression:"searchHistory.length"}],staticClass:"search-history"},[r("h1",{staticClass:"title"},[r("span",{staticClass:"text"},[t._v("搜索历史")]),t._v(" "),r("span",{staticClass:"clear",on:{click:t.showConfirm}},[r("i",{staticClass:"icon-clear"})])]),t._v(" "),r("search-list",{attrs:{searches:t.searchHistory},on:{delete:t.deleteSearchHistory,select:t.addQuery}})],1)])])],1),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.query,expression:"query"}],ref:"searchResult",staticClass:"search-result"},[r("suggest",{ref:"suggest",attrs:{query:t.query},on:{listScroll:t.blurInput,select:t.saveSearch}})],1),t._v(" "),r("confirm",{ref:"confirm",attrs:{text:"是否清空所有搜索历史",confirmBtnText:"清空"},on:{confirm:t.clearSearchHistory}}),t._v(" "),r("router-view")],1)},staticRenderFns:[]}}});
//# sourceMappingURL=7.c632614610e2e7554242.js.map