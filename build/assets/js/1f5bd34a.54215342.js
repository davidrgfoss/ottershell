"use strict";(self.webpackChunkotter_shell=self.webpackChunkotter_shell||[]).push([[1385],{3905:(e,o,n)=>{n.d(o,{Zo:()=>d,kt:()=>b});var a=n(67294);function t(e,o,n){return o in e?Object.defineProperty(e,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[o]=n,e}function r(e,o){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);o&&(a=a.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{};o%2?r(Object(n),!0).forEach((function(o){t(e,o,n[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))}))}return e}function s(e,o){if(null==e)return{};var n,a,t=function(e,o){if(null==e)return{};var n,a,t={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],o.indexOf(n)>=0||(t[n]=e[n]);return t}(e,o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],o.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var i=a.createContext({}),u=function(e){var o=a.useContext(i),n=o;return e&&(n="function"==typeof e?e(o):l(l({},o),e)),n},d=function(e){var o=u(e.components);return a.createElement(i.Provider,{value:o},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var o=e.children;return a.createElement(a.Fragment,{},o)}},p=a.forwardRef((function(e,o){var n=e.components,t=e.mdxType,r=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=u(n),p=t,b=c["".concat(i,".").concat(p)]||c[p]||m[p]||r;return n?a.createElement(b,l(l({ref:o},d),{},{components:n})):a.createElement(b,l({ref:o},d))}));function b(e,o){var n=arguments,t=o&&o.mdxType;if("string"==typeof e||t){var r=n.length,l=new Array(r);l[0]=p;var s={};for(var i in o)hasOwnProperty.call(o,i)&&(s[i]=o[i]);s.originalType=e,s[c]="string"==typeof e?e:t,l[1]=s;for(var u=2;u<r;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},39858:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var a=n(87462),t=(n(67294),n(3905));const r={sidebar_position:7},l="Ejercicios de manejo de m\xf3dulos",s={unversionedId:"Tasks/manejo_modulos",id:"Tasks/manejo_modulos",title:"Ejercicios de manejo de m\xf3dulos",description:"1. Comprueba los m\xf3dulos cargados en tu equipo.",source:"@site/docs/Tasks/manejo_modulos.md",sourceDirName:"Tasks",slug:"/Tasks/manejo_modulos",permalink:"/docs/Tasks/manejo_modulos",draft:!1,editUrl:"https://github.com/belennazareth/ottershell/blob/main/docs/Tasks/manejo_modulos.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Clonaci\xf3n e instant\xe1neas de m\xe1quinas virtuales",permalink:"/docs/Tasks/clonacion_instantanea"},next:{title:"Instalaci\xf3n de un servidor LAMP",permalink:"/docs/Tasks/servidor_lamp"}},i={},u=[{value:"1. Comprueba los m\xf3dulos cargados en tu equipo.",id:"1-comprueba-los-m\xf3dulos-cargados-en-tu-equipo",level:2},{value:"2. Cuenta el n\xfamero de m\xf3dulos disponibles en el n\xfacleo que est\xe1s usando.",id:"2-cuenta-el-n\xfamero-de-m\xf3dulos-disponibles-en-el-n\xfacleo-que-est\xe1s-usando",level:2},{value:"3. Conecta un l\xe1piz USB y observa la salida de la instrucci\xf3n sudo dmesg.",id:"3-conecta-un-l\xe1piz-usb-y-observa-la-salida-de-la-instrucci\xf3n-sudo-dmesg",level:2},{value:"4. Elimina el m\xf3dulo correspondiente a alg\xfan dispotivo no esencial y comprueba qu\xe9 ocurre. Vuelve a cargarlo.",id:"4-elimina-el-m\xf3dulo-correspondiente-a-alg\xfan-dispotivo-no-esencial-y-comprueba-qu\xe9-ocurre-vuelve-a-cargarlo",level:2},{value:"5. Selecciona un m\xf3dulo que est\xe9 en uso en tu equipo y configura el arranque para que no se cargue autom\xe1ticamente.",id:"5-selecciona-un-m\xf3dulo-que-est\xe9-en-uso-en-tu-equipo-y-configura-el-arranque-para-que-no-se-cargue-autom\xe1ticamente",level:2},{value:"6. Carga el m\xf3dulo loop, obt\xe9n informaci\xf3n de qu\xe9 es y para qu\xe9 sirve. Lista el contenido de /sys/modules/loop/parameters y configura el equipo para que se puedan cargar como m\xe1ximo 12 dispositvos loop la pr\xf3xima vez que se arranque.",id:"6-carga-el-m\xf3dulo-loop-obt\xe9n-informaci\xf3n-de-qu\xe9-es-y-para-qu\xe9-sirve-lista-el-contenido-de-sysmodulesloopparameters-y-configura-el-equipo-para-que-se-puedan-cargar-como-m\xe1ximo-12-dispositvos-loop-la-pr\xf3xima-vez-que-se-arranque",level:2}],d={toc:u},c="wrapper";function m(e){let{components:o,...r}=e;return(0,t.kt)(c,(0,a.Z)({},d,r,{components:o,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"ejercicios-de-manejo-de-m\xf3dulos"},"Ejercicios de manejo de m\xf3dulos"),(0,t.kt)("h2",{id:"1-comprueba-los-m\xf3dulos-cargados-en-tu-equipo"},"1. Comprueba los m\xf3dulos cargados en tu equipo."),(0,t.kt)("p",null,"Los m\xf3dulos del kernel se almacenan en el fichero ",(0,t.kt)("inlineCode",{parentName:"p"},"/lib/modules/[versi\xf3n]")," con la terminaci\xf3n ",(0,t.kt)("inlineCode",{parentName:"p"},".ko")," (kernel object), se pueden ver con el comando ",(0,t.kt)("inlineCode",{parentName:"p"}," ls -R /lib/modules/$(uname -r)"),", donde ",(0,t.kt)("inlineCode",{parentName:"p"},"uname -r")," hace la funci\xf3n de variable que nos muestra la versi\xf3n de kernel de nuestro sistema.\nSin embargo, para comprobar los m\xf3dulos ",(0,t.kt)("strong",{parentName:"p"},"cargados")," en el equipo podemos visualizar el fichero ",(0,t.kt)("inlineCode",{parentName:"p"},"/proc/modules")," (fichero que usa ",(0,t.kt)("inlineCode",{parentName:"p"},"lsmod"),") donde aparece la informaci\xf3n dividida en tres columnas:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Module: Muestra los nombres de los m\xf3dulos cargados."),(0,t.kt)("li",{parentName:"ul"},"Size: Muestra el tama\xf1o que ocupa cada m\xf3dulo."),(0,t.kt)("li",{parentName:"ul"},"Used: Indica si se est\xe1 usando un m\xf3dulo por otros m\xf3dulos.")),(0,t.kt)("p",null,"Adem\xe1s, podemos usar el comando ",(0,t.kt)("inlineCode",{parentName:"p"},"lsmod")," para ver todos los m\xf3dulos desde l\xednea de comando:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"\nnazare@ThousandSunny:~$ lsmod\n\nModule                  Size  Used by\nctr                    16384  3\nccm                    20480  9\nrfcomm                 94208  4\nxt_CHECKSUM            16384  1\nxt_MASQUERADE          20480  3\nnft_chain_nat          16384  2\nnf_nat                 57344  2 nft_chain_nat,xt_MASQUERADE\nbridge                258048  0\nstp                    16384  1 bridge\nllc                    16384  2 bridge,stp\ncmac                   16384  3\nalgif_hash             16384  1\nalgif_skcipher         16384  1\naf_alg                 32768  6 algif_hash,algif_skcipher\nbnep                   28672  2\nbtusb                  65536  0\nbtrtl                  28672  1 btusb\nbtbcm                  20480  1 btusb\nbtintel                32768  1 btusb\nbluetooth             749568  33 btrtl,btintel,btbcm,bnep,btusb,rfcomm\n...\n")),(0,t.kt)("p",null,"Se puede filtrar la informaci\xf3n usando el comando ",(0,t.kt)("inlineCode",{parentName:"p"},"grep"),", con esto se consigue de forma m\xe1s eficiente un resultado m\xe1s espec\xedfico:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},'\nnazare@ThousandSunny:~$ lsmod | grep "bluetooth"\nbluetooth             749568  33 btrtl,btintel,btbcm,bnep,btusb,rfcomm\necdh_generic           16384  2 bluetooth\ncrc16                  16384  1 bluetooth\nlibaes                 16384  3 bluetooth,aesni_intel,aes_generic\nrfkill                 32768  8 bluetooth,ideapad_laptop,cfg80211\n\n')),(0,t.kt)("h2",{id:"2-cuenta-el-n\xfamero-de-m\xf3dulos-disponibles-en-el-n\xfacleo-que-est\xe1s-usando"},"2. Cuenta el n\xfamero de m\xf3dulos disponibles en el n\xfacleo que est\xe1s usando."),(0,t.kt)("p",null,"Para contar el n\xfamero de m\xf3dulos disponibles se usa el comando:"),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"find  /lib/modules/$(uname -r) -type f -iname '*.ko' | wc -l")),(0,t.kt)("p",null,"Con esto se ejecuta una b\xfasqueda con ",(0,t.kt)("inlineCode",{parentName:"p"},"find")," filtada por todos los terminados en ",(0,t.kt)("inlineCode",{parentName:"p"},".ko")," cont\xe1ndolo con ",(0,t.kt)("inlineCode",{parentName:"p"},"wc"),"."),(0,t.kt)("h2",{id:"3-conecta-un-l\xe1piz-usb-y-observa-la-salida-de-la-instrucci\xf3n-sudo-dmesg"},"3. Conecta un l\xe1piz USB y observa la salida de la instrucci\xf3n sudo dmesg."),(0,t.kt)("p",null,"Con el comando ",(0,t.kt)("inlineCode",{parentName:"p"},"sudo dmesg")," y el par\xe1metro ",(0,t.kt)("inlineCode",{parentName:"p"},"-w")," se puede ver de forma din\xe1mica los mensajes de diagn\xf3stico, como podemos ver en la siguiente imagen aparece la detecci\xf3n de un USB y toda la informaci\xf3n recopilada de las caracter\xedsticas del dispositivo USB:"),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"Term",src:n(87043).Z,width:"946",height:"141"})),(0,t.kt)("h2",{id:"4-elimina-el-m\xf3dulo-correspondiente-a-alg\xfan-dispotivo-no-esencial-y-comprueba-qu\xe9-ocurre-vuelve-a-cargarlo"},"4. Elimina el m\xf3dulo correspondiente a alg\xfan dispotivo no esencial y comprueba qu\xe9 ocurre. Vuelve a cargarlo."),(0,t.kt)("p",null,"En mi caso he elegido el m\xf3dulo correspondiente al wifi, para poder saber la etiqueta del m\xf3dulo he realizado un ",(0,t.kt)("inlineCode",{parentName:"p"},"dmesg -wH")," obteniendo:"),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"Term",src:n(36813).Z,width:"1082",height:"366"})),(0,t.kt)("p",null,"Para deshabilitar el m\xf3dulo wifi:"),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"sudo modprobe -r rtw88_8822ce")),(0,t.kt)("p",null,"Como podemos comprobar con el comando ",(0,t.kt)("inlineCode",{parentName:"p"},"dmesg")," se ha realizado correctamente:"),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"Term",src:n(85756).Z,width:"1041",height:"99"})),(0,t.kt)("p",null,"Y aqu\xed lo comprobamos gr\xe1ficamente:"),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"Term",src:n(34954).Z,width:"330",height:"307"})),(0,t.kt)("p",null,"A continuaci\xf3n, para volver a activarlo:"),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"sudo modprobe rtw88_8822ce")),(0,t.kt)("p",null,"La salida de ",(0,t.kt)("inlineCode",{parentName:"p"},"dmesg"),":"),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"Term",src:n(30090).Z,width:"1102",height:"394"})),(0,t.kt)("p",null,"Activaci\xf3n y conexi\xf3n a la red wifi:"),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"Term",src:n(8011).Z,width:"878",height:"188"})),(0,t.kt)("p",null,"Comprobaci\xf3n en el entorno gr\xe1fico:"),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"Term",src:n(20944).Z,width:"342",height:"364"})),(0,t.kt)("h2",{id:"5-selecciona-un-m\xf3dulo-que-est\xe9-en-uso-en-tu-equipo-y-configura-el-arranque-para-que-no-se-cargue-autom\xe1ticamente"},"5. Selecciona un m\xf3dulo que est\xe9 en uso en tu equipo y configura el arranque para que no se cargue autom\xe1ticamente."),(0,t.kt)("h2",{id:"6-carga-el-m\xf3dulo-loop-obt\xe9n-informaci\xf3n-de-qu\xe9-es-y-para-qu\xe9-sirve-lista-el-contenido-de-sysmodulesloopparameters-y-configura-el-equipo-para-que-se-puedan-cargar-como-m\xe1ximo-12-dispositvos-loop-la-pr\xf3xima-vez-que-se-arranque"},"6. Carga el m\xf3dulo loop, obt\xe9n informaci\xf3n de qu\xe9 es y para qu\xe9 sirve. Lista el contenido de /sys/modules/loop/parameters y configura el equipo para que se puedan cargar como m\xe1ximo 12 dispositvos loop la pr\xf3xima vez que se arranque."))}m.isMDXComponent=!0},36813:(e,o,n)=>{n.d(o,{Z:()=>a});const a=n.p+"assets/images/modulosASO-2-95690a439f001ae76bde58ec92fe601a.png"},85756:(e,o,n)=>{n.d(o,{Z:()=>a});const a=n.p+"assets/images/modulosASO-3-554d1ae06f47301d1cf931dbf2ee5fb4.png"},34954:(e,o,n)=>{n.d(o,{Z:()=>a});const a=n.p+"assets/images/modulosASO-4-d65897d3a66b9061362458931f0b43bb.png"},30090:(e,o,n)=>{n.d(o,{Z:()=>a});const a=n.p+"assets/images/modulosASO-5-090a3919f91016e9c890d2844df14e5f.png"},8011:(e,o,n)=>{n.d(o,{Z:()=>a});const a=n.p+"assets/images/modulosASO-6-431697c21174556624b81735e8b56d4f.png"},20944:(e,o,n)=>{n.d(o,{Z:()=>a});const a=n.p+"assets/images/modulosASO-7-7f095299347a788f76c9564c6395ac0d.png"},87043:(e,o,n)=>{n.d(o,{Z:()=>a});const a=n.p+"assets/images/modulosASO-ace84f4f04028d4815ece83e0eeac091.png"}}]);