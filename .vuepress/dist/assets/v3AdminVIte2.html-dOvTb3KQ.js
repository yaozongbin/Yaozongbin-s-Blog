import{_ as r,r as a,o as l,c,a as e,d as n,b as s,w as d,e as o}from"./app-hcqKArz1.js";const h="/assets/1712415176091-_CmOxdWl.png",p="/assets/1712415514093-U40iXFB0.png",u="/assets/1712416700885-c7m_--Aa.png",m="/assets/1712416928475-LpGsrGpP.png",_={},v=e("h2",{id:"前言",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#前言","aria-hidden":"true"},"#"),n(" 前言")],-1),g={href:"https://yaozongbin.pages.dev/blogs/category/Vue/v3AdminVite1.html",target:"_blank",rel:"noopener noreferrer"},k={href:"https://yaozongbin.github.io/v3-vite-admin-js-master",target:"_blank",rel:"noopener noreferrer"},x=o('<h2 id="设置后端接口" tabindex="-1"><a class="header-anchor" href="#设置后端接口" aria-hidden="true">#</a> 设置后端接口</h2><p>前端所有的请求最终都是通过 <code>Axios </code>来发送的，我们可以找到封装 <code>Axios </code>的文件，看见后端接口的 <code>baseURL</code> 是 <code>import.meta.env.VITE_BASE_API</code></p><p><img src="'+h+'" alt="1712415176091"></p><p>然后我们可以在 <code>.env</code> 配置文件中找到定义 <code>VITE_BASE_API</code> 的地方：</p><p><img src="'+p+'" alt="1712415514093"></p>',5),b=e("div",{class:"custom-container warning"},[e("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[e("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[e("circle",{cx:"12",cy:"12",r:"9"}),e("path",{d:"M12 8v4"}),e("path",{d:"M12 16h.01"})])]),e("p",{class:"custom-container-title"},"Tip"),e("p",null,[e("code",null,".env.development"),n("代表开发环境配置，"),e("code",null," .env.production"),n("代表正式环境配置。")])],-1),w=o(`<h2 id="跨域-cors" tabindex="-1"><a class="header-anchor" href="#跨域-cors" aria-hidden="true">#</a> 跨域 CORS</h2><p>如果你并不想用反向代理的方式来调用接口并解决跨域问题，那你应该将你的 <code>VITE_BASE_API</code> 配置填写为完整的绝对路径：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 后端接口公共路径（如果解决跨域问题采用 CORS 就需要写全路径）</span>
VITE_BASE_API <span class="token operator">=</span> <span class="token string">&#39;https://mock.mengxuegu.com/mock/63218b5fb4c53348ed2bc212/api/v1&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,3),f={href:"https://juejin.cn/post/6999428822588194846",target:"_blank",rel:"noopener noreferrer"},V=e("h2",{id:"打包",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#打包","aria-hidden":"true"},"#"),n(" 打包")],-1),A=e("div",{class:"custom-container info"},[e("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[e("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[e("circle",{cx:"12",cy:"12",r:"9"}),e("path",{d:"M12 8h.01"}),e("path",{d:"M11 12h1v4h1"})])]),e("p",{class:"custom-container-title"},"接口公共路径"),e("p",null,[n("打包的话比较简单，我们以正式环境配置 "),e("code",null,".env.production"),n(" 为例。由于我们打包后部署的服务器上没有 "),e("code",null,"Nginx"),n(" 等工具帮助我们实现反向代理，所以我们就必须采用 CORS 的方式解决跨域问题，就需要将 "),e("code",null,"VITE_BASE_API"),n(" 写完整，也就是：")]),e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token comment"},"## 后端接口公共路径（如果解决跨域问题采用 CORS 就需要写全路径）"),n(`
VITE_BASE_API `),e("span",{class:"token operator"},"="),n(),e("span",{class:"token string"},"'https://mock.mengxuegu.com/mock/63218b5fb4c53348ed2bc212/api/v1'"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])])],-1),I={class:"custom-container info"},E=e("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[e("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[e("circle",{cx:"12",cy:"12",r:"9"}),e("path",{d:"M12 8h.01"}),e("path",{d:"M11 12h1v4h1"})])],-1),y=o(`<p class="custom-container-title">路由模式</p><p>然后选择一种路由方式（<code>hash</code> 或 <code>html5</code>），模板本身默认是 <code>hash 模式</code>，如果你想切换为 html5 模式的话，更改 <code>VITE_ROUTER_HISTORY</code> 配置即可：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 路由模式 hash 或 html5</span>
VITE_ROUTER_HISTORY <span class="token operator">=</span> <span class="token string">&#39;hash&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,3),T={class:"custom-container warning"},B=e("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[e("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[e("circle",{cx:"12",cy:"12",r:"9"}),e("path",{d:"M12 8v4"}),e("path",{d:"M12 16h.01"})])],-1),C=e("p",{class:"custom-container-title"},"Tip",-1),j=e("code",null,"html5",-1),P={href:"https://router.vuejs.org/zh/guide/essentials/history-mode.html#html5-%E6%A8%A1%E5%BC%8F",target:"_blank",rel:"noopener noreferrer"},R=e("div",{class:"custom-container info"},[e("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[e("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[e("circle",{cx:"12",cy:"12",r:"9"}),e("path",{d:"M12 8h.01"}),e("path",{d:"M11 12h1v4h1"})])]),e("p",{class:"custom-container-title"},"打包路径"),e("p",null,[n("最后再设置一下打包路径 "),e("code",null,"VITE_PUBLIC_PATH"),n(" 即可。模板项目本身是需要部署到这个域名下："),e("code",null,"https://yaozongbin.github.io/v3-admin-vite-js-master/"),n("，所以我们需要这么填写：")]),e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token comment"},"## 打包路径（就是网站前缀，例如部署到 https://un-pany.github.io/v3-admin-vite/ 域名下，就需要填写 /v3-admin-vite/）"),n(`
VITE_PUBLIC_PATH `),e("span",{class:"token operator"},"="),n(),e("span",{class:"token string"},"'/v3-admin-vite-js-master/'"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])]),e("div",{class:"custom-container warning"},[e("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[e("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[e("circle",{cx:"12",cy:"12",r:"9"}),e("path",{d:"M12 8v4"}),e("path",{d:"M12 16h.01"})])]),e("p",{class:"custom-container-title"},"Tip"),e("p",null,[n("假如是要部署到 "),e("code",null,"https://xxx.com/yyy/"),n(" 下，那么就需要填写 "),e("code",null,"VITE_PUBLIC_PATH = '/yyy/'")]),e("p",null,[n("假如是要部署到 "),e("code",null,"https://xxx.com/"),n(" 下，那么就需要填写 "),e("code",null,"VITE_PUBLIC_PATH = '/'")])])],-1),S=o('<h3 id="打包运行命令" tabindex="-1"><a class="header-anchor" href="#打包运行命令" aria-hidden="true">#</a> 打包运行命令</h3><p>打开 <code>package.json</code> 文件，可以看见打包该项目内置的命令：</p><p><img src="'+u+`" alt="1712416700885"></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 项目打包命令</span>
<span class="token function">pnpm</span> build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>打包完成后，就可以在目录下，看见一个名为 <code>docs</code> 的静态资源文件夹，这整个文件夹就是需要丢到前端服务器上去的东西。</p><p><img src="`+m+'" alt="1712416928475"></p><h2 id="v3-admin-vite-相关链接" tabindex="-1"><a class="header-anchor" href="#v3-admin-vite-相关链接" aria-hidden="true">#</a> V3 Admin Vite 相关链接</h2>',7),M={href:"https://juejin.cn/post/7089377403717287972",target:"_blank",rel:"noopener noreferrer"},L={href:"https://github.com/un-pany/v3-admin-vite",target:"_blank",rel:"noopener noreferrer"},O={href:"https://gitee.com/un-pany/v3-admin-vite",target:"_blank",rel:"noopener noreferrer"};function U(z,H){const i=a("RouterLink"),t=a("ExternalLinkIcon");return l(),c("div",null,[v,e("p",null,[n("在"),s(i,{to:"/blogs/category/Vue/v3AdminVite1.html"},{default:d(()=>[n("【V3 Admin Vite】环境、下载、运行项目(1)")]),_:1}),n(" 基础上，本文将教会你如何使用该项目对接你自己的后端接口、如何处理接口跨域问题、如何正确的打包部署前端静态文件。")]),e("p",null,[n("项目链接①："),e("a",g,[n("v3-vite-admin-js-master.zeabur.app"),s(t)])]),e("p",null,[n("项目链接②："),e("a",k,[n("yaozongbin.github.io/v3-vite-admin-js-master"),s(t)])]),x,b,w,e("p",null,[n("想了解更多关于跨域的知识，可以阅读这篇文章："),e("a",f,[n("跨域"),s(t)])]),V,A,e("div",I,[E,y,e("div",T,[B,C,e("p",null,[n("但要要注意使用 "),j,n(" 模式的话，就必须得在部署前端的服务器上新增一些配置，至于为什么，你可以仔细阅读这篇："),e("a",P,[n("Vue-Router/html5"),s(t)])])])]),R,S,e("ul",null,[e("li",null,[e("a",M,[n("V3 Admin Vite 中文文档"),s(t)])]),e("li",null,[e("a",L,[n("Github/un-pany"),s(t)])]),e("li",null,[e("a",O,[n("Gitee/un-pany"),s(t)])])])])}const G=r(_,[["render",U],["__file","v3AdminVIte2.html.vue"]]);export{G as default};
