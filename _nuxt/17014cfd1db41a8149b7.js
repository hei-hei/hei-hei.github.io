(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{136:function(t,e,n){var content=n(138);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(41).default)("3b66df2f",content,!0,{sourceMap:!1})},137:function(t,e,n){"use strict";var o=n(136);n.n(o).a},138:function(t,e,n){(t.exports=n(40)(!1)).push([t.i,".copyright[data-v-327ba61e]{line-height:18px;font-size:12px;color:rgba(0,0,0,.38);text-align:center;min-height:100px;display:grid;align-items:center}",""])},139:function(t,e,n){"use strict";n(137);var o=n(15),component=Object(o.a)({},function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"copyright"},[this._v("\n  © Copyright Hei-Hei, All rights reserved.\n")])},[],!1,null,"327ba61e",null);e.a=component.exports},140:function(t,e,n){var content=n(169);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(41).default)("5b7db078",content,!0,{sourceMap:!1})},168:function(t,e,n){"use strict";var o=n(140);n.n(o).a},169:function(t,e,n){(t.exports=n(40)(!1)).push([t.i,'.container .top[data-v-23a52038]{margin-left:37px;margin-top:71px;position:relative;height:123px}.container .top .arrow__back[data-v-23a52038]{padding:19px;margin-top:-19px;margin-left:-19px;cursor:pointer}.container .top .caption[data-v-23a52038]{display:inline-block;position:absolute;right:39px;font-weight:400;line-height:17px;font-size:12px}.container .top .title[data-v-23a52038]{left:0}.container .top .count[data-v-23a52038],.container .top .title[data-v-23a52038]{display:inline-block;position:absolute;top:29px;font-weight:800;line-height:34px;font-size:24px}.container .top .count[data-v-23a52038]{right:39px}.container .rect[data-v-23a52038]{padding-top:100%;position:relative;font-weight:400;line-height:17px;font-size:12px;cursor:pointer}.container .rect .video[data-v-23a52038]{position:absolute;top:0}.container .rect[data-v-23a52038]:before{z-index:999;content:"";display:block;position:absolute;min-width:calc(100% + 50px);min-height:68px;left:-25px;top:-40px;background:radial-gradient(closest-side,rgba(0,0,0,.1) 0,transparent 100%);clip:rect(40px,9999px,68px,0)}.container .rect .background[data-v-23a52038]{display:block;position:absolute;top:0;width:100%}.container .rect .name[data-v-23a52038]{position:absolute;display:inline-block;left:37px;top:22px}.container .rect .type[data-v-23a52038]{position:absolute;top:22px;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.container .rect .number[data-v-23a52038]{position:absolute;top:22px;right:39px}',""])},224:function(t,e,n){"use strict";n.r(e);var o={components:{CopyRight:n(139).a},data:function(){return{width:window.innerWidth,list:[{name:"귤잼",type:"contents design",number:"01",color:"#E53786",url:this.scaledImage("https://res.cloudinary.com/dvcuac7zg/image/upload/v1549290123/heihei/jam_card_thumbnail.jpg")},{name:"소핫",type:"contents design",number:"02",color:"#F4F4F4",url:this.scaledImage("https://res.cloudinary.com/dvcuac7zg/image/upload/v1549290133/heihei/sohot_card_thumbnail.jpg")},{name:"지식탐탐",type:"contents design",number:"03",color:"#202020",url:this.scaledImage("https://res.cloudinary.com/dvcuac7zg/image/upload/v1549290391/heihei/tamyam_card_thumbnail-1.jpg")},{name:"아카이브",type:"contents design",number:"04",color:"#F4F4F4",url:this.scaledImage("https://res.cloudinary.com/dvcuac7zg/image/upload/v1549290116/heihei/archive_card_thumbnail.jpg")},{name:"piki enter",type:"contents design",number:"05",color:"#F4F4F4",url:this.scaledImage("https://res.cloudinary.com/dvcuac7zg/image/upload/v1549290083/heihei/enter_card_thumbnail.jpg")},{name:"dode",type:"logo design",number:"06",color:"#F4F4F4",url:this.scaledImage("https://res.cloudinary.com/dvcuac7zg/image/upload/v1549290095/heihei/dode_card_thumbnail.jpg")}]}},mounted:function(){window.addEventListener("resize",this.windowResized),window.scrollTo(0,0)},methods:{windowResized:function(){this.width=window.innerWidth},scaledImage:function(t){return t&&t.slice(0,50)+"c_scale,w_750/"+t.slice(50)}},beforeDestroy:function(){window.removeEventListener("resize",this.windowResized)},transition:{mode:"out-in",enterActiveClass:"fade-enter-active",leaveActiveClass:"fade-leave-active",appearActiveClass:"fade-enter-active"}},r=(n(168),n(15)),component=Object(r.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"container"},[n("div",{staticClass:"top"},[n("img",{staticClass:"arrow__back",attrs:{src:"https://images.velog.io/post-images/chris/34975800-2788-11e9-a89e-513e433f9a41/arrowleft.svg"},on:{click:function(e){t.$router.go(-1)}}}),t._v(" "),n("div",{staticClass:"caption"},[t._v("contents")]),t._v(" "),n("div",{staticClass:"title"},[t._v("branding")]),t._v(" "),n("div",{staticClass:"count"},[t._v("06")])]),t._v(" "),t._l(t.list,function(e){return n("div",{key:e.number,staticClass:"rect",style:{"background-color":e.color,color:-1!==["04","05"].indexOf(e.number)?"white":"black"},on:{click:function(n){t.$router.push(t.$route.name+"/"+e.number)}}},[n("img",{staticClass:"background",attrs:{src:e.url}}),t._v(" "),n("div",{staticClass:"name"},[t._v(t._s(e.name))]),t._v(" "),n("div",{staticClass:"type"},[t._v(t._s(e.type))]),t._v(" "),n("div",{staticClass:"number"},[t._v(t._s(e.number))])])}),t._v(" "),n("copy-right")],2)},[],!1,null,"23a52038",null);e.default=component.exports}}]);