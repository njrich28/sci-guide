"use strict";(self.webpackChunkgreen_software_training=self.webpackChunkgreen_software_training||[]).push([[377],{4137:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>p});var o=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=o.createContext({}),u=function(e){var r=o.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},d=function(e){var r=u(e.components);return o.createElement(l.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},f=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),f=u(t),p=n,h=f["".concat(l,".").concat(p)]||f[p]||c[p]||a;return t?o.createElement(h,i(i({ref:r},d),{},{components:t})):o.createElement(h,i({ref:r},d))}));function p(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=f;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var u=2;u<a;u++)i[u]=t[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},8592:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var o=t(7462),n=(t(7294),t(4137));const a={sidebar_position:2},i="Embodied Calculations",s={unversionedId:"M/MSubCalculations",id:"M/MSubCalculations",title:"Embodied Calculations",description:"How do you calculate EL or expected lifetime ?",source:"@site/docs/M/MSubCalculations.md",sourceDirName:"M",slug:"/M/MSubCalculations",permalink:"/M/MSubCalculations",draft:!1,editUrl:"https://github.com/Green-Software-Foundation/sci-data/tree/web/docs/M/MSubCalculations.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Embodied Database / Sources",permalink:"/M/EmbodiedDatabase"},next:{title:"Manual Embodied Lookup process",permalink:"/M/ManualEmbodiedLookupProcess"}},l={},u=[{value:"How do you calculate EL or expected lifetime ?",id:"how-do-you-calculate-el-or-expected-lifetime-",level:3},{value:"How do you define time reserved or TR or Time Reserved, the length of time the hardware is reserved for use by the software?",id:"how-do-you-define-time-reserved-or-tr-or-time-reserved-the-length-of-time-the-hardware-is-reserved-for-use-by-the-software",level:3},{value:"How do you define RR or Resources Reserved, the number of resources reserved for use by the software?",id:"how-do-you-define-rr-or-resources-reserved-the-number-of-resources-reserved-for-use-by-the-software",level:3},{value:"References",id:"references",level:4}],d={toc:u};function c(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,o.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"embodied-calculations"},"Embodied Calculations"),(0,n.kt)("h3",{id:"how-do-you-calculate-el-or-expected-lifetime-"},"How do you calculate EL or expected lifetime ?"),(0,n.kt)("p",null,"EL is expected Lifespan, the anticipated time that the hatrdware server/equipment will be installed.\nFor most cloud servers or consumer devices, consider expected lifetime of 4 years.\nConverting to hours, we get approximately use 35,040 hours as the value. "),(0,n.kt)("h3",{id:"how-do-you-define-time-reserved-or-tr-or-time-reserved-the-length-of-time-the-hardware-is-reserved-for-use-by-the-software"},"How do you define time reserved or TR or Time Reserved, the length of time the hardware is reserved for use by the software?"),(0,n.kt)("p",null,"Time reserved is dependent on the length of time the hardware is reserved for use by the software. In some ways this is dependent on the length of time for which SCI score is reported.\nFor example, if the SCI score is x kgCo2eq for a software per 500 users per 1 day then the time reserved should be 1 day or 24 hours.\nHence the time reserved is dependent on one of the parameters of the compound functional unit, which is the time for which the SCI reporting is calculated. "),(0,n.kt)("h3",{id:"how-do-you-define-rr-or-resources-reserved-the-number-of-resources-reserved-for-use-by-the-software"},"How do you define RR or Resources Reserved, the number of resources reserved for use by the software?"),(0,n.kt)("p",null,"RR represents resources reserved for use. This is the number of hardware resources reserved for use by the software. "),(0,n.kt)("p",null,"There are many options to look at this. "),(0,n.kt)("p",null,"If you are running an application on a bare metal server exclusively, then the entire hardware resources are at the disposal of the application."),(0,n.kt)("p",null,"However in typical cloud scenarios this is not the case as the bare metal is split up into multiple VMs (in case of virtualization by cloud providers)."),(0,n.kt)("p",null,"-- Add details --"),(0,n.kt)("h4",{id:"references"},"References"),(0,n.kt)("p",null,"Evaluating the carbon footprint of a software platform hosted in the cloud"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://medium.com/teads-engineering/evaluating-the-carbon-footprint-of-a-software-platform-hosted-in-the-cloud-e716e14e060c"},"https://medium.com/teads-engineering/evaluating-the-carbon-footprint-of-a-software-platform-hosted-in-the-cloud-e716e14e060c"))))}c.isMDXComponent=!0}}]);