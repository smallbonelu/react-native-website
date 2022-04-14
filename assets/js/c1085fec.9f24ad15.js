"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[44189],{35318:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var r=a(27378);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),s=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(a),m=n,h=d["".concat(c,".").concat(m)]||d[m]||p[m]||l;return a?r.createElement(h,o(o({ref:t},u),{},{components:a})):r.createElement(h,o({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},11674:function(e,t,a){var r=a(63445);const n=!!r.default.canUseDOM&&navigator.platform.startsWith("Mac"),l=!!r.default.canUseDOM&&navigator.platform.startsWith("Win"),o=n?"ios":"android",i=n?"macos":l?"windows":"linux";t.Z={defaultGuide:"native",defaultOs:i,defaultPackageManager:"npm",defaultPlatform:o,defaultSyntax:"functional",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}},37785:function(e,t,a){a.d(t,{Z:function(){return s}});var r=a(27378),n=Object.defineProperty,l=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,c=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function s({children:e,hidden:t,className:a}){return r.createElement("div",((e,t)=>{for(var a in t||(t={}))o.call(t,a)&&c(e,a,t[a]);if(l)for(var a of l(t))i.call(t,a)&&c(e,a,t[a]);return e})({role:"tabpanel"},{hidden:t,className:a}),e)}},93139:function(e,t,a){a.d(t,{Z:function(){return v}});var r=a(27378),n=a(14185),l=a(15324),o=a(38944),i="tabItem_WhCL",c=Object.defineProperty,s=Object.defineProperties,u=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,h=(e,t,a)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,f=(e,t)=>{for(var a in t||(t={}))d.call(t,a)&&h(e,a,t[a]);if(p)for(var a of p(t))m.call(t,a)&&h(e,a,t[a]);return e};function b(e){var t,a,n;const{lazy:c,block:p,defaultValue:d,values:m,groupId:h,className:b}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=null!=m?m:v.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),k=(0,l.lx)(g,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===d?d:null!=(n=null!=d?d:null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)?n:null==(a=v[0])?void 0:a.props.value;if(null!==y&&!g.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:w}=(0,l.UB)(),[O,C]=(0,r.useState)(y),j=[],{blockElementScrollPositionUntilNextRender:T}=(0,l.o5)();if(null!=h){const e=N[h];null!=e&&e!==O&&g.some((t=>t.value===e))&&C(e)}const x=e=>{const t=e.currentTarget,a=j.indexOf(t),r=g[a].value;r!==O&&(T(t),C(r),null!=h&&w(h,r))},S=e=>{let t=null;switch(e.key){case"ArrowRight":{const a=j.indexOf(e.currentTarget)+1;t=j[a]||j[0];break}case"ArrowLeft":{const a=j.indexOf(e.currentTarget)-1;t=j[a]||j[j.length-1];break}}null==t||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},b)},g.map((({value:e,label:t,attributes:a})=>{return r.createElement("li",(n=f({role:"tab",tabIndex:O===e?0:-1,"aria-selected":O===e,key:e,ref:e=>j.push(e),onKeyDown:S,onFocus:x,onClick:x},a),l={className:(0,o.Z)("tabs__item",i,null==a?void 0:a.className,{"tabs__item--active":O===e})},s(n,u(l))),null!=t?t:e);var n,l}))),c?(0,r.cloneElement)(v.filter((e=>e.props.value===O))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function v(e){const t=(0,n.Z)();return r.createElement(b,f({key:String(t)},e))}},42887:function(e,t,a){a.r(t),a.d(t,{assets:function(){return g},contentTitle:function(){return b},default:function(){return N},frontMatter:function(){return f},metadata:function(){return v},toc:function(){return k}});var r=a(35318),n=a(93139),l=a(37785),o=a(11674),i=Object.defineProperty,c=Object.defineProperties,s=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,m=(e,t,a)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,h=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&m(e,a,t[a]);if(u)for(var a of u(t))d.call(t,a)&&m(e,a,t[a]);return e};const f={id:"appearance",title:"Appearance"},b=void 0,v={unversionedId:"appearance",id:"version-0.64/appearance",title:"Appearance",description:"The Appearance module exposes information about the user's appearance preferences, such as their preferred color scheme (light or dark).",source:"@site/versioned_docs/version-0.64/appearance.md",sourceDirName:".",slug:"/appearance",permalink:"/docs/0.64/appearance",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../cndocs/appearance.md",tags:[],version:"0.64",frontMatter:{id:"appearance",title:"Appearance"},sidebar:"version-0.64/api",previous:{title:"Animated.ValueXY",permalink:"/docs/0.64/animatedvaluexy"},next:{title:"AppRegistry",permalink:"/docs/0.64/appregistry"}},g={},k=[{value:"\u7ed9\u5f00\u53d1\u8005\u7684\u63d0\u793a",id:"\u7ed9\u5f00\u53d1\u8005\u7684\u63d0\u793a",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",level:2},{value:"<code>getColorScheme()</code>",id:"getcolorscheme",level:3},{value:"<code>addChangeListener()</code>",id:"addchangelistener",level:3},{value:"<code>removeChangeListener()</code>",id:"removechangelistener",level:3}],y={toc:k};function N(e){var t,a=e,{components:i}=a,m=((e,t)=>{var a={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&u)for(var r of u(e))t.indexOf(r)<0&&d.call(e,r)&&(a[r]=e[r]);return a})(a,["components"]);return(0,r.kt)("wrapper",(t=h(h({},y),m),c(t,s({components:i,mdxType:"MDXLayout"}))),(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{className:"language-jsx"}),"import { Appearance } from 'react-native';\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Appearance")," module exposes information about the user's appearance preferences, such as their preferred color scheme (light or dark)."),(0,r.kt)("h4",h({},{id:"\u7ed9\u5f00\u53d1\u8005\u7684\u63d0\u793a"}),"\u7ed9\u5f00\u53d1\u8005\u7684\u63d0\u793a"),(0,r.kt)(n.Z,{groupId:"guide",defaultValue:"web",values:o.Z.getDevNotesTabs(["android","ios","web"]),mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"web",mdxType:"TabItem"},(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Appearance")," API is inspired by the ",(0,r.kt)("a",h({parentName:"p"},{href:"https://drafts.csswg.org/mediaqueries-5/"}),"Media Queries draft")," from the W3C. The color scheme preference is modeled after the ",(0,r.kt)("a",h({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme"}),(0,r.kt)("inlineCode",{parentName:"a"},"prefers-color-scheme")," CSS media feature"),"."))),(0,r.kt)(l.Z,{value:"android",mdxType:"TabItem"},(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The color scheme preference will map to the user's Light or ",(0,r.kt)("a",h({parentName:"p"},{href:"https://developer.android.com/guide/topics/ui/look-and-feel/darktheme"}),"Dark theme")," preference on Android 10 (API level 29) devices and higher."))),(0,r.kt)(l.Z,{value:"ios",mdxType:"TabItem"},(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The color scheme preference will map to the user's Light or ",(0,r.kt)("a",h({parentName:"p"},{href:"https://developer.apple.com/design/human-interface-guidelines/ios/visual-design/dark-mode/"}),"Dark Mode")," preference on iOS 13 devices and higher.")))),(0,r.kt)("h2",h({},{id:"\u793a\u4f8b"}),"\u793a\u4f8b"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Appearance")," \u6a21\u5757\u7528\u6765\u68c0\u6d4b\u7528\u6237\u662f\u5426\u5f00\u542f\u4e86\u6697\u8272\u6a21\u5f0f\uff08\u591c\u95f4\u6a21\u5f0f\uff09\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{className:"language-jsx"}),"const colorScheme = Appearance.getColorScheme();\nif (colorScheme === 'dark') {\n  // \u7528\u6237\u5f00\u542f\u4e86\u6697\u8272\u6a21\u5f0f\n}\n")),(0,r.kt)("p",null,"Although the color scheme is available immediately, this may change (e.g. scheduled color scheme change at sunrise or sunset). Any rendering logic or styles that depend on the user preferred color scheme should try to call this function on every render, rather than caching the value. For example, you may use the ",(0,r.kt)("a",h({parentName:"p"},{href:"usecolorscheme"}),(0,r.kt)("inlineCode",{parentName:"a"},"useColorScheme"))," React hook as it provides and subscribes to color scheme updates, or you may use inline styles rather than setting a value in a ",(0,r.kt)("inlineCode",{parentName:"p"},"StyleSheet"),"."),(0,r.kt)("hr",null),(0,r.kt)("h1",h({},{id:"\u6587\u6863"}),"\u6587\u6863"),(0,r.kt)("h2",h({},{id:"\u65b9\u6cd5"}),"\u65b9\u6cd5"),(0,r.kt)("h3",h({},{id:"getcolorscheme"}),(0,r.kt)("inlineCode",{parentName:"h3"},"getColorScheme()")),(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{className:"language-jsx"}),"static getColorScheme()\n")),(0,r.kt)("p",null,"Indicates the current user preferred color scheme. The value may be updated later, either through direct user action (e.g. theme selection in device settings) or on a schedule (e.g. light and dark themes that follow the day/night cycle)."),(0,r.kt)("p",null,"Supported color schemes:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",h({parentName:"tr"},{align:null}),"\u53d6\u503c"),(0,r.kt)("th",h({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},'"light"')),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"\u7528\u6237\u9009\u62e9\u4e86\u6d45\u8272\u6a21\u5f0f\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},'"dark"')),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"\u7528\u6237\u9009\u62e9\u4e86\u6df1\u8272\u6a21\u5f0f\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"null")),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"\u7528\u6237\u6ca1\u6709\u660e\u786e\u9009\u62e9\u67d0\u79cd\u6a21\u5f0f\u3002")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a")," \u5728\u4f7f\u7528 chrome \u8c03\u8bd5\u65f6\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"getColorScheme()"),"\u5c06\u59cb\u7ec8\u8fd4\u56de",(0,r.kt)("inlineCode",{parentName:"p"},"light"),"\u3002")),(0,r.kt)("p",null,"\u66f4\u591a\u8bf4\u660e\u8bf7\u53c2\u8003",(0,r.kt)("a",h({parentName:"p"},{href:"usecolorscheme"}),(0,r.kt)("inlineCode",{parentName:"a"},"useColorScheme")),"\u3002"),(0,r.kt)("hr",null),(0,r.kt)("h3",h({},{id:"addchangelistener"}),(0,r.kt)("inlineCode",{parentName:"h3"},"addChangeListener()")),(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{className:"language-jsx"}),"static addChangeListener(listener)\n")),(0,r.kt)("p",null,"Add an event handler that is fired when appearance preferences change."),(0,r.kt)("hr",null),(0,r.kt)("h3",h({},{id:"removechangelistener"}),(0,r.kt)("inlineCode",{parentName:"h3"},"removeChangeListener()")),(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{className:"language-jsx"}),"static removeChangeListener(listener)\n")),(0,r.kt)("p",null,"\u79fb\u9664\u4e00\u4e2a\u4e8b\u4ef6\u76d1\u542c\u51fd\u6570\u3002"))}N.isMDXComponent=!0}}]);