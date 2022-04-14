"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[92405],{35318:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return c}});var n=a(27378);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,d=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(a),c=l,A=m["".concat(d,".").concat(c)]||m[c]||p[c]||r;return a?n.createElement(A,i(i({ref:t},u),{},{components:a})):n.createElement(A,i({ref:t},u))}));function c(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var s=2;s<r;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},11674:function(e,t,a){var n=a(63445);const l=!!n.default.canUseDOM&&navigator.platform.startsWith("Mac"),r=!!n.default.canUseDOM&&navigator.platform.startsWith("Win"),i=l?"ios":"android",o=l?"macos":r?"windows":"linux";t.Z={defaultGuide:"native",defaultOs:o,defaultPackageManager:"npm",defaultPlatform:i,defaultSyntax:"functional",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}},37785:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(27378),l=Object.defineProperty,r=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,d=(e,t,a)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function s({children:e,hidden:t,className:a}){return n.createElement("div",((e,t)=>{for(var a in t||(t={}))i.call(t,a)&&d(e,a,t[a]);if(r)for(var a of r(t))o.call(t,a)&&d(e,a,t[a]);return e})({role:"tabpanel"},{hidden:t,className:a}),e)}},93139:function(e,t,a){a.d(t,{Z:function(){return h}});var n=a(27378),l=a(14185),r=a(15324),i=a(38944),o="tabItem_WhCL",d=Object.defineProperty,s=Object.defineProperties,u=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,A=(e,t,a)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,k=(e,t)=>{for(var a in t||(t={}))m.call(t,a)&&A(e,a,t[a]);if(p)for(var a of p(t))c.call(t,a)&&A(e,a,t[a]);return e};function b(e){var t,a,l;const{lazy:d,block:p,defaultValue:m,values:c,groupId:A,className:b}=e,h=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=null!=c?c:h.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),y=(0,r.lx)(g,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===m?m:null!=(l=null!=m?m:null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)?l:null==(a=h[0])?void 0:a.props.value;if(null!==f&&!g.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:C}=(0,r.UB)(),[v,D]=(0,n.useState)(f),w=[],{blockElementScrollPositionUntilNextRender:B}=(0,r.o5)();if(null!=A){const e=N[A];null!=e&&e!==v&&g.some((t=>t.value===e))&&D(e)}const O=e=>{const t=e.currentTarget,a=w.indexOf(t),n=g[a].value;n!==v&&(B(t),D(n),null!=A&&C(A,n))},E=e=>{let t=null;switch(e.key){case"ArrowRight":{const a=w.indexOf(e.currentTarget)+1;t=w[a]||w[0];break}case"ArrowLeft":{const a=w.indexOf(e.currentTarget)-1;t=w[a]||w[w.length-1];break}}null==t||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":p},b)},g.map((({value:e,label:t,attributes:a})=>{return n.createElement("li",(l=k({role:"tab",tabIndex:v===e?0:-1,"aria-selected":v===e,key:e,ref:e=>w.push(e),onKeyDown:E,onFocus:O,onClick:O},a),r={className:(0,i.Z)("tabs__item",o,null==a?void 0:a.className,{"tabs__item--active":v===e})},s(l,u(r))),null!=t?t:e);var l,r}))),d?(0,n.cloneElement)(h.filter((e=>e.props.value===v))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},h.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==v})))))}function h(e){const t=(0,l.Z)();return n.createElement(b,k({key:String(t)},e))}},63563:function(e,t,a){a.r(t),a.d(t,{assets:function(){return g},contentTitle:function(){return b},default:function(){return N},frontMatter:function(){return k},metadata:function(){return h},toc:function(){return y}});var n=a(35318),l=a(93139),r=a(37785),i=a(11674),o=Object.defineProperty,d=Object.defineProperties,s=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,c=(e,t,a)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,A=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&c(e,a,t[a]);if(u)for(var a of u(t))m.call(t,a)&&c(e,a,t[a]);return e};const k={id:"modal",title:"Modal"},b=void 0,h={unversionedId:"modal",id:"version-0.64/modal",title:"Modal",description:"Modal \u7ec4\u4ef6\u662f\u4e00\u79cd\u7b80\u5355\u7684\u8986\u76d6\u5728\u5176\u4ed6\u89c6\u56fe\u4e4b\u4e0a\u663e\u793a\u5185\u5bb9\u7684\u65b9\u5f0f\u3002",source:"@site/versioned_docs/version-0.64/modal.md",sourceDirName:".",slug:"/modal",permalink:"/docs/0.64/modal",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../cndocs/modal.md",tags:[],version:"0.64",frontMatter:{id:"modal",title:"Modal"},sidebar:"version-0.64/\u7ec4\u4ef6",previous:{title:"KeyboardAvoidingView",permalink:"/docs/0.64/keyboardavoidingview"},next:{title:"Pressable",permalink:"/docs/0.64/pressable"}},g={},y=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"Props",id:"props",level:2},{value:"<code>visible</code>",id:"visible",level:3},{value:"<code>supportedOrientations</code>",id:"supportedorientations",level:3},{value:"<code>onRequestClose</code>",id:"onrequestclose",level:3},{value:"<code>onShow</code>",id:"onshow",level:3},{value:"<code>transparent</code>",id:"transparent",level:3},{value:"<code>animationType</code>",id:"animationtype",level:3},{value:"<code>hardwareAccelerated</code>",id:"hardwareaccelerated",level:3},{value:"<code>statusBarTranslucent</code>",id:"statusbartranslucent",level:3},{value:"<code>onDismiss</code>",id:"ondismiss",level:3},{value:"<code>onOrientationChange</code>",id:"onorientationchange",level:3},{value:"<code>presentationStyle</code>",id:"presentationstyle",level:3}],f={toc:y};function N(e){var t,a=e,{components:o}=a,c=((e,t)=>{var a={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&u)for(var n of u(e))t.indexOf(n)<0&&m.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=A(A({},f),c),d(t,s({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Modal \u7ec4\u4ef6\u662f\u4e00\u79cd\u7b80\u5355\u7684\u8986\u76d6\u5728\u5176\u4ed6\u89c6\u56fe\u4e4b\u4e0a\u663e\u793a\u5185\u5bb9\u7684\u65b9\u5f0f\u3002"),(0,n.kt)("h2",A({},{id:"\u793a\u4f8b"}),"\u793a\u4f8b"),(0,n.kt)(l.Z,{groupId:"syntax",defaultValue:i.Z.defaultSyntax,values:i.Z.syntax,mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"functional",mdxType:"TabItem"},(0,n.kt)("div",A({},{className:"snack-player","data-snack-name":"Modal","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%0A%20%20Alert%2C%0A%20%20Modal%2C%0A%20%20StyleSheet%2C%0A%20%20Text%2C%0A%20%20TouchableHighlight%2C%0A%20%20View%0A%7D%20from%20%22react-native%22%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5BmodalVisible%2C%20setModalVisible%5D%20%3D%20useState(false)%3B%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.centeredView%7D%3E%0A%20%20%20%20%20%20%3CModal%0A%20%20%20%20%20%20%20%20animationType%3D%22slide%22%0A%20%20%20%20%20%20%20%20transparent%3D%7Btrue%7D%0A%20%20%20%20%20%20%20%20visible%3D%7BmodalVisible%7D%0A%20%20%20%20%20%20%20%20onRequestClose%3D%7B()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20Alert.alert(%22Modal%20has%20been%20closed.%22)%3B%0A%20%20%20%20%20%20%20%20%20%20setModalVisible(!modalVisible)%3B%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.centeredView%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.modalView%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.modalText%7D%3EHello%20World!%3C%2FText%3E%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CTouchableHighlight%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20style%3D%7B%7B%20...styles.openButton%2C%20backgroundColor%3A%20%22%232196F3%22%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20setModalVisible(!modalVisible)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.textStyle%7D%3EHide%20Modal%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FTouchableHighlight%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3C%2FModal%3E%0A%0A%20%20%20%20%20%20%3CTouchableHighlight%0A%20%20%20%20%20%20%20%20style%3D%7Bstyles.openButton%7D%0A%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20setModalVisible(true)%3B%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.textStyle%7D%3EShow%20Modal%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FTouchableHighlight%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20centeredView%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%2C%0A%20%20%20%20alignItems%3A%20%22center%22%2C%0A%20%20%20%20marginTop%3A%2022%0A%20%20%7D%2C%0A%20%20modalView%3A%20%7B%0A%20%20%20%20margin%3A%2020%2C%0A%20%20%20%20backgroundColor%3A%20%22white%22%2C%0A%20%20%20%20borderRadius%3A%2020%2C%0A%20%20%20%20padding%3A%2035%2C%0A%20%20%20%20alignItems%3A%20%22center%22%2C%0A%20%20%20%20shadowColor%3A%20%22%23000%22%2C%0A%20%20%20%20shadowOffset%3A%20%7B%0A%20%20%20%20%20%20width%3A%200%2C%0A%20%20%20%20%20%20height%3A%202%0A%20%20%20%20%7D%2C%0A%20%20%20%20shadowOpacity%3A%200.25%2C%0A%20%20%20%20shadowRadius%3A%203.84%2C%0A%20%20%20%20elevation%3A%205%0A%20%20%7D%2C%0A%20%20openButton%3A%20%7B%0A%20%20%20%20backgroundColor%3A%20%22%23F194FF%22%2C%0A%20%20%20%20borderRadius%3A%2020%2C%0A%20%20%20%20padding%3A%2010%2C%0A%20%20%20%20elevation%3A%202%0A%20%20%7D%2C%0A%20%20textStyle%3A%20%7B%0A%20%20%20%20color%3A%20%22white%22%2C%0A%20%20%20%20fontWeight%3A%20%22bold%22%2C%0A%20%20%20%20textAlign%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20modalText%3A%20%7B%0A%20%20%20%20marginBottom%3A%2015%2C%0A%20%20%20%20textAlign%3A%20%22center%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android,ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))),(0,n.kt)(r.Z,{value:"classical",mdxType:"TabItem"},(0,n.kt)("div",A({},{className:"snack-player","data-snack-name":"Modal","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20Component%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%0A%20%20Alert%2C%0A%20%20Modal%2C%0A%20%20StyleSheet%2C%0A%20%20Text%2C%0A%20%20TouchableHighlight%2C%0A%20%20View%0A%7D%20from%20%22react-native%22%3B%0A%0Aclass%20App%20extends%20Component%20%7B%0A%20%20state%20%3D%20%7B%0A%20%20%20%20modalVisible%3A%20false%0A%20%20%7D%3B%0A%0A%20%20setModalVisible%20%3D%20(visible)%20%3D%3E%20%7B%0A%20%20%20%20this.setState(%7B%20modalVisible%3A%20visible%20%7D)%3B%0A%20%20%7D%0A%0A%20%20render()%20%7B%0A%20%20%20%20const%20%7B%20modalVisible%20%7D%20%3D%20this.state%3B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.centeredView%7D%3E%0A%20%20%20%20%20%20%20%20%3CModal%0A%20%20%20%20%20%20%20%20%20%20animationType%3D%22slide%22%0A%20%20%20%20%20%20%20%20%20%20transparent%3D%7Btrue%7D%0A%20%20%20%20%20%20%20%20%20%20visible%3D%7BmodalVisible%7D%0A%20%20%20%20%20%20%20%20%20%20onRequestClose%3D%7B()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20Alert.alert(%22Modal%20has%20been%20closed.%22)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20this.setModalVisible(!modalVisible)%3B%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.centeredView%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.modalView%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.modalText%7D%3EHello%20World!%3C%2FText%3E%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CTouchableHighlight%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20style%3D%7B%7B%20...styles.openButton%2C%20backgroundColor%3A%20%22%232196F3%22%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20this.setModalVisible(!modalVisible)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.textStyle%7D%3EHide%20Modal%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FTouchableHighlight%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%3C%2FModal%3E%0A%0A%20%20%20%20%20%20%20%20%3CTouchableHighlight%0A%20%20%20%20%20%20%20%20%20%20style%3D%7Bstyles.openButton%7D%0A%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20this.setModalVisible(true)%3B%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.textStyle%7D%3EShow%20Modal%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3C%2FTouchableHighlight%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%20%20%7D%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20centeredView%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%2C%0A%20%20%20%20alignItems%3A%20%22center%22%2C%0A%20%20%20%20marginTop%3A%2022%0A%20%20%7D%2C%0A%20%20modalView%3A%20%7B%0A%20%20%20%20margin%3A%2020%2C%0A%20%20%20%20backgroundColor%3A%20%22white%22%2C%0A%20%20%20%20borderRadius%3A%2020%2C%0A%20%20%20%20padding%3A%2035%2C%0A%20%20%20%20alignItems%3A%20%22center%22%2C%0A%20%20%20%20shadowColor%3A%20%22%23000%22%2C%0A%20%20%20%20shadowOffset%3A%20%7B%0A%20%20%20%20%20%20width%3A%200%2C%0A%20%20%20%20%20%20height%3A%202%0A%20%20%20%20%7D%2C%0A%20%20%20%20shadowOpacity%3A%200.25%2C%0A%20%20%20%20shadowRadius%3A%203.84%2C%0A%20%20%20%20elevation%3A%205%0A%20%20%7D%2C%0A%20%20openButton%3A%20%7B%0A%20%20%20%20backgroundColor%3A%20%22%23F194FF%22%2C%0A%20%20%20%20borderRadius%3A%2020%2C%0A%20%20%20%20padding%3A%2010%2C%0A%20%20%20%20elevation%3A%202%0A%20%20%7D%2C%0A%20%20textStyle%3A%20%7B%0A%20%20%20%20color%3A%20%22white%22%2C%0A%20%20%20%20fontWeight%3A%20%22bold%22%2C%0A%20%20%20%20textAlign%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20modalText%3A%20%7B%0A%20%20%20%20marginBottom%3A%2015%2C%0A%20%20%20%20textAlign%3A%20%22center%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android,ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})))),(0,n.kt)("hr",null),(0,n.kt)("h1",A({},{id:"\u6587\u6863"}),"\u6587\u6863"),(0,n.kt)("h2",A({},{id:"props"}),"Props"),(0,n.kt)("h3",A({},{id:"visible"}),(0,n.kt)("inlineCode",{parentName:"h3"},"visible")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"visible"),"\u5c5e\u6027\u51b3\u5b9a modal \u662f\u5426\u663e\u793a\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",A({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",A({parentName:"tr"},{align:null}),"\u5fc5\u9700"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",A({parentName:"tr"},{align:null}),"bool"),(0,n.kt)("td",A({parentName:"tr"},{align:null}),"\u5426")))),(0,n.kt)("hr",null),(0,n.kt)("h3",A({},{id:"supportedorientations"}),(0,n.kt)("inlineCode",{parentName:"h3"},"supportedOrientations")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"supportedOrientations"),"\u7528\u4e8e\u6307\u5b9a\u5728\u8bbe\u5907\u5207\u6362\u6a2a\u7ad6\u5c4f\u65b9\u5411\u65f6\uff0cmodal \u4f1a\u5728\u54ea\u4e9b\u5c4f\u5e55\u671d\u5411\u4e0b\u8ddf\u968f\u65cb\u8f6c\u3002\u5728 iOS \u4e0a\uff0c\u9664\u4e86\u672c\u5c5e\u6027\u5916\uff0c\u8fd8\u4f1a\u53d7\u5230\u5e94\u7528\u7684 Info.plist \u6587\u4ef6\u4e2d",(0,n.kt)("inlineCode",{parentName:"p"},"UISupportedInterfaceOrientations"),"\u7684\u9650\u5236\u3002\u5982\u679c\u8fd8\u8bbe\u7f6e\u4e86",(0,n.kt)("inlineCode",{parentName:"p"},"presentationStyle"),"\u5c5e\u6027\u4e3a",(0,n.kt)("inlineCode",{parentName:"p"},"pageSheet"),"\u6216",(0,n.kt)("inlineCode",{parentName:"p"},"formSheet"),"\uff0c\u5219\u5728 iOS \u4e0a\u672c\u5c5e\u6027\u5c06\u88ab\u5ffd\u7565\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",A({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",A({parentName:"tr"},{align:null}),"\u5fc5\u9700"),(0,n.kt)("th",A({parentName:"tr"},{align:null}),"\u5e73\u53f0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",A({parentName:"tr"},{align:null}),"array of enum('portrait', 'portrait-upside-down', 'landscape', 'landscape-left', 'landscape-right')"),(0,n.kt)("td",A({parentName:"tr"},{align:null}),"\u5426"),(0,n.kt)("td",A({parentName:"tr"},{align:null}),"iOS")))),(0,n.kt)("hr",null),(0,n.kt)("h3",A({},{id:"onrequestclose"}),(0,n.kt)("inlineCode",{parentName:"h3"},"onRequestClose")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"onRequestClose"),"\u56de\u8c03\u4f1a\u5728\u7528\u6237\u6309\u4e0b Android \u8bbe\u5907\u4e0a\u7684\u540e\u9000\u6309\u952e\u6216\u662f Apple TV \u4e0a\u7684\u83dc\u5355\u952e\u65f6\u89e6\u53d1\u3002\u8bf7\u52a1\u5fc5\u6ce8\u610f\u672c\u5c5e\u6027\u5728 Android \u5e73\u53f0\u4e0a\u4e3a\u5fc5\u9700\uff0c\u4e14\u4f1a\u5728 modal \u5904\u4e8e\u5f00\u542f\u72b6\u6001\u65f6\u963b\u6b62",(0,n.kt)("inlineCode",{parentName:"p"},"BackHandler"),"\u4e8b\u4ef6\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",A({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",A({parentName:"tr"},{align:null}),"\u5fc5\u9700"),(0,n.kt)("th",A({parentName:"tr"},{align:null}),"\u5e73\u53f0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",A({parentName:"tr"},{align:null}),"function"),(0,n.kt)("td",A({parentName:"tr"},{align:null}),"\u662f"),(0,n.kt)("td",A({parentName:"tr"},{align:null}),"Android, Platform.isTVOS")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",A({parentName:"tr"},{align:null}),"function"),(0,n.kt)("td",A({parentName:"tr"},{align:null}),"\u5426"),(0,n.kt)("td",A({parentName:"tr"},{align:null}),"(Others)")))),(0,n.kt)("hr",null),(0,n.kt)("h3",A({},{id:"onshow"}),(0,n.kt)("inlineCode",{parentName:"h3"},"onShow")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"onShow"),"\u56de\u8c03\u51fd\u6570\u4f1a\u5728 modal \u663e\u793a\u65f6\u8c03\u7528\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",A({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",A({parentName:"tr"},{align:null}),"\u5fc5\u9700"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",A({parentName:"tr"},{align:null}),"function"),(0,n.kt)("td",A({parentName:"tr"},{align:null}),"\u5426")))),(0,n.kt)("hr",null),(0,n.kt)("h3",A({},{id:"transparent"}),(0,n.kt)("inlineCode",{parentName:"h3"},"transparent")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"transparent")," \u5c5e\u6027\u662f\u6307\u80cc\u666f\u662f\u5426\u900f\u660e\uff0c\u9ed8\u8ba4\u4e3a\u767d\u8272\uff0c\u5c06\u8fd9\u4e2a\u5c5e\u6027\u8bbe\u4e3a\uff1atrue \u7684\u65f6\u5019\u5f39\u51fa\u4e00\u4e2a\u900f\u660e\u80cc\u666f\u5c42\u7684 modal\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",A({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",A({parentName:"tr"},{align:null}),"\u5fc5\u9700"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",A({parentName:"tr"},{align:null}),"bool"),(0,n.kt)("td",A({parentName:"tr"},{align:null}),"\u5426")))),(0,n.kt)("hr",null),(0,n.kt)("h3",A({},{id:"animationtype"}),(0,n.kt)("inlineCode",{parentName:"h3"},"animationType")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"animationType"),"\u6307\u5b9a\u4e86 modal \u7684\u52a8\u753b\u7c7b\u578b\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"slide")," \u4ece\u5e95\u90e8\u6ed1\u5165\u6ed1\u51fa\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"fade")," \u6de1\u5165\u6de1\u51fa\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"none")," \u6ca1\u6709\u52a8\u753b\uff0c\u76f4\u63a5\u8e66\u51fa\u6765\u3002")),(0,n.kt)("p",null,"\u9ed8\u8ba4\u503c\u4e3a",(0,n.kt)("inlineCode",{parentName:"p"},"none"),"\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",A({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",A({parentName:"tr"},{align:null}),"\u5fc5\u9700"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",A({parentName:"tr"},{align:null}),"enum('none', 'slide', 'fade')"),(0,n.kt)("td",A({parentName:"tr"},{align:null}),"\u5426")))),(0,n.kt)("hr",null),(0,n.kt)("h3",A({},{id:"hardwareaccelerated"}),(0,n.kt)("inlineCode",{parentName:"h3"},"hardwareAccelerated")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"hardwareAccelerated"),"\u5c5e\u6027\u51b3\u5b9a\u662f\u5426\u5f3a\u5236\u542f\u7528\u786c\u4ef6\u52a0\u901f\u6765\u7ed8\u5236\u5f39\u51fa\u5c42\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",A({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",A({parentName:"tr"},{align:null}),"\u5fc5\u9700"),(0,n.kt)("th",A({parentName:"tr"},{align:null}),"\u5e73\u53f0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",A({parentName:"tr"},{align:null}),"bool"),(0,n.kt)("td",A({parentName:"tr"},{align:null}),"\u5426"),(0,n.kt)("td",A({parentName:"tr"},{align:null}),"Android")))),(0,n.kt)("hr",null),(0,n.kt)("h3",A({},{id:"statusbartranslucent"}),(0,n.kt)("inlineCode",{parentName:"h3"},"statusBarTranslucent")),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"statusBarTranslucent")," prop determines whether your modal should go under the system statusbar."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",A({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",A({parentName:"tr"},{align:null}),"\u5fc5\u9700"),(0,n.kt)("th",A({parentName:"tr"},{align:null}),"\u5e73\u53f0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",A({parentName:"tr"},{align:null}),"bool"),(0,n.kt)("td",A({parentName:"tr"},{align:null}),"\u5426"),(0,n.kt)("td",A({parentName:"tr"},{align:null}),"Android")))),(0,n.kt)("hr",null),(0,n.kt)("h3",A({},{id:"ondismiss"}),(0,n.kt)("inlineCode",{parentName:"h3"},"onDismiss")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"onDismiss"),"\u56de\u8c03\u4f1a\u5728 modal \u88ab\u5173\u95ed\u65f6\u8c03\u7528\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",A({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",A({parentName:"tr"},{align:null}),"\u5fc5\u9700"),(0,n.kt)("th",A({parentName:"tr"},{align:null}),"\u5e73\u53f0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",A({parentName:"tr"},{align:null}),"function"),(0,n.kt)("td",A({parentName:"tr"},{align:null}),"\u5426"),(0,n.kt)("td",A({parentName:"tr"},{align:null}),"iOS")))),(0,n.kt)("hr",null),(0,n.kt)("h3",A({},{id:"onorientationchange"}),(0,n.kt)("inlineCode",{parentName:"h3"},"onOrientationChange")),(0,n.kt)("p",null,"\u6a21\u6001\u7a97\u663e\u793a\u7684\u65f6\u5019\uff0c\u5f53\u8bbe\u5907\u65b9\u5411\u53d1\u751f\u66f4\u6539\u65f6\uff0c\u5c06\u8c03\u7528",(0,n.kt)("inlineCode",{parentName:"p"},"onOrientationChange"),"\u56de\u8c03\u65b9\u6cd5\u3002 \u63d0\u4f9b\u7684\u8bbe\u5907\u65b9\u5411\u4ec5\u4e3a\u201c\u7ad6\u5c4f\u201d\u6216\u201c\u6a2a\u5c4f\u201d\u3002 \u65e0\u8bba\u5f53\u524d\u65b9\u5411\u5982\u4f55\uff0c\u4e5f\u4f1a\u5728\u521d\u59cb\u6e32\u67d3\u65f6\u8c03\u7528\u6b64\u56de\u8c03\u65b9\u6cd5\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",A({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",A({parentName:"tr"},{align:null}),"\u5fc5\u9700"),(0,n.kt)("th",A({parentName:"tr"},{align:null}),"\u5e73\u53f0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",A({parentName:"tr"},{align:null}),"function"),(0,n.kt)("td",A({parentName:"tr"},{align:null}),"\u5426"),(0,n.kt)("td",A({parentName:"tr"},{align:null}),"iOS")))),(0,n.kt)("hr",null),(0,n.kt)("h3",A({},{id:"presentationstyle"}),(0,n.kt)("inlineCode",{parentName:"h3"},"presentationStyle")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"presentationStyle"),"\u51b3\u5b9a modal\uff08\u5728\u8f83\u5927\u5c4f\u5e55\u7684\u8bbe\u5907\u6bd4\u5982 iPad \u6216\u662f Plus \u673a\u578b\uff09\u5982\u4f55\u5c55\u73b0\u3002\u66f4\u591a\u7ec6\u8282\u8bf7\u53c2\u9605",(0,n.kt)("a",A({parentName:"p"},{href:"https://developer.apple.com/reference/uikit/uimodalpresentationstyle"}),"https://developer.apple.com/reference/uikit/uimodalpresentationstyle"),"\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"fullScreen"),"\u5b8c\u5168\u76d6\u6ee1\u5c4f\u5e55\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"pageSheet"),"\u7ad6\u76f4\u65b9\u5411\u51e0\u4e4e\u76d6\u6ee1\uff0c\u6c34\u5e73\u5c45\u4e2d\uff0c\u5de6\u53f3\u7559\u51fa\u4e00\u5b9a\u7a7a\u767d\uff08\u4ec5\u7528\u4e8e\u5927\u5c4f\u8bbe\u5907\uff09\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"formSheet"),"\u7ad6\u76f4\u548c\u6c34\u5e73\u90fd\u5c45\u4e2d\uff0c\u56db\u5468\u90fd\u7559\u51fa\u4e00\u5b9a\u7a7a\u767d\uff08\u4ec5\u7528\u4e8e\u5927\u5c4f\u8bbe\u5907\uff09\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"overFullScreen"),"\u5b8c\u5168\u76d6\u6ee1\u5c4f\u5e55\uff0c\u540c\u65f6\u5141\u8bb8\u900f\u660e\u3002")),(0,n.kt)("p",null,"\u9ed8\u8ba4\u4f1a\u6839\u636e",(0,n.kt)("inlineCode",{parentName:"p"},"transparent"),"\u5c5e\u6027\u800c\u8bbe\u7f6e\u4e3a",(0,n.kt)("inlineCode",{parentName:"p"},"overFullScreen"),"\u6216\u662f",(0,n.kt)("inlineCode",{parentName:"p"},"fullScreen"),"\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",A({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",A({parentName:"tr"},{align:null}),"\u5fc5\u9700"),(0,n.kt)("th",A({parentName:"tr"},{align:null}),"\u5e73\u53f0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",A({parentName:"tr"},{align:null}),"enum('fullScreen', 'pageSheet', 'formSheet', 'overFullScreen')"),(0,n.kt)("td",A({parentName:"tr"},{align:null}),"\u5426"),(0,n.kt)("td",A({parentName:"tr"},{align:null}),"iOS")))))}N.isMDXComponent=!0}}]);