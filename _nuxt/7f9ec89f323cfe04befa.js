(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{137:function(t,e,n){var content=n(139);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("02db19da",content,!0,{sourceMap:!1})},138:function(t,e,n){"use strict";var o=n(137);n.n(o).a},139:function(t,e,n){(t.exports=n(41)(!1)).push([t.i,".copyright[data-v-51105e96]{line-height:18px;font-size:12px;color:#9c9c9c;text-align:center;min-height:100px;display:grid;align-items:center;background-color:#fff}",""])},140:function(t,e,n){"use strict";n(138);var o=n(15),component=Object(o.a)({},function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"copyright"},[this._v("\n  © Copyright Hei-Hei, All rights reserved.\n")])},[],!1,null,"51105e96",null);e.a=component.exports},141:function(t,e,n){var content=n(170);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("0e1f4c6c",content,!0,{sourceMap:!1})},169:function(t,e,n){"use strict";var o=n(141);n.n(o).a},170:function(t,e,n){(t.exports=n(41)(!1)).push([t.i,'.container .top[data-v-12670c1f]{margin-left:37px;margin-top:71px;position:relative;height:123px}.container .top .arrow__back[data-v-12670c1f]{padding:19px;margin-top:-19px;margin-left:-19px;cursor:pointer}.container .top .caption[data-v-12670c1f]{display:inline-block;position:absolute;right:39px;font-weight:400;line-height:17px;font-size:12px}.container .top .title[data-v-12670c1f]{left:0}.container .top .count[data-v-12670c1f],.container .top .title[data-v-12670c1f]{display:inline-block;position:absolute;top:29px;font-weight:800;line-height:34px;font-size:24px}.container .top .count[data-v-12670c1f]{right:39px}.container .rect[data-v-12670c1f]{padding-top:100%;position:relative;font-weight:400;line-height:17px;font-size:12px;cursor:pointer}.container .rect .video[data-v-12670c1f]{position:absolute;top:0}.container .rect[data-v-12670c1f]:before{z-index:999;content:"";display:block;position:absolute;min-width:calc(100% + 50px);min-height:68px;left:-25px;top:-40px;background:radial-gradient(closest-side,rgba(0,0,0,.1) 0,transparent 100%);clip:rect(40px,9999px,68px,0)}.container .rect .background[data-v-12670c1f]{display:block;position:absolute;top:0;width:100%}.container .rect .name[data-v-12670c1f]{position:absolute;display:inline-block;left:37px;top:22px}.container .rect .type[data-v-12670c1f]{position:absolute;top:22px;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.container .rect .number[data-v-12670c1f]{position:absolute;top:22px;right:39px}.container .rect .arrow[data-v-12670c1f]{position:absolute;top:50%;right:39px}',""])},225:function(t,e,n){"use strict";n.r(e);var o={components:{CopyRight:n(140).a},data:function(){return{width:window.innerWidth,list:[{name:"귤잼",type:"contents design",number:"01",color:"#FAE25C",url:this.scaledImage("https://res.cloudinary.com/dvcuac7zg/image/upload/v1549290123/heihei/jam_card_thumbnail.jpg")},{name:"소핫",type:"contents design",number:"02",color:"#622593",url:this.scaledImage("https://res.cloudinary.com/dvcuac7zg/image/upload/v1549290133/heihei/sohot_card_thumbnail.jpg")},{name:"지식탐탐",type:"contents design",number:"03",color:"#B7B7B7",url:this.scaledImage("https://res.cloudinary.com/dvcuac7zg/image/upload/v1549290391/heihei/tamyam_card_thumbnail-1.jpg")},{name:"아카이브",type:"contents design",number:"04",color:"#0F151C",url:this.scaledImage("https://res.cloudinary.com/dvcuac7zg/image/upload/v1549290116/heihei/archive_card_thumbnail.jpg")},{name:"piki enter",type:"contents design",number:"05",color:"#181818",url:this.scaledImage("https://res.cloudinary.com/dvcuac7zg/image/upload/v1549290083/heihei/enter_card_thumbnail.jpg")},{name:"dode",type:"logo design",number:"06",color:"#032EC1",url:this.scaledImage("https://res.cloudinary.com/dvcuac7zg/image/upload/v1549290095/heihei/dode_card_thumbnail.jpg")}]}},mounted:function(){window.addEventListener("resize",this.windowResized),window.scrollTo(0,0)},methods:{windowResized:function(){this.width=window.innerWidth},scaledImage:function(t){return t&&t.slice(0,50)+"c_scale,w_750/"+t.slice(50)}},beforeDestroy:function(){window.removeEventListener("resize",this.windowResized)},transition:{mode:"out-in",enterActiveClass:"fade-enter-active",leaveActiveClass:"fade-leave-active",appearActiveClass:"fade-enter-active"}},c=(n(169),n(15)),component=Object(c.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"container"},[n("div",{staticClass:"top"},[n("img",{staticClass:"arrow__back",attrs:{src:"https://images.velog.io/post-images/chris/34975800-2788-11e9-a89e-513e433f9a41/arrowleft.svg"},on:{click:function(e){return t.$router.push("/")}}}),t._v(" "),n("div",{staticClass:"caption"},[t._v("contents")]),t._v(" "),n("div",{staticClass:"title"},[t._v("branding")]),t._v(" "),n("div",{staticClass:"count"},[t._v("06")])]),t._v(" "),t._l(t.list,function(e){return n("div",{key:e.number,staticClass:"rect",style:{"background-color":e.color,color:-1!==["04","05"].indexOf(e.number)?"white":"black"},on:{click:function(n){t.$router.push("/"+t.$route.path.split("/")[1]+"/"+e.number)}}},[n("img",{staticClass:"background",attrs:{src:e.url}}),t._v(" "),n("div",{staticClass:"name"},[t._v(t._s(e.name))]),t._v(" "),n("div",{staticClass:"type"},[t._v(t._s(e.type))]),t._v(" "),n("div",{staticClass:"number"},[t._v(t._s(e.number))]),t._v(" "),n("img",{staticClass:"arrow",style:{filter:-1!==["04","05"].indexOf(e.number)&&"brightness(0) invert(1)"},attrs:{src:"https://images.velog.io/post-images/chris/a3b24650-2774-11e9-8a2a-c90b1e879aba/arrowright.svg"}})])}),t._v(" "),n("copy-right")],2)},[],!1,null,"12670c1f",null);e.default=component.exports}}]);