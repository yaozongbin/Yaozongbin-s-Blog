import{_ as a,r as t,o as l,c as r,a as e,d as n,b as i,e as o}from"./app-ROJLFJlW.js";const d="/assets/1698156174197-lw5lZT6J.png",c="/assets/1698156965051-VzRRghvg.png",h={},u=e("hr",null,null,-1),_=e("p",null,"title: Hexo 从零开始搭建自己的博客网站 date: 2023/10/24 tags:",-1),g=e("ul",null,[e("li",null,"Hexo categories:"),e("li",null,"前端 hideComments: false")],-1),p=e("hr",null,null,-1),v=e("h2",{id:"_1-前言",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-前言","aria-hidden":"true"},"#"),n(" 1.前言")],-1),m=e("div",{class:"custom-container info"},[e("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[e("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[e("circle",{cx:"12",cy:"12",r:"9"}),e("path",{d:"M12 8h.01"}),e("path",{d:"M11 12h1v4h1"})])]),e("p",{class:"custom-container-title"},"Preface"),e("p",null,"基于vuepress的搭建，相信大家应该对博客搭建有所了解了 ,话不多说直接开造!")],-1),b=o(`<h2 id="_2-创建-github-仓库并配置ssh" tabindex="-1"><a class="header-anchor" href="#_2-创建-github-仓库并配置ssh" aria-hidden="true">#</a> 2. 创建 GitHub 仓库并配置ssh</h2><p>登录你的 GitHub 帐号，并创建一个新的仓库，仓库名是 <code>&lt;username&gt;.github.io</code>，其中 <code>&lt;username&gt;</code> 是你的 GitHub 用户名。将该仓库设置为公开仓库。 设置ssh</p><div class="language-apache line-numbers-mode" data-ext="apache"><pre class="language-apache"><code>ssh-keygen -t rsa -C &#39;xxx@xxx.com&#39;  #自己的邮箱
cat ~/.ssh/id_rsa.pub  #将里面的内容复制到 github -&gt;settings -&gt;SSH and GPC keys -&gt;SSH keys -&gt;New SSH key中
ssh -T git@github.com  #输入yes之后，行末尾会显示你的用户名（绑定成功邮箱会收到邮件提醒）
#接着在本地绑定与Github的用户名和邮箱（git）
git config --global user.name &quot;&lt;username&gt;&quot;    #自己的用户名
git config --global user.email &#39;xxx@xxx.com&#39;  #自己的邮箱
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-初始化hexo" tabindex="-1"><a class="header-anchor" href="#_3-初始化hexo" aria-hidden="true">#</a> 3.初始化Hexo</h2><p>创建一个新的文件夹，用于存储你的博客项目。 在终端中，进入该文件夹，并运行以下命令来初始化 Hexo</p><div class="language-apache line-numbers-mode" data-ext="apache"><pre class="language-apache"><code>mkdir myblog
hexo init  
#或者直接一步到位 
hexo init myblog
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-配置hexo" tabindex="-1"><a class="header-anchor" href="#_4-配置hexo" aria-hidden="true">#</a> 4.配置Hexo</h2><ul><li>进入你的 Hexo 项目文件夹，找到 _config.yml 文件，使用文本编辑器打开它。</li><li>在 _config.yml 文件中，配置你的博客设置，例如标题、描述、作者等。</li><li>根据需要，你还可以配置主题、插件和其他 Hexo 选项。 编辑_config.yml文件，添加如下内容</li></ul><div class="language-apache line-numbers-mode" data-ext="apache"><pre class="language-apache"><code>deploy:
        type: git
        repo: git@github.com: &lt;username&gt;/ &lt;username&gt;.github.io.git  #&lt;username&gt;为自己的用户名
        branch: main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 安装 hexo-deployer-git 插件 将部署过程自动化
npm install hexo-deployer-git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-创建博客内容" tabindex="-1"><a class="header-anchor" href="#_5-创建博客内容" aria-hidden="true">#</a> 5.创建博客内容</h2><p>在终端中，运行以下命令来创建新的博客文章：</p><div class="language-apache line-numbers-mode" data-ext="apache"><pre class="language-apache"><code>hexo new &quot;My First Post&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这将在 Hexo 项目的 source/_posts 目录下创建一个新的 Markdown 文件，用于编写你的第一篇博客文章。</p><h2 id="_6-部署" tabindex="-1"><a class="header-anchor" href="#_6-部署" aria-hidden="true">#</a> 6.部署</h2><div class="language-apache line-numbers-mode" data-ext="apache"><pre class="language-apache"><code># 预览
hexo s  
# 清除静态文件
hexo clean
# 生成静态网站文件
hexo g 
# 将生成的静态网站文件部署到github
hexo d 
# 执行顺序
hexo clean -&gt; hexo g -&gt; hexo 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),x={class:"custom-container danger"},f=e("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[e("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[e("circle",{cx:"12",cy:"12",r:"9"}),e("path",{d:"M10 10l4 4m0-4l-4 4"})])],-1),w=e("p",{class:"custom-container-title"},"Bug",-1),k=e("img",{src:d,alt:"1698156174197"},null,-1),y={href:"https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=Spawn%20failed&fenlei=256&rsv_pq=0xd9cd80aa000e1a81&rsv_t=e127EJA5B+AEec/pKMyxnNJO7qtgtToFXaT0oWzOFZDoWquYMaLZDn99rQC/&rqlang=en&rsv_enter=1&rsv_dl=tb&rsv_sug3=31&rsv_sug1=25&rsv_sug7=101&rsv_sug2=0&rsv_btype=i&inputT=13983&rsv_sug4=14793",title:"https://vuepress-theme-reco.recoluan.com/",target:"_blank",rel:"noopener noreferrer"},H=e("h2",{id:"_7-查看",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_7-查看","aria-hidden":"true"},"#"),n(" 7.查看")],-1),S=e("p",null,[n("浏览器打开 "),e("code",null,"<username>.github.io"),n("即可查看")],-1),B=e("h2",{id:"_8-选择hexo主题",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_8-选择hexo主题","aria-hidden":"true"},"#"),n(" 8.选择Hexo主题")],-1),q={class:"custom-container details"},C=e("summary",{class:"custom-container-title"},"selectHexoTheme",-1),M={href:"https://preccrepad.github.io/",target:"_blank",rel:"noopener noreferrer"},T={href:"https://tomotoes.com/blog/",target:"_blank",rel:"noopener noreferrer"},N={href:"https://esappear.github.io/clover/",target:"_blank",rel:"noopener noreferrer"},E={href:"https://shoka.lostyu.me/",target:"_blank",rel:"noopener noreferrer"},G={href:"https://joeybling.github.io/",target:"_blank",rel:"noopener noreferrer"},V=e("p",null,[e("img",{src:c,alt:"1698156965051"})],-1),j=e("hr",null,null,-1);function F(J,L){const s=t("ExternalLinkIcon");return l(),r("div",null,[u,_,g,p,v,m,b,e("div",x,[f,w,e("p",null,[n("命令hexo d 后出现 Spawn failed问题"),k,n("出现此情况，大多原因是网络问题，可多尝试几次，实在解决不了可点击此链接: "),e("a",y,[n("Spawn failed"),i(s)])])]),H,S,B,e("details",q,[C,e("p",null,[e("a",M,[n("连背景都是特效的博客_preccrepad"),i(s)])]),e("p",null,[e("a",T,[n("番茄博客_tomotoes"),i(s)])]),e("p",null,[e("a",N,[n("干净清爽系列主题_esappear"),i(s)])]),e("p",null,[e("a",E,[n("二次元系列主题_shoka"),i(s)])]),e("p",null,[e("a",G,[n("yilia升级版简洁型博客_joeybling"),i(s)])])]),V,j])}const Z=a(h,[["render",F],["__file","setupHexoBlog.html.vue"]]);export{Z as default};
