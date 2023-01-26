"use strict";(self.webpackChunkgreen_software_training=self.webpackChunkgreen_software_training||[]).push([[63],{4137:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4904:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(4137));const i={sidebar_position:1},o="Getting Started",l={unversionedId:"GettingStarted",id:"GettingStarted",title:"Getting Started",description:"The SCI Guidance project details various approaches on how to understand the different methodologies that are available for calculating energy, carbon intensity,embodied emissions and functional unit values which are the core components of the SCI calculation.",source:"@site/docs/GettingStarted.md",sourceDirName:".",slug:"/GettingStarted",permalink:"/GettingStarted",draft:!1,editUrl:"https://github.com/Green-Software-Foundation/sci-data/tree/web/docs/GettingStarted.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"SCI Open Data",permalink:"/"},next:{title:"Energy (E)",permalink:"/E/"}},s={},p=[],c={toc:p};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getting-started"},"Getting Started"),(0,r.kt)("p",null,"The SCI Guidance project details various approaches on how to understand the different methodologies that are available for calculating energy, carbon intensity,embodied emissions and functional unit values which are the core components of the SCI calculation."),(0,r.kt)("p",null,"Internally the SCI guidance project also tries to provide references to various reference datasets that are available either in the public forums or with OEMs. These datasets point to reference values for E, I, M and R that are provided for standard configurations and are  approximations intended to help calculate the SCI score. "),(0,r.kt)("p",null,"The SCI open data project which is a sub-project of SCI-guidance is intended to collate all such datasets and we could use the information available in the guidance project to help navigate through these datasets. Hence we would have a section beneath each of the components E, I, M and R that calls out reference SCI open datasets that can be leveraged for calculation of that component. "),(0,r.kt)("h1",{id:"sci-calculation"},"SCI Calculation"),(0,r.kt)("p",null,"SCI = (",(0,r.kt)("a",{parentName:"p",href:"./E"},"E")," * ",(0,r.kt)("a",{parentName:"p",href:"./I"},"I"),") + ",(0,r.kt)("a",{parentName:"p",href:"./M"},"M")," per ",(0,r.kt)("a",{parentName:"p",href:"./R"},"R")," "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"(E) - Energy consumption (kilowatt hours) for different components of the software boundary over a given time period. Examples:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"CPU/GPUs at different percentages of utilisation"),(0,r.kt)("li",{parentName:"ul"},"Data storage"),(0,r.kt)("li",{parentName:"ul"},"Memory allocation"),(0,r.kt)("li",{parentName:"ul"},"Data transferred over a network"))),(0,r.kt)("li",{parentName:"ul"},"(I) - Emissions factors. These may be regional yearly averages to begin with, but should ideally be marginal, and more granular than that."),(0,r.kt)("li",{parentName:"ul"},"(M) - Embodied emissions data for servers, mobile devices and laptops")),(0,r.kt)("h1",{id:"quick-guide"},"Quick Guide"),(0,r.kt)("p",null,"This quick guide shows you how to use the information present in this guidance project to calculate energy (E), embodied (M) emissions and carbon intensity (I) for a software application."),(0,r.kt)("p",null,"Imagine you want to calculate the SCI score for a software application running on a Google Cloud VM. The VM configuration is e2-standard-4 (4 CPU, 16GB RAM) and running in the US-East region.The software application scales by API and the average monthly requests are 20k. "),(0,r.kt)("p",null,"WE would calculate the SCI as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Energy - For energy, we check the ",(0,r.kt)("a",{parentName:"p",href:"https://sci-data.greensoftware.foundation/E"},"list of options")," and select ",(0,r.kt)("a",{parentName:"p",href:"https://sci-data.greensoftware.foundation/E/APIBased"},"API based techniques"),". Next, we choose the API vendor",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://www.climatiq.io/docs#cpu"},"Climatiq")," which calculates C02e emissions directly based on CPU utilisation data, VPCU and location details. We can get the CPU utilisation data from cloud metrics. The API uses publicly available average data for carbon intensity for a given electricity grid, based on the location and a mix of local energy sources. When we call the API, the C02e of the VCPU comes back as 1,329 gC02e")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Embodied emissions - For embodied emissions, we check the ",(0,r.kt)("a",{parentName:"p",href:"https://sci-data.greensoftware.foundation/M"},"list of options")," and select ",(0,r.kt)("a",{parentName:"p",href:"https://sci-data.greensoftware.foundation/M/EmbodiedDatabase"},"Lookup Embodied Database"),". When we look up the embodied emission of the server type e2-standard-4, we get 1230.3 kgCO\u2082eq")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"To calculate expected lifespan (EL), time reserved (TR), resource reserved (RR) and total resources (TR), check the ",(0,r.kt)("a",{parentName:"p",href:"https://sci-data.greensoftware.foundation/M/MSubCalculations"},"embodied calculations")," page for general guidelines. We find the following values:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The EL is 4 years (average lifespan for bare metal server)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The TR is 1 month (time when the VM server was running for our application)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The RR is 4 (number of CPUs for our VM server, which is e2-standard-4 (4 CPU, 16GB RAM))")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The TR is 32 (total resources available in a bare metal server running e2-standard-4 instances)")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For TR we do a lookup for an e2-standard-4 machine in the ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/compute/docs/general-purpose-machines#e2-standard"},"Google documentation")," and see the maximum vCPU that is supported is 32 vCPU through the e2-standard-32 machine.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For R, we already have 20k API requests/per month")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"SCI Calculation"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"SCI Equation =  ((E*I) + M) per R")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"M = TE (TR/EL) (RR/TR)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"TE = Total Embodied Emissions (the sum of LCA emissions for hardware components which we calculated in step 2. We have only included the server/hardware component running our application, but there might be other supporting infrastructures like racks, cooling water resources that we have excluded).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"SCI Score = 0.226 gC02e per API Call."))))),(0,r.kt)("h1",{id:"links"},"Links"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Green-Software-Foundation/pr-faqs/blob/main/live/green-software-principles.pr-faq.md"},"Press Release FAQ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://training.greensoftware.foundation"},"Main Website")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Green-Software-Foundation/sci-guidance"},"Main GitHub Repository"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Please submit any comments you have ",(0,r.kt)("a",{parentName:"strong",href:"https://github.com/Green-Software-Foundation/sci-data/issues/new?assignees=atg-abhishek%2C+srini1978%2C+Henry-WattTime%2C+navveenb&labels=Guidelines+Feedback&template=guidelines-feedback.md&title=Guidelines+Feedback"},"here"))))}u.isMDXComponent=!0}}]);