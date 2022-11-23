"use strict";(self.webpackChunkotter_shell=self.webpackChunkotter_shell||[]).push([[9101],{3905:(e,n,a)=>{a.d(n,{Zo:()=>p,kt:()=>m});var r=a(7294);function o(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){o(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function t(e,n){if(null==e)return{};var a,r,o=function(e,n){if(null==e)return{};var a,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=r.createContext({}),s=function(e){var n=r.useContext(c),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},p=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var a=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=t(e,["components","mdxType","originalType","parentName"]),u=s(a),m=o,k=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return a?r.createElement(k,l(l({ref:n},p),{},{components:a})):r.createElement(k,l({ref:n},p))}));function m(e,n){var a=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=a.length,l=new Array(i);l[0]=u;var t={};for(var c in n)hasOwnProperty.call(n,c)&&(t[c]=n[c]);t.originalType=e,t.mdxType="string"==typeof e?e:o,l[1]=t;for(var s=2;s<i;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1019:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>t,toc:()=>s});var r=a(7462),o=(a(7294),a(3905));const i={sidebar_position:14},l="Compilaci\xf3n de un Kernel linux a medida",t={unversionedId:"Tasks/compilacion_kernel",id:"Tasks/compilacion_kernel",title:"Compilaci\xf3n de un Kernel linux a medida",description:"Para empezar a compilar el kernel debemos crear un directorio donde trabajaremos, y adem\xe1s, saber cual es la versi\xf3n de nuestra m\xe1quina.",source:"@site/docs/Tasks/compilacion_kernel.md",sourceDirName:"Tasks",slug:"/Tasks/compilacion_kernel",permalink:"/docs/Tasks/compilacion_kernel",draft:!1,editUrl:"https://github.com/belennazareth/ottershell/blob/main/docs/Tasks/compilacion_kernel.md",tags:[],version:"current",sidebarPosition:14,frontMatter:{sidebar_position:14},sidebar:"tutorialSidebar",previous:{title:"Configuraci\xf3n del cliente VPN",permalink:"/docs/Tasks/cliente_vpn"},next:{title:"Instalaci\xf3n de nginx con PHP",permalink:"/docs/Tasks/nginx_php"}},c={},s=[{value:"Ficheros .config",id:"ficheros-config",level:3}],p={toc:s};function d(e){let{components:n,...i}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,i,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"compilaci\xf3n-de-un-kernel-linux-a-medida"},"Compilaci\xf3n de un Kernel linux a medida"),(0,o.kt)("p",null,"Para empezar a compilar el kernel debemos crear un directorio donde trabajaremos, y adem\xe1s, saber cual es la versi\xf3n de nuestra m\xe1quina.\nCreamos el directorio con ",(0,o.kt)("inlineCode",{parentName:"p"},"mkdir kernel")," y comprobamos la versi\xf3n con ",(0,o.kt)("inlineCode",{parentName:"p"},"uname -r"),"."),(0,o.kt)("p",null,"Es necesario instalar la paqueter\xeda que contiene el compilador en C, make y herramientas que nos permitan modificar la configuraci\xf3n, para ello instalamos:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"apt install linux-source build-essentials qtbase5-dev\n")),(0,o.kt)("p",null,"Una vez lo tenemos todo, dentro del directorio ",(0,o.kt)("inlineCode",{parentName:"p"},"kernel"),", se descomprime el fichero ",(0,o.kt)("inlineCode",{parentName:"p"},".tar.xz")," del kernel descargado de la siguiente ",(0,o.kt)("a",{parentName:"p",href:"https://www.kernel.org/"},"url"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"tar xf ~/Descargas/linux-6.0.9.tar.xz\n")),(0,o.kt)("p",null,"Listamos el contenido del directorio resultado de la compresi\xf3n:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"}," nazare@ThousandSunny \ue0b0 ~/kernel$ ls linux-6.0.9\n arch     CREDITS        fs        ipc      lib          mm       scripts   usr\n block    crypto         include   Kbuild   LICENSES     net      security  virt\n certs    Documentation  init      Kconfig  MAINTAINERS  README   sound\n COPYING  drivers        io_uring  kernel   Makefile     samples  tools\n")),(0,o.kt)("p",null,"Podemos comprobar con el comando ",(0,o.kt)("inlineCode",{parentName:"p"},"du -sh")," el tama\xf1o del directorio:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"}," nazare@ThousandSunny \ue0b0 ~/kernel$ du -sh linux-6.0.9 \n 1,4G   linux-6.0.9\n         \n")),(0,o.kt)("p",null,"Dentro del directorio podemos usar el comando ",(0,o.kt)("inlineCode",{parentName:"p"},"make help"),", este nos aportar\xe1 ayuda dando informaci\xf3n de las diferentes opciones que se pueden usar en la compilaci\xf3n."),(0,o.kt)("p",null,"Acto seguido realizamos ",(0,o.kt)("inlineCode",{parentName:"p"},"make oldconfig"),", el cual lee o compara el archivo de configuraci\xf3n antiguo. Este nos realizar\xe1 varias preguntas donde nos dice las opciones que hay por defecto y si queremos o no mantenerlas en el ",(0,o.kt)("strong",{parentName:"p"},".config"),"."),(0,o.kt)("p",null,"Despu\xe9s realizaremos ",(0,o.kt)("inlineCode",{parentName:"p"},"make localyesconfig"),", con esto solo configura los m\xf3dulos en uso en el momento de la creaci\xf3n del fichero de configuraci\xf3n convirtiendo los m\xf3dulos din\xe1micos en est\xe1ticos. Se pueden comprobar los componentes est\xe1ticos y din\xe1micos con los comandos: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"egrep '=y' .config | wc -l\n\negrep '=m' .config | wc -l\n")),(0,o.kt)("p",null,"En principio cuenta con:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"nazare@ThousandSunny \ue0b0 ~/kernel/linux-6.0.9$ egrep '=y' .config | wc -l\n1930\nnazare@ThousandSunny \ue0b0 ~/kernel/linux-6.0.9$ egrep '=m' .config | wc -l\n3\n")),(0,o.kt)("p",null,"Se realiza una primera compilaci\xf3n de prueba para asegurar su funcionamiento, con esto vemos en este caso la falta de un paquete:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},' \n nazare@ThousandSunny \ue0b0 ~/kernel/linux-6.0.9$ time make -j $(nproc) bindeb-pkg\n  SYNC    include/config/auto.conf.cmd\n  UPD     include/config/kernel.release\nsh ./scripts/package/mkdebian\ndpkg-buildpackage -r"fakeroot -u" -a$(cat debian/arch)  -b -nc -uc\ndpkg-buildpackage: informaci\xf3n: paquete fuente linux-upstream\ndpkg-buildpackage: informaci\xf3n: versi\xf3n de las fuentes 6.0.9-1\ndpkg-buildpackage: informaci\xf3n: distribuci\xf3n de las fuentes bullseye\ndpkg-buildpackage: informaci\xf3n: fuentes modificadas por nazare <nazare@ThousandSunny>\ndpkg-buildpackage: informaci\xf3n: arquitectura del sistema amd64\n dpkg-source --before-build .\ndpkg-checkbuilddeps: fallo: Unmet build dependencies: libelf-dev:native\ndpkg-buildpackage: aviso: Las dependencias y conflictos de construcci\xf3n no est\xe1n satisfechas, interrumpiendo\ndpkg-buildpackage: aviso: (Use la opci\xf3n \xab-d\xbb para anularlo.)\nmake[1]: *** [scripts/Makefile.package:83: bindeb-pkg] Error 3\nmake: *** [Makefile:1558: bindeb-pkg] Error 2\nmake -j $(nproc) bindeb-pkg  1,51s user 0,53s system 99% cpu 2,050 total\n\n')),(0,o.kt)("p",null,"Por lo que solo habr\xeda que instalarlo:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo apt install libelf-dev\n")),(0,o.kt)("p",null,"Lo siguiente ser\xe1 volver a ejecutar la compilaci\xf3n:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"time make -j $(nproc) bindeb-pkg\n")),(0,o.kt)("p",null,"Tras realizar la compilaci\xf3n aparecen en el directorio ",(0,o.kt)("inlineCode",{parentName:"p"},"kernel")," los ficheros ",(0,o.kt)("inlineCode",{parentName:"p"},".deb")," generados, para llevar un orden se edita el ",(0,o.kt)("strong",{parentName:"p"},"Makefile")," a\xf1adiendo ",(0,o.kt)("inlineCode",{parentName:"p"},"EXTRAVERSION = -v1\n"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Bash"},"nazare@ThousandSunny \ue0b0 ~/kernel$ ls -la\ntotal 24728\ndrwxr-xr-x  3 nazare nazare      259 nov 16 23:42 .\ndrwxr-xr-x 30 nazare nazare     4096 nov 17 00:20 ..\n-rw-r--r--  1 nazare nazare   203668 nov 16 23:09 1.config\ndrwxr-xr-x 26 nazare nazare     4096 nov 17 00:10 linux-6.0.9\n-rw-r--r--  1 nazare nazare  8561460 nov 16 23:42 linux-headers-6.0.9_6.0.9-1_amd64.deb\n-rw-r--r--  1 nazare nazare 15260368 nov 16 23:42 linux-image-6.0.9_6.0.9-1_amd64.deb\n-rw-r--r--  1 nazare nazare  1266496 nov 16 23:42 linux-libc-dev_6.0.9-1_amd64.deb\n-rw-r--r--  1 nazare nazare     5218 nov 16 23:42 linux-upstream_6.0.9-1_amd64.buildinfo\n-rw-r--r--  1 nazare nazare     1774 nov 16 23:42 linux-upstream_6.0.9-1_amd64.changes\n")),(0,o.kt)("p",null,"Siempre que queramos realizar la instalaci\xf3n se usar\xe1 el comando:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo dpkg -i linux-image...\n")),(0,o.kt)("p",null,"Y para desinstalar:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo dpkg -P linux-image...\n")),(0,o.kt)("p",null,"Hay que eliminarlo del GRUB ejecutando el comando ",(0,o.kt)("inlineCode",{parentName:"p"},"update-grub"),"."),(0,o.kt)("p",null,"Tras esta prueba se va a ir editando el fichero ",(0,o.kt)("strong",{parentName:"p"},".config"),", por lo que va a ser necesario mantener una copia del original la cual se ha guardado en el directorio ",(0,o.kt)("inlineCode",{parentName:"p"},"kernel"),".\nPara editar ",(0,o.kt)("strong",{parentName:"p"},".config")," se usa el comando ",(0,o.kt)("inlineCode",{parentName:"p"},"make xconfig")," con el que se nos abrir\xe1 una ventana como la siguiente donde podremos seleccionar los m\xf3dulos que queramos dejar est\xe1ticos (\u2713), din\xe1micos (\xb7) o directamente sin marcar que no se a\xf1adir\xe1n a la compilaci\xf3n:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Repo",src:a(1694).Z,width:"1437",height:"785"})),(0,o.kt)("p",null,"Se vuelven a comprobar los m\xf3dulos:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"nazare@ThousandSunny \ue0b0 ~/kernel/linux-6.0.9$ egrep '=y' .config | wc -l\n1865\nnazare@ThousandSunny \ue0b0 ~/kernel/linux-6.0.9$ egrep '=m' .config | wc -l\n26\n")),(0,o.kt)("p",null,"Una vez editado se realiza la compilaci\xf3n y la instalaci\xf3n del nuevo kernel, desde el GRUB seleccionamos el nuevo kernel (aunque por defecto se inicia en la primera opci\xf3n al encender la m\xe1quina). Al entrar, abrimos una terminal y se comprueba la ejecuci\xf3n del comando ",(0,o.kt)("inlineCode",{parentName:"p"},"lsmod"),",  la versi\xf3n con ",(0,o.kt)("inlineCode",{parentName:"p"},"uname -r")," y el funcionamiento de la red con un ",(0,o.kt)("inlineCode",{parentName:"p"},"ping"),":"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Repo",src:a(5200).Z,width:"980",height:"729"})),(0,o.kt)("p",null,"Volvemos a nuestro kernel y en caso de querer seguir reduciendo se vuelve a repetir el proceso. Hay que tener en cuenta que despues de cada compilaci\xf3n hay que realizar un ",(0,o.kt)("inlineCode",{parentName:"p"},"make clean"),"."),(0,o.kt)("p",null,"Comprobamos el tama\xf1o del fichero ",(0,o.kt)("inlineCode",{parentName:"p"},".deb"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"nazare@ThousandSunny \ue0b0 ~/kernel$ ls -lh | egrep linux-image-6.0.9-v2\n-rw-r--r--  1 nazare nazare  15M nov 17 02:08 linux-image-6.0.9-v2_6.0.9-v2-4_amd64.deb\n")),(0,o.kt)("h3",{id:"ficheros-config"},"Ficheros .config"),(0,o.kt)("p",null,"Pincha ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/belennazareth/2ASIR/tree/main/ASO/compilacion_kernel"},"aqu\xed")," para ver los ficheros ",(0,o.kt)("strong",{parentName:"p"},".config"),"."))}d.isMDXComponent=!0},1694:(e,n,a)=>{a.d(n,{Z:()=>r});const r=a.p+"assets/images/compkernelASO-2-7cd65eb141bd5872f1576893ee734aac.png"},5200:(e,n,a)=>{a.d(n,{Z:()=>r});const r=a.p+"assets/images/compkernelASO-4ef651844c1be8d632b3af1302747c0e.png"}}]);