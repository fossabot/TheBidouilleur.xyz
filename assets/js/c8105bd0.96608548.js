"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9173],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),l=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},m=function(e){var t=l(e.components);return n.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=l(r),d=a,h=c["".concat(o,".").concat(d)]||c[d]||p[d]||i;return r?n.createElement(h,u(u({ref:t},m),{},{components:r})):n.createElement(h,u({ref:t},m))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,u=new Array(i);u[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,u[1]=s;for(var l=2;l<i;l++)u[l]=r[l];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},614:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>u,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const i={slug:"Mon Setup",title:"Mon mat\xe9riel",authors:{name:"TheBidouilleur",title:"Adorateur de trucs merdiques",url:"https://github.com/qjoly/",image_url:"https://avatars.githubusercontent.com/u/82603435?v=4"},tags:["perso"]},u=void 0,s={permalink:"/TheBidouilleur.xyz/blog/Mon Setup",editUrl:"https://github.com/QJoly/TheBidouilleur.xyz/tree/main/blog/2023-02-08-Mon-Setup/index.md",source:"@site/blog/2023-02-08-Mon-Setup/index.md",title:"Mon mat\xe9riel",description:"Le d\xe9ploiement, la virtualisation, le maintien d\u2019une infrastructure Homelab sont des pratiques qui demandent du temps et \xe9galement de l\u2019argent.",date:"2023-02-08T00:00:00.000Z",formattedDate:"8 f\xe9vrier 2023",tags:[{label:"perso",permalink:"/TheBidouilleur.xyz/blog/tags/perso"}],readingTime:3.66,hasTruncateMarker:!1,authors:[{name:"TheBidouilleur",title:"Adorateur de trucs merdiques",url:"https://github.com/qjoly/",image_url:"https://avatars.githubusercontent.com/u/82603435?v=4",imageURL:"https://avatars.githubusercontent.com/u/82603435?v=4"}],frontMatter:{slug:"Mon Setup",title:"Mon mat\xe9riel",authors:{name:"TheBidouilleur",title:"Adorateur de trucs merdiques",url:"https://github.com/qjoly/",image_url:"https://avatars.githubusercontent.com/u/82603435?v=4",imageURL:"https://avatars.githubusercontent.com/u/82603435?v=4"},tags:["perso"]},nextItem:{title:"Cr\xe9er son propre registre helm",permalink:"/TheBidouilleur.xyz/blog/Creer-son-registre-helm"}},o={authorsImageUrls:[void 0]},l=[{value:"Mon infrastructure \xe0 la maison",id:"mon-infrastructure-\xe0-la-maison",level:2},{value:"Cluster ARM",id:"cluster-arm",level:3},{value:"Shuttle Proxmox",id:"shuttle-proxmox",level:3},{value:"Infrastructure Cloud",id:"infrastructure-cloud",level:2},{value:"Proxmox OVH",id:"proxmox-ovh",level:3},{value:"Oracle - FreeTier",id:"oracle---freetier",level:3},{value:"Conclusion ?",id:"conclusion-",level:2}],m={toc:l};function p(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Le d\xe9ploiement, la virtualisation, le maintien d\u2019une infrastructure Homelab sont des pratiques qui demandent du temps et \xe9galement de l\u2019argent.\nC\u2019est pourquoi j\u2019ai d\xe9cid\xe9 de cr\xe9er un petit billet que je peux ressortir pour expliquer le mat\xe9riel que j\u2019utilise."),(0,a.kt)("p",null,"Je vais donc partager les machines que j\u2019utilise ",(0,a.kt)("strong",{parentName:"p"},"chez moi")," ou ",(0,a.kt)("strong",{parentName:"p"},"en cloud"),"."),(0,a.kt)("admonition",{title:"\u201cTrop\u201d, n\u2019est pas \u201cbien\u201d",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Je ne souhaite pas d\xe9courager les gens qui d\xe9butent dans ce domaine.\nIl n\u2019est nullement n\xe9c\xe9ssaire d\u2019avoir autant de mat\xe9riel, je suis un passionn\xe9 ",(0,a.kt)("em",{parentName:"p"},"(un chouia trop, je sais)")," qui n\u2019h\xe9site pas \xe0 mettre les moyens."),(0,a.kt)("p",{parentName:"admonition"},"Vous pouvez obtenir de meilleurs r\xe9sultats avec moins.")),(0,a.kt)("h2",{id:"mon-infrastructure-\xe0-la-maison"},"Mon infrastructure \xe0 la maison"),(0,a.kt)("p",null,"J\u2019ai emm\xe9nag\xe9 dans mon appartement en 2022 \xe0 Lyon apr\xe8s 7 mois \xe0 Toulouse. Dans ma t\xeate, cet emm\xe9nagement est une libert\xe9. La libert\xe9 de pouvoir reprendre l\u2019informatique ",(0,a.kt)("em",{parentName:"p"},"chez moi")," et plus uniquement en cloud."),(0,a.kt)("p",null,"Par ordre chronologique.. J\u2019ai d\u2019abord utilis\xe9 un vieux portable ",(0,a.kt)("em",{parentName:"p"},"(Dont je n\u2019ai plus la photo)")," sur lequel j\u2019ai install\xe9 un Proxmox pour commencer \xe0 m\u2019installer un cluster k3s avec des machines virtuelles."),(0,a.kt)("p",null,"Puis\u2026 j\u2019ai re-d\xe9couvert un vieux joujou : ma ",(0,a.kt)("strong",{parentName:"p"},"Raspberry Pi B+")," !"),(0,a.kt)("p",null,"J\u2019ai donc eu l\u2019id\xe9e de cr\xe9er mon cluster k3s \xe0 la maison avec juste du mat\xe9riel ARM. L\u2019avantage premier est d\u2019avoir une consommation basse et de travailler sur de vraies machines ",(0,a.kt)("em",{parentName:"p"},"(Plus fun que d\u2019avoir des VMs)")),(0,a.kt)("h3",{id:"cluster-arm"},"Cluster ARM"),(0,a.kt)("p",null,"Je me suis alors procur\xe9 ",(0,a.kt)("em",{parentName:"p"},"4 machines"),", j\u2019aurais aim\xe9 4 Raspberry Pi 4, mais faute de moyens : je n\u2019en ai obtenu que 2. Les deux autres machines sont des ",(0,a.kt)("a",{parentName:"p",href:"https://pine64.com/product/rock64-4gb-single-board-computer/"},"Rock64"),", des \xe9quivalents de Raspberry Pi 3 avec plus de RAM."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Interieur du cluster",src:r(6513).Z,width:"1536",height:"2048"})," ",(0,a.kt)("img",{alt:"Exterieur du cluster",src:r(776).Z,width:"1024",height:"844"})),(0,a.kt)("p",null,"J\u2019ai r\xe9cup\xe9r\xe9 un vieil ampli Marshall pour l\u2019aspect ",(0,a.kt)("em",{parentName:"p"},"design"),". ",(0,a.kt)("em",{parentName:"p"},"(Puis \xe7a plait un peu \xe0 ma compagne, qui fait tr\xe8s attention \xe0 la d\xe9co de notre appartement)"),"\nJe suis presque d\xe9\xe7u de la quantit\xe9 de c\xe2bles ",(0,a.kt)("em",{parentName:"p"},"(alimentation du Switch, 4 c\xe2bles pour alimenter les n\u0153uds, 1 c\xe2ble Ethernet pour le Switch)")," mais je m\u2019en contenterai pour le moment. \xe0 l\u2019avenir, je bricolerai une alimentation pour me d\xe9barrasser de la multiprise et n\u2019avoir qu\u2019une unique prise."),(0,a.kt)("p",null,"Ce cluster h\xe9berge \xe0 la fois ce site ainsi que d\u2019autres applications priv\xe9es ",(0,a.kt)("em",{parentName:"p"},"(Bitwarden, FreshRSS, un MQTT)"),". J\u2019aimerais beaucoup ajouter un serveur mail, mais \xe7a sera l\u2019occasion apr\xe8s un changement de FAI puisque ",(0,a.kt)("strong",{parentName:"p"},"Orange bloque le port 25 sur les connections domiciles"),"."),(0,a.kt)("h3",{id:"shuttle-proxmox"},"Shuttle Proxmox"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Shuttle",src:r(9653).Z,width:"3024",height:"4032"})),(0,a.kt)("p",null,"Mais m\xeame si mon attention se porte principalement sur le cluster, je voulais \xe9galement avoir une machine pour h\xe9berger des applications plus ",(0,a.kt)("em",{parentName:"p"},"\u201cclassiques\u201d")," et sans conteneurs. J\u2019ai donc achet\xe9 un mini-ordinateur Shuttle ",(0,a.kt)("em",{parentName:"p"},"(ds57u3)")," sur lequel j\u2019ai mis un SSD Samsung de 1To ainsi que 16Go de RAM."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Interface Proxmox",src:r(8205).Z,width:"1051",height:"369"})),(0,a.kt)("p",null,"Sur cette machine, j\u2019ai des VMs avec ",(0,a.kt)("strong",{parentName:"p"},"Home-Assistant"),", mon VPN ",(0,a.kt)("em",{parentName:"p"},"(Wireguard)"),", mon ",(0,a.kt)("a",{parentName:"p",href:"/docs/AdminSys/netbootxyz/"},"netboot")," et mon ",(0,a.kt)("a",{parentName:"p",href:"/docs/AdminSys/dnsmasq/"},"DHCP"),". Je voulais absolument avoir un hyperviseur pour continuer \xe0 manipuler Terraform."),(0,a.kt)("h2",{id:"infrastructure-cloud"},"Infrastructure Cloud"),(0,a.kt)("h3",{id:"proxmox-ovh"},"Proxmox OVH"),(0,a.kt)("p",null,"Mes principales applications sont sur un serveur d\xe9di\xe9 OVH que je loue. ",(0,a.kt)("em",{parentName:"p"},"(Pour ceux qui aiment les specs, j\u2019ai un Xeon CPU E5-1620 de 8 c\u0153urs avec 32Go de RAM)"),"\nC\u2019est un Proxmox ",(0,a.kt)("em",{parentName:"p"},"(aussi)")," sur lequel j\u2019ai mon serveur mail, un cluster de ",(0,a.kt)("em",{parentName:"p"},"4 noeuds")," K3S, mon serveur multim\xe9dia et pleins d\u2019autres trucs."),(0,a.kt)("p",null,"Cette infrastructure est ce que je consid\xe8re comme de la ",(0,a.kt)("em",{parentName:"p"},"production")," \xe0 l\u2019\xe9chelle de mon Homelab. Il doit \xeatre accessible 24/7 !\nJ\u2019h\xe9berge diff\xe9rentes applications qui me sont indispensables \xe0 moi et/ou mes proches. ",(0,a.kt)("em",{parentName:"p"},"(Par exemple, mes notes, le cloud de ma remarkable, mon kanboard)")),(0,a.kt)("p",null,"Je stocke aussi des sauvegardes de mon infra HomeLab."),(0,a.kt)("h3",{id:"oracle---freetier"},"Oracle - FreeTier"),(0,a.kt)("p",null,"Comme dernier serveur, j\u2019utilise le cloud ",(0,a.kt)("strong",{parentName:"p"},"FreeTier")," avec une seule et unique machine avec 24Go de RAM. Sachant que je ne paye pas ce serveur, je consid\xe8re qu\u2019il peut \xeatre arr\xeat\xe9 ",(0,a.kt)("strong",{parentName:"p"},"\xe0 tout moment"),".\nCelui-ci m\u2019est utile comme machine de test. ",(0,a.kt)("em",{parentName:"p"},"(Comme pour mon homelab, j\u2019aurais voulu y h\xe9berger un serveur mail, mais le port 25 est \xe9galement bloqu\xe9)")),(0,a.kt)("p",null,"En plus des diff\xe9rents tests que j\u2019ex\xe9cute sur cette machine, j\u2019y ai install\xe9 un conteneur avec un Guacamole reli\xe9 \xe0 un XFCE pour \xeatre libre lorsque je suis en d\xe9placement."),(0,a.kt)("h2",{id:"conclusion-"},"Conclusion ?"),(0,a.kt)("p",null,"Je pense sinc\xe8rement que je n\u2019ai pas besoin de toutes ces machines. J\u2019essaye tant bien que mal de me limiter et de faire le plus attention \xe0 ma consommation \xe9lectrique ainsi qu\u2019\xe0 mon empreinte carbone. Je n\u2019ai pas non-plus parl\xe9 de mon NAS qui pourrait faire l\u2019objet d\u2019un billet entier \xe0 lui-seul."))}p.isMDXComponent=!0},6513:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/cluster-inside-be46a51a10af86eaa0996cb490ad31a9.jpeg"},776:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/cluster-9cc0904326a4b9baa2fc19eb128a2fb1.jpeg"},8205:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/proxmox-view-338eff79b50dd6c5daf25a0a984ee870.png"},9653:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/shuttle-056f666e4f8d8539c4a47a5e4fb8a6a9.jpg"}}]);