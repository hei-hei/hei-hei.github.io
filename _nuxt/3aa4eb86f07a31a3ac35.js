(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{137:function(t,e,c){var content=c(139);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,c(42).default)("3b66df2f",content,!0,{sourceMap:!1})},138:function(t,e,c){"use strict";var n=c(137);c.n(n).a},139:function(t,e,c){(t.exports=c(41)(!1)).push([t.i,".copyright[data-v-327ba61e]{line-height:18px;font-size:12px;color:rgba(0,0,0,.38);text-align:center;min-height:100px;display:grid;align-items:center}",""])},140:function(t,e,c){"use strict";c(138);var n=c(15),component=Object(n.a)({},function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"copyright"},[this._v("\n  © Copyright Hei-Hei, All rights reserved.\n")])},[],!1,null,"327ba61e",null);e.a=component.exports},168:function(t,e,c){var content=c(224);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,c(42).default)("f57c3400",content,!0,{sourceMap:!1})},223:function(t,e,c){"use strict";var n=c(168);c.n(n).a},224:function(t,e,c){(t.exports=c(41)(!1)).push([t.i,'@charset "UTF-8";.container[data-v-c45173cc]{font-weight:700;letter-spacing:-.03em}.container .top[data-v-c45173cc]{margin-left:33px}.container .top .logo[data-v-c45173cc]{display:block;margin-top:72px}.container .top .hands[data-v-c45173cc]{margin-top:26px}.container .top .bio[data-v-c45173cc]{font-style:normal;line-height:23px;font-size:16.5px;margin-top:89px;font-weight:700}.container .top .bio .ko[data-v-c45173cc]{font-weight:700}.container .top .bio .en[data-v-c45173cc]{font-weight:550}@-webkit-keyframes changeLetter-data-v-c45173cc{0%{content:"황희영"}50%{color:#fff}to{content:"HeiHei"}}@keyframes changeLetter-data-v-c45173cc{0%{content:"황희영"}50%{color:#fff}to{content:"HeiHei"}}.container .top .bio .name[data-v-c45173cc]{display:inline-block;width:47.22px}.container .top .bio .name[data-v-c45173cc]:after{content:"";-webkit-animation:changeLetter-data-v-c45173cc 3s linear infinite alternate;animation:changeLetter-data-v-c45173cc 3s linear infinite alternate}.container .top .insta[data-v-c45173cc]{margin-top:23px;display:inline-flex;height:20px;cursor:pointer}.container .top .insta[data-v-c45173cc]:active,.container .top .insta[data-v-c45173cc]:hover{background-color:rgba(0,0,0,.1);border-radius:1px}.container .top .insta__logo[data-v-c45173cc]{width:13px}.container .top .insta__id[data-v-c45173cc]{font-weight:500;margin-left:3px;line-height:20px;font-size:14px}.container .section[data-v-c45173cc]{margin-top:74px}.container .section .rect[data-v-c45173cc]{cursor:pointer;position:relative;padding-top:38.133333333%;overflow:hidden}.container .section .rect[data-v-c45173cc]:active:after,.container .section .rect[data-v-c45173cc]:hover:after{content:"";position:absolute;top:0;width:100%;height:100%;background-color:rgba(0,0,0,.1)}.container .section .rect[data-v-c45173cc]:before{content:"";display:block;position:absolute;min-width:calc(100% + 50px);min-height:68px;left:-25px;top:-40px;background:radial-gradient(closest-side,rgba(0,0,0,.1) 0,transparent 100%);clip:rect(40px,9999px,68px,0)}.container .section .rect .bg[data-v-c45173cc]{display:block;position:absolute;top:0;left:0;right:0;width:100%;height:100%;background-size:cover;background-repeat:no-repeat}.container .section .rect .title[data-v-c45173cc]{position:absolute;top:23px;font-weight:700;margin-left:33px;line-height:20px;font-size:14px}.container .section .rect .arrow[data-v-c45173cc]{position:absolute;top:23px;right:25px}',""])},252:function(t,e,c){"use strict";c.r(e);var n={components:{CopyRight:c(140).a},data:function(){return{nameToggle:!0,list:[{title:"motion",color:"#E53786",url:this.scaledImage("https://res.cloudinary.com/dvcuac7zg/image/upload/v1549214397/heihei/%E1%84%89%E1%85%A5%E1%86%AB_thumbnail_1.jpg"),parallaxMinY:10,parallaxMaxY:40,positionY:10},{title:"illust",color:"#F5F5F5",url:this.scaledImage("https://res.cloudinary.com/dvcuac7zg/image/upload/v1549287328/heihei/monami_card_thumbnail-1.jpg"),parallaxMinY:11,parallaxMaxY:50,positionY:11},{title:"graphic",color:"#C9CBCA",url:this.scaledImage("https://res.cloudinary.com/dvcuac7zg/image/upload/v1549290397/heihei/somul_card_thumbnail-1.jpg"),parallaxMinY:0,parallaxMaxY:23,positionY:0},{title:"branding",color:"#F9E15C",url:this.scaledImage("https://res.cloudinary.com/dvcuac7zg/image/upload/v1549290123/heihei/jam_card_thumbnail.jpg"),parallaxMinY:5,parallaxMaxY:50,positionY:5},{title:"etc",color:"#F7F7F7",url:this.scaledImage("https://res.cloudinary.com/dvcuac7zg/image/upload/v1549290073/heihei/chima_card_thumbnail.jpg"),parallaxMinY:28,parallaxMaxY:60,positionY:28}]}},mounted:function(){window.addEventListener("scroll",this.scrolled),console.log("콘솔킨 당신은 참 개발자")},destroyed:function(){window.removeEventListener("scroll",this.scrolled)},methods:{instaClick:function(){return window.open("https://instagram.com/hei_hi_hei")},scaledImage:function(t){return t&&t.slice(0,50)+"c_scale,w_1500/"+t.slice(50)},scrolled:function(){var t=this.$refs.container;t&&this.list.map(function(e){return e.positionY=(e.parallaxMaxY-e.parallaxMinY)*(window.scrollY/(t.clientHeight-window.innerHeight))+e.parallaxMinY})}},transition:{mode:"out-in",enterActiveClass:"fade-enter-active",leaveActiveClass:"fade-leave-active",appearActiveClass:"fade-enter-active"}},o=(c(223),c(15)),component=Object(o.a)(n,function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("section",{ref:"container",staticClass:"container"},[c("div",{staticClass:"top"},[c("img",{staticClass:"logo",attrs:{src:"https://images.velog.io/post-images/chris/18f010b0-276f-11e9-8a2a-c90b1e879aba/heilogo.svg"}}),t._v(" "),c("img",{staticClass:"hands",attrs:{src:"https://images.velog.io/post-images/chris/d2f9f340-276f-11e9-9cfc-1356462f1aeb/handicon.svg"}}),t._v(" "),c("div",{staticClass:"bio"},[t._v("\n      안녕하세요."),c("br"),t._v("\n      이야기하는 디자이너"),c("br"),t._v(" "),t.nameToggle?c("span",{staticClass:"ko"},[t._v("황희영")]):c("span",{staticClass:"en"},[t._v("Hei-Hei")]),t._v(" "),t._v("\n      입니다.\n    ")]),t._v(" "),c("a",{staticClass:"insta",on:{click:t.instaClick}},[c("img",{staticClass:"insta__logo",attrs:{src:"https://images.velog.io/post-images/chris/e392f430-2770-11e9-9cfc-1356462f1aeb/instagram-brands-3.svg"}}),t._v(" "),c("div",{staticClass:"insta__id"},[t._v("hei_hi_hei")])])]),t._v(" "),c("div",{staticClass:"section"},t._l(t.list,function(e){return c("div",{key:e.title,staticClass:"rect",style:{"background-color":e.color},on:{click:function(c){return t.$router.push(e.title)}}},[c("div",{staticClass:"bg",style:{"background-image":"url("+e.url+")","background-position":"0% "+e.positionY+"%"}}),t._v(" "),c("div",{staticClass:"title"},[t._v(t._s(e.title))]),t._v(" "),c("img",{staticClass:"arrow",attrs:{src:"https://images.velog.io/post-images/chris/a3b24650-2774-11e9-8a2a-c90b1e879aba/arrowright.svg"}})])}),0),t._v(" "),c("copy-right")],1)},[],!1,null,"c45173cc",null);e.default=component.exports}}]);