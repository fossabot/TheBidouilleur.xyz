"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5179],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return n?a.createElement(f,s(s({ref:t},c),{},{components:n})):a.createElement(f,s({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4329:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={slug:"sops",title:"Stocker des secrets dans un d\xe9p\xf4t Git",tags:["gitops","sops"],description:"Sops est un utilitaire cr\xe9\xe9 par Mozilla permettant de chiffrer ses secrets. Nous allons voir comment mettre en place SOPS et le coupler \xe0 pre-commit pour ne jamais commit sans chiffrer vos secrets."},s=void 0,o={unversionedId:"Adminsys/sops",id:"Adminsys/sops",title:"Stocker des secrets dans un d\xe9p\xf4t Git",description:"Sops est un utilitaire cr\xe9\xe9 par Mozilla permettant de chiffrer ses secrets. Nous allons voir comment mettre en place SOPS et le coupler \xe0 pre-commit pour ne jamais commit sans chiffrer vos secrets.",source:"@site/docs/Adminsys/sops.md",sourceDirName:"Adminsys",slug:"/Adminsys/sops",permalink:"/TheBidouilleur.xyz/en/docs/Adminsys/sops",draft:!1,editUrl:"https://github.com/QJoly/TheBidouilleur.xyz/tree/main/docs/Adminsys/sops.md",tags:[{label:"gitops",permalink:"/TheBidouilleur.xyz/en/docs/tags/gitops"},{label:"sops",permalink:"/TheBidouilleur.xyz/en/docs/tags/sops"}],version:"current",frontMatter:{slug:"sops",title:"Stocker des secrets dans un d\xe9p\xf4t Git",tags:["gitops","sops"],description:"Sops est un utilitaire cr\xe9\xe9 par Mozilla permettant de chiffrer ses secrets. Nous allons voir comment mettre en place SOPS et le coupler \xe0 pre-commit pour ne jamais commit sans chiffrer vos secrets."},sidebar:"tutorialSidebar",previous:{title:"Boot PXE avec netboot",permalink:"/TheBidouilleur.xyz/en/docs/Adminsys/netbootxyz"},next:{title:"V\xe9rification configuration syst\xe8me (testinfra)",permalink:"/TheBidouilleur.xyz/en/docs/Adminsys/testinfra"}},l={},p=[{value:"Cr\xe9er notre cl\xe9 Age",id:"cr\xe9er-notre-cl\xe9-age",level:2},{value:"Sops, en pratique",id:"sops-en-pratique",level:2},{value:"Chiffrer avant de commiter",id:"chiffrer-avant-de-commiter",level:2}],c={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\xc9viter d\u2019envoyer ses secrets sur Git, nous devons toujours \xeatre vigileant avant un quelconque Push. Et c\u2019est justement le but de  ",(0,r.kt)("strong",{parentName:"p"},"Sops")," ",(0,r.kt)("em",{parentName:"p"},"(Secrets OPerationS)")," qui va nous aider \xe0 stocker nos informations sur le d\xe9p\xf4t.. mais en les chiffrant."),(0,r.kt)("p",null,"Celui-ci est compatible avec de nombreux gestionnaires de secret comme : "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Hashicorp Vault"),(0,r.kt)("li",{parentName:"ul"},"GCP KMS"),(0,r.kt)("li",{parentName:"ul"},"PGP"),(0,r.kt)("li",{parentName:"ul"},"Age ",(0,r.kt)("em",{parentName:"li"},"(Celui que nous allons utiliser)"))),(0,r.kt)("admonition",{title:"Age",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Age est un outil en Go simple et moderne. Celui-ci propose un format qui semble \xeatre valid\xe9 par de nombreux experts.")),(0,r.kt)("h2",{id:"cr\xe9er-notre-cl\xe9-age"},"Cr\xe9er notre cl\xe9 Age"),(0,r.kt)("admonition",{title:"Installer Age",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Vous pouvez installer Age en suivant les instructions sur le d\xe9p\xf4t officiel ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/FiloSottile/age"},"ici"))),(0,r.kt)("p",null,"Nous allons donc cr\xe9er notre propre cl\xe9 avec age. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p ~/.keys/\nage-keygen -o ~/.keys/ma-cle\n")),(0,r.kt)("p",null,"En inspectant le contenu du fichier ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.keys/ma-cle"),", nous remarquons un sch\xe9ma que l\u2019on connait bien : une cl\xe9 publique, et une cl\xe9 priv\xe9e. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# created: 2023-02-15T07:50:20+01:00\n# public key: age1220x7zmnp0j8du3vxk67a4mdkr3gqn9djjn7f7gamjclr3em7g2sxpns35\nAGE-SECRET-KEY-1JY9Q0NWNRK4DCT9J3D2H0Z9D5ZY0XHV8EJ39JKKK2PW6SUH9FTFSN9T6HF\n")),(0,r.kt)("p",null,"Et pour que ",(0,r.kt)("em",{parentName:"p"},"Sops")," utilise cette cl\xe9, nous allons cr\xe9er la variable d\u2019environnement ",(0,r.kt)("inlineCode",{parentName:"p"},"SOPS_AGE_KEY_FILE")," dans notre ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.bashrc")," ou ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.zshrs"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export SOPS_AGE_KEY_FILE=~/.keys/ma-cle\n")),(0,r.kt)("p",null,"Maintenant, nous pouvons passer au niveau sup\xe9rieur : ",(0,r.kt)("strong",{parentName:"p"},"cr\xe9er notre premier fichier de secret"),"."),(0,r.kt)("h2",{id:"sops-en-pratique"},"Sops, en pratique"),(0,r.kt)("admonition",{title:"Installer Sops",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Vous pouvez installer Sops sur un syst\xe8me Amd64 en suivant ces instructions: "),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://github.com/mozilla/sops/releases/download/v3.7.3/sops-v3.7.3.linux.amd64 -O /usr/bin/sops\nchmod +x /usr/bin/sops\n"))),(0,r.kt)("p",null,"Notre syst\xe8me d\u2019authentification est d\xe9j\xe0 cr\xe9\xe9 : c\u2019est notre couple de cl\xe9 AGE. Ce que nous allons faire maintenant, c\u2019est cr\xe9er un secret qui sera d\xe9chiffrable uniquement par notre cl\xe9 priv\xe9e."),(0,r.kt)("p",null,"Premi\xe8re chose que nous allons faire, c\u2019est cr\xe9er notre fichier ",(0,r.kt)("inlineCode",{parentName:"p"},".sops.yaml"),"."),(0,r.kt)("p",null,"Ce fichier permet de d\xe9finir quels fichiers devront \xeatre manoeuvr\xe9s par SOPS et surtout : quels cl\xe9s ont acc\xe8s \xe0 ces fichiers. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},'# .sops.yaml\ncreation_rules:\n    - path_regex: secret.*\\.ya?ml\n      encrypted_regex: "^(username|password)$"\n      key_groups:\n      - age:\n        - age1220x7zmnp0j8du3vxk67a4mdkr3gqn9djjn7f7gamjclr3em7g2sxpns35\n')),(0,r.kt)("p",null,"Cr\xe9ons maintenant un fichier ",(0,r.kt)("inlineCode",{parentName:"p"},"secret.dev.yml"),": "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'username: "thebidouilleur"\npassword: jadorelabidouille\nurl: "https://thebidouilleur.xyz"\nQI: 7.2\n')),(0,r.kt)("p",null,"et affichons ce m\xeame fichier en le chiffrant avec sops via l\u2019argument ",(0,r.kt)("inlineCode",{parentName:"p"},"-e")," ",(0,r.kt)("em",{parentName:"p"},"(encrypt)"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'\u279c  sops -e secret.dev.yml\nusername: ENC[AES256_GCM,data:8KUxRrhWLWsbxzJqxRQ=,iv:qJQYUgCQ6wv9fmn+scJ3ui7tFD6lpoRH0qpC+n58sF8=,tag:RJdluEfMdnXy6Zhpxn2AyQ==,type:str]\npassword: ENC[AES256_GCM,data:dm9t60SH/4/wqy3Ww5RxaDU=,iv:ch0ZRbhN6+ouCNXzgWO63GHK9ewgOMpfJMzjYxIq8h4=,tag:EKRHJBwRV8ZRRpDMaGG4sQ==,type:str]\nurl: https://thebidouilleur.xyz\nQI: 7.2\nsops:\n    kms: []\n    gcp_kms: []\n    azure_kv: []\n    hc_vault: []\n    age:\n        - recipient: age14ysm820ajay8wqslnkjqcewvq4tmeucth3a88qk4a7hl0mnwkfaqmj6xx5\n          enc: |\n            -----BEGIN AGE ENCRYPTED FILE-----\n            YWdlLWVuY3J5cHRpb24ub3JnL3YxCi0+IFgyNTUxOSBHZU9xNklSTkRTU0p0SFV3\n            NE1tV2M2Wjk3SDl2a1lJWk8wQi96Yjk2eUVjCi9qSWREUkZqTFpOa1luZEFlb2lK\n            dHBBNDllSFlhL2cycW82SGl4bDU2YXcKLS0tIHd5aCsyK1BHT2dDTGpZWUxITE83\n            MFd5MlowTHNIekVXTzJWbXNuUmxGRWsKp1o+kh9lbWBLh6rZ4845c31rxowb9uX+\n            /a01TYbiWfn2lWmUJ+gXq0nQZxqo3iDEI+mrG+n+c79rmq6BGPYVPw==\n            -----END AGE ENCRYPTED FILE-----\n    lastmodified: "2023-02-15T11:44:32Z"\n    mac: ENC[AES256_GCM,data:cUtxnG/ycha3Zk0xNrmeioeBB9SiH3U4ENbnGtkpJmM9SBOFVZGKikaDZwdk1c2aflC07kELIoN0BxspgJseCLNvA3nsTYEEjHe53zJZUaDYn7u0D1+th3XjYdU17zdx9ECN5SjExvOIDLmQ4j512/LCN+lBVi4SxaJWDqzzva0=,iv:vhrbuibyInOxcYihgMVZN8c0v05GdPXB+EbACQijg9s=,tag:GHLv+agLCXcTiUDq8gBEkA==,type:str]\n    pgp: []\n    encrypted_regex: ^(username|password)$\n    version: 3.7.3\n')),(0,r.kt)("p",null,"Ni l\u2019URL, ni mon QI n\u2019ont \xe9t\xe9 chiffr\xe9s. Gardez \xe9galement en ",(0,r.kt)("em",{parentName:"p"},"t\xeate")," que la commande ",(0,r.kt)("strong",{parentName:"p"},"ne fait qu\u2019afficher un output du m\xeame fichier chiffr\xe9, le fichier n\u2019a pas \xe9t\xe9 modifi\xe9"),". "),(0,r.kt)("p",null,"Si on souhaite r\xe9-\xe9crire le fichier, il faut rajouter l\u2019argument ",(0,r.kt)("inlineCode",{parentName:"p"},"-i")," : ",(0,r.kt)("inlineCode",{parentName:"p"},"sops -e -i secret.dev.yml")),(0,r.kt)("p",null,"Pour d\xe9chiffrer le fichier, il suffit de faire la m\xeame commande en changeant ",(0,r.kt)("inlineCode",{parentName:"p"},"-e")," par ",(0,r.kt)("inlineCode",{parentName:"p"},"-d")," ",(0,r.kt)("em",{parentName:"p"},"(decrypt)"),"."),(0,r.kt)("p",null,"Si jamais je chiffre mon fichier ",(0,r.kt)("inlineCode",{parentName:"p"},"secret.dev.yml")," et que je change de cl\xe9, nous serons dans l\u2019incapacit\xe9 de le chiffrer : "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'\u279c sops -d -i secret.dev.yml\nFailed to get the data key required to decrypt the SOPS file.\n\nGroup 0: FAILED\n  age14ysm820ajay8wqslnkjqcewvq4tmeucth3a88qk4a7hl0mnwkfaqmj6xx5: FAILED\n    - | no age identity found in "~/.keys/ma-cle" that\n      | could decrypt the data\n\nRecovery failed because no master key was able to decrypt the file. In\norder for SOPS to recover the file, at least one key has to be successful,\nbut none were.\n')),(0,r.kt)("p",null,"Pour ajouter une cl\xe9 pouvant d\xe9chiffrer les fichiers, rajoutez-l\xe0 dans votre ",(0,r.kt)("inlineCode",{parentName:"p"},".sops.yaml"),"."),(0,r.kt)("p",null,"En d\xe9chiffrant puis rechiffrant les fichiers, la nouvelle cl\xe9 y aura acc\xe8s."),(0,r.kt)("h2",{id:"chiffrer-avant-de-commiter"},"Chiffrer avant de commiter"),(0,r.kt)("p",null,"Mais comme Skynet ",(0,r.kt)("em",{parentName:"p"},"(ou ChatGPT)")," n\u2019a pas encore remplac\xe9 les informaticiens : nous restons humains. Il est donc obligatoire de trouver un moyen pour ne ",(0,r.kt)("strong",{parentName:"p"},"jamais")," oublier de chiffrer nos secrets avant de commit. Et la solution est simple : ",(0,r.kt)("a",{parentName:"p",href:"https://pre-commit.com"},"pre-commit")),(0,r.kt)("admonition",{title:"Pre-Commit",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Pre-Commit est un utilitaire en Python permettant d\u2019automatiser certaines taches avant de commit votre code. Il est ainsi possible de faire votre propre ",(0,r.kt)("em",{parentName:"p"},"CI")," en testant vos fichiers ou \u2026 en chiffrant vos secrets.")),(0,r.kt)("p",null,"L\u2019installation de pre-commit se fait avec ",(0,r.kt)("inlineCode",{parentName:"p"},"pip")," ",(0,r.kt)("em",{parentName:"p"},"(Si vous n\u2019\xeates pas \xe0 l\u2019aise avec Python, je vous invite \xe0 suivre ",(0,r.kt)("a",{parentName:"em",href:"https://pip.pypa.io/en/stable/installation/"},"cette documentation")," pour l\u2019installer.)"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pip install pre-commit\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Si vous avez install\xe9 ",(0,r.kt)("inlineCode",{parentName:"p"},"pip")," mais que vous n\u2019arrivez pas \xe0 le lancer car ",(0,r.kt)("inlineCode",{parentName:"p"},"commande introuvable"),", c\u2019est surement car celui-ci ne s\u2019est pas mis dans votre ",(0,r.kt)("inlineCode",{parentName:"p"},"$PATH"),".\nIl faudra ajouter le dossier ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.local/bin")," dans votre fichier ",(0,r.kt)("inlineCode",{parentName:"p"},".bashrc")," ou ",(0,r.kt)("inlineCode",{parentName:"p"},".zshrc"),"."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'export PATH="$PATH:$HOME/.local/bin\n'))),(0,r.kt)("p",null,"Une fois pre-commit install\xe9, il faudra l\u2019activer dans un dossier g\xe9rer par ",(0,r.kt)("em",{parentName:"p"},"Git"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\u279c  pre-commit install\npre-commit installed at .git/hooks/pre-commit\n")),(0,r.kt)("p",null,"Nous allons maintenant cr\xe9er le fichier ",(0,r.kt)("inlineCode",{parentName:"p"},".pre-commit-config.yaml"),". avec le contenu suivant:  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"repos:\n- repo: local\n  hooks:\n    - id: encrypt files\n      name: encrypt files\n      entry: .pre-commit-sops.sh\n      language: script\n      pass_filenames: true\n")),(0,r.kt)("p",null,"Cette configuration permet \xe0 ",(0,r.kt)("strong",{parentName:"p"},"pre-commit")," d\u2019ex\xe9cuter le script ",(0,r.kt)("inlineCode",{parentName:"p"},".pre-commit-sops.sh")," avant chaque commit. Et voici le contenu de ce fichier : "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'#!/bin/bash\nfilename="$1"\nif [[ "$filename" =~ ^secret\\..*\\.ya?ml$ ]]; then\n  echo "$filename matches pattern, encrypting..."\n  sops -e -i $filename\n  git add $filename\nelse\n  echo "Filename does not match pattern"\nfi\n')),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Donc si le fichier correspond au pattern identifiant les fichiers contenants les secrets, nous le chiffrons, et nous actualisons son contenu avant de commit.")),(0,r.kt)("p",null,"Pensez \xe9galement \xe0 rendre votre fichier ex\xe9cutable."),(0,r.kt)("p",null,"On teste \xe7a, le fichier ",(0,r.kt)("inlineCode",{parentName:"p"},"secret.dev.yml")," devrait \xeatre chiffr\xe9 apr\xe8s mon commit. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'TheBidouilleur:~/Documents/GitOps$ cat secret.dev.yaml \nusername: bigusername\npassword: bigpassword\nchiffre-pas-\xe7a: coucou2\nTheBidouilleur:~/Documents/GitOps$ git add secret.dev.yaml \nTheBidouilleur:~/Documents/GitOps$ git commit -m "Je veux chiffrer mes secrets"\nencrypt files............................................................Passed\n[main 7ffcf4a] Je veux chiffrer mes secrets\n 1 file changed, 23 insertions(+), 25 deletions(-)\n rewrite secret.dev.yaml (75%)\nkiko:~/Documents/GitOps$ cat secret.dev.yaml \nusername: ENC[AES256_GCM,data:wrK2xpPUBYE9dEo=,iv:B2KKu9Y3BeT9Cj8cgZFmxeK70ZOiJhE7wtRkYk0hY4U=,tag:MKgFQqkSOD9tCVp1PlnVOA==,type:str]\npassword: ENC[AES256_GCM,data:qCTcjaUbPpzzMUc=,iv:q3vmXf2YbZtSgm1vCj5tpdu+Ug4Hby9IOo2/y7zBwQI=,tag:0TvqVAIDxxPLk1GsEDKXcQ==,type:str]\nchiffre-pas-\xe7a: coucou2\nsops:\n    kms: []\n    gcp_kms: []\n    azure_kv: []\n    hc_vault: []\n    age:\n        - recipient: age14ysm820ajay8wqslnkjqcewvq4tmeucth3a88qk4a7hl0mnwkfaqmj6xx5\n          enc: |\n            -----BEGIN AGE ENCRYPTED FILE-----\n            YWdlLWVuY3J5cHRpb24ub3JnL3YxCi0+IFgyNTUxOSByTFFQMU95dVc3dkk5Y2VB\n            TFQ3czc5WDliNXpOV001b3FaNWdGbW82ampVCitzVGFmemFvdC9kVnF4SlBNMGdi\n            Yjc3ZERiMWVKZXoveFdHbVRWU3pRc1kKLS0tIDFCOTh1U0F6QmtsaG1WTElDbjRz\n            TXdCeVpER0h6WG9XZm93bGI2Ni83SXMKCPLM5tTUYkhjirljDcNitID/2NXbOx4y\n            i5/f79+ulVkWm9hx+AmNBxdbzbopJOk+/y1UmWF64y7ovPjdFy5BSg==\n            -----END AGE ENCRYPTED FILE-----\n    lastmodified: "2023-02-15T21:22:28Z"\n    mac: ENC[AES256_GCM,data:2PlCiFkxCl84odqZ6Qxo74VLhAe2Tqa7pUDbYJTshpG+WKYj/mN9xvfU3Pz8NNe5vWoone2PV2nLvrLQlDQEjnM5PybLRVcSDiSPHF61VfdiI4G25DTScrHWmucSxIv7JFlagVH8JOjii43oe4Ul+coVhhSn3PClIS3X22ZqjUI=,iv:mSZ6Pl0Q7RT3hSFsP0pmF77XnzNyZ6c50G2lsIw6zOU=,tag:z6RH/DDhpRk7rtigdc3mXA==,type:str]\n    pgp: []\n    encrypted_regex: ^(username|password)$\n    version: 3.7.3\n')),(0,r.kt)("p",null,"Et maintenant.. aucun risque d\u2019oublier de chiffrer !"))}m.isMDXComponent=!0}}]);