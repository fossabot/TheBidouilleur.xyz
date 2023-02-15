"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5179],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=c(r),y=o,m=d["".concat(l,".").concat(y)]||d[y]||u[y]||s;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,i=new Array(s);i[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var c=2;c<s;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4329:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const s={slug:"sops",title:"Stocker des secrets dans un d\xe9p\xf4t Git",tags:["gitops","sops"]},i=void 0,a={unversionedId:"Adminsys/sops",id:"Adminsys/sops",title:"Stocker des secrets dans un d\xe9p\xf4t Git",description:"",source:"@site/docs/Adminsys/sops.md",sourceDirName:"Adminsys",slug:"/Adminsys/sops",permalink:"/TheBidouilleur.xyz/docs/Adminsys/sops",draft:!1,editUrl:"https://github.com/QJoly/TheBidouilleur.xyz/tree/main/docs/Adminsys/sops.md",tags:[{label:"gitops",permalink:"/TheBidouilleur.xyz/docs/tags/gitops"},{label:"sops",permalink:"/TheBidouilleur.xyz/docs/tags/sops"}],version:"current",frontMatter:{slug:"sops",title:"Stocker des secrets dans un d\xe9p\xf4t Git",tags:["gitops","sops"]},sidebar:"tutorialSidebar",previous:{title:"Boot PXE avec netboot",permalink:"/TheBidouilleur.xyz/docs/Adminsys/netbootxyz"},next:{title:"V\xe9rification configuration syst\xe8me (testinfra)",permalink:"/TheBidouilleur.xyz/docs/Adminsys/testinfra"}},l={},c=[],p={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"creation_rules:\n    - path_regex: test.*\\.yaml\n      key_groups:\n      # First key group\n      - age:\n        - age1upjug3ygl55vswr4wjewuunnr4z74ptfygkgfj44sm0u454egqsqdkdxqq\n")))}u.isMDXComponent=!0}}]);