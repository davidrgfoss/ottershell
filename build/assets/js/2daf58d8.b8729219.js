"use strict";(self.webpackChunkotter_shell=self.webpackChunkotter_shell||[]).push([[8916],{3905:(e,n,a)=>{a.d(n,{Zo:()=>c,kt:()=>m});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function s(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?s(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},s=Object.keys(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=t.createContext({}),d=function(e){var n=t.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},c=function(e){var n=d(e.components);return t.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=d(a),m=r,k=u["".concat(l,".").concat(m)]||u[m]||p[m]||s;return a?t.createElement(k,o(o({ref:n},c),{},{components:a})):t.createElement(k,o({ref:n},c))}));function m(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=u;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var d=2;d<s;d++)o[d]=a[d];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7405:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var t=a(7462),r=(a(7294),a(3905));const s={sidebar_position:17},o="Montaje NFS mediante systemd",i={unversionedId:"Tasks/nfs_systemd",id:"Tasks/nfs_systemd",title:"Montaje NFS mediante systemd",description:"En una instancia del cloud, basada en la distribuci\xf3n de tu elecci\xf3n, anexa un volumen de 2GB. En dicha instancia deber\xe1s configurar el servicio nfs de exportaci\xf3n y en el volumen un punto de montaje de la exportaci\xf3n mediante systemd.",source:"@site/docs/Tasks/nfs_systemd.md",sourceDirName:"Tasks",slug:"/Tasks/nfs_systemd",permalink:"/docs/Tasks/nfs_systemd",draft:!1,editUrl:"https://github.com/belennazareth/ottershell/blob/main/docs/Tasks/nfs_systemd.md",tags:[],version:"current",sidebarPosition:17,frontMatter:{sidebar_position:17},sidebar:"tutorialSidebar",previous:{title:"Criptograf\xeda II: Integridad, firmas y autenticaci\xf3n",permalink:"/docs/Tasks/criptografia2"},next:{title:"Markdown Features",permalink:"/docs/Tasks/markdown-features"}},l={},d=[{value:"Creaci\xf3n y configuraci\xf3n de las instancias",id:"creaci\xf3n-y-configuraci\xf3n-de-las-instancias",level:2},{value:"Servidor",id:"servidor",level:3},{value:"Cliente",id:"cliente",level:3},{value:"Configuraci\xf3n del servicio NFS",id:"configuraci\xf3n-del-servicio-nfs",level:2},{value:"Configuraci\xf3n del punto de montaje",id:"configuraci\xf3n-del-punto-de-montaje",level:2}],c={toc:d};function p(e){let{components:n,...a}=e;return(0,r.kt)("wrapper",(0,t.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"montaje-nfs-mediante-systemd"},"Montaje NFS mediante systemd"),(0,r.kt)("p",null,"En una instancia del cloud, basada en la distribuci\xf3n de tu elecci\xf3n, anexa un volumen de 2GB. En dicha instancia deber\xe1s configurar el servicio nfs de exportaci\xf3n y en el volumen un punto de montaje de la exportaci\xf3n mediante systemd."),(0,r.kt)("h2",{id:"creaci\xf3n-y-configuraci\xf3n-de-las-instancias"},"Creaci\xf3n y configuraci\xf3n de las instancias"),(0,r.kt)("p",null,"Las instancias est\xe1n basadas en la distribuci\xf3n ",(0,r.kt)("inlineCode",{parentName:"p"},"Debian 11 Bullseye")," y se han creado en la red ",(0,r.kt)("inlineCode",{parentName:"p"},"red de nazaret.duran")," con la clave ",(0,r.kt)("inlineCode",{parentName:"p"},"nazareth_local")," y el grupo de seguridad ",(0,r.kt)("inlineCode",{parentName:"p"},"default")," dentro de la aplicaci\xf3n ",(0,r.kt)("inlineCode",{parentName:"p"},"OpenStack"),"."),(0,r.kt)("h3",{id:"servidor"},"Servidor"),(0,r.kt)("p",null,"Primero creamos la instancia que har\xe1 de servidor, en este caso ser\xe1 ",(0,r.kt)("inlineCode",{parentName:"p"},"Debian 11"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'openstack server create --flavor m1.mini \\\n--image "Debian 11 Bullseye" \\\n--security-group default \\\n--key-name nazareth_local \\\n--network "red de nazaret.duran" \\\nnfs_systemd\n')),(0,r.kt)("p",null,"Y le asignamos una ip flotante para poder acceder a ella:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"openstack floating ip create ext-net\nopenstack server add floating ip nfs_systemd {ip} \n")),(0,r.kt)("p",null,"Creamos el volumen de 2GB y se lo anexamos a la instancia:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'openstack volume create --size 2 \\\n--description "Volumen para la m\xe1quina nfs" \\\n--availability-zone "nova" \\\n--bootable \\\nvolumen_nfs\n\n\nopenstack server add volume nfs_systemd volumen_nfs\n')),(0,r.kt)("p",null,"Tras realizar estos pasos deber\xe1 quedar una estructura similar a la siguiente, donde podemos comprobar que el volumen (",(0,r.kt)("inlineCode",{parentName:"p"},"vdb"),") se ha anexado correctamente a la instancia:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"debian@nfs-systemd:~$ lsblk\n\nNAME    MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT\nvda     254:0    0   10G  0 disk \n\u251c\u2500vda1  254:1    0  9.9G  0 part /\n\u251c\u2500vda14 254:14   0    3M  0 part \n\u2514\u2500vda15 254:15   0  124M  0 part /boot/efi\nvdb     254:16   0    2G  0 disk \n\n")),(0,r.kt)("h3",{id:"cliente"},"Cliente"),(0,r.kt)("p",null,"Lo siguiente ser\xe1 crear una maquina cliente para lo cual no ser\xe1 necesario meterle un volumen:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'openstack server create --flavor m1.mini \\\n--image "Debian 11 Bullseye" \\\n--security-group default \\\n--key-name nazareth_local \\\n--network "red de nazaret.duran" \\\nnfs_systemd_client\n')),(0,r.kt)("p",null,"Y le asignamos una ip flotante para poder acceder a ella:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"openstack floating ip create ext-net\nopenstack server add floating ip nfs_systemd {ip} \n")),(0,r.kt)("p",null,"Tras realizar estos pasos deber\xe1 quedar una estructura similar a la siguiente, donde se ve que no se ha anexado ning\xfan volumen a la instancia:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"debian@nfs-systemd-client:~$ lsblk\n\nNAME    MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT\nvda     254:0    0   10G  0 disk \n\u251c\u2500vda1  254:1    0  9.9G  0 part /\n\u251c\u2500vda14 254:14   0    3M  0 part \n\u2514\u2500vda15 254:15   0  124M  0 part /boot/efi\n\n")),(0,r.kt)("h2",{id:"configuraci\xf3n-del-servicio-nfs"},"Configuraci\xf3n del servicio NFS"),(0,r.kt)("p",null,"En primer lugar, instalamos el servicio NFS en el servidor:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"apt install nfs-kernel-server \napt install nfs-common\n")),(0,r.kt)("p",null,"Activamos y habilitamos el servicio nfs:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl start rpcbind nfs-server\nsystemctl enable rpcbind nfs-server\n")),(0,r.kt)("p",null,"Podemos comprobar que el servicio est\xe1 instalado y activo con el comando:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl status rpcbind nfs-server\n\no\n\nrpcinfo -p\n\n")),(0,r.kt)("p",null,"Con este \xfaltimo comando podemos ver que el servicio est\xe1 activo y escuchando en el puerto 2049. Adem\xe1s, podemos ver que el servicio est\xe1 activo en el puerto 111, que es el puerto por el que se comunica el cliente con el servidor. Obteniendo una salida similar a la siguiente:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"debian@nfs-systemd:~$ rpcinfo -p\n\n   program vers proto   port  service\n    100000    4   tcp    111  portmapper\n    100000    3   tcp    111  portmapper\n    100000    2   tcp    111  portmapper\n    100000    4   udp    111  portmapper\n    100000    3   udp    111  portmapper\n    100000    2   udp    111  portmapper\n    100005    1   udp  54467  mountd\n    100005    1   tcp  36633  mountd\n    100005    2   udp  42675  mountd\n    100005    2   tcp  43481  mountd\n    100005    3   udp  44012  mountd\n    100005    3   tcp  58893  mountd\n    100003    3   tcp   2049  nfs\n    100003    4   tcp   2049  nfs\n    100227    3   tcp   2049\n    100003    3   udp   2049  nfs\n    100227    3   udp   2049\n    100021    1   udp  52555  nlockmgr\n    100021    3   udp  52555  nlockmgr\n    100021    4   udp  52555  nlockmgr\n    100021    1   tcp  43955  nlockmgr\n    100021    3   tcp  43955  nlockmgr\n    100021    4   tcp  43955  nlockmgr\n\n")),(0,r.kt)("h2",{id:"configuraci\xf3n-del-punto-de-montaje"},"Configuraci\xf3n del punto de montaje"),(0,r.kt)("p",null,"Configuramos el punto de montaje en el servidor entrando al directorio ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/systemd/system")," y creamos un fichero con la extensi\xf3n ",(0,r.kt)("inlineCode",{parentName:"p"},".mount"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir /nfs\n\nnano /etc/systemd/system/nfs.mount\n")),(0,r.kt)("p",null,"Dentro del fichero tendremos que a\xf1adir lo siguiente:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[Unit]\nDescription=Disco montado en /nfs usando volumen a\xf1adido\n[Mount]\nWhat=/dev/vdb\nWhere=/nfs\nType=ext4\nOptions=defaults\n[Install]\nWantedBy=multi-user.target\n")),(0,r.kt)("p",null,"Debemos tener en cuenta que el volumen que hemos a\xf1adido a la instancia tiene que estar formateado. Para ello, ejecutamos el siguiente comando:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkfs.ext4 /dev/vdb\n")),(0,r.kt)("p",null,"Y por \xfaltimo, recargamos el ",(0,r.kt)("em",{parentName:"p"},"daemon")," y activamos el punto de montaje:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl daemon.reload\nsystemctl start nfs.mount\n")),(0,r.kt)("p",null,"Podemos comprobar que el punto de montaje se ha creado correctamente y que el volumen se ha montado en el directorio ",(0,r.kt)("inlineCode",{parentName:"p"},"/nfs")," con el comando ",(0,r.kt)("inlineCode",{parentName:"p"},"lsblk -f"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"root@nfs-systemd:~# lsblk -f\n\nNAME    FSTYPE FSVER LABEL UUID                                 FSAVAIL FSUSE% MOUNTPOINT\nvda                                                                            \n\u251c\u2500vda1  ext4   1.0         ce1282a1-ced7-40a2-8b01-eed78dc14d62    8.2G    11% /\n\u251c\u2500vda14                                                                        \n\u2514\u2500vda15 vfat   FAT16       4A0A-DB16                             117.8M     5% /boot/efi\nvdb     ext4   1.0         67c14f57-2088-41ad-8abf-6e2b4ddb71cd    1.8G     0% /nfs\n\n")),(0,r.kt)("p",null,"Al realizar esta configuraci\xf3n con ",(0,r.kt)("inlineCode",{parentName:"p"},"systemd"),", vemos que este daemon tiene dos tipos de configuraci\xf3n de unidades: las unidades de tipo service (automount) y las unidades de tipo mount. En este caso vamos hemos usado las unidades de tipo mount, las cuales se ejecutan en el arranque del sistema y se mantienen activas hasta que se apaga el sistema. Por otro lado, las unidades de tipo service (automount) se ejecutan en el arranque del sistema y se mantienen activas hasta que se desmontan. En este caso, no hemos usado este tipo de unidades porque no queremos que se desmonte el volumen cuando no se est\xe9 usando."),(0,r.kt)("p",null,"Si queremos que el volumen se monte autom\xe1ticamente al arrancar el sistema, debemos a\xf1adir la siguiente l\xednea al fichero ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/fstab"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/dev/vdb /nfs ext4 defaults 0 0\n")),(0,r.kt)("p",null,"Por \xfaltimo, para que se puedan conectar los clientes NFS, debemos a\xf1adir la siguiente l\xednea al fichero ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/exports"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/nfs 10.0.0.0/24(rw,all_squash,no_subtree_check)\n")),(0,r.kt)("p",null,"Donde indicamos que para ese directorio solo se puedan conectar desde la red ",(0,r.kt)("strong",{parentName:"p"},"10.0.0.0")," y tenga permisos de ",(0,r.kt)("inlineCode",{parentName:"p"},"lectura y escritura"),", adem\xe1s de la opci\xf3n ",(0,r.kt)("strong",{parentName:"p"},"all_squash")," que indica el uso de ",(0,r.kt)("em",{parentName:"p"},"root_squash")," para todos los usuarios consider\xe1ndolos an\xf3nimos, dicha opci\xf3n hace que se realicen las consultas desde el usuario ",(0,r.kt)("inlineCode",{parentName:"p"},"nobody")," obteniendo los permisos de ",(0,r.kt)("inlineCode",{parentName:"p"},"otros"),". Y con la opci\xf3n ",(0,r.kt)("strong",{parentName:"p"},"no_subtree_check")," indicamos que no se compruebe si el directorio es un subdirectorio de otro directorio compartido, es decir, permite que no se compruebe el camino hasta el directorio que se exporta, en el caso de que el usuario no tenga permisos sobre el directorio exportado."),(0,r.kt)("p",null,"Para realizar la ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://ottershell.vercel.app/docs/Tasks/nfs_systemd#configuraci%C3%B3n-del-punto-de-montaje"},"modificaci\xf3n anterior"))," sin necesidad de reiniciar el servicio podemos usar el comando ",(0,r.kt)("strong",{parentName:"p"},"exportfs"),", al aplicarle la opci\xf3n ",(0,r.kt)("strong",{parentName:"p"},"-r")," realiza el reinicio a\xf1adiendo las modificaciones a su vez. "),(0,r.kt)("h1",{id:"configuraci\xf3n-del-cliente-nfs"},"Configuraci\xf3n del cliente NFS"),(0,r.kt)("p",null,"Los clientes NFS que usan el directorio compartido no usan ning\xfan tipo de identificaci\xf3n ya que considera que los identificadores  de los usuarios son iguales:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cat /etc/passwd | grep debian\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# En el servidor\n\ndebian@nfs-systemd:~$ cat /etc/passwd | egrep debian\n\ndebian:x:1000:1000:Debian:/home/debian:/bin/bash\n\n# En el cliente\n\ndebian@nfs-systemd-client:~$ cat /etc/passwd | egrep debian\n\ndebian:x:1000:1000:Debian:/home/debian:/bin/bash\n")),(0,r.kt)("p",null,"Gracias a esto cuando un cliente se conecta a un recurso compartido, el usuario de ese cliente, pasa a tener los mismos permisos que el usuario de la m\xe1quina servidor.",(0,r.kt)("br",{parentName:"p"}),"\n","En cuanto al usuario root, gracias a la configuraci\xf3n ",(0,r.kt)("inlineCode",{parentName:"p"},"root_squash")," (que se uso en la configuraci\xf3n en el servidor en ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/exports"),") evita que sea usado como tal asignado valores de usuarios ",(0,r.kt)("inlineCode",{parentName:"p"},"otros")," al mismo."),(0,r.kt)("p",null,"Para realizar la instalaci\xf3n en el cliente del servicio NFS ejecutamos el siguiente comando:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo apt install nfs-common\n")))}p.isMDXComponent=!0}}]);