import{_ as c,r as e,o as l,c as p,a as n,d as s,b as a,w as i,e as u}from"./app-hVUg_Z9u.js";const r="/assets/1713074250104-e3N1950B.png",k="/assets/1713075584117-OaECYqUc.png",d="/assets/1713075251126-mNPjc78s.png",m={},v=n("h2",{id:"前言",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#前言","aria-hidden":"true"},"#"),s(" 前言")],-1),b={href:"https://v3-vite-admin-js-master.zeabur.app/#/dashboard",target:"_blank",rel:"noopener noreferrer"},h={href:"https://yaozongbin.github.io/v3-vite-admin-js-master",target:"_blank",rel:"noopener noreferrer"},g=u('<h2 id="目的" tabindex="-1"><a class="header-anchor" href="#目的" aria-hidden="true">#</a> 目的</h2><p>本文将通过登录模块教会你配置 <code>api </code>接口、在页面上调用接口发起请求、<code>Pinia </code>保存用户信息、经过路由守卫的拦截，成功跳转到首页、<code>Token </code>鉴权，判断是否退出登录。</p><h2 id="配置登录接口" tabindex="-1"><a class="header-anchor" href="#配置登录接口" aria-hidden="true">#</a> 配置登录接口</h2><h3 id="建立目录结构" tabindex="-1"><a class="header-anchor" href="#建立目录结构" aria-hidden="true">#</a> 建立目录结构</h3>',4),f=n("div",{class:"custom-container info"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8h.01"}),n("path",{d:"M11 12h1v4h1"})])]),n("p",{class:"custom-container-title"},"目录结构"),n("p",null,[s("在 "),n("code",null,"src"),s("目录下新建 "),n("code",null,"api"),s("目录存放 "),n("code",null,"login.js"),s("，这个文件夹即代表了登录模块。")]),n("p",null,[n("img",{src:r,alt:"1713074250104"})]),n("div",{class:"custom-container warning"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8v4"}),n("path",{d:"M12 16h.01"})])]),n("p",{class:"custom-container-title"},"注意"),n("p",null,"注意是登录模块，不止是登录接口。如果该模块下还有子模块的话，你可以继续往下面再建立子模块的文件夹")])],-1),w=n("h3",{id:"路由守卫以及校验登录表单",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#路由守卫以及校验登录表单","aria-hidden":"true"},"#"),s(" 路由守卫以及校验登录表单")],-1),y=n("div",{class:"custom-container info"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8h.01"}),n("path",{d:"M11 12h1v4h1"})])]),n("p",{class:"custom-container-title"},"路由守卫"),n("p",null,[n("code",null,"@/router/permission.js")]),n("p",null,[n("img",{src:k,alt:"1713075584117"})]),n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(" router "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@/router"'),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" useUserStoreHook "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@/store/modules/user"'),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" usePermissionStoreHook "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@/store/modules/permission"'),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" ElMessage "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"element-plus"'),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" whiteList "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@/config/white-list"'),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" getToken "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@/utils/cache/cookies"'),s(`
`),n("span",{class:"token keyword"},"import"),s(" asyncRouteSettings "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@/config/async-route"'),s(`
`),n("span",{class:"token keyword"},"import"),s(" NProgress "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"nprogress"'),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},'"nprogress/nprogress.css"'),s(`

NProgress`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"configure"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"showSpinner"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`

router`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"beforeEach"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("to"),n("span",{class:"token punctuation"},","),s(" _from"),n("span",{class:"token punctuation"},","),s(" next")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    NProgress`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"start"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" userStore "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"useUserStoreHook"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" permissionStore "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"usePermissionStoreHook"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token comment"},"// 判断该用户是否登录"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"getToken"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("to"),n("span",{class:"token punctuation"},"."),s("path "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token string"},'"/login"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token comment"},"// 如果已经登录，并准备进入 Login 页面，则重定向到主页"),s(`
            `),n("span",{class:"token function"},"next"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"path"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"/"'),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
            NProgress`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"done"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token comment"},"// 检查用户是否已获得其权限角色"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("userStore"),n("span",{class:"token punctuation"},"."),s("roles"),n("span",{class:"token punctuation"},"."),s("length "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("asyncRouteSettings"),n("span",{class:"token punctuation"},"."),s("open"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                        `),n("span",{class:"token comment"},"// 注意：角色必须是一个数组！ 例如: ['admin'] 或 ['developer', 'editor']"),s(`
                        `),n("span",{class:"token keyword"},"await"),s(" userStore"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getInfo"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
                        `),n("span",{class:"token keyword"},"const"),s(" roles "),n("span",{class:"token operator"},"="),s(" userStore"),n("span",{class:"token punctuation"},"."),s(`roles

                        `),n("span",{class:"token comment"},"// 根据角色生成可访问的 Routes（可访问路由 = 常驻路由 + 有访问权限的动态路由）"),s(`
                        permissionStore`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setRoutes"),n("span",{class:"token punctuation"},"("),s("roles"),n("span",{class:"token punctuation"},")"),s(`

                    `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
                        `),n("span",{class:"token comment"},"// 没有开启动态路由功能，则启用默认角色"),s(`
                        userStore`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setRoles"),n("span",{class:"token punctuation"},"("),s("asyncRouteSettings"),n("span",{class:"token punctuation"},"."),s("defaultRoles"),n("span",{class:"token punctuation"},")"),s(`
                        permissionStore`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setRoutes"),n("span",{class:"token punctuation"},"("),s("asyncRouteSettings"),n("span",{class:"token punctuation"},"."),s("defaultRoles"),n("span",{class:"token punctuation"},")"),s(`
                    `),n("span",{class:"token punctuation"},"}"),s(`
                    `),n("span",{class:"token comment"},"// 将'有访问权限的动态路由' 添加到 Router 中"),s(`
                    permissionStore`),n("span",{class:"token punctuation"},"."),s("dynamicRoutes"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"forEach"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"route"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
                        router`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"addRoute"),n("span",{class:"token punctuation"},"("),s("route"),n("span",{class:"token punctuation"},")"),s(`
                    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
                    `),n("span",{class:"token comment"},"// 确保添加路由已完成"),s(`
                    `),n("span",{class:"token comment"},"// 设置 replace: true, 因此导航将不会留下历史记录"),s(`
                    `),n("span",{class:"token function"},"next"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token operator"},"..."),s("to"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"replace"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"("),s("err"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    `),n("span",{class:"token comment"},"// 过程中发生任何错误，都直接重置 Token，并重定向到登录页面"),s(`
                    userStore`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"resetToken"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
                    ElMessage`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"error"),n("span",{class:"token punctuation"},"("),s("err"),n("span",{class:"token punctuation"},"."),s("message "),n("span",{class:"token operator"},"||"),s(),n("span",{class:"token string"},'"路由守卫过程发生错误"'),n("span",{class:"token punctuation"},")"),s(`
                    `),n("span",{class:"token function"},"next"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"/login"'),n("span",{class:"token punctuation"},")"),s(`
                    NProgress`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"done"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token function"},"next"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"// 如果没有 Token"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("whiteList"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"indexOf"),n("span",{class:"token punctuation"},"("),s("to"),n("span",{class:"token punctuation"},"."),s("path"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"!=="),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token comment"},"// 如果在免登录的白名单中，则直接进入"),s(`
            `),n("span",{class:"token function"},"next"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token comment"},"// 其他没有访问权限的页面将被重定向到登录页面"),s(`
            `),n("span",{class:"token function"},"next"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"/login"'),n("span",{class:"token punctuation"},")"),s(`
            NProgress`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"done"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`

router`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"afterEach"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    NProgress`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"done"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])]),n("p",null,"设置点击登录按钮"),n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},"/** 登录逻辑*/"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"handleLogin"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token doc-comment comment"},"/** 判断value值是否存在 validate验证表单的有效性 */"),s(`
  loginFormRef`),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token operator"},"?."),n("span",{class:"token function"},"validate"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"valid"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("valid"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token doc-comment comment"},"/** 登录成功 加载loading*/"),s(`
      loading`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token doc-comment comment"},"/** 配合Pinia 操作登录*/"),s(`
      `),n("span",{class:"token function"},"useUserStore"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"login"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),s(" loginForm"),n("span",{class:"token punctuation"},"."),s("username"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"password"),n("span",{class:"token operator"},":"),s(" loginForm"),n("span",{class:"token punctuation"},"."),s("password"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token doc-comment comment"},"/** 跳转重定向路由*/"),s(`
          console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("loading"),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
          router`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"path"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"/"'),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"catch"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token doc-comment comment"},"/** 处理登录失败的情况，将密码字段清空*/"),s(`
          loginForm`),n("span",{class:"token punctuation"},"."),s("password "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"finally"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token doc-comment comment"},"/**  loading 的值设置为 false，隐藏加载状态*/"),s(`
          loading`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])]),n("p",null,[n("img",{src:d,alt:"1713075251126"})]),n("p",null,[s("这里的 "),n("code",null,"loginFormRef.value?.validate"),s(" 是校验登录表单，调用该 Store 的 "),n("code",null,"login action"),s("，并传入 loginFormData 参数（用户名、密码、验证码）即可。")]),n("p",null,[n("code",null,"login action"),s(" 返回值是一个 Promise，所以我们后面链式跟一个 "),n("code",null,".then"),s(" 、 "),n("code",null,".catch"),s(" 和 "),n("code",null,".finally"),s("，接口调用成功则会执行 "),n("code",null,".then"),s(" （跳转到首页),如果途中发生错误，则会执行 "),n("code",null,".catch"),s("，而无论什么情况都会执行 "),n("code",null,".finally")]),n("div",{class:"custom-container warning"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8v4"}),n("path",{d:"M12 16h.01"})])]),n("p",{class:"custom-container-title"},"注意"),n("p",null,"路由守卫全部的代码如上，由于注释已经写的很清楚了，建议大家慢慢的仔细阅读即可，我这里只简单概述一下路由守卫做了什么事："),n("ol",null,[n("li",null,"判断用户是否登录，没登录则只能进入白名单页面，比如登录页。"),n("li",null,"如果已经登录，那么将不允许进入登录页。"),n("li",null,"如果已经登录，那么还要检查是否拿到用户角色，如果没有，则要调用用户详情接口。"),n("li",null,"如果开启了动态路由功能，就根据角色去过滤动态路由；如果没有开启动态路由功能，则生成所有路由。"),n("li",null,"不管什么情况，一旦发生错误，就重置 Token，并重定向到登录页。")])])],-1),_=n("h2",{id:"v3-admin-vite-相关链接",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#v3-admin-vite-相关链接","aria-hidden":"true"},"#"),s(" V3 Admin Vite 相关链接")],-1),x={href:"https://juejin.cn/post/7089377403717287972",target:"_blank",rel:"noopener noreferrer"},S={href:"https://github.com/un-pany/v3-admin-vite",target:"_blank",rel:"noopener noreferrer"},j={href:"https://gitee.com/un-pany/v3-admin-vite",target:"_blank",rel:"noopener noreferrer"};function R(P,V){const o=e("RouterLink"),t=e("ExternalLinkIcon");return l(),p("div",null,[v,n("p",null,[s("在"),a(o,{to:"/blogs/category/Vue/v3AdminVite2.html"},{default:i(()=>[s("【V3 Admin Vite】接口、跨域、打包(2)")]),_:1}),s(" 基础上，本文将教会你如何使用该项目掌握登录模块涉及 (API、Axios、Pinia、路由守卫、鉴权)。")]),n("p",null,[s("项目链接①："),n("a",b,[s("v3-vite-admin-js-master.zeabur.app"),a(t)])]),n("p",null,[s("项目链接②："),n("a",h,[s("yaozongbin.github.io/v3-vite-admin-js-master"),a(t)])]),g,f,w,y,_,n("ul",null,[n("li",null,[n("a",x,[s("V3 Admin Vite 中文文档"),a(t)])]),n("li",null,[n("a",S,[s("Github/un-pany"),a(t)])]),n("li",null,[n("a",j,[s("Gitee/un-pany"),a(t)])])])])}const M=c(m,[["render",R],["__file","v3AdminVite3.html.vue"]]);export{M as default};
