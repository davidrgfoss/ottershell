"use strict";(self.webpackChunkotter_shell=self.webpackChunkotter_shell||[]).push([[6127],{3905:(e,a,n)=>{n.d(a,{Zo:()=>d,kt:()=>m});var o=n(67294);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,o,t=function(e,a){if(null==e)return{};var n,o,t={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var p=o.createContext({}),c=function(e){var a=o.useContext(p),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},d=function(e){var a=c(e.components);return o.createElement(p.Provider,{value:a},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return o.createElement(o.Fragment,{},a)}},h=o.forwardRef((function(e,a){var n=e.components,t=e.mdxType,r=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=c(n),h=t,m=s["".concat(p,".").concat(h)]||s[h]||u[h]||r;return n?o.createElement(m,i(i({ref:a},d),{},{components:n})):o.createElement(m,i({ref:a},d))}));function m(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var r=n.length,i=new Array(r);i[0]=h;var l={};for(var p in a)hasOwnProperty.call(a,p)&&(l[p]=a[p]);l.originalType=e,l[s]="string"==typeof e?e:t,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},19697:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var o=n(87462),t=(n(67294),n(3905));const r={sidebar_position:15},i="Configuraci\xf3n Apache2 + fpm+php",l={unversionedId:"Tasks/apache2_fpm",id:"Tasks/apache2_fpm",title:"Configuraci\xf3n Apache2 + fpm+php",description:"1. Pantallazo donde se compruebe que tienes corriendo en tu servidor procesos PHP-FPM.",source:"@site/docs/Tasks/apache2_fpm.md",sourceDirName:"Tasks",slug:"/Tasks/apache2_fpm",permalink:"/docs/Tasks/apache2_fpm",draft:!1,editUrl:"https://github.com/belennazareth/ottershell/blob/main/docs/Tasks/apache2_fpm.md",tags:[],version:"current",sidebarPosition:15,frontMatter:{sidebar_position:15},sidebar:"tutorialSidebar",previous:{title:"Gesti\xf3n de redes en OpenStack",permalink:"/docs/Tasks/redes_openstack"},next:{title:"Instalaci\xf3n y configuraci\xf3n del servidor bind9 en nuestra red local",permalink:"/docs/Tasks/bind9_local"}},p={},c=[{value:"1. Pantallazo donde se compruebe que tienes corriendo en tu servidor procesos PHP-FPM.",id:"1-pantallazo-donde-se-compruebe-que-tienes-corriendo-en-tu-servidor-procesos-php-fpm",level:2},{value:"2. Configuraci\xf3n que has hecho en apache2 para trabajar con PHP-FPM.",id:"2-configuraci\xf3n-que-has-hecho-en-apache2-para-trabajar-con-php-fpm",level:2},{value:"3. Pantallazo donde se vea la salida del fichero info.php donde se ve que la ejecuci\xf3n de PHP se hace con PHP-FPM.",id:"3-pantallazo-donde-se-vea-la-salida-del-fichero-infophp-donde-se-ve-que-la-ejecuci\xf3n-de-php-se-hace-con-php-fpm",level:2},{value:"4. Pantallazos de bookmedik funcionando (despu\xe9s del login).",id:"4-pantallazos-de-bookmedik-funcionando-despu\xe9s-del-login",level:2},{value:"5. Configuraci\xf3n de PHP-FPM y apache2 para que funcione el punto 5.",id:"5-configuraci\xf3n-de-php-fpm-y-apache2-para-que-funcione-el-punto-5",level:2},{value:"6. Indica el fichero que has modificado (con el path completo) para modificar el l\xedmite de memoria. Muestra un pantallazo de la salida del fichero info.php donde se vea el cambio.",id:"6-indica-el-fichero-que-has-modificado-con-el-path-completo-para-modificar-el-l\xedmite-de-memoria-muestra-un-pantallazo-de-la-salida-del-fichero-infophp-donde-se-vea-el-cambio",level:2},{value:"Nota",id:"nota",level:3}],d={toc:c},s="wrapper";function u(e){let{components:a,...r}=e;return(0,t.kt)(s,(0,o.Z)({},d,r,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"configuraci\xf3n-apache2--fpmphp"},"Configuraci\xf3n Apache2 + fpm+php"),(0,t.kt)("h2",{id:"1-pantallazo-donde-se-compruebe-que-tienes-corriendo-en-tu-servidor-procesos-php-fpm"},"1. Pantallazo donde se compruebe que tienes corriendo en tu servidor procesos PHP-FPM."),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"Repo",src:n(21857).Z,width:"802",height:"453"})),(0,t.kt)("h2",{id:"2-configuraci\xf3n-que-has-hecho-en-apache2-para-trabajar-con-php-fpm"},"2. Configuraci\xf3n que has hecho en apache2 para trabajar con PHP-FPM."),(0,t.kt)("p",null,"La configuraci\xf3n realizada ha sido primero instalar php-fpm:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"sudo apt install php-fpm\n")),(0,t.kt)("p",null,"A continuaci\xf3n, se han ejecutado los siguientes comandos para habilitar el servicio:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"a2enmod proxy_fcgi setenvif\na2enconf php7.4-fpm\n")),(0,t.kt)("p",null,"Al ejecutarlo es necesario reiniciar apache (",(0,t.kt)("inlineCode",{parentName:"p"},"systemctl restart apache2"),")."),(0,t.kt)("p",null,"Lo siguiente sera deshabilitar el m\xf3dulo php y reiniciar apache para que se apliquen los cambios:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"a2dismod php7.4\nsystemctl restart apache2\n")),(0,t.kt)("h2",{id:"3-pantallazo-donde-se-vea-la-salida-del-fichero-infophp-donde-se-ve-que-la-ejecuci\xf3n-de-php-se-hace-con-php-fpm"},"3. Pantallazo donde se vea la salida del fichero info.php donde se ve que la ejecuci\xf3n de PHP se hace con PHP-FPM."),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"Repo",src:n(14077).Z,width:"1132",height:"850"})),(0,t.kt)("h2",{id:"4-pantallazos-de-bookmedik-funcionando-despu\xe9s-del-login"},"4. Pantallazos de bookmedik funcionando (despu\xe9s del login)."),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"Repo",src:n(89855).Z,width:"1132",height:"850"})),(0,t.kt)("h2",{id:"5-configuraci\xf3n-de-php-fpm-y-apache2-para-que-funcione-el-punto-5"},"5. Configuraci\xf3n de PHP-FPM y apache2 para que funcione el punto 5."),(0,t.kt)("p",null,"Para poder cambiar el puerto a 9000, se ha modificado el fichero de php:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"nano /etc/php/7.4/fpm/pool.d/www.conf \n")),(0,t.kt)("p",null,"Y se ha a\xf1adido la l\xednea:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"listen = localhost:9000\n")),(0,t.kt)("p",null,"En el fichero del virtualhost se a\xf1ade el bloque:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},'        <FilesMatch \\.php$>\n                SetHandler "proxy:fcgi://localhost:9000"\n        </FilesMatch>\n\n')),(0,t.kt)("p",null,"Por \xfaltimo se reinicia el servicio php y apache2."),(0,t.kt)("h2",{id:"6-indica-el-fichero-que-has-modificado-con-el-path-completo-para-modificar-el-l\xedmite-de-memoria-muestra-un-pantallazo-de-la-salida-del-fichero-infophp-donde-se-vea-el-cambio"},"6. Indica el fichero que has modificado (con el path completo) para modificar el l\xedmite de memoria. Muestra un pantallazo de la salida del fichero info.php donde se vea el cambio."),(0,t.kt)("p",null,"Se modifica el fichero:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"/etc/php/7.4/fpm/php.ini\n")),(0,t.kt)("p",null,"Cambiando el valor de la l\xednea:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"memory_limit = 256M\n")),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"Repo",src:n(84905).Z,width:"1132",height:"524"})),(0,t.kt)("h3",{id:"nota"},"Nota"),(0,t.kt)("p",null,"A partir del punto 4 se ha a\xf1adido al ",(0,t.kt)("inlineCode",{parentName:"p"},"/etc/hosts")," la direcci\xf3n del virtualhost, lo que hace que aparezca la direcci\xf3n ",(0,t.kt)("inlineCode",{parentName:"p"},"bookmedik.nazareth.org"),"."))}u.isMDXComponent=!0},14077:(e,a,n)=>{n.d(a,{Z:()=>o});const o=n.p+"assets/images/taller4IAW2-2-6709f224c647eaec0133e3f1b8e8edd9.png"},89855:(e,a,n)=>{n.d(a,{Z:()=>o});const o=n.p+"assets/images/taller4IAW2-3-41004ac63b850563428c87aac0648abd.png"},84905:(e,a,n)=>{n.d(a,{Z:()=>o});const o=n.p+"assets/images/taller4IAW2-4-865985d609b06cac86cb67a91b3a2660.png"},21857:(e,a,n)=>{n.d(a,{Z:()=>o});const o=n.p+"assets/images/taller4IAW2-937cd4800e825b9f9a0d551a5ff14d96.png"}}]);