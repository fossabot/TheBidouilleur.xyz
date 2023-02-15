"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5530],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=l(t),d=a,k=c["".concat(p,".").concat(d)]||c[d]||m[d]||s;return t?r.createElement(k,o(o({ref:n},u),{},{components:t})):r.createElement(k,o({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,o=new Array(s);o[0]=c;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<s;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},268:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var r=t(7462),a=(t(7294),t(3905));const s={slug:"packer-alpine",title:"Introduction \xe0 Packer"},o="Introduction",i={unversionedId:"Adminsys/Packer",id:"Adminsys/Packer",title:"Introduction \xe0 Packer",description:"Bient\xf4t 7 ans que mon infra principale est sous Proxmox. C\u2019est l\u2019hyperviseur dans lequel j\u2019ai le plus confiance, et qui est \xe9galement gratuit. D\xe8s que je dois d\xe9ployer plus de 2 machines virtuelles et que j\u2019ai le choix de l\u2019environnement : Proxmox sera mon premier choix.",source:"@site/docs/Adminsys/Packer.md",sourceDirName:"Adminsys",slug:"/Adminsys/packer-alpine",permalink:"/TheBidouilleur.xyz/docs/Adminsys/packer-alpine",draft:!1,editUrl:"https://github.com/QJoly/TheBidouilleur.xyz/tree/main/docs/Adminsys/Packer.md",tags:[],version:"current",frontMatter:{slug:"packer-alpine",title:"Introduction \xe0 Packer"},sidebar:"tutorialSidebar",previous:{title:"Build Docker multi-architecture",permalink:"/TheBidouilleur.xyz/docs/Adminsys/MultiArch Build"},next:{title:"Tinc - VPN de Mesh",permalink:"/TheBidouilleur.xyz/docs/Adminsys/Tinc"}},p={},l=[{value:"Un peu de vocabulaire",id:"un-peu-de-vocabulaire",level:2},{value:"Build.sh, Vault, et la cr\xe9ation de authorized_keys",id:"buildsh-vault-et-la-cr\xe9ation-de-authorized_keys",level:2}],u={toc:l};function m(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Bient\xf4t 7 ans que mon infra principale est sous ",(0,a.kt)("em",{parentName:"p"},"Proxmox"),". C\u2019est l\u2019hyperviseur dans lequel j\u2019ai le plus confiance, et qui est \xe9galement ",(0,a.kt)("strong",{parentName:"p"},"gratuit"),". D\xe8s que je dois d\xe9ployer plus de 2 machines virtuelles et que j\u2019ai le choix de l\u2019environnement : Proxmox sera mon premier choix. "),(0,a.kt)("p",null,"Il propose une webui compl\xe8te et efficace, sans oublier l\u2019avantage des outils en cli.\nJe n\u2019exclus pas qu\u2019un jour, je puisse changer d\u2019environnement. Et aujourd\u2019hui, j\u2019ai de nouveaux besoins dans mon hyperviseur : Automatiser un d\xe9ploiement complet de mon infrastructure, et comme je ne vais pas r\xe9installer ",(0,a.kt)("strong",{parentName:"p"},"chaque")," machine individuellement, je dois partir d\u2019une \u201d",(0,a.kt)("em",{parentName:"p"},"base"),"\u201d qui servira de ",(0,a.kt)("em",{parentName:"p"},"template")," pour que le syst\xe8me des machines soit pr\xe9-configur\xe9 comme je le souhaite.\nEt cette fameuse template, je peux la faire \xe0 la main\u2026. Ou je peux la d\xe9ployer automatiquement via ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("strong",{parentName:"strong"},"Packer"))," ! "),(0,a.kt)("h1",{id:"quest-ce-que-packer"},"Qu\u2019est ce que Packer?"),(0,a.kt)("p",null,"Packer est un outil d\xe9velopp\xe9 par ",(0,a.kt)("em",{parentName:"p"},"hashicorp (une entreprise qui fourni des programmes open-sources dans l\u2019univers du devops)")," promettant de d\xe9ployer une machine virtuelle de template de mani\xe8re automatique. "),(0,a.kt)("p",null,"Dans un cas pratique, Packer va se connecter \xe0 votre cloud-publique ",(0,a.kt)("em",{parentName:"p"},"(aws, oracle, scaleway)")," / hyperviseur ",(0,a.kt)("em",{parentName:"p"},"(proxmox, qemu, esxi)")," pour envoyer les instructions permettant d\u2019installer la machine virtuelle "),(0,a.kt)("p",null,"Dans mon cas, je me suis amus\xe9 \xe0 d\xe9ployer des templates Alpine et debian sous Qemu et Proxmox."),(0,a.kt)("h1",{id:"comment-fonctionne-packer-"},"Comment fonctionne Packer ?"),(0,a.kt)("p",null,"Packer poss\xe8de peu de d\xe9pendances, il a besoin d\u2019un hyperviseur/cloud publique, d\u2019un acc\xe8s \xe0 \u201cl\u2019\xe9cran\u201d de la machine virtuelle, et d\u2019un acc\xe8s ",(0,a.kt)("em",{parentName:"p"},"ssh")," pour que Packer v\xe9rifie que l\u2019installation s\u2019est bien termin\xe9e (et \xe9galement pour lancer un outil de gestion de config comme ",(0,a.kt)("strong",{parentName:"p"},"ansible"),". "),(0,a.kt)("h2",{id:"un-peu-de-vocabulaire"},"Un peu de vocabulaire"),(0,a.kt)("p",null,"On appelle ",(0,a.kt)("em",{parentName:"p"},"Builder")," l\u2019endroit o\xf9 Packer d\xe9ploie la VM, dans mon cas : c\u2019est Proxmox ! Et le terme ",(0,a.kt)("em",{parentName:"p"},"provisionner")," d\xe9signe l\u2019outil qui va finir la configuration de la VM apr\xe8s Packer (",(0,a.kt)("em",{parentName:"p"},"Ex: Ansible"),")."),(0,a.kt)("h1",{id:"cr\xe9er-notre-premi\xe8re-template"},"Cr\xe9er notre premi\xe8re template"),(0,a.kt)("p",null,"Avant de s\u2019attaquer \xe0 un gros poisson comme ",(0,a.kt)("strong",{parentName:"p"},"debian"),", on va commencer par un syst\xe8me plus simple \xe0 installer : ",(0,a.kt)("strong",{parentName:"p"},"Alpine"),".\nL\u2019installateur de Alpine va poser une dizaine de questions, une \xe0 une.\nIl existe un syst\xe8me de ",(0,a.kt)("em",{parentName:"p"},"fichier-r\xe9ponse")," qui va r\xe9pondre automatiquement aux questions mais je n\u2019ai pas r\xe9ussi \xe0 executer ce fichier sous alpine. (Uniquement sous Alpine, le fichier r\xe9ponse fonctionne sous debian)."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Si le sujet vous int\xe9resse, je vous renvoie vers ce lien: ",(0,a.kt)("a",{parentName:"em",href:"https://docs.alpinelinux.org/user-handbook/0.1a/Installing/setup_alpine.html"},"Wiki Alpine Answer-file"),".")),(0,a.kt)("p",null,"Comme je ne peux pas utiliser de fichier r\xe9ponse : nous allons r\xe9pondre aux questions manuellement."),(0,a.kt)("admonition",{title:"Retrouvez le code source",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Dans la suite de cet article, je vais pr\xe9senter la fonction de ce d\xe9pot : ",(0,a.kt)("a",{parentName:"p",href:"https://git.thoughtless.eu/Cinabre/packer-alpine-proxmox"},"packer-alpine-proxmox"),".")),(0,a.kt)("p",null,"Voici mon fichier Packer r\xe9pondant aux questions: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n    "description": "Build Alpine Linux 3 x86_64 Proxmox template",\n    "variables": {\n\n        "proxmox_url": "{{env `proxmox_url`}}",\n        "proxmox_username":"{{env `proxmox_user`}}", \n        "proxmox_password": "{{env `proxmox_password`}}", \n        "proxmox_host": "{{env `proxmox_node`}}",\n\n        "storage_name": "{{env `storage_name`}}",\n        "bridge": "{{env `bridge`}}",\n        "vm_id": "9001",\n        "vm_name": "alpine3-tf",\n        "template_description": "Alpine Linux 3.11 x86_64 template built with packer",\n        "vm_memory": "1024",\n\n        "ssh_username": "root",\n        "ssh_password": "{{env `ssh_password`}}"\n    },\n    "sensitive-variables": ["proxmox_password", "ssh_password" ],\n    "provisioners": [\n      {\n        "type": "ansible",\n        "playbook_file": "./playbook/provisioning.yml",\n        "ansible_env_vars": ["ANSIBLE_FORCE_COLOR=True" ]\n      }\n    ],\n    "builders": [\n        {\n            "type": "proxmox",\n            "proxmox_url":  "{{user `proxmox_url`}}",\n            "insecure_skip_tls_verify": true,\n            "username": "{{user `proxmox_username`}}",\n            "password": "{{user `proxmox_password`}}",\n            "vm_id":  "{{user `vm_id`}}",\n            "vm_name": "{{user `vm_name`}}",\n            "template_description":"{{user `template_description`}}",\n            "memory": "{{user `vm_memory`}}",\n            "cores": "2",\n            "os": "l26",\n            "http_directory": "http",\n\n            "node": "{{user `proxmox_host`}}",\n            "network_adapters": [\n              {\n                "model": "virtio",\n                "bridge": "{{user `bridge`}}"\n              }\n            ],\n            "disks": [\n              {\n                "type": "virtio",\n                "disk_size": "16G",\n                "storage_pool": "{{user `storage_name`}}",\n                "storage_pool_type": "directory",\n                "format": "qcow2"\n              }\n            ],\n            "ssh_username": "{{user `ssh_username`}}",\n            "ssh_password": "{{user `ssh_password`}}",\n            "ssh_timeout": "15m",\n            "ssh_certificate_file": "/root/id_rsa", \n            "iso_file": "{{user `storage_name`}}:iso/alpine-virt-3.15.0-x86_64.iso",\n            "unmount_iso": true,\n            "boot_wait": "15s",\n            "boot_command": [\n                "<wait25>root<enter><wait4>",\n                "setup-alpine<enter><wait8>",\n                "<enter><wait4>",\n                "alpine-tf<enter><wait4><enter><wait4>",\n                "dhcp<enter>",\n                "<wait5>n<enter><wait5>",\n                "{{user `ssh_password`}}<enter><wait5>",\n                "{{user `ssh_password`}}<enter><wait>",\n                "<wait5>",\n                "Europe/Paris <enter><wait2><enter><wait5>",\n                "n<enter>",\n                "<wait1>1<enter><wait3>",\n                "<enter><wait2>",\n                "vda<enter>",\n                "lvm<enter>",\n                "sys<enter>",\n                "<wait2>",\n                "y<enter><wait35>",\n\n                \n                "reboot <enter>",\n                "<wait65>",\n                \n                "root<enter><wait8>",\n                "{{user `ssh_password`}}<enter><wait5> ",\n                "<wait10>",\n\n                "apk update && apk add curl<enter>",\n                "mkdir -p ~/.ssh<enter>",\n                "touch ~/.ssh/authorized_keys<enter><wait5>chmod 600 ~/.ssh/authorized_keys<enter><wait5>",\n                "curl http://{{ .HTTPIP }}:{{ .HTTPPort }}/authorized_keys >> ~/.ssh/authorized_keys<enter>",\n                "echo \'PermitRootLogin yes\' >> /etc/ssh/sshd_config <enter>",\n                wait2>service sshd restart <enter> <wait2>",\n                "curl http://{{ .HTTPIP }}:{{ .HTTPPort }}/repositories > /etc/apk/repositories<enter>",\n                "<wait>apk update <enter>",\n\n                "apk add python3<enter><wait1>",\n                "curl https://bootstrap.pypa.io/get-pip.py -o /tmp/get-pip.py<enter> <wait2>",\n                "python3 /tmp/get-pip.py <enter> <wait2>",\n\n                "apk add qemu-guest-agent<enter><wait3>",\n                "rc-update add qemu-guest-agent<enter>",\n                "service qemu-guest-agent start<enter>"\n\n\n            ]\n        }\n    ]\n}\n\n')),(0,a.kt)("p",null,"Nous allons rapidement d\xe9cortiquer la structure de ce Packer : "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"la partie \u201d",(0,a.kt)("em",{parentName:"li"},"Variable"),"\u201d concerne les variables statiques et/ou variables d\u2019environnements ",(0,a.kt)("em",{parentName:"li"},"(On va voir \xe7a un peu plus tard)")," "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Provisionner")," designe la commande que l\u2019on va lancer ",(0,a.kt)("strong",{parentName:"li"},"apr\xe8s")," la cr\xe9ation de la template "),(0,a.kt)("li",{parentName:"ul"},"et ce qui concerne la template elle-m\xeame (param\xe8tres, hyperviseurs\u2026) est dans la partie ",(0,a.kt)("em",{parentName:"li"},"builder")," ")),(0,a.kt)("p",null,"et la partie ",(0,a.kt)("em",{parentName:"p"},"boot_command")," dans ",(0,a.kt)("em",{parentName:"p"},"Builder")," est la liste de ",(0,a.kt)("strong",{parentName:"p"},"toutes")," les entr\xe9es au clavier que Packer va taper, On y place souvent le t\xe9l\xe9chargement du Preseed de Packer vers la VM. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"petite explication sur le transfert de fichier de packer vers la template :")," Packer, \xe0 son lancement, va cr\xe9er un serveur web avec le contenu du dossier ",(0,a.kt)("em",{parentName:"p"},"http/"),", si on y place des fichiers \xe0 l\u2019interieur, on peut dire \xe0 packer de taper la commande suivante pour r\xe9cup\xe9rer des fichiers. (Ex: Preseed, cl\xe9s ssh etc..)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl  http://{{ .HTTPIP }}:{{ .HTTPPort }}/fichier\n")),(0,a.kt)("p",null,"Ainsi, dans cette installation d\u2019Alpine, je vais r\xe9pondre une \xe0 une aux questions, avec des timer pr\xe9-configur\xe9s (qui se comptent en seconde).\nEt \xe0 la fin de l\u2019installation, nous lan\xe7ons le playbook ",(0,a.kt)("strong",{parentName:"p"},"provisionning")," qui me permet d\u2019installer les d\xe9pendances utiles \xe0 mes VMs.\nIl n\u2019est pas necessaire d\u2019aller tr\xe8s loin dans le playbook : \xe7a reste une template. "),(0,a.kt)("h2",{id:"buildsh-vault-et-la-cr\xe9ation-de-authorized_keys"},"Build.sh, Vault, et la cr\xe9ation de authorized_keys"),(0,a.kt)("p",null,"Si vous \xeates all\xe9 voir mon d\xe9pot (dont le lien est plus haut), vous avez surement vu le fichier ",(0,a.kt)("strong",{parentName:"p"},"buid.sh"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'#!/bin/bash\n#export ssh_password=$(vault kv get -field root_password secrets/password)\nexport proxmox_password=$(vault kv get -field proxmox_password kv/wysux)\nexport proxmox_user=$(vault kv get -field proxmox_user kv/wysux)\nexport proxmox_node=$(vault kv get -field proxmox_node kv/wysux)\nexport proxmox_url=$(vault kv get -field proxmox_url kv/wysux)\n\nexport ssh_password="toto13"\n\nexport bridge="vmbr0"\nexport storage_name="local"\n\nrm http/authorized_keys || true\nfor f in ssh/*.pub; do\n        name_of_key=$(echo $f | cut -d "/" -f2 )\n    echo -e "#$name_of_key" >> http/authorized_keys \n    key=$(cat $f)\n    echo -e "$key" >> http/authorized_keys\ndone\n\npacker build alpine-3-amd64-proxmox.json\n')),(0,a.kt)("p",null,"ce fichier va donner les param\xe8tres essentiels \xe0 Packer. Les premi\xe8res variables sont les identifiants pour se connecter \xe0 proxmox"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"si vous n\u2019utilisez pas vault, n\u2019h\xe9sitez pas \xe0 remplacer les commandes le concernant par le contenu des variables.")))}m.isMDXComponent=!0}}]);