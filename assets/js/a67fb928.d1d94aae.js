"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[64073],{35318:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var i=t(27378);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=i.createContext({}),c=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return i.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},p=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),m=o,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||r;return t?i.createElement(h,a(a({ref:n},u),{},{components:t})):i.createElement(h,a({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,a=new Array(r);a[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<r;c++)a[c]=t[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}p.displayName="MDXCreateElement"},98781:function(e,n,t){t.r(n),t.d(n,{assets:function(){return f},contentTitle:function(){return m},default:function(){return v},frontMatter:function(){return p},metadata:function(){return h},toc:function(){return w}});var i=t(35318),o=Object.defineProperty,r=Object.defineProperties,a=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,n,t)=>n in e?o(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,d=(e,n)=>{for(var t in n||(n={}))l.call(n,t)&&u(e,t,n[t]);if(s)for(var t of s(n))c.call(n,t)&&u(e,t,n[t]);return e};const p={id:"usewindowdimensions",title:"useWindowDimensions"},m=void 0,h={unversionedId:"usewindowdimensions",id:"usewindowdimensions",title:"useWindowDimensions",description:"useWindowDimensions\u4f1a\u5728\u5c4f\u5e55\u5c3a\u5bf8\u53d8\u5316\u65f6\u81ea\u52a8\u66f4\u65b0\u83b7\u53d6\u5230\u7684\u8bbe\u5907width\u548cheight\u503c\u3002\u4f7f\u7528\u65b9\u6cd5\u5982\u4e0b\uff1a",source:"@site/../cndocs/usewindowdimensions.md",sourceDirName:".",slug:"/usewindowdimensions",permalink:"/docs/next/usewindowdimensions",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../cndocs/usewindowdimensions.md",tags:[],version:"current",frontMatter:{id:"usewindowdimensions",title:"useWindowDimensions"},sidebar:"api",previous:{title:"useColorScheme",permalink:"/docs/next/usecolorscheme"},next:{title:"BackHandler",permalink:"/docs/next/backhandler"}},f={},w=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",level:2},{value:"<code>fontScale</code>",id:"fontscale",level:3},{value:"<code>height</code>",id:"height",level:3},{value:"<code>scale</code>",id:"scale",level:3},{value:"<code>width</code>",id:"width",level:3}],k={toc:w};function v(e){var n,t=e,{components:o}=t,u=((e,n)=>{var t={};for(var i in e)l.call(e,i)&&n.indexOf(i)<0&&(t[i]=e[i]);if(null!=e&&s)for(var i of s(e))n.indexOf(i)<0&&c.call(e,i)&&(t[i]=e[i]);return t})(t,["components"]);return(0,i.kt)("wrapper",(n=d(d({},k),u),r(n,a({components:o,mdxType:"MDXLayout"}))),(0,i.kt)("pre",null,(0,i.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"import { useWindowDimensions } from 'react-native';\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"useWindowDimensions"),"\u4f1a\u5728\u5c4f\u5e55\u5c3a\u5bf8\u53d8\u5316\u65f6\u81ea\u52a8\u66f4\u65b0\u83b7\u53d6\u5230\u7684\u8bbe\u5907",(0,i.kt)("inlineCode",{parentName:"p"},"width"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"height"),"\u503c\u3002\u4f7f\u7528\u65b9\u6cd5\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"const windowWidth = useWindowDimensions().width;\nconst windowHeight = useWindowDimensions().height;\n")),(0,i.kt)("h2",d({},{id:"\u793a\u4f8b"}),"\u793a\u4f8b"),(0,i.kt)("div",d({},{className:"snack-player","data-snack-name":"useWindowDimensions","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%20View%2C%20StyleSheet%2C%20Text%2C%20useWindowDimensions%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20window%20%3D%20useWindowDimensions()%3B%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CText%3E%7B%60Window%20Dimensions%3A%20height%20-%20%24%7Bwindow.height%7D%2C%20width%20-%20%24%7Bwindow.width%7D%60%7D%3C%2FText%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%2C%0A%20%20%20%20alignItems%3A%20%22center%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("a",d({parentName:"li"},{href:"https://github.com/react-native-community/react-native-hooks#usedimensions"}),"useDimensions")," hook from the community ",(0,i.kt)("a",d({parentName:"li"},{href:"https://github.com/react-native-community/react-native-hooks"}),"React native hooks")," library aims to make handling screen/window size changes easier to work with."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",d({parentName:"li"},{href:"https://github.com/DaniAkash/react-native-responsive-dimensions"}),"React Native Responsive Dimensions")," also comes with responsive hooks.")),(0,i.kt)("h2",d({},{id:"\u5c5e\u6027"}),"\u5c5e\u6027"),(0,i.kt)("h3",d({},{id:"fontscale"}),(0,i.kt)("inlineCode",{parentName:"h3"},"fontScale")),(0,i.kt)("p",null,"The scale of the font currently used. Some operating systems allow users to scale their font sizes larger or smaller for reading comfort. This property will let you know what is in effect."),(0,i.kt)("pre",null,(0,i.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"useWindowDimensions().fontScale;\n")),(0,i.kt)("h3",d({},{id:"height"}),(0,i.kt)("inlineCode",{parentName:"h3"},"height")),(0,i.kt)("p",null,"The height in pixels of the window or screen your app occupies."),(0,i.kt)("pre",null,(0,i.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"useWindowDimensions().height;\n")),(0,i.kt)("h3",d({},{id:"scale"}),(0,i.kt)("inlineCode",{parentName:"h3"},"scale")),(0,i.kt)("p",null,"The pixel ratio of the device your app is running on."),(0,i.kt)("pre",null,(0,i.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"useWindowDimensions().scale;\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"A value of ",(0,i.kt)("inlineCode",{parentName:"p"},"1")," indicates PPI/DPI of 96 (76 on some platforms). ",(0,i.kt)("inlineCode",{parentName:"p"},"2")," indicates a Retina or high DPI display.")),(0,i.kt)("h3",d({},{id:"width"}),(0,i.kt)("inlineCode",{parentName:"h3"},"width")),(0,i.kt)("p",null,"The width in pixels of the window or screen your app occupies."),(0,i.kt)("pre",null,(0,i.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"useWindowDimensions().width;\n")))}v.isMDXComponent=!0}}]);