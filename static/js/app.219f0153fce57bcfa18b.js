webpackJsonp([1],{"2fv7":function(t,e){},BUoa:function(t,e){},D0Eh:function(t,e){},"K/CK":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("7+uW"),i={data:function(){return{items:[{title:"Kronos时间管理器",summary:"从现在开始获取Kronos时间管理器开始记录任何你想记录的事情",buttom:"立即下载",href:"static/Kronos-v0.0.1-installer.exe",imgsrc:"static/pic2.jpg"},{title:"想让Kronos变得更好？",summary:"Kronos是一款开源的移动应用程序，如果你想让它变得更好你可以加入Github社区提出意见或是贡献代码",buttom:"前往项目主页",href:"https://github.com/MrChinico",imgsrc:"static/pic.jpg"},{title:"实例标题",summary:"实例说明：这是一段实例说明你可以在这里填写你想填写的项目说明",buttom:"实例按钮",imgsrc:"static/pic3.jpg"}],currentIndex:0}},methods:{autoPlay:function(){this.currentIndex++,this.currentIndex>this.items.length-1&&(this.currentIndex=0)}},created:function(){var t=this;this.$nextTick(function(){t.timer=setInterval(function(){t.autoPlay()},7e3)})}},a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"public-banner"}},[n("transition-group",{staticClass:"slide-ul",attrs:{tag:"ul",name:"list",mode:"out-in"}},t._l(t.items,function(e,s){return n("li",{directives:[{name:"show",rawName:"v-show",value:s===t.currentIndex,expression:"index===currentIndex"}],key:s},[n("transition",{attrs:{name:"infor"}},[n("div",{staticClass:"banner-info"},[n("h1",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.summary))]),t._v(" "),n("div",[n("a",{attrs:{href:e.href}},[t._v(t._s(e.buttom))])])])]),t._v(" "),n("img",{attrs:{src:e.imgsrc}})],1)})),t._v(" "),n("div",{staticClass:"banner-bar"},t._l(t.items,function(e,s){return n("li",{staticClass:"banner-bar-li",class:{active:s===t.currentIndex}})}))],1)},staticRenderFns:[]},r=n("VU/8")(i,a,!1,function(t){n("xFq4")},"data-v-457ccb24",null).exports,o=n("mvHQ"),c=n.n(o),l={data:function(){return{userName:"",passWord:"",message:""}},methods:{GetNewsData:function(){var t=this;this.$http.get("//localhost/method/signin.php",{params:{userName:this.userName,passWord:this.passWord}}).then(function(e){t.message=e.body,console.log(e),console.log(e.data)}).catch(function(t){alert(c()(t))})}}},u={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"public-form"}},[n("h1",[t._v("登录")]),t._v(" "),n("form",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.userName,expression:"userName"}],attrs:{type:"text",placeholder:"用户名"},domProps:{value:t.userName},on:{input:function(e){e.target.composing||(t.userName=e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.passWord,expression:"passWord"}],attrs:{type:"password",placeholder:"密码"},domProps:{value:t.passWord},on:{input:function(e){e.target.composing||(t.passWord=e.target.value)}}}),t._v(" "),n("input",{attrs:{type:"button",value:"登陆"},on:{click:function(e){t.GetNewsData()}}})])])},staticRenderFns:[]},d={name:"PublicHeader",data:function(){return{menu:!0,navigations:[{name:"首页",herf:"#/"},{name:"产品",herf:"#/introduction"},{name:"博客",herf:"#/blog"}],show:!1}},components:{PublicBanner:r,PublicForm:n("VU/8")(l,u,!1,function(t){n("K/CK")},"data-v-2514e992",null).exports},methods:{showForm:function(t){this.show=!this.show}}},h={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{attrs:{id:"public-header"}},[n("div",{staticClass:"header-info"},[n("div",{staticClass:"logo"},[t._v("Kronos")]),t._v(" "),n("div",{staticClass:"hub",on:{click:function(e){t.menu=!t.menu}}},[n("i",{staticClass:"fas fa-align-justify"})]),t._v(" "),t.menu?n("nav",{staticClass:"header-navigation wow fadeInRight"},[t._l(t.navigations,function(e){return n("li",[n("a",{attrs:{href:e.herf}},[t._v(t._s(e.name))])])}),t._v(" "),n("div",{staticClass:"user-center"},[n("div",[n("a",{on:{click:function(e){t.show=!t.show}}},[t._v("登陆")])]),t._v(" "),t._m(0),t._v(" "),n("transition",{attrs:{name:"form"}},[t.show?n("PublicForm"):t._e()],1)],1)],2):t._e()])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("a",{attrs:{href:"#/signup"}},[this._v("注册")])])}]},v={name:"app",components:{PublicHeader:n("VU/8")(d,h,!1,function(t){n("BUoa")},"data-v-00436411",null).exports},mounted:function(){this.change()},updated:function(){this.change()},methods:{change:function(){"/"!=this.$route.path||window.matchMedia("(max-width: 512px)")?document.querySelector(".header-info").style.background="#111":document.querySelector(".header-info").style.background="rgba(0,0,0,.5)"}}},m={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"root"}},[e("PublicHeader"),this._v(" "),e("transition",{attrs:{name:"route",mode:"out-in"}},[e("router-view")],1)],1)},staticRenderFns:[]},_=n("VU/8")(v,m,!1,function(t){n("ODL0")},null,null).exports,f=n("/ocq"),p={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"public-footer"}},[t._m(0),t._v(" "),n("div",{staticClass:"links"},t._l(t.items,function(e){return n("div",[n("h1",[t._v(t._s(e.title))]),t._v(" "),n("ul",t._l(e.links,function(e){return n("li",[n("i"),t._v(" "),n("a",{attrs:{href:e.href}},[t._v(t._s(e.title))])])}))])}))])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"social"},[e("h1",[this._v("已有1位用户使用Kronos记录他们身边的故事")]),this._v(" "),e("p",[this._v("Copyright © 2017 - Kronos.org Twicore Inc. All rights reserved")])])}]},g=n("VU/8")({data:function(){return{items:[{title:"项目",links:[{title:"更新",href:"#"},{title:"获取文档",href:"#"},{title:"提交错误",href:"#"},{title:"帮助",href:"#"}]},{title:"团体",links:[{title:"提交问题",href:"#"},{title:"联系我们",href:"#"},{title:"@Kronos",href:"#"}]},{title:"条约",links:[{title:"辛丑条约",href:"#"},{title:"旧丑条约",href:"#"},{title:"新旧丑条约",href:"#"}]}]}}},p,!1,function(t){n("RFhS")},"data-v-08d824be",null).exports,b={name:"home",components:{PublicBanner:r,PublicFooter:g},data:function(){return{items:[{title:"开源的",summary:"Kronos时间管理器,遵循于GPL V2协定为互联网上的所有用户开放其源代码，Kronos希望有更多的开发者加入其中，使其变为最好用的时间管理器"},{title:"强大的",summary:"Kronos时间管理器,在依据简约设计理念的同时做到满足日常生活中的多种应用场景，做到简约但不简单"},{title:"轻量的",summary:"Kronos时间管理器，基于新一代WEB应用技术能够在任何支持Browser技术的设备上流畅运行"}]}}},w={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"home"}},[n("PublicBanner"),t._v(" "),n("div",{staticClass:"introduction"},[n("h1",[t._v("Kronos是什么？")]),t._v(" "),n("div",{staticClass:"featrues"},t._l(t.items,function(e,s){return n("div",{staticClass:"wow fadeIn",attrs:{"data-wow-delay":s/2+"s"}},[n("h1",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.summary))])])})),t._v(" "),t._m(0),t._v(" "),t._m(1)]),t._v(" "),n("PublicFooter")],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"work"},[e("h1",[this._v("让工作变得简单")]),this._v(" "),e("p",[this._v("在工作中各种零碎的琐事会让你不免有些焦头烂额，随身携带记事本不仅不方便还没有快速查阅功能")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"diary"},[e("h1",[this._v("记录独一无二的你")]),this._v(" "),e("p")])}]},x=n("VU/8")(b,w,!1,function(t){n("2fv7")},"data-v-89d51d04",null).exports,C={components:{PublicFooter:g}},y={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"introduction"}},[e("PublicFooter")],1)},staticRenderFns:[]},P=n("VU/8")(C,y,!1,function(t){n("eEpE")},"data-v-2e2a1246",null).exports,F={components:{PublicFooter:g},mounted:function(){var t=this;this.$http.get("./static/data/blogs.json").then(function(e){console.log(e),t.blogs=e.data,console.log(t.items)}).catch(function(t){console.log(t)})},methods:{},data:function(){return{blogs:[]}}},K={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"blog"}},[n("div",{staticClass:"main"},[n("transition-group",{staticClass:"index",attrs:{tag:"ul"}},t._l(t.blogs,function(e,s){return n("li",{key:s},[n("h1",[n("router-link",{attrs:{to:{name:"Details",params:{id:e.ID}}}},[t._v(t._s(e.title))]),n("span",[t._v(t._s(e.date))])],1),t._v(" "),n("div",{staticClass:"sort"},t._l(e.tag,function(e){return n("span",[t._v(t._s(e))])})),t._v(" "),n("div",{domProps:{innerHTML:t._s(e.content.substring(0,60)+"……")}})])})),t._v(" "),n("div",{staticClass:"archive"},[n("div",[n("h1",[t._v("归档")]),t._v(" "),n("ul",t._l(t.blogs,function(e,s){return n("li",[n("span",[t._v(t._s(e.date))]),t._v(" "),n("router-link",{attrs:{to:{name:"Details",params:{id:e.ID}}}},[t._v("\n                            "+t._s(e.title)+"\n                        ")])],1)}))])])],1),t._v(" "),n("PublicFooter")],1)},staticRenderFns:[]},$=n("VU/8")(F,K,!1,function(t){n("D0Eh")},"data-v-0661f0d2",null).exports,k={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"signup"}},[e("div",{staticClass:"left wow fadeInLeft",attrs:{"data-wow-duration":".5s"}},[e("h1",[this._v("只需几个步骤立刻注册Kronos账户")]),this._v(" "),e("p",[this._v("如果您想探索Kronos的更多功能请请尝试注册一个Kronos账户，当你拥有Kronos账户之后您将获取Kronos的本地创作及在线存储的完整服务体验")]),this._v(" "),e("p",[this._v("注册Kronos账户将默认您以知晓并阅读我们的"),e("router-link",{attrs:{to:"#"}},[this._v("许可条款")]),this._v("及相关"),e("router-link",{attrs:{to:"#"}},[this._v("注意事项")])],1)]),this._v(" "),this._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"right wow fadeInRight",attrs:{"data-wow-duration":"1s","data-wow-delay":".125s"}},[e("form",[e("input",{attrs:{type:"text",placeholder:"用户名"}}),this._v(" "),e("input",{attrs:{type:"password",placeholder:"设置密码"}}),this._v(" "),e("input",{attrs:{type:"password",placeholder:"确认密码"}}),this._v(" "),e("input",{attrs:{type:"submit",value:"注册"}})])])}]},E=n("VU/8")({},k,!1,function(t){n("ebxk")},"data-v-0a519c2a",null).exports,I={components:{PublicFooter:g},beforeUpdate:function(){for(var t=0;t<this.blogs.length;t++)this.$route.params.id==this.blogs[t].ID&&(this.text=this.blogs[t],console.log(this.text))},mounted:function(){var t=this;this.$http.get("./static/data/blogs.json").then(function(e){console.log(e);for(var n=0;n<e.data.length;n++)t.$route.params.id==e.data[n].ID&&(t.text=e.data[n],t.blogs=e.data,console.log(e.data[n]));console.log(t.text.title)}).catch(function(t){console.log(t)})},data:function(){return{text:{},blogs:[]}}},D={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"blog"}},[n("div",{staticClass:"main"},[n("div",{staticClass:"index"},[n("h1",[t._v(t._s(t.text.title)),n("span",[t._v(t._s(t.text.date))])]),t._v(" "),n("div",{staticClass:"tag"},t._l(t.text.tag,function(e){return n("span",[t._v(t._s(e))])})),t._v(" "),n("div",{staticClass:"content",domProps:{innerHTML:t._s(t.text.content)}})]),t._v(" "),n("div",{staticClass:"archive"},[n("div",[n("h1",[t._v("归档")]),t._v(" "),n("ul",t._l(t.blogs,function(e,s){return n("li",[n("span",[t._v(t._s(e.date))]),t._v(" "),n("router-link",{attrs:{to:{name:"Details",params:{id:e.ID}}}},[t._v("\n                            "+t._s(e.title)+"\n                        ")])],1)}))])])]),t._v(" "),n("PublicFooter")],1)},staticRenderFns:[]},U=n("VU/8")(I,D,!1,function(t){n("Prho"),n("trUh")},"data-v-62ef7fb2",null).exports;s.a.use(f.a);var N=new f.a({routes:[{path:"/",name:"Home",component:x},{path:"/introduction",name:"Introduction",component:P},{path:"/blog/details/:id",name:"Details",component:U},{path:"/blog",name:"Blog",component:$},{path:"/signup",name:"signup",component:E}]}),R=n("mtWM"),V=n.n(R);s.a.prototype.$http=V.a,new s.a({el:"#root",router:N,template:"<App/>",components:{App:_}})},ODL0:function(t,e){},Prho:function(t,e){},RFhS:function(t,e){},eEpE:function(t,e){},ebxk:function(t,e){},trUh:function(t,e){},xFq4:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.219f0153fce57bcfa18b.js.map