webpackJsonp([68],{"5xAB":function(t,a,e){var n=e("LNpT");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e("FIqI")("5c8f3b71",n,!0,{})},LNpT:function(t,a,e){a=t.exports=e("UTlt")(!1),a.push([t.i,"\n.data-item[data-v-79413c2e] {\n  float: left;\n  min-width: 170px;\n  margin-top: 30px;\n}\n.data-item .data-title[data-v-79413c2e] {\n    font-size: 12px;\n    color: #878d99;\n    margin-bottom: 17px;\n}\n.data-item .data-num[data-v-79413c2e] {\n    color: #353535;\n    font-size: 24px;\n}\n.chart-style[data-v-79413c2e] {\n  width: 100%;\n  height: 380px;\n  border-bottom: 1px dashed #eee;\n  margin-bottom: 15px;\n}\n",""])},uSx5:function(t,a,e){"use strict";function n(t){e("5xAB")}Object.defineProperty(a,"__esModule",{value:!0});var s=e("2sCs"),i=e.n(s),l={data:function(){return{dateArr:"",params:{queryModel:"day",channelId:""},channelParams:{parentId:"",https:"",all:""},time:"",date:{year:0,month:0,day:0},dataInfo:{},totoal:"",year:"",month:"",sum:0,channelList:[{hasChild:!0,id:"",name:"根栏目"}],parentId:[]}},methods:{getDay:function(t,a){return new Date(t,a,0).getDate()},query:function(t){"day"===t&&(this.time=this.date.year+"-"+this.date.month+"-"+this.date.day),"month"===t&&(this.time=this.date.year+"-"+this.date.month),"year"===t&&(this.time=this.date.year),this.getDataInfo()},getDataInfo:function(){var t=this,a="";a=this.parentId[this.parentId.length-1],this.params.channelId=a,i.a.post(this.$api.statisticContentList,this.params).then(function(a){t.dataInfo=a.body.data,t.totoal=a.body.totalCount,t.sum=0;for(var e in a.body.data)t.sum=t.sum+a.body.data[e][0];0===t.totoal&&(t.totoal=1)})},getChannel:function(){var t=this;this.$http.post(this.$api.fullTextSearchChannelList,{hasContentOnly:!1}).then(function(a){t.channelList=t.channelList.concat(a.body),t.loading=!1}).catch(function(a){t.loading=!1})}},created:function(){var t=new Date,a=t.getFullYear(),e=t.getMonth()+1,n=t.getDate();this.date.year=a,this.date.month=e,this.date.day=n,this.year=a,this.month=e,this.time=a+"-"+e+"-"+n,this.getDataInfo(),this.getChannel()}},o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"cms-body cms-chart-box"},[e("div",{staticClass:"cms-list-header",staticStyle:{"padding-left":"0"}},[e("h5",{staticClass:"data-header-title"},[t._v("内容发布数("+t._s(t.time)+")")]),t._v(" "),e("div",{staticClass:"flex-date"},[e("label",{staticClass:"cms-label",staticStyle:{"margin-left":"0"}},[t._v("日期：")]),t._v(" "),e("el-radio-group",{staticStyle:{"margin-right":"10px"},attrs:{size:"small"},on:{change:t.query},model:{value:t.params.queryModel,callback:function(a){t.$set(t.params,"queryModel",a)},expression:"params.queryModel"}},[e("el-radio-button",{attrs:{label:"day"}},[t._v("今日")]),t._v(" "),e("el-radio-button",{attrs:{label:"month"}},[t._v("本月")]),t._v(" "),e("el-radio-button",{attrs:{label:"year"}},[t._v("今年")])],1)],1),t._v(" "),e("div",{staticClass:"flex-date"},[e("label",{staticClass:"cms-label",staticStyle:{"margin-left":"0"}},[t._v("筛选：")]),t._v(" "),e("el-cascader",{staticClass:"cms-width",attrs:{props:{value:"id",label:"name",children:"child"},options:t.channelList,"change-on-select":"",filterable:""},on:{change:t.query},model:{value:t.parentId,callback:function(a){t.parentId=a},expression:"parentId"}})],1)]),t._v(" "),e("table",{staticClass:"data-table"},[t._m(0),t._v(" "),e("tr",[e("td",[t._v("合计")]),t._v(" "),e("td",[t._v(t._s(t.sum))]),t._v(" "),e("td")]),t._v(" "),t._l(t.dataInfo,function(a,n){return e("tr",{key:n},["day"===t.params.queryModel?e("td",[a[1]<10?e("span",[t._v("\n                                      0"+t._s(a[1])+":00-0"+t._s(a[1])+":59\n                                  ")]):e("span",[t._v("\n                                      "+t._s(a[1])+":00-"+t._s(a[1])+":59\n                                  ")])]):t._e(),t._v(" "),"month"===t.params.queryModel?e("td",[t._v("                               \n                                  "+t._s(t.year)+"-"+t._s(t.month)+"-"+t._s(a[1])+" 00:00:00-23:59:59                                \n                              ")]):t._e(),t._v(" "),"year"===t.params.queryModel?e("td",[t._v("                               \n                                   "+t._s(t.year)+"-"+t._s(a[1])+"-01——"+t._s(t.year)+"-"+t._s(a[1])+"-"+t._s(t.getDay(t.year,a[1]))+" \n                                                                 \n                              ")]):t._e(),t._v(" "),e("td",[t._v(t._s(a[0]))]),t._v(" "),e("td",[t._v(t._s((a[0]/t.totoal*100).toFixed(1))+"%")])])})],2)])},r=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("tr",[e("th",[t._v("时段")]),t._v(" "),e("th",[t._v("内容发布数")]),t._v(" "),e("th",[t._v("占比")])])}],d={render:o,staticRenderFns:r},c=d,h=e("Z0/y"),_=n,m=h(l,c,!1,_,"data-v-79413c2e",null);a.default=m.exports}});