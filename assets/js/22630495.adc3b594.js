"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[78405],{35318:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,h=d["".concat(l,".").concat(m)]||d[m]||s[m]||i;return r?n.createElement(h,o(o({ref:t},u),{},{components:r})):n.createElement(h,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},97083:function(e,t,r){r.d(t,{ZP:function(){return m}});var n=r(35318),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&u(e,r,t[r]);if(c)for(var r of c(t))p.call(t,r)&&u(e,r,t[r]);return e};const d={toc:[]};function m(e){var t,r=e,{components:a}=r,u=((e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=s(s({},d),u),i(t,o({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("div",s({},{className:"admonition admonition-caution alert alert--warning"}),(0,n.kt)("div",s({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",s({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",s({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),(0,n.kt)("path",s({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),(0,n.kt)("div",s({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("p",{parentName:"div"},"This documentation is still ",(0,n.kt)("strong",{parentName:"p"},"experimental")," and details are subject to changes as we iterate. Feel free to share your feedback on the ",(0,n.kt)("a",s({parentName:"p"},{href:"https://github.com/reactwg/react-native-new-architecture/discussions/8"}),"discussion inside the working group")," for this page."),(0,n.kt)("p",{parentName:"div"},"Moreover, it contains several ",(0,n.kt)("strong",{parentName:"p"},"manual steps"),". Please note that this won't be representative of the final developer experience once the New Architecture is stable. We're working on tools, templates and libraries to help you get started fast on the New Architecture, without having to go through the whole setup."))))}m.isMDXComponent=!0},60640:function(e,t,r){r.r(t),r.d(t,{assets:function(){return b},contentTitle:function(){return h},default:function(){return y},frontMatter:function(){return m},metadata:function(){return f},toc:function(){return w}});var n=r(35318),a=r(97083),i=Object.defineProperty,o=Object.defineProperties,c=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&s(e,r,t[r]);if(l)for(var r of l(t))u.call(t,r)&&s(e,r,t[r]);return e};const m={id:"new-architecture-intro",title:"Adopting the New Architecture"},h=void 0,f={unversionedId:"new-architecture-intro",id:"version-0.69/new-architecture-intro",title:"Adopting the New Architecture",description:"This migration guide is designed for React Native library authors and application developers. It outlines the steps you need to follow to roll out the new Architecture, composed by the new NativeModule system (TurboModule) and the new Renderer (Fabric) to your Android and iOS libraries and apps.",source:"@site/versioned_docs/version-0.69/new-architecture-intro.md",sourceDirName:".",slug:"/new-architecture-intro",permalink:"/docs/new-architecture-intro",draft:!1,editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../cndocs/new-architecture-intro.md",tags:[],version:"0.69",frontMatter:{id:"new-architecture-intro",title:"Adopting the New Architecture"},sidebar:"docs",previous:{title:"\u76f4\u63a5\u64cd\u4f5c",permalink:"/docs/direct-manipulation"},next:{title:"Prerequisites for Libraries",permalink:"/docs/new-architecture-library-intro"}},b={},w=[{value:"Table of Contents",id:"table-of-contents",level:2}],v={toc:w};function y(e){var t,r=e,{components:i}=r,s=((e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=d(d({},v),s),o(t,c({components:i,mdxType:"MDXLayout"}))),(0,n.kt)(a.ZP,{mdxType:"NewArchitectureWarning"}),(0,n.kt)("h1",d({},{id:"getting-started-with-the-new-architecture"}),"Getting Started with the New Architecture"),(0,n.kt)("p",null,"This migration guide is designed for React Native ",(0,n.kt)("strong",{parentName:"p"},"library authors")," and ",(0,n.kt)("strong",{parentName:"p"},"application developers"),". It outlines the steps you need to follow to roll out the new Architecture, composed by the ",(0,n.kt)("strong",{parentName:"p"},"new NativeModule system (TurboModule) and the new Renderer (Fabric)")," to your ",(0,n.kt)("strong",{parentName:"p"},"Android")," and ",(0,n.kt)("strong",{parentName:"p"},"iOS")," libraries and apps."),(0,n.kt)("h2",d({},{id:"table-of-contents"}),"Table of Contents"),(0,n.kt)("p",null,"The guide is divided into three sections:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Supporting the New Architecture in your Library"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"new-architecture-library-intro"}),"Prerequisites for Supporting the New Architecture in JavaScript")),(0,n.kt)("li",{parentName:"ul"},"Enabling the New Architecture in your Library",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"new-architecture-library-android"}),"Android")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"new-architecture-library-ios"}),"iOS")))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Supporting the New Architecture in your App"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"new-architecture-app-intro"}),"Prerequisites for Supporting the New Architecture in your App")),(0,n.kt)("li",{parentName:"ul"},"Enabling the New NativeModule System (TurboModule) in your App",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"new-architecture-app-modules-android"}),"Android")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"new-architecture-app-modules-ios"}),"iOS")))),(0,n.kt)("li",{parentName:"ul"},"Enabling the New Renderer (Fabric) in your App",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"new-architecture-app-renderer-android"}),"Android")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"new-architecture-app-renderer-ios"}),"iOS")))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"new-architecture-appendix"}),(0,n.kt)("strong",{parentName:"a"},"Appendix")))))}y.isMDXComponent=!0}}]);