"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[63607],{35318:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return k}});var a=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),k=i,m=c["".concat(s,".").concat(k)]||c[k]||d[k]||l;return n?a.createElement(m,r(r({ref:t},u),{},{components:n})):a.createElement(m,r({ref:t},u))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var p=2;p<l;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},11674:function(e,t,n){var a=n(63445);const i=!!a.default.canUseDOM&&navigator.platform.startsWith("Mac"),l=!!a.default.canUseDOM&&navigator.platform.startsWith("Win"),r=i?"ios":"android",o=i?"macos":l?"windows":"linux";t.Z={defaultGuide:"native",defaultOs:o,defaultPackageManager:"npm",defaultPlatform:r,defaultSyntax:"functional",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}},37785:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(27378),i=Object.defineProperty,l=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function p({children:e,hidden:t,className:n}){return a.createElement("div",((e,t)=>{for(var n in t||(t={}))r.call(t,n)&&s(e,n,t[n]);if(l)for(var n of l(t))o.call(t,n)&&s(e,n,t[n]);return e})({role:"tabpanel"},{hidden:t,className:n}),e)}},93139:function(e,t,n){n.d(t,{Z:function(){return f}});var a=n(27378),i=n(14185),l=n(15324),r=n(38944),o="tabItem_WhCL",s=Object.defineProperty,p=Object.defineProperties,u=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&m(e,n,t[n]);if(d)for(var n of d(t))k.call(t,n)&&m(e,n,t[n]);return e};function g(e){var t,n,i;const{lazy:s,block:d,defaultValue:c,values:k,groupId:m,className:g}=e,f=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),A=null!=k?k:f.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),v=(0,l.lx)(A,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===c?c:null!=(i=null!=c?c:null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)?i:null==(n=f[0])?void 0:n.props.value;if(null!==b&&!A.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${A.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:N}=(0,l.UB)(),[C,D]=(0,a.useState)(b),B=[],{blockElementScrollPositionUntilNextRender:L}=(0,l.o5)();if(null!=m){const e=y[m];null!=e&&e!==C&&A.some((t=>t.value===e))&&D(e)}const w=e=>{const t=e.currentTarget,n=B.indexOf(t),a=A[n].value;a!==C&&(L(t),D(a),null!=m&&N(m,a))},O=e=>{let t=null;switch(e.key){case"ArrowRight":{const n=B.indexOf(e.currentTarget)+1;t=B[n]||B[0];break}case"ArrowLeft":{const n=B.indexOf(e.currentTarget)-1;t=B[n]||B[B.length-1];break}}null==t||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":d},g)},A.map((({value:e,label:t,attributes:n})=>{return a.createElement("li",(i=h({role:"tab",tabIndex:C===e?0:-1,"aria-selected":C===e,key:e,ref:e=>B.push(e),onKeyDown:O,onFocus:w,onClick:w},n),l={className:(0,r.Z)("tabs__item",o,null==n?void 0:n.className,{"tabs__item--active":C===e})},p(i,u(l))),null!=t?t:e);var i,l}))),s?(0,a.cloneElement)(f.filter((e=>e.props.value===C))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},f.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function f(e){const t=(0,i.Z)();return a.createElement(g,h({key:String(t)},e))}},15846:function(e,t,n){n.r(t),n.d(t,{assets:function(){return A},contentTitle:function(){return g},default:function(){return y},frontMatter:function(){return h},metadata:function(){return f},toc:function(){return v}});var a=n(35318),i=n(93139),l=n(37785),r=n(11674),o=Object.defineProperty,s=Object.defineProperties,p=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,k=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&k(e,n,t[n]);if(u)for(var n of u(t))c.call(t,n)&&k(e,n,t[n]);return e};const h={id:"linking",title:"Linking"},g=void 0,f={unversionedId:"linking",id:"version-0.64/linking",title:"Linking",description:"\u4ec5\u9002\u7528\u4e8e\u975e\u6c99\u76d2\u9879\u76ee",source:"@site/versioned_docs/version-0.64/linking.md",sourceDirName:".",slug:"/linking",permalink:"/docs/0.64/linking",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../cndocs/linking.md",tags:[],version:"0.64",frontMatter:{id:"linking",title:"Linking"},sidebar:"version-0.64/api",previous:{title:"LayoutAnimation",permalink:"/docs/0.64/layoutanimation"},next:{title:"PanResponder",permalink:"/docs/0.64/panresponder"}},A={},v=[{value:"Built-in URL Schemes",id:"built-in-url-schemes",level:3},{value:"\u57fa\u672c\u7528\u6cd5",id:"\u57fa\u672c\u7528\u6cd5",level:3},{value:"\u542f\u7528 Deep Links",id:"\u542f\u7528-deep-links",level:3},{value:"\u5904\u7406 Deep Links",id:"\u5904\u7406-deep-links",level:3},{value:"1. If the app is already open, the app is foregrounded and a Linking &#39;url&#39; event is fired",id:"1-if-the-app-is-already-open-the-app-is-foregrounded-and-a-linking-url-event-is-fired",level:4},{value:"2. If the app is not already open, it is opened and the url is passed in as the initialURL",id:"2-if-the-app-is-not-already-open-it-is-opened-and-the-url-is-passed-in-as-the-initialurl",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"Open Links and Deep Links (Universal Links)",id:"open-links-and-deep-links-universal-links",level:3},{value:"Open Custom Settings",id:"open-custom-settings",level:3},{value:"\u83b7\u53d6 Deep Link",id:"\u83b7\u53d6-deep-link",level:3},{value:"\u53d1\u9001 Intents (Android)",id:"\u53d1\u9001-intents-android",level:3},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",level:2},{value:"<code>constructor()</code>",id:"constructor",level:3},{value:"<code>addEventListener()</code>",id:"addeventlistener",level:3},{value:"<code>removeEventListener()</code>",id:"removeeventlistener",level:3},{value:"<code>openURL()</code>",id:"openurl",level:3},{value:"<code>canOpenURL()</code>",id:"canopenurl",level:3},{value:"<code>openSettings()</code>",id:"opensettings",level:3},{value:"<code>getInitialURL()</code>",id:"getinitialurl",level:3},{value:"<code>sendIntent()</code>",id:"sendintent",level:3}],b={toc:v};function y(e){var t,n=e,{components:o}=n,k=((e,t)=>{var n={};for(var a in e)d.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&u)for(var a of u(e))t.indexOf(a)<0&&c.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=m(m({},b),k),s(t,p({components:o,mdxType:"MDXLayout"}))),(0,a.kt)("div",{className:"banner-native-code-required"},(0,a.kt)("h3",null,"\u4ec5\u9002\u7528\u4e8e\u975e\u6c99\u76d2\u9879\u76ee"),(0,a.kt)("p",null,"The following section only applies to projects with native code exposed. If you are using the managed ",(0,a.kt)("code",null,"expo-cli")," workflow, see the guide on ",(0,a.kt)("a",{href:"http://docs.expo.io/versions/latest/workflow/linking/"},"Linking")," in the Expo documentation for the appropriate alternative.")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Linking"),"\u63d0\u4f9b\u4e86\u4e00\u4e2a\u901a\u7528\u7684\u63a5\u53e3\u6765\u4e0e\u4f20\u5165\u548c\u4f20\u51fa\u7684 App \u94fe\u63a5\u8fdb\u884c\u4ea4\u4e92\u3002"),(0,a.kt)("p",null,"Every Link (URL) has a URL Scheme, some websites are prefixed with ",(0,a.kt)("inlineCode",{parentName:"p"},"https://")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"http://")," and the ",(0,a.kt)("inlineCode",{parentName:"p"},"http")," is the URL Scheme. Let's call it scheme for short."),(0,a.kt)("p",null,"In addition to ",(0,a.kt)("inlineCode",{parentName:"p"},"https"),", you're likely also familiar with the ",(0,a.kt)("inlineCode",{parentName:"p"},"mailto")," scheme. When you open a link with the mailto scheme, your operating system will open an installed mail application. Similarly, there are schemes for making phone calls and sending SMS. Read more about ",(0,a.kt)("a",m({parentName:"p"},{href:"#built-in-url-schemes"}),"built-in URL")," schemes below."),(0,a.kt)("p",null,"Like using the mailto scheme, it's possible to link to other applications by using custom url schemes. For example, when you get a ",(0,a.kt)("strong",{parentName:"p"},"Magic Link")," email from Slack, the ",(0,a.kt)("strong",{parentName:"p"},"Launch Slack")," button is an anchor tag with an href that looks something like: ",(0,a.kt)("inlineCode",{parentName:"p"},"slack://secret/magic-login/other-secret"),". Like with Slack, you can tell the operating system that you want to handle a custom scheme. When the Slack app opens, it receives the URL that was used to open it. This is often referred to as deep linking. Read more about how to ",(0,a.kt)("a",m({parentName:"p"},{href:"#get-the-deep-link"}),"get the deep link")," into your app."),(0,a.kt)("p",null,"Custom URL scheme isn't the only way to open your application on mobile. You don't want to use a custom URL scheme in links in the email because then the links would be broken on desktop. Instead, you want to use a regular ",(0,a.kt)("inlineCode",{parentName:"p"},"https")," links such as ",(0,a.kt)("inlineCode",{parentName:"p"},"https://www.myapp.io/records/1234546"),". and on mobile you want that link open your app. Android calls it ",(0,a.kt)("strong",{parentName:"p"},"Deep Links")," (Universal Links - iOS)."),(0,a.kt)("h3",m({},{id:"built-in-url-schemes"}),"Built-in URL Schemes"),(0,a.kt)("p",null,"As mentioned in the introduction, there are some URL schemes for core functionality that exist on every platform. The following is a non-exhaustive list, but covers the most commonly used schemes."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Scheme"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"\u8bf4\u660e"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"iOS"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Android"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"mailto")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Open mail app, eg: mailto: ",(0,a.kt)("a",m({parentName:"td"},{href:"mailto:support@expo.io"}),"support@expo.io")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u2705"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u2705")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"tel")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Open phone app, eg: tel:+123456789"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u2705"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u2705")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"sms")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Open SMS app, eg: sms:+123456789"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u2705"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u2705")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"https")," / ",(0,a.kt)("inlineCode",{parentName:"td"},"http")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Open web browser app, eg: ",(0,a.kt)("a",m({parentName:"td"},{href:"https://expo.io"}),"https://expo.io")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u2705"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u2705")))),(0,a.kt)("h3",m({},{id:"\u57fa\u672c\u7528\u6cd5"}),"\u57fa\u672c\u7528\u6cd5"),(0,a.kt)("h3",m({},{id:"\u542f\u7528-deep-links"}),"\u542f\u7528 Deep Links"),(0,a.kt)("p",null,"If you want to enable deep links in your app, please the below guide:"),(0,a.kt)(i.Z,{groupId:"syntax",defaultValue:r.Z.defaultPlatform,values:r.Z.platforms,mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"android",mdxType:"TabItem"},(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u8981\u4e86\u89e3\u66f4\u591a\u5982\u4f55\u5728 Android \u4e0a\u652f\u6301\u6df1\u5ea6\u94fe\u63a5\u7684\u8bf4\u660e\uff0c\u8bf7\u53c2\u9605",(0,a.kt)("a",m({parentName:"p"},{href:"http://developer.android.com/training/app-indexing/deep-linking.html#adding-filters"}),"Enabling Deep Links for App Content - Add Intent Filters for Your Deep Links"),".")),(0,a.kt)("p",null,"\u5982\u679c\u8981\u5728\u73b0\u6709\u7684 MainActivity \u4e2d\u76d1\u542c\u4f20\u5165\u7684 intent\uff0c\u90a3\u4e48\u9700\u8981\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"AndroidManifest.xml"),"\u4e2d\u5c06 MainActivity \u7684",(0,a.kt)("inlineCode",{parentName:"p"},"launchMode"),"\u8bbe\u7f6e\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"singleTask"),"\u3002\u76f8\u5173\u89e3\u91ca\u53ef\u53c2\u8003",(0,a.kt)("a",m({parentName:"p"},{href:"http://developer.android.com/guide/topics/manifest/activity-element.html"}),(0,a.kt)("inlineCode",{parentName:"a"},"<activity>")),"\u6587\u6863\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-xml"}),'<activity\n  android:name=".MainActivity"\n  android:launchMode="singleTask">\n'))),(0,a.kt)(l.Z,{value:"ios",mdxType:"TabItem"},(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a")," \u5bf9\u4e8e iOS \u6765\u8bf4\uff0c\u5982\u679c\u8981\u5728 App \u542f\u52a8\u540e\u4e5f\u76d1\u542c\u4f20\u5165\u7684 App \u94fe\u63a5\uff0c\u90a3\u4e48\u9996\u5148\u9700\u8981\u5728\u9879\u76ee\u4e2d\u94fe\u63a5",(0,a.kt)("inlineCode",{parentName:"p"},"RCTLinking"),"\uff0c\u5177\u4f53\u6b65\u9aa4\u8bf7\u53c2\u8003",(0,a.kt)("a",m({parentName:"p"},{href:"linking-libraries-ios.html#%E6%89%8B%E5%8A%A8%E9%93%BE%E6%8E%A5"}),"\u624b\u52a8\u94fe\u63a5"),"\u8fd9\u7bc7\u6587\u6863\uff0c\u7136\u540e\u9700\u8981\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"AppDelegate.m"),"\u4e2d\u589e\u52a0\u4ee5\u4e0b\u4ee3\u7801\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-objectivec"}),"// iOS 9.x \u6216\u66f4\u9ad8\u7248\u672c\n#import <React/RCTLinkingManager.h>\n\n- (BOOL)application:(UIApplication *)application\n   openURL:(NSURL *)url\n   options:(NSDictionary<UIApplicationOpenURLOptionsKey,id> *)options\n{\n  return [RCTLinkingManager application:application openURL:url options:options];\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-objectivec"}),"// iOS 8.x \u6216\u66f4\u4f4e\u7248\u672c\n#import <React/RCTLinkingManager.h>\n\n- (BOOL)application:(UIApplication *)application openURL:(NSURL *)url\n  sourceApplication:(NSString *)sourceApplication annotation:(id)annotation\n{\n  return [RCTLinkingManager application:application openURL:url\n                      sourceApplication:sourceApplication annotation:annotation];\n}\n")),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u7684 app \u7528\u4e86 ",(0,a.kt)("a",m({parentName:"p"},{href:"https://developer.apple.com/library/prerelease/ios/documentation/General/Conceptual/AppSearch/UniversalLinks.html"}),"Universal Links"),"\uff0c\u9700\u8981\u6b63\u786e\u7684\u628a\u4e0b\u8ff0\u4ee3\u7801\u6dfb\u52a0\u8fdb\u53bb\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-objectivec"}),"- (BOOL)application:(UIApplication *)application continueUserActivity:(nonnull NSUserActivity *)userActivity\n restorationHandler:(nonnull void (^)(NSArray<id<UIUserActivityRestoring>> * _Nullable))restorationHandler\n{\n return [RCTLinkingManager application:application\n                  continueUserActivity:userActivity\n                    restorationHandler:restorationHandler];\n}\n")))),(0,a.kt)("h3",m({},{id:"\u5904\u7406-deep-links"}),"\u5904\u7406 Deep Links"),(0,a.kt)("p",null,"There are two ways to handle URLs that open your app."),(0,a.kt)("h4",m({},{id:"1-if-the-app-is-already-open-the-app-is-foregrounded-and-a-linking-url-event-is-fired"}),"1. If the app is already open, the app is foregrounded and a Linking 'url' event is fired"),(0,a.kt)("p",null,"You can handle these events with ",(0,a.kt)("inlineCode",{parentName:"p"},"Linking.addEventListener('url', callback)")," -- it calls ",(0,a.kt)("inlineCode",{parentName:"p"},"callback({ url })")," with the linked URL"),(0,a.kt)("h4",m({},{id:"2-if-the-app-is-not-already-open-it-is-opened-and-the-url-is-passed-in-as-the-initialurl"}),"2. If the app is not already open, it is opened and the url is passed in as the initialURL"),(0,a.kt)("p",null,"You can handle these events with ",(0,a.kt)("inlineCode",{parentName:"p"},"Linking.getInitialURL()")," -- it returns a Promise that resolves to the URL, if there is one."),(0,a.kt)("hr",null),(0,a.kt)("h2",m({},{id:"\u793a\u4f8b"}),"\u793a\u4f8b"),(0,a.kt)("h3",m({},{id:"open-links-and-deep-links-universal-links"}),"Open Links and Deep Links (Universal Links)"),(0,a.kt)("div",m({},{className:"snack-player","data-snack-name":"Linking Function Component Example","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useCallback%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20Alert%2C%20Button%2C%20Linking%2C%20StyleSheet%2C%20View%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20supportedURL%20%3D%20%22https%3A%2F%2Fgoogle.com%22%3B%0A%0Aconst%20unsupportedURL%20%3D%20%22slack%3A%2F%2Fopen%3Fteam%3D123456%22%3B%0A%0Aconst%20OpenURLButton%20%3D%20(%7B%20url%2C%20children%20%7D)%20%3D%3E%20%7B%0A%20%20const%20handlePress%20%3D%20useCallback(async%20()%20%3D%3E%20%7B%0A%20%20%20%20%2F%2F%20Checking%20if%20the%20link%20is%20supported%20for%20links%20with%20custom%20URL%20scheme.%0A%20%20%20%20const%20supported%20%3D%20await%20Linking.canOpenURL(url)%3B%0A%0A%20%20%20%20if%20(supported)%20%7B%0A%20%20%20%20%20%20%2F%2F%20Opening%20the%20link%20with%20some%20app%2C%20if%20the%20URL%20scheme%20is%20%22http%22%20the%20web%20link%20should%20be%20opened%0A%20%20%20%20%20%20%2F%2F%20by%20some%20browser%20in%20the%20mobile%0A%20%20%20%20%20%20await%20Linking.openURL(url)%3B%0A%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20Alert.alert(%60Don't%20know%20how%20to%20open%20this%20URL%3A%20%24%7Burl%7D%60)%3B%0A%20%20%20%20%7D%0A%20%20%7D%2C%20%5Burl%5D)%3B%0A%0A%20%20return%20%3CButton%20title%3D%7Bchildren%7D%20onPress%3D%7BhandlePress%7D%20%2F%3E%3B%0A%7D%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3COpenURLButton%20url%3D%7BsupportedURL%7D%3EOpen%20Supported%20URL%3C%2FOpenURLButton%3E%0A%20%20%20%20%20%20%3COpenURLButton%20url%3D%7BunsupportedURL%7D%3EOpen%20Unsupported%20URL%3C%2FOpenURLButton%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%20flex%3A%201%2C%20justifyContent%3A%20%22center%22%2C%20alignItems%3A%20%22center%22%20%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),(0,a.kt)("h3",m({},{id:"open-custom-settings"}),"Open Custom Settings"),(0,a.kt)("div",m({},{className:"snack-player","data-snack-name":"Linking Function Component Example","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useCallback%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20Button%2C%20Linking%2C%20StyleSheet%2C%20View%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20OpenSettingsButton%20%3D%20(%7B%20children%20%7D)%20%3D%3E%20%7B%0A%20%20const%20handlePress%20%3D%20useCallback(async%20()%20%3D%3E%20%7B%0A%20%20%20%20%2F%2F%20Open%20the%20custom%20settings%20if%20the%20app%20has%20one%0A%20%20%20%20await%20Linking.openSettings()%3B%0A%20%20%7D%2C%20%5B%5D)%3B%0A%0A%20%20return%20%3CButton%20title%3D%7Bchildren%7D%20onPress%3D%7BhandlePress%7D%20%2F%3E%3B%0A%7D%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3COpenSettingsButton%3EOpen%20Settings%3C%2FOpenSettingsButton%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%20flex%3A%201%2C%20justifyContent%3A%20%22center%22%2C%20alignItems%3A%20%22center%22%20%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),(0,a.kt)("h3",m({},{id:"\u83b7\u53d6-deep-link"}),"\u83b7\u53d6 Deep Link"),(0,a.kt)("div",m({},{className:"snack-player","data-snack-name":"Linking Function Component Example","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%2C%20useEffect%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20Linking%2C%20StyleSheet%2C%20Text%2C%20View%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20useMount%20%3D%20func%20%3D%3E%20useEffect(()%20%3D%3E%20func()%2C%20%5B%5D)%3B%0A%0Aconst%20useInitialURL%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5Burl%2C%20setUrl%5D%20%3D%20useState(null)%3B%0A%20%20const%20%5Bprocessing%2C%20setProcessing%5D%20%3D%20useState(true)%3B%0A%0A%20%20useMount(()%20%3D%3E%20%7B%0A%20%20%20%20const%20getUrlAsync%20%3D%20async%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%2F%2F%20Get%20the%20deep%20link%20used%20to%20open%20the%20app%0A%20%20%20%20%20%20const%20initialUrl%20%3D%20await%20Linking.getInitialURL()%3B%0A%0A%20%20%20%20%20%20%2F%2F%20The%20setTimeout%20is%20just%20for%20testing%20purpose%0A%20%20%20%20%20%20setTimeout(()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20setUrl(initialUrl)%3B%0A%20%20%20%20%20%20%20%20setProcessing(false)%3B%0A%20%20%20%20%20%20%7D%2C%201000)%3B%0A%20%20%20%20%7D%3B%0A%0A%20%20%20%20getUrlAsync()%3B%0A%20%20%7D)%3B%0A%0A%20%20return%20%7B%20url%2C%20processing%20%7D%3B%0A%7D%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%7B%20url%3A%20initialUrl%2C%20processing%20%7D%20%3D%20useInitialURL()%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CText%3E%0A%20%20%20%20%20%20%20%20%7Bprocessing%0A%20%20%20%20%20%20%20%20%20%20%3F%20%60Processing%20the%20initial%20url%20from%20a%20deep%20link%60%0A%20%20%20%20%20%20%20%20%20%20%3A%20%60The%20deep%20link%20is%3A%20%24%7BinitialUrl%20%7C%7C%20%22None%22%7D%60%7D%0A%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%20flex%3A%201%2C%20justifyContent%3A%20%22center%22%2C%20alignItems%3A%20%22center%22%20%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),(0,a.kt)("h3",m({},{id:"\u53d1\u9001-intents-android"}),"\u53d1\u9001 Intents (Android)"),(0,a.kt)("div",m({},{className:"snack-player","data-snack-name":"Linking Function Component Example","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useCallback%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20Alert%2C%20Button%2C%20Linking%2C%20StyleSheet%2C%20View%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20SendIntentButton%20%3D%20(%7B%20action%2C%20extras%2C%20children%20%7D)%20%3D%3E%20%7B%0A%20%20const%20handlePress%20%3D%20useCallback(async%20()%20%3D%3E%20%7B%0A%20%20%20%20try%20%7B%0A%20%20%20%20%20%20await%20Linking.sendIntent(action%2C%20extras)%3B%0A%20%20%20%20%7D%20catch%20(e)%20%7B%0A%20%20%20%20%20%20Alert.alert(e.message)%3B%0A%20%20%20%20%7D%0A%20%20%7D%2C%20%5Baction%2C%20extras%5D)%3B%0A%0A%20%20return%20%3CButton%20title%3D%7Bchildren%7D%20onPress%3D%7BhandlePress%7D%20%2F%3E%3B%0A%7D%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CSendIntentButton%20action%3D%22android.intent.action.POWER_USAGE_SUMMARY%22%3E%0A%20%20%20%20%20%20%20%20Power%20Usage%20Summary%0A%20%20%20%20%20%20%3C%2FSendIntentButton%3E%0A%20%20%20%20%20%20%3CSendIntentButton%0A%20%20%20%20%20%20%20%20action%3D%22android.settings.APP_NOTIFICATION_SETTINGS%22%0A%20%20%20%20%20%20%20%20extras%3D%7B%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%20%22android.provider.extra.APP_PACKAGE%22%3A%20%22com.facebook.katana%22%20%7D%2C%0A%20%20%20%20%20%20%20%20%5D%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20App%20Notification%20Settings%0A%20%20%20%20%20%20%3C%2FSendIntentButton%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%20flex%3A%201%2C%20justifyContent%3A%20%22center%22%2C%20alignItems%3A%20%22center%22%20%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),(0,a.kt)("hr",null),(0,a.kt)("h1",m({},{id:"\u6587\u6863"}),"\u6587\u6863"),(0,a.kt)("h2",m({},{id:"\u65b9\u6cd5"}),"\u65b9\u6cd5"),(0,a.kt)("h3",m({},{id:"constructor"}),(0,a.kt)("inlineCode",{parentName:"h3"},"constructor()")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),"constructor();\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",m({},{id:"addeventlistener"}),(0,a.kt)("inlineCode",{parentName:"h3"},"addEventListener()")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),"addEventListener(type, handler);\n")),(0,a.kt)("p",null,"\u6dfb\u52a0\u4e00\u4e2a\u76d1\u542c Linking \u53d8\u5316\u7684\u4e8b\u4ef6\u3002type \u53c2\u6570\u5e94\u586b",(0,a.kt)("inlineCode",{parentName:"p"},"url"),"\uff0c\u5e76\u63d0\u4f9b\u4e00\u4e2a\u5904\u7406\u51fd\u6570\u3002"),(0,a.kt)("hr",null),(0,a.kt)("h3",m({},{id:"removeeventlistener"}),(0,a.kt)("inlineCode",{parentName:"h3"},"removeEventListener()")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),"removeEventListener(type, handler);\n")),(0,a.kt)("p",null,"\u5220\u9664\u4e00\u4e2a\u4e8b\u4ef6\u5904\u7406\u51fd\u6570\u3002type \u53c2\u6570\u5e94\u586b",(0,a.kt)("inlineCode",{parentName:"p"},"url"),"\u3002"),(0,a.kt)("hr",null),(0,a.kt)("h3",m({},{id:"openurl"}),(0,a.kt)("inlineCode",{parentName:"h3"},"openURL()")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),"openURL(url);\n")),(0,a.kt)("p",null,"\u5c1d\u8bd5\u4f7f\u7528\u8bbe\u5907\u4e0a\u5df2\u7ecf\u5b89\u88c5\u7684\u5e94\u7528\u6253\u5f00\u6307\u5b9a\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"url"),"\u3002"),(0,a.kt)("p",null,'\u4f60\u8fd8\u53ef\u4ee5\u4f7f\u7528\u5176\u4ed6\u7c7b\u578b\u7684 URL\uff0c\u6bd4\u5982\u4e00\u4e2a\u5730\u7406\u4f4d\u7f6e\uff08\u5f62\u5982"geo:37.484847,-122.148386"\u6216\u662f\u4e00\u4e2a\u901a\u8baf\u5f55\u540d\u7247\uff0c\u53ea\u8981\u662f\u53ef\u4ee5\u901a\u8fc7\u5df2\u5b89\u88c5\u7684\u5e94\u7528\u6253\u5f00\u7684\u5373\u53ef\u3002'),(0,a.kt)("p",null,"\u672c\u65b9\u6cd5\u4f1a\u8fd4\u56de\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"\u5bf9\u8c61\u3002\u5982\u679c\u7528\u6237\u5728\u5f39\u51fa\u7684\u5bf9\u8bdd\u6846\u4e2d\u70b9\u51fb\u4e86\u786e\u8ba4\u6216\u662f url \u81ea\u52a8\u6253\u5f00\u4e86\uff0c\u5219 promise \u6210\u529f\u5b8c\u6210\u3002\u5982\u679c\u7528\u6237\u5728\u5f39\u51fa\u7684\u5bf9\u8bdd\u6846\u4e2d\u70b9\u51fb\u53d6\u6d88\u6216\u662f\u6ca1\u6709\u5bf9\u5e94\u5e94\u7528\u53ef\u4ee5\u5904\u7406\u6b64\u7c7b\u578b\u7684 url\uff0c\u5219 promise \u4f1a\u5931\u8d25\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"\u540d\u79f0"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"\u5fc5\u9700"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"url"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u662f"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u8981\u6253\u5f00\u7684 URL")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u7cfb\u7edf\u4e0d\u77e5\u9053\u5982\u4f55\u5904\u7406\u7ed9\u5b9a\u7684 URL\uff0c\u5219\u6b64\u65b9\u6cd5\u4f1a\u8c03\u7528\u5931\u8d25\u3002\u5982\u679c\u4f60\u4f20\u5165\u7684 URL \u4e0d\u662f\u4e00\u4e2a http \u94fe\u63a5\uff0c\u5219\u6700\u597d\u5148\u901a\u8fc7{@code canOpenURL}\u65b9\u6cd5\u68c0\u67e5\u4e00\u4e0b\u3002")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'\u5bf9\u4e8e web \u94fe\u63a5\u6765\u8bf4\uff0c\u534f\u8bae\u5934("http://", "https://")\u4e0d\u80fd\u7701\u7565\uff01')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'This method may behave differently in a simulator e.g. "tel:" links are not able to be handled in the iOS simulator as there\'s no access to the dialer app.')),(0,a.kt)("hr",null),(0,a.kt)("h3",m({},{id:"canopenurl"}),(0,a.kt)("inlineCode",{parentName:"h3"},"canOpenURL()")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),"canOpenURL(url);\n")),(0,a.kt)("p",null,"\u5224\u65ad\u8bbe\u5907\u4e0a\u662f\u5426\u6709\u5df2\u7ecf\u5b89\u88c5\u7684\u5e94\u7528\u53ef\u4ee5\u5904\u7406\u6307\u5b9a\u7684 URL\u3002"),(0,a.kt)("p",null,"\u672c\u65b9\u6cd5\u4f1a\u8fd4\u56de\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"\u5bf9\u8c61\u3002\u5f53\u786e\u5b9a\u4f20\u5165\u7684 URL \u53ef\u4ee5\u88ab\u5904\u7406\u65f6\uff0cpromise \u5c31\u4f1a\u8fd4\u56de\uff0c\u503c\u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f\u8868\u793a\u662f\u5426\u53ef\u4ee5\u6253\u5f00 URL\u3002"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise")," will reject on Android if it was impossible to check if the URL can be opened, and on iOS if you didn't add the specific scheme in the ",(0,a.kt)("inlineCode",{parentName:"p"},"LSApplicationQueriesSchemes")," key inside ",(0,a.kt)("inlineCode",{parentName:"p"},"Info.plist")," (see bellow)."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"\u540d\u79f0"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"\u5fc5\u9700"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"url"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u662f"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u8981\u6253\u5f00\u7684 URL")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'\u5bf9\u4e8e web \u94fe\u63a5\u6765\u8bf4\uff0c\u534f\u8bae\u5934("http://", "https://")\u4e0d\u80fd\u7701\u7565\uff01')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5bf9\u4e8e iOS 9 \u6765\u8bf4\uff0c\u4f60\u9700\u8981\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"Info.plist"),"\u4e2d\u6dfb\u52a0",(0,a.kt)("inlineCode",{parentName:"p"},"LSApplicationQueriesSchemes"),"\u5b57\u6bb5\uff0c\u5426\u5219",(0,a.kt)("inlineCode",{parentName:"p"},"canOpenURL"),"\u53ef\u80fd\u4e00\u76f4\u8fd4\u56de false\u3002")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This method has limitations on iOS 9+. From ",(0,a.kt)("a",m({parentName:"p"},{href:"https://developer.apple.com/documentation/uikit/uiapplication/1622952-canopenurl"}),"the official Apple documentation"),":")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If your app is linked against an earlier version of iOS but is running in iOS 9.0 or later, you can call this method up to 50 times. After reaching that limit, subsequent calls always return false. If the user reinstalls or upgrades the app, iOS resets the limit.")),(0,a.kt)("hr",null),(0,a.kt)("h3",m({},{id:"opensettings"}),(0,a.kt)("inlineCode",{parentName:"h3"},"openSettings()")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),"openSettings();\n")),(0,a.kt)("p",null,"Open the Settings app and displays the app\u2019s custom settings, if it has any."),(0,a.kt)("hr",null),(0,a.kt)("h3",m({},{id:"getinitialurl"}),(0,a.kt)("inlineCode",{parentName:"h3"},"getInitialURL()")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),"getInitialURL();\n")),(0,a.kt)("p",null,"\u5982\u679c\u5e94\u7528\u662f\u88ab\u4e00\u4e2a\u94fe\u63a5\u8c03\u8d77\u7684\uff0c\u5219\u4f1a\u8fd4\u56de\u76f8\u5e94\u7684\u94fe\u63a5\u5730\u5740\u3002\u5426\u5219\u5b83\u4f1a\u8fd4\u56de",(0,a.kt)("inlineCode",{parentName:"p"},"null"),"\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u8981\u5728 Android \u4e0a\u652f\u6301\u6df1\u5ea6\u94fe\u63a5\uff0c\u8bf7\u53c2\u9605",(0,a.kt)("a",m({parentName:"p"},{href:"http://developer.android.com/training/app-indexing/deep-linking.html#handling-intents"}),"http://developer.android.com/training/app-indexing/deep-linking.html#handling-intents"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"getInitialURL may return ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," while debugging is enabled. Disable the debugger to ensure it gets passed.")),(0,a.kt)("hr",null),(0,a.kt)("h3",m({},{id:"sendintent"}),(0,a.kt)("inlineCode",{parentName:"h3"},"sendIntent()")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),"sendIntent(action: string, extras?: Array<{key: string, value: string | number | boolean}>)\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"@platform android ",(0,a.kt)("strong",{parentName:"p"},"Android-Only.")," Launch an Android intent with extras (optional)")))}y.isMDXComponent=!0}}]);