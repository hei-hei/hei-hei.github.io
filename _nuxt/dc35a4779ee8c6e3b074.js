(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{137:function(t,e,o){var content=o(139);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(42).default)("9f19e7d4",content,!0,{sourceMap:!1})},138:function(t,e,o){"use strict";var n=o(137);o.n(n).a},139:function(t,e,o){(t.exports=o(41)(!1)).push([t.i,".copyright[data-v-9b68d5b2]{line-height:18px;font-size:12px;color:#000;text-align:center;min-height:100px;display:grid;align-items:center}",""])},140:function(t,e,o){"use strict";o(138);var n=o(15),component=Object(n.a)({},function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"copyright"},[this._v("\n  © Copyright Hei-Hei, All rights reserved.\n")])},[],!1,null,"9b68d5b2",null);e.a=component.exports},146:function(t,e,o){var content=o(180);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(42).default)("0fdc4f3d",content,!0,{sourceMap:!1})},179:function(t,e,o){"use strict";var n=o(146);o.n(n).a},180:function(t,e,o){(t.exports=o(41)(!1)).push([t.i,'.container .top[data-v-ebe2a9f6]{margin-left:37px;margin-top:71px;position:relative;height:123px}.container .top .arrow__back[data-v-ebe2a9f6]{padding:19px;margin-top:-19px;margin-left:-19px;cursor:pointer}.container .top .caption[data-v-ebe2a9f6]{display:inline-block;position:absolute;right:39px;font-weight:400;line-height:17px;font-size:12px}.container .top .title[data-v-ebe2a9f6]{left:0;font-weight:800;line-height:24px;font-size:22px}.container .top .title[data-v-ebe2a9f6],.container .top .tools[data-v-ebe2a9f6]{display:inline-block;position:absolute;top:29px}.container .top .tools[data-v-ebe2a9f6]{right:39px}.container .top .tools .icon[data-v-ebe2a9f6]{margin-left:5px;display:inline-block}.container .top .desc[data-v-ebe2a9f6]{display:inline-block;position:absolute;top:60px;left:0;line-height:17px;font-size:12px;color:rgba(0,0,0,.38)}.container .rect[data-v-ebe2a9f6]{display:grid;grid-template-columns:1fr 1fr 1fr;position:relative;font-weight:400;line-height:17px;font-size:12px}.container .rect[data-v-ebe2a9f6]:before{z-index:999;content:"";display:block;position:absolute;min-width:calc(100% + 50px);min-height:68px;left:-25px;top:-40px;background:radial-gradient(closest-side,rgba(0,0,0,.1) 0,transparent 100%);clip:rect(40px,9999px,68px,0)}.container .text[data-v-ebe2a9f6]{line-height:19px;font-size:12px;margin:24px 37px 30px;color:rgba(0,0,0,.54)}.container .image[data-v-ebe2a9f6]{display:block;width:100%}',""])},230:function(t,e,o){"use strict";o.r(e);var n={components:{CopyRight:o(140).a},data:function(){return{width:window.innerWidth}},mounted:function(){window.addEventListener("resize",this.windowResized),window.scrollTo(0,0),console.log(this.$route)},methods:{windowResized:function(){this.width=window.innerWidth},scaledImage:function(t){return t.slice(0,50)+"c_scale/"+t.slice(50)}},beforeDestroy:function(){window.removeEventListener("resize",this.windowResized)},transition:{mode:"out-in",enterActiveClass:"fade-enter-active",leaveActiveClass:"fade-leave-active",appearActiveClass:"fade-enter-active"}},c=(o(179),o(15)),component=Object(c.a)(n,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"container"},[o("div",{staticClass:"top"},[o("img",{staticClass:"arrow__back",attrs:{src:"https://images.velog.io/post-images/chris/34975800-2788-11e9-a89e-513e433f9a41/arrowleft.svg"},on:{click:function(e){t.$router.push("/"+t.$route.path.split("/")[1])}}}),t._v(" "),o("div",{staticClass:"caption"},[t._v("Tools")]),t._v(" "),o("div",{staticClass:"title"},[t._v("귤잼")]),t._v(" "),t._m(0),t._v(" "),o("div",{staticClass:"desc"},[t._v("\n      에디터 귤잼의 캐릭터 브랜딩\n    ")])]),t._v(" "),o("img",{staticClass:"image",attrs:{src:"https://res.cloudinary.com/dvcuac7zg/image/upload/v1549282232/heihei/jam_intro.gif"}}),t._v(" "),o("img",{staticClass:"image",style:{"margin-top":"8px"},attrs:{src:"https://res.cloudinary.com/dvcuac7zg/image/upload/v1549282235/heihei/jam_outro.gif"}}),t._v(" "),t._m(1),t._v(" "),o("div",{staticClass:"rect"},[o("img",{staticClass:"image",attrs:{src:t.scaledImage("https://res.cloudinary.com/dvcuac7zg/image/upload/v1549282230/heihei/jam_jack_jjal02.jpg")}}),t._v(" "),o("img",{staticClass:"image",attrs:{src:t.scaledImage("https://res.cloudinary.com/dvcuac7zg/image/upload/v1549282230/heihei/jam_baby_intro.jpg")}}),t._v(" "),o("img",{staticClass:"image",attrs:{src:t.scaledImage("https://res.cloudinary.com/dvcuac7zg/image/upload/v1549282230/heihei/jam_jack_jjal01.jpg")}})]),t._v(" "),o("img",{staticClass:"image",style:{"margin-top":"8px"},attrs:{src:"https://res.cloudinary.com/dvcuac7zg/image/upload/v1549282231/heihei/jam_profileBGBG.jpg"}}),t._v(" "),o("img",{staticClass:"image",style:{"margin-top":"8px"},attrs:{src:"https://res.cloudinary.com/dvcuac7zg/image/upload/v1549282230/heihei/jam_baby_all2.jpg"}}),t._v(" "),o("copy-right")],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tools"},[e("img",{staticClass:"icon",attrs:{src:"https://images.velog.io/post-images/chris/4503c4b0-27cb-11e9-a740-67ba1a06b5dd/aeicon.svg"}}),this._v(" "),e("img",{staticClass:"icon",attrs:{src:"https://images.velog.io/post-images/chris/ae55a190-286b-11e9-b507-dfed5458c07c/ailogo.svg"}}),this._v(" "),e("img",{staticClass:"icon",attrs:{src:"https://images.velog.io/post-images/chris/4cc9f8e0-27cb-11e9-b8bc-4b35831033fa/psicon.svg"}}),this._v(" "),e("img",{staticClass:"icon",attrs:{src:"https://images.velog.io/post-images/chris/09ddb580-27cb-11e9-a740-67ba1a06b5dd/ipadicon.svg"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text"},[this._v("\n    귤잼의 컨텐츠들은 가족톡이나 아기사진등 귀엽고 가족적인 분위기를 띄기 때문에 캐릭터 또한 최대한 귀엽게 표현했습니다."),e("br"),e("br"),this._v("\n\n    귤껍질을 이용해서 머리카락을 만들고 아기의 이미지가 강하도록 하기 위해 볼을 빵빵하게 그렸습니다.\n  ")])}],!1,null,"ebe2a9f6",null);e.default=component.exports}}]);