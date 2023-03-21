"use strict";(self.webpackChunkotter_shell=self.webpackChunkotter_shell||[]).push([[3343],{3905:(e,a,r)=>{r.d(a,{Zo:()=>u,kt:()=>m});var o=r(7294);function i(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function n(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?n(Object(r),!0).forEach((function(a){i(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function t(e,a){if(null==e)return{};var r,o,i=function(e,a){if(null==e)return{};var r,o,i={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],a.indexOf(r)>=0||(i[r]=e[r]);return i}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=o.createContext({}),c=function(e){var a=o.useContext(l),r=a;return e&&(r="function"==typeof e?e(a):s(s({},a),e)),r},u=function(e){var a=c(e.components);return o.createElement(l.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return o.createElement(o.Fragment,{},a)}},p=o.forwardRef((function(e,a){var r=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,u=t(e,["components","mdxType","originalType","parentName"]),p=c(r),m=i,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||n;return r?o.createElement(f,s(s({ref:a},u),{},{components:r})):o.createElement(f,s({ref:a},u))}));function m(e,a){var r=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var n=r.length,s=new Array(n);s[0]=p;var t={};for(var l in a)hasOwnProperty.call(a,l)&&(t[l]=a[l]);t.originalType=e,t.mdxType="string"==typeof e?e:i,s[1]=t;for(var c=2;c<n;c++)s[c]=r[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},7813:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>n,metadata:()=>t,toc:()=>c});var o=r(7462),i=(r(7294),r(3905));const n={sidebar_position:17},s="Criptograf\xeda II: Integridad, firmas y autenticaci\xf3n",t={unversionedId:"Tasks/criptografia2",id:"Tasks/criptografia2",title:"Criptograf\xeda II: Integridad, firmas y autenticaci\xf3n",description:"Tarea 1: Firmas electr\xf3nicas",source:"@site/docs/Tasks/criptografia2.md",sourceDirName:"Tasks",slug:"/Tasks/criptografia2",permalink:"/docs/Tasks/criptografia2",draft:!1,editUrl:"https://github.com/belennazareth/ottershell/blob/main/docs/Tasks/criptografia2.md",tags:[],version:"current",sidebarPosition:17,frontMatter:{sidebar_position:17},sidebar:"tutorialSidebar",previous:{title:"Instalaci\xf3n/migraci\xf3n de aplicaciones web PHP",permalink:"/docs/Tasks/migracion_php"},next:{title:"Montaje NFS mediante systemd",permalink:"/docs/Tasks/nfs_systemd"}},l={},c=[{value:"Tarea 1: Firmas electr\xf3nicas",id:"tarea-1-firmas-electr\xf3nicas",level:2},{value:"1. Manda un documento y la firma electr\xf3nica del mismo a un compa\xf1ero. Verifica la firma que tu has recibido.",id:"1-manda-un-documento-y-la-firma-electr\xf3nica-del-mismo-a-un-compa\xf1ero-verifica-la-firma-que-tu-has-recibido",level:3},{value:"2. \xbfQu\xe9 significa el mensaje que aparece en el momento de verificar la firma?",id:"2-qu\xe9-significa-el-mensaje-que-aparece-en-el-momento-de-verificar-la-firma",level:3},{value:"3. Vamos a crear un anillo de confianza entre los miembros de nuestra clase, para ello.",id:"3-vamos-a-crear-un-anillo-de-confianza-entre-los-miembros-de-nuestra-clase-para-ello",level:3},{value:"4. Muestra las firmas que tiene tu clave p\xfablica.",id:"4-muestra-las-firmas-que-tiene-tu-clave-p\xfablica",level:3},{value:"5. Comprueba que ya puedes verificar sin \u201cproblemas\u201d una firma recibida por una persona en la que conf\xedas.",id:"5-comprueba-que-ya-puedes-verificar-sin-problemas-una-firma-recibida-por-una-persona-en-la-que-conf\xedas",level:3},{value:"6. Comprueba que puedes verificar con confianza una firma de una persona en las que no conf\xedas, pero sin embargo si conf\xeda otra persona en la que tu tienes confianza total.",id:"6-comprueba-que-puedes-verificar-con-confianza-una-firma-de-una-persona-en-las-que-no-conf\xedas-pero-sin-embargo-si-conf\xeda-otra-persona-en-la-que-tu-tienes-confianza-total",level:3},{value:"Tarea 2: Correo seguro con evolution/thunderbird",id:"tarea-2-correo-seguro-con-evolutionthunderbird",level:2},{value:"1. Configura el cliente de correo evolution con tu cuenta de correo habitual",id:"1-configura-el-cliente-de-correo-evolution-con-tu-cuenta-de-correo-habitual",level:3},{value:"2. A\xf1ade a la cuenta las opciones de seguridad para poder enviar correos firmados con tu clave privada o cifrar los mensajes para otros destinatarios",id:"2-a\xf1ade-a-la-cuenta-las-opciones-de-seguridad-para-poder-enviar-correos-firmados-con-tu-clave-privada-o-cifrar-los-mensajes-para-otros-destinatarios",level:3},{value:"3. Env\xeda y recibe varios mensajes con tus compa\xf1eros y comprueba el funcionamiento adecuado de GPG",id:"3-env\xeda-y-recibe-varios-mensajes-con-tus-compa\xf1eros-y-comprueba-el-funcionamiento-adecuado-de-gpg",level:3},{value:"4. (A\xd1ADIDA) Env\xedame por correo electr\xf3nico un mensaje firmado que solo pueda descifrar yo.",id:"4-a\xf1adida-env\xedame-por-correo-electr\xf3nico-un-mensaje-firmado-que-solo-pueda-descifrar-yo",level:3},{value:"Tarea 3: Integridad de ficheros",id:"tarea-3-integridad-de-ficheros",level:2},{value:"1. Para validar el contenido de la imagen CD, solo aseg\xfarese de usar la herramienta apropiada para sumas de verificaci\xf3n. Para cada versi\xf3n publicada existen archivos de suma de comprobaci\xf3n con algoritmos fuertes (SHA256 y SHA512); deber\xeda usar las herramientas sha256sum o sha512sum para trabajar con ellos.",id:"1-para-validar-el-contenido-de-la-imagen-cd-solo-aseg\xfarese-de-usar-la-herramienta-apropiada-para-sumas-de-verificaci\xf3n-para-cada-versi\xf3n-publicada-existen-archivos-de-suma-de-comprobaci\xf3n-con-algoritmos-fuertes-sha256-y-sha512-deber\xeda-usar-las-herramientas-sha256sum-o-sha512sum-para-trabajar-con-ellos",level:3},{value:"2. Verifica que el contenido del hash que has utilizado no ha sido manipulado, usando la firma digital que encontrar\xe1s en el repositorio. Puedes encontrar una gu\xeda para realizarlo en este art\xedculo: How to verify an authenticity of downloaded Debian ISO images",id:"2-verifica-que-el-contenido-del-hash-que-has-utilizado-no-ha-sido-manipulado-usando-la-firma-digital-que-encontrar\xe1s-en-el-repositorio-puedes-encontrar-una-gu\xeda-para-realizarlo-en-este-art\xedculo-how-to-verify-an-authenticity-of-downloaded-debian-iso-images",level:3},{value:"Tarea 4: Integridad y autenticidad (apt secure)",id:"tarea-4-integridad-y-autenticidad-apt-secure",level:2},{value:"1. \xbfQu\xe9 software utiliza apt secure para realizar la criptograf\xeda asim\xe9trica?",id:"1-qu\xe9-software-utiliza-apt-secure-para-realizar-la-criptograf\xeda-asim\xe9trica",level:3},{value:"2. \xbfPara que sirve el comando apt-key? \xbfQu\xe9 muestra el comando apt-key list?",id:"2-para-que-sirve-el-comando-apt-key-qu\xe9-muestra-el-comando-apt-key-list",level:3},{value:"3. En que fichero se guarda el anillo de claves que guarda la herramienta apt-key?",id:"3-en-que-fichero-se-guarda-el-anillo-de-claves-que-guarda-la-herramienta-apt-key",level:3},{value:"4. \xbfQu\xe9 contiene el archivo Release de un repositorio de paquetes?. \xbfY el archivo Release.gpg?. Puedes ver estos archivos en el repositorio http://ftp.debian.org/debian/dists/Debian10.1/. Estos archivos se descargan cuando hacemos un apt update.",id:"4-qu\xe9-contiene-el-archivo-release-de-un-repositorio-de-paquetes-y-el-archivo-releasegpg-puedes-ver-estos-archivos-en-el-repositorio-httpftpdebianorgdebiandistsdebian101-estos-archivos-se-descargan-cuando-hacemos-un-apt-update",level:3},{value:"5. Explica el proceso por el cual el sistema nos asegura que los ficheros que estamos descargando son leg\xedtimos.",id:"5-explica-el-proceso-por-el-cual-el-sistema-nos-asegura-que-los-ficheros-que-estamos-descargando-son-leg\xedtimos",level:3},{value:"6. A\xf1ade de forma correcta el repositorio de virtualbox a\xf1adiendo la clave p\xfablica de virtualbox como se indica en la documentaci\xf3n.",id:"6-a\xf1ade-de-forma-correcta-el-repositorio-de-virtualbox-a\xf1adiendo-la-clave-p\xfablica-de-virtualbox-como-se-indica-en-la-documentaci\xf3n",level:3},{value:"Tarea 5: Autentificaci\xf3n: ejemplo SSH",id:"tarea-5-autentificaci\xf3n-ejemplo-ssh",level:2},{value:"1. Explica los pasos que se producen entre el cliente y el servidor para que el protocolo cifre la informaci\xf3n que se transmite? \xbfPara qu\xe9 se utiliza la criptograf\xeda sim\xe9trica? \xbfY la asim\xe9trica?",id:"1-explica-los-pasos-que-se-producen-entre-el-cliente-y-el-servidor-para-que-el-protocolo-cifre-la-informaci\xf3n-que-se-transmite-para-qu\xe9-se-utiliza-la-criptograf\xeda-sim\xe9trica-y-la-asim\xe9trica",level:3},{value:"2. Explica los dos m\xe9todos principales de autentificaci\xf3n: por contrase\xf1a y utilizando un par de claves p\xfablicas y privadas.",id:"2-explica-los-dos-m\xe9todos-principales-de-autentificaci\xf3n-por-contrase\xf1a-y-utilizando-un-par-de-claves-p\xfablicas-y-privadas",level:3},{value:"3. En el cliente para que sirve el contenido que se guarda en el fichero ~/.ssh/know_hosts?",id:"3-en-el-cliente-para-que-sirve-el-contenido-que-se-guarda-en-el-fichero-sshknow_hosts",level:3},{value:"4. \xbfQu\xe9 significa este mensaje que aparece la primera vez que nos conectamos a un servidor?",id:"4-qu\xe9-significa-este-mensaje-que-aparece-la-primera-vez-que-nos-conectamos-a-un-servidor",level:3},{value:"5. En ocasiones cuando estamos trabajando en el cloud, y reutilizamos una ip flotante nos aparece este mensaje:",id:"5-en-ocasiones-cuando-estamos-trabajando-en-el-cloud-y-reutilizamos-una-ip-flotante-nos-aparece-este-mensaje",level:3},{value:"6. \xbfQu\xe9 guardamos y para qu\xe9 sirve el fichero en el servidor ~/.ssh/authorized_keys?",id:"6-qu\xe9-guardamos-y-para-qu\xe9-sirve-el-fichero-en-el-servidor-sshauthorized_keys",level:3},{value:"Notas",id:"notas",level:2},{value:"1. A\xf1adid vuestra clave p\xfablica en la wiki de redmine en el a\xf1o correcto (Claves p\xfablicas PGP 2022-2023) en lugar de a la p\xe1gina que viene en el enunciado.",id:"1-a\xf1adid-vuestra-clave-p\xfablica-en-la-wiki-de-redmine-en-el-a\xf1o-correcto-claves-p\xfablicas-pgp-2022-2023-en-lugar-de-a-la-p\xe1gina-que-viene-en-el-enunciado",level:3},{value:"2. A\xf1adid a la tarea 2 un \xfaltimo punto consistente en enviarme por correo electr\xf3nico un mensaje firmado por vosotros y que solo pueda descifrar yo.",id:"2-a\xf1adid-a-la-tarea-2-un-\xfaltimo-punto-consistente-en-enviarme-por-correo-electr\xf3nico-un-mensaje-firmado-por-vosotros-y-que-solo-pueda-descifrar-yo",level:3}],u={toc:c};function d(e){let{components:a,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},u,n,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"criptograf\xeda-ii-integridad-firmas-y-autenticaci\xf3n"},"Criptograf\xeda II: Integridad, firmas y autenticaci\xf3n"),(0,i.kt)("h2",{id:"tarea-1-firmas-electr\xf3nicas"},"Tarea 1: Firmas electr\xf3nicas"),(0,i.kt)("h3",{id:"1-manda-un-documento-y-la-firma-electr\xf3nica-del-mismo-a-un-compa\xf1ero-verifica-la-firma-que-tu-has-recibido"},"1. Manda un documento y la firma electr\xf3nica del mismo a un compa\xf1ero. Verifica la firma que tu has recibido."),(0,i.kt)("p",null,"Primero creamos el documento, en este caso un fichero de texto:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'echo "Poner en un cuenco la harina, la levadura, los huevos, la yema, la leche, la vainilla y la sal.\n\nAmasar muy bien, hasta obtener una masa pegajosa, dejarla reposar unos treinta minutos, tiempo en que habr\xe1 subido m\xe1s o menos el doble.\n\nA\xf1adimos la mantequilla a temperatura ambiente y el az\xfacar, mezclar muy bien, la masa se har\xe1 el\xe1stica y costara amasarla.\n\nToda esta operaci\xf3n de amasado lo podemos hacer con una amasadora industrial que nos facilite la tarea.\n\nPoner la masa en una manga con boquilla ancha, o utilizar una bolsa para congelar a la que se le corta con una tijera una esquina del tama\xf1o que nos convenga.\n\nAhora con la gofrera caliente (200\xba-250\xba), poner una cantidad adecuada en el centro de cada molde y espolvorear con az\xfacar.\n\nCerrar la Gofrera y dejar cocinar unos minutos (El punto \xf3ptimo se consigue cuando la masa dora pero sin llegar a quemarse)\n\n\u0669(\u256c\u0298\u76ca\u0298\u256c)\u06f6" > secreto_nazareth.txt\n')),(0,i.kt)("p",null,"Y ahora se crea la firma d\xe1ndole un nombre y asign\xe1ndole el fichero para mandarlo a los compa\xf1eros:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"gpg --output firma_nazareth.sig --detach-sig secreto_nazareth.txt \n")),(0,i.kt)("p",null,"Verificamos la firma recibida:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"gpg --verify firmarober.sig documento_rober.txt\n")),(0,i.kt)("p",null,"Obteniendo de salida:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'nazare@ThousandSunny \ue0b0 ~/Escritorio/SAD/cripto2$ gpg --verify firmarober.sig documento_rober.txt\n\ngpg: Firmado el vie 09 dic 2022 10:47:47 CET\ngpg:                usando RSA clave F06DF10387FDF4D70C904778564EF4B761565E40\ngpg: Firma correcta de "Roberto Rodr\xedguez M\xe1rquez <robertorodriguezmarquez98@gmail.com>" [desconocido]\ngpg: ATENCI\xd3N: \xa1Esta clave no est\xe1 certificada por una firma de confianza!\ngpg:          No hay indicios de que la firma pertenezca al propietario.\nHuellas dactilares de la clave primaria: F06D F103 87FD F4D7 0C90  4778 564E F4B7 6156 5E40\n')),(0,i.kt)("h3",{id:"2-qu\xe9-significa-el-mensaje-que-aparece-en-el-momento-de-verificar-la-firma"},"2. \xbfQu\xe9 significa el mensaje que aparece en el momento de verificar la firma?"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},' gpg: Firma correcta de "Pepe D <josedom24@gmail.com>" [desconocido]\n gpg: ATENCI\xd3N: \xa1Esta clave no est\xe1 certificada por una firma de confianza!\n gpg:          No hay indicios de que la firma pertenezca al propietario.\n Huellas dactilares de la clave primaria: E8DD 5DA9 3B88 F08A DA1D  26BF 5141 3DDB 0C99 55FC\n')),(0,i.kt)("p",null,"Significa que el usuario no tiene nuestra firma registrada/firmada dej\xe1ndola como una firma sin confianza, aunque sabemos quien es el usuario."),(0,i.kt)("h3",{id:"3-vamos-a-crear-un-anillo-de-confianza-entre-los-miembros-de-nuestra-clase-para-ello"},"3. Vamos a crear un anillo de confianza entre los miembros de nuestra clase, para ello."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Tu clave p\xfablica debe estar en un servidor de claves"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Escribe tu fingerprint en un papel y d\xe1rselo a tu compa\xf1ero, para que puede descargarse tu clave p\xfablica."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Te debes bajar al menos tres claves p\xfablicas de compa\xf1eros. Firma estas claves."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Tu te debes asegurar que tu clave p\xfablica es firmada por al menos tres compa\xf1eros de la clase."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Una vez que firmes una clave se la tendr\xe1s que devolver a su due\xf1o, para que otra persona se la firme."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Cuando tengas las tres firmas sube la clave al servidor de claves y rellena tus datos en la tabla Claves p\xfablicas PGP 2020-2021"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Asegurate que te vuelves a bajar las claves p\xfablicas de tus compa\xf1eros que tengan las tres firmas.")))),(0,i.kt)("p",null,"Primero subimos la clave p\xfablica al servidor de claves de ubuntu ",(0,i.kt)("inlineCode",{parentName:"p"},"keyserver.ubuntu.com"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"gpg --keyserver keyserver.ubuntu.com --send-keys 522E1EE9CC010A467AA2318919CFB634F516F12A\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"crip",src:r(130).Z,width:"924",height:"362"})),(0,i.kt)("p",null,"Lo siguiente ser\xe1 firmar las claves de los compa\xf1eros, para ello primero descargamos las claves de los compa\xf1eros:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"gpg --keyserver keyserver.ubuntu.com --recv-keys {fingerprint}\n")),(0,i.kt)("p",null,"Para firmarlas usamos el comando ",(0,i.kt)("inlineCode",{parentName:"p"},"gpg --sign-key"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"gpg --sign-key {fingerprint}\n")),(0,i.kt)("h3",{id:"4-muestra-las-firmas-que-tiene-tu-clave-p\xfablica"},"4. Muestra las firmas que tiene tu clave p\xfablica."),(0,i.kt)("h3",{id:"5-comprueba-que-ya-puedes-verificar-sin-problemas-una-firma-recibida-por-una-persona-en-la-que-conf\xedas"},"5. Comprueba que ya puedes verificar sin \u201cproblemas\u201d una firma recibida por una persona en la que conf\xedas."),(0,i.kt)("h3",{id:"6-comprueba-que-puedes-verificar-con-confianza-una-firma-de-una-persona-en-las-que-no-conf\xedas-pero-sin-embargo-si-conf\xeda-otra-persona-en-la-que-tu-tienes-confianza-total"},"6. Comprueba que puedes verificar con confianza una firma de una persona en las que no conf\xedas, pero sin embargo si conf\xeda otra persona en la que tu tienes confianza total."),(0,i.kt)("h2",{id:"tarea-2-correo-seguro-con-evolutionthunderbird"},"Tarea 2: Correo seguro con evolution/thunderbird"),(0,i.kt)("h3",{id:"1-configura-el-cliente-de-correo-evolution-con-tu-cuenta-de-correo-habitual"},"1. Configura el cliente de correo evolution con tu cuenta de correo habitual"),(0,i.kt)("h3",{id:"2-a\xf1ade-a-la-cuenta-las-opciones-de-seguridad-para-poder-enviar-correos-firmados-con-tu-clave-privada-o-cifrar-los-mensajes-para-otros-destinatarios"},"2. A\xf1ade a la cuenta las opciones de seguridad para poder enviar correos firmados con tu clave privada o cifrar los mensajes para otros destinatarios"),(0,i.kt)("h3",{id:"3-env\xeda-y-recibe-varios-mensajes-con-tus-compa\xf1eros-y-comprueba-el-funcionamiento-adecuado-de-gpg"},"3. Env\xeda y recibe varios mensajes con tus compa\xf1eros y comprueba el funcionamiento adecuado de GPG"),(0,i.kt)("h3",{id:"4-a\xf1adida-env\xedame-por-correo-electr\xf3nico-un-mensaje-firmado-que-solo-pueda-descifrar-yo"},"4. (A\xd1ADIDA) Env\xedame por correo electr\xf3nico un mensaje firmado que solo pueda descifrar yo."),(0,i.kt)("h2",{id:"tarea-3-integridad-de-ficheros"},"Tarea 3: Integridad de ficheros"),(0,i.kt)("h3",{id:"1-para-validar-el-contenido-de-la-imagen-cd-solo-aseg\xfarese-de-usar-la-herramienta-apropiada-para-sumas-de-verificaci\xf3n-para-cada-versi\xf3n-publicada-existen-archivos-de-suma-de-comprobaci\xf3n-con-algoritmos-fuertes-sha256-y-sha512-deber\xeda-usar-las-herramientas-sha256sum-o-sha512sum-para-trabajar-con-ellos"},"1. Para validar el contenido de la imagen CD, solo aseg\xfarese de usar la herramienta apropiada para sumas de verificaci\xf3n. Para cada versi\xf3n publicada existen archivos de suma de comprobaci\xf3n con algoritmos fuertes (SHA256 y SHA512); deber\xeda usar las herramientas sha256sum o sha512sum para trabajar con ellos."),(0,i.kt)("h3",{id:"2-verifica-que-el-contenido-del-hash-que-has-utilizado-no-ha-sido-manipulado-usando-la-firma-digital-que-encontrar\xe1s-en-el-repositorio-puedes-encontrar-una-gu\xeda-para-realizarlo-en-este-art\xedculo-how-to-verify-an-authenticity-of-downloaded-debian-iso-images"},"2. Verifica que el contenido del hash que has utilizado no ha sido manipulado, usando la firma digital que encontrar\xe1s en el repositorio. Puedes encontrar una gu\xeda para realizarlo en este art\xedculo: ",(0,i.kt)("a",{parentName:"h3",href:"https://linuxconfig.org/how-to-verify-an-authenticity-of-downloaded-debian-iso-images"},"How to verify an authenticity of downloaded Debian ISO images")),(0,i.kt)("h2",{id:"tarea-4-integridad-y-autenticidad-apt-secure"},"Tarea 4: Integridad y autenticidad (apt secure)"),(0,i.kt)("p",null,"Busca informaci\xf3n sobre apt secure y responde las siguientes preguntas:"),(0,i.kt)("h3",{id:"1-qu\xe9-software-utiliza-apt-secure-para-realizar-la-criptograf\xeda-asim\xe9trica"},"1. \xbfQu\xe9 software utiliza apt secure para realizar la criptograf\xeda asim\xe9trica?"),(0,i.kt)("h3",{id:"2-para-que-sirve-el-comando-apt-key-qu\xe9-muestra-el-comando-apt-key-list"},"2. \xbfPara que sirve el comando apt-key? \xbfQu\xe9 muestra el comando apt-key list?"),(0,i.kt)("h3",{id:"3-en-que-fichero-se-guarda-el-anillo-de-claves-que-guarda-la-herramienta-apt-key"},"3. En que fichero se guarda el anillo de claves que guarda la herramienta apt-key?"),(0,i.kt)("h3",{id:"4-qu\xe9-contiene-el-archivo-release-de-un-repositorio-de-paquetes-y-el-archivo-releasegpg-puedes-ver-estos-archivos-en-el-repositorio-httpftpdebianorgdebiandistsdebian101-estos-archivos-se-descargan-cuando-hacemos-un-apt-update"},"4. \xbfQu\xe9 contiene el archivo Release de un repositorio de paquetes?. \xbfY el archivo Release.gpg?. Puedes ver estos archivos en el repositorio ",(0,i.kt)("a",{parentName:"h3",href:"http://ftp.debian.org/debian/dists/Debian10.1/"},"http://ftp.debian.org/debian/dists/Debian10.1/"),". Estos archivos se descargan cuando hacemos un apt update."),(0,i.kt)("h3",{id:"5-explica-el-proceso-por-el-cual-el-sistema-nos-asegura-que-los-ficheros-que-estamos-descargando-son-leg\xedtimos"},"5. Explica el proceso por el cual el sistema nos asegura que los ficheros que estamos descargando son leg\xedtimos."),(0,i.kt)("h3",{id:"6-a\xf1ade-de-forma-correcta-el-repositorio-de-virtualbox-a\xf1adiendo-la-clave-p\xfablica-de-virtualbox-como-se-indica-en-la-documentaci\xf3n"},"6. A\xf1ade de forma correcta el repositorio de virtualbox a\xf1adiendo la clave p\xfablica de virtualbox como se indica en la documentaci\xf3n."),(0,i.kt)("h2",{id:"tarea-5-autentificaci\xf3n-ejemplo-ssh"},"Tarea 5: Autentificaci\xf3n: ejemplo SSH"),(0,i.kt)("h3",{id:"1-explica-los-pasos-que-se-producen-entre-el-cliente-y-el-servidor-para-que-el-protocolo-cifre-la-informaci\xf3n-que-se-transmite-para-qu\xe9-se-utiliza-la-criptograf\xeda-sim\xe9trica-y-la-asim\xe9trica"},"1. Explica los pasos que se producen entre el cliente y el servidor para que el protocolo cifre la informaci\xf3n que se transmite? \xbfPara qu\xe9 se utiliza la criptograf\xeda sim\xe9trica? \xbfY la asim\xe9trica?"),(0,i.kt)("h3",{id:"2-explica-los-dos-m\xe9todos-principales-de-autentificaci\xf3n-por-contrase\xf1a-y-utilizando-un-par-de-claves-p\xfablicas-y-privadas"},"2. Explica los dos m\xe9todos principales de autentificaci\xf3n: por contrase\xf1a y utilizando un par de claves p\xfablicas y privadas."),(0,i.kt)("h3",{id:"3-en-el-cliente-para-que-sirve-el-contenido-que-se-guarda-en-el-fichero-sshknow_hosts"},"3. En el cliente para que sirve el contenido que se guarda en el fichero ~/.ssh/know_hosts?"),(0,i.kt)("h3",{id:"4-qu\xe9-significa-este-mensaje-que-aparece-la-primera-vez-que-nos-conectamos-a-un-servidor"},"4. \xbfQu\xe9 significa este mensaje que aparece la primera vez que nos conectamos a un servidor?"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"}," $ ssh debian@172.22.200.74\n The authenticity of host '172.22.200.74 (172.22.200.74)' can't be established.\n ECDSA key fingerprint is SHA256:7ZoNZPCbQTnDso1meVSNoKszn38ZwUI4i6saebbfL4M.\n Are you sure you want to continue connecting (yes/no)? \n")),(0,i.kt)("h3",{id:"5-en-ocasiones-cuando-estamos-trabajando-en-el-cloud-y-reutilizamos-una-ip-flotante-nos-aparece-este-mensaje"},"5. En ocasiones cuando estamos trabajando en el cloud, y reutilizamos una ip flotante nos aparece este mensaje:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},' $ ssh debian@172.22.200.74\n @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n @    WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!     @\n @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n IT IS POSSIBLE THAT SOMEONE IS DOING SOMETHING NASTY!\n Someone could be eavesdropping on you right now (man-in-the-middle attack)!\n It is also possible that a host key has just been changed.\n The fingerprint for the ECDSA key sent by the remote host is\n SHA256:W05RrybmcnJxD3fbwJOgSNNWATkVftsQl7EzfeKJgNc.\n Please contact your system administrator.\n Add correct host key in /home/jose/.ssh/known_hosts to get rid of this message.\n Offending ECDSA key in /home/jose/.ssh/known_hosts:103\n   remove with:\n   ssh-keygen -f "/home/jose/.ssh/known_hosts" -R "172.22.200.74"\n ECDSA host key for 172.22.200.74 has changed and you have requested strict checking.\n')),(0,i.kt)("h3",{id:"6-qu\xe9-guardamos-y-para-qu\xe9-sirve-el-fichero-en-el-servidor-sshauthorized_keys"},"6. \xbfQu\xe9 guardamos y para qu\xe9 sirve el fichero en el servidor ~/.ssh/authorized_keys?"),(0,i.kt)("h2",{id:"notas"},"Notas"),(0,i.kt)("p",null,"Dos detalles:"),(0,i.kt)("h3",{id:"1-a\xf1adid-vuestra-clave-p\xfablica-en-la-wiki-de-redmine-en-el-a\xf1o-correcto-claves-p\xfablicas-pgp-2022-2023-en-lugar-de-a-la-p\xe1gina-que-viene-en-el-enunciado"},"1. A\xf1adid vuestra clave p\xfablica en la wiki de redmine en el a\xf1o correcto (Claves p\xfablicas PGP 2022-2023) en lugar de a la p\xe1gina que viene en el enunciado."),(0,i.kt)("h3",{id:"2-a\xf1adid-a-la-tarea-2-un-\xfaltimo-punto-consistente-en-enviarme-por-correo-electr\xf3nico-un-mensaje-firmado-por-vosotros-y-que-solo-pueda-descifrar-yo"},"2. A\xf1adid a la tarea 2 un \xfaltimo punto consistente en enviarme por correo electr\xf3nico un mensaje firmado por vosotros y que solo pueda descifrar yo."))}d.isMDXComponent=!0},130:(e,a,r)=>{r.d(a,{Z:()=>o});const o=r.p+"assets/images/cripto2SAD-c250ae68a77428a34188ec79deeb97da.png"}}]);