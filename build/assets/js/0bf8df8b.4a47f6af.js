"use strict";(self.webpackChunkotter_shell=self.webpackChunkotter_shell||[]).push([[3930],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>k});var n=t(67294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),d=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},c=function(e){var a=d(e.components);return n.createElement(s.Provider,{value:a},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(t),u=o,k=p["".concat(s,".").concat(u)]||p[u]||m[u]||r;return t?n.createElement(k,i(i({ref:a},c),{},{components:t})):n.createElement(k,i({ref:a},c))}));function k(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=u;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var d=2;d<r;d++)i[d]=t[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},71767:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var n=t(87462),o=(t(67294),t(3905));const r={sidebar_position:30},i="Inform\xe1tica Forense",l={unversionedId:"Tasks/forense",id:"Tasks/forense",title:"Inform\xe1tica Forense",description:"La inform\xe1tica forense es el conjunto de t\xe9cnicas que nos permite obtener la m\xe1xima informaci\xf3n posible tras un incidente o delito inform\xe1tico.",source:"@site/docs/Tasks/forense.md",sourceDirName:"Tasks",slug:"/Tasks/forense",permalink:"/docs/Tasks/forense",draft:!1,editUrl:"https://github.com/belennazareth/ottershell/blob/main/docs/Tasks/forense.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"Servidores Web, Base de Datos y DNS en nuestros escenario de OpenStack",permalink:"/docs/Tasks/dns_escenario_openstack"},next:{title:"Instalaci\xf3n de phpmyadmin",permalink:"/docs/Tasks/phpmyadmin"}},s={},d=[{value:"Apartado A - M\xe1quina Windows",id:"apartado-a---m\xe1quina-windows",level:2},{value:"Por comandos",id:"por-comandos",level:3},{value:"Analizando el Registro de Windows",id:"analizando-el-registro-de-windows",level:3},{value:"Con Aplicaciones de terceros",id:"con-aplicaciones-de-terceros",level:3},{value:"Sobre la imagen del disco",id:"sobre-la-imagen-del-disco",level:3},{value:"Volcado de memoria",id:"volcado-de-memoria",level:3},{value:"Volcado de disco",id:"volcado-de-disco",level:3},{value:"Volcado de registro",id:"volcado-de-registro",level:3},{value:"Apartado B - M\xe1quina Linux",id:"apartado-b---m\xe1quina-linux",level:2}],c={toc:d},p="wrapper";function m(e){let{components:a,...t}=e;return(0,o.kt)(p,(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"inform\xe1tica-forense"},"Inform\xe1tica Forense"),(0,o.kt)("p",null,"La inform\xe1tica forense es el conjunto de t\xe9cnicas que nos permite obtener la m\xe1xima informaci\xf3n posible tras un incidente o delito inform\xe1tico."),(0,o.kt)("p",null,"En esta pr\xe1ctica, realizar\xe1s la fase de toma de evidencias y an\xe1lisis de las mismas sobre una m\xe1quina Linux y otra Windows. Supondremos que pillamos al delincuente in fraganti y las m\xe1quinas se encontraban encendidas. Opcionalmente, pod\xe9is realizar el an\xe1lisis de un dispositivo Android."),(0,o.kt)("p",null,"Sobre cada una de las m\xe1quinas debes realizar un volcado de memoria y otro de disco duro, tomando las medidas necesarias para certificar posteriormente la cadena de custodia."),(0,o.kt)("h2",{id:"apartado-a---m\xe1quina-windows"},"Apartado A - M\xe1quina Windows"),(0,o.kt)("h3",{id:"por-comandos"},"Por comandos"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Procesos en ejecuci\xf3n.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Servicios en ejecuci\xf3n.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Puertos abiertos.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Conexiones establecidas por la m\xe1quina.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Sesiones de usuario establecidas remotamente.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Ficheros transferidos recientemente por NetBios.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Contenido de la cach\xe9 DNS.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Variables de entorno."))),(0,o.kt)("h3",{id:"analizando-el-registro-de-windows"},"Analizando el Registro de Windows"),(0,o.kt)("ol",{start:9},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Dispositivos USB conectados")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Redes wifi utilizadas recientemente.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Configuraci\xf3n del firewall de nodo.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Programas que se ejecutan en el Inicio.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Asociaci\xf3n de extensiones de ficheros y aplicaciones.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Aplicaciones usadas recientemente.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Ficheros abiertos recientemente.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Software Instalado.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Contrase\xf1as guardadas.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Cuentas de Usuario"))),(0,o.kt)("h3",{id:"con-aplicaciones-de-terceros"},"Con Aplicaciones de terceros"),(0,o.kt)("ol",{start:19},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Historial de navegaci\xf3n y descargas. Cookies.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Vol\xfamenes cifrados"))),(0,o.kt)("h3",{id:"sobre-la-imagen-del-disco"},"Sobre la imagen del disco"),(0,o.kt)("ol",{start:21},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Archivos con extensi\xf3n cambiada.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Archivos eliminados.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Archivos Ocultos.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Archivos que contienen una cadena determinada.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"B\xfasqueda de im\xe1genes por ubicaci\xf3n.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"B\xfasqueda de archivos por autor."))),(0,o.kt)("h3",{id:"volcado-de-memoria"},"Volcado de memoria"),(0,o.kt)("h3",{id:"volcado-de-disco"},"Volcado de disco"),(0,o.kt)("h3",{id:"volcado-de-registro"},"Volcado de registro"),(0,o.kt)("h2",{id:"apartado-b---m\xe1quina-linux"},"Apartado B - M\xe1quina Linux"))}m.isMDXComponent=!0}}]);