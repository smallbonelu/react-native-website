"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[24002],{35318:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,v=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return n?a.createElement(v,o(o({ref:t},u),{},{components:n})):a.createElement(v,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},11674:function(e,t,n){var a=n(63445);const r=!!a.default.canUseDOM&&navigator.platform.startsWith("Mac"),l=!!a.default.canUseDOM&&navigator.platform.startsWith("Win"),o=r?"ios":"android",i=r?"macos":l?"windows":"linux";t.Z={defaultGuide:"native",defaultOs:i,defaultPackageManager:"npm",defaultPlatform:o,defaultSyntax:"functional",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}},37785:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(27378),r=Object.defineProperty,l=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function c({children:e,hidden:t,className:n}){return a.createElement("div",((e,t)=>{for(var n in t||(t={}))o.call(t,n)&&s(e,n,t[n]);if(l)for(var n of l(t))i.call(t,n)&&s(e,n,t[n]);return e})({role:"tabpanel"},{hidden:t,className:n}),e)}},93139:function(e,t,n){n.d(t,{Z:function(){return y}});var a=n(27378),r=n(14185),l=n(15324),o=n(38944),i="tabItem_WhCL",s=Object.defineProperty,c=Object.defineProperties,u=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,v=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&v(e,n,t[n]);if(d)for(var n of d(t))m.call(t,n)&&v(e,n,t[n]);return e};function b(e){var t,n,r;const{lazy:s,block:d,defaultValue:p,values:m,groupId:v,className:b}=e,y=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=null!=m?m:y.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),A=(0,l.lx)(h,((e,t)=>e.value===t.value));if(A.length>0)throw new Error(`Docusaurus error: Duplicate values "${A.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===p?p:null!=(r=null!=p?p:null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)?r:null==(n=y[0])?void 0:n.props.value;if(null!==g&&!h.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:E}=(0,l.UB)(),[C,w]=(0,a.useState)(g),D=[],{blockElementScrollPositionUntilNextRender:O}=(0,l.o5)();if(null!=v){const e=k[v];null!=e&&e!==C&&h.some((t=>t.value===e))&&w(e)}const x=e=>{const t=e.currentTarget,n=D.indexOf(t),a=h[n].value;a!==C&&(O(t),w(a),null!=v&&E(v,a))},S=e=>{let t=null;switch(e.key){case"ArrowRight":{const n=D.indexOf(e.currentTarget)+1;t=D[n]||D[0];break}case"ArrowLeft":{const n=D.indexOf(e.currentTarget)-1;t=D[n]||D[D.length-1];break}}null==t||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},b)},h.map((({value:e,label:t,attributes:n})=>{return a.createElement("li",(r=f({role:"tab",tabIndex:C===e?0:-1,"aria-selected":C===e,key:e,ref:e=>D.push(e),onKeyDown:S,onFocus:x,onClick:x},n),l={className:(0,o.Z)("tabs__item",i,null==n?void 0:n.className,{"tabs__item--active":C===e})},c(r,u(l))),null!=t?t:e);var r,l}))),s?(0,a.cloneElement)(y.filter((e=>e.props.value===C))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},y.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function y(e){const t=(0,r.Z)();return a.createElement(b,f({key:String(t)},e))}},56255:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return b},default:function(){return k},frontMatter:function(){return f},metadata:function(){return y},toc:function(){return A}});var a=n(35318),r=n(93139),l=n(37785),o=n(11674),i=Object.defineProperty,s=Object.defineProperties,c=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,v=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&m(e,n,t[n]);if(u)for(var n of u(t))p.call(t,n)&&m(e,n,t[n]);return e};const f={id:"systrace",title:"Systrace"},b=void 0,y={unversionedId:"systrace",id:"version-0.63/systrace",title:"Systrace",description:"Systrace is a standard Android marker-based profiling tool (and is installed when you install the Android platform-tools package). Profiled code blocks are surrounded by start/end markers which are then visualized in a colorful chart format. Both the Android SDK and React Native framework provide standard markers that you can visualize.",source:"@site/versioned_docs/version-0.63/systrace.md",sourceDirName:".",slug:"/systrace",permalink:"/docs/0.63/systrace",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../cndocs/systrace.md",tags:[],version:"0.63",frontMatter:{id:"systrace",title:"Systrace"},sidebar:"version-0.63/api",previous:{title:"StyleSheet",permalink:"/docs/0.63/stylesheet"},next:{title:"Transforms",permalink:"/docs/0.63/transforms"}},h={},A=[{value:"Example",id:"example",level:2},{value:"Methods",id:"methods",level:2},{value:"<code>installReactHook()</code>",id:"installreacthook",level:3},{value:"<code>setEnabled()</code>",id:"setenabled",level:3},{value:"<code>isEnabled()</code>",id:"isenabled",level:3},{value:"<code>beginEvent()</code>",id:"beginevent",level:3},{value:"<code>endEvent()</code>",id:"endevent",level:3},{value:"<code>beginAsyncEvent()</code>",id:"beginasyncevent",level:3},{value:"<code>endAsyncEvent()</code>",id:"endasyncevent",level:3},{value:"<code>counterEvent()</code>",id:"counterevent",level:3},{value:"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1asunnylqm(95.85%), sunnylqm(4.15%)",id:"\u672c\u6587\u6863\u8d21\u732e\u8005sunnylqm9585-sunnylqm415",level:5}],g={toc:A};function k(e){var t,n=e,{components:i}=n,m=((e,t)=>{var n={};for(var a in e)d.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&u)for(var a of u(e))t.indexOf(a)<0&&p.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=v(v({},g),m),s(t,c({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Systrace")," is a standard Android marker-based profiling tool (and is installed when you install the Android platform-tools package). Profiled code blocks are surrounded by start/end markers which are then visualized in a colorful chart format. Both the Android SDK and React Native framework provide standard markers that you can visualize."),(0,a.kt)("h2",v({},{id:"example"}),"Example"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Systrace")," allows you to mark JavaScript (JS) events with a tag and an integer value. Capture the non-Timed JS events in EasyProfiler."),(0,a.kt)(r.Z,{groupId:"syntax",defaultValue:o.Z.defaultSyntax,values:o.Z.syntax,mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"functional",mdxType:"TabItem"},(0,a.kt)("div",v({},{className:"snack-player","data-snack-name":"Systrace Function Component Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%20Button%2C%20Text%2C%20View%2C%20StyleSheet%2C%20Systrace%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%20%7B%0A%0A%20%20const%20enableProfiling%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20Systrace.setEnabled(true)%3B%20%2F%2F%20Call%20setEnabled%20to%20turn%20on%20the%20profiling.%0A%20%20%20%20Systrace.beginEvent('event_label')%0A%20%20%20%20Systrace.counterEvent('event_label'%2C%2010)%3B%0A%20%20%7D%0A%0A%20%20const%20stopProfiling%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20Systrace.endEvent()%0A%20%20%7D%0A%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7B%5Bstyles.header%2C%20styles.paragraph%5D%7D%3EReact%20Native%20Systrace%20API%3C%2FText%3E%0A%20%20%20%20%20%20%3CButton%20title%3D%22Capture%20the%20non-Timed%20JS%20events%20in%20EasyProfiler%22%20onPress%3D%7B()%3D%3E%20enableProfiling()%7D%2F%3E%0A%20%20%20%20%20%20%3CButton%20title%3D%22Stop%20capturing%22%20onPress%3D%7B()%3D%3E%20stopProfiling()%7D%20color%3D%22%23FF0000%22%2F%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20backgroundColor%3A%20'%23fff'%2C%0A%20%20%20%20alignItems%3A%20'center'%2C%0A%20%20%20%20justifyContent%3A%20'center'%2C%0A%20%20%20%20paddingTop%3A%2044%2C%0A%20%20%20%20padding%3A%208%0A%20%20%7D%2C%0A%20%20%20header%3A%20%7B%0A%20%20%20%20fontSize%3A%2018%2C%0A%20%20%20%20fontWeight%3A%20%22bold%22%2C%0A%20%20%20%20textAlign%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20paragraph%3A%20%7B%0A%20%20%20%20margin%3A%2024%2C%0A%20%20%20%20textAlign%3A%20%22center%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))),(0,a.kt)(l.Z,{value:"classical",mdxType:"TabItem"},(0,a.kt)("div",v({},{className:"snack-player","data-snack-name":"Systrace Class Component Example","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20Component%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20Button%2C%20Text%2C%20View%2C%20StyleSheet%2C%20Systrace%20%7D%20from%20%22react-native%22%3B%0A%0Aclass%20App%20extends%20Component%20%7B%0A%0A%20%20enableProfiling%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20Systrace.setEnabled(true)%3B%20%2F%2F%20Call%20setEnabled%20to%20turn%20on%20the%20profiling.%0A%20%20%20%20Systrace.beginEvent('event_label')%0A%20%20%20%20Systrace.counterEvent('event_label'%2C%2010)%3B%0A%20%20%7D%0A%0A%20%20stopProfiling%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20Systrace.endEvent()%0A%20%20%7D%0A%0A%20%20render()%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7B%5Bstyles.header%2C%20styles.paragraph%5D%7D%3EReact%20Native%20Systrace%20API%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CButton%20title%3D%22Capture%20the%20non-Timed%20JS%20events%20in%20EasyProfiler%22%20onPress%3D%7B()%3D%3E%20this.enableProfiling()%7D%2F%3E%0A%20%20%20%20%20%20%20%20%3CButton%20title%3D%22Stop%20capturing%22%20onPress%3D%7B()%3D%3E%20this.stopProfiling()%7D%20color%3D%22%23FF0000%22%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%20%20%7D%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20backgroundColor%3A%20'%23fff'%2C%0A%20%20%20%20alignItems%3A%20'center'%2C%0A%20%20%20%20justifyContent%3A%20'center'%2C%0A%20%20%20%20paddingTop%3A%2044%2C%0A%20%20%20%20padding%3A%208%0A%20%20%7D%2C%0A%20%20%20header%3A%20%7B%0A%20%20%20%20fontSize%3A%2018%2C%0A%20%20%20%20fontWeight%3A%20%22bold%22%2C%0A%20%20%20%20textAlign%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20paragraph%3A%20%7B%0A%20%20%20%20margin%3A%2024%2C%0A%20%20%20%20textAlign%3A%20%22center%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})))),(0,a.kt)("hr",null),(0,a.kt)("h1",v({},{id:"reference"}),"Reference"),(0,a.kt)("h2",v({},{id:"methods"}),"Methods"),(0,a.kt)("h3",v({},{id:"installreacthook"}),(0,a.kt)("inlineCode",{parentName:"h3"},"installReactHook()")),(0,a.kt)("pre",null,(0,a.kt)("code",v({parentName:"pre"},{className:"language-jsx"}),"static installReactHook(useFiber)\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",v({},{id:"setenabled"}),(0,a.kt)("inlineCode",{parentName:"h3"},"setEnabled()")),(0,a.kt)("pre",null,(0,a.kt)("code",v({parentName:"pre"},{className:"language-jsx"}),"static setEnabled(enabled)\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",v({},{id:"isenabled"}),(0,a.kt)("inlineCode",{parentName:"h3"},"isEnabled()")),(0,a.kt)("pre",null,(0,a.kt)("code",v({parentName:"pre"},{className:"language-jsx"}),"static isEnabled()\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",v({},{id:"beginevent"}),(0,a.kt)("inlineCode",{parentName:"h3"},"beginEvent()")),(0,a.kt)("pre",null,(0,a.kt)("code",v({parentName:"pre"},{className:"language-jsx"}),"static beginEvent(profileName?, args?)\n")),(0,a.kt)("p",null,"beginEvent/endEvent for starting and then ending a profile within the same call stack frame."),(0,a.kt)("hr",null),(0,a.kt)("h3",v({},{id:"endevent"}),(0,a.kt)("inlineCode",{parentName:"h3"},"endEvent()")),(0,a.kt)("pre",null,(0,a.kt)("code",v({parentName:"pre"},{className:"language-jsx"}),"static endEvent()\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",v({},{id:"beginasyncevent"}),(0,a.kt)("inlineCode",{parentName:"h3"},"beginAsyncEvent()")),(0,a.kt)("pre",null,(0,a.kt)("code",v({parentName:"pre"},{className:"language-jsx"}),"static beginAsyncEvent(profileName?)\n")),(0,a.kt)("p",null,"beginAsyncEvent/endAsyncEvent for starting and then ending a profile where the end can either occur on another thread or out of the current stack frame, eg await the returned cookie variable should be used as input into the endAsyncEvent call to end the profile."),(0,a.kt)("hr",null),(0,a.kt)("h3",v({},{id:"endasyncevent"}),(0,a.kt)("inlineCode",{parentName:"h3"},"endAsyncEvent()")),(0,a.kt)("pre",null,(0,a.kt)("code",v({parentName:"pre"},{className:"language-jsx"}),"static endAsyncEvent(profileName?, cookie?)\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",v({},{id:"counterevent"}),(0,a.kt)("inlineCode",{parentName:"h3"},"counterEvent()")),(0,a.kt)("pre",null,(0,a.kt)("code",v({parentName:"pre"},{className:"language-jsx"}),"static counterEvent(profileName?, value?)\n")),(0,a.kt)("p",null,"Register the value to the profileName on the systrace timeline."),(0,a.kt)("hr",null),(0,a.kt)("h5",v({},{id:"\u672c\u6587\u6863\u8d21\u732e\u8005sunnylqm9585-sunnylqm415"}),"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1a",(0,a.kt)("a",v({parentName:"h5"},{href:"https://github.com/search?q=sunnylqm&type=Users"}),"sunnylqm"),"(95.85%), ",(0,a.kt)("a",v({parentName:"h5"},{href:"https://github.com/search?q=sunnylqm&type=Users"}),"sunnylqm"),"(4.15%)"))}k.isMDXComponent=!0}}]);