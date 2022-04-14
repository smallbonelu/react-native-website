"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[15548],{35318:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return v}});var n=t(27378);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),l=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(u.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},s=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),s=l(t),v=o,b=s["".concat(u,".").concat(v)]||s[v]||f[v]||i;return t?n.createElement(b,c(c({ref:r},p),{},{components:t})):n.createElement(b,c({ref:r},p))}));function v(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,c=new Array(i);c[0]=s;var a={};for(var u in r)hasOwnProperty.call(r,u)&&(a[u]=r[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var l=2;l<i;l++)c[l]=t[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},79467:function(e,r,t){t.r(r),t.d(r,{assets:function(){return y},contentTitle:function(){return v},default:function(){return O},frontMatter:function(){return s},metadata:function(){return b},toc:function(){return d}});var n=t(35318),o=Object.defineProperty,i=Object.defineProperties,c=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,p=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,f=(e,r)=>{for(var t in r||(r={}))u.call(r,t)&&p(e,t,r[t]);if(a)for(var t of a(r))l.call(r,t)&&p(e,t,r[t]);return e};const s={id:"architecture-overview",title:"\u67b6\u6784\u6982\u89c8"},v=void 0,b={unversionedId:"architecture-overview",id:"version-0.67/architecture-overview",title:"\u67b6\u6784\u6982\u89c8",description:"\u672c\u6587\u6863\u8fd8\u5728\u6301\u7eed\u66f4\u65b0\u4e2d\uff0c\u4f1a\u4ece\u6982\u5ff5\u4e0a\u4ecb\u7ecd React Native \u65b0\u67b6\u6784\u662f\u5982\u4f55\u5de5\u4f5c\u7684\u3002\u76ee\u6807\u8bfb\u8005\u5305\u62ec\u751f\u6001\u5e93\u7684\u5f00\u53d1\u8005\u3001\u6838\u5fc3\u8d21\u732e\u8005\u548c\u7279\u522b\u6709\u597d\u5947\u5fc3\u7684\u4eba\u3002",source:"@site/versioned_docs/version-0.67/architecture-overview.md",sourceDirName:".",slug:"/architecture-overview",permalink:"/docs/architecture-overview",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../cndocs/architecture-overview.md",tags:[],version:"0.67",frontMatter:{id:"architecture-overview",title:"\u67b6\u6784\u6982\u89c8"},sidebar:"\u67b6\u6784",next:{title:"Fabric \u6e32\u67d3\u5668",permalink:"/docs/fabric-renderer"}},y={},d=[],m={toc:d};function O(e){var r,t=e,{components:o}=t,p=((e,r)=>{var t={};for(var n in e)u.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&a)for(var n of a(e))r.indexOf(n)<0&&l.call(e,n)&&(t[n]=e[n]);return t})(t,["components"]);return(0,n.kt)("wrapper",(r=f(f({},m),p),i(r,c({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"\u672c\u6587\u6863\u8fd8\u5728\u6301\u7eed\u66f4\u65b0\u4e2d\uff0c\u4f1a\u4ece\u6982\u5ff5\u4e0a\u4ecb\u7ecd React Native \u65b0\u67b6\u6784\u662f\u5982\u4f55\u5de5\u4f5c\u7684\u3002\u76ee\u6807\u8bfb\u8005\u5305\u62ec\u751f\u6001\u5e93\u7684\u5f00\u53d1\u8005\u3001\u6838\u5fc3\u8d21\u732e\u8005\u548c\u7279\u522b\u6709\u597d\u5947\u5fc3\u7684\u4eba\u3002"))}O.isMDXComponent=!0}}]);