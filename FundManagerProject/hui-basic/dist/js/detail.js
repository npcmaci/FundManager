(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"0164":function(t,e,n){},1e3:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"product-detail"},[n("h2",[t._v("详情页")]),t._v(" "),n("div",{staticClass:"line-echart",attrs:{id:"productLineEchart"}})])}],o={mounted:function(){this.drawLineEchart()},methods:{drawLineEchart:function(){var t=this.$echarts.init(document.getElementById("productLineEchart")),e={tooltip:{trigger:"axis"},legend:{data:["基金1","基金2","基金3","基金4","基金5"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},toolbox:{feature:{saveAsImage:{}}},xAxis:{type:"category",boundaryGap:!1,data:["周一","周二","周三","周四","周五","周六","周日"]},yAxis:{type:"value"},series:[{name:"基金1",type:"line",stack:"Total",data:[120,132,101,134,90,230,210]},{name:"基金2",type:"line",stack:"Total",data:[220,182,191,234,290,330,310]},{name:"基金3",type:"line",stack:"Total",data:[150,232,201,154,190,330,410]},{name:"基金4",type:"line",stack:"Total",data:[320,332,301,334,390,330,320]},{name:"基金5",type:"line",stack:"Total",data:[820,932,901,934,1290,1330,1320]}]};t.setOption(e)}}},r=o,s=(n("6f49"),n("7bdc")),c=Object(s["a"])(r,a,i,!1,null,null,null);e["default"]=c.exports},"6f49":function(t,e,n){"use strict";n("0164")},"7bdc":function(t,e,n){"use strict";function a(t,e,n,a,i,o,r,s){var c,d="function"===typeof t?t.options:t;if(e&&(d.render=e,d.staticRenderFns=n,d._compiled=!0),a&&(d.functional=!0),o&&(d._scopeId="data-v-"+o),r?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},d._ssrRegister=c):i&&(c=s?function(){i.call(this,(d.functional?this.parent:this).$root.$options.shadowRoot)}:i),c)if(d.functional){d._injectStyles=c;var l=d.render;d.render=function(t,e){return c.call(e),l(t,e)}}else{var u=d.beforeCreate;d.beforeCreate=u?[].concat(u,c):[c]}return{exports:t,options:d}}n.d(e,"a",(function(){return a}))}}]);