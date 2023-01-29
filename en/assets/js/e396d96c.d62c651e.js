"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3639],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var a=n.createContext({}),c=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,l=e.originalType,a=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=c(r),d=i,f=m["".concat(a,".").concat(d)]||m[d]||p[d]||l;return r?n.createElement(f,o(o({ref:t},s),{},{components:r})):n.createElement(f,o({ref:t},s))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=r.length,o=new Array(l);o[0]=m;var u={};for(var a in t)hasOwnProperty.call(t,a)&&(u[a]=t[a]);u.originalType=e,u.mdxType="string"==typeof e?e:i,o[1]=u;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5743:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var n=r(7462),i=(r(7294),r(3905));const l={title:"Build Docker multi-architecture",slug:"MultiArch Build"},o=void 0,u={unversionedId:"DevOps/Multi-Arch build Docker",id:"DevOps/Multi-Arch build Docker",title:"Build Docker multi-architecture",description:"J\u2019utilise beaucoup Docker sur mes raspberry pi 4. L\u2019inconv\xe9nient est que les images ne sont pas toujours compatibles avec une architecture ARM.",source:"@site/docs/DevOps/Multi-Arch build Docker.md",sourceDirName:"DevOps",slug:"/DevOps/MultiArch Build",permalink:"/TheBidouilleur.xyz/en/docs/DevOps/MultiArch Build",draft:!1,editUrl:"https://github.com/QJoly/TheBidouilleur.xyz/tree/main/docs/DevOps/Multi-Arch build Docker.md",tags:[],version:"current",frontMatter:{title:"Build Docker multi-architecture",slug:"MultiArch Build"},sidebar:"tutorialSidebar",previous:{title:"V\xe9rification configuration syst\xe8me (testinfra)",permalink:"/TheBidouilleur.xyz/en/docs/AdminSys/testinfra"},next:{title:"Introduction \xe0 Packer.",permalink:"/TheBidouilleur.xyz/en/docs/DevOps/packer-alpine"}},a={},c=[],s={toc:c};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"J\u2019utilise beaucoup Docker sur mes raspberry pi 4. L\u2019inconv\xe9nient est que les images ne sont pas toujours compatibles avec une architecture ARM.\nNous allons donc voir comment build des images ARM sous une machine Amd64."),(0,i.kt)("p",null,"Installation de mini-\xe9mulateur pour les autres architectures\xa0:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"}," docker run --privileged --rm tonistiigi/binfmt --install all\n")),(0,i.kt)("p",null,"Cr\xe9er un builder (qui utilisera votre poste local ainsi que ses architectures compatibles) "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"}," docker buildx create --use\n")),(0,i.kt)("p",null,"Build et push : "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"}," docker buildx build --platform=linux/arm64,linux/amd64,linux/arm/v7,linux/arm/v6 -t localhost:5000/test . --push\n")))}p.isMDXComponent=!0}}]);