"use strict";(self.webpackChunkotter_shell=self.webpackChunkotter_shell||[]).push([[260],{3905:(e,a,n)=>{n.d(a,{Zo:()=>d,kt:()=>h});var t=n(67294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=t.createContext({}),c=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},d=function(e){var a=c(e.components);return t.createElement(s.Provider,{value:a},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return n?t.createElement(h,o(o({ref:a},d),{},{components:n})):t.createElement(h,o({ref:a},d))}));function h(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},54748:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var t=n(87462),r=(n(67294),n(3905));const i={sidebar_position:27},o="Protocolo DHCP",l={unversionedId:"Tasks/dhcp",id:"Tasks/dhcp",title:"Protocolo DHCP",description:"Procedimiento",source:"@site/docs/Tasks/dhcp.md",sourceDirName:"Tasks",slug:"/Tasks/dhcp",permalink:"/docs/Tasks/dhcp",draft:!1,editUrl:"https://github.com/belennazareth/ottershell/blob/main/docs/Tasks/dhcp.md",tags:[],version:"current",sidebarPosition:27,frontMatter:{sidebar_position:27},sidebar:"tutorialSidebar",previous:{title:"Instalaci\xf3n y configuraci\xf3n de un servidor DNS esclavo",permalink:"/docs/Tasks/DNS_esclavo"},next:{title:"Introducci\xf3n a iSCSI",permalink:"/docs/Tasks/iSCSI"}},s={},c=[{value:"Procedimiento",id:"procedimiento",level:2},{value:"Entrega",id:"entrega",level:2},{value:"1. Entrega la URL del repositorio GitHub donde has alojado todos los ficheros.",id:"1-entrega-la-url-del-repositorio-github-donde-has-alojado-todos-los-ficheros",level:3},{value:"2. Entrega el fichero de configuraci\xf3n del servidor DHCP despu\xe9s de ejecutar el playbook de ansible.",id:"2-entrega-el-fichero-de-configuraci\xf3n-del-servidor-dhcp-despu\xe9s-de-ejecutar-el-playbook-de-ansible",level:3},{value:"3. Entrega el fichero de configuraci\xf3n de red del cliente (para comprobar que toma direccionamiento din\xe1mico) y que ha tomado la direcci\xf3n reservada en el servidor DHCP.",id:"3-entrega-el-fichero-de-configuraci\xf3n-de-red-del-cliente-para-comprobar-que-toma-direccionamiento-din\xe1mico-y-que-ha-tomado-la-direcci\xf3n-reservada-en-el-servidor-dhcp",level:3},{value:"4. Entrega el fichero de configuraci\xf3n de red de la otra m\xe1quina cliente, la direcci\xf3n que ha tomado y el fichero de concesiones del servidor donde se demuestra que se ha repartido.",id:"4-entrega-el-fichero-de-configuraci\xf3n-de-red-de-la-otra-m\xe1quina-cliente-la-direcci\xf3n-que-ha-tomado-y-el-fichero-de-concesiones-del-servidor-donde-se-demuestra-que-se-ha-repartido",level:3},{value:"5. Comprueba que la nueva m\xe1quina cliente no tiene el servidor apache2 instalado, y una captura de pantalla comprobando que sigue siendo accesible el servidor web de cliente.",id:"5-comprueba-que-la-nueva-m\xe1quina-cliente-no-tiene-el-servidor-apache2-instalado-y-una-captura-de-pantalla-comprobando-que-sigue-siendo-accesible-el-servidor-web-de-cliente",level:3}],d={toc:c},p="wrapper";function u(e){let{components:a,...i}=e;return(0,r.kt)(p,(0,t.Z)({},d,i,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"protocolo-dhcp"},"Protocolo DHCP"),(0,r.kt)("h2",{id:"procedimiento"},"Procedimiento"),(0,r.kt)("p",null,"Vamos a continuar trabajando en el escenario que desarrollamos en la ",(0,r.kt)("a",{parentName:"p",href:"https://ottershell.vercel.app/docs/Tasks/router_nat"},"Pr\xe1ctica: Creaci\xf3n y configuraci\xf3n de un escenario router-nat"),"."),(0,r.kt)("p",null,"Para evitar los problemas que nos puede causar vagrant a la hora de trabajar con el DHCP (los clientes tendr\xedan dos servidores DHCP, el que estamos configurando y el de la red de mantenimiento por eth0), os sugiero:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Que mont\xe9is el mismo escenario pero en kvm/libvirt, en relaci\xf3n a las redes:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"No tendr\xedamos la interfaz conectada a la red de mantenimiento de vagrant.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Conectar\xedamos las m\xe1quinas a una red NAT sin dhcp (con IP est\xe1tica) que utilizar\xedamos para configurar las m\xe1quinas por ansible. Esto soluciona el problema de que las direcciones IP cambien en vagrant y tengamos que cambiar el inventario cada vez que creemos el escenario."))),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Ejecutamos el playbook de la pr\xe1ctica anterior y comprobamos que las m\xe1quinas tienen el funcionamiento esperado.")),(0,r.kt)("p",null,"A partir de esta configuraci\xf3n podr\xedamos seguir con esta pr\xe1ctica."),(0,r.kt)("p",null,"Para esta pr\xe1ctica vamos a utilizar una m\xe1quina router que tendr\xe1 dos interfaces de red, una por defecto para la conexi\xf3n al exterior y otra para la red interna que ser\xe1 la que haga DHCP a las m\xe1quinas clientes. Los clientes tendran una red interna que se conectar\xe1 a la red interna del router por DHCP."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},'TODAS LAS M\xc1QUINAS TENDR\xc1N UNA RED AISLADA DE "MANTENIMIENTO" PARA PODER USAR ESAS IPs PARA EJECUTARLES EL PLAYBOOK DEL ANSIBLE')),(0,r.kt)("p",null,"Primero creamos una red aislada que usar\xe1n como red interna las m\xe1quinas clientes y el router:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"<network>\n  <name>interna</name>\n  <bridge name='virbr17'/>\n  <ip address='192.168.123.1' netmask='255.255.255.0'>\n    <dhcp>\n      <range start='192.168.123.2' end='192.168.123.254'/>\n    </dhcp>\n  </ip>\n</network>\n")),(0,r.kt)("p",null,"La definimos en libvirt:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"virsh -c qemu:///system net-define interna.xml\nvirsh -c qemu:///system net-start interna\nvirsh -c qemu:///system net-autostart interna\n")),(0,r.kt)("p",null,"Usaremos la red interna para conectar las m\xe1quinas clientes y el router.\nLa red externa/mantenimientoparaejecutarelplaybook no es necesario crearla ya que usaremos la red por defecto (",(0,r.kt)("inlineCode",{parentName:"p"},"default"),")."),(0,r.kt)("p",null,"Ahora creamos la m\xe1quina router:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"virt-install --connect qemu:///system --virt-type kvm --name router-dhcp --cdrom ~/Escritorio/ISOS/debian-11.5.0-amd64-netinst.iso --os-variant debian10 --disk size=15 --memory 2000 --vcpus 2 \n")),(0,r.kt)("p",null,"Creamos la m\xe1quina cliente:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"virt-install --connect qemu:///system --virt-type kvm --name cliente-dhcp --cdrom ~/Escritorio/ISOS/debian-11.5.0-amd64-netinst.iso --os-variant debian10 --disk size=15 --memory 2000 --vcpus 2 \n")),(0,r.kt)("p",null,"A\xf1adimos la red interna con virsh:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"virsh -c qemu:///system attach-interface --domain router-dhcp --type network --source interna --model virtio --persistent\nvirsh -c qemu:///system attach-interface --domain cliente-dhcp --type network --source interna --model virtio --persistent\n")),(0,r.kt)("p",null,"Editamos los ficheros de ambas m\xe1quinas para que tengan una IP est\xe1tica en la red de mantenimiento y una IP din\xe1mica en la red interna, la cual se a\xf1adir\xe1 si no existe en el fichero ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/network/interfaces"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--- /etc/network/interfaces ROUTER\n\n# This file describes the network interfaces available on your system\n# and how to activate them. For more information, see interfaces(5).\n\nsource /etc/network/interfaces.d/*\n\n# The loopback network interface\nauto lo\niface lo inet loopback\n\n# The primary network interface\nallow-hotplug enp1s0\niface enp1s0 inet static\n        address 192.168.132.202\n        netmask 255.255.255.0\n        network 192.168.132.0\n        broadcast 192.168.132.255\n        gateway 192.168.132.1\n\nallow-hotplug enp7s0\niface enp7s0 inet dhcp\n\n*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*\n\n--- /etc/network/interfaces CLIENTE\n\n# This file describes the network interfaces available on your system\n# and how to activate them. For more information, see interfaces(5).\n\nsource /etc/network/interfaces.d/*\n\n# The loopback network interface\nauto lo\niface lo inet loopback\n\n# The primary network interface\nallow-hotplug enp1s0\niface enp1s0 inet static\n        address 192.168.132.103\n        netmask 255.255.255.0\n        network 192.168.132.0\n        broadcast 192.168.132.255\n        gateway 192.168.132.1\n\nallow-hotplug enp7s0\niface enp7s0 inet dhcp\n")),(0,r.kt)("p",null,"Despu\xe9s de esto, levantamos las interfaces de las m\xe1quinas:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ifup enp1s0\nifup enp7s0\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"maquina"),(0,r.kt)("th",{parentName:"tr",align:null},"ip"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"router-dhcp"),(0,r.kt)("td",{parentName:"tr",align:null},"192.168.132.202")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cliente-dhcp"),(0,r.kt)("td",{parentName:"tr",align:null},"192.168.132.103")))),(0,r.kt)("p",null,"Modificamos el ansible con las nuevas ip en el fichero ",(0,r.kt)("inlineCode",{parentName:"p"},"hosts"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"all:\n  children:\n    router_client:\n      hosts:\n        router-dhcp: \n          ansible_ssh_host: 192.168.132.104\n          ansible_ssh_user: usuario\n          ansible_ssh_pass: usuario\n          ansible_become_pass: usuario\n          \n        cliente-dhcp:\n          ansible_ssh_host: 192.168.132.103\n          ansible_ssh_user: usuario\n          ansible_ssh_pass: usuario\n          ansible_become_pass: usuario\n")),(0,r.kt)("p",null,"Las variables que usaremos en el playbook son las siguientes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"r_privada: 192.168.123.0/24\nip_router: 192.168.123.130\nip_cliente: 192.168.123.227\n")),(0,r.kt)("p",null,"Con esto ya podemos ejecutar el playbook de la pr\xe1ctica anterior y comprobar que las m\xe1quinas tienen el funcionamiento esperado."),(0,r.kt)("p",null,"\u3164\u3164\u3164\u3164\u3164\u3164\u3164\u3164\u3164\u3164\u3164\u3164\u3164\u3164\u3164\u3164\u3164\u3164\u3164\u3164\u3164\u3164\u3164\u3164\u3164\u3164\u3164\ud83d\udc1a\u200a                 \ud83d\udc1a\u200a                    \ud83d\udc1a\u200a                     \ud83d\udc1a\u3164\u3164\u3164\u3164\u3164\u3164\u3164\u3164\u3164\u3164\u3164\u3164\u3164\u3164\u3164\u3164\u3164\u3164\u3164\u3164\u3164\u3164\u3164\u3164\u3164\u3164\u3164\u3164\u3164\u3164"),(0,r.kt)("p",null,"Queremos instalar un servidor DHCP en la m\xe1quina router para que configure de forma autom\xe1tica las m\xe1quinas que se conectan en la red interna. Tenemos que tener en cuenta lo siguiente:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"La m\xe1quina cliente de la pr\xe1ctica anterior, que tiene instalado el servidor web, debe tener la misma IP que la que le as\xedgnaste est\xe1ticamente, por lo tanto haremos una reserva para que tenga la misma IP.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Al a\xf1adir una nueva m\xe1quina a la red local (recuerda que no se le instalar\xe1 el servidor web) se configurar\xe1 de forma din\xe1mica.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Crea un nuevo rol en el playbook de ansible llamado dhcp que configure el servidor DHCP de forma correcta. Quiz\xe1s sea necesario modificar el comportamiento de alg\xfan rol de la pr\xe1ctica anterior.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Todos los par\xe1metros que reparta el servidor DHCP, as\xed como cualquier otro dato, por ejemplo la direcci\xf3n MAC del cliente se guardar\xe1n en variables.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"A\xf1ade una nueva m\xe1quina al escenario conectada a la red interna muy aislada. Vuelve a ejecutar el playbook y comprueba que todo funciona de forma correcta."))),(0,r.kt)("p",null,"Creamos una nueva m\xe1quina que se llamar\xe1 ",(0,r.kt)("inlineCode",{parentName:"p"},"cliente-dhcp2")," y la a\xf1adimos a la red interna:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"virsh -c qemu:///system attach-interface --domain cliente-dhcp2 --type network --source interna --model virtio --persistent\n")),(0,r.kt)("p",null,"Editamos el fichero ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/network/interfaces")," para que tenga una IP din\xe1mica en la red interna:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--- /etc/network/interfaces CLIENTE2\n\n# This file describes the network interfaces available on your system\n# and how to activate them. For more information, see interfaces(5).\n\nsource /etc/network/interfaces.d/*\n\n# The loopback network interface\nauto lo\niface lo inet loopback\n\n# The primary network interface\nallow-hotplug enp1s0\niface enp1s0 inet static\n        address 192.168.132.105\n        netmask 255.255.255.0\n        network 192.168.132.0\n        broadcast 192.168.132.255\n        gateway 192.168.132.1\n\nallow-hotplug enp7s0\niface enp7s0 inet dhcp\n")),(0,r.kt)("p",null,"Levantamos la interfaz:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ifup enp7s0\n")),(0,r.kt)("p",null,"En todas las m\xe1quina metemos la ip p\xfablica de mi m\xe1quina para ejecutar el ansible m\xe1s facilmente."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"maquina"),(0,r.kt)("th",{parentName:"tr",align:null},"ip"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"router-dhcp"),(0,r.kt)("td",{parentName:"tr",align:null},"192.168.132.202")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cliente-dhcp"),(0,r.kt)("td",{parentName:"tr",align:null},"192.168.132.103")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cliente-dhcp2"),(0,r.kt)("td",{parentName:"tr",align:null},"192.168.132.105")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"r_privada: 192.168.123.0/24\nip_router: 192.168.123.130\nip_cliente: 192.168.123.227\nip_cliente2: 192.168.123.209\n")),(0,r.kt)("p",null,"Ahora creamos los ficheros de configuraci\xf3n:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"playbook.yml")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"- hosts: all\n  become: true\n  roles:\n    - common\n\n- hosts: router\n  become: true\n  roles:\n    - router\n    - dhcp\n\n- hosts: web\n  become: true\n  roles:\n    - web\n    - clientes\n\n- hosts: cliente\n  become: true\n  roles:\n    - clientes\n\n- hosts: all\n  become: true\n  roles:\n    - reboot\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"hosts")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"  children:\n    routers:\n      hosts:\n        router:\n          ansible_ssh_host: 192.168.132.104\n          ansible_ssh_private_key_file: ~/.ssh/id_rsa\n    clientes:\n      hosts:\n        web:\n          ansible_ssh_host: 192.168.132.103\n          ansible_ssh_private_key_file: ~/.ssh/id_rsa\n        cliente:\n          ansible_ssh_host: 192.168.132.105\n          ansible_ssh_private_key_file: ~/.ssh/id_rsa\n")),(0,r.kt)("p",null,"Creamos todos los dem\xe1s ficheros de configuraci\xf3n y los roles necesarios para que funcione todo correctamente y ejecutamos el playbook:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ansible-playbook -i hosts playbook.yaml\no\nansible-playbook playbook.yaml -k\n")),(0,r.kt)("h2",{id:"entrega"},"Entrega"),(0,r.kt)("h3",{id:"1-entrega-la-url-del-repositorio-github-donde-has-alojado-todos-los-ficheros"},"1. Entrega la URL del repositorio GitHub donde has alojado todos los ficheros."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/belennazareth/Protocolo_DHCP/tree/main/ansible"},"https://github.com/belennazareth/Protocolo_DHCP/tree/main/ansible")),(0,r.kt)("h3",{id:"2-entrega-el-fichero-de-configuraci\xf3n-del-servidor-dhcp-despu\xe9s-de-ejecutar-el-playbook-de-ansible"},"2. Entrega el fichero de configuraci\xf3n del servidor DHCP despu\xe9s de ejecutar el playbook de ansible."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cat /etc/dhcp/dhcpd.conf\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"dns",src:n(10224).Z,width:"480",height:"377"})),(0,r.kt)("h3",{id:"3-entrega-el-fichero-de-configuraci\xf3n-de-red-del-cliente-para-comprobar-que-toma-direccionamiento-din\xe1mico-y-que-ha-tomado-la-direcci\xf3n-reservada-en-el-servidor-dhcp"},"3. Entrega el fichero de configuraci\xf3n de red del cliente (para comprobar que toma direccionamiento din\xe1mico) y que ha tomado la direcci\xf3n reservada en el servidor DHCP."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cat /etc/network/interfaces\nip a\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"dns",src:n(91619).Z,width:"700",height:"512"}),"\n",(0,r.kt)("img",{alt:"dns",src:n(39875).Z,width:"1058",height:"465"})),(0,r.kt)("h3",{id:"4-entrega-el-fichero-de-configuraci\xf3n-de-red-de-la-otra-m\xe1quina-cliente-la-direcci\xf3n-que-ha-tomado-y-el-fichero-de-concesiones-del-servidor-donde-se-demuestra-que-se-ha-repartido"},"4. Entrega el fichero de configuraci\xf3n de red de la otra m\xe1quina cliente, la direcci\xf3n que ha tomado y el fichero de concesiones del servidor donde se demuestra que se ha repartido."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cat /etc/network/interfaces\nip a\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"dns",src:n(35379).Z,width:"720",height:"523"}),"\n",(0,r.kt)("img",{alt:"dns",src:n(64524).Z,width:"1086",height:"461"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'\nusuario@router-dhcp:~$ cat /var/lib/dhcp/dhclient.enp7s0.leases \ndefault-duid "\\000\\001\\000\\001+\\375D\\333RT\\000\\361\\356\\266";\nlease {\n  interface "enp7s0";\n  fixed-address 192.168.123.100;\n  option subnet-mask 255.255.255.0;\n  option dhcp-lease-time 3600;\n  option dhcp-message-type 5;\n  option domain-name-servers 192.168.123.1;\n  option dhcp-server-identifier 192.168.123.1;\n  option dhcp-renewal-time 1651;\n  option broadcast-address 192.168.123.255;\n  option dhcp-rebinding-time 3001;\n  option host-name "router-dhcp";\n  renew 1 2023/05/22 01:43:59;\n  rebind 1 2023/05/22 01:43:59;\n  expire 1 2023/05/22 01:43:59;\n}\nlease {\n  interface "enp7s0";\n  fixed-address 192.168.123.100;\n  option subnet-mask 255.255.255.0;\n  option dhcp-lease-time 3600;\n  option dhcp-message-type 5;\n  option domain-name-servers 192.168.123.1;\n  option dhcp-server-identifier 192.168.123.1;\n  option dhcp-renewal-time 1800;\n  option broadcast-address 192.168.123.255;\n  option dhcp-rebinding-time 3150;\n  option host-name "router-dhcp";\n  renew 1 2023/05/22 02:08:46;\n  rebind 1 2023/05/22 02:37:06;\n  expire 1 2023/05/22 02:44:36;\n}\n')),(0,r.kt)("h3",{id:"5-comprueba-que-la-nueva-m\xe1quina-cliente-no-tiene-el-servidor-apache2-instalado-y-una-captura-de-pantalla-comprobando-que-sigue-siendo-accesible-el-servidor-web-de-cliente"},"5. Comprueba que la nueva m\xe1quina cliente no tiene el servidor apache2 instalado, y una captura de pantalla comprobando que sigue siendo accesible el servidor web de cliente."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"apt policy apache2\ncurl 192.169.123.2\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"dns",src:n(13523).Z,width:"932",height:"246"}),"\n",(0,r.kt)("img",{alt:"dns",src:n(52454).Z,width:"639",height:"356"}),"\n",(0,r.kt)("img",{alt:"dns",src:n(73367).Z,width:"992",height:"700"})),(0,r.kt)("p",null,"*Nota: Tuve problemas con la red default dandome un error al iniciarla donde dec\xeda que ya exist\xeda o estaba en uso, aunque segu\xeda estando inactiva realmente y no me dejaba la opci\xf3n de iniciarla. Para solucionarlo segu\xed estos pasoss:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Quitar la definici\xf3n de la red default con virsh:"),(0,r.kt)("p",{parentName:"li"},"virsh -c qemu:///system net-undefine default")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Editar el fichero de la red default:"),(0,r.kt)("p",{parentName:"li"},"sudo nano /etc/libvirt/qemu/networks/default.xml")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"En mi caso, decidi cambiar el rango que ten\xeda por defecto:"),(0,r.kt)("network",null,(0,r.kt)("name",null,"default"),(0,r.kt)("bridge",{name:"virbr0"}),(0,r.kt)("forward",null),(0,r.kt)("ip",{address:"192.168.132.1",netmask:"255.255.255.0"},(0,r.kt)("dhcp",null,(0,r.kt)("range",{start:"192.168.132.2",end:"192.168.132.254"}))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Eliminar el bridge que se hab\xeda creado:"),(0,r.kt)("p",{parentName:"li"},"sudo ip link set virbr0 down\nsudo brctl delbr virbr0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Definir la red default con virsh:"),(0,r.kt)("p",{parentName:"li"},"virsh -c qemu:///system net-define /etc/libvirt/qemu/networks/default.xml")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Y la iniciamos:"),(0,r.kt)("p",{parentName:"li"},"virsh -c qemu:///system net-start default")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Tambi\xe9n ponemos que se autoinicie:"),(0,r.kt)("p",{parentName:"li"},"virsh -c qemu:///system net-autostart default")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Comprobamos que se ha creado correctamente:"),(0,r.kt)("p",{parentName:"li"},"virsh -c qemu:///system net-list --all")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Y que est\xe1 activa:"),(0,r.kt)("p",{parentName:"li"},"virsh -c qemu:///system net-dhcp-leases default"))))}u.isMDXComponent=!0},91619:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/DHCPSRI2-2-4d053e57f38793641446533358b9d3b3.png"},39875:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/DHCPSRI2-3-d2d326ad2f1060e315427aa24f15a768.png"},35379:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/DHCPSRI2-4-ed165cd57354a163862084f38842b1b4.png"},64524:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/DHCPSRI2-5-a55e51c11abeef2b7299686d0b399568.png"},13523:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/DHCPSRI2-6-8eeb10d804635edcd086395579fafaca.png"},52454:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/DHCPSRI2-7-bf949c2bcf3150e195881809bf4041a6.png"},73367:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/DHCPSRI2-8-3d32896cbf254a6c5dd927358a0413e6.png"},10224:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/DHCPSRI2-ce99c7cb5ae8000dce8649f02da65b28.png"}}]);