(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{137:function(t,e,o){var content=o(139);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(42).default)("c5c8f0a6",content,!0,{sourceMap:!1})},138:function(t,e,o){"use strict";var n=o(137);o.n(n).a},139:function(t,e,o){(t.exports=o(41)(!1)).push([t.i,".copyright[data-v-182b8a0e]{line-height:18px;font-size:12px;color:rgba(0,0,0,.38);text-align:center;min-height:100px;display:grid;align-items:center;background-color:#fff}",""])},140:function(t,e,o){"use strict";o(138);var n=o(15),component=Object(n.a)({},function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"copyright"},[this._v("\n  © Copyright Hei-Hei, All rights reserved.\n")])},[],!1,null,"182b8a0e",null);e.a=component.exports},143:function(t,e,o){var content=o(174);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(42).default)("7eb98d28",content,!0,{sourceMap:!1})},173:function(t,e,o){"use strict";var n=o(143);o.n(n).a},174:function(t,e,o){(t.exports=o(41)(!1)).push([t.i,'.container .top[data-v-7a26a34a]{margin-left:37px;margin-top:71px;position:relative;height:123px}.container .top .arrow__back[data-v-7a26a34a]{padding:19px;margin-top:-19px;margin-left:-19px;cursor:pointer}.container .top .caption[data-v-7a26a34a]{display:inline-block;position:absolute;right:39px;font-weight:400;line-height:17px;font-size:12px}.container .top .title[data-v-7a26a34a]{left:0}.container .top .count[data-v-7a26a34a],.container .top .title[data-v-7a26a34a]{display:inline-block;position:absolute;top:29px;font-weight:800;line-height:34px;font-size:24px}.container .top .count[data-v-7a26a34a]{right:39px}.container .rect[data-v-7a26a34a]{padding-top:100%;position:relative;font-weight:400;line-height:17px;font-size:12px;cursor:pointer}.container .rect .video[data-v-7a26a34a]{position:absolute;top:0}.container .rect[data-v-7a26a34a]:before{z-index:999;content:"";display:block;position:absolute;min-width:calc(100% + 50px);min-height:68px;left:-25px;top:-40px;background:radial-gradient(closest-side,rgba(0,0,0,.1) 0,transparent 100%);clip:rect(40px,9999px,68px,0)}.container .rect .background[data-v-7a26a34a]{display:block;position:absolute;top:0;width:100%}.container .rect .name[data-v-7a26a34a]{position:absolute;display:inline-block;left:37px;top:22px}.container .rect .type[data-v-7a26a34a]{position:absolute;top:22px;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.container .rect .number[data-v-7a26a34a]{position:absolute;top:22px;right:39px}.container .rect .arrow[data-v-7a26a34a]{position:absolute;top:50%;right:39px}',""])},227:function(t,e,o){"use strict";o.r(e);var n={components:{CopyRight:o(140).a},data:function(){return{width:window.innerWidth,list:[{name:"소프트웨어에 물들다",type:"poster graphic",number:"01",color:"#CED0CF",url:this.scaledImage("https://res.cloudinary.com/dvcuac7zg/image/upload/v1549290397/heihei/somul_card_thumbnail-1.jpg")},{name:"찍히면 죽는다",type:"poster graphic",number:"02",color:"#1A1A1A",url:this.scaledImage("https://res.cloudinary.com/dvcuac7zg/image/upload/v1549290149/heihei/mart_card_thumbnail.jpg")}]}},mounted:function(){window.addEventListener("resize",this.windowResized),window.scrollTo(0,0)},methods:{windowResized:function(){this.width=window.innerWidth},scaledImage:function(t){return t&&t.slice(0,50)+"c_scale,w_750/"+t.slice(50)}},beforeDestroy:function(){window.removeEventListener("resize",this.windowResized)},transition:{mode:"out-in",enterActiveClass:"fade-enter-active",leaveActiveClass:"fade-leave-active",appearActiveClass:"fade-enter-active"}},r=(o(173),o(15)),component=Object(r.a)(n,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"container"},[o("div",{staticClass:"top"},[o("img",{staticClass:"arrow__back",attrs:{src:"https://images.velog.io/post-images/chris/34975800-2788-11e9-a89e-513e433f9a41/arrowleft.svg"},on:{click:function(e){return t.$router.push("/")}}}),t._v(" "),o("div",{staticClass:"caption"},[t._v("contents")]),t._v(" "),o("div",{staticClass:"title"},[t._v("graphic")]),t._v(" "),o("div",{staticClass:"count"},[t._v("02")])]),t._v(" "),t._l(t.list,function(e){return o("div",{key:e.number,staticClass:"rect",style:{"background-color":e.color,color:"02"===e.number?"white":"black"},on:{click:function(o){t.$router.push("/"+t.$route.path.split("/")[1]+"/"+e.number)}}},[o("img",{staticClass:"background",attrs:{src:e.url}}),t._v(" "),o("div",{staticClass:"name"},[t._v(t._s(e.name))]),t._v(" "),o("div",{staticClass:"type"},[t._v(t._s(e.type))]),t._v(" "),o("div",{staticClass:"number"},[t._v(t._s(e.number))]),t._v(" "),o("img",{staticClass:"arrow",attrs:{src:"https://images.velog.io/post-images/chris/a3b24650-2774-11e9-8a2a-c90b1e879aba/arrowright.svg"}})])}),t._v(" "),o("copy-right")],2)},[],!1,null,"7a26a34a",null);e.default=component.exports}}]);