"use strict";(self.webpackChunkotter_shell=self.webpackChunkotter_shell||[]).push([[6566],{3905:(e,a,n)=>{n.d(a,{Zo:()=>c,kt:()=>g});var t=n(7294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=t.createContext({}),s=function(e){var a=t.useContext(p),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},c=function(e){var a=s(e.components);return t.createElement(p.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},u=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),g=r,h=u["".concat(p,".").concat(g)]||u[g]||d[g]||i;return n?t.createElement(h,o(o({ref:a},c),{},{components:n})):t.createElement(h,o({ref:a},c))}));function g(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in a)hasOwnProperty.call(a,p)&&(l[p]=a[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},217:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var t=n(7462),r=(n(7294),n(3905));const i={sidebar_position:14},o="Instalaci\xf3n de nginx con PHP",l={unversionedId:"Tasks/nginx_php",id:"Tasks/nginx_php",title:"Instalaci\xf3n de nginx con PHP",description:"1. Entrega la URL del repositorio GitHub donde has alojado la pr\xe1ctica.",source:"@site/docs/Tasks/nginx_php.md",sourceDirName:"Tasks",slug:"/Tasks/nginx_php",permalink:"/docs/Tasks/nginx_php",draft:!1,editUrl:"https://github.com/belennazareth/ottershell/blob/main/docs/Tasks/nginx_php.md",tags:[],version:"current",sidebarPosition:14,frontMatter:{sidebar_position:14},sidebar:"tutorialSidebar",previous:{title:"Compilaci\xf3n de un Kernel linux a medida",permalink:"/docs/Tasks/compilacion_kernel"},next:{title:"Gesti\xf3n de redes en OpenStack",permalink:"/docs/Tasks/redes_openstack"}},p={},s=[{value:"1. Entrega la URL del repositorio GitHub donde has alojado la pr\xe1ctica.",id:"1-entrega-la-url-del-repositorio-github-donde-has-alojado-la-pr\xe1ctica",level:2},{value:"2. Pantallazos para comprobar que se han creado los dos virtualhost despu\xe9s de ejecutar la receta ansible.",id:"2-pantallazos-para-comprobar-que-se-han-creado-los-dos-virtualhost-despu\xe9s-de-ejecutar-la-receta-ansible",level:2},{value:"3. Comprobaci\xf3n de que al acceder a www.pagina1.org se produce una redirecci\xf3n. Pantallazo accediendo desde un navegador web.",id:"3-comprobaci\xf3n-de-que-al-acceder-a-wwwpagina1org-se-produce-una-redirecci\xf3n-pantallazo-accediendo-desde-un-navegador-web",level:2},{value:"4. Pantallazo accediendo a www.pagina1.org/principal/documentos (pon algunos ficheros para que se vea la lista).",id:"4-pantallazo-accediendo-a-wwwpagina1orgprincipaldocumentos-pon-algunos-ficheros-para-que-se-vea-la-lista",level:2},{value:"5. Pantallazos de la autentificaci\xf3n b\xe1sica.",id:"5-pantallazos-de-la-autentificaci\xf3n-b\xe1sica",level:2},{value:"6. Finalmente, configura la receta ansible para desactivar el virtualhost www.pagina2.org. Pasa de nuevo la receta y manda alguna prueba de que se ha borrado dicho VirtualHost.",id:"6-finalmente-configura-la-receta-ansible-para-desactivar-el-virtualhost-wwwpagina2org-pasa-de-nuevo-la-receta-y-manda-alguna-prueba-de-que-se-ha-borrado-dicho-virtualhost",level:2},{value:"Notas",id:"notas",level:3}],c={toc:s};function d(e){let{components:a,...i}=e;return(0,r.kt)("wrapper",(0,t.Z)({},c,i,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"instalaci\xf3n-de-nginx-con-php"},"Instalaci\xf3n de nginx con PHP"),(0,r.kt)("h2",{id:"1-entrega-la-url-del-repositorio-github-donde-has-alojado-la-pr\xe1ctica"},"1. Entrega la URL del repositorio GitHub donde has alojado la pr\xe1ctica."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/belennazareth/nginx_php"},"https://github.com/belennazareth/nginx_php")),(0,r.kt)("h2",{id:"2-pantallazos-para-comprobar-que-se-han-creado-los-dos-virtualhost-despu\xe9s-de-ejecutar-la-receta-ansible"},"2. Pantallazos para comprobar que se han creado los dos virtualhost despu\xe9s de ejecutar la receta ansible."),(0,r.kt)("p",null,"Al realizar la receta ansible resulta:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Term",src:n(4977).Z,width:"1355",height:"923"})),(0,r.kt)("p",null,"Y si consultamos en la m\xe1quina ",(0,r.kt)("inlineCode",{parentName:"p"},"servidorweb")," podemos ver los virtualhosts:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Term",src:n(761).Z,width:"962",height:"353"})),(0,r.kt)("h2",{id:"3-comprobaci\xf3n-de-que-al-acceder-a-wwwpagina1org-se-produce-una-redirecci\xf3n-pantallazo-accediendo-desde-un-navegador-web"},"3. Comprobaci\xf3n de que al acceder a ",(0,r.kt)("a",{parentName:"h2",href:"http://www.pagina1.org"},"www.pagina1.org")," se produce una redirecci\xf3n. Pantallazo accediendo desde un navegador web."),(0,r.kt)("p",null,"Para realizar la redirecci\xf3n se edita el fichero ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/nginx/sites-available/vhost1.conf")," en la m\xe1quina ",(0,r.kt)("strong",{parentName:"p"},"servidorweb")," a\xf1adiendo:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"location = / {\n  return 301 /principal;\n}\n")),(0,r.kt)("p",null,"Adem\xe1s de la l\xednea para ",(0,r.kt)("inlineCode",{parentName:"p"},"principal"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"location /principal {\n    try_files $uri $uri/ /index.html;\n}\n")),(0,r.kt)("p",null,"Se tiene que crear el directorio ",(0,r.kt)("inlineCode",{parentName:"p"},"/principal")," con un fichero ",(0,r.kt)("inlineCode",{parentName:"p"},"index.html"),", en ",(0,r.kt)("inlineCode",{parentName:"p"},"/srv/www/pagina1"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Term",src:n(853).Z,width:"932",height:"638"})),(0,r.kt)("p",null,"Podemos mostrar una p\xe1gina web est\xe1tica copiando el fichero de construcci\xf3n de la p\xe1gina en el directorio ",(0,r.kt)("inlineCode",{parentName:"p"},"/srv/www/pagina1/")," poni\xe9ndole de nombre ",(0,r.kt)("inlineCode",{parentName:"p"},"principal"),", despu\xe9s ser\xe1 necesario ejecutar el siguiente comando para que cambie las rutas del ",(0,r.kt)("inlineCode",{parentName:"p"},"index")," a ",(0,r.kt)("inlineCode",{parentName:"p"},"/principal"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sed -i 's/\"\\//\"\\/principal\\//g' index.html\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Term",src:n(1945).Z,width:"1450",height:"819"})),(0,r.kt)("h2",{id:"4-pantallazo-accediendo-a-wwwpagina1orgprincipaldocumentos-pon-algunos-ficheros-para-que-se-vea-la-lista"},"4. Pantallazo accediendo a ",(0,r.kt)("a",{parentName:"h2",href:"http://www.pagina1.org/principal/documentos"},"www.pagina1.org/principal/documentos")," (pon algunos ficheros para que se vea la lista)."),(0,r.kt)("p",null,"Se crea el directorio ",(0,r.kt)("inlineCode",{parentName:"p"},"/srv/doc")," con ficheros dentro de ejemplo.\nA ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/nginx/sites-available/vhost1.conf")," se le a\xf1ade un alias para poder entrar a los ficheros alojados en ",(0,r.kt)("inlineCode",{parentName:"p"},"/srv/doc"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"        location /principal/documentos {\n        alias /srv/doc;\n        autoindex on;\n    }\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Term",src:n(1754).Z,width:"837",height:"521"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Term",src:n(6498).Z,width:"836",height:"651"})),(0,r.kt)("p",null,"Entra ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/belennazareth/2ASIR/tree/main/SRI%2BHLC/nginx%2Bphp"},"aqu\xed")," para ver los ficheros de ",(0,r.kt)("inlineCode",{parentName:"p"},"/srv/doc")," y la copia de ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/nginx/sites-available/vhost1.conf"),"."),(0,r.kt)("h2",{id:"5-pantallazos-de-la-autentificaci\xf3n-b\xe1sica"},"5. Pantallazos de la autentificaci\xf3n b\xe1sica."),(0,r.kt)("p",null,"Para la autentificaci\xf3n b\xe1sica primero se instala el paquete:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"apt-get install nginx apache2-utils\n")),(0,r.kt)("p",null,"Se crea el usuario y contrase\xf1a:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"htpasswd -c /etc/nginx/.htpasswd totakeke\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Term",src:n(6847).Z,width:"701",height:"120"})),(0,r.kt)("p",null,"Se crea el directorio ",(0,r.kt)("inlineCode",{parentName:"p"},"/secreto")," en ",(0,r.kt)("inlineCode",{parentName:"p"},"/srv/www/pagina1")," con un fichero ",(0,r.kt)("inlineCode",{parentName:"p"},"index.html"),". (igualmente se puede encontrar en este ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/belennazareth/2ASIR/tree/main/SRI%2BHLC/nginx%2Bphp"},"repositorio"),")"),(0,r.kt)("p",null,"Se a\xf1ade en ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/nginx/sites-available/vhost1.conf"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'location /secreto {\n        try_files $uri $uri/ =404;\n        auth_basic "contrase\xf1ita y eso";\n        auth_basic_user_file /etc/nginx/.htpasswd;\n}\n')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Term",src:n(4731).Z,width:"1174",height:"443"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Term",src:n(9702).Z,width:"836",height:"611"})),(0,r.kt)("h2",{id:"6-finalmente-configura-la-receta-ansible-para-desactivar-el-virtualhost-wwwpagina2org-pasa-de-nuevo-la-receta-y-manda-alguna-prueba-de-que-se-ha-borrado-dicho-virtualhost"},"6. Finalmente, configura la receta ansible para desactivar el virtualhost ",(0,r.kt)("a",{parentName:"h2",href:"http://www.pagina2.org."},"www.pagina2.org.")," Pasa de nuevo la receta y manda alguna prueba de que se ha borrado dicho VirtualHost."),(0,r.kt)("p",null,"Para esto se vuelve a realizar el comando ",(0,r.kt)("inlineCode",{parentName:"p"},"ansible-playbook site.yaml")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Term",src:n(6468).Z,width:"585",height:"77"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Term",src:n(2847).Z,width:"928",height:"124"})),(0,r.kt)("h3",{id:"notas"},"Notas"),(0,r.kt)("p",null,"Para crear un nuevo virtualhost tendremos que crear dentro de ",(0,r.kt)("inlineCode",{parentName:"p"},"ansible/group_vars/all")," un nuevo ",(0,r.kt)("strong",{parentName:"p"},"vhost")," y hay que crear un fichero llamado ",(0,r.kt)("inlineCode",{parentName:"p"},"index_vhost[numero].html")," en ",(0,r.kt)("inlineCode",{parentName:"p"},"ansible/roles/nginx/files/"),"."))}d.isMDXComponent=!0},6468:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/nginxphpSRI-10-058d61e481a3a354ce19a23484fb946b.png"},2847:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/nginxphpSRI-11-0d7d01f0de05ea920033bc8f80a5adac.png"},761:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/nginxphpSRI-2-9ffeb5315c5a444d45c4deaa44a152e4.png"},853:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/nginxphpSRI-3-b889f0e34270b2c45628bd1f0755bfdb.png"},1945:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/nginxphpSRI-4-d7faa5631a2c9bc0eadfbe8473dc3300.png"},1754:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/nginxphpSRI-5-b4165346b10fb0c605a8a8a75cb693a0.png"},6498:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/nginxphpSRI-6-c03d96f3809937cb4f1d627b7a8ad725.png"},6847:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/nginxphpSRI-7-846c6be2646bde344d15fd091ba52875.png"},4731:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/nginxphpSRI-8-23be6c69ba7a80c44a79737b0de53684.png"},9702:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/nginxphpSRI-9-f4eea57217b33bdf4c9838893445f496.png"},4977:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/nginxphpSRI-6843d55c2f3d726bd604bdb786441dc6.png"}}]);