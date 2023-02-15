"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2189],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var s=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},a=Object.keys(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=s.createContext({}),p=function(e){var t=s.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return s.createElement(l.Provider,{value:t},e.children)},_={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},d=s.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),c=r,m=d["".concat(l,".").concat(c)]||d[c]||_[c]||a;return n?s.createElement(m,i(i({ref:t},u),{},{components:n})):s.createElement(m,i({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<a;p++)i[p]=n[p];return s.createElement.apply(null,i)}return s.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5227:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>_,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var s=n(7462),r=(n(7294),n(3905));const a={title:"V\xe9rification configuration syst\xe8me (testinfra)",slug:"testinfra",tags:["python"]},i=void 0,o={unversionedId:"Adminsys/testinfra",id:"Adminsys/testinfra",title:"V\xe9rification configuration syst\xe8me (testinfra)",description:"Qu\u2019est ce qu\u2019un test unitaire ?",source:"@site/docs/Adminsys/testinfra.md",sourceDirName:"Adminsys",slug:"/Adminsys/testinfra",permalink:"/TheBidouilleur.xyz/en/docs/Adminsys/testinfra",draft:!1,editUrl:"https://github.com/QJoly/TheBidouilleur.xyz/tree/main/docs/Adminsys/testinfra.md",tags:[{label:"python",permalink:"/TheBidouilleur.xyz/en/docs/tags/python"}],version:"current",frontMatter:{title:"V\xe9rification configuration syst\xe8me (testinfra)",slug:"testinfra",tags:["python"]},sidebar:"tutorialSidebar",previous:{title:"Stocker des secrets dans un d\xe9p\xf4t Git",permalink:"/TheBidouilleur.xyz/en/docs/Adminsys/sops"},next:{title:"Cloudflared",permalink:"/TheBidouilleur.xyz/en/docs/Homelab/Cloudflared"}},l={},p=[{value:"Qu\u2019est ce qu\u2019un test unitaire ?",id:"quest-ce-quun-test-unitaire-",level:2},{value:"TestInfra",id:"testinfra",level:2},{value:"D\xe9buter avec testinfra",id:"d\xe9buter-avec-testinfra",level:3},{value:"Utiliser une machine distance (ssh)",id:"utiliser-une-machine-distance-ssh",level:2},{value:"Lancer le test depuis un code python",id:"lancer-le-test-depuis-un-code-python",level:2}],u={toc:p};function _(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,s.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"quest-ce-quun-test-unitaire-"},"Qu\u2019est ce qu\u2019un test unitaire ?"),(0,r.kt)("p",null,"On r\xe9serve souvent les tests unitaires pour le d\xe9veloppement. L\u2019id\xe9e est d\u2019injecter des informations dans des fonctions/m\xe9thodes et d\u2019en v\xe9rifier le traitement. "),(0,r.kt)("p",null,"Voici un exemple bref d\u2019un test unitaire en python : "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'def convert_str_to_int(strvar):\n  if strvar.isdigit():\n    return str(strvar)\n  else:\n    return False\n    \nassert type(convert_str_to_int("4")) == int\n')),(0,r.kt)("p",null,"Ainsi, on v\xe9rifie via \u201cassert\u201d (g\xe9n\xe9rant une erreur si la condition renvoie un \u201cFalse\u201d) que le type de ce que retourne la fonction convert_str_to_int() est bien de type \u201cint\u201d. "),(0,r.kt)("p",null,"Mais est-il possible de cr\xe9er des tests unitaires pour v\xe9rifi\xe9 qu\u2019un syst\xe8me soit \xe0 la bonne version ou bien parametr\xe9 ? "),(0,r.kt)("p",null,"Oui ! Grace \xe0 testinfra"),(0,r.kt)("h2",{id:"testinfra"},"TestInfra"),(0,r.kt)("h3",{id:"d\xe9buter-avec-testinfra"},"D\xe9buter avec testinfra"),(0,r.kt)("p",null,"Installer TestInfra se faire rapidement \xe0 partir de PIP: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"python3 -m pip install pytest-testinfra\n")),(0,r.kt)("p",null,"Une fois install\xe9, nous pouvons cr\xe9er notre premier test : "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'#test_host.py\ndef test_passwd_file(host):\n    passwd = host.file("/etc/passwd")\n    assert passwd.contains("root")\n    assert passwd.user == "root"\n    assert passwd.group == "root"\n    assert passwd.mode == 0o644 \n')),(0,r.kt)("p",null,"L\u2019objet \u201chost\u201d renvoie \xe0 la machine test\xe9e. Nous v\xe9rifions que le fichier ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/passwd")," contient bien ",(0,r.kt)("inlineCode",{parentName:"p"},"root"),", que son utilisateur/groupe propri\xe9taires soit bien \u201croot\u201d, et qu\u2019il ait bien les permissions ",(0,r.kt)("em",{parentName:"p"},"(octales)")," 0o644."),(0,r.kt)("p",null,"Si on lance ce premier fichier via ",(0,r.kt)("inlineCode",{parentName:"p"},"py.test"),", voici le r\xe9sultat : "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u2514\u2500\u25aapy.test test_host.py       \n============================================================================================= test session starts ==============================================================================================\nplatform linux -- Python 3.8.10, pytest-7.2.1, pluggy-1.0.0\nrootdir: /app, configfile: pytest.ini\nplugins: testinfra-7.0.0, xdist-3.1.0\ncollected 1 item                                                                                                                                                                                               \ntest_host.py .                                                                                                                                                                                           [100%]\n============================================================================================== 1 passed in 0.33s ===============================================================================================\n")),(0,r.kt)("p",null,"Aucune erreur dans ce test. Cr\xe9ons maintenant volontairement une erreur : "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'def test_passwd_file(host):\n    passwd = host.file("/etc/passwd")\n    assert passwd.contains("root")\n    assert passwd.user == "root"\n    assert passwd.group == "root"\n    assert passwd.mode == 0o644    \n\ndef test_appdir(host):\n    assert host.file("/appdir/").exists\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"============================================================================================= test session starts ==============================================================================================\nplatform linux -- Python 3.8.10, pytest-7.2.1, pluggy-1.0.0\nrootdir: /app, configfile: pytest.ini\nplugins: testinfra-7.0.0, xdist-3.1.0\ncollected 2 items                                                                                                                                                                                              \n\ntest_host.py .F                                                                                                                                                                                          [100%]\n\n=================================================================================================== FAILURES ===================================================================================================\n______________________________________________________________________________________________ test_appdir[local] ______________________________________________________________________________________________\n\nhost = <testinfra.host.Host local>\n\n    def test_appdir(host):\n>       assert host.file(\"/appdir/\").exists\nE       AssertionError: assert False\nE        +  where False = <file /appdir/>.exists\nE        +    where <file /appdir/> = <class 'testinfra.modules.base.GNUFile'>('/appdir/')\nE        +      where <class 'testinfra.modules.base.GNUFile'> = <testinfra.host.Host local>.file\n\ntest_host.py:12: AssertionError\n---------------------------------------------------------------------------------------------- Captured log call -----------------------------------------------------------------------------------------------\nDEBUG    testinfra:base.py:288 RUN CommandResult(command=b'test -e /appdir/', exit_status=1, stdout=None, stderr=None)\n=========================================================================================== short test summary info ============================================================================================\nFAILED test_host.py::test_appdir[local] - AssertionError: assert False\n========================================================================================= 1 failed, 1 passed in 0.17s ==========================================================================================\n")),(0,r.kt)("p",null,"Nous obtenons bel et bien notre erreur, et son d\xe9tail (la condition renvoy\xe9e est fausse, et nous avons la commande bash ",(0,r.kt)("inlineCode",{parentName:"p"},"test -e /app/dir")," test\xe9e). "),(0,r.kt)("p",null,"\xe0 partir de cette base, nous pouvons tester de nombreux \xe9l\xe9ments comme les fichiers, les interfaces, les packages install\xe9s et bien d\u2019autres."),(0,r.kt)("admonition",{title:"Tips: Utiliser les workers",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Il est possible de lancer les tests \xe0 partir de workers ",(0,r.kt)("em",{parentName:"p"},"(Et donc lancer plusieurs taches en une seule fois)"),".\nIl suffit d\u2019ajouter ",(0,r.kt)("inlineCode",{parentName:"p"},"-n auto")," ",(0,r.kt)("em",{parentName:"p"},"(ou remplacer auto par le nombre de workers)"),". ")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://testinfra.readthedocs.io/en/latest/modules.html"},"Vous pourrez retrouver la liste des modules disponibles ici")),(0,r.kt)("h2",{id:"utiliser-une-machine-distance-ssh"},"Utiliser une machine distance (ssh)"),(0,r.kt)("p",null,"Tester notre propre machine est plutot utile, mais qu\u2019en est-il de tester un serveur accessible par ssh ? "),(0,r.kt)("p",null,"Pour cela il suffit de surcharger la variable ",(0,r.kt)("em",{parentName:"p"},"testinfra_hosts"),": "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'testinfra_hosts = ["root@127.0.0.1", "user@192.168.1.2", "192.168.1.3"]\n\ndef test_passwd_file(host):\n    passwd = host.file("/etc/passwd")\n    assert passwd.contains("root")\n    assert passwd.user == "root"\n    assert passwd.group == "root"\n    assert passwd.mode == 0o644    \n')),(0,r.kt)("p",null,"Il faut bien s\xfbr avoir un acc\xe8s sans mot de passe pour que le test fonctionne. ",(0,r.kt)("em",{parentName:"p"},"(Un peu comme Ansible)")),(0,r.kt)("h2",{id:"lancer-le-test-depuis-un-code-python"},"Lancer le test depuis un code python"),(0,r.kt)("p",null,"Je n\u2019appr\xe9cie que tr\xe8s peu le fait de lancer ",(0,r.kt)("inlineCode",{parentName:"p"},"py.test")," sans pouvoir rebondir sur le r\xe9sultat dans un Python."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import pytest\npytest.main(["-v", "--tb=native", "-rN", "-n", "auto"]) \n')),(0,r.kt)("p",null,"Et si on souhaite rebondir sur le r\xe9sultat du test : "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import pytest\nresult = pytest.main(["-v", "--tb=native", "-rN", "-n", "auto"]) \n\nif result.name == "OK":\n    print("Le test est fonctionnel")\nelse:\n    print("Il y a une erreur dans le test")\n')),(0,r.kt)("p",null,"Pour l\u2019instant, mon usage de testinfra s\u2019arr\xe8te \xe0 \xe7a. Je n\u2019ai pas d\xe9taill\xe9 les fonctionnements des modules ",(0,r.kt)("em",{parentName:"p"},"(socket, file, docker etc..)")," puisque la documentation est bien compl\xe8te."))}_.isMDXComponent=!0}}]);