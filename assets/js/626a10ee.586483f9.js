"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4798],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),m=a,b=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(b,i(i({ref:t},c),{},{components:r})):n.createElement(b,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},7974:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={slug:"presentation-docker-swarm",title:"Pr\xe9sentation rapide de Docker-Swarm",authors:{name:"TheBidouilleur",title:"Adorateur de trucs merdiques",url:"https://git.thoughtless.eu",image_url:"https://git.thoughtless.eu/avatars/05bed00fb8cb64b8e3b222f797bcd3d8"},tags:["docker","swarm","containers","cluster"]},i=void 0,l={permalink:"/TheBidouilleur.xyz/blog/presentation-docker-swarm",editUrl:"https://github.com/QJoly/TheBidouilleur.xyz/tree/main/blog/2021-06-29-docker-swarm/index.md",source:"@site/blog/2021-06-29-docker-swarm/index.md",title:"Pr\xe9sentation rapide de Docker-Swarm",description:'[ Cet article provient de mon ancien-blog, celui-ci sera \xe9galement disponible dans la partie "Documentation" du site ]',date:"2021-06-29T00:00:00.000Z",formattedDate:"29 juin 2021",tags:[{label:"docker",permalink:"/TheBidouilleur.xyz/blog/tags/docker"},{label:"swarm",permalink:"/TheBidouilleur.xyz/blog/tags/swarm"},{label:"containers",permalink:"/TheBidouilleur.xyz/blog/tags/containers"},{label:"cluster",permalink:"/TheBidouilleur.xyz/blog/tags/cluster"}],readingTime:5.155,hasTruncateMarker:!0,authors:[{name:"TheBidouilleur",title:"Adorateur de trucs merdiques",url:"https://git.thoughtless.eu",image_url:"https://git.thoughtless.eu/avatars/05bed00fb8cb64b8e3b222f797bcd3d8",imageURL:"https://git.thoughtless.eu/avatars/05bed00fb8cb64b8e3b222f797bcd3d8"}],frontMatter:{slug:"presentation-docker-swarm",title:"Pr\xe9sentation rapide de Docker-Swarm",authors:{name:"TheBidouilleur",title:"Adorateur de trucs merdiques",url:"https://git.thoughtless.eu",image_url:"https://git.thoughtless.eu/avatars/05bed00fb8cb64b8e3b222f797bcd3d8",imageURL:"https://git.thoughtless.eu/avatars/05bed00fb8cb64b8e3b222f797bcd3d8"},tags:["docker","swarm","containers","cluster"]},prevItem:{title:"Mon voyage autour des loadbalancers",permalink:"/TheBidouilleur.xyz/blog/caddy"}},s={authorsImageUrls:[void 0]},u=[{value:"Introduction",id:"introduction",level:2}],c={toc:u};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'[ Cet article provient de mon ancien-blog, celui-ci sera \xe9galement disponible dans la partie "Documentation" du site ]'),(0,a.kt)("h1",{id:"docker-swarm"},"Docker Swarm"),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Le monde de la conteneurisation a apport\xe9 de nombreuses choses dans l'administration syst\xe8me, et a actualis\xe9 le concept de DevOps. Mais une des choses principales que nous apporte les conteneurs (et particuli\xe8rement Docker), c'est ",(0,a.kt)("strong",{parentName:"p"},"l'automatisation"),".\nEt bien que Docker soit d\xe9j\xe0 complet avec le d\xe9ploiement de service, on peut aller un peu plus loin en automatisant la gestion des conteneurs ! Et pour r\xe9pondre \xe0 \xe7a : ",(0,a.kt)("em",{parentName:"p"},"Docker Inc.")," propose un outil adapt\xe9 pour l'orchestration automatique d'instance : ",(0,a.kt)("strong",{parentName:"p"},"Docker Swarm"),"."))}d.isMDXComponent=!0}}]);