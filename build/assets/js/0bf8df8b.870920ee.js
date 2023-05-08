"use strict";(self.webpackChunkotter_shell=self.webpackChunkotter_shell||[]).push([[3930],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>f});var n=t(67294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),d=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},c=function(e){var a=d(e.components);return n.createElement(l.Provider,{value:a},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(t),u=o,f=p["".concat(l,".").concat(u)]||p[u]||m[u]||i;return t?n.createElement(f,r(r({ref:a},c),{},{components:t})):n.createElement(f,r({ref:a},c))}));function f(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=u;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s[p]="string"==typeof e?e:o,r[1]=s;for(var d=2;d<i;d++)r[d]=t[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},71767:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=t(87462),o=(t(67294),t(3905));const i={sidebar_position:30},r="Inform\xe1tica Forense",s={unversionedId:"Tasks/forense",id:"Tasks/forense",title:"Inform\xe1tica Forense",description:"La inform\xe1tica forense es el conjunto de t\xe9cnicas que nos permite obtener la m\xe1xima informaci\xf3n posible tras un incidente o delito inform\xe1tico.",source:"@site/docs/Tasks/forense.md",sourceDirName:"Tasks",slug:"/Tasks/forense",permalink:"/docs/Tasks/forense",draft:!1,editUrl:"https://github.com/belennazareth/ottershell/blob/main/docs/Tasks/forense.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"Servidores Web, Base de Datos y DNS en nuestros escenario de OpenStack",permalink:"/docs/Tasks/dns_escenario_openstack"},next:{title:"Instalaci\xf3n de phpmyadmin",permalink:"/docs/Tasks/phpmyadmin"}},l={},d=[{value:"Apartado A - M\xe1quina Windows",id:"apartado-a---m\xe1quina-windows",level:2},{value:"Volcado de memoria",id:"volcado-de-memoria",level:3},{value:"Por comandos",id:"por-comandos",level:3},{value:"Volcado de disco",id:"volcado-de-disco",level:3},{value:"Volcado de registro",id:"volcado-de-registro",level:3},{value:"Analizando el Registro de Windows",id:"analizando-el-registro-de-windows",level:3},{value:"Con Aplicaciones de terceros",id:"con-aplicaciones-de-terceros",level:3},{value:"Sobre la imagen del disco",id:"sobre-la-imagen-del-disco",level:3},{value:"Apartado B - M\xe1quina Linux",id:"apartado-b---m\xe1quina-linux",level:2}],c={toc:d},p="wrapper";function m(e){let{components:a,...i}=e;return(0,o.kt)(p,(0,n.Z)({},c,i,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"inform\xe1tica-forense"},"Inform\xe1tica Forense"),(0,o.kt)("p",null,"La inform\xe1tica forense es el conjunto de t\xe9cnicas que nos permite obtener la m\xe1xima informaci\xf3n posible tras un incidente o delito inform\xe1tico."),(0,o.kt)("p",null,"En esta pr\xe1ctica, realizar\xe1s la fase de toma de evidencias y an\xe1lisis de las mismas sobre una m\xe1quina Linux y otra Windows. Supondremos que pillamos al delincuente in fraganti y las m\xe1quinas se encontraban encendidas. Opcionalmente, pod\xe9is realizar el an\xe1lisis de un dispositivo Android."),(0,o.kt)("p",null,"Sobre cada una de las m\xe1quinas debes realizar un volcado de memoria y otro de disco duro, tomando las medidas necesarias para certificar posteriormente la cadena de custodia."),(0,o.kt)("h2",{id:"apartado-a---m\xe1quina-windows"},"Apartado A - M\xe1quina Windows"),(0,o.kt)("h3",{id:"volcado-de-memoria"},"Volcado de memoria"),(0,o.kt)("p",null,"Para esto tenemos una m\xe1quina Linux con Volatility instalado y una m\xe1quina Windows con el fichero de volcado de memoria. Para realizar el volcado de memoria descargamos FTK Imager en la m\xe1quina windows y hacemos una captura de la memoria. Una vez hecho esto, copiamos el fichero de volcado de memoria a la m\xe1quina Linux y lo analizamos con Volatility.\nAs\xed se ver\xeda el proceso de volcado de memoria con FTK Imager:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"forense",src:t(42258).Z,width:"1044",height:"892"})),(0,o.kt)("h3",{id:"por-comandos"},"Por comandos"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Procesos en ejecuci\xf3n."),(0,o.kt)("p",{parentName:"li"},'python3 vol.py -f "/home/usuario/memdump.mem" windows.pslist'))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"forense",src:t(17927).Z,width:"1211",height:"1005"})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Servicios en ejecuci\xf3n."),(0,o.kt)("p",{parentName:"li"},'python3 vol.py -f "/home/usuario/memdump.mem" windows.getservicesids'))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"forense",src:t(3255).Z,width:"1035",height:"1002"})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Puertos abiertos."),(0,o.kt)("p",{parentName:"li"},"python3 vol.py -f /home/usuario/memdump.mem windows.netscan\no\npython3 vol.py -f /home/usuario/memdump.mem windows.netstat"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"forense",src:t(7768).Z,width:"1315",height:"1014"}),"\n",(0,o.kt)("img",{alt:"forense",src:t(49570).Z,width:"1328",height:"946"})),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Conexiones establecidas por la m\xe1quina."),(0,o.kt)("p",{parentName:"li"},"python3 vol.py -f /home/usuario/memdump.mem windows.netscan")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Sesiones de usuario establecidas remotamente."),(0,o.kt)("p",{parentName:"li"},"python3 vol.py -f /home/usuario/memdump.mem windows.sessions")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Ficheros transferidos recientemente por NetBios.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Contenido de la cach\xe9 DNS.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Variables de entorno."))),(0,o.kt)("h3",{id:"volcado-de-disco"},"Volcado de disco"),(0,o.kt)("p",null,"En la maquina windows usando la aplicaci\xf3n FTK Imager, hacemos una captura del disco duro:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"forense",src:t(25312).Z,width:"1044",height:"892"}),"\n",(0,o.kt)("img",{alt:"forense",src:t(52171).Z,width:"1044",height:"892"}),"\n",(0,o.kt)("img",{alt:"forense",src:t(60433).Z,width:"1044",height:"892"}),"\n",(0,o.kt)("img",{alt:"forense",src:t(53218).Z,width:"1044",height:"892"}),"\n",(0,o.kt)("img",{alt:"forense",src:t(82466).Z,width:"1044",height:"892"})),(0,o.kt)("h3",{id:"volcado-de-registro"},"Volcado de registro"),(0,o.kt)("h3",{id:"analizando-el-registro-de-windows"},"Analizando el Registro de Windows"),(0,o.kt)("ol",{start:9},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Dispositivos USB conectados")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Redes wifi utilizadas recientemente.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Configuraci\xf3n del firewall de nodo.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Programas que se ejecutan en el Inicio.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Asociaci\xf3n de extensiones de ficheros y aplicaciones.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Aplicaciones usadas recientemente.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Ficheros abiertos recientemente.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Software Instalado.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Contrase\xf1as guardadas.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Cuentas de Usuario"))),(0,o.kt)("h3",{id:"con-aplicaciones-de-terceros"},"Con Aplicaciones de terceros"),(0,o.kt)("ol",{start:19},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Historial de navegaci\xf3n y descargas. Cookies.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Vol\xfamenes cifrados"))),(0,o.kt)("h3",{id:"sobre-la-imagen-del-disco"},"Sobre la imagen del disco"),(0,o.kt)("ol",{start:21},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Archivos con extensi\xf3n cambiada.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Archivos eliminados.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Archivos Ocultos.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Archivos que contienen una cadena determinada.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"B\xfasqueda de im\xe1genes por ubicaci\xf3n.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"B\xfasqueda de archivos por autor."))),(0,o.kt)("h2",{id:"apartado-b---m\xe1quina-linux"},"Apartado B - M\xe1quina Linux"))}m.isMDXComponent=!0},49570:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/forenseSAD-10-cde958aa3cb0c2ad500cc900d185e48d.png"},17927:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/forenseSAD-2-aaf54ef416262ec55b2b3a7cfb17262e.png"},25312:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/forenseSAD-3-2fda0caaaa2e148073e1d55d4ebc96d4.png"},52171:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/forenseSAD-4-0f051789198c692ab3b48789fa06edda.png"},60433:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/forenseSAD-5-d78679f6f55fc8b0201432f2e8c807d8.png"},53218:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/forenseSAD-6-6e61bb7a87c1aa98e0e2342406328fbb.png"},3255:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/forenseSAD-7-d185fa1e6e6c54594c84e12a02781c8c.png"},7768:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/forenseSAD-8-8e8f83d96d5b12fe47f9f8f6a205c111.png"},82466:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/forenseSAD-9-e8368a04fbd753733ba9e1421bf4e254.png"},42258:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/forenseSAD-8b60f2fae893c36de43d7fd6aced82e5.png"}}]);