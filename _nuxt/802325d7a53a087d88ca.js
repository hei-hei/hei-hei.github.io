(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{137:function(t,e,n){var content=n(139);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("02db19da",content,!0,{sourceMap:!1})},138:function(t,e,n){"use strict";var o=n(137);n.n(o).a},139:function(t,e,n){(t.exports=n(41)(!1)).push([t.i,".copyright[data-v-51105e96]{line-height:18px;font-size:12px;color:#9c9c9c;text-align:center;min-height:100px;display:grid;align-items:center;background-color:#fff}",""])},140:function(t,e,n){"use strict";n(138);var o=n(15),component=Object(o.a)({},function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"copyright"},[this._v("\n  © Copyright Hei-Hei, All rights reserved.\n")])},[],!1,null,"51105e96",null);e.a=component.exports},142:function(t,e,n){var content=n(172);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("f747cf86",content,!0,{sourceMap:!1})},171:function(t,e,n){"use strict";var o=n(142);n.n(o).a},172:function(t,e,n){(t.exports=n(41)(!1)).push([t.i,'.container .top[data-v-0481921c]{margin-left:37px;margin-top:71px;position:relative;height:123px}.container .top .arrow__back[data-v-0481921c]{padding:19px;margin-top:-19px;margin-left:-19px;cursor:pointer}.container .top .caption[data-v-0481921c]{display:inline-block;position:absolute;right:39px;font-weight:400;line-height:17px;font-size:12px}.container .top .title[data-v-0481921c]{left:0}.container .top .count[data-v-0481921c],.container .top .title[data-v-0481921c]{display:inline-block;position:absolute;top:29px;font-weight:800;line-height:34px;font-size:24px}.container .top .count[data-v-0481921c]{right:39px}.container .rect[data-v-0481921c]{padding-top:100%;position:relative;font-weight:400;line-height:17px;font-size:12px;cursor:pointer}.container .rect .video[data-v-0481921c]{position:absolute;top:0}.container .rect[data-v-0481921c]:before{z-index:999;content:"";display:block;position:absolute;min-width:calc(100% + 50px);min-height:68px;left:-25px;top:-40px;background:radial-gradient(closest-side,rgba(0,0,0,.1) 0,transparent 100%);clip:rect(40px,9999px,68px,0)}.container .rect .background[data-v-0481921c]{display:block;position:absolute;top:0;width:100%}.container .rect .name[data-v-0481921c]{position:absolute;display:inline-block;left:37px;top:22px}.container .rect .type[data-v-0481921c]{position:absolute;top:22px;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.container .rect .number[data-v-0481921c]{position:absolute;top:22px;right:39px}.container .rect .arrow[data-v-0481921c]{position:absolute;top:50%;right:39px}',""])},226:function(t,e,n){"use strict";n.r(e);var o={components:{CopyRight:n(140).a},data:function(){return{width:window.innerWidth,list:[{name:"검정치마체",type:"typo design",number:"01",color:"#F7F7F7",url:this.scaledImage("https://res.cloudinary.com/dvcuac7zg/image/upload/v1549290073/heihei/chima_card_thumbnail.jpg")},{name:"이상한 숲",type:"character design",number:"02",color:"#CDCDCD",url:this.scaledImage("https://res.cloudinary.com/dvcuac7zg/image/upload/v1549290075/heihei/child_card_thumbnail.jpg")},{name:"C4D",type:"c4d doodle",number:"03",color:"#3A8A71",url:this.scaledImage("https://res.cloudinary.com/dvcuac7zg/image/upload/v1549290087/heihei/c4d_card_thumbnail.jpg")}]}},mounted:function(){window.addEventListener("resize",this.windowResized),window.scrollTo(0,0)},methods:{windowResized:function(){this.width=window.innerWidth},scaledImage:function(t){return t&&t.slice(0,50)+"c_scale,w_750/"+t.slice(50)}},beforeDestroy:function(){window.removeEventListener("resize",this.windowResized)},transition:{mode:"out-in",enterActiveClass:"fade-enter-active",leaveActiveClass:"fade-leave-active",appearActiveClass:"fade-enter-active"}},c=(n(171),n(15)),component=Object(c.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"container"},[n("div",{staticClass:"top"},[n("img",{staticClass:"arrow__back",attrs:{src:"https://images.velog.io/post-images/chris/34975800-2788-11e9-a89e-513e433f9a41/arrowleft.svg"},on:{click:function(e){return t.$router.push("/")}}}),t._v(" "),n("div",{staticClass:"caption"},[t._v("contents")]),t._v(" "),n("div",{staticClass:"title"},[t._v("etc")]),t._v(" "),n("div",{staticClass:"count"},[t._v("05")])]),t._v(" "),t._l(t.list,function(e){return n("div",{key:e.number,staticClass:"rect",style:{"background-color":e.color,color:"03"===e.number?"white":"black"},on:{click:function(n){t.$router.push("/"+t.$route.path.split("/")[1]+"/"+e.number)}}},[n("img",{staticClass:"background",attrs:{src:e.url}}),t._v(" "),n("div",{staticClass:"name"},[t._v(t._s(e.name))]),t._v(" "),n("div",{staticClass:"type"},[t._v(t._s(e.type))]),t._v(" "),n("div",{staticClass:"number"},[t._v(t._s(e.number))]),t._v(" "),n("img",{staticClass:"arrow",attrs:{src:"https://images.velog.io/post-images/chris/a3b24650-2774-11e9-8a2a-c90b1e879aba/arrowright.svg"}})])}),t._v(" "),n("copy-right")],2)},[],!1,null,"0481921c",null);e.default=component.exports}}]);