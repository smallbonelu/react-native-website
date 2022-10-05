"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[79871],{35318:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),m=a,d=s["".concat(c,".").concat(m)]||s[m]||f[m]||i;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},21106:function(e,t,n){n.r(t),n.d(t,{assets:function(){return v},contentTitle:function(){return m},default:function(){return y},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return g}});var r=n(35318),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&u(e,n,t[n]);if(l)for(var n of l(t))p.call(t,n)&&u(e,n,t[n]);return e};const s={id:"view-flattening",title:"\u89c6\u56fe\u62cd\u5e73"},m=void 0,d={unversionedId:"view-flattening",id:"version-0.66/view-flattening",title:"\u89c6\u56fe\u62cd\u5e73",description:"This document refers to the architecture of the new renderer, Fabric, that is in active roll-out.",source:"@site/versioned_docs/version-0.66/view-flattening.md",sourceDirName:".",slug:"/view-flattening",permalink:"/docs/0.66/view-flattening",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/view-flattening.md",tags:[],version:"0.66",frontMatter:{id:"view-flattening",title:"\u89c6\u56fe\u62cd\u5e73"},sidebar:"\u67b6\u6784",previous:{title:"\u8de8\u5e73\u53f0\u7684\u5b9e\u73b0",permalink:"/docs/0.66/xplat-implementation"},next:{title:"\u7ebf\u7a0b\u6a21\u578b",permalink:"/docs/0.66/threading-model"}},v={},g=[{value:"\u89c6\u56fe\u62cd\u5e73\uff08View Flattening\uff09\u662f React Native \u6e32\u67d3\u5668\u907f\u514d\u5e03\u5c40\u5d4c\u5957\u592a\u6df1\u7684\u4f18\u5316\u624b\u6bb5\u3002",id:"\u89c6\u56fe\u62cd\u5e73view-flattening\u662f-react-native-\u6e32\u67d3\u5668\u907f\u514d\u5e03\u5c40\u5d4c\u5957\u592a\u6df1\u7684\u4f18\u5316\u624b\u6bb5",level:4}],b={toc:g};function y(e){var t,n=e,{components:a}=n,u=((e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=f(f({},b),u),i(t,o({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This document refers to the architecture of the new renderer, ",(0,r.kt)("a",f({parentName:"p"},{href:"fabric-renderer"}),"Fabric"),", that is in active roll-out.")),(0,r.kt)("h4",f({},{id:"\u89c6\u56fe\u62cd\u5e73view-flattening\u662f-react-native-\u6e32\u67d3\u5668\u907f\u514d\u5e03\u5c40\u5d4c\u5957\u592a\u6df1\u7684\u4f18\u5316\u624b\u6bb5"}),"\u89c6\u56fe\u62cd\u5e73\uff08View Flattening\uff09\u662f React Native \u6e32\u67d3\u5668\u907f\u514d\u5e03\u5c40\u5d4c\u5957\u592a\u6df1\u7684\u4f18\u5316\u624b\u6bb5\u3002"),(0,r.kt)("p",null,"React API \u5728\u8bbe\u8ba1\u4e0a\u5e0c\u671b\u901a\u8fc7\u7ec4\u5408\u7684\u65b9\u5f0f\uff0c\u5b9e\u73b0\u7ec4\u4ef6\u58f0\u660e\u548c\u91cd\u7528\uff0c\u8fd9\u4e3a\u66f4\u7b80\u5355\u7684\u5f00\u53d1\u63d0\u4f9b\u4e86\u4e00\u4e2a\u5f88\u597d\u7684\u6a21\u578b\u3002\u4f46\u662f\u5728\u5b9e\u73b0\u4e2d\uff0cAPI \u7684\u8fd9\u4e9b\u7279\u6027\u4f1a\u5bfc\u81f4\u4e00\u4e9b React \u5143\u7d20\u4f1a\u5d4c\u5957\u5730\u5f88\u6df1\uff0c\u800c\u5176\u4e2d\u5927\u90e8\u5206 React \u5143\u7d20\u8282\u70b9\u53ea\u4f1a\u5f71\u54cd\u89c6\u56fe\u5e03\u5c40\uff0c\u5e76\u4e0d\u4f1a\u5728\u5c4f\u5e55\u4e2d\u6e32\u67d3\u4efb\u4f55\u5185\u5bb9\u3002\u8fd9\u5c31\u662f\u6240\u8c13\u7684",(0,r.kt)("strong",{parentName:"p"},"\u201c\u53ea\u53c2\u4e0e\u5e03\u5c40\u201d"),"\u7c7b\u578b\u8282\u70b9\u3002"),(0,r.kt)("p",null,"\u4ece\u6982\u5ff5\u4e0a\u8bb2\uff0cReact \u5143\u7d20\u6811\u7684\u8282\u70b9\u6570\u91cf\u548c\u5c4f\u5e55\u4e0a\u7684\u89c6\u56fe\u6570\u91cf\u5e94\u8be5\u662f 1:1 \u7684\u5173\u7cfb\u3002\u4f46\u662f\uff0c\u6e32\u67d3\u4e00\u4e2a\u5f88\u6df1\u7684\u201c\u53ea\u53c2\u4e0e\u5e03\u5c40\u201d\u7684 React \u5143\u7d20\u4f1a\u5bfc\u81f4\u6027\u80fd\u53d8\u6162\u3002"),(0,r.kt)("p",null,"\u4e3e\u4e2a\u5f88\u5e38\u89c1\u7684\u4f8b\u5b50\uff0c\u4f8b\u5b50\u4e2d\u201c\u53ea\u53c2\u4e0e\u5e03\u5c40\u201d\u89c6\u56fe\u5bfc\u81f4\u4e86\u6027\u80fd\u635f\u8017\u3002"),(0,r.kt)("p",null,"\u60f3\u8c61\u4e00\u4e0b\uff0c\u4f60\u8981\u6e32\u67d3\u4e00\u4e2a\u6807\u9898\u3002\u4f60\u6709\u4e00\u4e2a\u5e94\u7528\uff0c\u5e94\u7528\u4e2d\u62e5\u6709\u5916\u8fb9\u8ddd ",(0,r.kt)("inlineCode",{parentName:"p"},"ContainerComponent"),"\u7684\u5bb9\u5668\u7ec4\u4ef6\uff0c\u5bb9\u5668\u7ec4\u4ef6\u7684\u5b50\u7ec4\u4ef6\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"TitleComponent")," \u6807\u9898\u7ec4\u4ef6\uff0c\u6807\u9898\u7ec4\u4ef6\u5305\u62ec\u4e00\u4e2a\u56fe\u7247\u548c\u4e00\u884c\u6587\u5b57\u3002React \u4ee3\u7801\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-jsx"}),"function MyComponent() {\n  return (\n    <View>                          // ReactAppComponent\n      <View style={{margin: 10}} /> // ContainerComponent\n        <View style={{margin: 10}}> // TitleComponent\n          <Image {...} />\n          <Text {...}>This is a title</Text>\n        </View>\n      </View>\n    </View>\n  );\n}\n")),(0,r.kt)("p",null,"React Native \u5728\u6e32\u67d3\u65f6\uff0c\u4f1a\u751f\u6210\u4ee5\u4e0b\u4e09\u68f5\u6811\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",f({parentName:"p"},{src:"https://reactnative.dev/assets/images/diagram-one-3f2f9d7a2fa9d97b6b86fa3bd9b886d1.png",alt:"Diagram one"}))),(0,r.kt)("p",null,"\u6ce8\u610f\u89c6\u56fe 2 \u548c\u89c6\u56fe 3 \u662f\u201c\u53ea\u53c2\u4e0e\u5e03\u5c40\u201d\u7684\u89c6\u56fe\uff0c\u56e0\u4e3a\u5b83\u4eec\u5728\u5c4f\u5e55\u4e0a\u6e32\u67d3\u53ea\u662f\u4e3a\u4e86\u63d0\u4f9b 10 \u50cf\u7d20\u7684\u5916\u8fb9\u8ddd\u3002"),(0,r.kt)("p",null,"\u4e3a\u4e86\u63d0\u5347 React \u5143\u7d20\u6811\u4e2d\u201c\u53ea\u53c2\u4e0e\u5e03\u5c40\u201d\u7c7b\u578b\u7684\u6027\u80fd\uff0c\u6e32\u67d3\u5668\u5b9e\u73b0\u4e86\u4e00\u79cd\u89c6\u56fe\u62cd\u5e73\u7684\u673a\u5236\u6765\u5408\u5e76\u6216\u62cd\u5e73\u8fd9\u7c7b\u8282\u70b9\uff0c\u51cf\u5c11\u5c4f\u5e55\u4e2d\u5bbf\u4e3b\u89c6\u56fe\u7684\u5c42\u7ea7\u6df1\u5ea6\u3002\u8be5\u7b97\u6cd5\u8003\u8651\u5230\u4e86\u5982\u4e0b\u5c5e\u6027\uff0c\u6bd4\u5982  ",(0,r.kt)("inlineCode",{parentName:"p"},"margin"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"padding"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"backgroundColor"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"opacity"),"\u7b49\u7b49\u3002"),(0,r.kt)("p",null,"\u89c6\u56fe\u62cd\u5e73\u7b97\u6cd5\u662f\u6e32\u67d3\u5668\u7684\u5bf9\u6bd4\uff08diffing\uff09\u9636\u6bb5\u7684\u4e00\u90e8\u5206\uff0c\u8fd9\u6837\u8bbe\u8ba1\u7684\u597d\u5904\u662f\u6211\u4eec\u4e0d\u9700\u8981\u989d\u5916\u7684 CPU \u8017\u65f6\uff0c\u6765\u62cd\u5e73 React \u5143\u7d20\u6811\u4e2d\u201c\u53ea\u53c2\u4e0e\u5e03\u5c40\u201d\u7684\u89c6\u56fe\u3002\u6b64\u5916\uff0c\u4f5c\u4e3a C++ \u6838\u5fc3\u7684\u4e00\u90e8\u5206\uff0c\u89c6\u56fe\u62cd\u5e73\u7b97\u6cd5\u9ed8\u8ba4\u662f\u5168\u5e73\u53f0\u5171\u7528\u7684\u3002"),(0,r.kt)("p",null,"\u5728\u524d\u9762\u7684\u4f8b\u5b50\u4e2d\uff0c\u89c6\u56fe 2 \u548c\u89c6\u56fe 3 \u4f1a\u4f5c\u4e3a\u201c\u5bf9\u6bd4\u7b97\u6cd5\u201d\uff08diffing algorithm\uff09\u7684\u4e00\u90e8\u5206\u88ab\u62cd\u5e73\uff0c\u800c\u5b83\u4eec\u7684\u6837\u5f0f\u7ed3\u679c\u4f1a\u88ab\u5408\u5e76\u5230\u89c6\u56fe 1 \u4e2d\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",f({parentName:"p"},{src:"https://reactnative.dev/assets/images/diagram-two-b87959980d29e4a303465a3d0ac82c73.png",alt:"Diagram two"}))),(0,r.kt)("p",null,"\u867d\u7136\uff0c\u8fd9\u79cd\u4f18\u5316\u8ba9\u6e32\u67d3\u5668\u5c11\u521b\u5efa\u548c\u6e32\u67d3\u4e24\u4e2a\u5bbf\u4e3b\u89c6\u56fe\uff0c\u4f46\u4ece\u7528\u6237\u7684\u89d2\u5ea6\u770b\u5c4f\u5e55\u5185\u5bb9\u6ca1\u6709\u4efb\u4f55\u533a\u522b\u3002"))}y.isMDXComponent=!0}}]);