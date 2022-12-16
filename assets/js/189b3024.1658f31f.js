"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9632],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),i=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=i(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=i(r),d=a,h=m["".concat(u,".").concat(d)]||m[d]||c[d]||s;return r?n.createElement(h,o(o({ref:t},p),{},{components:r})):n.createElement(h,o({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var i=2;i<s;i++)o[i]=r[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6841:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>i});var n=r(7462),a=(r(7294),r(3905));const s={slug:"cluster-maj",title:"Gardez vos clusters \xe0 jour",authors:{name:"TheBidouilleur",title:"Adorateur de trucs merdiques",url:"https://github.com/qjoly/",image_url:"https://avatars.githubusercontent.com/u/82603435?v=4"},tags:["docker","swarm","kubernetes"]},o=void 0,l={permalink:"/TheBidouilleur.xyz/blog/cluster-maj",editUrl:"https://github.com/QJoly/TheBidouilleur.xyz/tree/main/blog/2022-11-10-Cluster-MAJ/index.md",source:"@site/blog/2022-11-10-Cluster-MAJ/index.md",title:"Gardez vos clusters \xe0 jour",description:"Introduction",date:"2022-11-10T00:00:00.000Z",formattedDate:"10 novembre 2022",tags:[{label:"docker",permalink:"/TheBidouilleur.xyz/blog/tags/docker"},{label:"swarm",permalink:"/TheBidouilleur.xyz/blog/tags/swarm"},{label:"kubernetes",permalink:"/TheBidouilleur.xyz/blog/tags/kubernetes"}],readingTime:5.49,hasTruncateMarker:!1,authors:[{name:"TheBidouilleur",title:"Adorateur de trucs merdiques",url:"https://github.com/qjoly/",image_url:"https://avatars.githubusercontent.com/u/82603435?v=4",imageURL:"https://avatars.githubusercontent.com/u/82603435?v=4"}],frontMatter:{slug:"cluster-maj",title:"Gardez vos clusters \xe0 jour",authors:{name:"TheBidouilleur",title:"Adorateur de trucs merdiques",url:"https://github.com/qjoly/",image_url:"https://avatars.githubusercontent.com/u/82603435?v=4",imageURL:"https://avatars.githubusercontent.com/u/82603435?v=4"},tags:["docker","swarm","kubernetes"]},prevItem:{title:"Kubernetes en HCL",permalink:"/TheBidouilleur.xyz/blog/kubernetes-hcl"},nextItem:{title:"Remarkable, une avanc\xe9e dans les prises de notes",permalink:"/TheBidouilleur.xyz/blog/remarkable"}},u={authorsImageUrls:[void 0]},i=[{value:"Introduction",id:"introduction",level:2},{value:"Solutions de mise \xe0 jour de conteneur hors cluster",id:"solutions-de-mise-\xe0-jour-de-conteneur-hors-cluster",level:2},{value:"WatchTower",id:"watchtower",level:3},{value:"container-updater (de @PAPAMICA)",id:"container-updater-de-papamica",level:3},{value:"Solutions pour Swarm",id:"solutions-pour-swarm",level:2},{value:"Sheperd",id:"sheperd",level:3},{value:"Solutions pour Kubernetes",id:"solutions-pour-kubernetes",level:2},{value:"Keel.sh",id:"keelsh",level:3},{value:"Conclusion",id:"conclusion",level:2}],p={toc:i};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Depuis que le mouvement DevOps a commenc\xe9 (ou plut\xf4t ",(0,a.kt)("em",{parentName:"p"},"Platform engineering"),"), on met le th\xe8me de la haute-disponibilit\xe9 sur le devant de la sc\xe8ne. Et une des solutions les plus polyvalentes pour faire de la haute disponibilit\xe9 est de cr\xe9er des clusters d'applications. (et ",(0,a.kt)("em",{parentName:"p"},"de facto")," : des conteneurs)"),(0,a.kt)("p",null,"J'ai donc administr\xe9 un cluster Swarm pendant quelques ann\xe9es et je suis r\xe9cemment pass\xe9 sous Kubernetes ",(0,a.kt)("em",{parentName:"p"},"(k3s pour \xeatre pr\xe9cis)"),". Et \xe0 force d'avoir des clusters contenant plusieurs centaines de conteneurs, on en oublie la maintenance et la mise \xe0 jour."),(0,a.kt)("p",null,"Et dans cet article, on va parler des mises \xe0 jour."),(0,a.kt)("h2",{id:"solutions-de-mise-\xe0-jour-de-conteneur-hors-cluster"},"Solutions de mise \xe0 jour de conteneur hors cluster"),(0,a.kt)("h3",{id:"watchtower"},"WatchTower"),(0,a.kt)("p",null,"Je pense que la solution la plus connue est ",(0,a.kt)("a",{parentName:"p",href:"https://containrrr.dev/watchtower/"},"Watchtower")),(0,a.kt)("p",null,"Watchtower est facile d'utilisation et se base (comme beaucoup d'autre) sur les ",(0,a.kt)("strong",{parentName:"p"},"labels"),". Un label permet de d\xe9finir quelques param\xe8tres et d'activer (ou de d\xe9sactiver) la surveillance des mises \xe0 jour."),(0,a.kt)("admonition",{title:"Mettre \xe0 jour, ce n'est pas toujours bien\u2026",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Attention \xe0 ne pas mettre \xe0 jour automatiquement des programmes sensibles ! Nous ne pouvons pas v\xe9rifier ce que contient une mise \xe0 jour si elle ne va pas casser quelque chose.\nIl ne tient qu'\xe0 vous de choisir les applications \xe0 surveiller, et \xe0 d\xe9clencher une mise \xe0 jour ou non.")),(0,a.kt)("p",null,"WatchTower vous notifiera de plusieurs mani\xe8res :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"email"),(0,a.kt)("li",{parentName:"ul"},"slack"),(0,a.kt)("li",{parentName:"ul"},"msteams"),(0,a.kt)("li",{parentName:"ul"},"gotify"),(0,a.kt)("li",{parentName:"ul"},"shoutrrr")),(0,a.kt)("p",null,"Et parmi ces m\xe9thodes, vous n'avez pas que des solutions propri\xe9taires, libre \xe0 vous d'h\xe9berger un shoutrrr, un gotify ou d'utiliser votre smtp pour que ces informations ne sortent pas de votre SI ! ",(0,a.kt)("em",{parentName:"p"},"(Je reproche beaucoup l'usage de msteams, slack, discord pour recevoir ses notifications)")),(0,a.kt)("p",null,"WatchTower scannera les mises \xe0 jour de mani\xe8re r\xe9guli\xe8re ",(0,a.kt)("em",{parentName:"p"},"(configurable)"),"."),(0,a.kt)("h3",{id:"container-updater-de-papamica"},"container-updater (de ",(0,a.kt)("a",{parentName:"h3",href:"https://github.com/PAPAMICA"},"@PAPAMICA"),")"),(0,a.kt)("p",null,"La solution la plus fournie/complexe n'est pas toujours la meilleure. Papamica a mis en place un script bash r\xe9pondant \xe0 ses besoins pr\xe9cis ",(0,a.kt)("em",{parentName:"p"},"(que beaucoup d'autres personnes doivent avoir)")," : un syst\xe8me de mise \xe0 jour le notifiant par Discord et Zabbix."),(0,a.kt)("p",null,"Celui-ci se base aussi par les labels et prend \xe9galement en charge le cas o\xf9 l'on veut mettre \xe0 jour par docker-compose. (",(0,a.kt)("em",{parentName:"p"},"au lieu de faire un docker pull, docker restart comme Watchtower"),")"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'labels:\n    - "autoupdate=true"\n    - "autoupdate.docker-compose=/link/to/docker-compose.yml"\n')),(0,a.kt)("p",null,"M\xeame si je ne m'en sers pas, j'ai eu une \xe9poque o\xf9 j'utilisais Zabbix et o\xf9 j'avais le besoin d'\xeatre notifi\xe9 sur mon Zabbix. ",(0,a.kt)("em",{parentName:"p"},"(qui lui me notifiait par Mail/Gotify)")),(0,a.kt)("p",null,"Papamica pr\xe9cise qu'il compte ajouter le support de registre priv\xe9 ",(0,a.kt)("em",{parentName:"p"},"(pour le moment que le github registry ou dockerhub)")," ainsi que d'autres m\xe9thodes de notification."),(0,a.kt)("h2",{id:"solutions-pour-swarm"},"Solutions pour Swarm"),(0,a.kt)("p",null,"Swarm est surement l'orchestrateur de conteneur sur lequel j'ai pris le plus de plaisir : c'est *",(0,a.kt)("strong",{parentName:"p"},"*simple**")," ! On apprend vite, on d\xe9couvre vite et on a vite des r\xe9sultats.\nMais j'ai d\xe9j\xe0 \xe9crit des \xe9loges \xe0 Swarm dans un ",(0,a.kt)("a",{parentName:"p",href:"/blog/presentation-docker-swarm/"},"autre article"),"..."),(0,a.kt)("h3",{id:"sheperd"},"Sheperd"),(0,a.kt)("p",null,"Ce que j'aime dans le programme de Papamica (et qui va avec Sheperd) c'est qu'on garde le bash comme langage central. Un langage que l'on connait tous dans les grandes lignes gr\xe2ce \xe0 Linux, et que l'on peut lire et modifier pour peu qu'on y prenne le temps."),(0,a.kt)("p",null,"Le code de Sheperd ne fait que ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/djmaze/shepherd/blob/master/shepherd"},"~200 lignes")," et fonctionne tr\xe8s bien comme \xe7a."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'version: "3"\nservices:\n  ...\n  shepherd:\n    build: .\n    image: mazzolino/shepherd\n    volumes:\n      - /var/run/docker.sock:/var/run/docker.sock\n    deploy:\n      placement:\n        constraints:\n        - node.role == manager\n')),(0,a.kt)("p",null,"Celui-ci acceptera plusieurs registres priv\xe9s, ce qui donne un bel avantage compar\xe9 aux autres solutions pr\xe9sent\xe9es.\nExemple\xa0:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"    deploy:\n        labels:\n            - shepherd.enable=true\n            - shepherd.auth.config=blog\n")),(0,a.kt)("p",null,"Sheperd n'inclut pas ",(0,a.kt)("em",{parentName:"p"},"(par d\xe9faut)")," de syst\xe8me de notification. C'est pourquoi son cr\xe9ateur a d\xe9cid\xe9 de proposer un ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/djmaze/shepherd/blob/master/docker-compose.apprise.yml"},"sidecar Apprise en alternative"),". Qui peut rediriger vers beaucoup de choses comme Telegram, SMS, Gotify, Mail, Slack, msteams etc...."),(0,a.kt)("p",null,"Je pense que c'est la solution la plus simple et la plus polyvalente. J'esp\xe8re qu'on la retrouvera dans d'autres contextes. ",(0,a.kt)("em",{parentName:"p"},"(mais je ne m'\xe9tale pas trop sur le sujet, j'aimerais bien \xe9crire un article sur \xe7a)"),"."),(0,a.kt)("p",null,"J'ai utilis\xe9 Sheperd pendant une bonne p\xe9riode et je n'ai eu aucun soucis."),(0,a.kt)("h2",{id:"solutions-pour-kubernetes"},"Solutions pour Kubernetes"),(0,a.kt)("p",null,"Pour Kubernetes, on commence \xe0 perdre en simplicit\xe9. D'autant plus qu'avec l'option ",(0,a.kt)("inlineCode",{parentName:"p"},"imagePullPolicy: Always"),", il suffit juste de red\xe9marrer un pod pour r\xe9cup\xe9rer la derni\xe8re image avec le m\xeame ",(0,a.kt)("em",{parentName:"p"},"tag"),".\nPendant un long moment, j'ai utilis\xe9 ArgoCD pour mettre \xe0 jour mes configurations et re-d\xe9ployer mes images \xe0 chaque mise \xe0 jour sur Git."),(0,a.kt)("p",null,"Mais ArgoCD ne sert qu'\xe0 ",(0,a.kt)("strong",{parentName:"p"},"mettre \xe0 jour la configuration")," et non pas l'image. La m\xe9thodologie est incorrecte et il est n\xe9cessaire de trouver un outil adapt\xe9 pour \xe7a."),(0,a.kt)("h3",{id:"keelsh"},"Keel.sh"),(0,a.kt)("p",null,"Keel est un outil r\xe9pondant au m\xeame besoin : Mettre \xe0 jour les images des pods. Mais il incorpore plusieurs fonctionnalit\xe9s qu'on ne retrouve pas ailleurs."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://keel.sh/img/keel_high_level.png",alt:"Keel"})),(0,a.kt)("p",null,"Si on souhaite garder le m\xeame fonctionnement que les alternatives ",(0,a.kt)("em",{parentName:"p"},"(c.-\xe0-d r\xe9guli\xe8rement v\xe9rifier les mises \xe0 jour)"),", c'est possible\xa0:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'metadata:\n  annotations:\n    keel.sh/policy: force\n    keel.sh/trigger: poll\n    keel.sh/pollSchedule: "@every 3m"\n')),(0,a.kt)("p",null,"Mais l\xe0 o\xf9 Keel brille, c'est qu'il propose des ",(0,a.kt)("strong",{parentName:"p"},"triggers")," et des ",(0,a.kt)("strong",{parentName:"p"},"approvals"),"."),(0,a.kt)("p",null,"Un trigger, c'est un \xe9v\xe9nement qui va d\xe9clencher la mise \xe0 jour de Keel. On peut imaginer un webhook provenant de Github, Dockerhub, Gitea qui va d\xe9clencher la mise \xe0 jour du serveur. ",(0,a.kt)("em",{parentName:"p"},"(On \xe9vite donc une crontab r\xe9guli\xe8re et on \xe9conomise des ressources, du trafic et du temps)"),"\nComme l'usage de webhook s'est beaucoup r\xe9pandu dans les syst\xe8mes de CICD, on peut coupler \xe7a \xe0 de nombreux cas d'usages."),(0,a.kt)("p",null,"Les approvals, c'est la petite perle qui manquait aux autres outils. En effet, j'ai pr\xe9cis\xe9 que ",(0,a.kt)("em",{parentName:"p"},"mettre \xe0 jour des images : c'est dangereux et il faut ne pas cibler des applications sensibles dans les mises \xe0 jour automatiques"),". Et c'est juste en r\xe9ponse \xe0 \xe7a que Keel a d\xe9velopp\xe9 les ",(0,a.kt)("em",{parentName:"p"},"approvals"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://keel.sh/img/docs/approvals.png",alt:null})),(0,a.kt)("p",null,"L'id\xe9e est de donner l'autorisation \xe0 Keel de mettre \xe0 jour le pod. On peut de ce fait choisir le moment et v\xe9rifier manuellement."),(0,a.kt)("p",null,"Je trouve quand m\xeame dommage qu'on ait Slack ou MSTeams d'impos\xe9 pour les approvals, c'est alors une fonctionnalit\xe9 que je n'utiliserai pas."),(0,a.kt)("admonition",{title:"Une UI",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Alors pour le moment, j'utilise Keel sans son interface web, il se peut qu'elle apporte de nouvelles fonctionnalit\xe9s, mais j'aimerais \xe9viter une \xe9ni\xe8me interface \xe0 g\xe9rer.")),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"Mettre \xe0 jour un conteneur, ce n'est pas si simple que \xe7a quand on cherche l'automatisation et la s\xe9curit\xe9. Si aujourd'hui, je trouve que Keel correspond \xe0 mes besoins, j'ai l'impression que les outils se ressemblent sans proposer de r\xe9elles innovations. ",(0,a.kt)("em",{parentName:"p"},"(j'envisage d'aborder le principe de canary un jour)"),"\nJ'esp\xe8re d\xe9couvrir de nouvelles solutions prochainement en esp\xe9rant qu'elles collent plus \xe0 mes besoins."))}c.isMDXComponent=!0}}]);