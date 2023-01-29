"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Docs","href":"/TheBidouilleur.xyz/docs/intro","docId":"intro"},{"type":"category","label":"AdminSys","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Libvirt","href":"/TheBidouilleur.xyz/docs/AdminSys/Libvirt","docId":"AdminSys/Libvirt"},{"type":"link","label":"Installation de la stack Loki","href":"/TheBidouilleur.xyz/docs/AdminSys/Loki","docId":"AdminSys/Loki"},{"type":"link","label":"Tinc - VPN de Mesh","href":"/TheBidouilleur.xyz/docs/AdminSys/Tinc","docId":"AdminSys/Tinc"},{"type":"link","label":"V\xe9rification configuration syst\xe8me (testinfra)","href":"/TheBidouilleur.xyz/docs/AdminSys/testinfra","docId":"AdminSys/testinfra"}]},{"type":"category","label":"DevOps","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Build Docker multi-architecture","href":"/TheBidouilleur.xyz/docs/DevOps/MultiArch Build","docId":"DevOps/Multi-Arch build Docker"},{"type":"link","label":"Introduction \xe0 Packer.","href":"/TheBidouilleur.xyz/docs/DevOps/packer-alpine","docId":"DevOps/Packer"}]},{"type":"category","label":"Homelab","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Exposer vos conteneurs sans NAT avec Cloudflared","href":"/TheBidouilleur.xyz/docs/Homelab/cloudflared","docId":"Homelab/Cloudflared"},{"type":"link","label":"Cr\xe9ation d\u2019un cluster ARM","href":"/TheBidouilleur.xyz/docs/Homelab/cluster-arm","docId":"Homelab/Cluster-ARM"}]},{"type":"category","label":"Kubernetes","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Kubernetes INside Docker","href":"/TheBidouilleur.xyz/docs/Kubernetes/kind","docId":"Kubernetes/Kind"},{"type":"link","label":"Deployer un cluster k3s avec Terraform et Ansible","href":"/TheBidouilleur.xyz/docs/Kubernetes/k3s-terraform","docId":"Kubernetes/deploy-k3s-with-tf-ansible"},{"type":"link","label":"R\xe9parer Longhorn Fsck","href":"/TheBidouilleur.xyz/docs/Kubernetes/longhorn-fsck","docId":"Kubernetes/fix-longhorn-fsck"},{"type":"link","label":"K9S - Une interface en TUI pour administrer votre cluster","href":"/TheBidouilleur.xyz/docs/Kubernetes/K9S - Interface TUI","docId":"Kubernetes/k9s"},{"type":"link","label":"Build une image docker sur un cluster kubernetes","href":"/TheBidouilleur.xyz/docs/Kubernetes/kaniko","docId":"Kubernetes/kaniko"},{"type":"link","label":"Kubectl sur machine cliente","href":"/TheBidouilleur.xyz/docs/Kubernetes/kube-client","docId":"Kubernetes/kube-client"},{"type":"link","label":"Utilisation d\'un registre priv\xe9","href":"/TheBidouilleur.xyz/docs/Kubernetes/registre-client","docId":"Kubernetes/registre-client"}]}]},"docs":{"AdminSys/Libvirt":{"id":"AdminSys/Libvirt","title":"Libvirt","description":"---","sidebar":"tutorialSidebar"},"AdminSys/Loki":{"id":"AdminSys/Loki","title":"Installation de la stack Loki","description":"Depuis que jai commenc\xe9 l\'informatique (depuis un peu moins d\'une dizaine d\'ann\xe9e), je ne me suis jamais pr\xe9occup\xe9 de comment je visualisais mes logs. Un petit view par ci, un gros grep par l\xe0.. mais aucune gestion avanc\xe9e.","sidebar":"tutorialSidebar"},"AdminSys/testinfra":{"id":"AdminSys/testinfra","title":"V\xe9rification configuration syst\xe8me (testinfra)","description":"Qu\'est ce qu\'un test unitaire ?","sidebar":"tutorialSidebar"},"AdminSys/Tinc":{"id":"AdminSys/Tinc","title":"Tinc - VPN de Mesh","description":"Introduction","sidebar":"tutorialSidebar"},"DevOps/Multi-Arch build Docker":{"id":"DevOps/Multi-Arch build Docker","title":"Build Docker multi-architecture","description":"J\u2019utilise beaucoup Docker sur mes raspberry pi 4. L\u2019inconv\xe9nient est que les images ne sont pas toujours compatibles avec une architecture ARM.","sidebar":"tutorialSidebar"},"DevOps/Packer":{"id":"DevOps/Packer","title":"Introduction \xe0 Packer.","description":"Bient\xf4t 7 ans que mon infra principale est sous Proxmox. C\u2019est l\u2019hyperviseur dans lequel j\u2019ai le plus confiance, et qui est \xe9galement gratuit. D\xe8s que je dois d\xe9ployer plus de 2 machines virtuelles et que j\u2019ai le choix de l\u2019environnement : Proxmox sera mon premier choix.","sidebar":"tutorialSidebar"},"Homelab/Cloudflared":{"id":"Homelab/Cloudflared","title":"Exposer vos conteneurs sans NAT avec Cloudflared","description":"Vous trouverez ici la documentation officielle de Cloudflare","sidebar":"tutorialSidebar"},"Homelab/Cluster-ARM":{"id":"Homelab/Cluster-ARM","title":"Cr\xe9ation d\u2019un cluster ARM","description":"Apr\xe8s avoir fait mumuse avec mon Dell R610 qui consomme 120W au repos, je me suis toujours pos\xe9 la question de la consommation en \xe9lectricit\xe9 de mes appareils. Je m\'interesse donc \xe0 un Homelab qui pourrait \xeatre le plus \xe9conome possible en \xe9nergie.","sidebar":"tutorialSidebar"},"intro":{"id":"intro","title":"Docs","description":"Bienvenue sur les documentations de la Bidouille.","sidebar":"tutorialSidebar"},"Kubernetes/deploy-k3s-with-tf-ansible":{"id":"Kubernetes/deploy-k3s-with-tf-ansible","title":"Deployer un cluster k3s avec Terraform et Ansible","description":"Introduction","sidebar":"tutorialSidebar"},"Kubernetes/fix-longhorn-fsck":{"id":"Kubernetes/fix-longhorn-fsck","title":"R\xe9parer Longhorn Fsck","description":"En relan\xe7ant un de mes pods, je suis tomb\xe9 sur une sale erreur :","sidebar":"tutorialSidebar"},"Kubernetes/k9s":{"id":"Kubernetes/k9s","title":"K9S - Une interface en TUI pour administrer votre cluster","description":"Apr\xe8s m\'\xeatre fait la main sur kubectl (l\'utilitaire permettant de g\xe9rer un cluster kubernetes), j\'ai commenc\xe9 \xe0 trouver son utilisation lente, ennuyante et peu ergonomique.","sidebar":"tutorialSidebar"},"Kubernetes/kaniko":{"id":"Kubernetes/kaniko","title":"Build une image docker sur un cluster kubernetes","description":"Pour build une image sur un cluster Kubernetes, j\'ai trouv\xe9 la solution de Kaniko.","sidebar":"tutorialSidebar"},"Kubernetes/Kind":{"id":"Kubernetes/Kind","title":"Kubernetes INside Docker","description":"Introduction","sidebar":"tutorialSidebar"},"Kubernetes/kube-client":{"id":"Kubernetes/kube-client","title":"Kubectl sur machine cliente","description":"Pour administrer votre cluster, vous pouvez vous connecter \xe0 une machine \\"maitre\\" (avec le r\xf4le control-plane) et g\xe9rer votre cluster via l\'utilitaire kubectl.","sidebar":"tutorialSidebar"},"Kubernetes/registre-client":{"id":"Kubernetes/registre-client","title":"Utilisation d\'un registre priv\xe9","description":"D\xe8s qu\'on s\'amuse avec des conteneurs et qu\'on commence \xe0 cr\xe9er les siens, il est n\xe9cessaire d\'avoir son propre registre. (Par simplicit\xe9, optimisation, efficacit\xe9)","sidebar":"tutorialSidebar"}}}')}}]);