webpackJsonp([155],{"5Inf":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("5HJ5"),l=(a("2sCs"),{mixins:[n.a],methods:{},created:function(){this.initTableData(this.$api.crontabList,this.params)}}),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"cms-body"},[a("div",{staticClass:"cms-list-header flex-between"},[a("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/crontab/save",expression:"'/crontab/save'"}],attrs:{type:"primary",icon:"el-icon-plus"},on:{click:function(t){e.routerLink("/crontab/save","save",0)}}},[e._v("添加")])],1),e._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,stripe:""},on:{"selection-change":e.checkIds}},[a("el-table-column",{attrs:{type:"selection",width:"65",align:"right"}}),e._v(" "),a("el-table-column",{attrs:{prop:"id",label:"ID",width:"50",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"任务类型",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[1==t.row.type?a("span",[e._v("首页静态化")]):e._e(),e._v(" "),2==t.row.type?a("span",[e._v("栏目静态化")]):e._e(),e._v(" "),3==t.row.type?a("span",[e._v("内容静态化")]):e._e(),e._v(" "),4==t.row.type?a("span",[e._v("采集")]):e._e(),e._v(" "),5==t.row.type?a("span",[e._v("分发")]):e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"任务名称",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"username",label:"创建用户",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"createTime",label:"创建时间",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"状态",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.enable?a("span",[e._v("启用")]):e._e(),e._v(" "),t.row.enable?e._e():a("span",[e._v("禁用")])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return a("div",{},[a("cms-button",{directives:[{name:"perms",rawName:"v-perms",value:"/crontab/get",expression:"'/crontab/get'"}],attrs:{type:"edit"},nativeOn:{click:function(a){e.routerLink("/crontab/update","update",t.row.id)}}}),e._v(" "),a("cms-button",{directives:[{name:"perms",rawName:"v-perms",value:"/crontab/delete",expression:"'/crontab/delete'"}],attrs:{type:"delete"},nativeOn:{click:function(a){e.deleteBatch(e.$api.crontabDelete,t.row.id)}}})],1)}}])})],1),e._v(" "),a("div",{staticClass:"cms-list-footer"},[a("div",{staticClass:"cms-left"},[a("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/crontab/delete",expression:"'/crontab/delete'"}],attrs:{disabled:e.disabled},on:{click:function(t){e.deleteBatch(e.$api.crontabDelete,e.ids)}}},[e._v("批量删除")])],1),e._v(" "),a("cms-pagination",{attrs:{total:e.total},on:{change:e.getPages}})],1)],1)},r=[],i={render:s,staticRenderFns:r},c=i,o=a("Z0/y"),p=o(l,c,!1,null,null,null);t.default=p.exports}});