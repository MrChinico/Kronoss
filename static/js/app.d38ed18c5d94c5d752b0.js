webpackJsonp([1],{BUoa:function(t,s){},D0Eh:function(t,s){},"K/CK":function(t,s){},KlWa:function(t,s){},NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("7+uW"),n={data:function(){return{items:[{title:"Kronos时间管理器",summary:"从现在开始获取Kronos时间管理器开始记录任何你想记录的事情",buttom:"立即下载",href:"static/Kronos-v0.0.1-installer.exe",imgsrc:"static/pic2.jpg"},{title:"想让Kronos变得更好？",summary:"Kronos是一款开源的移动应用程序，如果你想让它变得更好你可以加入Github社区提出意见或是贡献代码",buttom:"前往项目主页",href:"https://github.com/MrChinico",imgsrc:"static/pic.jpg"},{title:"实例标题",summary:"实例说明：这是一段实例说明你可以在这里填写你想填写的项目说明",buttom:"实例按钮",imgsrc:"static/pic3.jpg"}],currentIndex:0}},methods:{autoPlay:function(){this.currentIndex++,this.currentIndex>this.items.length-1&&(this.currentIndex=0)}},created:function(){var t=this;this.$nextTick(function(){t.timer=setInterval(function(){t.autoPlay()},7e3)})}},a={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"public-banner"}},[e("transition-group",{staticClass:"slide-ul",attrs:{tag:"ul",name:"list",mode:"out-in"}},t._l(t.items,function(s,i){return e("li",{directives:[{name:"show",rawName:"v-show",value:i===t.currentIndex,expression:"index===currentIndex"}],key:i},[e("transition",{attrs:{name:"infor"}},[e("div",{staticClass:"banner-info"},[e("h1",[t._v(t._s(s.title))]),t._v(" "),e("p",[t._v(t._s(s.summary))]),t._v(" "),e("div",[e("a",{attrs:{href:s.href}},[t._v(t._s(s.buttom))])])])]),t._v(" "),e("img",{attrs:{src:s.imgsrc}})],1)})),t._v(" "),e("div",{staticClass:"banner-bar"},t._l(t.items,function(s,i){return e("li",{staticClass:"banner-bar-li",class:{active:i===t.currentIndex}})}))],1)},staticRenderFns:[]},r=e("VU/8")(n,a,!1,function(t){e("xFq4")},"data-v-457ccb24",null).exports,o=e("mvHQ"),c=e.n(o),l={data:function(){return{userName:"",passWord:"",message:""}},methods:{GetNewsData:function(){var t=this;this.$http.get("//localhost/method/signin.php",{params:{userName:this.userName,passWord:this.passWord}}).then(function(s){t.message=s.body,console.log(s),console.log(s.data)}).catch(function(t){alert(c()(t))})}}},u={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"public-form"}},[e("h1",[t._v("登录")]),t._v(" "),e("form",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.userName,expression:"userName"}],attrs:{type:"text",placeholder:"用户名"},domProps:{value:t.userName},on:{input:function(s){s.target.composing||(t.userName=s.target.value)}}}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.passWord,expression:"passWord"}],attrs:{type:"password",placeholder:"密码"},domProps:{value:t.passWord},on:{input:function(s){s.target.composing||(t.passWord=s.target.value)}}}),t._v(" "),e("input",{attrs:{type:"button",value:"登陆"},on:{click:function(s){t.GetNewsData()}}})])])},staticRenderFns:[]},h={name:"PublicHeader",data:function(){return{menu:!0,navigations:[{name:"首页",herf:"#/"},{name:"产品",herf:"#/introduction"},{name:"博客",herf:"#/blog"}],show:!1}},components:{PublicBanner:r,PublicForm:e("VU/8")(l,u,!1,function(t){e("K/CK")},"data-v-2514e992",null).exports},methods:{showForm:function(t){this.show=!this.show}}},v={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("header",{attrs:{id:"public-header"}},[e("div",{staticClass:"header-info"},[e("div",{staticClass:"logo"},[t._v("Kronos")]),t._v(" "),e("div",{staticClass:"hub",on:{click:function(s){t.menu=!t.menu}}},[e("i",{staticClass:"fas fa-align-justify"})]),t._v(" "),t.menu?e("nav",{staticClass:"header-navigation wow fadeInRight"},[t._l(t.navigations,function(s){return e("li",[e("a",{attrs:{href:s.herf}},[t._v(t._s(s.name))])])}),t._v(" "),e("div",{staticClass:"user-center"},[e("div",[e("a",{on:{click:function(s){t.show=!t.show}}},[t._v("登陆")])]),t._v(" "),t._m(0),t._v(" "),e("transition",{attrs:{name:"form"}},[t.show?e("PublicForm"):t._e()],1)],1)],2):t._e()])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("a",{attrs:{href:"#/signup"}},[this._v("注册")])])}]},d={name:"app",components:{PublicHeader:e("VU/8")(h,v,!1,function(t){e("BUoa")},"data-v-00436411",null).exports},mounted:function(){this.change()},updated:function(){this.change()},methods:{change:function(){"/"!=this.$route.path||window.matchMedia("(max-width: 512px)")?document.querySelector(".header-info").style.background="#111":document.querySelector(".header-info").style.background="rgba(0,0,0,.5)"}}},_={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"root"}},[s("PublicHeader"),this._v(" "),s("transition",{attrs:{name:"route",mode:"out-in"}},[s("router-view")],1)],1)},staticRenderFns:[]},f=e("VU/8")(d,_,!1,function(t){e("ODL0")},null,null).exports,m=e("/ocq"),p={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"public-footer"}},[t._m(0),t._v(" "),e("div",{staticClass:"links"},t._l(t.items,function(s){return e("div",[e("h1",[t._v(t._s(s.title))]),t._v(" "),e("ul",t._l(s.links,function(s){return e("li",[e("i"),t._v(" "),e("a",{attrs:{href:s.href}},[t._v(t._s(s.title))])])}))])}))])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"social"},[s("h1",[this._v("已有1位用户使用Kronos记录他们身边的故事")]),this._v(" "),s("p",[this._v("Copyright © 2017 - Kronos.org Twicore Inc. All rights reserved")])])}]},g=e("VU/8")({data:function(){return{items:[{title:"项目",links:[{title:"更新",href:"#"},{title:"获取文档",href:"#"},{title:"提交错误",href:"#"},{title:"帮助",href:"#"}]},{title:"团体",links:[{title:"提交问题",href:"#"},{title:"联系我们",href:"#"},{title:"@Kronos",href:"#"}]},{title:"条约",links:[{title:"辛丑条约",href:"#"},{title:"旧丑条约",href:"#"},{title:"新旧丑条约",href:"#"}]}]}}},p,!1,function(t){e("RFhS")},"data-v-08d824be",null).exports,b={name:"home",components:{PublicBanner:r,PublicFooter:g},data:function(){return{items:[{title:"开源的",summary:"Kronos时间管理器,遵循于GPL V2协定为互联网上的所有用户开放其源代码，Kronos希望有更多的开发者加入其中，使其变为最好用的时间管理器"},{title:"强大的",summary:"Kronos时间管理器,在依据简约设计理念的同时做到满足日常生活中的多种应用场景，做到简约但不简单"},{title:"轻量的",summary:"Kronos时间管理器，基于新一代WEB应用技术能够在任何支持Browser技术的设备上流畅运行"}]}}},w={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"home"}},[e("PublicBanner"),t._v(" "),e("div",{staticClass:"introduction"},[e("h1",[t._v("Kronos是什么？")]),t._v(" "),e("div",{staticClass:"featrues"},t._l(t.items,function(s,i){return e("div",{staticClass:"wow fadeIn",attrs:{"data-wow-delay":i/2+"s"}},[e("h1",[t._v(t._s(s.title))]),t._v(" "),e("p",[t._v(t._s(s.summary))])])})),t._v(" "),e("div",{staticClass:"work"},[e("div",[e("h1",[t._v("让工作变得简单")]),t._v(" "),e("p",[t._v("在工作中各种零碎的琐事会让你不免有些焦头烂额，随身携带记事本不仅不方便还没有快速查阅功能")]),t._v(" "),e("router-link",{attrs:{to:"#"}},[t._v("发现更多")])],1)])]),t._v(" "),e("PublicFooter")],1)},staticRenderFns:[]},C=e("VU/8")(b,w,!1,function(t){e("KlWa")},"data-v-373df68e",null).exports,x={components:{PublicFooter:g}},y={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"introduction"}},[this._m(0),this._v(" "),this._m(1),this._v(" "),s("PublicFooter")],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"soft-info"},[s("h1",[this._v("无论你在何处打开你的设备")]),this._v(" "),s("div"),this._v(" "),s("div"),this._v(" "),s("div")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"soft-type"},[s("h1",[this._v("发现Kronos的发行版本")]),this._v(" "),s("div",{staticClass:"community"},[s("h1",[this._v("由社区维护的版本")]),this._v(" "),s("p",[s("i",{staticClass:"fas fa-check-circle"}),this._v("在任何设备上使用Kronos")]),this._v(" "),s("p",[s("i",{staticClass:"fas fa-check-circle"}),this._v("Kronos社区开发的全新功能体验")]),this._v(" "),s("p",[s("i",{staticClass:"fas fa-check-circle"}),this._v("无需任何费用即可使用Kronos Community的全部功能")])]),this._v(" "),s("div",{staticClass:"twicore"},[s("h1",[this._v("由Twicore运营的版本")]),this._v(" "),s("p",[s("i",{staticClass:"fas fa-check-circle"}),this._v("由Twicore提供的强大服务基础")]),this._v(" "),s("p",[s("i",{staticClass:"fas fa-check-circle"}),this._v("展现优质内容与严格的审查机制")]),this._v(" "),s("p",[s("i",{staticClass:"fas fa-check-circle"}),this._v("继承Kronos Community的绝大多数功能")]),this._v(" "),s("p",[s("i",{staticClass:"fas fa-check-circle"}),this._v("由Twicore Kronos团队开发的专属功能")])]),this._v(" "),s("div",{staticClass:"twicore-puls"},[s("h1",[this._v("由Twicore拓展的高级功能")]),this._v(" "),s("p",[s("i",{staticClass:"fas fa-check-circle"}),this._v("拥有Kronos for Twicore的完整功能")]),this._v(" "),s("p",[s("i",{staticClass:"fas fa-check-circle"}),this._v("获取面对搜索引擎的独立托管服务")]),this._v(" "),s("p",[s("i",{staticClass:"fas fa-check-circle"}),this._v("扩展私人日记本的使用上限")])])])}]},k=e("VU/8")(x,y,!1,function(t){e("TwQq")},"data-v-747302d2",null).exports,K={components:{PublicFooter:g},mounted:function(){var t=this;this.$http.get("./static/data/blogs.json").then(function(s){console.log(s),t.blogs=s.data,console.log(t.items)}).catch(function(t){console.log(t)})},methods:{},data:function(){return{blogs:[]}}},P={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"blog"}},[e("div",{staticClass:"main"},[e("transition-group",{staticClass:"index",attrs:{tag:"ul"}},t._l(t.blogs,function(s,i){return e("li",{key:i},[e("h1",[e("router-link",{attrs:{to:{name:"Details",params:{id:s.ID}}}},[t._v(t._s(s.title))]),e("span",[t._v(t._s(s.date))])],1),t._v(" "),e("div",{staticClass:"sort"},t._l(s.tag,function(s){return e("span",[t._v(t._s(s))])})),t._v(" "),e("div",{domProps:{innerHTML:t._s(s.content.substring(0,60)+"……")}})])})),t._v(" "),e("div",{staticClass:"archive"},[e("div",[e("h1",[t._v("归档")]),t._v(" "),e("ul",t._l(t.blogs,function(s,i){return e("li",[e("span",[t._v(t._s(s.date))]),t._v(" "),e("router-link",{attrs:{to:{name:"Details",params:{id:s.ID}}}},[t._v("\n                            "+t._s(s.title)+"\n                        ")])],1)}))])])],1),t._v(" "),e("PublicFooter")],1)},staticRenderFns:[]},F=e("VU/8")(K,P,!1,function(t){e("D0Eh")},"data-v-0661f0d2",null).exports,$={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"signup"}},[s("div",{staticClass:"left wow fadeInLeft",attrs:{"data-wow-duration":".5s"}},[s("h1",[this._v("只需几个步骤立刻注册Kronos账户")]),this._v(" "),s("p",[this._v("如果您想探索Kronos的更多功能请请尝试注册一个Kronos账户，当你拥有Kronos账户之后您将获取Kronos的本地创作及在线存储的完整服务体验")]),this._v(" "),s("p",[this._v("注册Kronos账户将默认您以知晓并阅读我们的"),s("router-link",{attrs:{to:"#"}},[this._v("许可条款")]),this._v("及相关"),s("router-link",{attrs:{to:"#"}},[this._v("注意事项")])],1)]),this._v(" "),this._m(0)])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"right wow fadeInRight",attrs:{"data-wow-duration":"1s","data-wow-delay":".125s"}},[s("form",[s("input",{attrs:{type:"text",placeholder:"用户名"}}),this._v(" "),s("input",{attrs:{type:"password",placeholder:"设置密码"}}),this._v(" "),s("input",{attrs:{type:"password",placeholder:"确认密码"}}),this._v(" "),s("input",{attrs:{type:"submit",value:"注册"}})])])}]},I=e("VU/8")({},$,!1,function(t){e("ebxk")},"data-v-0a519c2a",null).exports,E={components:{PublicFooter:g},beforeUpdate:function(){for(var t=0;t<this.blogs.length;t++)this.$route.params.id==this.blogs[t].ID&&(this.text=this.blogs[t],console.log(this.text))},mounted:function(){var t=this;this.$http.get("./static/data/blogs.json").then(function(s){console.log(s);for(var e=0;e<s.data.length;e++)t.$route.params.id==s.data[e].ID&&(t.text=s.data[e],t.blogs=s.data,console.log(s.data[e]));console.log(t.text.title)}).catch(function(t){console.log(t)})},data:function(){return{text:{},blogs:[]}}},D={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"blog"}},[e("div",{staticClass:"main"},[e("div",{staticClass:"index"},[e("h1",[t._v(t._s(t.text.title)),e("span",[t._v(t._s(t.text.date))])]),t._v(" "),e("div",{staticClass:"tag"},t._l(t.text.tag,function(s){return e("span",[t._v(t._s(s))])})),t._v(" "),e("div",{staticClass:"content",domProps:{innerHTML:t._s(t.text.content)}})]),t._v(" "),e("div",{staticClass:"archive"},[e("div",[e("h1",[t._v("归档")]),t._v(" "),e("ul",t._l(t.blogs,function(s,i){return e("li",[e("span",[t._v(t._s(s.date))]),t._v(" "),e("router-link",{attrs:{to:{name:"Details",params:{id:s.ID}}}},[t._v("\n                            "+t._s(s.title)+"\n                        ")])],1)}))])])]),t._v(" "),e("PublicFooter")],1)},staticRenderFns:[]},U=e("VU/8")(E,D,!1,function(t){e("Prho"),e("trUh")},"data-v-62ef7fb2",null).exports;i.a.use(m.a);var N=new m.a({routes:[{path:"/",name:"Home",component:C},{path:"/introduction",name:"Introduction",component:k},{path:"/blog/details/:id",name:"Details",component:U},{path:"/blog",name:"Blog",component:F},{path:"/signup",name:"signup",component:I}]}),R=e("mtWM"),W=e.n(R);i.a.prototype.$http=W.a,new i.a({el:"#root",router:N,template:"<App/>",components:{App:f}})},ODL0:function(t,s){},Prho:function(t,s){},RFhS:function(t,s){},TwQq:function(t,s){},ebxk:function(t,s){},trUh:function(t,s){},xFq4:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.d38ed18c5d94c5d752b0.js.map