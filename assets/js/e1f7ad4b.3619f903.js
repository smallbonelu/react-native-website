"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[55036],{35318:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return c}});var n=a(27378);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(a),c=l,k=m["".concat(s,".").concat(c)]||m[c]||d[c]||r;return a?n.createElement(k,i(i({ref:t},p),{},{components:a})):n.createElement(k,i({ref:t},p))}));function c(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var u=2;u<r;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},22213:function(e,t,a){a.r(t),a.d(t,{assets:function(){return f},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return m},metadata:function(){return k},toc:function(){return h}});var n=a(35318),l=Object.defineProperty,r=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,a)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,d=(e,t)=>{for(var a in t||(t={}))s.call(t,a)&&p(e,a,t[a]);if(o)for(var a of o(t))u.call(t,a)&&p(e,a,t[a]);return e};const m={id:"animatedvaluexy",title:"Animated.ValueXY"},c=void 0,k={unversionedId:"animatedvaluexy",id:"version-0.63/animatedvaluexy",title:"Animated.ValueXY",description:"2D Value for driving 2D animations, such as pan gestures. Almost identical API to normal Animated.Value, but multiplexed. Contains two regular Animated.Values under the hood.",source:"@site/versioned_docs/version-0.63/animatedvaluexy.md",sourceDirName:".",slug:"/animatedvaluexy",permalink:"/docs/0.63/animatedvaluexy",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../cndocs/animatedvaluexy.md",tags:[],version:"0.63",frontMatter:{id:"animatedvaluexy",title:"Animated.ValueXY"},sidebar:"version-0.63/api",previous:{title:"Animated.Value",permalink:"/docs/0.63/animatedvalue"},next:{title:"Appearance",permalink:"/docs/0.63/appearance"}},f={},h=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",level:2},{value:"<code>setValue()</code>",id:"setvalue",level:3},{value:"<code>setOffset()</code>",id:"setoffset",level:3},{value:"<code>flattenOffset()</code>",id:"flattenoffset",level:3},{value:"<code>extractOffset()</code>",id:"extractoffset",level:3},{value:"<code>addListener()</code>",id:"addlistener",level:3},{value:"<code>removeListener()</code>",id:"removelistener",level:3},{value:"<code>removeAllListeners()</code>",id:"removealllisteners",level:3},{value:"<code>stopAnimation()</code>",id:"stopanimation",level:3},{value:"<code>resetAnimation()</code>",id:"resetanimation",level:3},{value:"<code>getLayout()</code>",id:"getlayout",level:3},{value:"<code>getTranslateTransform()</code>",id:"gettranslatetransform",level:3},{value:"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1asunnylqm(100.00%)",id:"\u672c\u6587\u6863\u8d21\u732e\u8005sunnylqm10000",level:5}],g={toc:h};function v(e){var t,a=e,{components:l}=a,p=((e,t)=>{var a={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&u.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=d(d({},g),p),r(t,i({components:l,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"2D Value for driving 2D animations, such as pan gestures. Almost identical API to normal ",(0,n.kt)("a",d({parentName:"p"},{href:"/docs/0.63/animatedvalue"}),(0,n.kt)("inlineCode",{parentName:"a"},"Animated.Value")),", but multiplexed. Contains two regular ",(0,n.kt)("inlineCode",{parentName:"p"},"Animated.Value"),"s under the hood."),(0,n.kt)("h2",d({},{id:"\u793a\u4f8b"}),"\u793a\u4f8b"),(0,n.kt)("div",d({},{className:"snack-player","data-snack-name":"Animated.ValueXY","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useRef%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20Animated%2C%20PanResponder%2C%20StyleSheet%2C%20View%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20DraggableView%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20pan%20%3D%20useRef(new%20Animated.ValueXY()).current%3B%0A%0A%20%20const%20panResponder%20%3D%20PanResponder.create(%7B%0A%20%20%20%20onStartShouldSetPanResponder%3A%20()%20%3D%3E%20true%2C%0A%20%20%20%20onPanResponderMove%3A%20Animated.event(%5B%0A%20%20%20%20%20%20null%2C%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20dx%3A%20pan.x%2C%20%2F%2F%20x%2Cy%20are%20Animated.Value%0A%20%20%20%20%20%20%20%20dy%3A%20pan.y%2C%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%5D)%2C%0A%20%20%20%20onPanResponderRelease%3A%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20Animated.spring(%0A%20%20%20%20%20%20%20%20pan%2C%20%2F%2F%20Auto-multiplexed%0A%20%20%20%20%20%20%20%20%7B%20toValue%3A%20%7B%20x%3A%200%2C%20y%3A%200%20%7D%20%7D%20%2F%2F%20Back%20to%20zero%0A%20%20%20%20%20%20).start()%3B%0A%20%20%20%20%7D%2C%0A%20%20%7D)%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CAnimated.View%0A%20%20%20%20%20%20%20%20%7B...panResponder.panHandlers%7D%0A%20%20%20%20%20%20%20%20style%3D%7B%5Bpan.getLayout()%2C%20styles.box%5D%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%2C%0A%20%20%20%20alignItems%3A%20%22center%22%2C%0A%20%20%7D%2C%0A%20%20box%3A%20%7B%0A%20%20%20%20backgroundColor%3A%20%22%2361dafb%22%2C%0A%20%20%20%20width%3A%2080%2C%0A%20%20%20%20height%3A%2080%2C%0A%20%20%20%20borderRadius%3A%204%2C%0A%20%20%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20DraggableView%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),(0,n.kt)("hr",null),(0,n.kt)("h1",d({},{id:"\u6587\u6863"}),"\u6587\u6863"),(0,n.kt)("h2",d({},{id:"\u65b9\u6cd5"}),"\u65b9\u6cd5"),(0,n.kt)("h3",d({},{id:"setvalue"}),(0,n.kt)("inlineCode",{parentName:"h3"},"setValue()")),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"setValue(value);\n")),(0,n.kt)("p",null,"Directly set the value. This will stop any animations running on the value and update all the bound properties."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u540d\u79f0"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u5fc5\u9700"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"value"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"number"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u662f"),(0,n.kt)("td",d({parentName:"tr"},{align:null}))))),(0,n.kt)("hr",null),(0,n.kt)("h3",d({},{id:"setoffset"}),(0,n.kt)("inlineCode",{parentName:"h3"},"setOffset()")),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"setOffset(offset);\n")),(0,n.kt)("p",null,"Sets an offset that is applied on top of whatever value is set, whether via ",(0,n.kt)("inlineCode",{parentName:"p"},"setValue"),", an animation, or ",(0,n.kt)("inlineCode",{parentName:"p"},"Animated.event"),". Useful for compensating things like the start of a pan gesture."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u540d\u79f0"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u5fc5\u9700"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"offset"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"number"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u662f"),(0,n.kt)("td",d({parentName:"tr"},{align:null}))))),(0,n.kt)("hr",null),(0,n.kt)("h3",d({},{id:"flattenoffset"}),(0,n.kt)("inlineCode",{parentName:"h3"},"flattenOffset()")),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"flattenOffset();\n")),(0,n.kt)("p",null,"Merges the offset value into the base value and resets the offset to zero. The final output of the value is unchanged."),(0,n.kt)("hr",null),(0,n.kt)("h3",d({},{id:"extractoffset"}),(0,n.kt)("inlineCode",{parentName:"h3"},"extractOffset()")),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"extractOffset();\n")),(0,n.kt)("p",null,"Sets the offset value to the base value, and resets the base value to zero. The final output of the value is unchanged."),(0,n.kt)("hr",null),(0,n.kt)("h3",d({},{id:"addlistener"}),(0,n.kt)("inlineCode",{parentName:"h3"},"addListener()")),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"addListener(callback);\n")),(0,n.kt)("p",null,"Adds an asynchronous listener to the value so you can observe updates from animations. This is useful because there is no way to synchronously read the value because it might be driven natively."),(0,n.kt)("p",null,"Returns a string that serves as an identifier for the listener."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u540d\u79f0"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u5fc5\u9700"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"callback"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"function"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u662f"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"The callback function which will receive an object with a ",(0,n.kt)("inlineCode",{parentName:"td"},"value")," key set to the new value.")))),(0,n.kt)("hr",null),(0,n.kt)("h3",d({},{id:"removelistener"}),(0,n.kt)("inlineCode",{parentName:"h3"},"removeListener()")),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"removeListener(id);\n")),(0,n.kt)("p",null,"Unregister a listener. The ",(0,n.kt)("inlineCode",{parentName:"p"},"id")," param shall match the identifier previously returned by ",(0,n.kt)("inlineCode",{parentName:"p"},"addListener()"),"."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u540d\u79f0"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u5fc5\u9700"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"id"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u662f"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Id for the listener being removed.")))),(0,n.kt)("hr",null),(0,n.kt)("h3",d({},{id:"removealllisteners"}),(0,n.kt)("inlineCode",{parentName:"h3"},"removeAllListeners()")),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"removeAllListeners();\n")),(0,n.kt)("p",null,"Remove all registered listeners."),(0,n.kt)("hr",null),(0,n.kt)("h3",d({},{id:"stopanimation"}),(0,n.kt)("inlineCode",{parentName:"h3"},"stopAnimation()")),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"stopAnimation([callback]);\n")),(0,n.kt)("p",null,"Stops any running animation or tracking. ",(0,n.kt)("inlineCode",{parentName:"p"},"callback")," is invoked with the final value after stopping the animation, which is useful for updating state to match the animation position with layout."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u540d\u79f0"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u5fc5\u9700"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"callback"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"function"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u5426"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"A function that will receive the final value.")))),(0,n.kt)("hr",null),(0,n.kt)("h3",d({},{id:"resetanimation"}),(0,n.kt)("inlineCode",{parentName:"h3"},"resetAnimation()")),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"resetAnimation([callback]);\n")),(0,n.kt)("p",null,"Stops any animation and resets the value to its original."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u540d\u79f0"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u5fc5\u9700"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"callback"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"function"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u5426"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"A function that will receive the original value.")))),(0,n.kt)("hr",null),(0,n.kt)("h3",d({},{id:"getlayout"}),(0,n.kt)("inlineCode",{parentName:"h3"},"getLayout()")),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"getLayout();\n")),(0,n.kt)("p",null,"Converts ",(0,n.kt)("inlineCode",{parentName:"p"},"{x, y}")," into ",(0,n.kt)("inlineCode",{parentName:"p"},"{left, top}")," for use in style, e.g."),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"style={this.state.anim.getLayout()}\n")),(0,n.kt)("hr",null),(0,n.kt)("h3",d({},{id:"gettranslatetransform"}),(0,n.kt)("inlineCode",{parentName:"h3"},"getTranslateTransform()")),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"getTranslateTransform();\n")),(0,n.kt)("p",null,"Converts ",(0,n.kt)("inlineCode",{parentName:"p"},"{x, y}")," into a useable translation transform, e.g."),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"style={{\n  transform: this.state.anim.getTranslateTransform()\n}}\n")),(0,n.kt)("hr",null),(0,n.kt)("h5",d({},{id:"\u672c\u6587\u6863\u8d21\u732e\u8005sunnylqm10000"}),"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1a",(0,n.kt)("a",d({parentName:"h5"},{href:"https://github.com/search?q=sunnylqm&type=Users"}),"sunnylqm"),"(100.00%)"))}v.isMDXComponent=!0}}]);