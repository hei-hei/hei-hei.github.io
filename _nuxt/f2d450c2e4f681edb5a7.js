(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{139:function(t,e,n){var content=n(141);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(41).default)("3b66df2f",content,!0,{sourceMap:!1})},140:function(t,e,n){"use strict";var o=n(139);n.n(o).a},141:function(t,e,n){(t.exports=n(40)(!1)).push([t.i,".copyright[data-v-327ba61e]{line-height:18px;font-size:12px;color:rgba(0,0,0,.38);text-align:center;min-height:100px;display:grid;align-items:center}",""])},142:function(t,e,n){"use strict";n(140);var o=n(15),component=Object(o.a)({},function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"copyright"},[this._v("\n  © Copyright Hei-Hei, All rights reserved.\n")])},[],!1,null,"327ba61e",null);e.a=component.exports},164:function(t,e,n){var content=n(214);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(41).default)("d13f3b18",content,!0,{sourceMap:!1})},213:function(t,e,n){"use strict";var o=n(164);n.n(o).a},214:function(t,e,n){(t.exports=n(40)(!1)).push([t.i,'.container .top[data-v-7018fd68]{margin-left:37px;margin-top:71px;position:relative;height:123px}.container .top .arrow__back[data-v-7018fd68]{padding:19px;margin-top:-19px;margin-left:-19px;cursor:pointer}.container .top .caption[data-v-7018fd68]{display:inline-block;position:absolute;right:39px;font-weight:400;line-height:17px;font-size:12px}.container .top .title[data-v-7018fd68]{left:0;font-weight:800;line-height:24px;font-size:22px}.container .top .title[data-v-7018fd68],.container .top .tools[data-v-7018fd68]{display:inline-block;position:absolute;top:29px}.container .top .tools[data-v-7018fd68]{right:39px}.container .top .tools .icon[data-v-7018fd68]{margin-left:5px;display:inline-block}.container .top .desc[data-v-7018fd68]{display:inline-block;position:absolute;top:60px;left:0;line-height:17px;font-size:12px;color:rgba(0,0,0,.38)}.container .video[data-v-7018fd68]{display:block;width:100%}.container .rect[data-v-7018fd68]{padding-top:177.777777778%;position:relative;font-weight:400;line-height:17px;font-size:12px}.container .rect .video[data-v-7018fd68]{position:absolute;top:0;z-index:-1}.container .rect .image[data-v-7018fd68]{width:100%;position:absolute;top:0}.container .rect[data-v-7018fd68]:before{z-index:1;content:"";display:block;position:absolute;min-width:calc(100% + 50px);min-height:68px;left:-25px;top:-40px;background:radial-gradient(closest-side,rgba(0,0,0,.1) 0,transparent 100%);clip:rect(40px,2000px,68px,0)}.container .text[data-v-7018fd68]{margin-top:24px;margin-left:37px;margin-bottom:30px;line-height:19px;font-size:12px;color:rgba(0,0,0,.54)}.container .image[data-v-7018fd68]{display:block;width:100%}',""])},248:function(t,e,n){"use strict";n.r(e);var o={components:{CopyRight:n(142).a},data:function(){return{width:window.innerWidth>=500?500:window.innerWidth}},mounted:function(){window.addEventListener("resize",this.windowResized),window.scrollTo(0,0)},methods:{windowResized:function(){this.width=window.innerWidth<=500?window.innerWidth:this.width},scaledImage:function(t){return t.slice(0,50)+"c_scale,w_750/"+t.slice(50)}},beforeDestroy:function(){window.removeEventListener("resize",this.windowResized)},transition:{mode:"out-in",enterActiveClass:"fade-enter-active",leaveActiveClass:"fade-leave-active",appearActiveClass:"fade-enter-active"}},r=(n(213),n(15)),component=Object(r.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"container"},[n("div",{staticClass:"top"},[n("img",{staticClass:"arrow__back",attrs:{src:"https://images.velog.io/post-images/chris/34975800-2788-11e9-a89e-513e433f9a41/arrowleft.svg"},on:{click:function(e){t.$router.push("/"+t.$route.path.split("/")[1])}}}),t._v(" "),n("div",{staticClass:"caption"},[t._v("Tools")]),t._v(" "),n("div",{staticClass:"title"},[t._v("선")]),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"desc"},[t._v("\n      선에서 선으로 향하다\n    ")])]),t._v(" "),n("iframe",{ref:"player",staticClass:"video",attrs:{src:"https://player.vimeo.com/video/315234345?autoplay=1&loop=1&muted=1&autopause=0&title=0&byline=0",id:"player",width:t.width,height:16*t.width/9,frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}}),t._v(" "),t._m(1),t._v(" "),n("img",{staticClass:"image",attrs:{src:t.scaledImage("https://res.cloudinary.com/dvcuac7zg/image/upload/v1549211389/heihei/%E1%84%8E%E1%85%A9%E1%84%80%E1%85%B5_%E1%84%89%E1%85%B3%E1%84%90%E1%85%A9%E1%84%85%E1%85%B5%E1%84%87%E1%85%A9%E1%84%83%E1%85%B3.jpg")}}),t._v(" "),n("img",{staticClass:"image",style:{"margin-top":"8px"},attrs:{src:t.scaledImage("https://res.cloudinary.com/dvcuac7zg/image/upload/v1549211722/heihei/%E1%84%8E%E1%85%A9%E1%84%80%E1%85%B5_%E1%84%8F%E1%85%B5%E1%84%87%E1%85%B5%E1%84%8C%E1%85%AE%E1%84%8B%E1%85%A5%E1%86%AF1.jpg")}}),t._v(" "),n("img",{staticClass:"image",style:{"margin-top":"8px"},attrs:{src:t.scaledImage("https://res.cloudinary.com/dvcuac7zg/image/upload/v1549211729/heihei/%E1%84%8E%E1%85%A9%E1%84%80%E1%85%B5_%E1%84%8F%E1%85%B5%E1%84%87%E1%85%B5%E1%84%8C%E1%85%AE%E1%84%8B%E1%85%A5%E1%86%AF2.jpg")}}),t._v(" "),t._m(2),t._v(" "),n("img",{staticClass:"image",attrs:{src:t.scaledImage("https://res.cloudinary.com/dvcuac7zg/image/upload/v1549214009/heihei/card_mockup.jpg")}}),t._v(" "),n("img",{staticClass:"image",attrs:{src:t.scaledImage("https://res.cloudinary.com/dvcuac7zg/image/upload/v1549214010/heihei/card_mockup2.jpg")}}),t._v(" "),n("copy-right")],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tools"},[e("img",{staticClass:"icon",attrs:{src:"https://images.velog.io/post-images/chris/4503c4b0-27cb-11e9-a740-67ba1a06b5dd/aeicon.svg"}}),this._v(" "),e("img",{staticClass:"icon",attrs:{src:"https://images.velog.io/post-images/chris/4cc9f8e0-27cb-11e9-b8bc-4b35831033fa/psicon.svg"}}),this._v(" "),e("img",{staticClass:"icon",attrs:{src:"https://images.velog.io/post-images/chris/09ddb580-27cb-11e9-a740-67ba1a06b5dd/ipadicon.svg"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text"},[t._v("\n    감정의 덩어리가 목에서 탁 하고 걸리다."),n("br"),n("br"),t._v("\n\n    갑작스럽게 걸려버린 감정 덩어리를"),n("br"),t._v("\n    가만히 바라보다가 기분이 이상해진다."),n("br"),t._v("\n    물 위에 떠 있는 듯이,"),n("br"),t._v("\n    편안하지만 불편한 느낌이다."),n("br"),n("br"),t._v("\n\n    감정이 걸린 선 위를 다시 바라보다,"),n("br"),t._v("\n    조금씩 다가가 살짝 맞닿는다."),n("br"),t._v("\n    닿아있는 동안, 어떻게 움직여야 할 지,"),n("br"),t._v("\n    얼마나 버티고 있어야 하는 지에 대해 고민하다,"),n("br"),n("br"),t._v("\n\n    덜컥 밀려나다."),n("br"),n("br"),t._v("\n\n    밀려난 것은 다른 밀려난 것을 따라가다"),n("br"),t._v("\n    선 앞에서 탁하고 걸렸다.\n  ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text"},[this._v("\n    초기의 스토리보드와 키비주얼입니다."),e("br"),e("br"),this._v("\n\n    여기에는 어떻게 생각을 시작하여 이 영상을 제작하게 되었는지, "),e("br"),this._v("어떤 의미를 담고자 하였는지에 대해서 쓰면 됩니다."),e("br"),e("br"),this._v("\n\n    세문단 정도가 나오면 좋을 것 같습니다,"),e("br"),this._v(" 기본적인 정보인 제작 시기도 함께 적어주면 좋을 듯 싶습니다.\n  ")])}],!1,null,"7018fd68",null);e.default=component.exports}}]);