"use strict";(self.webpackChunkotter_shell=self.webpackChunkotter_shell||[]).push([[9115],{3905:(e,a,n)=>{n.d(a,{Zo:()=>c,kt:()=>m});var t=n(7294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=t.createContext({}),u=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},c=function(e){var a=u(e.components);return t.createElement(s.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},p=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,k=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?t.createElement(k,l(l({ref:a},c),{},{components:n})):t.createElement(k,l({ref:a},c))}));function m(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2762:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var t=n(7462),r=(n(7294),n(3905));const o={sidebar_position:15},l="Escenario en OpenStack",i={unversionedId:"Tasks/escenario_openstack",id:"Tasks/escenario_openstack",title:"Escenario en OpenStack",description:"Procedimientos",source:"@site/docs/Tasks/escenario_openstack.md",sourceDirName:"Tasks",slug:"/Tasks/escenario_openstack",permalink:"/docs/Tasks/escenario_openstack",draft:!1,editUrl:"https://github.com/belennazareth/ottershell/blob/main/docs/Tasks/escenario_openstack.md",tags:[],version:"current",sidebarPosition:15,frontMatter:{sidebar_position:15},sidebar:"tutorialSidebar",previous:{title:"Cifrado asim\xe9trico con gpg y openssl",permalink:"/docs/Tasks/cifrado_asimetrico"},next:{title:"Interconexi\xf3n de Servidores de Bases de Datos",permalink:"/docs/Tasks/interconexion_bbdd"}},s={},u=[{value:"Procedimientos",id:"procedimientos",level:2},{value:"Instalaci\xf3n de las instancias de OpenStack",id:"instalaci\xf3n-de-las-instancias-de-openstack",level:3},{value:"Instalaci\xf3n de los contenedores",id:"instalaci\xf3n-de-los-contenedores",level:3},{value:"Entrega",id:"entrega",level:2},{value:"1. Las instrucciones para crear y configurar la m\xe1quina1 (alfa).",id:"1-las-instrucciones-para-crear-y-configurar-la-m\xe1quina1-alfa",level:3},{value:"2. El fichero cloud-config.yaml para crear la m\xe1quina1 (alfa).",id:"2-el-fichero-cloud-configyaml-para-crear-la-m\xe1quina1-alfa",level:3},{value:"3. La Ip flotante de la m\xe1quina1 (alfa).",id:"3-la-ip-flotante-de-la-m\xe1quina1-alfa",level:3},{value:"4. Prueba de funcionamiento de qu\xe9 los FQDN est\xe1n bien configurados.",id:"4-prueba-de-funcionamiento-de-qu\xe9-los-fqdn-est\xe1n-bien-configurados",level:3},{value:"5. Prueba de funcionamiento de que se pueden acceder a todas las m\xe1quinas por ssh.",id:"5-prueba-de-funcionamiento-de-que-se-pueden-acceder-a-todas-las-m\xe1quinas-por-ssh",level:3},{value:"6. Prueba de funcionamiento de que las m\xe1quinas tienen acceso a internet.",id:"6-prueba-de-funcionamiento-de-que-las-m\xe1quinas-tienen-acceso-a-internet",level:3}],c={toc:u};function d(e){let{components:a,...n}=e;return(0,r.kt)("wrapper",(0,t.Z)({},c,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"escenario-en-openstack"},"Escenario en OpenStack"),(0,r.kt)("h2",{id:"procedimientos"},"Procedimientos"),(0,r.kt)("p",null,"En esta tarea se va a crear el escenario de trabajo que se va a usar durante todo el curso, que va a constar inicialmente de 4 m\xe1quinas: 2 instancias en OpenStack y dos contenedores LXC que se ejecutar\xe1n en una de las instancias."),(0,r.kt)("p",null,"Para nombrar las m\xe1quinas se va a utilizar alfa, bravo, charlie y delta, que son las primeras letras de un alfabeto que naci\xf3 antes de la Primera Guerra Mundial en respuesta a los avances en la radio bidireccional compatible con la voz, para mejorar la comunicaci\xf3n en circuitos telef\xf3nicos de baja calidad y de larga distancia."),(0,r.kt)("p",null,"Adem\xe1s el dominio ser\xe1 un subdominio de la forma tunombre.gonzalonazareno.org. De esta forma tendremos:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"M\xe1quina 1: Instancia en OpenStack con Debian 11 Bullseye que se llama alfa.tunombre.gonzalonazareno.org.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"M\xe1quina 2: Instancia en OpenStack con Rocky Linux 9 que se llama bravo.tunombre.gonzalonazareno.org.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"M\xe1quina 3: Contenedor LXC con Ubuntu 20.04 que se llama charlie.tunombre.gonzalonazareno.org.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"M\xe1quina 4: Contenedor LXC con Ubuntu 20.04 que se llama delta.tunombre.gonzalonazareno.org.")),(0,r.kt)("p",null,"La creaci\xf3n y configuraci\xf3n (conexi\xf3n a las redes, creaci\xf3n de volumen, quitarle la seguridad alos puertos, \u2026) de la m\xe1quina1 (alfa) la debes hacer con OSC. Lo dem\xe1s lo puedes hacer con horizon."),(0,r.kt)("h3",{id:"instalaci\xf3n-de-las-instancias-de-openstack"},"Instalaci\xf3n de las instancias de OpenStack"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Crea una red interna que se llame Red DMZ de tu_usuario, con las siguientes caracter\xedsticas:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Direccionamiento: 172.16.0.0/16")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Con DHCP y DNS (192.168.202.2).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"La puerta de enlace de los dispositivos conectados a esta red ser\xe1 el 172.16.0.1."))),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Las dos instancias que vamos a crear se van a configurar con cloud-init de la siguiente manera:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Deben actualizar los paquetes de la distribuci\xf3n de la instancia.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"El dominio utilizado ser\xe1 del tipo tunombre.gonzalonazareno.org. Por lo tanto en la configuraci\xf3n con cloud-init habr\xe1 que indicar el hostname y el FQDN.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Se crear\xe1n dos usuarios:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Un usuario sin privilegios. Se puede llamar como quieras (pero el nombre ser\xe1 el mismo en todas las m\xe1quinas) y acceder\xe1s a las m\xe1quinas usando tu clave ssh privada.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Un usuario profesor, que puede utilizar sudo sin contrase\xf1a. Copia de las claves p\xfablicas de todos los profesores en las instancias para que puedan acceder con el usuario profesor.")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Cambia la contrase\xf1a al usuario root."))),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Creaci\xf3n de la m\xe1quina1 (alfa):")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Crea una instancia sobre un volumen de 30Gb, usando una imagen de Debian 11 Bullseye. Elige el sabor vol.medium. Y configural\xe1 con cloud-init como se ha indicado anteriormente.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Est\xe1 instancia estar\xe1 conectada a tu red interna. Asigna a la instancia una IP flotante."))),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Configuraci\xf3n de la m\xe1quina1 (alfa):")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Conecta la instancia a tu Red DMZ, as\xedgnale la direcci\xf3n 172.16.0.1 para que sea la puerta de enlace las m\xe1quinas conectadas a esta red.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Deshabilita la seguridad de los puertos en las dos interfaces de red para que funcione de manera adecuada el NAT.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Configura de forma permanente la regla SNAT para que las m\xe1quinas de la Red DMZ tengan acceso a internet."))),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Creaci\xf3n de la m\xe1quina2 (bravo):")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Est\xe1 instancia se conectar\xe1 a la red DMZ. Usando un puerto asigna a esta m\xe1quina la direcci\xf3n 172.16.0.200.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Crea una instancia sobre un volumen de 30Gb, usando una imagen de Rocky Linux 9. Elige el sabor vol.normal. Y configural\xe1 con cloud-init como se ha indicado anteriormente.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Deshabilita la seguridad de los puertos en la interfaz de red para que funcione de manera adecuada el NAT.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Comprueba que tiene acceso a internet. Si no tiene acceso a internet, no se han actualizado los paquetes con cloud-init, hazlo posteriormente."))),(0,r.kt)("p",null,"Lo primero sera crear el fichero config.yaml:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"#cloud-config\n\n# Actualizar los paquetes de la distribuci\xf3n\n\npackage_update: true\npackage_upgrade: true\n\n# hostname y FQDN\n\nhostname: bravo\nfqdn: bravo.gonzalonazareno.org\n\n# Crear usuarios\n\nusers:\n\n# Usuario sin privilegios\n\n  - name: nazare\n    sudo: ALL=(ALL) NOPASSWD:ALL\n    shell: /bin/bash\n    passwd: nazare\n    ssh_authorized_keys:\n      - ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQC73j7AidXdLgiu5wJw7YgJuvOHyb6U8c04MuQyehYnMknMR8mTnWZr20npVHJ8VHYHDy8RlgbkMMBFgeVCgXJ+Im3A6Efp6HC4yj2SM+73hr1EKCLdRPzCzdtDSUtkqU9k+x2RdF3T6qD6H4Cg/nT8Sg3Qenqds4XORfDWOvntxFja2D0OhZv1MLPUD9pEj+a8D4erfiPx/gKW/Rtu89une+uiwVgK60B5CxnC8XXnXmPO3NhrgyQhVgzQZ658cUbLooxQURVlo1gnOmcqX5h+svUKN1SDbzTyy7HKSk7bbLHEhk7qDh7jSzcf80GLU0li8vXc2to8NpC00EOQ9POPivESz23gMNY8ooDtNU3Ll/xYvhtvXrJNTbuBiuVLzuopMvrQi6LVsQEWmPJzBiJ2qt8JW1KRLcnWRL4AezbxAPXuRYVnYBS3it6L0J4AZjZg63BkIIrfU7GYzrKb+z5mqUgDJhIZ4d5av+OAxPSSzNeVnyWEnWrI0k9kf9qmqhU= nazare@ThousandSunny\n\n# Usuario profesor\n\n  - name: profesor\n    sudo: ALL=(ALL) NOPASSWD:ALL\n    shell: /bin/bash\n    passwd: profesor\n    ssh_authorized_keys:\n      - ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCmjoVIoZCx4QFXvljqozXGqxxlSvO7V2aizqyPgMfGqnyl0J9YXo6zrcWYwyWMnMdRdwYZgHqfiiFCUn2QDm6ZuzC4Lcx0K3ZwO2lgL4XaATykVLneHR1ib6RNroFcClN69cxWsdwQW6dpjpiBDXf8m6/qxVP3EHwUTsP8XaOV7WkcCAqfYAMvpWLISqYme6e+6ZGJUIPkDTxavu5JTagDLwY+py1WB53eoDWsG99gmvyit2O1Eo+jRWN+mgRHIxJTrFtLS6o4iWeshPZ6LvCZ/Pum12Oj4B4bjGSHzrKjHZgTwhVJ/LDq3v71/PP4zaI3gVB9ZalemSxqomgbTlnT jose@debian\n      - ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCfk9mRtOHM3T1KpmGi0KiN2uAM6CDXM3WFcm1wkzKXx7RaLtf9pX+KCuVqHdy/N/9d9wtH7iSmLFX/4gQKQVG00jHiGf3ABufWeIpjmHtT1WaI0+vV47fofEIjDDfSZPlI3p5/c7tefHsIAK6GbQn31yepAcFYy9ZfqAh8H/Y5eLpf3egPZn9Czsvx+lm0I8Q+e/HSayRaiAPUukF57N2nnw7yhPZCHSZJqFbXyK3fVQ/UQVBeNS2ayp0my8X9sIBZnNkcYHFLIWBqJYdnu1ZFhnbu3yy94jmJdmELy3+54hqiwFEfjZAjUYSl8eGPixOfdTgc8ObbHbkHyIrQ91Kz rafa@eco\n\n# Contrase\xf1a al usuario root\n\nchpasswd:\n   list: |\n       root:root\n   expire: False\n")),(0,r.kt)("p",null,"Desde l\xednea de comandos creamos el volumen y el puerto, y montamos el escenario mand\xe1ndole el fichero de configuraci\xf3n cloud-config.yaml:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'openstack volume create --size 30 \\\n--description "Volumen para la m\xe1quina bravo" \\\n--image "Rocky Linux 9" \\\n--availability-zone "nova" \\\n--bootable \\\nvolumen_bravo\n\nopenstack port create --network "Red DMZ de nazaret.duran" --fixed-ip ip-address=172.16.0.200 port_bravo\n\n openstack server create --volume volumen_bravo \\\n --flavor vol.normal \\\n --security-group default \\\n --key-name nazareth_local \\\n --network "Red DMZ de nazaret.duran" \\\n --port port_bravo \\\n --user-data cloud-config.yaml \\\n bravo\n')),(0,r.kt)("p",null,"Para facilitar la conexi\xf3n ssh se crea el fichero ",(0,r.kt)("inlineCode",{parentName:"p"},"config")," en la carpeta ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.ssh")," con la estructura:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," host bravo\n    HostName {ip}\n    User nazare\n    ProxyJump alfa\n    ForwardAgent yes\n")),(0,r.kt)("p",null,"A continuaci\xf3n, se deshabilita la seguridad de los puertos desactivando en primer lugar los grupos de seguridad, en este caso por defecto:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"openstack server remove security group bravo default\n\nopenstack port set --disable-port-security port_bravo\nopenstack port set --disable-port-security 83a70185-8f09-4c01-951e-9e73736fee5b\n")),(0,r.kt)("p",null,"Para que funcione NAT es necesario activar el bit de forwarding en ",(0,r.kt)("strong",{parentName:"p"},"alfa"),"  descomentando la l\xednea ",(0,r.kt)("inlineCode",{parentName:"p"},"net.ipv4.ip_forward=1")," en el fichero ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/sysctl.conf")," y reiniciar el servicio o la m\xe1quina."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo sysctl -p\n")),(0,r.kt)("h3",{id:"instalaci\xf3n-de-los-contenedores"},"Instalaci\xf3n de los contenedores"),(0,r.kt)("p",null,"En maquina1 vamos a crear dos contenedores en un red interna, para ello:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Crea en m\xe1quina1 (alfa) un linux bridge llamado br-intra y asigna una direcci\xf3n IP est\xe1tica 192.168.0.1. Esta ser\xe1 la IP de m\xe1quina1 (alfa) conectada a este switch virtual y ser\xe1 la puerta de enlace de los contenedores.")),(0,r.kt)("p",null,"Para esto debemos editar el fichero ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/network/interfaces.d/50-cloud-init")," y a\xf1adir las siguientes l\xedneas:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"auto br-intra\niface br-intra inet static\n    address      192.168.0.1/24\n    bridge_ports none\n")),(0,r.kt)("p",null,"E instalar el paquete bridge-utils:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo apt install bridge-utils\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Instala LXC y crea dos contenedores con la distribuci\xf3n Ubuntu 20.04. Estos contenedores ser\xe1n la m\xe1quina3 (charlie) y la m\xe1quina4 (delta).")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Configura de forma permanente la regla SNAT para que los contenedores tengan acceso a internet.")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Conecta los contenedores al bridge br-intra y config\xfaralo de forma est\xe1tica con las siguientes direcciones: m\xe1quina3 (charlie) la 192.168.0.2 y m\xe1quina4 (delta) la 192.168.0.3.")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Para que la red de OpenStack funcione de forma adecuada las im\xe1genes que usamos tienen configurado la mtu (Unidad m\xe1xima de transferencia) a 1450 bytes. Tenemos que adecuar los contenedores a este tama\xf1o de trama. Para ello introduce en la configuraci\xf3n de los contenedores la l\xednea: lxc.net.0.mtu = 1450.")),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"Configura los contenedores para que se auto inicien al reiniciar la instancia.")),(0,r.kt)("ol",{start:7},(0,r.kt)("li",{parentName:"ol"},"Los contenedores tendr\xe1n caracter\xedsticas parecidas a las instancias anteriores:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Debes actualizar los paquetes de la distribuci\xf3n instalada.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"El dominio utilizado ser\xe1 del tipo tunombre.gonzalonazareno.org. Por lo tanto configura de manera adecuda el hostname y el FQDN.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Para acceder a los contenedores vamos a usar ssh.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Crea dos usuarios:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Un usuario sin privilegios. Se puede llamar como quieras (el nombre de usuario que usaste en las instancias) y acceder\xe1s a los contenedores usando tu clave ssh privada.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Un usuario profesor, que puede utilizar sudo sin contrase\xf1a. Copia de las claves p\xfablicas de todos los profesores en los contenedores para que puedan acceder con el usuario profesor.")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Cambia la contrase\xf1a al usuario root."))),(0,r.kt)("p",null,"Para instalar LXC:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install lxc\n")),(0,r.kt)("p",null,"Para crear los contenedores:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo lxc-create -n charlie -t ubuntu -- -r focal -a amd64\nsudo lxc-create -n delta -t ubuntu -- -r focal -a amd64\n")),(0,r.kt)("p",null,"Para iniciar los contenedores se usa el comando:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"lxc-start {nombre del contenedor}\n")),(0,r.kt)("p",null,"Para conectarse se puede usar el comando de lxc (entrando como root) o por ssh (pudiendo entrar como el usuario que se haya creado con o sin privilegios):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"lxc-attach {nombre del contenedor}\nssh usuario@ip_contenedor \n")),(0,r.kt)("p",null,"Para poder auto iniciar los contenedores al reiniciar la instancia se edita el fichero ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/lib/lxc/{nombre del contenedor}/config")," y se a\xf1aden las siguientes l\xedneas:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"lxc.start.auto = 1\nlxc.start.delay = 5\n")),(0,r.kt)("p",null,"Lo siguiente ser\xe1 configurar la regla SNAT para que los contenedores tengan acceso a internet. Para esto, sera necesario a\xf1adir una entrada en los contenedores de tal forma que el env\xedo de paquetes se haga a trav\xe9s de la interfaz de red de la m\xe1quina1 (alfa). Para ello, se edita el fichero ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/network/interfaces.d/50-cloud-init")," y se a\xf1ade la siguiente l\xednea:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"post-up iptables -t nat -A POSTROUTING -s 192.168.0.0/24 -o ens3 -j MASQUERADE\n")),(0,r.kt)("p",null,"Para conectar los contenedores al bridge br-intra hay que editar el fichero ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/lib/lxc/{nombre del contenedor}/config")," y a\xf1adir:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"lxc.net.0.link = br-intra\n")),(0,r.kt)("p",null,"Y configuramos la ip de forma est\xe1tica dentro del contenedor editando el fichero ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/netplan/10-lxc.yaml")," y a\xf1adiendo:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Para el contenedor charlie:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"network:\n  ethernets:\n    eth0: \n     dhcp4: no\n     addresses:\n     - 192.168.0.2/24\n     gateway4: 192.168.0.1\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Para el contenedor delta:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"network:\n  ethernets:\n    eth0: \n     dhcp4: no\n     addresses:\n     - 192.168.0.3/24\n     gateway4: 192.168.0.1\n")),(0,r.kt)("p",null,"Para modificar la mtu de los contenedores se edita el fichero ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/lib/lxc/{nombre del contenedor}/config")," y se a\xf1ade:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"lxc.net.0.mtu = 1450\n")),(0,r.kt)("h2",{id:"entrega"},"Entrega"),(0,r.kt)("h3",{id:"1-las-instrucciones-para-crear-y-configurar-la-m\xe1quina1-alfa"},"1. Las instrucciones para crear y configurar la m\xe1quina1 (alfa)."),(0,r.kt)("p",null,"Primero creamos el volumen para la m\xe1quina ",(0,r.kt)("inlineCode",{parentName:"p"},"alfa"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'openstack volume create --size 30 \\\n--description "Volumen para la m\xe1quina alfa" \\\n--image "Debian 11 Bullseye" \\\n--availability-zone "nova" \\\n--bootable \\\nvolumen_alfa\n')),(0,r.kt)("p",null,"Desde l\xednea de comandos montamos el escenario mand\xe1ndole el fichero de configuraci\xf3n cloud-config.yaml:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},' openstack server create --volume volumen_alfa \\\n --flavor vol.medium \\\n --security-group default \\\n --key-name nazareth_local \\\n --network "red de nazaret.duran" \\\n --user-data cloud-config.yaml \\\n alfa\n')),(0,r.kt)("p",null,"Para conectarla a la red DMZ ",(0,r.kt)("inlineCode",{parentName:"p"},'"Red DMZ de nazaret.duran"')," usamos un puerto con la ip:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'openstack port create --network "Red DMZ de nazaret.duran" --fixed-ip ip-address=172.16.0.1 port_alfa\n\nopenstack server add port alfa port_alfa\n')),(0,r.kt)("p",null,"Para darle una ip flotante:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," openstack floating ip create ext-net\n openstack server add floating ip alfa {ip}\n")),(0,r.kt)("p",null,"Para facilitar la conexi\xf3n ssh se crea el fichero ",(0,r.kt)("inlineCode",{parentName:"p"},"config")," en la carpeta ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.ssh")," con la estructura:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," host alfa\n    HostName {ip}\n    User nazare\n")),(0,r.kt)("p",null,"Lo siguiente ser\xe1 deshabilitar la seguridad de los puertos en las dos interfaces de red para que funcione de manera adecuada el NAT, por lo que primero habr\xe1 que quitar los grupos de seguridad (en este caso ",(0,r.kt)("inlineCode",{parentName:"p"},"por defecto"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"openstack server remove security group alfa default\n\nopenstack port set --disable-port-security port_alfa\nopenstack port set --disable-port-security bd43cd96-b912-4276-a0f6-5bfc7ee0c0e9\n")),(0,r.kt)("p",null,"Por ultimo, nos conectamos a la m\xe1quina ",(0,r.kt)("inlineCode",{parentName:"p"},"alfa")," y configuramos de forma permanente la regla SNAT para que las m\xe1quinas de la Red DMZ tengan acceso a internet editando el fichero ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/network/interfaces.d/50-cloud-init.cfg"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"auto ens3\niface ens3 inet dhcp\n    mtu 1450\n    post-up ip r del default && ip r add default via 10.0.0.1\n    post-up iptables -t nat -A POSTROUTING -s 172.16.0.0/16 -o ens3 -j MASQUERADE\n    post-up iptables -t nat -A POSTROUTING -s 192.168.0.0/24 -o ens3 -j MASQUERADE\n")),(0,r.kt)("h3",{id:"2-el-fichero-cloud-configyaml-para-crear-la-m\xe1quina1-alfa"},"2. El fichero cloud-config.yaml para crear la m\xe1quina1 (alfa)."),(0,r.kt)("p",null,"El fichero cloud-config.yaml es el siguiente:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"#cloud-config\n\n# Actualizar los paquetes de la distribuci\xf3n\n\npackage_update: true\npackage_upgrade: true\n\n# hostname y FQDN\n\nhostname: alfa\nfqdn: alfa.gonzalonazareno.org\n\n# Crear usuarios\n\nusers:\n\n# Usuario sin privilegios\n\n  - name: nazare\n    sudo: ALL=(ALL) NOPASSWD:ALL\n    shell: /bin/bash\n    passwd: nazare\n    ssh_authorized_keys:\n      - ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQC73j7AidXdLgiu5wJw7YgJuvOHyb6U8c04MuQyehYnMknMR8mTnWZr20npVHJ8VHYHDy8RlgbkMMBFgeVCgXJ+Im3A6Efp6HC4yj2SM+73hr1EKCLdRPzCzdtDSUtkqU9k+x2RdF3T6qD6H4Cg/nT8Sg3Qenqds4XORfDWOvntxFja2D0OhZv1MLPUD9pEj+a8D4erfiPx/gKW/Rtu89une+uiwVgK60B5CxnC8XXnXmPO3NhrgyQhVgzQZ658cUbLooxQURVlo1gnOmcqX5h+svUKN1SDbzTyy7HKSk7bbLHEhk7qDh7jSzcf80GLU0li8vXc2to8NpC00EOQ9POPivESz23gMNY8ooDtNU3Ll/xYvhtvXrJNTbuBiuVLzuopMvrQi6LVsQEWmPJzBiJ2qt8JW1KRLcnWRL4AezbxAPXuRYVnYBS3it6L0J4AZjZg63BkIIrfU7GYzrKb+z5mqUgDJhIZ4d5av+OAxPSSzNeVnyWEnWrI0k9kf9qmqhU= nazare@ThousandSunny\n\n# Usuario profesor\n\n  - name: profesor\n    sudo: ALL=(ALL) NOPASSWD:ALL\n    shell: /bin/bash\n    passwd: profesor\n    ssh_authorized_keys:\n      - ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCmjoVIoZCx4QFXvljqozXGqxxlSvO7V2aizqyPgMfGqnyl0J9YXo6zrcWYwyWMnMdRdwYZgHqfiiFCUn2QDm6ZuzC4Lcx0K3ZwO2lgL4XaATykVLneHR1ib6RNroFcClN69cxWsdwQW6dpjpiBDXf8m6/qxVP3EHwUTsP8XaOV7WkcCAqfYAMvpWLISqYme6e+6ZGJUIPkDTxavu5JTagDLwY+py1WB53eoDWsG99gmvyit2O1Eo+jRWN+mgRHIxJTrFtLS6o4iWeshPZ6LvCZ/Pum12Oj4B4bjGSHzrKjHZgTwhVJ/LDq3v71/PP4zaI3gVB9ZalemSxqomgbTlnT jose@debian\n      - ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCfk9mRtOHM3T1KpmGi0KiN2uAM6CDXM3WFcm1wkzKXx7RaLtf9pX+KCuVqHdy/N/9d9wtH7iSmLFX/4gQKQVG00jHiGf3ABufWeIpjmHtT1WaI0+vV47fofEIjDDfSZPlI3p5/c7tefHsIAK6GbQn31yepAcFYy9ZfqAh8H/Y5eLpf3egPZn9Czsvx+lm0I8Q+e/HSayRaiAPUukF57N2nnw7yhPZCHSZJqFbXyK3fVQ/UQVBeNS2ayp0my8X9sIBZnNkcYHFLIWBqJYdnu1ZFhnbu3yy94jmJdmELy3+54hqiwFEfjZAjUYSl8eGPixOfdTgc8ObbHbkHyIrQ91Kz rafa@eco\n\n# Contrase\xf1a al usuario root\n\nchpasswd:\n   list: |\n       root:root\n   expire: False\n")),(0,r.kt)("h3",{id:"3-la-ip-flotante-de-la-m\xe1quina1-alfa"},"3. La Ip flotante de la m\xe1quina1 (alfa)."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"172.22.200.255")),(0,r.kt)("h3",{id:"4-prueba-de-funcionamiento-de-qu\xe9-los-fqdn-est\xe1n-bien-configurados"},"4. Prueba de funcionamiento de qu\xe9 los FQDN est\xe1n bien configurados."),(0,r.kt)("h3",{id:"5-prueba-de-funcionamiento-de-que-se-pueden-acceder-a-todas-las-m\xe1quinas-por-ssh"},"5. Prueba de funcionamiento de que se pueden acceder a todas las m\xe1quinas por ssh."),(0,r.kt)("h3",{id:"6-prueba-de-funcionamiento-de-que-las-m\xe1quinas-tienen-acceso-a-internet"},"6. Prueba de funcionamiento de que las m\xe1quinas tienen acceso a internet."))}d.isMDXComponent=!0}}]);