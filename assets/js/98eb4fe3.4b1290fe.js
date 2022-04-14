"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[48527],{35318:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return d}});var a=n(27378);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),k=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=k(t.components);return a.createElement(o.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),s=k(n),d=r,g=s["".concat(o,".").concat(d)]||s[d]||u[d]||l;return n?a.createElement(g,i(i({ref:e},m),{},{components:n})):a.createElement(g,i({ref:e},m))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=s;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var k=2;k<l;k++)i[k]=n[k];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},17176:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return d},default:function(){return b},frontMatter:function(){return s},metadata:function(){return g},toc:function(){return N}});var a=n(35318),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,m=(t,e,n)=>e in t?r(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,u=(t,e)=>{for(var n in e||(e={}))o.call(e,n)&&m(t,n,e[n]);if(p)for(var n of p(e))k.call(e,n)&&m(t,n,e[n]);return t};const s={id:"asyncstorage",title:"\ud83d\udea7 AsyncStorage"},d=void 0,g={unversionedId:"asyncstorage",id:"version-0.65/asyncstorage",title:"\ud83d\udea7 AsyncStorage",description:"\u5df2\u8fc7\u65f6\u3002 Use one of the community packages instead.",source:"@site/versioned_docs/version-0.65/asyncstorage.md",sourceDirName:".",slug:"/asyncstorage",permalink:"/docs/0.65/asyncstorage",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../cndocs/asyncstorage.md",tags:[],version:"0.65",frontMatter:{id:"asyncstorage",title:"\ud83d\udea7 AsyncStorage"}},c={},N=[{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",level:2},{value:"<code>getItem()</code>",id:"getitem",level:3},{value:"<code>setItem()</code>",id:"setitem",level:3},{value:"<code>removeItem()</code>",id:"removeitem",level:3},{value:"<code>mergeItem()</code>",id:"mergeitem",level:3},{value:"<code>clear()</code>",id:"clear",level:3},{value:"<code>getAllKeys()</code>",id:"getallkeys",level:3},{value:"<code>flushGetRequests()</code>",id:"flushgetrequests",level:3},{value:"<code>multiGet()</code>",id:"multiget",level:3},{value:"<code>multiSet()</code>",id:"multiset",level:3},{value:"<code>multiRemove()</code>",id:"multiremove",level:3},{value:"<code>multiMerge()</code>",id:"multimerge",level:3}],y={toc:N};function b(t){var e,n=t,{components:r}=n,m=((t,e)=>{var n={};for(var a in t)o.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&p)for(var a of p(t))e.indexOf(a)<0&&k.call(t,a)&&(n[a]=t[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(e=u(u({},y),m),l(e,i({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u5df2\u8fc7\u65f6\u3002")," Use one of the ",(0,a.kt)("a",u({parentName:"p"},{href:"https://reactnative.directory/?search=storage"}),"community packages")," instead.")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"AsyncStorage"),"\u662f\u4e00\u4e2a\u7b80\u5355\u7684\u3001\u5f02\u6b65\u7684\u3001\u6301\u4e45\u5316\u7684 Key-Value \u5b58\u50a8\u7cfb\u7edf\uff0c\u5b83\u5bf9\u4e8e App \u6765\u8bf4\u662f\u5168\u5c40\u6027\u7684\u3002\u53ef\u7528\u6765\u4ee3\u66ff LocalStorage\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u63a8\u8350\u60a8\u5728 AsyncStorage \u7684\u57fa\u7840\u4e0a\u505a\u4e00\u5c42\u62bd\u8c61\u5c01\u88c5\uff0c\u800c\u4e0d\u662f\u76f4\u63a5\u4f7f\u7528 AsyncStorage\u3002"),(0,a.kt)("p",null,"\u5728 iOS \u4e0a\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"AsyncStorage"),"\u5728\u539f\u751f\u7aef\u7684\u5b9e\u73b0\u662f\u628a\u8f83\u5c0f\u503c\u5b58\u653e\u5728\u5e8f\u5217\u5316\u7684\u5b57\u5178\u4e2d\uff0c\u800c\u628a\u8f83\u5927\u503c\u5199\u5165\u5355\u72ec\u7684\u6587\u4ef6\u3002\u5728 Android \u4e0a\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"AsyncStorage"),"\u4f1a\u5c1d\u8bd5\u4f7f\u7528",(0,a.kt)("a",u({parentName:"p"},{href:"http://rocksdb.org/"}),"RocksDB"),"\uff0c\u6216\u9000\u800c\u9009\u62e9 SQLite\u3002"),(0,a.kt)("p",null,"\u672c\u6a21\u5757\u7684 JS \u4ee3\u7801\u63d0\u4f9b\u4e86\u5bf9\u539f\u751f\u5b9e\u73b0\u7684\u4e00\u4e2a\u5c01\u88c5\uff0c\u4ee5\u63d0\u4f9b\u4e00\u4e2a\u66f4\u6e05\u6670\u7684 JS API\u3001\u629b\u51fa\u771f\u6b63\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"Error"),"\u5bf9\u8c61\uff0c\u4ee5\u53ca\u7b80\u5355\u7684\u5355\u9879\u5bf9\u8c61\u64cd\u4f5c\u51fd\u6570\u3002\u6bcf\u4e2a\u65b9\u6cd5\u90fd\u4f1a\u8fd4\u56de\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"\u5bf9\u8c61\u3002"),(0,a.kt)("p",null,"\u5bfc\u5165",(0,a.kt)("inlineCode",{parentName:"p"},"AsyncStorage"),"\u5e93\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-jsx"}),"import { AsyncStorage } from 'react-native';\n")),(0,a.kt)("p",null,"\u4fdd\u5b58\u6570\u636e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-jsx"}),"_storeData = async () => {\n  try {\n    await AsyncStorage.setItem(\n      '@MySuperStore:key',\n      'I like to save it.'\n    );\n  } catch (error) {\n    // Error saving data\n  }\n};\n")),(0,a.kt)("p",null,"\u8bfb\u53d6\u6570\u636e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-jsx"}),"_retrieveData = async () => {\n  try {\n    const value = await AsyncStorage.getItem('@MySuperStore:key');\n    if (value !== null) {\n      // We have data!!\n      console.log(value);\n    }\n  } catch (error) {\n    // Error retrieving data\n  }\n};\n")),(0,a.kt)("hr",null),(0,a.kt)("h1",u({},{id:"\u6587\u6863"}),"\u6587\u6863"),(0,a.kt)("h2",u({},{id:"\u65b9\u6cd5"}),"\u65b9\u6cd5"),(0,a.kt)("h3",u({},{id:"getitem"}),(0,a.kt)("inlineCode",{parentName:"h3"},"getItem()")),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-jsx"}),"static getItem(key: string, [callback]: ?(error: ?Error, result: ?string) => void)\n")),(0,a.kt)("p",null,"\u8bfb\u53d6",(0,a.kt)("inlineCode",{parentName:"p"},"key"),"\u5b57\u6bb5\u5e76\u5c06\u7ed3\u679c\u4f5c\u4e3a\u7b2c\u4e8c\u4e2a\u53c2\u6570\u4f20\u9012\u7ed9",(0,a.kt)("inlineCode",{parentName:"p"},"callback"),"\u3002\u5982\u679c\u6709\u4efb\u4f55\u9519\u8bef\u53d1\u751f\uff0c\u5219\u4f1a\u4f20\u9012\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"Error"),"\u5bf9\u8c61\u4f5c\u4e3a\u7b2c\u4e00\u4e2a\u53c2\u6570\u3002\u8fd4\u56de\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"\u5bf9\u8c61\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"\u540d\u79f0"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"\u5fc5\u9700"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"key"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u662f"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u8981\u8bfb\u53d6\u7684\u5b57\u6bb5\u540d")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"callback"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"?(error: ?Error, result: ?string) => void"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u5426"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u8bfb\u53d6\u5b8c\u6210\u540e\u7684\u56de\u8c03\u51fd\u6570\uff08\u4e0d\u5efa\u8bae\u4f7f\u7528\uff09")))),(0,a.kt)("hr",null),(0,a.kt)("h3",u({},{id:"setitem"}),(0,a.kt)("inlineCode",{parentName:"h3"},"setItem()")),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-jsx"}),"static setItem(key: string, value: string, [callback]: ?(error: ?Error) => void)\n")),(0,a.kt)("p",null,"\u5c06",(0,a.kt)("inlineCode",{parentName:"p"},"key"),"\u5b57\u6bb5\u7684\u503c\u8bbe\u7f6e\u6210",(0,a.kt)("inlineCode",{parentName:"p"},"value"),"(\u6ce8\u610f value \u5fc5\u987b\u662f\u5b57\u7b26\u4e32\u503c\uff0c\u975e\u5b57\u7b26\u4e32\u6570\u636e\u5fc5\u987b\u5148\u5e8f\u5217\u5316\u4e3a\u5b57\u7b26\u4e32)\uff0c\u5e76\u5728\u5b8c\u6210\u540e\u8c03\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"callback"),"\u51fd\u6570\u3002\u5982\u679c\u6709\u4efb\u4f55\u9519\u8bef\u53d1\u751f\uff0c\u5219\u4f1a\u4f20\u9012\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"Error"),"\u5bf9\u8c61\u4f5c\u4e3a\u7b2c\u4e00\u4e2a\u53c2\u6570\u3002\u8fd4\u56de\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"\u5bf9\u8c61\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"\u540d\u79f0"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"\u5fc5\u9700"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"key"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u662f"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u8981\u5199\u5165\u7684\u5b57\u6bb5\u540d")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"value"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u662f"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u8981\u5199\u5165",(0,a.kt)("inlineCode",{parentName:"td"},"key"),"\u5b57\u6bb5\u7684\u503c")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"callback"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"?(error: ?Error) => void"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u5426"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u53d1\u751f\u9519\u8bef\u65f6\u7684\u56de\u8c03\u51fd\u6570")))),(0,a.kt)("hr",null),(0,a.kt)("h3",u({},{id:"removeitem"}),(0,a.kt)("inlineCode",{parentName:"h3"},"removeItem()")),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-jsx"}),"static removeItem(key: string, [callback]: ?(error: ?Error) => void)\n")),(0,a.kt)("p",null,"\u5220\u9664\u4e00\u4e2a\u5b57\u6bb5\u3002\u8fd4\u56de\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"\u5bf9\u8c61\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"\u540d\u79f0"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"\u5fc5\u9700"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"key"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u662f"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u8981\u5220\u9664\u7684\u5b57\u6bb5\u540d\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"callback"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"?(error: ?Error) => void"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u5426"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u53d1\u751f\u9519\u8bef\u65f6\u7684\u56de\u8c03\u51fd\u6570")))),(0,a.kt)("hr",null),(0,a.kt)("h3",u({},{id:"mergeitem"}),(0,a.kt)("inlineCode",{parentName:"h3"},"mergeItem()")),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-jsx"}),"static mergeItem(key: string, value: string, [callback]: ?(error: ?Error) => void)\n")),(0,a.kt)("p",null,"\u5047\u8bbe\u5df2\u6709\u7684\u503c\u548c\u65b0\u7684\u503c\u90fd\u662f\u5b57\u7b26\u4e32\u5316\u7684 JSON\uff0c\u5219\u5c06\u4e24\u4e2a\u503c\u5408\u5e76\u3002\u8fd4\u56de\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"\u5bf9\u8c61\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a")," \u8fd8\u6ca1\u6709\u88ab\u6240\u6709\u539f\u751f\u5b9e\u73b0\u90fd\u652f\u6301\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"\u540d\u79f0"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"\u5fc5\u9700"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"key"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u662f"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u8981\u5408\u5e76\u66f4\u65b0\u7684\u5b57\u6bb5\u540d\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"value"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u662f"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u8981\u5408\u5e76\u5230",(0,a.kt)("inlineCode",{parentName:"td"},"key"),"\u5b57\u6bb5\u4e0a\u7684\u65b0\u503c\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"callback"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"?(error: ?Error) => void"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u5426"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u53d1\u751f\u9519\u8bef\u65f6\u7684\u56de\u8c03\u51fd\u6570\u3002")))),(0,a.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-jsx"}),"let UID123_object = {\n  name: 'Chris',\n  age: 30,\n  traits: { hair: 'brown', eyes: 'brown' }\n};\n// \u53ea\u9700\u5b9a\u4e49\u65b0\u589e\u6216\u662f\u4fee\u6539\u7684\u6570\u636e\nlet UID123_delta = {\n  age: 31,\n  traits: { eyes: 'blue', shoe_size: 10 }\n};\n\nAsyncStorage.setItem(\n  'UID123',\n  JSON.stringify(UID123_object),\n  () => {\n    AsyncStorage.mergeItem(\n      'UID123',\n      JSON.stringify(UID123_delta),\n      () => {\n        AsyncStorage.getItem('UID123', (err, result) => {\n          console.log(result);\n        });\n      }\n    );\n  }\n);\n\n// Console log result:\n// => {'name':'Chris','age':31,'traits':\n//    {'shoe_size':10,'hair':'brown','eyes':'blue'}}\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",u({},{id:"clear"}),(0,a.kt)("inlineCode",{parentName:"h3"},"clear()")),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-jsx"}),"static clear([callback]: ?(error: ?Error) => void)\n")),(0,a.kt)("p",null,"\u6e05\u7a7a",(0,a.kt)("em",{parentName:"p"},"\u5168\u90e8\u7684"),(0,a.kt)("inlineCode",{parentName:"p"},"AsyncStorage"),"\u6570\u636e\uff0c\u4e0d\u8bba\u6765\u81ea\u4ec0\u4e48\u5e93\u6216\u8c03\u7528\u8005\u3002\u901a\u5e38\u4e0d\u5e94\u8be5\u8c03\u7528\u8fd9\u4e2a\u51fd\u6570\u2014\u2014\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"removeItem"),"\u6216\u8005",(0,a.kt)("inlineCode",{parentName:"p"},"multiRemove"),"\u6765\u6e05\u9664\u4f60\u81ea\u5df1\u7684 key\u3002\u8fd4\u56de\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"\u5bf9\u8c61\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"\u540d\u79f0"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"\u5fc5\u9700"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"callback"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"?(error: ?Error) => void"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u5426"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u53d1\u751f\u9519\u8bef\u65f6\u7684\u56de\u8c03\u51fd\u6570")))),(0,a.kt)("hr",null),(0,a.kt)("h3",u({},{id:"getallkeys"}),(0,a.kt)("inlineCode",{parentName:"h3"},"getAllKeys()")),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-jsx"}),"static getAllKeys([callback]: ?(error: ?Error, keys: ?Array<string>) => void)\n")),(0,a.kt)("p",null,"\u83b7\u53d6",(0,a.kt)("em",{parentName:"p"},"\u6240\u6709"),"\u672c\u5e94\u7528\u53ef\u4ee5\u8bbf\u95ee\u5230\u7684\u6570\u636e\uff0c\u4e0d\u8bba\u6765\u81ea\u4ec0\u4e48\u5e93\u6216\u8c03\u7528\u8005\u3002\u8fd4\u56de\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"\u5bf9\u8c61\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"\u540d\u79f0"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"\u5fc5\u9700"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"callback"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"?(error: ?Error, keys: ?Array<string>) => void")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u5426"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u5b8c\u6210\u540e\u7684\u56de\u8c03\u51fd\u6570\u3002")))),(0,a.kt)("hr",null),(0,a.kt)("h3",u({},{id:"flushgetrequests"}),(0,a.kt)("inlineCode",{parentName:"h3"},"flushGetRequests()")),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-jsx"}),"static flushGetRequests(): [object Object]\n")),(0,a.kt)("p",null,"\u6e05\u9664\u6240\u6709\u8fdb\u884c\u4e2d\u7684\u67e5\u8be2\u64cd\u4f5c\u3002"),(0,a.kt)("hr",null),(0,a.kt)("h3",u({},{id:"multiget"}),(0,a.kt)("inlineCode",{parentName:"h3"},"multiGet()")),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-jsx"}),"static multiGet(keys: Array<string>, [callback]: ?(errors: ?Array<Error>, result: ?Array<Array<string>>) => void)\n")),(0,a.kt)("p",null,"\u83b7\u53d6 keys \u6240\u5305\u542b\u7684\u6240\u6709\u5b57\u6bb5\u7684\u503c\uff0c\u5176\u56de\u8c03\u51fd\u6570\u4f1a\u4f20\u5165\u4e00\u4e2a key-value \u6570\u7ec4\u5f62\u5f0f\u7684\u6570\u7ec4\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{}),"multiGet(['k1', 'k2'], cb) -> cb([['k1', 'val1'], ['k2', 'val2']])\n")),(0,a.kt)("p",null,"\u540c\u6837\u4f1a\u8fd4\u56de",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"\u5bf9\u8c61\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"\u540d\u79f0"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"\u5fc5\u9700"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"keys"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"Array<string>")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u662f"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u8981\u83b7\u53d6\u7684\u5b57\u6bb5\u540d\u6570\u7ec4")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"callback"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"?(errors: ?Array<Error>, result: ?Array<Array<string>>) => void")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u5426"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u5b8c\u6210\u540e\u7684\u56de\u8c03\u51fd\u6570")))),(0,a.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-jsx"}),"AsyncStorage.getAllKeys((err, keys) => {\n  AsyncStorage.multiGet(keys, (err, stores) => {\n    stores.map((result, i, store) => {\n      // get at each store's key/value so you can work with it\n      let key = store[i][0];\n      let value = store[i][1];\n    });\n  });\n});\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",u({},{id:"multiset"}),(0,a.kt)("inlineCode",{parentName:"h3"},"multiSet()")),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-jsx"}),"static multiSet(keyValuePairs: Array<Array<string>>, [callback]: ?(errors: ?Array<Error>) => void)\n")),(0,a.kt)("p",null,"multiSet \u548c multiMerge \u90fd\u63a5\u53d7\u4e00\u4e2a\u4e0e multiGet \u8f93\u51fa\u503c\u4e00\u81f4\u7684 key-value \u6570\u7ec4\u7684\u6570\u7ec4\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{}),"multiSet([['k1', 'val1'], ['k2', 'val2']], cb);\n")),(0,a.kt)("p",null,"\u8fd4\u56de\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"\u5bf9\u8c61\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"\u540d\u79f0"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"\u5fc5\u9700"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"keyValuePairs"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"Array<Array<string>>")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u662f"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u8981\u5199\u5165\u7684\u5b57\u6bb5\u540d\u6570\u7ec4\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"callback"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"?(errors: ?Array<Error>) => void")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u5426"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u5b8c\u6210\u540e\u7684\u56de\u8c03\u51fd\u6570\u3002")))),(0,a.kt)("hr",null),(0,a.kt)("h3",u({},{id:"multiremove"}),(0,a.kt)("inlineCode",{parentName:"h3"},"multiRemove()")),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-jsx"}),"static multiRemove(keys: Array<string>, [callback]: ?(errors: ?Array<Error>) => void)\n")),(0,a.kt)("p",null,"\u5220\u9664\u6240\u6709",(0,a.kt)("inlineCode",{parentName:"p"},"keys"),"\u5b57\u6bb5\u540d\u6570\u7ec4\u4e2d\u7684\u6570\u636e\u3002\u8fd4\u56de\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"\u5bf9\u8c61\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"\u540d\u79f0"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"\u5fc5\u9700"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"keys"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"Array<string>")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u662f"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u8981\u5220\u9664\u7684\u5b57\u6bb5\u540d\u6570\u7ec4\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"callback"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"?(errors: ?Array<Error>) => void")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u5426"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u5b8c\u6210\u540e\u7684\u56de\u8c03\u51fd\u6570\u3002")))),(0,a.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-jsx"}),"let keys = ['k1', 'k2'];\nAsyncStorage.multiRemove(keys, (err) => {\n  // \u5982\u679ck1,k2\u5b57\u6bb5\u503c\u5b58\u5728\u7684\u8bdd\u5c31\u4f1a\u88ab\u5220\u9664\n});\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",u({},{id:"multimerge"}),(0,a.kt)("inlineCode",{parentName:"h3"},"multiMerge()")),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-jsx"}),"static multiMerge(keyValuePairs: Array<Array<string>>, [callback]: ?(errors: ?Array<Error>) => void)\n")),(0,a.kt)("p",null,"\u5c06\u591a\u4e2a\u8f93\u5165\u7684\u503c\u548c\u5df2\u6709\u7684\u503c\u5408\u5e76\uff0c\u8981\u6c42\u90fd\u662f\u5b57\u7b26\u4e32\u5316\u7684 JSON\u3002\u8fd4\u56de\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"\u5bf9\u8c61\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a"),"\u8fd8\u6ca1\u6709\u88ab\u6240\u6709\u539f\u751f\u5b9e\u73b0\u90fd\u652f\u6301\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"\u540d\u79f0"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"\u5fc5\u9700"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"keyValuePairs"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"Array<Array<string>>")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u662f"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u8981\u5408\u5e76\u7684\u5b57\u6bb5\u540d\u6570\u7ec4\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"callback"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"?(errors: ?Array<Error>) => void")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u5426"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u5b8c\u6210\u540e\u7684\u56de\u8c03\u51fd\u6570\u3002")))),(0,a.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-jsx"}),'// \u7b2c\u4e00\u4e2a\u7528\u6237\u7684\u521d\u59cb\u6570\u636e\nlet UID234_object = {\n  name: \'Chris\',\n  age: 30,\n  traits: { hair: \'brown\', eyes: \'brown\' }\n};\n\n// \u7b2c\u4e00\u4e2a\u7528\u6237\u7684\u589e\u91cf\u6570\u636e\nlet UID234_delta = {\n  age: 31,\n  traits: { eyes: \'blue\', shoe_size: 10 }\n};\n\n// \u7b2c\u4e8c\u4e2a\u7528\u6237\u7684\u521d\u59cb\u6570\u636e\nlet UID345_object = {\n  name: \'Marge\',\n  age: 25,\n  traits: { hair: \'blonde\', eyes: \'blue\' }\n};\n\n// \u7b2c\u4e8c\u4e2a\u7528\u6237\u7684\u589e\u91cf\u6570\u636e\nlet UID345_delta = {\n  age: 26,\n  traits: { eyes: \'green\', shoe_size: 6 }\n};\n\nlet multi_set_pairs = [\n  [\'UID234\', JSON.stringify(UID234_object)],\n  [\'UID345\', JSON.stringify(UID345_object)]\n];\nlet multi_merge_pairs = [\n  [\'UID234\', JSON.stringify(UID234_delta)],\n  [\'UID345\', JSON.stringify(UID345_delta)]\n];\n\nAsyncStorage.multiSet(multi_set_pairs, (err) => {\n  AsyncStorage.multiMerge(multi_merge_pairs, (err) => {\n    AsyncStorage.multiGet([\'UID234\', \'UID345\'], (err, stores) => {\n      stores.map((result, i, store) => {\n        let key = store[i][0];\n        let val = store[i][1];\n        console.log(key, val);\n      });\n    });\n  });\n});\n\n// Console log results:\n// => UID234 {"name":"Chris","age":31,"traits":{"shoe_size":10,"hair":"brown","eyes":"blue"}}\n// => UID345 {"name":"Marge","age":26,"traits":{"shoe_size":6,"hair":"blonde","eyes":"green"}}\n')))}b.isMDXComponent=!0}}]);