import{_ as l,r,o as c,c as i,a as e,d as t,b as n,e as s}from"./app-Hqn1X2FU.js";const a="/assets/1725588901346-jIvE3ZpC.jpg",d="/assets/1725589458606-DgwXOdqt.png",h={},p=e("h2",{id:"前言",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#前言","aria-hidden":"true"},"#"),t(" 前言")],-1),u=e("div",{class:"custom-container info"},[e("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[e("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[e("circle",{cx:"12",cy:"12",r:"9"}),e("path",{d:"M12 8h.01"}),e("path",{d:"M11 12h1v4h1"})])]),e("p",{class:"custom-container-title"},"前言"),e("p",null,"本篇文章让你多方位了解 Web Components，但不涉及任何技术细节的讲解。具体的 API 细节可留意后续文章~")],-1),m=e("h2",{id:"开始学习",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#开始学习","aria-hidden":"true"},"#"),t(" 开始学习")],-1),_=e("div",{class:"custom-container info"},[e("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[e("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[e("circle",{cx:"12",cy:"12",r:"9"}),e("path",{d:"M12 8h.01"}),e("path",{d:"M11 12h1v4h1"})])]),e("p",{class:"custom-container-title"},"一句话概括！"),e("p",null,"Web Components 是一组 Web 平台 API，运用它们可以创建可重用的定制元素，这些定制元素可在现代浏览器上运行，并且可以与任何支持 HTML 的 JavaScript 库或框架一起使用。"),e("div",{class:"custom-container warning"},[e("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[e("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[e("circle",{cx:"12",cy:"12",r:"9"}),e("path",{d:"M12 8v4"}),e("path",{d:"M12 16h.01"})])]),e("p",{class:"custom-container-title"},"言简意赅"),e("p",null,"Web Components 是可以直接被浏览器渲染的自定义组件 。")])],-1),w=e("div",{class:"custom-container info"},[e("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[e("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[e("circle",{cx:"12",cy:"12",r:"9"}),e("path",{d:"M12 8h.01"}),e("path",{d:"M11 12h1v4h1"})])]),e("p",{class:"custom-container-title"},"为什么要学?"),e("p",null,[t("现阶段前端编写 UI 的方向是组件化，像 "),e("code",null,"Vue & React"),t(" 都是属于组件化的框架。但是它们都依赖于框架本身和构建工具。")]),e("p",null,[t("举个例子，基于 "),e("code",null,"Vue"),t(" 的 "),e("code",null,"Element"),t(" 只能用于基于 Vue 的项目，基于 "),e("code",null,"React"),t(" 的 "),e("code",null,"Ant Design"),t(" 只能用于基于 React 的项目，这类型的 UI 库是不能混用的，原因就是它们都依赖于框架本身和构建工具（"),e("code",null,"Webpack"),t(" 和 "),e("code",null,"Vite"),t(" 等）提供的对组件的运行时和编译构建能力。")]),e("p",null,[t("换句话说就是："),e("code",null,"Vue"),t("只认识 Element 组件语法，"),e("code",null,"React"),t("只认识 "),e("code",null,"Ant Design"),t("组件语法。")]),e("p",null,[t("甚至更严格一点，同一框架不同版本之间也可能不兼容："),e("strong",null,"Vue2 只认识 Element UI 的组件语法，Vue3 只认识 Element Plus 组件的语法。")]),e("p",null,"而 Web Components 的出现可以打破这种局面。因为 Web Components 是原生支持的，理论上可以实现无框架、无编译的组件库。如果有一套组件库是基于 Web Components 技术开发的，那么就可以运用到任意 Web 项目，自然也包括 Vue2 & Vue3 & React 等 Web 框架"),e("p",null,[e("img",{src:a,alt:"1725588901346"})])],-1),g=e("h2",{id:"是不是很酷",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#是不是很酷","aria-hidden":"true"},"#"),t(" 是不是很酷")],-1),b=e("div",{class:"custom-container info"},[e("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[e("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[e("circle",{cx:"12",cy:"12",r:"9"}),e("path",{d:"M12 8h.01"}),e("path",{d:"M11 12h1v4h1"})])]),e("p",{class:"custom-container-title"},"WebComponents"),e("p",null,"因为 Web Components 是原生支持的，如果有一套组件库是基于 Web Components 技术开发的，那么就可以运用到任意 Web 项目，自然也包括 Vue & React 等 Web 框架"),e("div",{class:"custom-container warning"},[e("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[e("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[e("circle",{cx:"12",cy:"12",r:"9"}),e("path",{d:"M12 8v4"}),e("path",{d:"M12 16h.01"})])]),e("p",{class:"custom-container-title"},"听上去是不是很酷？"),e("p",null,[t("往往这种 "),e("code",null,"「统一的」"),t("有利于大家 "),e("code",null,"「偷懒」"),t("的技术都会得到不错的发展。并且目前 HTML 和 DOM 规范中已添加了支持 Web Components 的功能，其中当属 Chromium 内核的浏览器支持的最好。")])])],-1),f=e("h2",{id:"浏览器支持",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#浏览器支持","aria-hidden":"true"},"#"),t(" 浏览器支持")],-1),k=e("p",null,[e("em",null,"截止目前 2024 年 7 月 4 日")],-1),x={class:"custom-container info"},v=e("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[e("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[e("circle",{cx:"12",cy:"12",r:"9"}),e("path",{d:"M12 8h.01"}),e("path",{d:"M11 12h1v4h1"})])],-1),C=s('<p class="custom-container-title">浏览器支持</p><p>Web Components 包含 4 个部分：<code>HTML Template</code>、<code>Custom Elements</code>、<code>Shadow DOM</code> 和 <code>ES Modules</code>。</p><p>下图是官方给出的主流浏览器对这 4 部分的支持情况：</p><p><img src="'+d+'" alt="1725589458606"></p><p>可以看到已经支持的非常完善了，状态全部都是 <code>STABLE</code></p>',5),W=e("code",null,"IE 11",-1),E={href:"https://github.com/webcomponents/polyfills",title:"https://github.com/webcomponents/polyfills",target:"_blank",rel:"noopener noreferrer"},B=e("p",null,"不过，除非情况特殊，我们一般都不要去考虑兼容不支持的浏览器。",-1),M=e("h2",{id:"行业使用情况",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#行业使用情况","aria-hidden":"true"},"#"),t(" 行业使用情况")],-1),y=e("p",null,[e("em",null,"检索了部分，远不止这些")],-1),A={class:"custom-container details"},V=e("summary",{class:"custom-container-title"},"Twitter",-1),S=e("p",null,[t("Twitter 2016 年开始将自己的嵌入式推文从 "),e("code",null,"iframe"),t(" 切换成 Web Components 中的 "),e("code",null,"Shadow DOM"),t(" 技术。从而使浏览器内存占用率大幅降低，渲染时间大幅缩短，推文显示速度更快，页面滚动更流畅。")],-1),T={href:"https://devcommunity.x.com/t/upcoming-change-to-embedded-tweet-display-on-web/66215",title:"https://devcommunity.x.com/t/upcoming-change-to-embedded-tweet-display-on-web/66215",target:"_blank",rel:"noopener noreferrer"},R={class:"custom-container details"},j=e("summary",{class:"custom-container-title"},"Google",-1),D=e("p",null,"Google 开源了许多 Web Components，包括地图、Drive、日历等。也包括 Google 系产品 Youtube 的播放器组件。",-1),I={href:"https://github.com/GoogleWebComponents",target:"_blank",rel:"noopener noreferrer"},F={class:"custom-container details"},G=e("summary",{class:"custom-container-title"},"Microsoft",-1),L={href:"https://github.com/microsoft/fast",title:"https://github.com/microsoft/fast",target:"_blank",rel:"noopener noreferrer"},z={href:"https://www.msn.cn/zh-cn",title:"https://www.msn.cn/zh-cn",target:"_blank",rel:"noopener noreferrer"},N=e("h2",{id:"开源生态",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#开源生态","aria-hidden":"true"},"#"),t(" 开源生态")],-1),O=e("p",null,[e("em",null,"检索了部分，远不止这些")],-1),P={class:"custom-container info"},q=e("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[e("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[e("circle",{cx:"12",cy:"12",r:"9"}),e("path",{d:"M12 8h.01"}),e("path",{d:"M11 12h1v4h1"})])],-1),H=e("p",{class:"custom-container-title"},"开源生态",-1),U={href:"https://github.com/lit/lit",title:"https://github.com/lit/lit",target:"_blank",rel:"noopener noreferrer"},J={href:"https://github.com/microsoft/fast",title:"https://github.com/microsoft/fast",target:"_blank",rel:"noopener noreferrer"},X={href:"https://github.com/ionic-team/stencil",title:"https://github.com/ionic-team/stencil",target:"_blank",rel:"noopener noreferrer"},Y={href:"https://github.com/Tencent/omi",title:"https://github.com/Tencent/omi",target:"_blank",rel:"noopener noreferrer"},Z={class:"custom-container warning"},K=e("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[e("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[e("circle",{cx:"12",cy:"12",r:"9"}),e("path",{d:"M12 8v4"}),e("path",{d:"M12 16h.01"})])],-1),Q=e("p",{class:"custom-container-title"},"开源生态",-1),$={href:"https://custom-elements-everywhere.com",title:"https://custom-elements-everywhere.com",target:"_blank",rel:"noopener noreferrer"},ee=s("<ul><li><code>React 18.2.0</code> 测试分数为 <code>67%</code></li><li><code>React 19 Beta</code> 测试分数为 <code>100%</code></li><li><code>Vue 3.2.38</code> 测试分数为 <code>100%</code></li><li><code>Angular 16.2.10</code> 测试分数为 <code>100%</code></li><li><code>Svelte 3.59.2</code> 测试分数为 <code>94%</code></li></ul><p>也就是说，主流框架对其的支持程度都还是不错！</p>",2),te=e("h2",{id:"未来如何",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#未来如何","aria-hidden":"true"},"#"),t(" 未来如何？")],-1),oe={class:"custom-container info"},ne=e("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[e("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[e("circle",{cx:"12",cy:"12",r:"9"}),e("path",{d:"M12 8h.01"}),e("path",{d:"M11 12h1v4h1"})])],-1),se=s('<p class="custom-container-title">未来</p><p>虽然 Web Components 这东西是一套标准/规范，但正是由于它是一套标准/规范，导致它发展会比第三方框架慢。就是说大家熟知的 Vue &amp; React 等框架正如日中天的时候，Web Components 可能才刚刚起步。</p><p><strong>我个人的看法则是 Web Components 会和第三方框架一起发展，但是它将长期甚至一直落后于「流行的第三方方案」</strong> 。这里我说的第三方框架包含但不限于 Vue &amp; React 等框架，还包含未来可能新出的一些框架。</p><p>「标准」落后于「第三方」这种事在前端并不少见，和大家比较贴近的比如 CSS &amp; Sass/Less。</p><p>由于这种落后的现象存在，而应用层面我们追求的往往又是 <code>「在可行的方案上最大程度的提高生产力」</code>，所以即便是 Web Components 大成，可能也是充当一门 <code>「基础技术」</code>服务于更上层的框架。</p><p>所以，当别的文章在用 <code>Web Components</code> vs <code>Vue &amp; React</code> 时，可能就已经错了。 真正横向对比的应该是 <code>基于 Web Components 的 xxx</code> vs <code>Vue &amp; React</code></p>',6),le={href:"https://github.com/rccoder",title:"https://github.com/rccoder",target:"_blank",rel:"noopener noreferrer"},re=e("blockquote",null,[e("p",null,"未来会如何？永远是个谜。我选择站在 JS 的船上等待未来黎明的到来。")],-1),ce=e("h2",{id:"参考文章",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#参考文章","aria-hidden":"true"},"#"),t(" 参考文章")],-1),ie=e("p",null,[e("em",null,"部分内容参考以下文章 & 讨论")],-1),ae={href:"https://www.albertaz.com/blog/web-components-ststus",title:"https://www.albertaz.com/blog/web-components-ststus",target:"_blank",rel:"noopener noreferrer"},de={href:"https://www.zhihu.com/question/58731753",title:"https://www.zhihu.com/question/58731753",target:"_blank",rel:"noopener noreferrer"},he={href:"https://github.com/ascoders/weekly/blob/master/%E5%89%8D%E6%B2%BF%E6%8A%80%E6%9C%AF/10.%E7%B2%BE%E8%AF%BB%E3%80%8AWeb%20Components%20%E7%9A%84%E5%9B%B0%E5%A2%83%E3%80%8B.md",title:"https://github.com/ascoders/weekly/blob/master/%E5%89%8D%E6%B2%BF%E6%8A%80%E6%9C%AF/10.%E7%B2%BE%E8%AF%BB%E3%80%8AWeb%20Components%20%E7%9A%84%E5%9B%B0%E5%A2%83%E3%80%8B.md",target:"_blank",rel:"noopener noreferrer"},pe={href:"https://eisenbergeffect.medium.com/2023-state-of-web-components-c8feb21d4f16",title:"https://eisenbergeffect.medium.com/2023-state-of-web-components-c8feb21d4f16",target:"_blank",rel:"noopener noreferrer"},ue=e("h2",{id:"end",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#end","aria-hidden":"true"},"#"),t(" End")],-1);function me(_e,we){const o=r("ExternalLinkIcon");return c(),i("div",null,[p,u,m,_,w,g,b,f,k,e("div",x,[v,C,e("p",null,[t("如果遇见某些浏览器不支持部分功能怎么办？比如 "),W,t(" ?!!，这时候我们可以采用 "),e("a",E,[t("Web Components Polyfills"),n(o)]),t("。")]),B]),M,y,e("details",A,[V,S,e("p",null,[e("a",T,[t("Upcoming Change to Embedded Tweet Display on Web"),n(o)])])]),e("details",R,[j,D,e("p",null,[e("a",I,[t("GitHub - GoogleWebComponents"),n(o)])])]),e("details",F,[G,e("p",null,[t("Microsoft Corporation(微软)使用基于 Web Components 技术开发的组件库 "),e("a",L,[t("FAST"),n(o)]),t(" 重构了 "),e("a",z,[t("MSN"),n(o)]),t(" 网站。另外，基于 ChatGPT 的 New Bing 也是基于 FAST 构建的。")])]),N,O,e("div",P,[q,H,e("ul",null,[e("li",null,[e("a",U,[t("Lit"),n(o)]),t("：Google 开源的一个用于构建快速、轻量级 Web 组件的简单库")]),e("li",null,[e("a",J,[t("Fast"),n(o)]),t("：微软 Edge 团队开源的基于 Web Components 技术的组件库")]),e("li",null,[e("a",X,[t("Stencil"),n(o)]),t("：Ionic 团队开源的 一个 Web Components 编译器")]),e("li",null,[e("a",Y,[t("Omi"),n(o)]),t("：腾讯开源的一个 Web Components 框架")])]),e("div",Z,[K,Q,e("p",null,[t("和现在主流 Web 框架结合呢？通过 "),e("a",$,[t("Custom Elements Everywhere"),n(o)]),t(" 网站可以得知一些数据：")]),ee])]),te,e("div",oe,[ne,se,e("p",null,[t("最后，引用一句来自用户 "),e("a",le,[t("rccoder"),n(o)]),t(" 的评论来结束本文：")]),re]),ce,ie,e("ul",null,[e("li",null,[e("a",ae,[t("你不知道的 Web Components - 现状"),n(o)])]),e("li",null,[e("a",de,[t("Web Component 和类 React、Angular、Vue 组件化技术谁会成为未来？"),n(o)])]),e("li",null,[e("a",he,[t("精读《Web Components 的困境》"),n(o)])]),e("li",null,[e("a",pe,[t("2023 State of Web Components"),n(o)])])]),ue])}const be=l(h,[["render",me],["__file","WebComponents01.html.vue"]]);export{be as default};
