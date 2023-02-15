"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5123],{3905:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>m});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=t.createContext({}),c=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},u=function(e){var n=c(e.components);return t.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,y=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return r?t.createElement(y,o(o({ref:n},u),{},{components:r})):t.createElement(y,o({ref:n},u))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2015:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var t=r(7462),a=(r(7294),r(3905));const i={title:"Utilisation d'un registre priv\xe9"},o=void 0,l={unversionedId:"Kubernetes/registre-client",id:"Kubernetes/registre-client",title:"Utilisation d'un registre priv\xe9",description:"D\xe8s qu\u2019on s\u2019amuse avec des conteneurs et qu\u2019on commence \xe0 cr\xe9er les siens, il est n\xe9cessaire d\u2019avoir son propre registre. (Par simplicit\xe9, optimisation, efficacit\xe9)",source:"@site/docs/Kubernetes/registre-client.md",sourceDirName:"Kubernetes",slug:"/Kubernetes/registre-client",permalink:"/TheBidouilleur.xyz/docs/Kubernetes/registre-client",draft:!1,editUrl:"https://github.com/QJoly/TheBidouilleur.xyz/tree/main/docs/Kubernetes/registre-client.md",tags:[],version:"current",frontMatter:{title:"Utilisation d'un registre priv\xe9"},sidebar:"tutorialSidebar",previous:{title:"Kubectl sur machine cliente",permalink:"/TheBidouilleur.xyz/docs/Kubernetes/kube-client"}},s={},c=[{value:"Cr\xe9ation du secret",id:"cr\xe9ation-du-secret",level:2},{value:"En CLI",id:"en-cli",level:3},{value:"En YAML",id:"en-yaml",level:3}],u={toc:c};function p(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"D\xe8s qu\u2019on s\u2019amuse avec des conteneurs et qu\u2019on commence \xe0 cr\xe9er les siens, il est n\xe9cessaire d\u2019avoir son propre registre. ",(0,a.kt)("em",{parentName:"p"},"(Par simplicit\xe9, optimisation, efficacit\xe9)")),(0,a.kt)("h2",{id:"cr\xe9ation-du-secret"},"Cr\xe9ation du secret"),(0,a.kt)("h3",{id:"en-cli"},"En CLI"),(0,a.kt)("p",null,"Voici la commande ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl")," permettant de cr\xe9er un secret contenant les informations requises pour se connecter \xe0 un registre priv\xe9."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"NAMESPACE=thebidouilleur\nkubectl --namespace $NAMESPACE create secret docker-registry regcred --docker-server=https://registry.thebidouilleur.xyz --docker-username=admin --docker-password=admin --docker-email=kube@kube\n")),(0,a.kt)("h3",{id:"en-yaml"},"En YAML"),(0,a.kt)("p",null,"Nous allons faire cet exemple avec les identifiants suivants: ",(0,a.kt)("inlineCode",{parentName:"p"},"user:pass"),"\nIl faudra convertir cette combinaison en ",(0,a.kt)("strong",{parentName:"p"},"base64"),". Je passe par mon terminal Linux pour r\xe9aliser cette conversion."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'echo -n "user:pass" | base64 # dXNlcjpwYXNz\n')),(0,a.kt)("p",null,"On va ensuite cr\xe9er notre fichier de configuration en format ",(0,a.kt)("strong",{parentName:"p"},"JSON")," ",(0,a.kt)("em",{parentName:"p"},"(qui est le format accept\xe9 par docker pour le fichier ",(0,a.kt)("inlineCode",{parentName:"em"},"~/.docker/config"),")")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n"auths": \n{\n    "registry.thebidouilleur.xyz":\n    { \n        "auth": "dXNlcjpwYXNz" }\n    }\n}\n')),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Pensez \xe0 remplacer l\u2019url du registre"),".\nIl faudra mettre notre JSON sur ",(0,a.kt)("strong",{parentName:"p"},"une ligne")," et l\u2019encoder en ",(0,a.kt)("strong",{parentName:"p"},"base64")," pour cr\xe9er notre manifest final."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'echo -n \'{"auths":{"registry.thebidouilleur.xyz":{"auth":"dXNlcjpwYXNz"}}}\' | base64 # eyJhdXRocyI6eyJyZWdpc3RyeS50aGViaWRvdWlsbGV1ci54eXoiOnsiYXV0aCI6ImRYTmxjanB3WVhOeiJ9fX0=\n')),(0,a.kt)("p",null,"On peut enfin cr\xe9er notre yaml qu\u2019on donnera \xe0 kubectl."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1 \ndata: \n .dockerconfigjson: eyJhdXRocyI6eyJyZWdpc3RyeS50aGViaWRvdWlsbGV1ci54eXoiOnsiYXV0aCI6ImRYTmxjanB3WVhOeiJ9fX0=\nkind: Secret \nmetadata: \n name: regcred \n namespace: thebidouilleur \ntype: kubernetes.io/dockerconfigjson\n")),(0,a.kt)("p",null,"Une fois ing\xe9r\xe9 par notre cluster. Nous allons pouvoir utiliser des images provenant d\u2019un registre priv\xe9.\nExemple: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: deploy-thebidouilleur\n  labels: \n    version: 4.3.4\n  annotations:\n    argocd.argoproj.io/hook: PostSync\n    namespace: thebidouilleur\nspec:\n  selector:\n    matchLabels:\n      app: deploy-thebidouilleur\n  replicas: 1 \n  template:\n    metadata:\n      labels:\n        app: deploy-thebidouilleur \n    spec:\n      containers:\n      - name: thebidouilleur\n        image: registry.thebidouilleur.xyz/thebidouilleur:latest\n        imagePullPolicy: Always\n        env:\n        - name: RUN_MODE\n          value: "production"\n        ports:\n        - containerPort: 80\n        livenessProbe:\n          tcpSocket:\n            host: 127.0.0.1\n            port: 80\n          initialDelaySeconds: 180\n          periodSeconds: 3\n      imagePullSecrets:\n      - name: regcred\n')))}p.isMDXComponent=!0}}]);