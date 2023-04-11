"use strict";(self.webpackChunkotter_shell=self.webpackChunkotter_shell||[]).push([[8691],{3905:(e,a,n)=>{n.d(a,{Zo:()=>d,kt:()=>m});var t=n(67294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=t.createContext({}),c=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},d=function(e){var a=c(e.components);return t.createElement(s.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},p=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,k=p["".concat(s,".").concat(m)]||p[m]||u[m]||o;return n?t.createElement(k,i(i({ref:a},d),{},{components:n})):t.createElement(k,i({ref:a},d))}));function m(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},54704:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var t=n(87462),r=(n(67294),n(3905));const o={sidebar_position:14},i="Gesti\xf3n de redes en OpenStack",l={unversionedId:"Tasks/redes_openstack",id:"Tasks/redes_openstack",title:"Gesti\xf3n de redes en OpenStack",description:"Procedimientos",source:"@site/docs/Tasks/redes_openstack.md",sourceDirName:"Tasks",slug:"/Tasks/redes_openstack",permalink:"/docs/Tasks/redes_openstack",draft:!1,editUrl:"https://github.com/belennazareth/ottershell/blob/main/docs/Tasks/redes_openstack.md",tags:[],version:"current",sidebarPosition:14,frontMatter:{sidebar_position:14},sidebar:"tutorialSidebar",previous:{title:"Instalaci\xf3n de nginx con PHP",permalink:"/docs/Tasks/nginx_php"},next:{title:"Configuraci\xf3n Apache2 + fpm+php",permalink:"/docs/Tasks/apache2_fpm"}},s={},c=[{value:"Procedimientos",id:"procedimientos",level:2},{value:"Entrega",id:"entrega",level:2},{value:"1. Los comandos OSC para crear la red <code>red-externa</code>.",id:"1-los-comandos-osc-para-crear-la-red-red-externa",level:3},{value:"2. Los comandos OSC y sus salidas, para visualizar las redes que tienes en tu proyecto y los routers.",id:"2-los-comandos-osc-y-sus-salidas-para-visualizar-las-redes-que-tienes-en-tu-proyecto-y-los-routers",level:3},{value:"3. Cuando crees la instancia maquina-router, accede a ella y comprueba la IP fija que ha tomando. Responde: \xbfHas podido a\xf1adir una IP flotante a esta nueva instancia? Razona la respuesta.",id:"3-cuando-crees-la-instancia-maquina-router-accede-a-ella-y-comprueba-la-ip-fija-que-ha-tomando-responde-has-podido-a\xf1adir-una-ip-flotante-a-esta-nueva-instancia-razona-la-respuesta",level:3},{value:"4. Comandos OSC para conectar la maquina-router a la red-interna y que tenga la direcci\xf3n 10.0.100.1.",id:"4-comandos-osc-para-conectar-la-maquina-router-a-la-red-interna-y-que-tenga-la-direcci\xf3n-1001001",level:3},{value:"5. Comandos OSC para crear la maquina-cliente con la direcci\xf3n 10.0.100.200. Responde: \xbfHas podido a\xf1adir una IP flotante a esta nueva instancia? Razona la respuesta.",id:"5-comandos-osc-para-crear-la-maquina-cliente-con-la-direcci\xf3n-100100200-responde-has-podido-a\xf1adir-una-ip-flotante-a-esta-nueva-instancia-razona-la-respuesta",level:3},{value:"6. Comandos OSC para deshabilitar la seguridad de los puertos de la red-interna.",id:"6-comandos-osc-para-deshabilitar-la-seguridad-de-los-puertos-de-la-red-interna",level:3},{value:"7. Comprobaci\xf3n de que la maquina-cliente tiene conexi\xf3n al exterior.",id:"7-comprobaci\xf3n-de-que-la-maquina-cliente-tiene-conexi\xf3n-al-exterior",level:3},{value:"8. Comprobaci\xf3n del acceso al servidor web de la maquina-cliente desde el exterior.",id:"8-comprobaci\xf3n-del-acceso-al-servidor-web-de-la-maquina-cliente-desde-el-exterior",level:3},{value:"Notas",id:"notas",level:2}],d={toc:c};function u(e){let{components:a,...o}=e;return(0,r.kt)("wrapper",(0,t.Z)({},d,o,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"gesti\xf3n-de-redes-en-openstack"},"Gesti\xf3n de redes en OpenStack"),(0,r.kt)("h2",{id:"procedimientos"},"Procedimientos"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Crea una nueva red (llamada red-externa) y una subred con DHCP, DNS el 192.168.202.2 y direccionamiento 192.168.0.0/24. Crea un nuevo router. Conecta la nueva red al router, y el router a red p\xfablica.")),(0,r.kt)("p",null,"Para una red:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"openstack network create red-externa\n\nopenstack subnet create --network red-externa --dhcp --dns-nameserver 192.168.202.2 --subnet-range 192.168.0.0/24 subred-externa\n")),(0,r.kt)("p",null,"Para crear un router:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"openstack router create routersin\n\nopenstack router set routersin --external-gateway ext-net\nopenstack router add subnet routersin subred-externa\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Crea una instancia (llamada maquina-router) conectada a la nueva red. Comprueba que la IP fija est\xe1 en el direccionamiento de la nueva red. \xbfPuedes a\xf1adirle una IP flotante a la nueva instancia? \xbfPor qu\xe9?.")),(0,r.kt)("p",null,"Para crear la instancia:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},' openstack server create --flavor m1.mini \\\n --image "Debian 11 Bullseye" \\\n --security-group default \\\n --key-name nazareth_local \\\n --network red-externa \\\n maquina-router\n')),(0,r.kt)("p",null,"Para a\xf1adir la IP flotante:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," openstack floating ip create ext-net\n openstack server add floating ip  maquina-router {ip}\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Crea una nueva red (llamada red-interna) y una subred con DHCP, DNS el 192.168.202.2 y direccionamiento 10.0.100.0/24.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"openstack network create red-interna --internal\n\nopenstack subnet create --network red-interna --dhcp --dns-nameserver 192.168.202.2 --subnet-range 10.0.100.0/24 subred-interna\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Conecta la instancia maquina-router a la nueva red y as\xedgnale la primera direcci\xf3n: 10.0.100.1.")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Crea una instancia llamada maquina-cliente conectada a la red red-interna. Usando puertos de red as\xedgnale la direcci\xf3n 10.0.100.200. Comprueba que su puerta de enlace es la instancia maquina-router. \xbfPuedes asignarle a esta instancia una IP flotante? \xbfPor qu\xe9?.")),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"A continuaci\xf3n vamos a configurar la instancia maquina-router para que haga de router-nat. Sin embargo, las restricciones y la seguridad del cortafuegos que tenemos configurado en cada una de las interfaces de las instancias no van a permitir que funcione de forma adecuada. Por lo tanto, desactiva la seguridad de la interfaz de maquina-router y maquina-cliente conectadas a la red-interna.")),(0,r.kt)("ol",{start:7},(0,r.kt)("li",{parentName:"ol"},"Configura la instancia maquina-router para que funcione como router-nat. Comprueba que el cliente tiene acceso a internet. Instala un servidor web en el cliente.")),(0,r.kt)("ol",{start:8},(0,r.kt)("li",{parentName:"ol"},"Accede desde el exterior con un navegador web al servidor web del cliente.")),(0,r.kt)("h2",{id:"entrega"},"Entrega"),(0,r.kt)("h3",{id:"1-los-comandos-osc-para-crear-la-red-red-externa"},"1. Los comandos OSC para crear la red ",(0,r.kt)("inlineCode",{parentName:"h3"},"red-externa"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"openstack network create red-externa\n\nopenstack subnet create --network red-externa --dhcp --dns-nameserver 192.168.202.2 --subnet-range 192.168.0.0/24 subred-externa\n")),(0,r.kt)("h3",{id:"2-los-comandos-osc-y-sus-salidas-para-visualizar-las-redes-que-tienes-en-tu-proyecto-y-los-routers"},"2. Los comandos OSC y sus salidas, para visualizar las redes que tienes en tu proyecto y los routers."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"(RedLine)  nazare@ThousandSunny \ue0b0 ~$  openstack network list\n\n+--------------------------------------+--------------------------+--------------------------------------+\n| ID                                   | Name                     | Subnets                              |\n+--------------------------------------+--------------------------+--------------------------------------+\n| 2ebd4d15-00e3-44c6-a9a7-aeebef5f6540 | ext-net                  | fedce2ca-083e-4df8-bf1c-abbf4ab19cd1 |\n| 705f009c-06ec-4b44-82c9-8492713f0a1f | red de nazaret.duran     | c51bfa29-134c-4b8e-b1e0-e409a677cd56 |\n| 98c1cf52-b499-44fc-bcb1-47c1e1fc5872 | Red DMZ de nazaret.duran | 5c49862b-4cf8-4e18-af20-24a348692a10 |\n| fcfaba89-33f9-41f8-9971-72ac95435783 | red-externa              | ca685547-1fe3-41a4-bf5b-ce402f807abd |\n+--------------------------------------+--------------------------+--------------------------------------+\n\n(RedLine)  nazare@ThousandSunny \ue0b0 ~$  openstack subnet list\n\n+--------------------------------------+----------------+--------------------------------------+----------------+\n| ID                                   | Name           | Network                              | Subnet         |\n+--------------------------------------+----------------+--------------------------------------+----------------+\n| 5c49862b-4cf8-4e18-af20-24a348692a10 |                | 98c1cf52-b499-44fc-bcb1-47c1e1fc5872 | 172.16.0.0/16  |\n| c51bfa29-134c-4b8e-b1e0-e409a677cd56 |                | 705f009c-06ec-4b44-82c9-8492713f0a1f | 10.0.0.0/24    |\n| ca685547-1fe3-41a4-bf5b-ce402f807abd | subred-externa | fcfaba89-33f9-41f8-9971-72ac95435783 | 192.168.0.0/24 |\n+--------------------------------------+----------------+--------------------------------------+----------------+\n\n(RedLine)  nazare@ThousandSunny \ue0b0 ~$  openstack router list\n\n+--------------------------------------+-------------------------+--------+-------+----------------------------------+\n| ID                                   | Name                    | Status | State | Project                          |\n+--------------------------------------+-------------------------+--------+-------+----------------------------------+\n| e6dd515b-321f-431d-8a7f-55ce596a142e | routersin               | ACTIVE | UP    | cdb0ff7eeae74b1cbb06e4c476c52889 |\n| f3f45b48-ec65-4b7f-9e8e-f8034bff6b99 | router de nazaret.duran | ACTIVE | UP    | cdb0ff7eeae74b1cbb06e4c476c52889 |\n+--------------------------------------+-------------------------+--------+-------+----------------------------------+\n")),(0,r.kt)("h3",{id:"3-cuando-crees-la-instancia-maquina-router-accede-a-ella-y-comprueba-la-ip-fija-que-ha-tomando-responde-has-podido-a\xf1adir-una-ip-flotante-a-esta-nueva-instancia-razona-la-respuesta"},"3. Cuando crees la instancia maquina-router, accede a ella y comprueba la IP fija que ha tomando. Responde: \xbfHas podido a\xf1adir una IP flotante a esta nueva instancia? Razona la respuesta."),(0,r.kt)("p",null,"Como podemos comprobar se ha accedido a la m\xe1quina por la IP flotante que se le ha asignado, y si ejecutamos un ",(0,r.kt)("inlineCode",{parentName:"p"},"ip a")," veremos que la IP fija que ha tomado es de la red:  "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Term",src:n(81658).Z,width:"944",height:"605"})),(0,r.kt)("p",null,"S\xed que se ha podido asignar una IP flotante a la instancia debido a que la red creada est\xe1 conectada por medio de un router a la red ext-net, la cual es la encargada de proporcionar las IP flotantes y asignarlas."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Term",src:n(81806).Z,width:"865",height:"473"})),(0,r.kt)("h3",{id:"4-comandos-osc-para-conectar-la-maquina-router-a-la-red-interna-y-que-tenga-la-direcci\xf3n-1001001"},"4. Comandos OSC para conectar la maquina-router a la red-interna y que tenga la direcci\xf3n 10.0.100.1."),(0,r.kt)("p",null,"Lo primera ser\xe1 crear un puerto con la direcci\xf3n que se le quiere asignar a la m\xe1quina:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"openstack port create --network red-interna --fixed-ip ip-address=10.0.100.1 puertesito\n")),(0,r.kt)("p",null,"Para conectar la instancia ",(0,r.kt)("inlineCode",{parentName:"p"},"maquina-router")," a\xf1adimos el puerto creado:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"openstack server add port maquina-router puertesito\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Term",src:n(67982).Z,width:"1628",height:"241"})),(0,r.kt)("h3",{id:"5-comandos-osc-para-crear-la-maquina-cliente-con-la-direcci\xf3n-100100200-responde-has-podido-a\xf1adir-una-ip-flotante-a-esta-nueva-instancia-razona-la-respuesta"},"5. Comandos OSC para crear la maquina-cliente con la direcci\xf3n 10.0.100.200. Responde: \xbfHas podido a\xf1adir una IP flotante a esta nueva instancia? Razona la respuesta."),(0,r.kt)("p",null,"Para crear la ",(0,r.kt)("inlineCode",{parentName:"p"},"maquina-cliente"),", primero es necesario crear un puerto con el que asignaremos la ip y despu\xe9s creamos la m\xe1quina usando la opci\xf3n ",(0,r.kt)("inlineCode",{parentName:"p"},"--port")," donde se le indica el puerto creado con la ip ",(0,r.kt)("inlineCode",{parentName:"p"},"10.0.100.200"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'openstack port create --network red-interna --fixed-ip ip-address=10.0.100.200 puertete \n\nopenstack server create --flavor m1.mini \\\n--image "Debian 11 Bullseye" \\\n--security-group default \\\n--key-name nazareth_local \\\n--port puertete \\\nmaquina-cliente\n')),(0,r.kt)("p",null,"No se ha podido a\xf1adir una ip flotante ya que es una red interna y por lo tanto solo se puede acceder a esta por el router haciendo un puente:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ssh -AJ debian@172.22.201.235 debian@10.0.100.200\n")),(0,r.kt)("p",null,"Como se puede comprobar se ha creado la m\xe1quina con ",(0,r.kt)("inlineCode",{parentName:"p"},"maquina-router")," como gateway:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Term",src:n(31729).Z,width:"1022",height:"746"})),(0,r.kt)("h3",{id:"6-comandos-osc-para-deshabilitar-la-seguridad-de-los-puertos-de-la-red-interna"},"6. Comandos OSC para deshabilitar la seguridad de los puertos de la red-interna."),(0,r.kt)("p",null,"Hay que deshabilitar la seguridad de los puertos de la maquina-router y de maquina-cliente, quitando primero los grupos de seguridad a ambas:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"openstack server remove security group maquina-router default\nopenstack server remove security group maquina-cliente default\n\nopenstack port set --disable-port-security puertete\nopenstack port set --disable-port-security puertesito\nopenstack port set --disable-port-security ccd331c7-2b6e-408e-9f9b-0a3295cd4d1a\nopenstack port set --disable-port-security 6055d0d0-f199-4db3-b359-cb27f1d12a37\n")),(0,r.kt)("h3",{id:"7-comprobaci\xf3n-de-que-la-maquina-cliente-tiene-conexi\xf3n-al-exterior"},"7. Comprobaci\xf3n de que la maquina-cliente tiene conexi\xf3n al exterior."),(0,r.kt)("p",null,"Primero hay que configurar la instancia maquina-router para que haga de router-nat:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"iptables -t nat -A POSTROUTING -s 10.0.100.0/24 -o ens3 -j SNAT --to 192.168.0.127\niptables -t nat -A PREROUTING -p tcp --dport 80 -i ens3 -j DNAT --to 10.0.100.200:80\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Term",src:n(86107).Z,width:"923",height:"109"})),(0,r.kt)("p",null,"Para comprobar que la m\xe1quina-cliente tiene conexi\xf3n con el exterior hacemos un traceroute a la ip de google:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"traceroute 8.8.8.8\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Term",src:n(491).Z,width:"1616",height:"351"})),(0,r.kt)("h3",{id:"8-comprobaci\xf3n-del-acceso-al-servidor-web-de-la-maquina-cliente-desde-el-exterior"},"8. Comprobaci\xf3n del acceso al servidor web de la maquina-cliente desde el exterior."),(0,r.kt)("p",null,"Montamos el servidor web en la m\xe1quina-cliente:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo apt update\nsudo apt install apache2\nsudo systemctl start apache2\n")),(0,r.kt)("p",null,"Y a\xf1adimos un archivo html para comprobar que funciona:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'echo "Hola caracola \\(= * u * =)/" > /var/www/html/index.html\n')),(0,r.kt)("p",null,"Luego accedemos a la m\xe1quina-router y hacemos un curl a la ip de la m\xe1quina-cliente:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Term",src:n(19247).Z,width:"434",height:"111"})),(0,r.kt)("p",null,"Para poder entrar a la misma desde nuestra m\xe1quina local se edita el fichero ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/hosts")," y se a\xf1ade la ip de la ",(0,r.kt)("inlineCode",{parentName:"p"},"m\xe1quina-router")," y el nombre que queramos ponerle:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# openstack\n172.22.201.235 maquina-cliente.org\n")),(0,r.kt)("p",null,"Y luego accedemos desde el navegador:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Term",src:n(15118).Z,width:"626",height:"209"})),(0,r.kt)("h2",{id:"notas"},"Notas"),(0,r.kt)("p",null,"-Para poder acceder al entorno:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Primero ejecutamos el entorno virtual:"),(0,r.kt)("p",{parentName:"li"},"  source RedLine/bin/activate")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Luego dentro ejecutamos:"),(0,r.kt)("p",{parentName:"li"},"  source Proyecto\\ de\\ nazaret.duran-openrc.sh"))),(0,r.kt)("p",null,"-IMPORTANTE ACORDARSE DE ACTIVAR EL ",(0,r.kt)("strong",{parentName:"p"},"BIT DE FORWARDING")," EN EL ROUTER (maquina-router):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sysctl -w net.ipv4.ip_forward=1\n\nor\n\nnano /proc/sys/net/ipv4/ip_forward\n")),(0,r.kt)("p",null,"-Si da error al hacer ",(0,r.kt)("inlineCode",{parentName:"p"},"update")," en la ",(0,r.kt)("inlineCode",{parentName:"p"},"maquina-cliente")," editamos el fichero ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/apt/sources.list")," y cambiamos ",(0,r.kt)("inlineCode",{parentName:"p"},"http://deb.debian.org/debian")," por ",(0,r.kt)("inlineCode",{parentName:"p"},"https://deb.debian.org/debian/")," (as\xed con todos) y luego hacemos ",(0,r.kt)("inlineCode",{parentName:"p"},"update")," y ",(0,r.kt)("inlineCode",{parentName:"p"},"upgrade"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo nano /etc/apt/sources.list\nsudo apt update\nsudo apt upgrade\n")))}u.isMDXComponent=!0},15118:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/taller2SRI4-10-e812f5357351179ea3e2ba86a133e9c2.png"},81658:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/taller2SRI4-3-8354800bdf0675c1f0ad1db275fbfbc2.png"},81806:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/taller2SRI4-4-7933a1393654081a5c53d4993d8f963e.png"},67982:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/taller2SRI4-5-b553f1d5f0c317c7d37bb7b8f31f7966.png"},31729:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/taller2SRI4-6-ddf6f10bceb5a0676860aaf3b1c1170c.png"},86107:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/taller2SRI4-7-350c51e96aa6efff0e4173fad0338383.png"},491:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/taller2SRI4-8-4ccea733089605995c1f5d03b5834439.png"},19247:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/taller2SRI4-9-09c2f1cd5d991809e37b5e0d83f5547d.png"}}]);