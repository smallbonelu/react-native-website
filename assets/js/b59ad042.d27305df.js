"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[61594],{35318:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},10330:function(e,t,n){n.r(t),n.d(t,{assets:function(){return v},contentTitle:function(){return m},default:function(){return b},frontMatter:function(){return d},metadata:function(){return f},toc:function(){return g}});var r=n(35318),o=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&u(e,n,t[n]);if(l)for(var n of l(t))c.call(t,n)&&u(e,n,t[n]);return e};const d={id:"devsettings",title:"DevSettings"},m=void 0,f={unversionedId:"devsettings",id:"version-0.63/devsettings",title:"DevSettings",description:"The DevSettings module exposes methods for customizing settings for developers in development.",source:"@site/versioned_docs/version-0.63/devsettings.md",sourceDirName:".",slug:"/devsettings",permalink:"/docs/0.63/devsettings",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/devsettings.md",tags:[],version:"0.63",frontMatter:{id:"devsettings",title:"DevSettings"},sidebar:"version-0.63/api",previous:{title:"AppState",permalink:"/docs/0.63/appstate"},next:{title:"Dimensions",permalink:"/docs/0.63/dimensions"}},v={},g=[{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",level:2},{value:"<code>addMenuItem()</code>",id:"addmenuitem",level:3},{value:"<code>reload()</code>",id:"reload",level:3},{value:"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1asunnylqm(100.00%)",id:"\u672c\u6587\u6863\u8d21\u732e\u8005sunnylqm10000",level:5}],y={toc:g};function b(e){var t,n=e,{components:o}=n,u=((e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=p(p({},y),u),i(t,a({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"DevSettings")," module exposes methods for customizing settings for developers in development."),(0,r.kt)("hr",null),(0,r.kt)("h1",p({},{id:"\u6587\u6863"}),"\u6587\u6863"),(0,r.kt)("h2",p({},{id:"\u65b9\u6cd5"}),"\u65b9\u6cd5"),(0,r.kt)("h3",p({},{id:"addmenuitem"}),(0,r.kt)("inlineCode",{parentName:"h3"},"addMenuItem()")),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-jsx"}),"static addMenuItem(title: string, handler: function)\n")),(0,r.kt)("p",null,"\u5728\u5f00\u53d1\u8005\u83dc\u5355\u4e2d\u6dfb\u52a0\u4e00\u4e2a\u81ea\u5b9a\u4e49\u7684\u83dc\u5355\u9879\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-jsx"}),'DevSettings.addMenuItem("Show Secret Dev Screen", () => {\n  Alert.alert("Showing secret dev screen!");\n});\n')),(0,r.kt)("h3",p({},{id:"reload"}),(0,r.kt)("inlineCode",{parentName:"h3"},"reload()")),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-jsx"}),"static reload()\n")),(0,r.kt)("p",null,"Reload the application. Can be invoked directly or on user interaction:"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-jsx"}),'<Button title="Reload" onPress={() => DevSettings.reload()} />\n')),(0,r.kt)("hr",null),(0,r.kt)("h5",p({},{id:"\u672c\u6587\u6863\u8d21\u732e\u8005sunnylqm10000"}),"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1a",(0,r.kt)("a",p({parentName:"h5"},{href:"https://github.com/search?q=sunnylqm&type=Users"}),"sunnylqm"),"(100.00%)"))}b.isMDXComponent=!0}}]);