"use strict";(self.webpackChunkfolia_tutorial=self.webpackChunkfolia_tutorial||[]).push([[769],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),s=u(n),m=l,f=s["".concat(p,".").concat(m)]||s[m]||d[m]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,o=new Array(i);o[0]=m;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a[s]="string"==typeof e?e:l,o[1]=a;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7501:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var r=n(7462),l=(n(7294),n(3905));const i={sidebar_position:6},o=void 0,a={unversionedId:"\u5176\u4e09/\u5c0f\u7ed3",id:"\u5176\u4e09/\u5c0f\u7ed3",title:"\u5c0f\u7ed3",description:"\u522b\u5fd8\u4e86\u53d6\u6d88\u6240\u6709\u8c03\u5ea6\u7a0b\u5e8f\uff01",source:"@site/docs/\u5176\u4e09/\u5c0f\u7ed3.md",sourceDirName:"\u5176\u4e09",slug:"/\u5176\u4e09/\u5c0f\u7ed3",permalink:"/Folia-Tutorials/en/\u5176\u4e09/\u5c0f\u7ed3",draft:!1,editUrl:"https://github.com/xgpjun/Folia-Tutorials/blob/main/docs/\u5176\u4e09/\u5c0f\u7ed3.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"\u53d6\u6d88\u4f20\u9001",permalink:"/Folia-Tutorials/en/\u5176\u4e09/\u4f8b\u56db"},next:{title:"[\u5176\u56db] \u540c\u65f6\u652f\u6301Spigot\u4e0eFolia",permalink:"/Folia-Tutorials/en/\u5176\u56db"}},p={},u=[{value:"\u522b\u5fd8\u4e86\u53d6\u6d88\u6240\u6709\u8c03\u5ea6\u7a0b\u5e8f\uff01",id:"\u522b\u5fd8\u4e86\u53d6\u6d88\u6240\u6709\u8c03\u5ea6\u7a0b\u5e8f",level:2},{value:"\u8ba1\u5206\u677f\u3001\u52a0\u8f7d\u4e16\u754c",id:"\u8ba1\u5206\u677f\u52a0\u8f7d\u4e16\u754c",level:2},{value:"\u5c0f\u7ed3",id:"\u5c0f\u7ed3",level:2}],c={toc:u},s="wrapper";function d(e){let{components:t,...n}=e;return(0,l.kt)(s,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u522b\u5fd8\u4e86\u53d6\u6d88\u6240\u6709\u8c03\u5ea6\u7a0b\u5e8f"},"\u522b\u5fd8\u4e86\u53d6\u6d88\u6240\u6709\u8c03\u5ea6\u7a0b\u5e8f\uff01"),(0,l.kt)("p",null,"\u5728\u670d\u52a1\u5668\u5173\u95ed\u65f6\uff0c\u4f60\u4f1a\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"Bukkit.getScheduler().cancelTasks(plugin);"),"\u6765\u53d6\u6d88\u6240\u6709\u4efb\u52a1\u5bf9\u5427\uff01"),(0,l.kt)("p",null,"\u800c\u5728Folia\u4e2d\uff0c\u4f60\u9700\u8981\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"Bukkit.getAsyncScheduler().cancelTasks(plugin);"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"Bukkit.getGlobalRegionScheduler().cancelTasks(plugin);"),"\u6765\u4ee3\u66ff\u5b83\u3002\u4ec0\u4e48\uff0c\u4e3a\u4ec0\u4e48\u4e0d\u7ba1\u5b9e\u4f53\u548c\u533a\u57df\u7684\u8c03\u5ea6\u5668\uff1f \u670d\u52a1\u5668\u5173\u95ed\u4e86\u5b9e\u4f53\u7684\u5220\u9664\u548c\u533a\u5757\u7684\u5378\u8f7d\u8fc7\u7a0b\u80af\u5b9a\u81ea\u52a8\u53d6\u6d88\u4e86\u561b\u3002"),(0,l.kt)("h2",{id:"\u8ba1\u5206\u677f\u52a0\u8f7d\u4e16\u754c"},"\u8ba1\u5206\u677f\u3001\u52a0\u8f7d\u4e16\u754c"),(0,l.kt)("p",null,"\u6211\u4e5f\u5f88\u60f3\u7ed9\u4f8b\u5b50\u4e2d\u7684\u63d2\u4ef6\u6dfb\u52a0\u8fd9\u4e9b\u529f\u80fd\uff0c\u4f8b\u5982\u8ba1\u5206\u677f\u8bb0\u5f55\u73a9\u5bb6\u4f20\u9001\u6b21\u6570\u3001\u968f\u673a\u4f20\u9001\u6709\u6982\u7387\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u4e16\u754c(\u5e73\u884c\u4e16\u754c)\u3002"),(0,l.kt)("p",null,"\u53ef\u662f\u5f88\u9057\u61be\uff0cFolia\u7684\u4e0d\u8db3\u70b9\u5c55\u73b0\u51fa\u6765\u4e86\u3002 \u8ba1\u5206\u677f\u3001\u4e16\u754c\u7684\u52a0\u8f7d\u3001\u5378\u8f7d\u5728\u8fd9\u4e2a\u670d\u52a1\u7aef\u4e2d\u57fa\u672c\u65e0\u6cd5\u5b9e\u73b0\u3002"),(0,l.kt)("p",null,"\u8ba1\u5206\u677f\u5728\u4f20\u7edf\u7684Spigot\u670d\u52a1\u7aef\u4e2d\u662f\u4e00\u79cd\u5168\u5c40\u72b6\u6001\uff0cFolia\u4e2d\u6682\u65f6\u65e0\u6cd5\u4ee5\u7c7b\u4f3c\u7684\u65b9\u6cd5\u590d\u73b0\u8fd9\u4e2a\u529f\u80fd\u3002"),(0,l.kt)("p",null,"\u8c08\u8bba\u5230\u4e16\u754c\u7684\u52a0\u8f7d\u4e4b\u524d\uff0c\u6211\u4eec\u5148\u770b\u770bFolia\u4e2d\u65b0\u589e\u7684\u4e00\u4e2a\u4e8b\u4ef6\uff1aRegionizedServerInitEvent"),(0,l.kt)("p",null,'\u8fd9\u4e2a\u4e8b\u4ef6\u4f1a\u5728\u670d\u52a1\u5668\u521d\u59cb\u5316\u5b8c\u6210\uff0c\u4f46\u670d\u52a1\u5668\u5f00\u59cb"\u5e76\u884c\u5730"\u533a\u5757\u66f4\u65b0\u524d\u89e6\u53d1(callEvent)\u3002'),(0,l.kt)("p",null,"\u4f8b\u5982\u8fd9\u6837\u7684\u4f8b\u5b50\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'    @EventHandler\n    public void loadWorld(RegionizedServerInitEvent e){\n        System.out.println("\u670d\u52a1\u5668\u521d\u59cb\u5316\u5b8c\u6210");\n    }\n')),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://s2.loli.net/2023/08/19/C7ko4bjlWBTv1QV.png",alt:null})),(0,l.kt)("p",null,"\u5728Folia\u4e2d\u4e16\u754c\u7684\u52a0\u8f7d\u4e0d\u540c\u4e8e\u4f20\u7edfSpigot\u670d\u52a1\u7aef\uff0c\u6ce8\u610f\u5230",(0,l.kt)("inlineCode",{parentName:"p"},"For help, tpye\u201chelp\u201d")," \u4e86\u5417\uff1f \u5728\u4e00\u4e9b\u5f00\u670d\u6559\u7a0b\u91cc\u628a\u5b83\u5f53\u4f5c\u670d\u52a1\u5668\u5f00\u542f\u5b8c\u6bd5\u7684\u6807\u8bc6\uff0c\u800c\u5728Folia\u4e2d\u4f1a\u628a\u4e16\u754c\u7684\u52a0\u8f7d\u653e\u5728\u8fd9\u4e2a\u4e4b\u540e\u3002\u7531\u6b64\u53ef\u89c1\uff0c\u5728Folia\u4e2d\u4e16\u754c\u52a0\u8f7d\u673a\u5236\u662f\u6709\u8f83\u5927\u5dee\u5f02\u7684\uff0c\u5728\u6ca1\u6709\u66f4\u65b0\u51fa\u65b0\u7684API\u4e4b\u524d\uff0c\u591a\u4e16\u754c\u5728Folia\u4e2d\u4f3c\u4e4e\u662f\u9065\u4e0d\u53ef\u53ca\u7684\u68a6\u3002"),(0,l.kt)("h2",{id:"\u5c0f\u7ed3"},"\u5c0f\u7ed3"),(0,l.kt)("p",null,"\u597d\u4e86\uff0c\u7ecf\u8fc7\u4e00\u70b9\u70b9\u52aa\u529b\u6211\u4eec\u5199\u51fa\u4e86\u4e00\u4e2a\u652f\u6301Folia\u7aef\u968f\u673a\u4f20\u9001\u7684\u63d2\u4ef6\u96cf\u5f62\uff0c\u5bf9",(0,l.kt)("inlineCode",{parentName:"p"},"RegionScheduler")," ",(0,l.kt)("inlineCode",{parentName:"p"},"EntityScheduler")," ",(0,l.kt)("inlineCode",{parentName:"p"},"GlobalRegionScheduler")," ",(0,l.kt)("inlineCode",{parentName:"p"},"AsyncScheduler ")," \u6709\u4e86\u4e00\u5b9a\u7684\u4e86\u89e3\u3002\u5f53\u7136\u5bf9\u4e8e\u4e00\u4e2a\u968f\u673a\u4f20\u9001\u63d2\u4ef6\u6765\u8bf4\u8fd9\u4e9b\u8fd8\u8fdc\u8fdc\u4e0d\u591f\uff0c\u4f46\u5176\u5b83\u7684\u90e8\u5206\u4f60\u53ef\u4ee5\u5728Bukkit\u63d2\u4ef6\u6559\u7a0b\u4e2d\u5b66\u5230~"),(0,l.kt)("p",null,"\u5e0c\u671b\u4f60\u80fd\u901a\u8fc7\u8fd9\u4e2a\u7b80\u5355\u7684\u4f8b\u5b50\u5bf9FoliaAPI\u4e2d\u65b0\u7684\u8c03\u5ea6\u7a0b\u5e8f\u6709\u4e00\u5b9a\u7684\u4e86\u89e3\uff0c\u80fd\u591f\u6839\u636e\u8fd9\u4e9b\u5199(\u6539)\u51fa\u4e00\u4e2a\u652f\u6301Folia\u7684\u63d2\u4ef6\uff01"))}d.isMDXComponent=!0}}]);