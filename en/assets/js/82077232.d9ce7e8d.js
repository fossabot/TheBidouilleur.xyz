"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1866],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),o=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=o(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=o(n),m=a,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||l;return n?r.createElement(f,s(s({ref:t},c),{},{components:n})):r.createElement(f,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,s=new Array(l);s[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var o=2;o<l;o++)s[o]=n[o];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(7294),a=n(6010);const l="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,s),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>q});var r=n(7462),a=n(7294),l=n(6010),s=n(2466),i=n(6775),u=n(1980),o=n(7392),c=n(12);function d(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,o.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function v(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,l=p(e),[s,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[u,o]=f({queryString:n,groupId:r}),[d,v]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:r}),b=(()=>{const e=u??d;return m({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),o(e),v(e)}),[o,v,l]),tabValues:l}}var b=n(2389);const k="tabList__CuJ",h="tabItem_LNqP";function y(e){let{className:t,block:n,selectedValue:i,selectValue:u,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),p=e=>{const t=e.currentTarget,n=c.indexOf(t),r=o[n].value;r!==i&&(d(t),u(r))},m=e=>{var t;let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}null==(t=n)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},o.map((e=>{let{value:t,label:n,attributes:s}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},s,{className:(0,l.Z)("tabs__item",h,null==s?void 0:s.className,{"tabs__item--active":i===t})}),n??t)})))}function g(e){let{lazy:t,children:n,selectedValue:r}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function N(e){const t=v(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",k)},a.createElement(y,(0,r.Z)({},e,t)),a.createElement(g,(0,r.Z)({},e,t)))}function q(e){const t=(0,b.Z)();return a.createElement(N,(0,r.Z)({key:String(t)},e))}},1412:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=n(7462),a=(n(7294),n(3905)),l=n(4866),s=n(5162);const i={slug:"dnsmasq",title:"Mettre en place un DNS / DHCP avec DNSMASQ",tags:["reseau","dns","infra"]},u=void 0,o={unversionedId:"AdminSys/Dnsmasq",id:"AdminSys/Dnsmasq",title:"Mettre en place un DNS / DHCP avec DNSMASQ",description:"Introduction",source:"@site/docs/AdminSys/Dnsmasq.md",sourceDirName:"AdminSys",slug:"/AdminSys/dnsmasq",permalink:"/TheBidouilleur.xyz/en/docs/AdminSys/dnsmasq",draft:!1,editUrl:"https://github.com/QJoly/TheBidouilleur.xyz/tree/main/docs/AdminSys/Dnsmasq.md",tags:[{label:"reseau",permalink:"/TheBidouilleur.xyz/en/docs/tags/reseau"},{label:"dns",permalink:"/TheBidouilleur.xyz/en/docs/tags/dns"},{label:"infra",permalink:"/TheBidouilleur.xyz/en/docs/tags/infra"}],version:"current",frontMatter:{slug:"dnsmasq",title:"Mettre en place un DNS / DHCP avec DNSMASQ",tags:["reseau","dns","infra"]},sidebar:"tutorialSidebar",previous:{title:"Docs",permalink:"/TheBidouilleur.xyz/en/docs/intro"},next:{title:"Utiliser libvirt en utilisateur non-root",permalink:"/TheBidouilleur.xyz/en/docs/AdminSys/rootless-libvirt"}},c={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Installation",id:"installation",level:2},{value:"DHCP",id:"dhcp",level:3},{value:"Bail statique",id:"bail-statique",level:4},{value:"DNS",id:"dns",level:3},{value:"Forcer IP sur un domaine",id:"forcer-ip-sur-un-domaine",level:4},{value:"D\xe9sactiver le DNS",id:"d\xe9sactiver-le-dns",level:4}],p={toc:d};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Petite pr\xe9sentation de Wikip\xe9dia : "),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Dnsmasq est un serveur l\xe9ger con\xe7u pour fournir les services DNS, DHCP, Bootstrap Protocol et TFTP pour un petit r\xe9seau, voire pour un poste de travail. Il permet d\u2019offrir un service de nommage des machines du r\xe9seau interne non int\xe9gr\xe9es au service de nommage global (i.e. le service DNS d\u2019Internet). Le service de nommage est associ\xe9 au service d\u2019adressage de telle mani\xe8re que les machines dont le bail DHCP est fourni par Dnsmasq peuvent avoir automatiquement un nom DNS sur le r\xe9seau interne. Le logiciel offre un service DHCP statique ou dynamique. ")),(0,a.kt)("p",null,"En r\xe9sum\xe9, Dnsmasq est un package tout-en-un permettant de cr\xe9er un serveur DNS et DHCP."),(0,a.kt)("admonition",{title:"Article non-pr\xe9vu",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\xc0 la base, je pr\xe9voyais simplement de faire un article sur ",(0,a.kt)("strong",{parentName:"p"},"NetBoot"),". Mais je me suis rendu compte qu\u2019il fallait absolument passer par l\u2019\xe9tape DHCP.\nJ\u2019ai donc \xe9crit \xe0 la va-vite cette documentation en tant que ",(0,a.kt)("em",{parentName:"p"},"base")," pour d\u2019autres documentations.")),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"alpine",label:"alpine",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"apk add dnsmasq\n"))),(0,a.kt)(s.Z,{value:"debian/ubuntu",label:"debian/ubuntu",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"apt install dnsmasq\n"))),(0,a.kt)(s.Z,{value:"centos/rocky",label:"centos/rocky",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"yum install dnsmasq\n")))),(0,a.kt)("h3",{id:"dhcp"},"DHCP"),(0,a.kt)("p",null,"Premi\xe8re chose que l\u2019on peut faire avec Dnsmasq est de d\xe9marrer le serveur DHCP. Le fichier de configuration est \xe0 cet emplacement : ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/dnsmasq.conf"),". Par d\xe9faut, celui-ci devrait n\u2019avoir aucune ligne d\xe9comment\xe9e en dehors de celles-ci : "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-conf"},"local-service # ne communiquer qu'avec les machines dans notre r\xe9seau\nconf-dir=/etc/dnsmasq.d/,*.conf # importer les fichiers *.conf dans le dossier /etc/dnsmasq.d/\n")),(0,a.kt)("p",null,"Nous allons cr\xe9er un fichier ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/dnsmasq.d/dhcp.conf")," pour d\xe9marrer notre DHCP : "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-conf"},"# dhcp.conf\nlisten-address=::1,127.0.0.1,192.168.1.250  # adresses d'\xe9coutes\ndhcp-range=192.168.1.50,192.168.1.150,24h   # Plage d'adresses et dur\xe9e des baux\ndomain=thebidouilleur.xyz                   # domaine\ndhcp-option=1,255.255.255.0                 # masque \ndhcp-option=3,192.168.1.1                   # passerelle\n")),(0,a.kt)("p",null,"Une fois notre fichier cr\xe9\xe9, on peut v\xe9rifier la configuration avec ",(0,a.kt)("inlineCode",{parentName:"p"},"dnsmasq --test"),"."),(0,a.kt)("p",null,"Si aucune erreur n\u2019est trouv\xe9e, nous pouvons lancer le service."),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"alpine",label:"alpine",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"service dnsmasq start\n"))),(0,a.kt)(s.Z,{value:"debian/centos",label:"debian/centos",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"systemctl start dnsmasq\n")))),(0,a.kt)("h4",{id:"bail-statique"},"Bail statique"),(0,a.kt)("p",null,"Une fonctionnalit\xe9 basique d\u2019un serveur DHCP est de pouvoir attribuer une IP bien pr\xe9cise \xe0 un h\xf4te."),(0,a.kt)("p",null,"Pour attribuer une IP sp\xe9cifique, il est obligatoire de renseigner l\u2019adresse MAC de la machine. On peut trouver cette adresse via la commande ",(0,a.kt)("inlineCode",{parentName:"p"},"ip a"),", l\u2019interface a choisir est bien \xe9videmment celle qui est pr\xe9sente dans notre r\xe9seau."),(0,a.kt)("p",null,"Si l\u2019h\xf4te est accessible en r\xe9seau, vous pouvez utiliser la commande ",(0,a.kt)("inlineCode",{parentName:"p"},"arp"),". "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"\u279c arp 192.168.1.29 \nAdresse                  TypeMap AdresseMat          Indicateurs           Iface\n192.168.1.29             ether   ae:1a:60:8a:73:7a   C                     enp47s0\n")),(0,a.kt)("p",null,"Cette adresse doit se r\xe9f\xe9rencer dans la configuration de Dnsmasq. J\u2019ai cr\xe9\xe9 le fichier ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/dnsmasq.d/static-ip.conf"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-conf"},"# /etc/dnsmasq.d/static-ip.conf\ndhcp-host=10:bf:48:8b:6d:cf,192.168.1.20\ndhcp-host=ae:1a:60:8a:73:7a,192.168.1.29\n# Ajoutez autant de ligne que d'IP \xe0 fixer\n")),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"alpine",label:"alpine",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"service dnsmasq restart\n"))),(0,a.kt)(s.Z,{value:"debian/centos",label:"debian/centos",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"systemctl restart dnsmasq\n")))),(0,a.kt)("h3",{id:"dns"},"DNS"),(0,a.kt)("p",null,"Par d\xe9faut, d\xe8s que l\u2019instruction ",(0,a.kt)("inlineCode",{parentName:"p"},"listen-address")," est d\xe9finie, le serveur DNS est actif. Pour que dnsmasq soit utilis\xe9 en tant que DNS, il faut bien qu\u2019il soit fourni par le DHCP (ex: ",(0,a.kt)("inlineCode",{parentName:"p"},"server=192.168.1.211"),").\nPour sp\xe9cifier des serveurs DNS \xe0 interroger lorsque ",(0,a.kt)("em",{parentName:"p"},"dnsmasq")," re\xe7oit une requete \xe0 r\xe9soudre, cr\xe9ez un fichier ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/dnsmasq.d/dns.conf")," avec le contenu suivant: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-conf"},"server=192.168.1.211                        \nserver=1.1.1.1                              \n")),(0,a.kt)("h4",{id:"forcer-ip-sur-un-domaine"},"Forcer IP sur un domaine"),(0,a.kt)("p",null,"Cr\xe9er un fichier ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/dnsmasq.d/override-dns.conf")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-conf"},"address=/test.com/127.0.0.1 # pointer test.com vers 127.0.0.1\naddress=/.xyz/127.0.0.1     # pointer le wildcard .xyz vers 127.0.0.1\n")),(0,a.kt)("h4",{id:"d\xe9sactiver-le-dns"},"D\xe9sactiver le DNS"),(0,a.kt)("p",null,"Pour d\xe9sactiver la fonctionnalit\xe9 \u201cDNS\u201d de dnsmasq, il suffit juste de pr\xe9ciser \xe0 utiliser le port 0."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-conf"},"port=0\n")),(0,a.kt)("p",null,"Mais si jamais vous d\xe9sactivez le DNS, il faudra bien fournir ",(0,a.kt)("strong",{parentName:"p"},"une autre IP")," au DHCP ",(0,a.kt)("em",{parentName:"p"},"(pour que les clients ne se retrouvent pas d\xe9pourvus de DNS)"),".\nDans votre fichier ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/dnsmasq.d/dhcp.conf"),", rajoutez la ligne : "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-conf"},"dhcp-option=6,192.168.1.211,192.168.1.1\n")))}m.isMDXComponent=!0}}]);