"use strict";(self.webpackChunkfolia_tutorial=self.webpackChunkfolia_tutorial||[]).push([[402],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=u(n),d=a,k=c["".concat(p,".").concat(d)]||c[d]||m[d]||i;return n?r.createElement(k,o(o({ref:t},s),{},{components:n})):r.createElement(k,o({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3025:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:5},o="[\u5176\u56db] \u540c\u65f6\u652f\u6301Spigot\u4e0eFolia",l={unversionedId:"\u5176\u56db",id:"\u5176\u56db",title:"[\u5176\u56db] \u540c\u65f6\u652f\u6301Spigot\u4e0eFolia",description:"\u8fd9\u91cc\u8bb0\u5f55\u4e86\u4e00\u4e9b\u6742\u4e71\u7684\u4e8b\u9879\uff0c\u4e5f\u8bb8\u5bf9\u4f60\u7684\u5f00\u53d1\u6709\u7528\uff01",source:"@site/docs/\u5176\u56db.md",sourceDirName:".",slug:"/\u5176\u56db",permalink:"/Folia-Tutorials/\u5176\u56db",draft:!1,editUrl:"https://github.com/xgpjun/Folia-Tutorials/blob/main/docs/\u5176\u56db.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\u5c0f\u7ed3",permalink:"/Folia-Tutorials/\u5176\u4e09/\u5c0f\u7ed3"},next:{title:"[\u5176\u4e94] \u4f60\u5e94\u8be5\u6ce8\u610f\u7684\u4e8b\u60c5",permalink:"/Folia-Tutorials/\u5176\u4e94"}},p={},u=[{value:"\u540c\u65f6\u652f\u6301Spigot\u4e0eFolia",id:"\u540c\u65f6\u652f\u6301spigot\u4e0efolia",level:2},{value:"\u652f\u6301Java8",id:"\u652f\u6301java8",level:2},{value:"bstats",id:"bstats",level:2}],s={toc:u},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5176\u56db-\u540c\u65f6\u652f\u6301spigot\u4e0efolia"},"[\u5176\u56db]"," \u540c\u65f6\u652f\u6301Spigot\u4e0eFolia"),(0,a.kt)("p",null,"\u8fd9\u91cc\u8bb0\u5f55\u4e86\u4e00\u4e9b\u6742\u4e71\u7684\u4e8b\u9879\uff0c\u4e5f\u8bb8\u5bf9\u4f60\u7684\u5f00\u53d1\u6709\u7528\uff01"),(0,a.kt)("h2",{id:"\u540c\u65f6\u652f\u6301spigot\u4e0efolia"},"\u540c\u65f6\u652f\u6301Spigot\u4e0eFolia"),(0,a.kt)("p",null,"\u7531\u4e8eFoliaAPI\u662f\u57fa\u4e8eBukkitAPI\u7684\uff0c\u7406\u8bba\u4e0a\u4f60\u4e5f\u53ef\u4ee5\u5199\u51fa\u4e00\u4e2a\u540c\u65f6\u652f\u6301Folia\u4e0eSpigot\u670d\u52a1\u7aef\u7684\u63d2\u4ef6\uff0c\u53ea\u9700\u8981\u5305\u88c5\u5bf9\u5e94\u7684\u65b9\u6cd5\u5373\u53ef\u3002"),(0,a.kt)("p",null,"\u57fa\u672c\u601d\u8def\u662f\u5224\u65ad\u670d\u52a1\u7aef\u7c7b\u578b\uff0c\u6bd4\u5982\u53cd\u5c04Folia\u7279\u6709\u7684\u7c7b:",(0,a.kt)("inlineCode",{parentName:"p"},"io.papermc.paper.threadedregions.RegionizedServerInitEvent"),"\uff0c\u7136\u540e\u5728\u5de5\u5177\u7c7b\u4e2d\u6267\u884c\u4e0d\u540c\u7684\u4ee3\u7801\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/xgpjun/FoliaLib"},(0,a.kt)("strong",{parentName:"a"},"\u8fd9\u91cc\u7684\u4ee3\u7801")),"\u662f\u6211\u7684\u4e00\u4e2a\u7b80\u5355\u5b9e\u73b0\uff0c\u6211\u5c1d\u8bd5\u5305\u88c5\u4e86FoliaAPI\u548cBukkitAPI\u4e2d\u7684\u8c03\u5ea6\u7b49API\u3002\u4ee3\u7801\u4ec5\u4f9b\u53c2\u8003\uff01\u7531\u4e8eFolia\u670d\u52a1\u7aef\u53ef\u80fd\u6709\u5f88\u591a\u4fee\u6539\uff0c\u8bf7\u5c3d\u91cf\u4e0d\u8981\u76f4\u63a5\u4f7f\u7528\uff0c\u6216\u8005\u8bf7\u81ea\u884c\u6253\u5305\u5230\u81ea\u5df1\u7684\u6e90\u4ee3\u7801\u4e2d\u3002"),(0,a.kt)("p",null,"\u5927\u90e8\u5206\u6240\u6709\u7684\u7528\u6cd5\u90fd\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"FoliaLibAPI"),"\u4e2d\uff0c \u4f60\u9700\u8981",(0,a.kt)("inlineCode",{parentName:"p"},"new FoliaLibAPI(plugin)")," \u4e2d\u95f4\u586b\u5165\u4f60\u81ea\u5df1\u7684\u63d2\u4ef6\u5b9e\u4f8b\u3002"),(0,a.kt)("p",null,"\u7136\u540e\u901a\u8fc7\u4e0d\u540c\u53c2\u6570\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"getScheduler"),"\u3002 \u4e0d\u540c\u7684\u4f20\u5165\u53c2\u6570\uff0cBukkit\u4e2d\u662f\u6ca1\u6709\u4efb\u4f55\u533a\u522b\u7684\uff0c\u53ea\u6709\u5728Folia\u4f1a\u6709\u533a\u522b\u3002"),(0,a.kt)("p",null,"\u4f20\u5165",(0,a.kt)("inlineCode",{parentName:"p"},"Location"),"\u4f1a\u4ee5",(0,a.kt)("inlineCode",{parentName:"p"},"REGION"),"\u8c03\u5ea6\uff0c\u4f20\u5165",(0,a.kt)("inlineCode",{parentName:"p"},"Entity"),"\u4f1a\u4ee5",(0,a.kt)("inlineCode",{parentName:"p"},"Entity"),"\u8c03\u5ea6\uff0c\u4f20\u5165",(0,a.kt)("inlineCode",{parentName:"p"},"isGlobal=true"),"\u4f1a\u4ee5",(0,a.kt)("inlineCode",{parentName:"p"},"Global"),"\u8c03\u5ea6\uff0c\u5982\u679c\u4e3a\u7a7a\u5219\u4f1a\u4ee5",(0,a.kt)("inlineCode",{parentName:"p"},"ASYNC"),"\u65b9\u5f0f\u8c03\u5ea6\u3002"),(0,a.kt)("p",null,"\u5f53\u7136\u4e5f\u6709",(0,a.kt)("a",{parentName:"p",href:"https://github.com/xgpjun/FoliaLib/tree/master/src/main/kotlin/cn/xgpjun/foliaSupport"},(0,a.kt)("inlineCode",{parentName:"a"},"kotlin"),"\u7248\u672c()")),(0,a.kt)("p",null,"\u4e0d\u7528\u4e2d\u592e\u4ed3\u5e93\u5f62\u5f0f\u53d1\u5e03\u662f\u5e0c\u671b\u5927\u5bb6\u90fd\u80fd\u4ed4\u7ec6\u770b\u770b\u5199\u51fa\u81ea\u5df1\u7684\u5185\u5bb9\u52a0\u6df1\u4e86\u89e3(\u6211\u4fe1\u4e86)"),(0,a.kt)("h2",{id:"\u652f\u6301java8"},"\u652f\u6301Java8"),(0,a.kt)("p",null,"\u65e2\u7136\u652f\u6301\u4e86Spigot\uff0c\u7531\u4e8e\u7f16\u8bd1Folia\u63d2\u4ef6\u9700\u8981\u4f7f\u7528Java17\uff0c\u5982\u679c\u4f60\u5728Java8\u73af\u5883\u4e2d\u52a0\u8f7d\u65f6\u629b\u51fa\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"java.lang.UnsupportedClassVersionError"),"\uff0c\u90a3\u4e48\u4f60\u9700\u8981\u6ce8\u610f\u5728pom.xml\u914d\u7f6e\u91ccmaven-compiler-plugin\u7684source\u548ctarget\u662f\u5426\u4e3a1.8\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"            <plugin>\n                <groupId>org.apache.maven.plugins</groupId>\n                <artifactId>maven-compiler-plugin</artifactId>\n                <version>3.8.1</version>\n                <configuration>\n                    <source>1.8</source>\n                    <target>1.8</target>\n                </configuration>\n            </plugin>\n")),(0,a.kt)("h2",{id:"bstats"},"bstats"),(0,a.kt)("p",null,"\u5728\u4f7f\u7528\u8fc7\u7a0b\u4e2d\u53d1\u73b0bstats\u4e5f\u4f7f\u7528\u4e86BukkitAPI\u4e2d\u7684\u8c03\u5ea6\u7a0b\u5e8f\uff0c\u56e0\u6b64\u9700\u8981\u5bf9bstats\u4e5f\u8fdb\u884c\u4e00\u4e9b\u66f4\u6539\u3002"),(0,a.kt)("p",null,"\u6240\u4ee5\u9009\u62e9\u76f4\u63a5\u590d\u5236\u4e00\u4e2ajava\u4e0b\u6765\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Bastian/bstats-metrics/blob/1.x.x/bstats-bukkit/src/main/java/org/bstats/bukkit/Metrics.java"},"bstats-metrics"),"  \u4fee\u6539191\u884c\uff0c  Bukkit.getScheduler().runTask(plugin, this::submitData);"),(0,a.kt)("p",null,"\u4f7f\u7528\u4e0a\u6587\u4e2dAsyncScheduler\u66ff\u4ee3\u4e4b\uff01"))}m.isMDXComponent=!0}}]);