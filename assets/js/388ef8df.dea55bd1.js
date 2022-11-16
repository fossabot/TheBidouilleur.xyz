"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[424],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>d});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),p=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(s.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(t),d=a,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return t?n.createElement(f,i(i({ref:r},u),{},{components:t})):n.createElement(f,i({ref:r},u))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5059:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=t(7462),a=(t(7294),t(3905));const o={slug:"k3s-terraform",title:"Deployer un cluster k3s avec Terraform et Ansible"},i=void 0,l={unversionedId:"Kubernetes/deploy-k3s-with-tf-ansible",id:"Kubernetes/deploy-k3s-with-tf-ansible",title:"Deployer un cluster k3s avec Terraform et Ansible",description:"Introduction",source:"@site/docs/Kubernetes/deploy-k3s-with-tf-ansible.md",sourceDirName:"Kubernetes",slug:"/Kubernetes/k3s-terraform",permalink:"/TheBidouilleur.xyz/docs/Kubernetes/k3s-terraform",draft:!1,editUrl:"https://github.com/QJoly/TheBidouilleur.xyz/tree/main/docs/docs/Kubernetes/deploy-k3s-with-tf-ansible.md",tags:[],version:"current",frontMatter:{slug:"k3s-terraform",title:"Deployer un cluster k3s avec Terraform et Ansible"},sidebar:"tutorialSidebar",previous:{title:"Cr\xe9ation d\u2019un cluster ARM",permalink:"/TheBidouilleur.xyz/docs/Homelab/cluster-arm"},next:{title:"R\xe9parer Longhorn Fsck",permalink:"/TheBidouilleur.xyz/docs/Kubernetes/longhorn-fsck"}},s={},p=[{value:"Introduction",id:"introduction",level:2},{value:"D\xe9marrer le projet",id:"d\xe9marrer-le-projet",level:2},{value:"Installation des d\xe9pendances",id:"installation-des-d\xe9pendances",level:3},{value:"Configurer l\u2019acc\xe8s au Proxmox",id:"configurer-lacc\xe8s-au-proxmox",level:3},{value:"D\xe9marrer le d\xe9ploiement",id:"d\xe9marrer-le-d\xe9ploiement",level:3},{value:"Conclusion",id:"conclusion",level:2}],u={toc:p};function c(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Kubernetes est un de mes sujets d'apprentissages principal, \xe9tant tr\xe8s inexp\xe9riment\xe9 dans le domaine, j'ai besoin d'un environnement de test me permettant de pratiquer sans crainte de casser quelque chose en production, un environnement reproductible pour toujours partir de la m\xeame base."),(0,a.kt)("p",null,"Et la solution pour cet environnement reproductible : C'est le duo Terraform-Ansible !"),(0,a.kt)("admonition",{title:"Qu'est-ce que Terraform?",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Terraform est un outil d'Iaas (Infrastructure As A Code) permettant de mettre sous forme de fichier une configuration de machine virtuelle, une configuration r\xe9seau, ou les \xe9l\xe9ments autours des machines (Ansible, Puppet). Celui-ci va se connecter \xe0 votre Hyperviseur (AWS, ESXI, Proxmox, OpenStack\u2026)\nExemple\xa0:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-terraform"},'resource "proxmox_vm_qemu" "pxe-minimal-example" {\n    name                      = "pxe-minimal-example"\n    agent                     = 0\n    boot                      = "order=net0;scsi0"\n    pxe                       = true\n    target_node               = "test"\n    network {\n        bridge    = "vmbr0"\n        firewall  = false\n        link_down = false\n        model     = "e1000"\n    }\n}\n'))),(0,a.kt)("h2",{id:"d\xe9marrer-le-projet"},"D\xe9marrer le projet"),(0,a.kt)("h3",{id:"installation-des-d\xe9pendances"},"Installation des d\xe9pendances"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/QJoly/terraform-k3s-proxmox"},"Nous allons nous baser sur ce projet")),(0,a.kt)("p",null,"Pour le cloner :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"  git clone --recursive https://github.com/QJoly/terraform-k3s-proxmox\n")),(0,a.kt)("admonition",{title:"attention\u2026",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Le ",(0,a.kt)("inlineCode",{parentName:"p"},"--recursive")," est indispensable pour le projet. Le d\xe9pot Git va r\xe9cup\xe9rer des fichiers depuis un ",(0,a.kt)("strong",{parentName:"p"},"second projet")," !\nSans ce param\xe8tre, vous ne r\xe9cup\xe9rerez pas le code complet.")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Installer les d\xe9pendances"),(0,a.kt)("ul",null,(0,a.kt)("li",null," ",(0,a.kt)("a",{href:"https://www.terraform.io/downloads"},"Terraform (>v1.1.7)"),"  "),(0,a.kt)("li",null," ",(0,a.kt)("a",{href:"https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html#installing-ansible-on-debian"},"Ansible (>2.11.6)")," "),(0,a.kt)("li",null," ",(0,a.kt)("a",{href:"https://pypi.org/project/j2cli/"},"Jinja2-Cli"),"  "))),(0,a.kt)("h3",{id:"configurer-lacc\xe8s-au-proxmox"},"Configurer l\u2019acc\xe8s au Proxmox"),(0,a.kt)("p",null,"L\u2019acc\xe8s se trouve dans le fichier ",(0,a.kt)("inlineCode",{parentName:"p"},"providers.tf"),", c\u2019est ce fichier que nous allons \xe9diter. "),(0,a.kt)("admonition",{title:"S\xe9curit\xe9",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Je vous conseille vivement de cr\xe9er un utilisateur \u201cterraform\u201d qui aura les permissions minimums pour g\xe9rer vos machines virtuelles. ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-hcl"},'data "vault_generic_secret" "proxmox_host" {\n  path = "kv/homelab"\n}\n\nprovider "proxmox" {\n  pm_api_url = data.vault_generic_secret.proxmox_host.data["proxmox_url"]\n  pm_user    = data.vault_generic_secret.proxmox_host.data["proxmox_user"]\n\n  pm_password = data.vault_generic_secret.proxmox_host.data["proxmox_password"]\n\n  pm_tls_insecure = "true"\n  pm_parallel     = 5\n}\n')),(0,a.kt)("p",null,"Par d\xe9faut, j\u2019utilise ",(0,a.kt)("a",{parentName:"p",href:"https://vault.io"},"Vault")," pour stocker mes identifiants. Si ce n\u2019est pas le cas pour vous, vous devrez supprimer la fonction ",(0,a.kt)("inlineCode",{parentName:"p"},"vault_generic_secret")," et les appels dans le provider \u201cproxmox\u201d."),(0,a.kt)("p",null,"Voici \xe0 quoi devrait ressembler votre fichier ",(0,a.kt)("inlineCode",{parentName:"p"},"providers.tf")," si jamais vous n\u2019utilisez pas Vault :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-hcl"},'provider "proxmox" {\n  pm_api_url = "https://10.0.0.1:8006/api2/json"\n  pm_user    = "root@pam"\n  pm_password = "MotDePasseTresDur!"\n  pm_tls_insecure = "true"\n  pm_parallel     = 5\n}\n')),(0,a.kt)("admonition",{title:"Identifiants en clair",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"On ne le r\xe9p\xe8te jamais assez : \xe9vitez de garder vos identifiants dans vos codes. Pensez \xe0 passer sous Vault (pour un \xe9cosyst\xe8me HashiCorp), ou \xe0 envisager une solution comme SOPS (Terraform a m\xeame un provider).\nEn savoir plus :"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://blog.gruntwork.io/a-comprehensive-guide-to-managing-secrets-in-your-terraform-code-1d586955ace1"},"https://blog.gruntwork.io/a-comprehensive-guide-to-managing-secrets-in-your-terraform-code-1d586955ace1")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/carlpett/terraform-provider-sops"},"https://github.com/carlpett/terraform-provider-sops")))),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"(On verra peut-\xeatre \xe7a dans un article prochain, c\u2019est un sujet que j\u2019aimerais approfondir)")),(0,a.kt)("h3",{id:"d\xe9marrer-le-d\xe9ploiement"},"D\xe9marrer le d\xe9ploiement"),(0,a.kt)("p",null,"Une fois le projet configur\xe9 ",(0,a.kt)("em",{parentName:"p"},"(avec les bons identifiants)"),", il suffit de laisser Terraform faire le travail : "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"terraform plan  # voir ce que Terraform s\u2019appr\xe8te \xe0 faire\nterraform apply # lancer le d\xe9ploiement\n")),(0,a.kt)("p",null,"Une fois les machines d\xe9ploy\xe9es, Terraform va appeler le playbook k3s-ansible pour installer le cluster K3S. Je ne modifie aucun param\xe8tre via terraform ",(0,a.kt)("em",{parentName:"p"},"(son seul r\xf4le est de g\xe9n\xe9rer les inventaires avec les IPs r\xe9cup\xe9r\xe9es via qemu-guest-agent)"),"."),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"Merci d\u2019avoir lu cette page, bien que le projet est tr\xe8s brouillon et pas du tout prod-friendly, j\u2019esp\xe8re qu\u2019il vous aidera ou vous inspirera pour d\u2019autres id\xe9es. En am\xe9lioration, il est possible d\u2019int\xe9grer Terragrunt (qui a compl\xe8tement sa place ici) ou m\xeame d\u2019utiliser le provider Ansible et non une commande appelant les playbooks."))}c.isMDXComponent=!0}}]);