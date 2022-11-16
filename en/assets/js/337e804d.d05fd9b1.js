"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5414],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(t),d=a,h=c["".concat(l,".").concat(d)]||c[d]||m[d]||i;return t?r.createElement(h,o(o({ref:n},p),{},{components:t})):r.createElement(h,o({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=c;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},698:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=t(7462),a=(t(7294),t(3905));const i={slug:"nixos",title:"NixOS, Ma nouvelle distribution",authors:{name:"TheBidouilleur",title:"Adorateur de trucs merdiques",url:"https://git.thoughtless.eu",image_url:"https://git.thoughtless.eu/avatars/05bed00fb8cb64b8e3b222f797bcd3d8"},tags:["NixOS","devops"]},o=void 0,s={permalink:"/TheBidouilleur.xyz/en/blog/nixos",editUrl:"https://github.com/QJoly/TheBidouilleur.xyz/tree/main/blog/2022-09-26-NixOS.md",source:"@site/blog/2022-09-26-NixOS.md",title:"NixOS, Ma nouvelle distribution",description:"Introduction \xe0 Nix et NixOS",date:"2022-09-26T00:00:00.000Z",formattedDate:"September 26, 2022",tags:[{label:"NixOS",permalink:"/TheBidouilleur.xyz/en/blog/tags/nix-os"},{label:"devops",permalink:"/TheBidouilleur.xyz/en/blog/tags/devops"}],readingTime:4.71,hasTruncateMarker:!1,authors:[{name:"TheBidouilleur",title:"Adorateur de trucs merdiques",url:"https://git.thoughtless.eu",image_url:"https://git.thoughtless.eu/avatars/05bed00fb8cb64b8e3b222f797bcd3d8",imageURL:"https://git.thoughtless.eu/avatars/05bed00fb8cb64b8e3b222f797bcd3d8"}],frontMatter:{slug:"nixos",title:"NixOS, Ma nouvelle distribution",authors:{name:"TheBidouilleur",title:"Adorateur de trucs merdiques",url:"https://git.thoughtless.eu",image_url:"https://git.thoughtless.eu/avatars/05bed00fb8cb64b8e3b222f797bcd3d8",imageURL:"https://git.thoughtless.eu/avatars/05bed00fb8cb64b8e3b222f797bcd3d8"},tags:["NixOS","devops"]},prevItem:{title:"Programmer sous Devspace",permalink:"/TheBidouilleur.xyz/en/blog/devspace"},nextItem:{title:"Mes d\xe9buts \xe0 la gyroroue",permalink:"/TheBidouilleur.xyz/en/blog/gyroroue"}},l={authorsImageUrls:[void 0]},u=[{value:"Introduction \xe0 Nix et NixOS",id:"introduction-\xe0-nix-et-nixos",level:2},{value:"Nix-Shell",id:"nix-shell",level:2},{value:"Home-Manager",id:"home-manager",level:2},{value:"Conclusion",id:"conclusion",level:2}],p={toc:u};function m(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction-\xe0-nix-et-nixos"},"Introduction \xe0 Nix et NixOS"),(0,a.kt)("p",null,"NixOS est une distribution Linux sortie initialement en 2003 et cr\xe9\xe9e par (",(0,a.kt)("a",{parentName:"p",href:"https://www.linkedin.com/in/edolstra"},"Eelco Dolstra"),", un chercheur travaillant sur la cr\xe9ation d'un syst\xe8me immuable.\nCelle-ci se base sur le gestionnaire de paquet ",(0,a.kt)("strong",{parentName:"p"},"Nix")," qui permet de g\xe9rer la configuration du syst\xe8me \xe0 l'aide de fichiers Nix (un langage de programmation similaire au Haskell). "),(0,a.kt)("p",null,"Ainsi si je souhaite cr\xe9er un utilisateur ",(0,a.kt)("em",{parentName:"p"},"kiko")," sur mon syst\xe8me, je peux \xe9crire ceci dans mon fichier ",(0,a.kt)("em",{parentName:"p"},"configuration.nix")," (qui est le fichier de configuration de l'OS initial) "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-haskell"},'  users.users.kiko = {\n    isNormalUser = true;\n    description = "kiko";\n    extraGroups = [ "networkmanager" "wheel" "sudo" ];\n    packages = with pkgs; [\n      firefox\n      vim\n      neovim\n      kubectl\n      terraform\n    ];\n  };\n')),(0,a.kt)("p",null," Ou si je veux installer des programmes dans le syst\xe8me, je peux \xe9crire \xe7a : "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-haskell"},"  environment.systemPackages = with pkgs; [\n   vim\n   wget\n   htop\n ];\n")),(0,a.kt)("p",null,"Et l\xe0, si vous \xeates habitu\xe9s aux gestionnaires de paquets normaux : vous avez remarqu\xe9 que mon utilisateur peut installer des librairies de mani\xe8re autonome. "),(0,a.kt)("p",null,"C'est l'un des points forts de Nix ! Des environnements \xe9ph\xe9m\xe8res, des librairies contradictoires qui peuvent cohabiter, et des utilisateurs enti\xe8rements ind\xe9pendants. "),(0,a.kt)("p",null,"Nix ",(0,a.kt)("em",{parentName:"p"},"(nous parlons du gestionnaire de paquets)")," autorise chaque utilisateur \xe0 avoir son propre PATH (ex: ",(0,a.kt)("inlineCode",{parentName:"p"},"/run/wrappers/bin:/home/kiko/.nix-profile/bin:/etc/profiles/per-user/kiko/bin:/nix/var/nix/profiles/default/bin:/run/current-system/sw/bin\n"),").\nMais il ne se limite pas qu'\xe0 \xe7a : on peut cr\xe9er des environnements temporaires assez rapidement pour ne pas avoir \xe0 installer un programme et pouvoir s'en servir ponctuellement. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"\u276f cowsay\nThe program 'cowsay' is not in your PATH. It is provided by several packages.\nYou can make it available in an ephemeral shell by typing one of the following:\n  nix-shell -p cowsay\n  nix-shell -p neo-cowsay\n\n~ \n\u276f nix-shell -p cowsay\nthis path will be fetched (0.01 MiB download, 0.05 MiB unpacked):\n  /nix/store/9647mfqndy0aa8qkniqa05qc9yi575ny-cowsay-3.04\ncopying path '/nix/store/9647mfqndy0aa8qkniqa05qc9yi575ny-cowsay-3.04' from 'https://cache.nixos.org'...\n\n~ via \u2744\ufe0f  impure (shell) \n\u276f cowsay \"J aime la bidouille\"\n _____________________ \n< J aime la bidouille >\n --------------------- \n        \\   ^__^\n         \\  (oo)\\_______\n            (__)\\       )\\/\\\n                ||----w |\n                ||     ||\n\n~ via \u2744\ufe0f  impure (shell) \n\u276f exit\nexit\n\n~ took 44s \n\u276f cowsay\nThe program 'cowsay' is not in your PATH. It is provided by several packages.\nYou can make it available in an ephemeral shell by typing one of the following:\n  nix-shell -p cowsay\n  nix-shell -p neo-cowsay\n\n")),(0,a.kt)("p",null,"Nous avons cr\xe9\xe9 un environnement similaire au notre.. mais avec le binaire cowsay. "),(0,a.kt)("p",null,"Mais nous avons parl\xe9 d'environnement, alors cr\xe9ons un r\xe9el nix-shell plus complet..."),(0,a.kt)("h2",{id:"nix-shell"},"Nix-Shell"),(0,a.kt)("p",null,"Cr\xe9ons 2 fichiers. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-haskell"},"# default.nix\nwith (import <nixpkgs> {});\nlet\n  my-python-packages = python-packages: with python-packages; [\n    requests\n  ];\n  python-with-my-packages = python3.withPackages my-python-packages;\nin\nmkShell {\n  buildInputs = [\n    python-with-my-packages\n  ];\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"app.py","app.py":!0},"# app.py\nimport requests\nresponse = requests.get('http://perdu.com')\nprint(response.content)\n")),(0,a.kt)("p",null,"Le fichier app.py est notre ",(0,a.kt)("em",{parentName:"p"},"tr\xe8s compl\xe8xe")," application tandis que le fichier ",(0,a.kt)("em",{parentName:"p"},"default.nix")," d\xe9crit l'environnement requis.\nSi je lance directement l'application ",(0,a.kt)("inlineCode",{parentName:"p"},"python3 app.py")," je me retrouve avec une erreur car je n'ai pas install\xe9 python3 dans mon environnement..\nJe peux cr\xe9er un nix-shell avec python et lancer mon app.py :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"\u276f nix-shell -p python38 # cr\xe9ation d'un env avec python3.8\n\n/tmp/python via \ud83d\udc0d v3.8.13 via \u2744\ufe0f  impure (shell) \n\u276f python3 app.py \nTraceback (most recent call last):\n  File \"app.py\", line 1, in <module>\n    import requests\nModuleNotFoundError: No module named 'requests'\n")),(0,a.kt)("p",null,"Mais nous nous retrouvons avec un autre probl\xe8me de d\xe9pendance..\nIl est donc possible de cr\xe9er notre environnement \xe0 l'aide du fichier ",(0,a.kt)("strong",{parentName:"p"},"default.nix")," qui contiendra Python et la librairie requests ",(0,a.kt)("em",{parentName:"p"},"(indispensable pour notre application"),"."),(0,a.kt)("p",null,"Par d\xe9faut, nix-shell va chercher les fichiers nomm\xe9s default.nix dans notre r\xe9pertoire courant. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'/tmp/python via \ud83d\udc0d took 5m28s \n\u276f nix-shell \n\n/tmp/python via \ud83d\udc0d v3.9.13 via \u2744\ufe0f  impure (nix-shell) \n\u276f python3 app.py \nb"<html><head><title>Vous Etes Perdu ?</title></head><body><h1>Perdu sur l\'Internet ?</h1><h2>Pas de panique, on va vous aider</h2><strong><pre>    * <----- vous &ecirc;tes ici</pre></strong></body></html>\\n"\n')),(0,a.kt)("p",null,"Avec cette m\xe9thode, il est possible d'avoir plusieurs environnements pour lancer des applications diff\xe9rentes sans se soucier des effets de bords sur nos autres programmes. "),(0,a.kt)("h2",{id:"home-manager"},"Home-Manager"),(0,a.kt)("p",null,"Si jamais je r\xe9sume ce que nous avons vu : "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Comment NixOS peut automatiser une configuration d'OS ",(0,a.kt)("em",{parentName:"li"},"(On pourrait voir comment l'installer de la m\xeame mani\xe8re)")," "),(0,a.kt)("li",{parentName:"ul"},"Comment cr\xe9er des environnements ind\xe9pendants\nIl reste un aspect essentiel au passage sur Nix: le d\xe9ploiement d'une configuration utilisateur ! ")),(0,a.kt)("p",null,"Nix permet de d\xe9ployer bien plus que quelques programmes, il existe une librairie d'instruction pour faciliter la configuration/d\xe9ploiement d'un logiciel.\nPar exemple, \xe0 la cr\xe9ation de mon utilisateur quotidien, je dois parametrer Git avec mon nom, et mon mail avant chaque commit.. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'git config --global user.name "Toto"\ngit config --global user.email "toto@toto.com"\n')),(0,a.kt)("p",null,"Avec Nix, je peux cr\xe9er un fichier dans mon home et garder cette configuration en dur : "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-haskell"},'  programs = {\n    git = {\n    enable = true;\n    userName = "Toto";\n    userEmail = "toto@toto.com";\n    ignores =  [\n      "*~"\n      "*.swp"\n     ];\n    };\n  };\n')),(0,a.kt)("p",null,"J'ai donc plusieurs fichiers Nix me permettant d'installer mes programmes, de configurer Git, d'installer mon EMacs-Doom avec mes param\xe8tres, de d\xe9poser mes dotfiles aux bons endroits.\nPour l'instant.. ma configuration est publique et disponible ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/QJoly/home.nix"},"ici"),", \xe0 voir ce que j'en ferai \xe0 l'avenir.. :) "),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"Nix est vaste, tr\xe8s vaste, et il peut \xeatre compliqu\xe9 d'en apprendre les bases. La communaut\xe9 est au courant du manque de documentation et fait beaucoup d'effort pour donner une image agr\xe9able \xe0 Nix pour les d\xe9butants.\nJe pense que Nix a un potentiel non-n\xe9gligeable pour les workstations/serveurs et pourrait m\xeame remplacer des outils de d\xe9ploiement d'OS comme ",(0,a.kt)("a",{parentName:"p",href:"https://packer.io"},"Packer"),". "),(0,a.kt)("p",null,"On peut trouver les instructions / packages sur l'incroyable site ",(0,a.kt)("a",{parentName:"p",href:"https://search.nixorg.org"},"search.nix.org"),".\nJe pense continuer \xe0 apprendre Nix jusqu'\xe0 pouvoir moi-m\xeame contribuer \xe0 la communaut\xe9 et maintenir mes propres packages. "),(0,a.kt)("p",null,"Seule complexit\xe9 reste d'apprendre le langage Nix !\n",(0,a.kt)("em",{parentName:"p"},"Mais avez-vous entendu parler de ",(0,a.kt)("a",{parentName:"em",href:"https://guix.gnu.org/fr/"},"Guix"),".. ?")))}m.isMDXComponent=!0}}]);