"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[2496],{35318:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return u}});var a=t(27378);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},s=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(t),u=i,N=d["".concat(l,".").concat(u)]||d[u]||m[u]||o;return t?a.createElement(N,r(r({ref:n},s),{},{components:t})):a.createElement(N,r({ref:n},s))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=d;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,r[1]=p;for(var c=2;c<o;c++)r[c]=t[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},86195:function(e,n,t){t.r(n),t.d(n,{assets:function(){return C},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return d},metadata:function(){return N},toc:function(){return g}});var a=t(35318),i=Object.defineProperty,o=Object.defineProperties,r=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,n,t)=>n in e?i(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,m=(e,n)=>{for(var t in n||(n={}))l.call(n,t)&&s(e,t,n[t]);if(p)for(var t of p(n))c.call(n,t)&&s(e,t,n[t]);return e};const d={id:"native-components-ios",title:"iOS \u539f\u751fUI\u7ec4\u4ef6"},u=void 0,N={unversionedId:"native-components-ios",id:"native-components-ios",title:"iOS \u539f\u751fUI\u7ec4\u4ef6",description:"\u5728\u5982\u4eca\u7684 App \u4e2d\uff0c\u5df2\u7ecf\u6709\u6210\u5343\u4e0a\u4e07\u7684\u539f\u751f UI \u90e8\u4ef6\u4e86\u2014\u2014\u5176\u4e2d\u7684\u4e00\u4e9b\u662f\u5e73\u53f0\u7684\u4e00\u90e8\u5206\uff0c\u53e6\u4e00\u4e9b\u53ef\u80fd\u6765\u81ea\u4e8e\u4e00\u4e9b\u7b2c\u4e09\u65b9\u5e93\uff0c\u800c\u4e14\u53ef\u80fd\u4f60\u81ea\u5df1\u8fd8\u6536\u85cf\u4e86\u5f88\u591a\u3002React Native \u5df2\u7ecf\u5c01\u88c5\u4e86\u5927\u90e8\u5206\u6700\u5e38\u89c1\u7684\u7ec4\u4ef6\uff0c\u8b6c\u5982ScrollView\u548cTextInput\uff0c\u4f46\u4e0d\u53ef\u80fd\u5c01\u88c5\u5168\u90e8\u7ec4\u4ef6\u3002\u800c\u4e14\uff0c\u8bf4\u4e0d\u5b9a\u4f60\u66fe\u7ecf\u4e3a\u81ea\u5df1\u4ee5\u524d\u7684 App \u8fd8\u5c01\u88c5\u8fc7\u4e00\u4e9b\u7ec4\u4ef6\uff0cReact Native \u80af\u5b9a\u6ca1\u6cd5\u5305\u542b\u5b83\u4eec\u3002\u5e78\u8fd0\u7684\u662f\uff0c\u5728 React Naitve \u5e94\u7528\u7a0b\u5e8f\u4e2d\u5c01\u88c5\u548c\u690d\u5165\u5df2\u6709\u7684\u7ec4\u4ef6\u975e\u5e38\u7b80\u5355\u3002",source:"@site/../cndocs/native-components-ios.md",sourceDirName:".",slug:"/native-components-ios",permalink:"/docs/next/native-components-ios",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../cndocs/native-components-ios.md",tags:[],version:"current",frontMatter:{id:"native-components-ios",title:"iOS \u539f\u751fUI\u7ec4\u4ef6"},sidebar:"docs",previous:{title:"Android \u539f\u751fUI\u7ec4\u4ef6",permalink:"/docs/next/native-components-android"},next:{title:"\u76f4\u63a5\u64cd\u4f5c",permalink:"/docs/next/direct-manipulation"}},C={},g=[{value:"iOS MapView \u793a\u4f8b",id:"ios-mapview-\u793a\u4f8b",level:2},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",level:2},{value:"\u4e8b\u4ef6",id:"\u4e8b\u4ef6",level:2},{value:"Handling multiple native views",id:"handling-multiple-native-views",level:2},{value:"\u6837\u5f0f",id:"\u6837\u5f0f",level:2}],k={toc:g};function h(e){var n,t=e,{components:i}=t,s=((e,n)=>{var t={};for(var a in e)l.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&p)for(var a of p(e))n.indexOf(a)<0&&c.call(e,a)&&(t[a]=e[a]);return t})(t,["components"]);return(0,a.kt)("wrapper",(n=m(m({},k),s),o(n,r({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"\u5728\u5982\u4eca\u7684 App \u4e2d\uff0c\u5df2\u7ecf\u6709\u6210\u5343\u4e0a\u4e07\u7684\u539f\u751f UI \u90e8\u4ef6\u4e86\u2014\u2014\u5176\u4e2d\u7684\u4e00\u4e9b\u662f\u5e73\u53f0\u7684\u4e00\u90e8\u5206\uff0c\u53e6\u4e00\u4e9b\u53ef\u80fd\u6765\u81ea\u4e8e\u4e00\u4e9b\u7b2c\u4e09\u65b9\u5e93\uff0c\u800c\u4e14\u53ef\u80fd\u4f60\u81ea\u5df1\u8fd8\u6536\u85cf\u4e86\u5f88\u591a\u3002React Native \u5df2\u7ecf\u5c01\u88c5\u4e86\u5927\u90e8\u5206\u6700\u5e38\u89c1\u7684\u7ec4\u4ef6\uff0c\u8b6c\u5982",(0,a.kt)("inlineCode",{parentName:"p"},"ScrollView"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"TextInput"),"\uff0c\u4f46\u4e0d\u53ef\u80fd\u5c01\u88c5\u5168\u90e8\u7ec4\u4ef6\u3002\u800c\u4e14\uff0c\u8bf4\u4e0d\u5b9a\u4f60\u66fe\u7ecf\u4e3a\u81ea\u5df1\u4ee5\u524d\u7684 App \u8fd8\u5c01\u88c5\u8fc7\u4e00\u4e9b\u7ec4\u4ef6\uff0cReact Native \u80af\u5b9a\u6ca1\u6cd5\u5305\u542b\u5b83\u4eec\u3002\u5e78\u8fd0\u7684\u662f\uff0c\u5728 React Naitve \u5e94\u7528\u7a0b\u5e8f\u4e2d\u5c01\u88c5\u548c\u690d\u5165\u5df2\u6709\u7684\u7ec4\u4ef6\u975e\u5e38\u7b80\u5355\u3002"),(0,a.kt)("p",null,"\u548c\u539f\u751f\u6a21\u5757\u5411\u5bfc\u4e00\u6837\uff0c\u672c\u5411\u5bfc\u4e5f\u662f\u4e00\u4e2a\u76f8\u5bf9\u9ad8\u7ea7\u7684\u5411\u5bfc\uff0c\u6211\u4eec\u5047\u8bbe\u4f60\u5df2\u7ecf\u5bf9 iOS \u7f16\u7a0b\u9887\u6709\u7ecf\u9a8c\u3002\u672c\u5411\u5bfc\u4f1a\u5f15\u5bfc\u4f60\u5982\u4f55\u6784\u5efa\u4e00\u4e2a\u539f\u751f UI \u7ec4\u4ef6\uff0c\u5e26\u9886\u4f60\u4e86\u89e3 React Native \u6838\u5fc3\u5e93\u4e2d",(0,a.kt)("inlineCode",{parentName:"p"},"MapView"),"\u7ec4\u4ef6\u7684\u5177\u4f53\u5b9e\u73b0\u3002"),(0,a.kt)("h2",m({},{id:"ios-mapview-\u793a\u4f8b"}),"iOS MapView \u793a\u4f8b"),(0,a.kt)("p",null,"\u5047\u8bbe\u6211\u4eec\u8981\u628a\u5730\u56fe\u7ec4\u4ef6\u690d\u5165\u5230\u6211\u4eec\u7684 App \u4e2d\u2014\u2014\u6211\u4eec\u7528\u5230\u7684\u662f",(0,a.kt)("a",m({parentName:"p"},{href:"https://developer.apple.com/library/prerelease/mac/documentation/MapKit/Reference/MKMapView_Class/index.html"}),(0,a.kt)("inlineCode",{parentName:"a"},"MKMapView")),"\uff0c\u800c\u73b0\u5728\u53ea\u9700\u8981\u8ba9\u5b83\u53ef\u4ee5\u5728 Javascript \u7aef\u4f7f\u7528\u3002"),(0,a.kt)("p",null,"\u539f\u751f\u89c6\u56fe\u90fd\u9700\u8981\u88ab\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"RCTViewManager"),"\u7684\u5b50\u7c7b\u6765\u521b\u5efa\u548c\u7ba1\u7406\u3002\u8fd9\u4e9b\u7ba1\u7406\u5668\u5728\u529f\u80fd\u4e0a\u6709\u4e9b\u7c7b\u4f3c\u201c\u89c6\u56fe\u63a7\u5236\u5668\u201d\uff0c\u4f46\u5b83\u4eec\u5b9e\u9645\u90fd\u662f\u5355\u4f8b - React Native \u53ea\u4f1a\u4e3a\u6bcf\u4e2a\u7ba1\u7406\u5668\u521b\u5efa\u4e00\u4e2a\u5b9e\u4f8b\u3002\u5b83\u4eec\u521b\u5efa\u539f\u751f\u7684\u89c6\u56fe\u5e76\u63d0\u4f9b\u7ed9",(0,a.kt)("inlineCode",{parentName:"p"},"RCTUIManager"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"RCTUIManager"),"\u5219\u4f1a\u53cd\u8fc7\u6765\u59d4\u6258\u5b83\u4eec\u5728\u9700\u8981\u7684\u65f6\u5019\u53bb\u8bbe\u7f6e\u548c\u66f4\u65b0\u89c6\u56fe\u7684\u5c5e\u6027\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"RCTViewManager"),"\u8fd8\u4f1a\u4ee3\u7406\u89c6\u56fe\u7684\u6240\u6709\u59d4\u6258\uff0c\u5e76\u7ed9 JavaScript \u53d1\u56de\u5bf9\u5e94\u7684\u4e8b\u4ef6\u3002"),(0,a.kt)("p",null,"\u63d0\u4f9b\u539f\u751f\u89c6\u56fe\u5f88\u7b80\u5355\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u9996\u5148\u521b\u5efa\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"li"},"RCTViewManager"),"\u7684\u5b50\u7c7b\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6dfb\u52a0",(0,a.kt)("inlineCode",{parentName:"li"},"RCT_EXPORT_MODULE()"),"\u5b8f\u6807\u8bb0\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5b9e\u73b0",(0,a.kt)("inlineCode",{parentName:"li"},"-(UIView *)view"),"\u65b9\u6cd5\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-objectivec"}),"// RNTMapManager.m\n#import <MapKit/MapKit.h>\n\n#import <React/RCTViewManager.h>\n\n@interface RNTMapManager : RCTViewManager\n@end\n\n@implementation RNTMapManager\n\nRCT_EXPORT_MODULE(RNTMap)\n\n- (UIView *)view\n{\n  return [[MKMapView alloc] init];\n}\n\n@end\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a")," \u8bf7\u4e0d\u8981\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"-view"),"\u4e2d\u7ed9",(0,a.kt)("inlineCode",{parentName:"p"},"UIView"),"\u5b9e\u4f8b\u8bbe\u7f6e",(0,a.kt)("inlineCode",{parentName:"p"},"frame"),"\u6216\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"backgroundColor"),"\u5c5e\u6027\u3002\u4e3a\u4e86\u548c JavaScript \u7aef\u7684\u5e03\u5c40\u5c5e\u6027\u4e00\u81f4\uff0cReact Native \u4f1a\u8986\u76d6\u4f60\u6240\u8bbe\u7f6e\u7684\u503c\u3002 \u5982\u679c\u60a8\u9700\u8981\u8fd9\u79cd\u7c92\u5ea6\u7684\u64cd\u4f5c\u7684\u8bdd\uff0c\u6bd4\u8f83\u597d\u7684\u65b9\u6cd5\u662f\u7528\u53e6\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"UIView"),"\u6765\u5c01\u88c5\u4f60\u60f3\u64cd\u4f5c\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"UIView"),"\u5b9e\u4f8b\uff0c\u5e76\u8fd4\u56de\u5916\u5c42\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"UIView"),"\u3002\u8bf7\u53c2\u9605",(0,a.kt)("a",m({parentName:"p"},{href:"https://github.com/facebook/react-native/issues/2948"}),"Issue 2948"),"\u83b7\u53d6\u66f4\u591a\u4fe1\u606f\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5728\u4e0a\u4f8b\u4e2d\uff0c\u6211\u4eec\u7684\u7c7b\u540d\u4f7f\u7528\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"RNT"),"\u524d\u7f00\u4ee5\u907f\u514d\u4e0e\u5176\u5b83\u6846\u67b6\u4ea7\u751f\u547d\u540d\u51b2\u7a81\u3002\u82f9\u679c\u81ea\u6709\u6846\u67b6\u4f7f\u7528\u4e86\u4e24\u4e2a\u5b57\u7b26\u7684\u524d\u7f00\uff0c\u800c React Native \u5219\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"RCT"),"\u4f5c\u4e3a\u524d\u7f00\u3002\u4e3a\u907f\u514d\u547d\u540d\u51b2\u7a81\uff0c\u6211\u4eec\u5efa\u8bae\u60a8\u5728\u81ea\u5df1\u7684\u7c7b\u4e2d\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"RNT"),"\u4ee5\u5916\u7684\u5176\u5b83\u4e09\u5b57\u7b26\u524d\u7f00\u3002")),(0,a.kt)("p",null,"\u5b8c\u6210\u4e0a\u9762\u8fd9\u4e9b\u4ee3\u7801\u540e\uff0c\u8bf7\u4e00\u5b9a\u8bb0\u5f97\u8981\u91cd\u65b0\u7f16\u8bd1\uff01\uff08\u8fd0\u884c",(0,a.kt)("inlineCode",{parentName:"p"},"yarn ios"),"\u547d\u4ee4\uff09"),(0,a.kt)("p",null,"\u63a5\u4e0b\u6765\u4f60\u9700\u8981\u4e00\u4e9b Javascript \u4ee3\u7801\u6765\u8ba9\u8fd9\u4e2a\u89c6\u56fe\u53d8\u6210\u4e00\u4e2a\u53ef\u7528\u7684 React \u7ec4\u4ef6\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),"// MapView.js\n\nimport { requireNativeComponent } from 'react-native';\n\n// requireNativeComponent \u81ea\u52a8\u628a'RNTMap'\u89e3\u6790\u4e3a'RNTMapManager'\nexport default requireNativeComponent('RNTMap');\n\n// MyApp.js\n\nimport MapView from './MapView.js';\n\n...\n\nrender() {\n  return <MapView style={{ flex: 1 }} />;\n}\n")),(0,a.kt)("p",null,"\u8bf7\u786e\u8ba4\u6b64\u5904\u4f7f\u7528\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"RNTMap")," \u3002\u6211\u4eec\u5728\u6b64\u5bf9 manager \u4f7f\u7528\u4e86 require \u64cd\u4f5c\uff0c\u4ee5\u66b4\u9732 manager \u7684\u89c6\u56fe\uff0c\u5e76\u4e8e Javascript \u4e2d\u4f7f\u7528\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a")," \u5728\u6e32\u67d3\u65f6\uff0c\u4e0d\u8981\u5fd8\u8bb0\u5e03\u5c40\u89c6\u56fe\uff0c\u5426\u5219\u60a8\u53ea\u80fd\u9762\u5bf9\u4e00\u4e2a\u7a7a\u8361\u8361\u7684\u5c4f\u5e55\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),"  render() {\n    return <MapView style={{flex: 1}} />;\n  }\n")),(0,a.kt)("p",null,"\u73b0\u5728\u6211\u4eec\u5c31\u5df2\u7ecf\u5b9e\u73b0\u4e86\u4e00\u4e2a\u5b8c\u6574\u529f\u80fd\u7684\u5730\u56fe\u7ec4\u4ef6\u4e86\uff0c\u8bf8\u5982\u634f\u653e\u548c\u5176\u5b83\u7684\u624b\u52bf\u90fd\u5df2\u7ecf\u5b8c\u6574\u652f\u6301\u3002\u4f46\u662f\u73b0\u5728\u6211\u4eec\u8fd8\u4e0d\u80fd\u771f\u6b63\u7684\u4ece Javascript \u7aef\u63a7\u5236\u5b83\u3002(\u256f\ufe4f\u2570)"),(0,a.kt)("h2",m({},{id:"\u5c5e\u6027"}),"\u5c5e\u6027"),(0,a.kt)("p",null,"\u6211\u4eec\u80fd\u8ba9\u8fd9\u4e2a\u7ec4\u4ef6\u53d8\u5f97\u66f4\u5f3a\u5927\u7684\u7b2c\u4e00\u4ef6\u4e8b\u60c5\u5c31\u662f\u8981\u80fd\u591f\u5c01\u88c5\u4e00\u4e9b\u539f\u751f\u5c5e\u6027\u4f9b Javascript \u4f7f\u7528\u3002\u4e3e\u4f8b\u6765\u8bf4\uff0c\u6211\u4eec\u5e0c\u671b\u80fd\u591f\u7981\u7528\u624b\u6307\u634f\u653e\u64cd\u4f5c\uff0c\u7136\u540e\u6307\u5b9a\u4e00\u4e2a\u521d\u59cb\u7684\u5730\u56fe\u53ef\u89c1\u533a\u57df\u3002\u7981\u7528\u634f\u653e\u64cd\u4f5c\u53ea\u9700\u8981\u4e00\u4e2a\u5e03\u5c14\u503c\u7c7b\u578b\u7684\u5c5e\u6027\u5c31\u884c\u4e86\uff0c\u6240\u4ee5\u6211\u4eec\u6dfb\u52a0\u8fd9\u4e48\u4e00\u884c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-objectivec"}),"// RNTMapManager.m\nRCT_EXPORT_VIEW_PROPERTY(zoomEnabled, BOOL)\n")),(0,a.kt)("p",null,"\u6ce8\u610f\u6211\u4eec\u73b0\u5728\u628a\u7c7b\u578b\u58f0\u660e\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"BOOL"),"\u7c7b\u578b\u2014\u2014React Native \u7528",(0,a.kt)("inlineCode",{parentName:"p"},"RCTConvert"),"\u6765\u5728 JavaScript \u548c\u539f\u751f\u4ee3\u7801\u4e4b\u95f4\u5b8c\u6210\u7c7b\u578b\u8f6c\u6362\u3002\u5982\u679c\u8f6c\u6362\u65e0\u6cd5\u5b8c\u6210\uff0c\u4f1a\u4ea7\u751f\u4e00\u4e2a\u201c\u7ea2\u5c4f\u201d\u7684\u62a5\u9519\u63d0\u793a\uff0c\u8fd9\u6837\u4f60\u5c31\u80fd\u7acb\u5373\u77e5\u9053\u4ee3\u7801\u4e2d\u51fa\u73b0\u4e86\u95ee\u9898\u3002\u5982\u679c\u4e00\u5207\u8fdb\u5c55\u987a\u5229\uff0c\u4e0a\u9762\u8fd9\u4e2a\u5b8f\u5c31\u5df2\u7ecf\u5305\u542b\u4e86\u5bfc\u51fa\u5c5e\u6027\u7684\u5168\u90e8\u5b9e\u73b0\u3002"),(0,a.kt)("p",null,"\u73b0\u5728\u8981\u60f3\u7981\u7528\u634f\u653e\u64cd\u4f5c\uff0c\u6211\u4eec\u53ea\u9700\u8981\u5728 JS \u91cc\u8bbe\u7f6e\u5bf9\u5e94\u7684\u5c5e\u6027\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),"// MyApp.js\n<MapView zoomEnabled={false} style={{ flex: 1 }} />\n")),(0,a.kt)("p",null,"\u4f46\u8fd9\u6837\u5e76\u4e0d\u80fd\u5f88\u597d\u7684\u8bf4\u660e\u8fd9\u4e2a\u7ec4\u4ef6\u7684\u7528\u6cd5\u2014\u2014\u7528\u6237\u8981\u60f3\u77e5\u9053\u6211\u4eec\u7684\u7ec4\u4ef6\u6709\u54ea\u4e9b\u5c5e\u6027\u53ef\u4ee5\u7528\uff0c\u4ee5\u53ca\u53ef\u4ee5\u53d6\u4ec0\u4e48\u6837\u7684\u503c\uff0c\u4ed6\u4e0d\u5f97\u4e0d\u4e00\u8def\u7ffb\u5230 Objective-C \u7684\u4ee3\u7801\u3002\u8981\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u6211\u4eec\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a\u5c01\u88c5\u7ec4\u4ef6\uff0c\u5e76\u4e14\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"PropTypes"),"\u6765\u8bf4\u660e\u8fd9\u4e2a\u7ec4\u4ef6\u7684\u63a5\u53e3\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),"// MapView.js\nimport PropTypes from 'prop-types';\nimport React from 'react';\nimport { requireNativeComponent } from 'react-native';\n\nclass MapView extends React.Component {\n  render() {\n    return <RNTMap {...this.props} />;\n  }\n}\n\nMapView.propTypes = {\n  /**\n   * A Boolean value that determines whether the user may use pinch\n   * gestures to zoom in and out of the map.\n   */\n  zoomEnabled: PropTypes.bool\n};\n\nconst RNTMap = requireNativeComponent('RNTMap', MapView);\n\nexport default MapView;\n")),(0,a.kt)("p",null,"\u73b0\u5728\u6211\u4eec\u6709\u4e86\u4e00\u4e2a\u5c01\u88c5\u597d\u7684\u7ec4\u4ef6\uff0c\u8fd8\u6709\u4e86\u4e00\u4e9b\u6ce8\u91ca\u6587\u6863\uff0c\u7528\u6237\u4f7f\u7528\u8d77\u6765\u4e5f\u66f4\u65b9\u4fbf\u4e86\u3002\u6ce8\u610f\u6211\u4eec\u73b0\u5728\u628a",(0,a.kt)("inlineCode",{parentName:"p"},"requireNativeComponent"),"\u7684\u7b2c\u4e8c\u4e2a\u53c2\u6570\u4ece null \u53d8\u6210\u4e86\u7528\u4e8e\u5c01\u88c5\u7684\u7ec4\u4ef6",(0,a.kt)("inlineCode",{parentName:"p"},"MapView"),"\u3002\u8fd9\u4f7f\u5f97 React Native \u7684\u5e95\u5c42\u6846\u67b6\u53ef\u4ee5\u68c0\u67e5\u539f\u751f\u5c5e\u6027\u548c\u5305\u88c5\u7c7b\u7684\u5c5e\u6027\u662f\u5426\u4e00\u81f4\uff0c\u6765\u51cf\u5c11\u51fa\u73b0\u95ee\u9898\u7684\u53ef\u80fd\u3002"),(0,a.kt)("p",null,"\u73b0\u5728\uff0c\u8ba9\u6211\u4eec\u6dfb\u52a0\u4e00\u4e2a\u66f4\u590d\u6742\u4e9b\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"region"),"\u5c5e\u6027\u3002\u6211\u4eec\u9996\u5148\u6dfb\u52a0\u539f\u751f\u4ee3\u7801\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-objectivec"}),"// RNTMapManager.m\nRCT_CUSTOM_VIEW_PROPERTY(region, MKCoordinateRegion, MKMapView)\n{\n  [view setRegion:json ? [RCTConvert MKCoordinateRegion:json] : defaultView.region animated:YES];\n}\n")),(0,a.kt)("p",null,"\u8fd9\u6bb5\u4ee3\u7801\u6bd4\u521a\u624d\u7684\u4e00\u4e2a\u7b80\u5355\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"BOOL"),"\u8981\u590d\u6742\u7684\u591a\u4e86\u3002\u73b0\u5728\u6211\u4eec\u591a\u4e86\u4e00\u4e2a\u9700\u8981\u505a\u7c7b\u578b\u8f6c\u6362\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"MKCoordinateRegion"),"\u7c7b\u578b\uff0c\u8fd8\u6dfb\u52a0\u4e86\u4e00\u90e8\u5206\u81ea\u5b9a\u4e49\u7684\u4ee3\u7801\uff0c\u8fd9\u6837\u5f53\u6211\u4eec\u5728 JS \u91cc\u6539\u53d8\u5730\u56fe\u7684\u53ef\u89c6\u533a\u57df\u7684\u65f6\u5019\uff0c\u89c6\u89d2\u4f1a\u5e73\u6ed1\u5730\u79fb\u52a8\u8fc7\u53bb\u3002\u5728\u6211\u4eec\u63d0\u4f9b\u7684\u51fd\u6570\u4f53\u5185\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"json"),"\u4ee3\u8868\u4e86 JS \u4e2d\u4f20\u9012\u7684\u5c1a\u672a\u89e3\u6790\u7684\u539f\u59cb\u503c\u3002\u51fd\u6570\u91cc\u8fd8\u6709\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"view"),"\u53d8\u91cf\uff0c\u4f7f\u5f97\u6211\u4eec\u53ef\u4ee5\u8bbf\u95ee\u5230\u5bf9\u5e94\u7684\u89c6\u56fe\u5b9e\u4f8b\u3002\u6700\u540e\uff0c\u8fd8\u6709\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"defaultView"),"\u5bf9\u8c61\uff0c\u8fd9\u6837\u5f53 JS \u7ed9\u6211\u4eec\u53d1\u9001 null \u7684\u65f6\u5019\uff0c\u53ef\u4ee5\u628a\u89c6\u56fe\u7684\u8fd9\u4e2a\u5c5e\u6027\u91cd\u7f6e\u56de\u9ed8\u8ba4\u503c\u3002"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u4e3a\u89c6\u56fe\u7f16\u5199\u4efb\u4f55\u4f60\u6240\u9700\u8981\u7684\u8f6c\u6362\u51fd\u6570\u2014\u2014\u4e0b\u9762\u5c31\u662f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"RCTConvert")," \u5b9e\u73b0\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"MKCoordinateRegion"),"\u3002\u5b83\u4f7f\u7528\u4e86 ReactNative \u4e2d\u5df2\u7ecf\u5b58\u5728\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"RCTConvert+CoreLocation"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-objectivec"}),'// RNTMapManager.m\n\n#import "RCTConvert+Mapkit.h"\n\n// RCTConvert+Mapkit.h\n\n#import <MapKit/MapKit.h>\n#import <React/RCTConvert.h>\n#import <CoreLocation/CoreLocation.h>\n#import <React/RCTConvert+CoreLocation.h>\n\n@interface RCTConvert (Mapkit)\n\n+ (MKCoordinateSpan)MKCoordinateSpan:(id)json;\n+ (MKCoordinateRegion)MKCoordinateRegion:(id)json;\n\n@end\n\n@implementation RCTConvert(MapKit)\n\n+ (MKCoordinateSpan)MKCoordinateSpan:(id)json\n{\n  json = [self NSDictionary:json];\n  return (MKCoordinateSpan){\n    [self CLLocationDegrees:json[@"latitudeDelta"]],\n    [self CLLocationDegrees:json[@"longitudeDelta"]]\n  };\n}\n\n+ (MKCoordinateRegion)MKCoordinateRegion:(id)json\n{\n  return (MKCoordinateRegion){\n    [self CLLocationCoordinate2D:json],\n    [self MKCoordinateSpan:json]\n  };\n}\n\n@end\n')),(0,a.kt)("p",null,"\u8fd9\u4e9b\u8f6c\u6362\u51fd\u6570\u88ab\u8bbe\u8ba1\u4e3a\u53ef\u4ee5\u5b89\u5168\u7684\u5904\u7406\u4efb\u4f55 JS \u6254\u8fc7\u6765\u7684 JSON\uff1a\u5f53\u6709\u4efb\u4f55\u7f3a\u5c11\u7684\u952e\u6216\u8005\u5176\u5b83\u95ee\u9898\u53d1\u751f\u7684\u65f6\u5019\uff0c\u663e\u793a\u4e00\u4e2a\u201c\u7ea2\u5c4f\u201d\u7684\u9519\u8bef\u63d0\u793a\u3002"),(0,a.kt)("p",null,"\u4e3a\u4e86\u5b8c\u6210",(0,a.kt)("inlineCode",{parentName:"p"},"region"),"\u5c5e\u6027\u7684\u652f\u6301\uff0c\u6211\u4eec\u8fd8\u9700\u8981\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"propTypes"),"\u91cc\u6dfb\u52a0\u76f8\u5e94\u7684\u8bf4\u660e\uff08\u5426\u5219\u6211\u4eec\u4f1a\u7acb\u523b\u6536\u5230\u4e00\u4e2a\u9519\u8bef\u63d0\u793a\uff09\uff0c\u7136\u540e\u5c31\u53ef\u4ee5\u50cf\u4f7f\u7528\u5176\u4ed6\u5c5e\u6027\u4e00\u6837\u4f7f\u7528\u4e86\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),"// MapView.js\n\nMapView.propTypes = {\n  /**\n   * A Boolean value that determines whether the user may use pinch\n   * gestures to zoom in and out of the map.\n   */\n  zoomEnabled: PropTypes.bool,\n\n  /**\n   * \u5730\u56fe\u8981\u663e\u793a\u7684\u533a\u57df\u3002\n   *\n   * \u533a\u57df\u7531\u4e2d\u5fc3\u70b9\u5750\u6807\u548c\u533a\u57df\u8303\u56f4\u5750\u6807\u6765\u5b9a\u4e49\u3002\n   *\n   */\n  region: PropTypes.shape({\n    /**\n     * \u5730\u56fe\u4e2d\u5fc3\u70b9\u7684\u5750\u6807\u3002\n     */\n    latitude: PropTypes.number.isRequired,\n    longitude: PropTypes.number.isRequired,\n\n    /**\n     * \u6700\u5c0f/\u6700\u5927\u7ecf\u3001\u7eac\u5ea6\u95f4\u7684\u8ddd\u79bb\u3002\n     *\n     */\n    latitudeDelta: PropTypes.number.isRequired,\n    longitudeDelta: PropTypes.number.isRequired,\n  }),\n};\n\n// MyApp.js\n\nrender() {\n  const region = {\n    latitude: 37.48,\n    longitude: -122.16,\n    latitudeDelta: 0.1,\n    longitudeDelta: 0.1,\n  };\n  return (\n    <MapView\n      region={region}\n      zoomEnabled={false}\n      style={{ flex: 1 }}\n    />\n  );\n}\n")),(0,a.kt)("p",null,"\u73b0\u5728\u4f60\u53ef\u4ee5\u770b\u5230 region \u5c5e\u6027\u7684\u6574\u4e2a\u7ed3\u6784\u5df2\u7ecf\u52a0\u4e0a\u4e86\u6587\u6863\u8bf4\u660e\u2014\u2014\u5c06\u6765\u53ef\u80fd\u6211\u4eec\u4f1a\u81ea\u52a8\u751f\u6210\u4e00\u4e9b\u7c7b\u4f3c\u7684\u4ee3\u7801\uff0c\u4f46\u76ee\u524d\u8fd8\u6ca1\u6709\u5b9e\u73b0\u3002"),(0,a.kt)("p",null,"\u6709\u65f6\u5019\u4f60\u7684\u539f\u751f\u7ec4\u4ef6\u6709\u4e00\u4e9b\u7279\u6b8a\u7684\u5c5e\u6027\u5e0c\u671b\u5bfc\u51fa\uff0c\u4f46\u5e76\u4e0d\u5e0c\u671b\u5b83\u6210\u4e3a\u516c\u5f00\u7684\u63a5\u53e3\u3002\u4e3e\u4e2a\u4f8b\u5b50\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"Switch"),"\u7ec4\u4ef6\u53ef\u80fd\u4f1a\u6709\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"onChange"),"\u5c5e\u6027\u7528\u6765\u4f20\u9012\u539f\u59cb\u7684\u539f\u751f\u4e8b\u4ef6\uff0c\u7136\u540e\u5bfc\u51fa\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"onValueChange"),"\u5c5e\u6027\uff0c\u8fd9\u4e2a\u5c5e\u6027\u5728\u8c03\u7528\u7684\u65f6\u5019\u4f1a\u5e26\u4e0a",(0,a.kt)("inlineCode",{parentName:"p"},"Switch"),"\u7684\u72b6\u6001\u4f5c\u4e3a\u53c2\u6570\u4e4b\u4e00\u3002\u8fd9\u6837\u7684\u8bdd\u4f60\u53ef\u80fd\u4e0d\u5e0c\u671b\u539f\u751f\u4e13\u7528\u7684\u5c5e\u6027\u51fa\u73b0\u5728 API \u4e4b\u4e2d\uff0c\u4e5f\u5c31\u4e0d\u5e0c\u671b\u628a\u5b83\u653e\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"propTypes"),"\u91cc\u3002\u53ef\u662f\u5982\u679c\u4f60\u4e0d\u653e\u7684\u8bdd\uff0c\u53c8\u4f1a\u51fa\u73b0\u4e00\u4e2a\u62a5\u9519\u3002\u89e3\u51b3\u65b9\u6848\u5c31\u662f\u5e26\u4e0a\u989d\u5916\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"nativeOnly"),"\u53c2\u6570\uff0c\u50cf\u8fd9\u6837\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),"const RCTSwitch = requireNativeComponent('RCTSwitch', Switch, {\n  nativeOnly: { onChange: true }\n});\n")),(0,a.kt)("h2",m({},{id:"\u4e8b\u4ef6"}),"\u4e8b\u4ef6"),(0,a.kt)("p",null,"\u73b0\u5728\u6211\u4eec\u5df2\u7ecf\u6709\u4e86\u4e00\u4e2a\u539f\u751f\u5730\u56fe\u7ec4\u4ef6\uff0c\u5e76\u4e14\u4ece JS \u53ef\u4ee5\u5f88\u5bb9\u6613\u7684\u63a7\u5236\u5b83\u4e86\u3002\u4e0d\u8fc7\u6211\u4eec\u600e\u4e48\u624d\u80fd\u5904\u7406\u6765\u81ea\u7528\u6237\u7684\u4e8b\u4ef6\uff0c\u8b6c\u5982\u7f29\u653e\u64cd\u4f5c\u6216\u8005\u62d6\u52a8\u6765\u6539\u53d8\u53ef\u89c6\u533a\u57df\uff1f"),(0,a.kt)("p",null,"\u622a\u81f3\u76ee\u524d\uff0c\u6211\u4eec\u4ece manager \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"-(UIView *)view")," \u65b9\u6cd5\u8fd4\u56de\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"MKMapView")," \u5b9e\u4f8b\u3002\u6211\u4eec\u6ca1\u6cd5\u76f4\u63a5\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"MKMapView")," \u6dfb\u52a0\u65b0\u7684\u5c5e\u6027\uff0c\u6240\u4ee5\u6211\u4eec\u53ea\u80fd\u521b\u5efa\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"MKMapView")," \u7684\u5b50\u7c7b\u7528\u4e8e\u6211\u4eec\u81ea\u5df1\u7684\u89c6\u56fe\u4e2d\u3002\u6211\u4eec\u53ef\u4ee5\u5728\u8fd9\u4e2a\u5b50\u7c7b\u4e2d\u6dfb\u52a0 ",(0,a.kt)("inlineCode",{parentName:"p"},"onRegionChange")," \u56de\u8c03\u65b9\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-objectivec"}),'// RNTMapView.h\n\n#import <MapKit/MapKit.h>\n\n#import <React/RCTComponent.h>\n\n@interface RNTMapView: MKMapView\n\n@property (nonatomic, copy) RCTBubblingEventBlock onRegionChange;\n\n@end\n\n// RNTMapView.m\n\n#import "RNTMapView.h"\n\n@implementation RNTMapView\n\n@end\n')),(0,a.kt)("p",null,"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u6240\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"RCTBubblingEventBlock")," \u5fc5\u987b\u4ee5 ",(0,a.kt)("inlineCode",{parentName:"p"},"on")," \u5f00\u5934\u3002\u7136\u540e\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"RNTMapManager"),"\u4e0a\u58f0\u660e\u4e00\u4e2a\u4e8b\u4ef6\u5904\u7406\u51fd\u6570\u5c5e\u6027\uff0c\u5c06\u5176\u4f5c\u4e3a\u6240\u66b4\u9732\u51fa\u6765\u7684\u6240\u6709\u89c6\u56fe\u7684\u59d4\u6258\uff0c\u5e76\u8c03\u7528\u672c\u5730\u89c6\u56fe\u7684\u4e8b\u4ef6\u5904\u7406\u5c06\u4e8b\u4ef6\u8f6c\u53d1\u81f3 JS\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-objectivec{9,17,31-48}"}),'// RNTMapManager.m\n\n#import <MapKit/MapKit.h>\n#import <React/RCTViewManager.h>\n\n#import "RNTMapView.h"\n#import "RCTConvert+Mapkit.h"\n\n@interface RNTMapManager : RCTViewManager <MKMapViewDelegate>\n@end\n\n@implementation RNTMapManager\n\nRCT_EXPORT_MODULE()\n\nRCT_EXPORT_VIEW_PROPERTY(zoomEnabled, BOOL)\nRCT_EXPORT_VIEW_PROPERTY(onRegionChange, RCTBubblingEventBlock)\n\nRCT_CUSTOM_VIEW_PROPERTY(region, MKCoordinateRegion, MKMapView)\n{\n    [view setRegion:json ? [RCTConvert MKCoordinateRegion:json] : defaultView.region animated:YES];\n}\n\n- (UIView *)view\n{\n  RNTMapView *map = [RNTMapView new];\n  map.delegate = self;\n  return map;\n}\n\n#pragma mark MKMapViewDelegate\n\n- (void)mapView:(RNTMapView *)mapView regionDidChangeAnimated:(BOOL)animated\n{\n  if (!mapView.onRegionChange) {\n    return;\n  }\n\n  MKCoordinateRegion region = mapView.region;\n  mapView.onRegionChange(@{\n    @"region": @{\n      @"latitude": @(region.center.latitude),\n      @"longitude": @(region.center.longitude),\n      @"latitudeDelta": @(region.span.latitudeDelta),\n      @"longitudeDelta": @(region.span.longitudeDelta),\n    }\n  });\n}\n@end\n')),(0,a.kt)("p",null,"\u5728\u59d4\u6258\u65b9\u6cd5",(0,a.kt)("inlineCode",{parentName:"p"},"-mapView:regionDidChangeAnimated:"),"\u4e2d\uff0c\u6839\u636e\u5bf9\u5e94\u7684\u89c6\u56fe\u8c03\u7528\u4e8b\u4ef6\u5904\u7406\u51fd\u6570\u5e76\u4f20\u9012\u533a\u57df\u6570\u636e\u3002\u8c03\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"onRegionChange"),"\u4e8b\u4ef6\u4f1a\u89e6\u53d1 JavaScript \u7aef\u7684\u540c\u540d\u56de\u8c03\u51fd\u6570\u3002\u8fd9\u4e2a\u56de\u8c03\u4f1a\u4f20\u9012\u539f\u751f\u4e8b\u4ef6\u5bf9\u8c61\uff0c\u7136\u540e\u6211\u4eec\u901a\u5e38\u90fd\u4f1a\u5728\u5c01\u88c5\u7ec4\u4ef6\u91cc\u6765\u5904\u7406\u8fd9\u4e2a\u5bf9\u8c61\uff0c\u4ee5\u4f7f API \u66f4\u7b80\u660e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),"// MapView.js\n\nclass MapView extends React.Component {\n  _onRegionChange = (event) => {\n    if (!this.props.onRegionChange) {\n      return;\n    }\n\n    // process raw event...\n    this.props.onRegionChange(event.nativeEvent);\n  }\n  render() {\n    return (\n      <RNTMap\n        {...this.props}\n        onRegionChange={this._onRegionChange}\n      />\n    );\n  }\n}\nMapView.propTypes = {\n  /**\n   * Callback that is called continuously when the user is dragging the map.\n   */\n  onRegionChange: PropTypes.func,\n  ...\n};\n\n// MyApp.js\n\nclass MyApp extends React.Component {\n  onRegionChange(event) {\n    // Do stuff with event.region.latitude, etc.\n  }\n\n  render() {\n    const region = {\n      latitude: 37.48,\n      longitude: -122.16,\n      latitudeDelta: 0.1,\n      longitudeDelta: 0.1,\n    };\n    return (\n      <MapView\n        region={region}\n        zoomEnabled={false}\n        onRegionChange={this.onRegionChange}\n      />\n    );\n  }\n}\n")),(0,a.kt)("h2",m({},{id:"handling-multiple-native-views"}),"Handling multiple native views"),(0,a.kt)("p",null,"A React Native view can have more than one child view in the view tree eg."),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),"<View>\n  <MyNativeView />\n  <MyNativeView />\n  <Button />\n</View>\n")),(0,a.kt)("p",null,"In this example, the class ",(0,a.kt)("inlineCode",{parentName:"p"},"MyNativeView")," is a wrapper for a ",(0,a.kt)("inlineCode",{parentName:"p"},"NativeComponent")," and exposes methods, which will be called on the iOS platform. ",(0,a.kt)("inlineCode",{parentName:"p"},"MyNativeView")," is defined in ",(0,a.kt)("inlineCode",{parentName:"p"},"MyNativeView.ios.js")," and contains proxy methods of ",(0,a.kt)("inlineCode",{parentName:"p"},"NativeComponent"),"."),(0,a.kt)("p",null,"When the user interacts with the component, like clicking the button, the ",(0,a.kt)("inlineCode",{parentName:"p"},"backgroundColor")," of ",(0,a.kt)("inlineCode",{parentName:"p"},"MyNativeView")," changes. In this case ",(0,a.kt)("inlineCode",{parentName:"p"},"UIManager")," would not know which ",(0,a.kt)("inlineCode",{parentName:"p"},"MyNativeView")," should be handled and which one should change ",(0,a.kt)("inlineCode",{parentName:"p"},"backgroundColor"),". Below you will find a solution to this problem:"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),"<View>\n<MyNativeView ref={this.myNativeReference}>/>\n<MyNativeView ref={this.myNativeReference2}>/>\n<Button onPress={() => { this.myNativeReference.callNativeMethod() }}/>\n</View>\n")),(0,a.kt)("p",null,"Now the above component has a reference to a particular ",(0,a.kt)("inlineCode",{parentName:"p"},"MyNativeView")," which allows us to use a specific instance of ",(0,a.kt)("inlineCode",{parentName:"p"},"MyNativeView"),". Now the button can control which ",(0,a.kt)("inlineCode",{parentName:"p"},"MyNativeView")," should change its ",(0,a.kt)("inlineCode",{parentName:"p"},"backgroundColor"),". In this example let's assume that ",(0,a.kt)("inlineCode",{parentName:"p"},"callNativeMethod")," changes ",(0,a.kt)("inlineCode",{parentName:"p"},"backgroundColor"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"MyNativeView.ios.js")," contains code as follow:"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),"class MyNativeView extends React.Component<> {\n  callNativeMethod = () => {\n    UIManager.dispatchViewManagerCommand(\n      ReactNative.findNodeHandle(this),\n      UIManager.getViewManagerConfig('RNCMyNativeView').Commands\n        .callNativeMethod,\n      []\n    );\n  };\n  render() {\n    return <NativeComponent ref={NATIVE_COMPONENT_REF} />;\n  }\n}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"callNativeMethod")," is our custom iOS method which for example changes the ",(0,a.kt)("inlineCode",{parentName:"p"},"backgroundColor")," which is exposed through ",(0,a.kt)("inlineCode",{parentName:"p"},"MyNativeView"),". This method uses ",(0,a.kt)("inlineCode",{parentName:"p"},"UIManager.dispatchViewManagerCommand")," which needs 3 parameters:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"(nonnull NSNumber \\*)reactTag"),"\u200a -\u200a id of react view."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"commandID:(NSInteger)commandID"),"\u200a -\u200a Id of the native method that should be called"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"commandArgs:(NSArray<id> \\*)commandArgs"),"\u200a -\u200a Args of the native method that we can pass from JS to native.")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"RNCMyNativeViewManager.m")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-objectivec"}),'#import <React/RCTViewManager.h>\n#import <React/RCTUIManager.h>\n#import <React/RCTLog.h>\nRCT_EXPORT_METHOD(callNativeMethod:(nonnull NSNumber*) reactTag) {\n  [self.bridge.uiManager addUIBlock:^(RCTUIManager *uiManager, NSDictionary<NSNumber *,UIView *> *viewRegistry) {\n      NativeView *view = viewRegistry[reactTag];\n      if (!view || ![view isKindOfClass:[NativeView class]]) {\n          RCTLogError(@"Cannot find NativeView with tag #%@", reactTag);\n          return;\n      }\n      [view callNativeMethod];\n  }];\n}\n')),(0,a.kt)("p",null,"Here the ",(0,a.kt)("inlineCode",{parentName:"p"},"callNativeMethod")," is defined in the ",(0,a.kt)("inlineCode",{parentName:"p"},"RNCMyNativeViewManager.m")," file and contains only one parameter which is ",(0,a.kt)("inlineCode",{parentName:"p"},"(nonnull NSNumber*) reactTag"),". This exported function will find a particular view using ",(0,a.kt)("inlineCode",{parentName:"p"},"addUIBlock")," which contains the ",(0,a.kt)("inlineCode",{parentName:"p"},"viewRegistry")," parameter and returns the component based on ",(0,a.kt)("inlineCode",{parentName:"p"},"reactTag")," allowing it to call the method on the correct component."),(0,a.kt)("h2",m({},{id:"\u6837\u5f0f"}),"\u6837\u5f0f"),(0,a.kt)("p",null,"\u56e0\u4e3a\u6211\u4eec\u6240\u6709\u7684\u89c6\u56fe\u90fd\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"UIView"),"\u7684\u5b50\u7c7b\uff0c\u5927\u90e8\u5206\u7684\u6837\u5f0f\u5c5e\u6027\u5e94\u8be5\u76f4\u63a5\u5c31\u53ef\u4ee5\u751f\u6548\u3002\u4f46\u6709\u4e00\u90e8\u5206\u7ec4\u4ef6\u4f1a\u5e0c\u671b\u4f7f\u7528\u81ea\u5df1\u5b9a\u4e49\u7684\u9ed8\u8ba4\u6837\u5f0f\uff0c\u4f8b\u5982",(0,a.kt)("inlineCode",{parentName:"p"},"UIDatePicker"),"\u5e0c\u671b\u81ea\u5df1\u7684\u5927\u5c0f\u662f\u56fa\u5b9a\u7684\u3002\u8fd9\u4e2a\u9ed8\u8ba4\u5c5e\u6027\u5bf9\u4e8e\u5e03\u5c40\u7b97\u6cd5\u7684\u6b63\u5e38\u5de5\u4f5c\u6765\u8bf4\u5f88\u91cd\u8981\uff0c\u4f46\u6211\u4eec\u4e5f\u5e0c\u671b\u5728\u4f7f\u7528\u8fd9\u4e2a\u7ec4\u4ef6\u7684\u65f6\u5019\u53ef\u4ee5\u8986\u76d6\u8fd9\u4e9b\u9ed8\u8ba4\u7684\u6837\u5f0f\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"DatePickerIOS"),"\u5b9e\u73b0\u8fd9\u4e2a\u529f\u80fd\u7684\u529e\u6cd5\u662f\u901a\u8fc7\u5c01\u88c5\u4e00\u4e2a\u62e5\u6709\u5f39\u6027\u6837\u5f0f\u7684\u989d\u5916\u89c6\u56fe\uff0c\u7136\u540e\u5728\u5185\u5c42\u7684\u89c6\u56fe\u4e0a\u5e94\u7528\u4e00\u4e2a\u56fa\u5b9a\u6837\u5f0f\uff08\u901a\u8fc7\u539f\u751f\u4f20\u9012\u6765\u7684\u5e38\u6570\u751f\u6210\uff09\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),"// DatePickerIOS.ios.js\n\nimport { UIManager } from 'react-native';\nconst RCTDatePickerIOSConsts = UIManager.RCTDatePicker.Constants;\n...\n  render: function() {\n    return (\n      <View style={this.props.style}>\n        <RCTDatePickerIOS\n          ref={DATEPICKER}\n          style={styles.rkDatePickerIOS}\n          ...\n        />\n      </View>\n    );\n  }\n});\n\nconst styles = StyleSheet.create({\n  rkDatePickerIOS: {\n    height: RCTDatePickerIOSConsts.ComponentHeight,\n    width: RCTDatePickerIOSConsts.ComponentWidth,\n  },\n});\n")),(0,a.kt)("p",null,"\u5e38\u91cf",(0,a.kt)("inlineCode",{parentName:"p"},"RCTDatePickerIOSConsts"),"\u5728\u539f\u751f\u4ee3\u7801\u4e2d\u5bfc\u51fa\uff0c\u4ece\u4e00\u4e2a\u7ec4\u4ef6\u7684\u5b9e\u9645\u5e03\u5c40\u4e0a\u83b7\u53d6\u5230\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-objectivec"}),'// RCTDatePickerManager.m\n\n- (NSDictionary *)constantsToExport\n{\n  UIDatePicker *dp = [[UIDatePicker alloc] init];\n  [dp layoutIfNeeded];\n\n  return @{\n    @"ComponentHeight": @(CGRectGetHeight(dp.frame)),\n    @"ComponentWidth": @(CGRectGetWidth(dp.frame)),\n    @"DatePickerModes": @{\n      @"time": @(UIDatePickerModeTime),\n      @"date": @(UIDatePickerModeDate),\n      @"datetime": @(UIDatePickerModeDateAndTime),\n    }\n  };\n}\n')),(0,a.kt)("p",null,"\u672c\u5411\u5bfc\u8986\u76d6\u4e86\u5305\u88c5\u539f\u751f\u7ec4\u4ef6\u6240\u9700\u4e86\u89e3\u7684\u8bb8\u591a\u65b9\u9762\uff0c\u4e0d\u8fc7\u4f60\u53ef\u80fd\u8fd8\u6709\u5f88\u591a\u77e5\u8bc6\u9700\u8981\u4e86\u89e3\uff0c\u8b6c\u5982\u7279\u6b8a\u7684\u65b9\u5f0f\u6765\u63d2\u5165\u548c\u5e03\u5c40\u5b50\u89c6\u56fe\u3002\u5982\u679c\u4f60\u60f3\u66f4\u6df1\u5165\u4e86\u89e3\uff0c\u53ef\u4ee5\u5c1d\u8bd5\u9605\u8bfb\u4e00\u4e9b",(0,a.kt)("a",m({parentName:"p"},{href:"https://github.com/facebook/react-native/blob/master/React/Views"}),"\u6e90\u4ee3\u7801"),"\u3002"))}h.isMDXComponent=!0}}]);