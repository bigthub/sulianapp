webpackJsonp([115],{"55r3":function(n,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t={data:function(){return{isTeamDividendShow:!1,teamDividendTitle:"",teamDividendRankingLevel:"0",teamDividendRankingAction:""}},activated:function(){this.getData()},mounted:function(){},methods:{goback:function(){this.$router.go(-1)},getSetingInfo:function(){var n=this;$http.get("",{}).then(function(e){console.log(e),1==e.result?n.info_img=e.data.banner:n.info_img=""},function(n){console.log(n)})},getData:function(){var n=this;$http.get("plugin.ranking.api.ranking.get-ranking-set",{},"").then(function(e){console.log(e),1==e.result&&n.setTeamDividendInfo(e.data)},function(n){console.log(n)})},setTeamDividendInfo:function(n){null!=n.team_dividend&&void 0!=n.team_dividend&&""!=n.team_dividend?(this.teamDividendRankingAction="1"==n.team_dividend.ranking_level?n.team_dividend.ranking_info_class:n.team_dividend.ranking_list_class,this.teamDividendRankingLevel=n.team_dividend.ranking_level,this.isTeamDividendShow="1"==n.team_dividend.is_ranking,this.teamDividendTitle=n.team_dividend.ranking_name):this.isTeamDividendShow=!1}},components:{cTitle:i("Pexp").a}},o={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"income"}},[t("c-title",{attrs:{hide:!0,text:"排行榜"}}),n._v(" "),t("div",{staticClass:"myextension"},[t("div",{staticClass:"banner"},[""!=n.info_img&&void 0!=n.info_img&&null!=n.info_img?t("img",{attrs:{src:n.info_img}}):n._e(),n._v(" "),""==n.info_img||void 0==n.info_img||null==n.info_img?t("img",{attrs:{src:i("t9wh")}}):n._e()])]),n._v(" "),t("div",[t("h4",[n._v("排行榜\n\t\t\t"),t("span",{attrs:{id:"pricerg"}},[t("font",{attrs:{color:"red"}})],1)]),n._v(" "),[t("yd-grids-group",{attrs:{rows:2}},[n.isTeamDividendShow?t("yd-grids-item",{attrs:{link:n.fun.getUrl("1"==n.teamDividendRankingLevel?"rankingListFirst":"rankingListSecond",{action:n.teamDividendRankingAction,title:n.teamDividendTitle})}},[t("yd-icon",{attrs:{slot:"icon",name:"fenxiao",custom:"",size:"1.5rem",color:"#FF685D"},slot:"icon"}),n._v(" "),t("span",{attrs:{slot:"text"},slot:"text"},[n._v(n._s(n.teamDividendTitle)+"\n\t\t\t\t\t\t"),t("font")],1)],1):n._e()],1)]],2),n._v(" "),t("div",{staticStyle:{height:"3.75rem"}})],1)},staticRenderFns:[]};var a=i("VU/8")(t,o,!1,function(n){i("GRPo")},"data-v-7629d47c",null);e.default=a.exports},GRPo:function(n,e,i){var t=i("J/p1");"string"==typeof t&&(t=[[n.i,t,""]]),t.locals&&(n.exports=t.locals);i("rjj0")("13ebfdea",t,!0,{})},"J/p1":function(n,e,i){(n.exports=i("FZ+f")(!1)).push([n.i,"\n#income .header[data-v-7629d47c] {\n  height: auto;\n  background: #f15353;\n  background-size: 100% 100%;\n  padding: 0.625rem;\n  position: relative;\n}\n#income .header .user[data-v-7629d47c] {\n  height: 7.5rem;\n  text-align: center;\n}\n#income .header .user .user-head[data-v-7629d47c] {\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box;\n  height: 3rem;\n  width: 3rem;\n  background: #fff;\n  border-radius: 50%;\n  border: 0.125rem solid #fff;\n  margin: 0.375rem auto;\n}\n#income .header .user .user-head img[data-v-7629d47c] {\n  height: 3rem;\n  width: 3rem;\n  border-radius: 50%;\n}\n#income .header .user .user-info[data-v-7629d47c] {\n  height: 3rem;\n  width: 100%;\n  float: left;\n  color: #fff;\n}\n#income .header .user .user-info .user-name[data-v-7629d47c] {\n  height: 1.5rem;\n  width: auto;\n  font-size: 12px;\n  line-height: 1.25rem;\n}\n#income .header .user .user-info .user-other[data-v-7629d47c] {\n  height: 1.25rem;\n  width: auto;\n  font-size: 12px;\n  opacity: 0.8;\n}\n#income .header .user-gold[data-v-7629d47c] {\n  height: 2.1875rem;\n  width: 94%;\n  padding: 0.3125rem 3%;\n  border-bottom: 0.0625rem solid #e3e3e3;\n  background: #fff;\n  font-size: 12px;\n  line-height: 2.1875rem;\n}\n#income .header .user-gold .title[data-v-7629d47c] {\n  height: 2.1875rem;\n  width: auto;\n  float: left;\n  color: #666;\n}\n#income .header .user-gold .num[data-v-7629d47c] {\n  height: 2.1875rem;\n  width: auto;\n  float: left;\n  color: #f90;\n}\n#income .header .user-gold .draw[data-v-7629d47c] {\n  width: 5rem;\n  height: 1.875rem;\n  background: #6c9;\n  float: right;\n}\n#income .header .user .set[data-v-7629d47c] {\n  position: absolute;\n  right: 0.625rem;\n  top: 0.625rem;\n  color: #fff;\n  font-size: 14px;\n}\n#income .header .user-op[data-v-7629d47c] {\n  height: 2.1875rem;\n  width: 94%;\n  padding: 0.3125rem 3%;\n  border-bottom: 0.0625rem solid #e3e3e3;\n  background: #fff;\n  font-size: 12px;\n  line-height: 2.1875rem;\n}\n#income h3[data-v-7629d47c] {\n  background: #fff;\n  margin: 0.625rem 0 0;\n  font-weight: normal;\n  font-size: 14px;\n  height: 2.5rem;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  line-height: 2.5rem;\n  color: #f15353;\n  border-bottom: 1px solid #ddd;\n}\n#income h3 span[data-v-7629d47c] {\n    color: #999;\n}\n#income h4[data-v-7629d47c] {\n  background: #f5f5f5;\n  text-align: left;\n  font-weight: normal;\n  font-size: 12px;\n  height: 2.3rem;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  line-height: 2.3rem;\n  color: #333;\n  border-bottom: 0.0625rem solid #eee;\n  padding: 0 0.625rem;\n}\n#income h4 span[data-v-7629d47c] {\n    color: #999;\n}\n#income #gongge[data-v-7629d47c] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  background: #fff;\n  -webkit-column-count: 3;\n     -moz-column-count: 3;\n          column-count: 3;\n  padding: 0.625rem 0;\n  margin-bottom: 0.625rem;\n}\n#income #gongge li[data-v-7629d47c] {\n    -webkit-box-flex: 33%;\n        -ms-flex: 33%;\n            flex: 33%;\n    padding: 0 0.625rem;\n    border: 0.0625rem solid #ccc;\n    margin: 0.1875rem;\n    border-radius: 0.3125rem;\n}\n#income #gongge li i[data-v-7629d47c] {\n      font-size: 34px;\n      color: #eb3943;\n      margin: 0.625rem 0;\n}\n#income #gongge li a[data-v-7629d47c] {\n      color: #333;\n      font-size: 14px;\n}\n#income #gongge li a img[data-v-7629d47c] {\n        width: 1.4375rem;\n        margin: 0.3125rem 0;\n}\n#income #gongge li a font[data-v-7629d47c] {\n        color: #e84e40;\n        font-size: 12px;\n        padding-top: 0.3125rem;\n}\n#income #un-gongge[data-v-7629d47c] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  background: #fff;\n  -webkit-column-count: 3;\n     -moz-column-count: 3;\n          column-count: 3;\n  padding: 0.625rem 0;\n}\n#income #un-gongge li[data-v-7629d47c] {\n    -webkit-box-flex: 25%;\n        -ms-flex: 25%;\n            flex: 25%;\n    padding: 0 0.625rem;\n}\n#income #un-gongge li i[data-v-7629d47c] {\n      font-size: 34px;\n      margin: 0.9375rem 0;\n}\n#income #un-gongge li a[data-v-7629d47c] {\n      color: #333;\n      font-size: 12px;\n}\n#income #un-gongge li a img[data-v-7629d47c] {\n        width: 1.4375rem;\n        margin: 0.3125rem 0;\n}\n#income #un-gongge li a font[data-v-7629d47c] {\n        color: #e84e40;\n        font-size: 12px;\n        padding-top: 0.3125rem;\n}\n#income #pricerg[data-v-7629d47c] {\n  text-align: right;\n  float: right;\n}\n#income .mszf[data-v-7629d47c] {\n  background: #fff;\n  padding: 0 0.625rem;\n  margin: 0;\n  text-align: left;\n  overflow: hidden;\n  margin-top: 0.625rem;\n  height: 2.75rem;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  line-height: 2.75rem;\n  font-size: 14px;\n  color: #333;\n}\n#income .mszf i[data-v-7629d47c] {\n    font-size: 17px;\n    float: right;\n    line-height: 2.75rem;\n    color: #999;\n}\n#income .mszf span[data-v-7629d47c] {\n    float: left;\n}\n#income .mszf a[data-v-7629d47c] {\n    color: #000000;\n    display: block;\n}\na[data-v-7629d47c] {\n  text-decoration: none;\n  color: #222;\n}\ninput[data-v-7629d47c] {\n  border-width: 0;\n}\n.myextension .banner img[data-v-7629d47c] {\n  width: 100%;\n}\n.myextension .main[data-v-7629d47c] {\n  position: relative;\n  top: -0.25rem;\n}\n.welcome[data-v-7629d47c] {\n  padding: 0.625rem;\n  background: #ffffff;\n}\n.welcome .text p[data-v-7629d47c] {\n    font-size: 12px;\n    color: #666;\n    line-height: 1.2rem;\n}\n.welcome .text p span[data-v-7629d47c] {\n      color: #f55955;\n}\n.welcome .info[data-v-7629d47c] {\n    margin-top: 0.625rem;\n}\n.welcome .info input[data-v-7629d47c] {\n      display: block;\n      margin-bottom: 0.5rem;\n      width: 100%;\n      height: 2rem;\n      border-radius: 0.3125rem;\n      padding: 0 0.3125rem;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      outline: none;\n}\n.welcome .info .inp[data-v-7629d47c] {\n      border: 0.0625rem solid #b8b8b8;\n}\n.welcome .info .inp[data-v-7629d47c]:focus {\n      border-color: #f55955;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n}\n.welcome .info span[data-v-7629d47c] {\n      color: #f55955;\n}\n.welcome .info .btn[data-v-7629d47c] {\n      background: #f55955;\n      color: #ffffff;\n      margin-bottom: 0.5rem;\n      width: 100%;\n      height: 2rem;\n      border-radius: 0.3125rem;\n      padding: 0 0.3125rem;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      text-align: center;\n      font-size: 12px;\n      line-height: 2rem;\n}\n.welcome .info .btn i[data-v-7629d47c] {\n        display: inline-block;\n}\n.welcome .info .btn[data-v-7629d47c]:focus {\n      background: #d8403c;\n}\n.myextension .main .vip_main[data-v-7629d47c] {\n  background: #ffffff;\n  margin: 0.9375rem 0;\n}\n.myextension .main .vip_main .title[data-v-7629d47c] {\n    padding: 0.625rem;\n    font-size: 12px;\n    border-bottom: 0.0625rem solid #eeeeee;\n    text-align: center;\n}\n.myextension .main .vip_main .vip[data-v-7629d47c] {\n    padding: 0.9375rem 0.625rem;\n    overflow: hidden;\n    font-size: 12px;\n    color: #999;\n}\n.myextension .main .vip_main .vip .ico1[data-v-7629d47c],\n    .myextension .main .vip_main .vip .ico2[data-v-7629d47c] {\n      width: 15%;\n      float: left;\n}\n.myextension .main .vip_main .vip .ico1 i[data-v-7629d47c] {\n      background: #32cd32;\n}\n.myextension .main .vip_main .vip .ico2 i[data-v-7629d47c] {\n      background: #fece00;\n}\n.myextension .main .vip_main .vip .text[data-v-7629d47c] {\n      float: left;\n      width: 85%;\n}\n.myextension .main .vip_main .vip .text .t1[data-v-7629d47c] {\n        font-size: 16px;\n        color: #333;\n        margin-bottom: 0.3125rem;\n        text-align: left;\n}\n.myextension .main .vip_main .vip .text .t2[data-v-7629d47c] {\n        text-align: justify;\n}\n.myextension .main .vip_main .vip i[data-v-7629d47c] {\n      background: #32cd32;\n      height: 2.25rem;\n      width: 2.25rem;\n      border-radius: 1.125rem;\n      color: #fff;\n      text-align: center;\n      line-height: 2.375rem;\n      font-size: 18px;\n}\n.myextension .main .vip_main .vip1[data-v-7629d47c] {\n    border-bottom: 0.0625rem solid #eeeeee;\n}\n.myextension .success[data-v-7629d47c] {\n  height: 12.5rem;\n  padding-top: 4.0625rem;\n  background: #ffffff;\n}\n.myextension .success .ico[data-v-7629d47c] {\n    height: 4.0625rem;\n    width: 4.0625rem;\n    margin: auto;\n    border: 0.1875rem solid #32cd32;\n    border-radius: 4rem;\n    color: #32cd32;\n    font-size: 36px;\n    text-align: center;\n    line-height: 4rem;\n}\n.myextension .success .text[data-v-7629d47c] {\n    height: 2rem;\n    margin-top: 1.875rem;\n    color: #666;\n    line-height: 1.6rem;\n    text-align: center;\n}\n.myextension .success a .sub[data-v-7629d47c] {\n    height: 2rem;\n    width: 80%;\n    background: #f55955;\n    margin: 1.25rem auto;\n    border-radius: 2rem;\n    color: #fff;\n    line-height: 2rem;\n    text-align: center;\n    font-size: 14px;\n    margin-bottom: 1.25rem;\n}\n.myextension .success a .sub[data-v-7629d47c]:focus {\n    background: #d8403c;\n}\n",""])},t9wh:function(n,e,i){n.exports=i.p+"static/app/img/myextension.31925f6.png"}});