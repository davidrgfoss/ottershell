"use strict";(self.webpackChunkotter_shell=self.webpackChunkotter_shell||[]).push([[9115],{3905:(e,a,n)=>{n.d(a,{Zo:()=>c,kt:()=>m});var t=n(7294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=t.createContext({}),u=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},c=function(e){var a=u(e.components);return t.createElement(s.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},p=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,k=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?t.createElement(k,o(o({ref:a},c),{},{components:n})):t.createElement(k,o({ref:a},c))}));function m(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2762:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var t=n(7462),r=(n(7294),n(3905));const i={sidebar_position:15},o="Escenario en OpenStack",l={unversionedId:"Tasks/escenario_openstack",id:"Tasks/escenario_openstack",title:"Escenario en OpenStack",description:"Procedimientos",source:"@site/docs/Tasks/escenario_openstack.md",sourceDirName:"Tasks",slug:"/Tasks/escenario_openstack",permalink:"/docs/Tasks/escenario_openstack",draft:!1,editUrl:"https://github.com/belennazareth/ottershell/blob/main/docs/Tasks/escenario_openstack.md",tags:[],version:"current",sidebarPosition:15,frontMatter:{sidebar_position:15},sidebar:"tutorialSidebar",previous:{title:"Cifrado asim\xe9trico con gpg y openssl",permalink:"/docs/Tasks/cifrado_asimetrico"},next:{title:"Interconexi\xf3n de Servidores de Bases de Datos",permalink:"/docs/Tasks/interconexion_bbdd"}},s={},u=[{value:"Procedimientos",id:"procedimientos",level:2},{value:"Instalaci\xf3n de las instancias de OpenStack",id:"instalaci\xf3n-de-las-instancias-de-openstack",level:3},{value:"Instalaci\xf3n de los contenedores",id:"instalaci\xf3n-de-los-contenedores",level:3},{value:"Entrega",id:"entrega",level:2},{value:"1. Las instrucciones para crear y configurar la m\xe1quina1 (alfa).",id:"1-las-instrucciones-para-crear-y-configurar-la-m\xe1quina1-alfa",level:3},{value:"2. El fichero cloud-config.yaml para crear la m\xe1quina1 (alfa).",id:"2-el-fichero-cloud-configyaml-para-crear-la-m\xe1quina1-alfa",level:3},{value:"3. La Ip flotante de la m\xe1quina1 (alfa).",id:"3-la-ip-flotante-de-la-m\xe1quina1-alfa",level:3},{value:"4. Prueba de funcionamiento de qu\xe9 los FQDN est\xe1n bien configurados.",id:"4-prueba-de-funcionamiento-de-qu\xe9-los-fqdn-est\xe1n-bien-configurados",level:3},{value:"5. Prueba de funcionamiento de que se pueden acceder a todas las m\xe1quinas por ssh.",id:"5-prueba-de-funcionamiento-de-que-se-pueden-acceder-a-todas-las-m\xe1quinas-por-ssh",level:3},{value:"6. Prueba de funcionamiento de que las m\xe1quinas tienen acceso a internet.",id:"6-prueba-de-funcionamiento-de-que-las-m\xe1quinas-tienen-acceso-a-internet",level:3}],c={toc:u};function d(e){let{components:a,...n}=e;return(0,r.kt)("wrapper",(0,t.Z)({},c,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"escenario-en-openstack"},"Escenario en OpenStack"),(0,r.kt)("h2",{id:"procedimientos"},"Procedimientos"),(0,r.kt)("p",null,"En esta tarea se va a crear el escenario de trabajo que se va a usar durante todo el curso, que va a constar inicialmente de 4 m\xe1quinas: 2 instancias en OpenStack y dos contenedores LXC que se ejecutar\xe1n en una de las instancias."),(0,r.kt)("p",null,"Para nombrar las m\xe1quinas se va a utilizar alfa, bravo, charlie y delta, que son las primeras letras de un alfabeto que naci\xf3 antes de la Primera Guerra Mundial en respuesta a los avances en la radio bidireccional compatible con la voz, para mejorar la comunicaci\xf3n en circuitos telef\xf3nicos de baja calidad y de larga distancia."),(0,r.kt)("p",null,"Adem\xe1s el dominio ser\xe1 un subdominio de la forma tunombre.gonzalonazareno.org. De esta forma tendremos:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"M\xe1quina 1: Instancia en OpenStack con Debian 11 Bullseye que se llama alfa.tunombre.gonzalonazareno.org.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"M\xe1quina 2: Instancia en OpenStack con Rocky Linux 9 que se llama bravo.tunombre.gonzalonazareno.org.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"M\xe1quina 3: Contenedor LXC con Ubuntu 20.04 que se llama charlie.tunombre.gonzalonazareno.org.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"M\xe1quina 4: Contenedor LXC con Ubuntu 20.04 que se llama delta.tunombre.gonzalonazareno.org."))),(0,r.kt)("p",null,"La creaci\xf3n y configuraci\xf3n (conexi\xf3n a las redes, creaci\xf3n de volumen, quitarle la seguridad alos puertos, \u2026) de la m\xe1quina1 (alfa) la debes hacer con OSC. Lo dem\xe1s lo puedes hacer con horizon."),(0,r.kt)("h3",{id:"instalaci\xf3n-de-las-instancias-de-openstack"},"Instalaci\xf3n de las instancias de OpenStack"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Crea una red interna que se llame Red DMZ de tu_usuario, con las siguientes caracter\xedsticas:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Direccionamiento: 172.16.0.0/16")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Con DHCP y DNS (192.168.202.2).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"La puerta de enlace de los dispositivos conectados a esta red ser\xe1 el 172.16.0.1."))),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Las dos instancias que vamos a crear se van a configurar con cloud-init de la siguiente manera:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Deben actualizar los paquetes de la distribuci\xf3n de la instancia.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"El dominio utilizado ser\xe1 del tipo tunombre.gonzalonazareno.org. Por lo tanto en la configuraci\xf3n con cloud-init habr\xe1 que indicar el hostname y el FQDN.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Se crear\xe1n dos usuarios:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Un usuario sin privilegios. Se puede llamar como quieras (pero el nombre ser\xe1 el mismo en todas las m\xe1quinas) y acceder\xe1s a las m\xe1quinas usando tu clave ssh privada.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Un usuario profesor, que puede utilizar sudo sin contrase\xf1a. Copia de las claves p\xfablicas de todos los profesores en las instancias para que puedan acceder con el usuario profesor.")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Cambia la contrase\xf1a al usuario root."))),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Creaci\xf3n de la m\xe1quina1 (alfa):")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Crea una instancia sobre un volumen de 30Gb, usando una imagen de Debian 11 Bullseye. Elige el sabor vol.medium. Y configural\xe1 con cloud-init como se ha indicado anteriormente.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Est\xe1 instancia estar\xe1 conectada a tu red interna. Asigna a la instancia una IP flotante."))),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Configuraci\xf3n de la m\xe1quina1 (alfa):")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Conecta la instancia a tu Red DMZ, as\xedgnale la direcci\xf3n 172.16.0.1 para que sea la puerta de enlace las m\xe1quinas conectadas a esta red.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Deshabilita la seguridad de los puertos en las dos interfaces de red para que funcione de manera adecuada el NAT.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Configura de forma permanente la regla SNAT para que las m\xe1quinas de la Red DMZ tengan acceso a internet."))),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Creaci\xf3n de la m\xe1quina2 (bravo):")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Est\xe1 instancia se conectar\xe1 a la red DMZ. Usando un puerto asigna a esta m\xe1quina la direcci\xf3n 172.16.0.200.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Crea una instancia sobre un vollumen de 30Gb, usando una imagen de Rocky Linux 9. Elige el sabor vol.normal. Y configural\xe1 con cloud-init como se ha indicado anteriormente.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Deshabilita la seguridad de los puertos en la interfaz de red para que funcione de manera adecuada el NAT.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Comprueba que tiene acceso a internet. Si no tiene acceso a internet, no se han actualizado los paquetes con cloud-init, hazlo posteriormente.."))),(0,r.kt)("h3",{id:"instalaci\xf3n-de-los-contenedores"},"Instalaci\xf3n de los contenedores"),(0,r.kt)("p",null,"En maquina1 vamos a crear dos contenedores en un red interna, para ello:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Crea en m\xe1quina1 (alfa) un linux bridge llamado br-intra y asigna una direcci\xf3n IP est\xe1tica 192.168.0.1. Esta ser\xe1 la IP de m\xe1quina1 (alfa) conectada a este switch virtual y ser\xe1 la puerta de enlace de los contenedores.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Instala LXC y crea dos contenedores con la distribuci\xf3n Ubuntu 20.04. Estos contenedores ser\xe1n la m\xe1quina3 (charlie) y la m\xe1quina4 (delta).")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Configura de forma permanente la regla SNAT para que los contenedores tengan acceso a internet.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Conecta los contenedores al bridge br-intra y config\xfaralo de forma est\xe1tica con las siguientes direcciones: m\xe1quina3 (charlie) la 192.168.0.2 y m\xe1quina4 (delta) la 192.168.0.3.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Para que la red de OpenStack funcione de forma adecuada las im\xe1genes que usamos tienen configurado la mtu (Unidad m\xe1xima de transferencia) a 1450 bytes. Tenemos que adecuar los contenedores a este tama\xf1o de trama. Para ello introduce en la configuraci\xf3n de los contenedores la l\xednea: lxc.net.0.mtu = 1450.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Configura los contenedores para que se auto inicien al reiniciar la instancia.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Los contenedores tendr\xe1n caracter\xedsticas parecidas a las instancias anteriormente:"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Debes actualizar los paquetes de la distribuci\xf3n instalada.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"El dominio utilizado ser\xe1 del tipo tunombre.gonzalonazareno.org. Por lo tanto configura de manera adecuda el hostname y el FQDN.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Para acceder a los contenedores vamos a usar ssh.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Crea dos usuarios:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Un usuario sin privilegios. Se puede llamar como quieras (el nombre de usuario que usaste en las instancias) y acceder\xe1s a los contenedores usando tu clave ssh privada.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Un usuario profesor, que puede utilizar sudo sin contrase\xf1a. Copia de las claves p\xfablicas de todos los profesores en los contenedores para que puedan acceder con el usuario profesor.")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Cambia la contrase\xf1a al usuario root."))),(0,r.kt)("h2",{id:"entrega"},"Entrega"),(0,r.kt)("h3",{id:"1-las-instrucciones-para-crear-y-configurar-la-m\xe1quina1-alfa"},"1. Las instrucciones para crear y configurar la m\xe1quina1 (alfa)."),(0,r.kt)("h3",{id:"2-el-fichero-cloud-configyaml-para-crear-la-m\xe1quina1-alfa"},"2. El fichero cloud-config.yaml para crear la m\xe1quina1 (alfa)."),(0,r.kt)("h3",{id:"3-la-ip-flotante-de-la-m\xe1quina1-alfa"},"3. La Ip flotante de la m\xe1quina1 (alfa)."),(0,r.kt)("h3",{id:"4-prueba-de-funcionamiento-de-qu\xe9-los-fqdn-est\xe1n-bien-configurados"},"4. Prueba de funcionamiento de qu\xe9 los FQDN est\xe1n bien configurados."),(0,r.kt)("h3",{id:"5-prueba-de-funcionamiento-de-que-se-pueden-acceder-a-todas-las-m\xe1quinas-por-ssh"},"5. Prueba de funcionamiento de que se pueden acceder a todas las m\xe1quinas por ssh."),(0,r.kt)("h3",{id:"6-prueba-de-funcionamiento-de-que-las-m\xe1quinas-tienen-acceso-a-internet"},"6. Prueba de funcionamiento de que las m\xe1quinas tienen acceso a internet."))}d.isMDXComponent=!0}}]);