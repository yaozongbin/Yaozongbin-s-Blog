import{_ as l,r as t,o as h,c as s,a as e,d as a,b as n,e as i}from"./app-9X12jgvo.js";const d="/assets/1698757688698-k5KsM2PT.png",o="/assets/1698758304506-29kLvZlz.png",c="/assets/1698758479439-cZ2V7iOB.png",u={},p=i('<h2 id="后端" tabindex="-1"><a class="header-anchor" href="#后端" aria-hidden="true">#</a> 后端</h2><ul><li>后端，又称服务端、server 端；</li><li>前端是用户可见、可操作的部分，如树枝树叶；</li><li>服务端为前端提供 “支撑”和 “营养”，如树根；</li></ul><h2 id="后端的职责" tabindex="-1"><a class="header-anchor" href="#后端的职责" aria-hidden="true">#</a> 后端的职责</h2><ul><li>提供前端要展示的数据；</li><li>接收前端要提交的数据；</li><li>存储数据（软件公司非常看重数据，会收集各种数据）；</li></ul><h2 id="后端的表现形式" tabindex="-1"><a class="header-anchor" href="#后端的表现形式" aria-hidden="true">#</a> 后端的表现形式</h2>',5),x={href:"https://www.axios-http.cn/",target:"_blank",rel:"noopener noreferrer"},_=e("li",null,"这个接口，就是服务端提供的；",-1),f=i('<h2 id="前后端交互通讯-http协议" tabindex="-1"><a class="header-anchor" href="#前后端交互通讯-http协议" aria-hidden="true">#</a> 前后端交互通讯-HTTP协议</h2><ul><li>超文本传输协议 <code>Hyper Text Transfer Protocol</code></li><li>规定了客户端和服务端如何通讯；</li><li>是互联网世界数据通讯的标准和基石；</li></ul><h2 id="http-request" tabindex="-1"><a class="header-anchor" href="#http-request" aria-hidden="true">#</a> HTTP - Request</h2><ul><li>Request：请求，前端发送给服务端；</li><li>Request Body：请求是发送给后端的数据；</li><li>Request Content-type：发送数据的格式，如 JSON 格式；</li></ul><h2 id="http-response" tabindex="-1"><a class="header-anchor" href="#http-response" aria-hidden="true">#</a> HTTP - Response</h2><ul><li>Response：返回/响应，服务端返回给前端;</li><li>Response Body：后端返回给前端的数据；</li><li>Response Content-type：返回数据的格式，如 JSON 格式；</li></ul><h2 id="演示一个-get-请求" tabindex="-1"><a class="header-anchor" href="#演示一个-get-请求" aria-hidden="true">#</a> 演示一个 Get 请求</h2><p><img src="'+d+'" alt="1698757688698"></p><h2 id="不同资源可能来自不同的域名" tabindex="-1"><a class="header-anchor" href="#不同资源可能来自不同的域名" aria-hidden="true">#</a> 不同资源可能来自不同的域名</h2><ul><li>HTML可能来自一个单独的域名</li><li>JS CSS可能来自一个独立的域名</li><li>数据可能来自一个独立的域名</li><li>不同域名可对应不同服务端</li></ul><p><img src="'+o+'" alt="1698758304506"></p><p>后端主要也可分为做静态服务（处理html css js 图片等）和数据服务（提供数据接口）</p><h2 id="后端如何处理并返回数据" tabindex="-1"><a class="header-anchor" href="#后端如何处理并返回数据" aria-hidden="true">#</a> 后端如何处理并返回数据</h2><h5 id="定义前端请求的-url-规则-路由-前端-ajax-请求需要-url" tabindex="-1"><a class="header-anchor" href="#定义前端请求的-url-规则-路由-前端-ajax-请求需要-url" aria-hidden="true">#</a> 定义前端请求的 url 规则 - 路由（前端 Ajax 请求需要 url）</h5><h5 id="request-获取数据-用-response-返回数据" tabindex="-1"><a class="header-anchor" href="#request-获取数据-用-response-返回数据" aria-hidden="true">#</a> Request 获取数据，用 Response 返回数据</h5><ul><li>也可简称为 req 和 res</li><li>通过 Request 可获取：method url body</li><li>通过 Response：可设置：状态码，Content-type，body</li></ul><h5 id="读取和存储数据-数据库" tabindex="-1"><a class="header-anchor" href="#读取和存储数据-数据库" aria-hidden="true">#</a> 读取和存储数据 - 数据库</h5><ul><li>数据库，专职做数据的存储和查询</li><li>数据库是一个独立的系统，不是 nodejs 专属的</li><li>基本操作：查询、新增、删除、修改、排序等都需要查询条件</li></ul><h2 id="后端开发和前端开发的区别" tabindex="-1"><a class="header-anchor" href="#后端开发和前端开发的区别" aria-hidden="true">#</a> 后端开发和前端开发的区别</h2><p><img src="'+c+'" alt="1698758479439"></p><h2 id="服务稳定性" tabindex="-1"><a class="header-anchor" href="#服务稳定性" aria-hidden="true">#</a> 服务稳定性</h2><ul><li>单个客户端可以意外挂掉，但是服务端不能</li><li>server 端可能会遭受各种恶意攻击和误操作</li></ul><h2 id="考虑-cpu-和内存-优化、扩展" tabindex="-1"><a class="header-anchor" href="#考虑-cpu-和内存-优化、扩展" aria-hidden="true">#</a> 考虑 CPU 和内存（优化、扩展）</h2><ul><li>客户端独占一个浏览器，内存和 CPU 都不是问题</li><li>server 端要承载很多请求，CPU 和内存都是稀缺资源</li></ul><h2 id="日志记录" tabindex="-1"><a class="header-anchor" href="#日志记录" aria-hidden="true">#</a> 日志记录</h2><ul><li>前端也会参与写日志，但只是日志的发起方，不关心后续</li><li>server 端要记录日志、存储日志、分析日志，前端不关心</li></ul><h2 id="安全" tabindex="-1"><a class="header-anchor" href="#安全" aria-hidden="true">#</a> 安全</h2><ul><li>server 端要随时准备接收各种恶意攻击，前端则少很多</li><li>如：越权操作，数据库攻击等</li></ul><h2 id="集群和服务拆分" tabindex="-1"><a class="header-anchor" href="#集群和服务拆分" aria-hidden="true">#</a> 集群和服务拆分</h2><ul><li>产品发展速度快，流量可能会迅速增加</li><li>如何通过扩展机器和服务拆分来承载大流量？</li></ul>',30);function b(m,R){const r=t("ExternalLinkIcon");return h(),s("div",null,[p,e("ul",null,[e("li",null,[a("前端 "),e("a",x,[a("Axios "),n(r)]),a("要调用某个接口，比如使用 get 请求获取数据，post 请求提交数据；")]),_]),f])}const T=l(u,[["render",b],["__file","backend.html.vue"]]);export{T as default};
