(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{"05a6":function(t,e,n){"use strict";n("f47d")},"5ec6":function(t,e,n){"use strict";n("f1df")},"7b3d":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Header"),t._v(" "),n("div",{staticClass:"layout"},[n("h-row",{attrs:{name:"flex"}},[n("h-col",{staticClass:"layout-menu-left",attrs:{span:"5"}},[n("h-menu",{attrs:{"active-name":"1-0",theme:"dark",width:"auto","open-names":["1","4"]}},[n("div",{staticClass:"layout-logo-left"}),t._v(" "),n("h-submenu",{attrs:{name:"1"}},[n("template",{slot:"title"},[n("h-icon",{attrs:{name:"mail"}}),t._v("\n              产品管理\n            ")],1),t._v(" "),n("router-link",{attrs:{to:"/home"}},[n("h-menu-item",{attrs:{name:"1-0"}},[t._v("主页")])],1),t._v(" "),n("router-link",{attrs:{to:"/PageOne"}},[n("h-menu-item",{attrs:{name:"1-1"}},[t._v("产品列表")])],1),t._v(" "),n("router-link",{attrs:{to:"/PageTwo"}},[n("h-menu-item",{attrs:{name:"1-2"}},[t._v("新建基金")])],1),t._v(" "),n("router-link",{attrs:{to:"/PageThree"}},[n("h-menu-item",{attrs:{name:"1-3"}},[t._v("编辑产品")])],1),t._v(" "),n("router-link",{attrs:{to:"/detail"}},[n("h-menu-item",{attrs:{name:"1-4"}},[t._v("详情页")])],1)],2),t._v(" "),n("h-submenu",{attrs:{name:"2"}},[n("template",{slot:"title"},[n("h-icon",{attrs:{name:"mail"}}),t._v("\n              用户管理\n            ")],1),t._v(" "),n("h-menu-item",{attrs:{name:"2-1"}},[n("router-link",{attrs:{to:"/PageThree"}},[t._v("用户列表")])],1),t._v(" "),n("h-menu-item",{attrs:{name:"2-2"}},[n("router-link",{attrs:{to:"/PageThree"}},[t._v("开户")])],1),t._v(" "),n("h-menu-item",{attrs:{name:"2-3"}},[n("router-link",{attrs:{to:"/PageThree"}},[t._v("编辑信息")])],1)],2),t._v(" "),n("h-submenu",{attrs:{name:"3"}},[n("template",{slot:"title"},[n("h-icon",{attrs:{name:"mail"}}),t._v("\n              业务查询\n            ")],1),t._v(" "),n("h-menu-item",{attrs:{name:"3-1"}},[n("router-link",{attrs:{to:"/PageTwo"}},[t._v("业务列表")])],1),t._v(" "),n("h-menu-item",{attrs:{name:"3-2"}},[n("router-link",{attrs:{to:"/PageTwo"}},[t._v("撤销业务")])],1)],2),t._v(" "),n("h-submenu",{attrs:{name:"4"}},[n("template",{slot:"title"},[n("h-icon",{attrs:{name:"mail"}}),t._v("\n              交易管理\n            ")],1),t._v(" "),n("h-menu-item",{attrs:{name:"4-1"}},[t._v("申购")]),t._v(" "),n("h-menu-item",{attrs:{name:"4-2"}},[t._v("赎回")]),t._v(" "),n("h-menu-item",{attrs:{name:"4-3"}},[t._v("个人账户")])],2)],1)],1),t._v(" "),n("h-col",{attrs:{span:"19"}},[n("div",{staticClass:"layout-content"},[n("div",{staticClass:"layout-content-main"},[n("div",[n("h-button",{attrs:{type:"ghost"},on:{click:function(e){return t.jump("/home")}}},[t._v("回到主页")])],1)]),t._v(" "),n("router-view")],1),t._v(" "),n("div",{staticClass:"layout-footer"},[t._v("2017-2030 © HUNDSUN")])])],1)],1)],1)},o=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{height:"50px","line-height":"50px","background-color":"#e9eaec","border-bottom":"1px solid #ccc",display:"flex"}},[n("div",{staticStyle:{width:"200px","padding-left":"30px","font-size":"large","font-weight":"bold",color:"#0275d8"},attrs:{id:"logo"},on:{click:function(e){return t.jump("/home")}}},[t._v("基金管理系统")]),t._v(" "),n("div",{staticStyle:{flex:"1"}}),t._v(" "),n("div",{staticStyle:{width:"100px"}},[n("h-dropdown",[n("a",{attrs:{href:"javascript:void(0)"}},[t._v("\n        用户001\n        "),n("h-icon",{attrs:{name:"unfold"}})],1),t._v(" "),n("h-dropdown-menu",{attrs:{slot:"list"},slot:"list"},[n("h-dropdown-item",[t._v("用户信息")]),t._v(" "),n("h-dropdown-item",[t._v("登出")]),t._v(" "),n("h-dropdown-item",{attrs:{disabled:""}},[t._v("注销")])],1)],1)],1)])},i=[],s={name:"Header",methods:{jump:function(t){this.$hCore.navigate(t)}}},l=s,m=(n("5ec6"),n("7bdc")),u=Object(m["a"])(l,r,i,!1,null,"29f269c3",null),c=u.exports,v={name:"Head",components:{Header:c},methods:{jump:function(t){this.$hCore.navigate(t)}}},d=v,_=(n("05a6"),Object(m["a"])(d,a,o,!1,null,null,null));e["default"]=_.exports},"7bdc":function(t,e,n){"use strict";function a(t,e,n,a,o,r,i,s){var l,m="function"===typeof t?t.options:t;if(e&&(m.render=e,m.staticRenderFns=n,m._compiled=!0),a&&(m.functional=!0),r&&(m._scopeId="data-v-"+r),i?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},m._ssrRegister=l):o&&(l=s?function(){o.call(this,(m.functional?this.parent:this).$root.$options.shadowRoot)}:o),l)if(m.functional){m._injectStyles=l;var u=m.render;m.render=function(t,e){return l.call(e),u(t,e)}}else{var c=m.beforeCreate;m.beforeCreate=c?[].concat(c,l):[l]}return{exports:t,options:m}}n.d(e,"a",(function(){return a}))},f1df:function(t,e,n){},f47d:function(t,e,n){}}]);