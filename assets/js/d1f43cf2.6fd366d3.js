"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[84088],{35318:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,k=m["".concat(c,".").concat(d)]||m[d]||s[d]||l;return n?r.createElement(k,o(o({ref:t},u),{},{components:n})):r.createElement(k,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},79052:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return m},metadata:function(){return k},toc:function(){return b}});var r=n(35318),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&u(e,n,t[n]);if(i)for(var n of i(t))p.call(t,n)&&u(e,n,t[n]);return e};const m={id:"pickerios",title:"\ud83d\udea7 PickerIOS"},d=void 0,k={unversionedId:"pickerios",id:"version-0.63/pickerios",title:"\ud83d\udea7 PickerIOS",description:"\u5df2\u8fc7\u65f6\u3002 Use Picker instead.",source:"@site/versioned_docs/version-0.63/pickerios.md",sourceDirName:".",slug:"/pickerios",permalink:"/docs/0.63/pickerios",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../cndocs/pickerios.md",tags:[],version:"0.63",frontMatter:{id:"pickerios",title:"\ud83d\udea7 PickerIOS"}},f={},b=[{value:"Props",id:"props",level:2},{value:"<code>itemStyle</code>",id:"itemstyle",level:3},{value:"<code>onValueChange</code>",id:"onvaluechange",level:3},{value:"<code>onChange</code>",id:"onchange",level:3},{value:"<code>selectedValue</code>",id:"selectedvalue",level:3},{value:"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1asunnylqm(97.62%), sunnylqm(2.38%)",id:"\u672c\u6587\u6863\u8d21\u732e\u8005sunnylqm9762-sunnylqm238",level:5}],y={toc:b};function h(e){var t,n=e,{components:a}=n,u=((e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=s(s({},y),u),l(t,o({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"\u5df2\u8fc7\u65f6\u3002")," Use ",(0,r.kt)("a",s({parentName:"p"},{href:"/docs/0.63/picker"}),"Picker")," instead.")),(0,r.kt)("h1",s({},{id:"\u6587\u6863"}),"\u6587\u6863"),(0,r.kt)("h2",s({},{id:"props"}),"Props"),(0,r.kt)("p",null,"Inherits ",(0,r.kt)("a",s({parentName:"p"},{href:"/docs/0.63/view#props"}),"View Props"),"."),(0,r.kt)("h3",s({},{id:"itemstyle"}),(0,r.kt)("inlineCode",{parentName:"h3"},"itemStyle")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"\u5fc5\u9700"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("a",s({parentName:"td"},{href:"/docs/0.63/text-style-props"}),"text styles")),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"\u5426")))),(0,r.kt)("hr",null),(0,r.kt)("h3",s({},{id:"onvaluechange"}),(0,r.kt)("inlineCode",{parentName:"h3"},"onValueChange")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"\u5fc5\u9700"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"function"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"\u5426")))),(0,r.kt)("hr",null),(0,r.kt)("h3",s({},{id:"onchange"}),(0,r.kt)("inlineCode",{parentName:"h3"},"onChange")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"function"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"No")))),(0,r.kt)("hr",null),(0,r.kt)("h3",s({},{id:"selectedvalue"}),(0,r.kt)("inlineCode",{parentName:"h3"},"selectedValue")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"\u5fc5\u9700"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"number or string"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"\u5426")))),(0,r.kt)("hr",null),(0,r.kt)("h5",s({},{id:"\u672c\u6587\u6863\u8d21\u732e\u8005sunnylqm9762-sunnylqm238"}),"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1a",(0,r.kt)("a",s({parentName:"h5"},{href:"https://github.com/search?q=sunnylqm&type=Users"}),"sunnylqm"),"(97.62%), ",(0,r.kt)("a",s({parentName:"h5"},{href:"https://github.com/search?q=sunnylqm&type=Users"}),"sunnylqm"),"(2.38%)"))}h.isMDXComponent=!0}}]);