"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[41890],{35318:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return u}});var r=a(27378);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),s=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(a),u=n,g=m["".concat(c,".").concat(u)]||m[u]||d[u]||o;return a?r.createElement(g,i(i({ref:t},p),{},{components:a})):r.createElement(g,i({ref:t},p))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},86992:function(e,t,a){a.r(t),a.d(t,{assets:function(){return f},contentTitle:function(){return u},default:function(){return y},frontMatter:function(){return m},metadata:function(){return g},toc:function(){return k}});var r=a(35318),n=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,d=(e,t)=>{for(var a in t||(t={}))c.call(t,a)&&p(e,a,t[a]);if(l)for(var a of l(t))s.call(t,a)&&p(e,a,t[a]);return e};const m={id:"imagebackground",title:"ImageBackground"},u=void 0,g={unversionedId:"imagebackground",id:"version-0.67/imagebackground",title:"ImageBackground",description:"A common feature request from developers familiar with the web is background-image. To handle this use case, you can use the ` component, which has the same props as `, and add whatever children to it you would like to layer on top of it.",source:"@site/versioned_docs/version-0.67/imagebackground.md",sourceDirName:".",slug:"/imagebackground",permalink:"/docs/imagebackground",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../cndocs/imagebackground.md",tags:[],version:"0.67",frontMatter:{id:"imagebackground",title:"ImageBackground"},sidebar:"\u7ec4\u4ef6",previous:{title:"Image",permalink:"/docs/image"},next:{title:"KeyboardAvoidingView",permalink:"/docs/keyboardavoidingview"}},f={},k=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"Props",id:"props",level:2},{value:"Image Props",id:"image-props",level:3},{value:"<code>imageStyle</code>",id:"imagestyle",level:3},{value:"<code>imageRef</code>",id:"imageref",level:3},{value:"<code>style</code>",id:"style",level:3}],h={toc:k};function y(e){var t,a=e,{components:n}=a,p=((e,t)=>{var a={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&s.call(e,r)&&(a[r]=e[r]);return a})(a,["components"]);return(0,r.kt)("wrapper",(t=d(d({},h),p),o(t,i({components:n,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"A common feature request from developers familiar with the web is ",(0,r.kt)("inlineCode",{parentName:"p"},"background-image"),". To handle this use case, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"<ImageBackground>")," component, which has the same props as ",(0,r.kt)("inlineCode",{parentName:"p"},"<Image>"),", and add whatever children to it you would like to layer on top of it."),(0,r.kt)("p",null,"You might not want to use ",(0,r.kt)("inlineCode",{parentName:"p"},"<ImageBackground>")," in some cases, since the implementation is very simple. Refer to ",(0,r.kt)("inlineCode",{parentName:"p"},"<ImageBackground>"),"'s ",(0,r.kt)("a",d({parentName:"p"},{href:"https://github.com/facebook/react-native/blob/master/Libraries/Image/ImageBackground.js"}),"source code")," for more insight, and create your own custom component when needed."),(0,r.kt)("p",null,"Note that you must specify some width and height style attributes."),(0,r.kt)("h2",d({},{id:"\u793a\u4f8b"}),"\u793a\u4f8b"),(0,r.kt)("div",d({},{className:"snack-player","data-snack-name":"ImageBackground","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%20ImageBackground%2C%20StyleSheet%2C%20Text%2C%20View%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20image%20%3D%20%7B%20uri%3A%20%22https%3A%2F%2Fzh-hans.reactjs.org%2Flogo-og.png%22%20%7D%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20(%0A%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%3CImageBackground%20source%3D%7Bimage%7D%20style%3D%7Bstyles.image%7D%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3EInside%3C%2FText%3E%0A%20%20%20%20%3C%2FImageBackground%3E%0A%20%20%3C%2FView%3E%0A)%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20flexDirection%3A%20%22column%22%0A%20%20%7D%2C%0A%20%20image%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20resizeMode%3A%20%22cover%22%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20text%3A%20%7B%0A%20%20%20%20color%3A%20%22white%22%2C%0A%20%20%20%20fontSize%3A%2042%2C%0A%20%20%20%20fontWeight%3A%20%22bold%22%2C%0A%20%20%20%20textAlign%3A%20%22center%22%2C%0A%20%20%20%20background%3A%20%22%23000000a0%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),(0,r.kt)("hr",null),(0,r.kt)("h1",d({},{id:"\u6587\u6863"}),"\u6587\u6863"),(0,r.kt)("h2",d({},{id:"props"}),"Props"),(0,r.kt)("h3",d({},{id:"image-props"}),(0,r.kt)("a",d({parentName:"h3"},{href:"/docs/image#props"}),"Image Props")),(0,r.kt)("h3",d({},{id:"imagestyle"}),(0,r.kt)("inlineCode",{parentName:"h3"},"imageStyle")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",d({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,r.kt)("th",d({parentName:"tr"},{align:null}),"\u5fc5\u9700"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)("a",d({parentName:"td"},{href:"/docs/image-style-props"}),"image styles")),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"\u5426")))),(0,r.kt)("h3",d({},{id:"imageref"}),(0,r.kt)("inlineCode",{parentName:"h3"},"imageRef")),(0,r.kt)("p",null,"Allows to set a reference to the inner ",(0,r.kt)("inlineCode",{parentName:"p"},"Image")," component"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",d({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,r.kt)("th",d({parentName:"tr"},{align:null}),"\u5fc5\u9700"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)("a",d({parentName:"td"},{href:"https://zh-hans.reactjs.org/docs/refs-and-the-dom.html"}),"Ref")),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"\u5426")))),(0,r.kt)("h3",d({},{id:"style"}),(0,r.kt)("inlineCode",{parentName:"h3"},"style")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",d({parentName:"tr"},{align:null}),"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)("a",d({parentName:"td"},{href:"/docs/view-style-props"}),"View Style"))))))}y.isMDXComponent=!0}}]);