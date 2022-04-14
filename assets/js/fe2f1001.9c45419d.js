"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[96006],{35318:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),k=r,h=d["".concat(p,".").concat(k)]||d[k]||m[k]||l;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},54094:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return k},default:function(){return y},frontMatter:function(){return d},metadata:function(){return h},toc:function(){return f}});var a=n(35318),r=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&c(e,n,t[n]);if(i)for(var n of i(t))u.call(t,n)&&c(e,n,t[n]);return e};const d={id:"layoutevent",title:"\u5e03\u5c40\u4e8b\u4ef6\u5bf9\u8c61"},k=void 0,h={unversionedId:"layoutevent",id:"version-0.64/layoutevent",title:"\u5e03\u5c40\u4e8b\u4ef6\u5bf9\u8c61",description:"LayoutEvent object is returned in the callback as a result of component layout change, for example onLayout in View component.",source:"@site/versioned_docs/version-0.64/layoutevent.md",sourceDirName:".",slug:"/layoutevent",permalink:"/docs/0.64/layoutevent",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../cndocs/layoutevent.md",tags:[],version:"0.64",frontMatter:{id:"layoutevent",title:"\u5e03\u5c40\u4e8b\u4ef6\u5bf9\u8c61"},sidebar:"version-0.64/\u7ec4\u4ef6",previous:{title:"View \u6837\u5f0f\u5c5e\u6027",permalink:"/docs/0.64/view-style-props"},next:{title:"\u70b9\u51fb\u4e8b\u4ef6\u5bf9\u8c61",permalink:"/docs/0.64/pressevent"}},s={},f=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u5c5e\u6027\u4e0e\u503c",id:"\u5c5e\u6027\u4e0e\u503c",level:2},{value:"<code>height</code>",id:"height",level:3},{value:"<code>width</code>",id:"width",level:3},{value:"<code>x</code>",id:"x",level:3},{value:"<code>y</code>",id:"y",level:3},{value:"<code>target</code>",id:"target",level:3},{value:"\u88ab\u4e0b\u5217\u7ec4\u4ef6\u5f15\u7528",id:"\u88ab\u4e0b\u5217\u7ec4\u4ef6\u5f15\u7528",level:2}],b={toc:f};function y(e){var t,n=e,{components:r}=n,c=((e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&i)for(var a of i(e))t.indexOf(a)<0&&u.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=m(m({},b),c),l(t,o({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"LayoutEvent")," object is returned in the callback as a result of component layout change, for example ",(0,a.kt)("inlineCode",{parentName:"p"},"onLayout")," in ",(0,a.kt)("a",m({parentName:"p"},{href:"view"}),"View")," component."),(0,a.kt)("h2",m({},{id:"\u793a\u4f8b"}),"\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-js"}),"{\n    layout: {\n        width: 520,\n        height: 70.5,\n        x: 0,\n        y: 42.5\n    },\n    target: 1127\n}\n")),(0,a.kt)("h2",m({},{id:"\u5c5e\u6027\u4e0e\u503c"}),"\u5c5e\u6027\u4e0e\u503c"),(0,a.kt)("h3",m({},{id:"height"}),(0,a.kt)("inlineCode",{parentName:"h3"},"height")),(0,a.kt)("p",null,"Height of the component after the layout changes."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Optional"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"number"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"No")))),(0,a.kt)("h3",m({},{id:"width"}),(0,a.kt)("inlineCode",{parentName:"h3"},"width")),(0,a.kt)("p",null,"Width of the component after the layout changes."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Optional"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"number"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"No")))),(0,a.kt)("h3",m({},{id:"x"}),(0,a.kt)("inlineCode",{parentName:"h3"},"x")),(0,a.kt)("p",null,"Component X coordinate inside the parent component."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Optional"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"number"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"No")))),(0,a.kt)("h3",m({},{id:"y"}),(0,a.kt)("inlineCode",{parentName:"h3"},"y")),(0,a.kt)("p",null,"Component Y coordinate inside the parent component."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Optional"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"number"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"No")))),(0,a.kt)("h3",m({},{id:"target"}),(0,a.kt)("inlineCode",{parentName:"h3"},"target")),(0,a.kt)("p",null,"The node id of the element receiving the PressEvent."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Optional"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"number, ",(0,a.kt)("inlineCode",{parentName:"td"},"null"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"undefined")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"No")))),(0,a.kt)("h2",m({},{id:"\u88ab\u4e0b\u5217\u7ec4\u4ef6\u5f15\u7528"}),"\u88ab\u4e0b\u5217\u7ec4\u4ef6\u5f15\u7528"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"image"}),(0,a.kt)("inlineCode",{parentName:"a"},"Image"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"pressable"}),(0,a.kt)("inlineCode",{parentName:"a"},"Pressable"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"scrollview"}),(0,a.kt)("inlineCode",{parentName:"a"},"ScrollView"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"text"}),(0,a.kt)("inlineCode",{parentName:"a"},"Text"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"textinput"}),(0,a.kt)("inlineCode",{parentName:"a"},"TextInput"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"touchablewithoutfeedback"}),(0,a.kt)("inlineCode",{parentName:"a"},"TouchableWithoutFeedback"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"view"}),(0,a.kt)("inlineCode",{parentName:"a"},"View")))))}y.isMDXComponent=!0}}]);