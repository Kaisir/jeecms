webpackJsonp([83],{Pboa:function(n,e,a){"use strict";function t(n){a("U7vT")}Object.defineProperty(e,"__esModule",{value:!0});var l=a("5HJ5"),r=a("lcoF"),s=a("x1ym"),o=(a("2sCs"),{mixins:[l.a,r.a],data:function(){var n=s.a.required();s.a.number();return{params:{},rules:{name:[n],url:[n]},param:{name:"",url:""}}},methods:{save:function(n){var e=this,a=[],t=[],l=[],r=[];for(var s in this.tableData)l.push(this.tableData[s].id),a.push(this.tableData[s].name),t.push(this.tableData[s].url),r.push(this.tableData[s].disabled);this.$http.post(this.$api.wordKeywordUpdate,{names:a.join(","),ids:l.join(","),urls:t.join(","),disableds:r.join(",")}).then(function(n){"200"==n.code&&(e.successMessage("保存成功"),e.initTableData(e.$api.wordKeywordList,e.params)),e.loading=!1}).catch(function(n){e.loading=!1})},add:function(){var n=this;this.$refs.form.validate(function(e){if(!e)return!1;n.$http.post(n.$api.wordKeywordSave,n.param).then(function(e){"200"==e.code&&(n.successMessage("添加成功"),n.initTableData(n.$api.wordKeywordList,n.params)),n.loading=!1}).catch(function(e){n.loading=!1})})},update:function(){}},created:function(){this.initTableData(this.$api.wordKeywordList,this.params)}}),i=function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("section",{directives:[{name:"loading",rawName:"v-loading",value:n.loading,expression:"loading"}],staticClass:"cms-body"},[a("div",{staticClass:"cms-list-header"},[a("el-form",{ref:"form",attrs:{model:n.param,rules:n.rules,"label-width":"162px"}},[a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"关键字",prop:"name"}},[a("el-input",{model:{value:n.param.name,callback:function(e){n.$set(n.param,"name",e)},expression:"param.name"}})],1)],1),n._v(" "),a("el-col",{attrs:{span:10}},[a("el-form-item",{attrs:{label:"内容",prop:"url"}},[a("el-input",{model:{value:n.param.url,callback:function(e){n.$set(n.param,"url",e)},expression:"param.url"}})],1)],1),n._v(" "),a("el-col",{attrs:{span:3}},[n._v(" ")]),n._v(" "),a("el-col",{attrs:{span:4}},[a("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/word/keyword/add",expression:"'/word/keyword/add'"}],attrs:{type:"primary",icon:"el-icon-plus"},on:{click:function(e){n.add()}}},[n._v("\n                        添加\n                      ")])],1)],1)],1)],1),n._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:n.tableData,stripe:""},on:{"selection-change":n.checkIds}},[a("el-table-column",{attrs:{type:"selection",width:"65",align:"right"}}),n._v(" "),a("el-table-column",{attrs:{prop:"id",label:"ID",width:"50",align:"center"}}),n._v(" "),a("el-table-column",{attrs:{prop:"name",label:"关键字",align:"center"},scopedSlots:n._u([{key:"default",fn:function(e){return a("div",{},[a("el-input",{model:{value:e.row.name,callback:function(a){n.$set(e.row,"name",a)},expression:"scope.row.name"}})],1)}}])}),n._v(" "),a("el-table-column",{attrs:{width:"50",align:"center"}}),n._v(" "),a("el-table-column",{attrs:{prop:"url",label:"内容",align:"center"},scopedSlots:n._u([{key:"default",fn:function(e){return a("div",{},[a("el-input",{model:{value:e.row.url,callback:function(a){n.$set(e.row,"url",a)},expression:"scope.row.url"}})],1)}}])}),n._v(" "),a("el-table-column",{attrs:{prop:"disabled",label:"禁用",align:"center"},scopedSlots:n._u([{key:"default",fn:function(e){return a("div",{},[a("el-checkbox",{model:{value:e.row.disabled,callback:function(a){n.$set(e.row,"disabled",a)},expression:"scope.row.disabled"}})],1)}}])}),n._v(" "),a("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:n._u([{key:"default",fn:function(e){return a("div",{},[a("cms-button",{directives:[{name:"perms",rawName:"v-perms",value:"/word/keyword/delete",expression:"'/word/keyword/delete'"}],attrs:{type:"delete"},nativeOn:{click:function(a){n.deleteBatch(n.$api.wordKeywordDelete,e.row.id)}}})],1)}}])})],1),n._v(" "),a("div",{staticClass:"cms-list-footer "},[a("div",{staticClass:"cms-left"},[a("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/word/keyword/delete",expression:"'/word/keyword/delete'"}],attrs:{disabled:n.disabled},on:{click:function(e){n.deleteBatch(n.$api.wordKeywordDelete,n.ids)}}},[n._v("批量删除")]),n._v(" "),a("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/word/keyword/update",expression:"'/word/keyword/update'"}],attrs:{disabled:n.disabled},on:{click:function(e){n.save(n.ids)}}},[n._v("保存内容")])],1)])],1)},d=[],c={render:i,staticRenderFns:d},u=c,p=a("Z0/y"),m=t,v=p(o,u,!1,m,null,null);e.default=v.exports},U0Da:function(n,e,a){e=n.exports=a("UTlt")(!1),e.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},U7vT:function(n,e,a){var t=a("U0Da");"string"==typeof t&&(t=[[n.i,t,""]]),t.locals&&(n.exports=t.locals);a("FIqI")("03c7f580",t,!0,{})}});