"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1588],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=l(r),m=a,b=d["".concat(u,".").concat(m)]||d[m]||c[m]||s;return r?n.createElement(b,i(i({ref:t},p),{},{components:r})):n.createElement(b,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,i=new Array(s);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var l=2;l<s;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3509:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const s={slug:"s3contabo",title:"Mes d\xe9buts avec s3",authors:{name:"TheBidouilleur",title:"Adorateur de trucs merdiques",url:"https://git.thoughtless.eu",image_url:"https://git.thoughtless.eu/avatars/05bed00fb8cb64b8e3b222f797bcd3d8"},tags:["kubernetes","s3"]},i="Introduction",o={permalink:"/TheBidouilleur.xyz/en/blog/s3contabo",editUrl:"https://github.com/QJoly/TheBidouilleur.xyz/tree/main/blog/2022-06-26-Decouvrir-S3.md",source:"@site/blog/2022-06-26-Decouvrir-S3.md",title:"Mes d\xe9buts avec s3",description:"Mon premier cluster Kubernetes est actuellement en ligne. C'est encore un banc de test mais je l'ai pris pr\xe9maturement en prod pour me forcer \xe0 l'administrer de mani\xe8re s\xe9rieuse.",date:"2022-06-26T00:00:00.000Z",formattedDate:"June 26, 2022",tags:[{label:"kubernetes",permalink:"/TheBidouilleur.xyz/en/blog/tags/kubernetes"},{label:"s3",permalink:"/TheBidouilleur.xyz/en/blog/tags/s-3"}],readingTime:3.345,hasTruncateMarker:!1,authors:[{name:"TheBidouilleur",title:"Adorateur de trucs merdiques",url:"https://git.thoughtless.eu",image_url:"https://git.thoughtless.eu/avatars/05bed00fb8cb64b8e3b222f797bcd3d8",imageURL:"https://git.thoughtless.eu/avatars/05bed00fb8cb64b8e3b222f797bcd3d8"}],frontMatter:{slug:"s3contabo",title:"Mes d\xe9buts avec s3",authors:{name:"TheBidouilleur",title:"Adorateur de trucs merdiques",url:"https://git.thoughtless.eu",image_url:"https://git.thoughtless.eu/avatars/05bed00fb8cb64b8e3b222f797bcd3d8",imageURL:"https://git.thoughtless.eu/avatars/05bed00fb8cb64b8e3b222f797bcd3d8"},tags:["kubernetes","s3"]},prevItem:{title:"Longhorn, stockage distribu\xe9",permalink:"/TheBidouilleur.xyz/en/blog/longhorn"},nextItem:{title:"Quick Presentation of Packer",permalink:"/TheBidouilleur.xyz/en/blog/presentation-packer"}},u={authorsImageUrls:[void 0]},l=[{value:"Cr\xe9ation du d\xe9pot restic",id:"cr\xe9ation-du-d\xe9pot-restic",level:2}],p={toc:l};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Mon premier cluster Kubernetes est actuellement en ligne. C'est encore un banc de test mais je l'ai pris pr\xe9maturement en prod pour me forcer \xe0 l'administrer de mani\xe8re s\xe9rieuse.\nAujourd'hui ",(0,a.kt)("em",{parentName:"p"},"(et en esp\xe9rant que \xe7a ait d\xe9j\xe0 \xe9volu\xe9 lorsque vous lirez l'article)"),", mes pods utilisent un backend storage en NFS ",(0,a.kt)("em",{parentName:"p"},"(accessible sur mon NAS)"),". "),(0,a.kt)("p",null,"Je veux que Kubernetes devienne mon manager de conteneur principal, je pense donc essentiel de d\xe9couvrir les particularit\xe9s g\xe9n\xe9rales de Kubernetes avant de commencer \xe0 y d\xe9ployer des applications un peu plus complexes.\nLe stockage S3 est souvent r\xe9f\xe9renc\xe9 comme pratique et utile avec Kubernetes. "),(0,a.kt)("admonition",{title:"remarque",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"J'ai d\xe9j\xe0 utilis\xe9 ",(0,a.kt)("a",{parentName:"p",href:"https://min.io/"},"Minio")," dans un autre contexte. Mais ",(0,a.kt)("em",{parentName:"p"},"je ne compte pas")," utiliser Minio pour d\xe9buter S3, je veux une solution d\xe9j\xe0 pr\xeate et g\xe9n\xe9rique ",(0,a.kt)("em",{parentName:"p"},"(apprendre la normalit\xe9 avant de se sp\xe9cialiser)"),".\nInutile de pr\xe9ciser qu'\xe0 l'avenir : Minio sera ma solution principale en Object Storage.")),(0,a.kt)("p",null,"Je me suis donc orient\xe9 vers ",(0,a.kt)("del",{parentName:"p"},"AWS")," ",(0,a.kt)("a",{parentName:"p",href:"https://contabo.com/en/object-storage/"},"Contabo")," qui propose une solution bien moins ch\xe8re que notre amis am\xe9ricain.\n",(0,a.kt)("em",{parentName:"p"},"je paye 2,39\u20ac mensuels pour 250Go \xe0 la place des 5,75\u20ac demand\xe9s par Amazon.")),(0,a.kt)("h1",{id:"quest-ce-que-le-s3-"},"Qu'est ce que le S3 ?"),(0,a.kt)("p",null,"Pas besoin de faire une d\xe9finition bancale, voici directement l'explication d'Amazon : "),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Amazon Simple Storage Service (Amazon S3) est un service de stockage d'objets qui offre une capacit\xe9 de mise \xe0 l'\xe9chelle, une disponibilit\xe9 des donn\xe9es, une s\xe9curit\xe9 et des performances de pointe. Les clients de toutes les tailles et de tous les secteurs peuvent stocker et prot\xe9ger n'importe quelle quantit\xe9 de donn\xe9es pour la quasi-totalit\xe9 des cas d'utilisation, par exemple les lacs de donn\xe9es ainsi que les applications natives cloud et mobiles. Gr\xe2ce \xe0 des classes de stockage \xe9conomiques et \xe0 des fonctions de gestion faciles \xe0 utiliser, vous pouvez optimiser les co\xfbts, organiser les donn\xe9es et configurer des contr\xf4les d'acc\xe8s affin\xe9s pour r\xe9pondre \xe0 des exigences op\xe9rationnelles, organisationnelles et de conformit\xe9 sp\xe9cifiques.")),(0,a.kt)("p",null,"Traduction : C'est une m\xe9thode performante et rapide de transf\xe9rer des masses de donn\xe9es. "),(0,a.kt)("h1",{id:"et-comment-utiliser-un-stockage-s3-"},"Et comment utiliser un stockage S3 ?"),(0,a.kt)("p",null,"Il convient avant tout de rappeler une notion importante dans l'utilisation d'un Cloud :\n",(0,a.kt)("img",{parentName:"p",src:"https://res.cloudinary.com/teepublic/image/private/s--ecoADk1u--/t_Preview/b_rgb:191919,c_lpad,f_jpg,h_630,q_90,w_1200/v1573678143/production/designs/6718252_0.jpg",alt:null})),(0,a.kt)("p",null,"Si vous ne stockez pas chez vous : considerez que vos donn\xe9es peuvent \xeatre visionn\xe9es sans votre concentement. (",(0,a.kt)("em",{parentName:"p"},"Gouv, NSA, Mamie, Hacker etc..."),")\nAlors il convient de ",(0,a.kt)("strong",{parentName:"p"},"chiffrer vos donn\xe9es"),".\n",(0,a.kt)("em",{parentName:"p"},"Nous parlerons de Minio dans sur une autre page, une solution libre et open-source \xe0 h\xe9berger \xe0 la maison.")),(0,a.kt)("p",null,"On peut dialoguer avec un serveur S3 via de nombreux outils : "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.contabo.com/docs/products/Object-Storage/Tools/cntb/"},"cntb")," (Outil officiel de contabo)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://aws.amazon.com/fr/cli/"},"aws-cli")," (Outil d'amazon mais compatible partout)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://rclone.org/"},"rclone")," "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://cyberduck.io/"},"cyberduck")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/s3fs-fuse/s3fs-fuse"},"s3-fuse"),"\net bien d'autres..")),(0,a.kt)("p",null,"Pour chiffrer mes donn\xe9es, je peux tr\xe8s bien passer par un simple script Bash chiffrant via GPG, puis envoyant les objets vers mon s3. Mais je n'appr\xe9cie pas cette solution bancale, et autant utiliser une solution all-in-one comme ",(0,a.kt)("strong",{parentName:"p"},"rclone")," ou ",(0,a.kt)("strong",{parentName:"p"},"restic"),".\nEt c'est effectivement avec ",(0,a.kt)("strong",{parentName:"p"},"restic")," que l'on va chiffrer et push les donn\xe9es. "),(0,a.kt)("h1",{id:"chiffrer-puis-envoyer-ses-objets"},"Chiffrer puis envoyer ses objets"),(0,a.kt)("p",null,'Comme dit pr\xe9c\xe9demment : restic va \xeatre notre outil principal. Celui-ci fonctionne avec un syst\xe8me de "d\xe9pot"'),(0,a.kt)("h2",{id:"cr\xe9ation-du-d\xe9pot-restic"},"Cr\xe9ation du d\xe9pot restic"),(0,a.kt)("p",null,"Restic permet de cr\xe9er un d\xe9pot ",(0,a.kt)("em",{parentName:"p"},"(qui peut \xeatre distant ou local)"),", ce d\xe9pot chiffr\xe9 sera le lieu o\xf9 nous enverrons nos objets. Pour une premi\xe8re utilisation, on doit initialiser le d\xe9pot avec un ",(0,a.kt)("strong",{parentName:"p"},"restic init")," qui va cr\xe9er la structure de fichier, et d\xe9cider de la cl\xe9 de chiffrement. Une fois le d\xe9pot cr\xe9er, nous pourrons envoyer nos snapshots.  "),(0,a.kt)("p",null,"Restic autorise l'utilisation de variables d'environnement. On peut les d\xe9finir avant d'utiliser restic. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'export AWS_ACCESS_KEY_ID=ab5u8coxxpvjxwq4zu74jifmvfvxfu2y\nexport AWS_SECRET_ACCESS_KEY=3hs9sopqqto9sf8hhet8i92di987qcs6\nbucketName="thebidouilleur"                             # variable s\xe9par\xe9e pour pouvoir la r\xe9utiliser ailleurs\nexport RESTIC_PASSWORD=Smudge9476                       # Mot de passe de chiffrement \nexport RESTIC_REPOSITORY="s3:https://eu2.contabostorage.com/${bucketName}"\n')),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Ce ne sont pas mes vrais tokens, ne tentez pas d'utiliser les m\xeames variables.")),(0,a.kt)("p",null,"On peut enfin laisser restic cr\xe9er notre d\xe9pot : "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"restic init\n")),(0,a.kt)("p",null,"Si aucune erreur n'apparait ... f\xe9licitation ! On peut faire un ",(0,a.kt)("em",{parentName:"p"},"restic backup")," pour cr\xe9er notre premi\xe8re snapshot ! "),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://asciinema.thoughtless.eu/a/AhWauBZMyugP1qJVxf0VZ9fcK"},(0,a.kt)("img",{parentName:"a",src:"https://asciinema.thoughtless.eu/a/AhWauBZMyugP1qJVxf0VZ9fcK.svg",alt:"asciicast"}))),(0,a.kt)("p",null,"On peut donc r\xe9aliser plusieurs sauvegardes assez facilement"))}c.isMDXComponent=!0}}]);