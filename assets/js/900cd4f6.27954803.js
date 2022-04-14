"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[3188],{35318:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return c}});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=s(n),c=r,h=d["".concat(p,".").concat(c)]||d[c]||u[c]||i;return n?a.createElement(h,o(o({ref:t},m),{},{components:n})):a.createElement(h,o({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8068:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return c},default:function(){return y},frontMatter:function(){return d},metadata:function(){return h},toc:function(){return g}});var a=n(35318),r=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&m(e,n,t[n]);if(l)for(var n of l(t))s.call(t,n)&&m(e,n,t[n]);return e};const d={id:"optimizing-flatlist-configuration",title:"\u5217\u8868\u914d\u7f6e\u4f18\u5316"},c=void 0,h={unversionedId:"optimizing-flatlist-configuration",id:"version-0.66/optimizing-flatlist-configuration",title:"\u5217\u8868\u914d\u7f6e\u4f18\u5316",description:"\u672f\u8bed\u5b9a\u4e49",source:"@site/versioned_docs/version-0.66/optimizing-flatlist-configuration.md",sourceDirName:".",slug:"/optimizing-flatlist-configuration",permalink:"/docs/0.66/optimizing-flatlist-configuration",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../cndocs/optimizing-flatlist-configuration.md",tags:[],version:"0.66",frontMatter:{id:"optimizing-flatlist-configuration",title:"\u5217\u8868\u914d\u7f6e\u4f18\u5316"},sidebar:"docs",previous:{title:"\u6027\u80fd\u7efc\u8ff0",permalink:"/docs/0.66/performance"},next:{title:"RAM Bundles \u548c\u5185\u8054\u5f15\u7528\u4f18\u5316",permalink:"/docs/0.66/ram-bundles-inline-requires"}},k={},g=[{value:"\u672f\u8bed\u5b9a\u4e49",id:"\u672f\u8bed\u5b9a\u4e49",level:2},{value:"Props",id:"props",level:2},{value:"removeClippedSubviews",id:"removeclippedsubviews",level:3},{value:"maxToRenderPerBatch",id:"maxtorenderperbatch",level:3},{value:"updateCellsBatchingPeriod",id:"updatecellsbatchingperiod",level:3},{value:"initialNumToRender",id:"initialnumtorender",level:3},{value:"windowSize",id:"windowsize",level:3},{value:"List items",id:"list-items",level:2},{value:"Use simple components",id:"use-simple-components",level:3},{value:"Use light components",id:"use-light-components",level:3},{value:"Use shouldComponentUpdate",id:"use-shouldcomponentupdate",level:3},{value:"Use cached optimized images",id:"use-cached-optimized-images",level:3},{value:"Use getItemLayout",id:"use-getitemlayout",level:3},{value:"Use keyExtractor or key",id:"use-keyextractor-or-key",level:3},{value:"\u907f\u514d\u5728 renderItem \u4e2d\u4f7f\u7528\u533f\u540d\u51fd\u6570",id:"\u907f\u514d\u5728-renderitem-\u4e2d\u4f7f\u7528\u533f\u540d\u51fd\u6570",level:3}],f={toc:g};function y(e){var t,n=e,{components:r}=n,m=((e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&s.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=u(u({},f),m),i(t,o({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("h2",u({},{id:"\u672f\u8bed\u5b9a\u4e49"}),"\u672f\u8bed\u5b9a\u4e49"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"VirtualizedList:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"FlatList"),"\u80cc\u540e\u7684\u57fa\u7840\u652f\u6491\u7ec4\u4ef6\uff08\u662f React Native \u5bf9",(0,a.kt)("a",u({parentName:"p"},{href:"https://bvaughn.github.io/react-virtualized/#/components/List"}),(0,a.kt)("inlineCode",{parentName:"a"},"\u865a\u62df\u5217\u8868 Virtual List")),"\u6982\u5ff5\u7684\u5b9e\u73b0\uff09\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u5185\u5b58\u5f00\u9500 Memory consumption:")," \u5217\u8868\u5728\u5185\u5b58\u4e2d\u5b58\u653e\u591a\u5c11\u6570\u636e\u3002\u5f00\u9500\u8fc7\u5927\u53ef\u80fd\u5bfc\u81f4\u5e94\u7528\u5d29\u6e83\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u5ea6 Responsiveness:")," \u5e94\u7528\u5bf9\u4e8e\u7528\u6237\u64cd\u4f5c\u7684\u54cd\u5e94\u901f\u5ea6\u3002\u6bd4\u5982\u4f4e\u54cd\u5e94\u5ea6\u5c31\u662f\u4f60\u5728\u64cd\u4f5c\u65f6\uff0c\u5e94\u7528\u8981\u5361\u4e00\u4f1a\u513f\u624d\u54cd\u5e94\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u7a7a\u767d\u533a Blank areas:")," \u5f53",(0,a.kt)("inlineCode",{parentName:"p"},"VirtualizedList"),"\u6e32\u67d3\u7684\u901f\u5ea6\u8ddf\u4e0d\u4e0a\u4f60\u6ed1\u52a8\u7684\u901f\u5ea6\u65f6\uff0c\u4f60\u53ef\u80fd\u4f1a\u5728\u5217\u8868\u4e2d\u770b\u5230\u4e00\u4e9b\u5c1a\u672a\u5b8c\u6210\u6e32\u67d3\u7684\u7a7a\u767d\u5360\u4f4d\u5143\u7d20\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u89c6\u53e3 Viewport:")," \u5df2\u6e32\u67d3\u5185\u5bb9\u7684\u53ef\u89c6\u533a\u57df\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u6ed1\u52a8\u7a97\u53e3 Window:")," The area in which items should be mounted, which is generally much larger than the viewport."))),(0,a.kt)("h2",u({},{id:"props"}),"Props"),(0,a.kt)("p",null,"Here are a list of props that can help to improve ",(0,a.kt)("inlineCode",{parentName:"p"},"FlatList")," performance:"),(0,a.kt)("h3",u({},{id:"removeclippedsubviews"}),"removeClippedSubviews"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"False")))),(0,a.kt)("p",null,"If ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", views that are outside of the viewport are detached from the native view hierarchy."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u597d\u5904\uff1a")," \u542f\u7528\u6b64\u9009\u9879\u53ef\u51cf\u5c11\u82b1\u5728\u4e3b\u7ebf\u7a0b\u4e0a\u7684\u65f6\u95f4\uff0c\u4ece\u800c\u964d\u4f4e\u4e22\u5e27\u7684\u98ce\u9669\u3002\u539f\u7406\u662f\u5bf9\u89c6\u53e3\u4e4b\u5916\u7684\u89c6\u56fe\u4e0d\u8fdb\u884c\u672c\u5730\u6e32\u67d3\u548c\u7ed8\u56fe\u904d\u5386\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u574f\u5904\uff1a")," \u8bf7\u6ce8\u610f\uff0c\u8fd9\u79cd\u5b9e\u73b0\u53ef\u80fd\u4f1a\u6709 bug\uff0c\u6bd4\u5982\u4e22\u5931\u5185\u5bb9\uff08\u4e3b\u8981\u662f\u5728 iOS \u4e0a\u89c2\u5bdf\u5230\u7684\uff09\uff0c\u7279\u522b\u662f\u5f53\u4f60\u4f7f\u7528\u53d8\u6362\u548c/\u6216\u7edd\u5bf9\u5b9a\u4f4d\u505a\u590d\u6742\u7684\u4e8b\u60c5\u65f6\u3002\u53e6\u5916\uff0c\u8bf7\u6ce8\u610f\u8fd9\u5e76\u4e0d\u4f1a\u8282\u7701\u5927\u91cf\u7684\u5185\u5b58\uff0c\u56e0\u4e3a\u89c6\u56fe\u5e76\u6ca1\u6709\u88ab\u9500\u6bc1\uff0c\u53ea\u662f\u88ab\u5206\u79bb\u4e86\u3002"),(0,a.kt)("h3",u({},{id:"maxtorenderperbatch"}),"maxToRenderPerBatch"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Number"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"10")))),(0,a.kt)("p",null,"It is a ",(0,a.kt)("inlineCode",{parentName:"p"},"VirtualizedList")," prop that can be passed through ",(0,a.kt)("inlineCode",{parentName:"p"},"FlatList"),". This controls the amount of items rendered per batch, which is the next chunk of items rendered on every scroll."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u597d\u5904\uff1a")," Setting a bigger number means less visual blank areas when scrolling (increases the fill rate)."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u574f\u5904\uff1a")," More items per batch means longer periods of JavaScript execution potentially blocking other event processing, like presses, hurting responsiveness."),(0,a.kt)("h3",u({},{id:"updatecellsbatchingperiod"}),"updateCellsBatchingPeriod"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Number"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"50")))),(0,a.kt)("p",null,"While ",(0,a.kt)("inlineCode",{parentName:"p"},"maxToRenderPerBatch")," tells the amount of items rendered per batch, setting ",(0,a.kt)("inlineCode",{parentName:"p"},"updateCellsBatchingPeriod")," tells your ",(0,a.kt)("inlineCode",{parentName:"p"},"VirtualizedList")," the delay in milliseconds between batch renders (how frequently your component will be rendering the windowed items)."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u597d\u5904\uff1a")," Combining this prop with ",(0,a.kt)("inlineCode",{parentName:"p"},"maxToRenderPerBatch")," gives you the power to, for example, render more items in a less frequent batch, or less items in a more frequent batch."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u574f\u5904\uff1a")," Less frequent batches may cause blank areas, More frequent batches may cause responsiveness issues."),(0,a.kt)("h3",u({},{id:"initialnumtorender"}),"initialNumToRender"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Number"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"10")))),(0,a.kt)("p",null,"The initial amount of items to render."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u597d\u5904\uff1a")," \u4e3a\u6bcf\u4e2a\u8bbe\u5907\u5b9a\u4e49\u7cbe\u786e\u7684\uff08\u521a\u597d\u53ef\u4ee5\uff09\u8986\u76d6\u5c4f\u5e55\u7684\u9879\u76ee\u6570\u91cf\u3002\u8fd9\u53ef\u4ee5\u5927\u5927\u63d0\u5347\u521d\u59cb\u6e32\u67d3\u7684\u6027\u80fd\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u574f\u5904\uff1a")," Setting a low ",(0,a.kt)("inlineCode",{parentName:"p"},"initialNumToRender")," may cause blank areas, especially if it's too small to cover the viewport on initial render."),(0,a.kt)("h3",u({},{id:"windowsize"}),"windowSize"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Number"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"21")))),(0,a.kt)("p",null,"The number passed here is a measurement unit where 1 is equivalent to your viewport height. The default value is 21 (10 viewports above, 10 below, and one in between)."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u597d\u5904\uff1a")," Bigger ",(0,a.kt)("inlineCode",{parentName:"p"},"windowSize")," will result in less chance of seeing blank space while scrolling. On the other hand, smaller ",(0,a.kt)("inlineCode",{parentName:"p"},"windowSize")," will result in fewer items mounted simultaneously, saving memory."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u574f\u5904\uff1a")," For a bigger ",(0,a.kt)("inlineCode",{parentName:"p"},"windowSize"),", you will have more memory consumption. For a lower ",(0,a.kt)("inlineCode",{parentName:"p"},"windowSize"),", you will have a bigger chance of seeing blank areas."),(0,a.kt)("h2",u({},{id:"list-items"}),"List items"),(0,a.kt)("p",null,"Below are some tips about list item components. They are the core of your list, so they need to be fast."),(0,a.kt)("h3",u({},{id:"use-simple-components"}),"Use simple components"),(0,a.kt)("p",null,"The more complex your components are, the slower they will render. Try to avoid a lot of logic and nesting in your list items. If you are reusing this list item component a lot in your app, create a component just for your big lists and make them with as little logic and nesting as possible."),(0,a.kt)("h3",u({},{id:"use-light-components"}),"Use light components"),(0,a.kt)("p",null,"The heavier your components are, the slower they render. Avoid heavy images (use a cropped version or thumbnail for list items, as small as possible). Talk to your design team, use as little effects and interactions and information as possible in your list. Show them in your item's detail."),(0,a.kt)("h3",u({},{id:"use-shouldcomponentupdate"}),"Use shouldComponentUpdate"),(0,a.kt)("p",null,"Implement update verification to your components. React's ",(0,a.kt)("inlineCode",{parentName:"p"},"PureComponent")," implement a ",(0,a.kt)("a",u({parentName:"p"},{href:"https://zh-hans.reactjs.org/docs/react-component.html#shouldcomponentupdate"}),(0,a.kt)("inlineCode",{parentName:"a"},"shouldComponentUpdate"))," with shallow comparison. This is expensive here because it need to check all your props. If you want a good bit-level performance, create the strictest rules for your list item components, checking only props that could potentially change. If your list is simple enough, you could even use"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-jsx"}),"shouldComponentUpdate() {\n  return false\n}\n")),(0,a.kt)("h3",u({},{id:"use-cached-optimized-images"}),"Use cached optimized images"),(0,a.kt)("p",null,"You can use the community packages (such as ",(0,a.kt)("a",u({parentName:"p"},{href:"https://github.com/DylanVann/react-native-fast-image"}),"react-native-fast-image")," from ",(0,a.kt)("a",u({parentName:"p"},{href:"https://github.com/DylanVann"}),"@DylanVann"),") for more performant images. Every image in your list is a ",(0,a.kt)("inlineCode",{parentName:"p"},"new Image()")," instance. The faster it reaches the ",(0,a.kt)("inlineCode",{parentName:"p"},"loaded")," hook, the faster your Javascript thread will be free again."),(0,a.kt)("h3",u({},{id:"use-getitemlayout"}),"Use getItemLayout"),(0,a.kt)("p",null,"If all your list item components have the same height (or width, for a horizontal list), providing the ",(0,a.kt)("a",u({parentName:"p"},{href:"flatlist#getitemlayout"}),"getItemLayout")," prop removes the need for your ",(0,a.kt)("inlineCode",{parentName:"p"},"FlatList")," to manage async layout calculations. This is a very desirable optimization technique."),(0,a.kt)("p",null,"If your components have dynamic size and you really need performance, consider asking your design team if they may think of a redesign in order to perform better."),(0,a.kt)("h3",u({},{id:"use-keyextractor-or-key"}),"Use keyExtractor or key"),(0,a.kt)("p",null,"You can set the ",(0,a.kt)("a",u({parentName:"p"},{href:"flatlist#keyextractor"}),(0,a.kt)("inlineCode",{parentName:"a"},"keyExtractor"))," to your ",(0,a.kt)("inlineCode",{parentName:"p"},"FlatList")," component. This prop is used for caching and as the React ",(0,a.kt)("inlineCode",{parentName:"p"},"key")," to track item re-ordering."),(0,a.kt)("p",null,"You can also use a ",(0,a.kt)("inlineCode",{parentName:"p"},"key")," prop in you item component."),(0,a.kt)("h3",u({},{id:"\u907f\u514d\u5728-renderitem-\u4e2d\u4f7f\u7528\u533f\u540d\u51fd\u6570"}),"\u907f\u514d\u5728 renderItem \u4e2d\u4f7f\u7528\u533f\u540d\u51fd\u6570"),(0,a.kt)("p",null,"Move out the ",(0,a.kt)("inlineCode",{parentName:"p"},"renderItem")," function to the outside of render function, so it won't recreate itself each time render function called."),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-jsx"}),"renderItem = ({ item }) => (<View key={item.key}><Text>{item.title}</Text></View>);\n\nrender(){\n  // ...\n\n  <FlatList\n    data={items}\n    renderItem={renderItem}\n  />\n\n  // ...\n}\n")))}y.isMDXComponent=!0}}]);