"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8570],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,k=m["".concat(o,".").concat(d)]||m[d]||c[d]||s;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<s;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9330:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const s={slug:"loki-grafana",title:"Utilisation de Loki pour Centraliser les logs",authors:{name:"TheBidouilleur",title:"Adorateur de trucs merdiques",url:"https://git.thoughtless.eu",image_url:"https://avatars.githubusercontent.com/u/82603435?v=4"},tags:["Docker","Logs"]},i=void 0,l={permalink:"/TheBidouilleur.xyz/blog/loki-grafana",editUrl:"https://github.com/QJoly/TheBidouilleur.xyz/tree/main/blog/2021-12-12-Loki.md",source:"@site/blog/2021-12-12-Loki.md",title:"Utilisation de Loki pour Centraliser les logs",description:"[ Cet article provient de mon ancien-blog, celui-ci sera \xe9galement disponible dans la partie \u201cDocumentation\u201d du site ]",date:"2021-12-12T00:00:00.000Z",formattedDate:"12 d\xe9cembre 2021",tags:[{label:"Docker",permalink:"/TheBidouilleur.xyz/blog/tags/docker"},{label:"Logs",permalink:"/TheBidouilleur.xyz/blog/tags/logs"}],readingTime:7.155,hasTruncateMarker:!1,authors:[{name:"TheBidouilleur",title:"Adorateur de trucs merdiques",url:"https://git.thoughtless.eu",image_url:"https://avatars.githubusercontent.com/u/82603435?v=4",imageURL:"https://avatars.githubusercontent.com/u/82603435?v=4"}],frontMatter:{slug:"loki-grafana",title:"Utilisation de Loki pour Centraliser les logs",authors:{name:"TheBidouilleur",title:"Adorateur de trucs merdiques",url:"https://git.thoughtless.eu",image_url:"https://avatars.githubusercontent.com/u/82603435?v=4",imageURL:"https://avatars.githubusercontent.com/u/82603435?v=4"},tags:["Docker","Logs"]},prevItem:{title:"Pr\xe9sentation rapide de Packer",permalink:"/TheBidouilleur.xyz/blog/presentation-packer"},nextItem:{title:"Mon voyage autour des loadbalancers",permalink:"/TheBidouilleur.xyz/blog/caddy"}},o={authorsImageUrls:[void 0]},u=[{value:"Stack GLP",id:"stack-glp",level:2},{value:"Partie Loki",id:"partie-loki",level:2},{value:"Partie Promtail",id:"partie-promtail",level:2},{value:"Faire des requetes \xe0 Loki depuis Grafana",id:"faire-des-requetes-\xe0-loki-depuis-grafana",level:2}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"[ Cet article provient de mon ancien-blog, celui-ci sera \xe9galement disponible dans la partie \u201cDocumentation\u201d du site ]"),(0,r.kt)("h1",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Depuis que jai commenc\xe9 l\u2019informatique (depuis un peu moins d\u2019une dizaine d\u2019ann\xe9e), je ne me suis jamais pr\xe9occup\xe9 de comment je visualisais mes logs. Un petit ",(0,r.kt)("em",{parentName:"p"},"view")," par ci, un gros ",(0,r.kt)("em",{parentName:"p"},"grep")," par l\xe0.. mais aucune gestion avanc\xe9e. "),(0,r.kt)("p",null,"J\u2019ai bas\xe9 ma supervision sur Zabbix et Grafana qui m\u2019affichent les metriques de chaque machine virtuelle individuellement. Et m\xeame si c\u2019est bien pratique, je n\u2019ai presque aucun visuel sur l\u2019\xe9tat de mes applications !\nJ\u2019ai donc d\xe9cid\xe9 de me renseigner sur Graylog et Elastic Search proposant un stack assez fiable et facile \xe0 mettre en place. Puis en voyant les ressources demand\xe9es, j\u2019ai remis ce besoin \xe0 \u201cplus tard\u201d, et j\u2019ai remis \u201cplus tard\u201d \xe0 l\u2019ann\xe9e prochaine.. Et ainsi de suite ! "),(0,r.kt)("blockquote",null,(0,r.kt)("blockquote",{parentName:"blockquote"},(0,r.kt)("p",{parentName:"blockquote"},"2 ans plus tard\u2026"))),(0,r.kt)("p",null,"Aujourd\u2019hui ",(0,r.kt)("em",{parentName:"p"},"(Decembre 2021)"),", une grosse faille 0day est d\xe9voil\xe9e concernant Log4J, et on ne parle pas d\u2019une \u201cpetite\u201d faille, c\u2019est une bonne grosse RCE comme on les aime ! "),(0,r.kt)("p",null,"Je ne suis pas concern\xe9 par Log4J, ce n\u2019est pas utilis\xe9 dans Jenkins, et je n\u2019ai aucune autre application bas\xe9e sur Java ouverte sur internet. Mais j\u2019aurai bien aim\xe9 savoir si mon serveur a \xe9t\xe9 scann\xe9 par les m\xeames IP que l\u2019on retrouve sur les listes \xe0 bannir.\nEt c\u2019est avec cet \xe9venement que j\u2019ai d\xe9cid\xe9 de me renseigner sur ",(0,r.kt)("em",{parentName:"p"},"\u201cComment centraliser et visualiser ses logs?\u201d"),"."),(0,r.kt)("h1",{id:"le-choix-du-stack"},"Le choix du stack"),(0,r.kt)("p",null,"Un stack est un groupement de logiciel permettant de r\xe9pondre \xe0 une fonction.\nUn exemple classique est celui du stack \u201cG.I.T.\u201d ",(0,r.kt)("em",{parentName:"p"},"(et non pas comme l\u2019outil de versioning!)")," :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Grafana"),(0,r.kt)("li",{parentName:"ul"},"Influxdb"),(0,r.kt)("li",{parentName:"ul"},"Telegraf ")),(0,r.kt)("p",null,"C\u2019est un stack qui permet de visualiser les mectriques de diff\xe9rentes machines, InfluxDB est la base de donn\xe9e stockant les informations, Telegraf est l\u2019agent qui permet aux machines d\u2019envoyer les m\xe9triques, et Grafana est le service web permettant de les visualiser."),(0,r.kt)("p",null,"Comme dit dans l\u2019introduction, j\u2019utilise Zabbix qui me permet de monitorer et collecter les metriques, et j\u2019y ai coupl\xe9 Grafana pour les afficher avec beaucoup de param\xe8trages. "),(0,r.kt)("p",null,"Dans la centralisation de logs (et la visualisation), on parle souvent du stack suivant:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("strong",{parentName:"strong"},"ELK")),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ElasticSearch"),(0,r.kt)("li",{parentName:"ul"},"Logstash"),(0,r.kt)("li",{parentName:"ul"},"Kibana")),(0,r.kt)("p",null,"Mais ce stack n\u2019est pas \xe0 d\xe9ployer dans n\u2019importe quel environnement, il est efficace, mais tr\xe8s lourd. "),(0,r.kt)("p",null,"Dans ma qu\xeate pour trouver un stack permettant la centralisation de logs, j\u2019appr\xe9cierai utiliser des services que je dispose d\xe9j\xe0.",(0,r.kt)("br",{parentName:"p"}),"\n","Et voici le miracle \xe0 la mode de 2021 ! Le Stack GLP : ",(0,r.kt)("strong",{parentName:"p"},"Grafana, Loki, Promtail"),"."),(0,r.kt)("h2",{id:"stack-glp"},"Stack GLP"),(0,r.kt)("p",null,"L\xe0 o\xf9 j\u2019appr\xe9cie particuli\xe8rement ce stack, c\u2019est qu\u2019il est l\xe9ger. Beaucoup\nplus l\xe9ger que ELK qui, m\xeame si tr\xe8s efficace, demande beaucoup."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/oWOwWsJ.png",alt:null})),(0,r.kt)("p",null,"De m\xeame que Graylog2 + Elastic Search (une tr\xe8s bonne alternative) qui demande presque un serveur baremetal low-cost \xe0 lui seul.\n",(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/FkAq6sO.png",alt:null})),(0,r.kt)("p",null,"Alors que Grafana / Loki ne demanderont que 2Go pour fonctionner efficacement et sans contraintes. (Grand maximum, \xe0 mon \xe9chelle : j\u2019utiliserai beaucoup moins que 2Go)"),(0,r.kt)("h1",{id:"installer-notre-stack"},"Installer notre stack"),(0,r.kt)("p",null,"Je pars du principe que tout le monde sait installer un Grafana, c\u2019est souvent vers ce service que les gens commencent l\u2019auto-hebergement ",(0,r.kt)("em",{parentName:"p"},"(en m\xeame temps, les graphiques de grafana sont super sexy !)"),". "),(0,r.kt)("p",null,"Mais si vous n\u2019avez pas encore install\xe9 votre Grafana ",(0,r.kt)("em",{parentName:"p"},"(dans ce cas, quittez la salle et revenez plus tard)"),", ",(0,r.kt)("a",{parentName:"p",href:"https://grafana.com/docs/grafana/latest/installation/"},"voici un lien qui vous permettra de le faire assez rapidement")),(0,r.kt)("p",null,"Par simplicit\xe9, je ne vais pas utiliser Docker dans cette installation. "),(0,r.kt)("h2",{id:"partie-loki"},"Partie Loki"),(0,r.kt)("p",null,"J\u2019ai install\xe9 Loki sur un conteneur LXC en suivant le guide sur le site officiel ",(0,r.kt)("a",{parentName:"p",href:"https://grafana.com/docs/loki/latest/installation/local/"},"ici"),".\nJe passe par systemd pour lancer l\u2019executable, et je cr\xe9\xe9 \xe0 l\u2019avance un fichier\navec le minimum syndical (qui est disponible sur le github de Grafana)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"auth_enabled: false\n\nserver:\n  http_listen_port: 3100\n  grpc_listen_port: 9096\n\ncommon:\n  path_prefix: /tmp/loki\n  storage:\n    filesystem:\n      chunks_directory: /tmp/loki/chunks\n      rules_directory: /tmp/loki/rules\n  replication_factor: 1\n  ring:\n    instance_addr: 127.0.0.1\n    kvstore:\n      store: inmemory\n\nschema_config:\n  configs:\n    - from: 2020-10-24\n      store: boltdb-shipper\n      object_store: filesystem\n      schema: v11\n      index:\n        prefix: index_\n        period: 24h\n")),(0,r.kt)("p",null,"Je n\u2019ai pas pris la peine d\u2019activer l\u2019authentification en sachant que je suis dans un LAN avec uniquement mes machines virtuelles. Je consid\xe8re pas que mon Loki comme un point sensible de mon infra. "),(0,r.kt)("p",null,"Apr\xe8s seulement 2-3 minutes de configuration, notre Loki est d\xe9j\xe0 disponible ! "),(0,r.kt)("p",null,"On peut d\xe8s maintenant l\u2019ajouter en tant que ",(0,r.kt)("em",{parentName:"p"},"datasource")," sur notre Grafana :\n",(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/G3tWx1r.png",alt:null})),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"(J\u2019utilise localhost car la machine poss\xe9dant le grafana h\xe9berge \xe9galement le Loki)")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Il se peut que Grafana rale un peu car notre base de donn\xe9e Loki est vide.")),(0,r.kt)("h2",{id:"partie-promtail"},"Partie Promtail"),(0,r.kt)("p",null,"Promtail est l\u2019agent qui va nous permettre d\u2019envoyer nos logs \xe0 Loki, j\u2019ai \xe9cris un role Ansible assez simple me permettant d\u2019installer notre agent sur de nombreuses machines en surveillant les logs provenant de Docker, varlog et syslog. "),(0,r.kt)("p",null,"Voici ma template Jinja2 \xe0 propos de ma configuration : "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jinja2"},"server:\n  http_listen_port: 9080\n  grpc_listen_port: 0\n\npositions:\n  filename: /tmp/positions.yaml\n\nclients:\n{% if loki_url is defined %}\n  - url: {{ loki_url }}\n{% endif %} \n\n\nscrape_configs:\n\n\n- job_name: authlog\n  static_configs:\n  - targets:\n      - localhost\n    labels:\n{% if ansible_hostname is defined %}\n      host: {{ ansible_hostname }}\n{% endif %} \n      job: authlog\n      __path__: /var/log/auth.log\n\n\n- job_name: syslog\n  static_configs:\n  - targets:\n      - localhost\n    labels:\n{% if ansible_hostname is defined %}\n      host: {{ ansible_hostname }}\n{% endif %}\n      job: syslog\n      __path__: /var/log/syslog\n\n- job_name: Containers\n  static_configs:\n  - targets:\n      - localhost\n    labels:\n{% if ansible_hostname is defined %}\n      host: {{ ansible_hostname }}\n{% endif %}\n      job: containerslogs\n      __path__: /var/lib/docker/containers/*/*-json.log\n\n- job_name: DaemonLog\n  static_configs:\n  - targets:\n      - localhost\n    labels:\n{% if ansible_hostname is defined %}\n      host: {{ ansible_hostname }}\n{% endif %}\n      job: daemon\n      __path__: /var/log/daemon.log\n\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Si vous n\u2019\xeates pas \xe0 l\u2019aise avec des templates Jinja2, vous trouverez une version \u201cpure\u201d de la config ",(0,r.kt)("a",{parentName:"em",href:"https://git.thoughtless.eu/Cinabre/rolePromtailAgent/src/branch/master/README.md"},"ici"))),(0,r.kt)("p",null,"Vous pouvez bien evidemment adapter cette template \xe0 vos besoins. Mon id\xe9e premi\xe8re est d\u2019avoir une \u201cbase\u201d que je peux mettre sur chaque machine ",(0,r.kt)("em",{parentName:"p"},"(en sachant aussi que si aucun log n\u2019est disponible, comme pour Docker, Promtail ne causera pas une erreur en ne trouvant pas les fichiers)")," "),(0,r.kt)("p",null,"Une fois Promtail configur\xe9, on peut le d\xe9marrer :\nvia l\u2019executable directement : "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/opt/promtail/promtail -config.file /opt/promtail/promtail-local-config.yaml\n")),(0,r.kt)("p",null,"ou via systemd ",(0,r.kt)("em",{parentName:"p"},"(automatique si vous passez par mon playbook)")," :",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"systemctl start promtail")," "),(0,r.kt)("p",null,"Une fois cet agent un peu partout, on va directement aller s\u2019amuser sur Grafana !"),(0,r.kt)("h2",{id:"faire-des-requetes-\xe0-loki-depuis-grafana"},"Faire des requetes \xe0 Loki depuis Grafana"),(0,r.kt)("p",null,"On va faire quelque chose d\u2019assez contre-intuitif : nous n\u2019allons pas commencer par faire un Dashboard : on va d\u2019abord tester nos requetes !\n",(0,r.kt)("em",{parentName:"p"},"Scrollez pas, je vous jure que c\u2019est la partie la plus fun !")),(0,r.kt)("p",null,"Sur Grafana, nous avons un onglet \u201cExplore\u201d. Celui-ci va nous donner acc\xe8s \xe0 Loki en \xe9crivant des requetes, celles-ci sont assez simple, et surtout en utilisant l\u2019outil \u201cclick-o-drome\u201d en d\xe9pliant le ",(0,r.kt)("em",{parentName:"p"},"Log Browser"),"\n",(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/UNL2s6m.png",alt:null})),(0,r.kt)("center",null," ",(0,r.kt)("i",null," Pardon j'ai un chou\xefa avanc\xe9 sans vous... ")," "),(0,r.kt)("p",null,"Avec la template que je vous ai donn\xe9, vous aurez 4 jobs : "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"daemon"),(0,r.kt)("li",{parentName:"ul"},"authlog"),(0,r.kt)("li",{parentName:"ul"},"syslog"),(0,r.kt)("li",{parentName:"ul"},"containersjobs")),(0,r.kt)("p",null,"Ces jobs permettent de trier les logs, on va tester \xe7a ensemble. Nous allons donc selectionner la machine ",(0,r.kt)("em",{parentName:"p"},"\u201cAnsible\u201d"),", puis demander le job ",(0,r.kt)("em",{parentName:"p"},"\u201cauthlog\u201d"),".\nJe commence par cliquer sur Ansible, puis Authlog. Grafana me proposera exactement si je souhaite choisir un fichier sp\xe9cifique. Si on ne pr\xe9cise pas de fichier(",(0,r.kt)("em",{parentName:"p"},"filename"),") Grafana prendra tous les fichiers ",(0,r.kt)("em",{parentName:"p"},"(donc aucune importance si nous n\u2019avons qu\u2019un seul fichier)")," "),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"(vous remarquerez plus tard que d\xe8s notre 1ere selection, grafana va cacher les jobs/h\xf4te/fichier qui ne concernent pas notre d\xe9but de requete)")," "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/MWFQCyl.png",alt:null})),(0,r.kt)("p",null,"En validant notre requete (",(0,r.kt)("em",{parentName:"p"},"bouton ",(0,r.kt)("strong",{parentName:"em"},"show logs")),")"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/RCpb5GI.png",alt:null})),(0,r.kt)("p",null,"Nous avons donc le r\xe9sultat de la requete vers Loki dans le lapse de temps configur\xe9 dans Grafana (1h pour moi).\nMon authlog n\u2019est pas tr\xe8s interessant, et mon syslog est pollu\xe9 par beaucoup\nde message pas tr\xe8s pertinents. "),(0,r.kt)("p",null,"Nous allons donc commencer \xe0 ",(0,r.kt)("strong",{parentName:"p"},"trier")," nos logs !"),(0,r.kt)("p",null,"En cliquant sur le petit \u201d",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"?")),"\u201d au dessus de notre requete, nous avons une\n\u201ccheatsheet\u201d r\xe9sumant les fonctions basiques de Loki.\nNous d\xe9couvrons comment faire une recherche exacte avec ",(0,r.kt)("em",{parentName:"p"},"|="),", comment ignorer\nles lignes avec ",(0,r.kt)("em",{parentName:"p"},"!=")," et comment utiliser une expression reguli\xe8re avec ",(0,r.kt)("em",{parentName:"p"},"|~")),(0,r.kt)("p",null,"Je vous partage \xe9galement une cheatsheet un peu plus compl\xe8te que j\u2019ai trouv\xe9\nsur un blog : ",(0,r.kt)("a",{parentName:"p",href:"https://megamorf.gitlab.io/cheat-sheets/loki/"},"ici")," "),(0,r.kt)("p",null,"Ainsi, on peut directement obtenir des logs un peu plus color\xe9s qui nous permettrons de cibler l\u2019essentiel ! "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/HzTwmwW.png",alt:null})),(0,r.kt)("p",null,"(L\u2019id\xe9e est de cibler les logs sympas avec les couleurs qui vont avec) "),(0,r.kt)("h1",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"Si on entend souvent parler de la suite ELK, \xe7a n\u2019est pas non-plus une raison\npour s\u2019en servir \xe0 tout prix ! Loki est une bonne alternative proposant des\nfonctionnalit\xe9es basiques qui suffiront pour la plupart."))}c.isMDXComponent=!0}}]);