"use strict";(self.webpackChunkfolia_tutorial=self.webpackChunkfolia_tutorial||[]).push([[699],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=u(n),m=a,k=s["".concat(l,".").concat(m)]||s[m]||d[m]||o;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[s]="string"==typeof e?e:a,i[1]=p;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7645:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:4},i=void 0,p={unversionedId:"API\u3001\u670d\u52a1\u7aef",id:"API\u3001\u670d\u52a1\u7aef",title:"API\u3001\u670d\u52a1\u7aef",description:"API",source:"@site/docs/API\u3001\u670d\u52a1\u7aef.md",sourceDirName:".",slug:"/API\u3001\u670d\u52a1\u7aef",permalink:"/Folia-Tutorials/API\u3001\u670d\u52a1\u7aef",draft:!1,editUrl:"https://github.com/xgpjun/Folia-Tutorials/blob/main/docs/API\u3001\u670d\u52a1\u7aef.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\u592a\u957f\u4e0d\u770b\u7248",permalink:"/Folia-Tutorials/\u592a\u957f\u4e0d\u770b\u7248"},next:{title:"\u4e3b\u8981\u5185\u5bb9",permalink:"/Folia-Tutorials/category/\u4e3b\u8981\u5185\u5bb9"}},l={},u=[{value:"API",id:"api",level:2},{value:"\u670d\u52a1\u7aef",id:"\u670d\u52a1\u7aef",level:2},{value:"\u6ce8\u610f\u4e8b\u9879\uff01",id:"\u6ce8\u610f\u4e8b\u9879",level:2}],c={toc:u},s="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("p",null,"\u4f7f\u7528Maven "),(0,a.kt)("p",null,"\u6dfb\u52a0Maven\u4ed3\u5e93\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<repository>\n    <id>papermc</id>\n    <url>https://repo.papermc.io/repository/maven-public/</url>\n</repository>\n")),(0,a.kt)("p",null,"\u5bfc\u5165\u4f9d\u8d56\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<dependency>\n    <groupId>dev.folia</groupId>\n    <artifactId>folia-api</artifactId>\n    <version>1.20.1-R0.1-SNAPSHOT</version>\n    <scope>provided</scope>\n</dependency>\n")),(0,a.kt)("h2",{id:"\u670d\u52a1\u7aef"},"\u670d\u52a1\u7aef"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u7531\u4e8e\u8be5\u670d\u52a1\u7aef\u5e76\u6ca1\u6709\u4efb\u4f55\u7684",(0,a.kt)("a",{parentName:"p",href:"https://github.com/PaperMC/Folia/releases"},"Releases"),"\uff0c\u56e0\u6b64\u4f60\u9700\u8981\u81ea\u884c\u6784\u5efa: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/PaperMC/Folia"},"PaperMC/Folia"))),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u5b9e\u5728\u60f3\u5077\u61d2..."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/PaperMC/Folia/forks"},"Forks \xb7 PaperMC/Folia (github.com)")," \u627e\u4e00\u4e0b\u770b\u770b\u6709\u6ca1\u6709\u597d\u5fc3\u4eba\u6700\u8fd1\u66f4\u65b0\u7136\u540e\u4e0a\u4f20\u4e86Releases\uff0c \u6bd4\u5982",(0,a.kt)("a",{parentName:"p",href:"https://github.com/alazeprt/Folia"},"\u5b83"),"?"),(0,a.kt)("p",null,"\u6211\u4e0d\u4fdd\u8bc1\u8fd9\u4e9bForks\u662f\u6ca1\u6709\u7ecf\u8fc7\u4fee\u6539\u7684\uff0c\u6240\u4ee5\u8bf7\u81ea\u884c\u9274\u522b\u3002 \u62c5\u5fc3\u5b89\u5168\u8bf7\u81ea\u884c\u6784\u5efa\u3002"),(0,a.kt)("h2",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879\uff01"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u8bf7\u4e0d\u8981\u901a\u8fc7\u4e0b\u8f7d\u538b\u7f29\u5305\u7684\u65b9\u5f0f\u6765\u5c1d\u8bd5\u6784\u5efa\uff0c\u4f60\u9700\u8981\u5b89\u88c5Git \u5728\u5e0c\u671b\u4fdd\u5b58\u7684\u6587\u4ef6\u5939\u4f7f\u7528GitBash\u6765\u514b\u9686\u4ed3\u5e93\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/PaperMC/Folia.git\n")),(0,a.kt)("p",null,"\u7136\u540e\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"./gradlew build")," \u3001",(0,a.kt)("inlineCode",{parentName:"p"},"gradlew.bat build"),"\u6765\u6784\u5efa \u3002"),(0,a.kt)("p",null,"\u5982\u679c\u6784\u5efa\u670d\u52a1\u7aef\u3001\u63d2\u4ef6\u5931\u8d25 \u63d0\u793a"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"bad class file (\u9519\u8bef\u7684\u7c7b\u6587\u4ef6) org.bukkit.XXX"),(0,a.kt)("p",{parentName:"blockquote"},"class file has wrong version 61.0, should be 52.0 (\u7c7b\u6587\u4ef6\u5177\u6709\u9519\u8bef\u7684\u7248\u672c 61.0, \u5e94\u4e3a 52.0)")),(0,a.kt)("p",null,"52.0 \u662f",(0,a.kt)("inlineCode",{parentName:"p"},"Jdk8")," \uff0c \u5e94\u8be5\u6539\u4f4d61 ",(0,a.kt)("inlineCode",{parentName:"p"},"Jdk17")),(0,a.kt)("p",null,"\u4e00\u822c\u6765\u8bf4\u4f60\u53ef\u4ee5\u5206\u5f00\u63d0\u4f9b",(0,a.kt)("inlineCode",{parentName:"p"},"Spigot")," \u548c",(0,a.kt)("inlineCode",{parentName:"p"},"Folia"),"\u7684\u63d2\u4ef6, \u5f53\u7136\u4f60\u4e5f\u53ef\u4ee5\u901a\u8fc7\u5224\u65ad\u670d\u52a1\u7aef\u7c7b\u578b\u540e\u8fdb\u884c\u4e0d\u540c\u7684\u903b\u8f91\u6267\u884c\uff0c\u5b9e\u73b0\u901a\u7528\u3002"),(0,a.kt)("p",null,"\u4f46\u6ce8\u610f,\u5982\u679c\u4f60\u57fa\u4e8e",(0,a.kt)("inlineCode",{parentName:"p"},"Java17"),"\u5f00\u53d1\u5e76\u4e14\u4f7f\u7528\u4e86\u8bed\u8a00\u7684\u65b0\u7279\u6027\uff0c\u90a3\u4e48\u8fd9\u4e2a\u63d2\u4ef6\u57fa\u672c\u4e0a\u5c31\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"Java8")," \u5373\u4e00\u4e9b\u4f4e\u7248\u672c\u544a\u522b\u4e86\u3002 SDK\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"Java17"),"\uff0c\u4f60\u4ecd\u9700\u8981\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"Java8"),"\u7684\u8bed\u8a00\u7279\u6027\uff0c\u9664\u975e\u4f60\u6839\u672c\u4e0d\u60f3\u517c\u5bb9\u4f4e\u7248\u672c\u3002"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u53cd\u5c04\u72ec\u6709\u7c7b\u6765\u5224\u65ad\u670d\u52a1\u7aef\u7c7b\u578b\uff0c\u4f8b\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"io.papermc.paper.threadedregions.RegionizedServerInitEvent")," \u8fd9\u4e2a\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"Folia"),"\u6709\u800c",(0,a.kt)("inlineCode",{parentName:"p"},"Paper"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"Spigot"),"\u6ca1\u6709\u7684\u7c7b\u3002"))}d.isMDXComponent=!0}}]);