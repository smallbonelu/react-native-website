"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[25483],{35318:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return k}});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),d=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=d(r),k=a,m=u["".concat(p,".").concat(k)]||u[k]||c[k]||l;return r?n.createElement(m,o(o({ref:t},s),{},{components:r})):n.createElement(m,o({ref:t},s))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var d=2;d<l;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},48255:function(e,t,r){r.r(t),r.d(t,{assets:function(){return h},contentTitle:function(){return k},default:function(){return g},frontMatter:function(){return u},metadata:function(){return m},toc:function(){return f}});var n=r(35318),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&s(e,r,t[r]);if(i)for(var r of i(t))d.call(t,r)&&s(e,r,t[r]);return e};const u={id:"refreshcontrol",title:"RefreshControl"},k=void 0,m={unversionedId:"refreshcontrol",id:"refreshcontrol",title:"RefreshControl",description:"\u8fd9\u4e00\u7ec4\u4ef6\u53ef\u4ee5\u7528\u5728 ScrollView \u6216 FlatList \u5185\u90e8\uff0c\u4e3a\u5176\u6dfb\u52a0\u4e0b\u62c9\u5237\u65b0\u7684\u529f\u80fd\u3002\u5f53 ScrollView \u5904\u4e8e\u7ad6\u76f4\u65b9\u5411\u7684\u8d77\u70b9\u4f4d\u7f6e\uff08scrollY: 0\uff09\uff0c\u6b64\u65f6\u4e0b\u62c9\u4f1a\u89e6\u53d1\u4e00\u4e2aonRefresh\u4e8b\u4ef6\u3002",source:"@site/../cndocs/refreshcontrol.md",sourceDirName:".",slug:"/refreshcontrol",permalink:"/docs/next/refreshcontrol",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../cndocs/refreshcontrol.md",tags:[],version:"current",frontMatter:{id:"refreshcontrol",title:"RefreshControl"},sidebar:"\u7ec4\u4ef6",previous:{title:"Pressable",permalink:"/docs/next/pressable"},next:{title:"ScrollView",permalink:"/docs/next/scrollview"}},h={},f=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"Props",id:"props",level:2},{value:"<code>refreshing</code>",id:"refreshing",level:3},{value:"<code>onRefresh</code>",id:"onrefresh",level:3},{value:"<code>colors</code>",id:"colors",level:3},{value:"<code>enabled</code>",id:"enabled",level:3},{value:"<code>progressBackgroundColor</code>",id:"progressbackgroundcolor",level:3},{value:"<code>progressViewOffset</code>",id:"progressviewoffset",level:3},{value:"<code>size</code>",id:"size",level:3},{value:"<code>tintColor</code>",id:"tintcolor",level:3},{value:"<code>title</code>",id:"title",level:3},{value:"<code>titleColor</code>",id:"titlecolor",level:3}],N={toc:f};function g(e){var t,r=e,{components:a}=r,s=((e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&d.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=c(c({},N),s),l(t,o({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"\u8fd9\u4e00\u7ec4\u4ef6\u53ef\u4ee5\u7528\u5728 ScrollView \u6216 FlatList \u5185\u90e8\uff0c\u4e3a\u5176\u6dfb\u52a0\u4e0b\u62c9\u5237\u65b0\u7684\u529f\u80fd\u3002\u5f53 ScrollView \u5904\u4e8e\u7ad6\u76f4\u65b9\u5411\u7684\u8d77\u70b9\u4f4d\u7f6e\uff08scrollY: 0\uff09\uff0c\u6b64\u65f6\u4e0b\u62c9\u4f1a\u89e6\u53d1\u4e00\u4e2a",(0,n.kt)("inlineCode",{parentName:"p"},"onRefresh"),"\u4e8b\u4ef6\u3002"),(0,n.kt)("h2",c({},{id:"\u793a\u4f8b"}),"\u793a\u4f8b"),(0,n.kt)("div",c({},{className:"snack-player","data-snack-name":"RefreshControl","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%0A%20%20ScrollView%2C%0A%20%20RefreshControl%2C%0A%20%20StyleSheet%2C%0A%20%20Text%2C%0A%20%20SafeAreaView%2C%0A%7D%20from%20'react-native'%3B%0Aimport%20Constants%20from%20'expo-constants'%3B%0A%0Aconst%20wait%20%3D%20(timeout)%20%3D%3E%20%7B%0A%20%20return%20new%20Promise(resolve%20%3D%3E%20%7B%0A%20%20%20%20setTimeout(resolve%2C%20timeout)%3B%0A%20%20%7D)%3B%0A%7D%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5Brefreshing%2C%20setRefreshing%5D%20%3D%20React.useState(false)%3B%0A%0A%20%20const%20onRefresh%20%3D%20React.useCallback(()%20%3D%3E%20%7B%0A%20%20%20%20setRefreshing(true)%3B%0A%0A%20%20%20%20wait(2000).then(()%20%3D%3E%20setRefreshing(false))%3B%0A%20%20%7D%2C%20%5B%5D)%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CSafeAreaView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CScrollView%0A%20%20%20%20%20%20%20%20contentContainerStyle%3D%7Bstyles.scrollView%7D%0A%20%20%20%20%20%20%20%20refreshControl%3D%7B%0A%20%20%20%20%20%20%20%20%20%20%3CRefreshControl%20refreshing%3D%7Brefreshing%7D%20onRefresh%3D%7BonRefresh%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3CText%3EPull%20down%20to%20see%20RefreshControl%20indicator%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FScrollView%3E%0A%20%20%20%20%3C%2FSafeAreaView%3E%0A%20%20)%3B%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20marginTop%3A%20Constants.statusBarHeight%2C%0A%20%20%7D%2C%0A%20%20scrollView%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20backgroundColor%3A%20'pink'%2C%0A%20%20%20%20alignItems%3A%20'center'%2C%0A%20%20%20%20justifyContent%3A%20'center'%2C%0A%20%20%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a")," ",(0,n.kt)("inlineCode",{parentName:"p"},"refreshing"),"\u662f\u4e00\u4e2a\u53d7\u63a7\u5c5e\u6027\uff0c \u6240\u4ee5\u5fc5\u987b\u5728",(0,n.kt)("inlineCode",{parentName:"p"},"onRefresh"),"\u51fd\u6570\u4e2d\u8bbe\u7f6e\u4e3a true\uff0c\u5426\u5219 loading \u6307\u793a\u5668\u4f1a\u7acb\u5373\u505c\u6b62\u3002"),(0,n.kt)("hr",null),(0,n.kt)("h1",c({},{id:"\u6587\u6863"}),"\u6587\u6863"),(0,n.kt)("h2",c({},{id:"props"}),"Props"),(0,n.kt)("h3",c({},{id:"refreshing"}),(0,n.kt)("inlineCode",{parentName:"h3"},"refreshing")),(0,n.kt)("p",null,"\u89c6\u56fe\u662f\u5426\u5e94\u8be5\u5728\u5237\u65b0\u65f6\u663e\u793a\u6307\u793a\u5668\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"\u5fc5\u9700"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"bool"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"\u662f")))),(0,n.kt)("hr",null),(0,n.kt)("h3",c({},{id:"onrefresh"}),(0,n.kt)("inlineCode",{parentName:"h3"},"onRefresh")),(0,n.kt)("p",null,"\u5728\u89c6\u56fe\u5f00\u59cb\u5237\u65b0\u65f6\u8c03\u7528\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"\u5fc5\u9700"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"function"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"\u5426")))),(0,n.kt)("hr",null),(0,n.kt)("h3",c({},{id:"colors"}),(0,n.kt)("inlineCode",{parentName:"h3"},"colors")),(0,n.kt)("p",null,"\u6307\u5b9a\u81f3\u5c11\u4e00\u79cd\u989c\u8272\u7528\u6765\u7ed8\u5236\u5237\u65b0\u6307\u793a\u5668\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"\u5fc5\u9700"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"\u5e73\u53f0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"array of ",(0,n.kt)("a",c({parentName:"td"},{href:"/docs/next/colors"}),"color")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"\u5426"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Android")))),(0,n.kt)("hr",null),(0,n.kt)("h3",c({},{id:"enabled"}),(0,n.kt)("inlineCode",{parentName:"h3"},"enabled")),(0,n.kt)("p",null,"\u6307\u5b9a\u662f\u5426\u8981\u542f\u7528\u5237\u65b0\u6307\u793a\u5668\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"\u5fc5\u9700"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"\u5e73\u53f0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"bool"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"\u5426"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Android")))),(0,n.kt)("hr",null),(0,n.kt)("h3",c({},{id:"progressbackgroundcolor"}),(0,n.kt)("inlineCode",{parentName:"h3"},"progressBackgroundColor")),(0,n.kt)("p",null,"\u6307\u5b9a\u5237\u65b0\u6307\u793a\u5668\u7684\u80cc\u666f\u8272\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"\u5fc5\u9700"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"\u5e73\u53f0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("a",c({parentName:"td"},{href:"/docs/next/colors"}),"color")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"\u5426"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Android")))),(0,n.kt)("hr",null),(0,n.kt)("h3",c({},{id:"progressviewoffset"}),(0,n.kt)("inlineCode",{parentName:"h3"},"progressViewOffset")),(0,n.kt)("p",null,"\u6307\u5b9a\u5237\u65b0\u6307\u793a\u5668\u7684\u5782\u76f4\u8d77\u59cb\u4f4d\u7f6e(top offset)\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"\u5fc5\u9700"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"\u5e73\u53f0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"number"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"\u5426"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Android")))),(0,n.kt)("hr",null),(0,n.kt)("h3",c({},{id:"size"}),(0,n.kt)("inlineCode",{parentName:"h3"},"size")),(0,n.kt)("p",null,"\u6307\u5b9a\u5237\u65b0\u6307\u793a\u5668\u7684\u5927\u5c0f\uff0c\u5177\u4f53\u6570\u503c\u53ef\u53c2\u9605 RefreshControl.SIZE."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"\u5fc5\u9700"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"\u5e73\u53f0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"enum(RefreshLayoutConsts.SIZE.DEFAULT, RefreshLayoutConsts.SIZE.LARGE)"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"\u5426"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Android")))),(0,n.kt)("hr",null),(0,n.kt)("h3",c({},{id:"tintcolor"}),(0,n.kt)("inlineCode",{parentName:"h3"},"tintColor")),(0,n.kt)("p",null,"\u6307\u5b9a\u5237\u65b0\u6307\u793a\u5668\u7684\u989c\u8272\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"\u5fc5\u9700"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"\u5e73\u53f0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("a",c({parentName:"td"},{href:"/docs/next/colors"}),"color")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"\u5426"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"iOS")))),(0,n.kt)("hr",null),(0,n.kt)("h3",c({},{id:"title"}),(0,n.kt)("inlineCode",{parentName:"h3"},"title")),(0,n.kt)("p",null,"\u6307\u5b9a\u5237\u65b0\u6307\u793a\u5668\u4e0b\u663e\u793a\u7684\u6587\u5b57\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"\u5fc5\u9700"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"\u5e73\u53f0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"\u5426"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"iOS")))),(0,n.kt)("hr",null),(0,n.kt)("h3",c({},{id:"titlecolor"}),(0,n.kt)("inlineCode",{parentName:"h3"},"titleColor")),(0,n.kt)("p",null,"\u6307\u5b9a\u5237\u65b0\u6307\u793a\u5668\u4e0b\u663e\u793a\u7684\u6587\u5b57\u7684\u989c\u8272\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"\u5fc5\u9700"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"\u5e73\u53f0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("a",c({parentName:"td"},{href:"/docs/next/colors"}),"color")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"\u5426"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"iOS")))))}g.isMDXComponent=!0}}]);