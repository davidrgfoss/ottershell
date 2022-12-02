"use strict";(self.webpackChunkotter_shell=self.webpackChunkotter_shell||[]).push([[111],{3905:(e,a,n)=>{n.d(a,{Zo:()=>d,kt:()=>m});var t=n(7294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=t.createContext({}),p=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},d=function(e){var a=p(e.components);return t.createElement(s.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},u=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,g=u["".concat(s,".").concat(m)]||u[m]||c[m]||l;return n?t.createElement(g,i(i({ref:a},d),{},{components:n})):t.createElement(g,i({ref:a},d))}));function m(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6712:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var t=n(7462),r=(n(7294),n(3905));const l={sidebar_position:16},i="Instalaci\xf3n/migraci\xf3n de aplicaciones web PHP",o={unversionedId:"Tasks/migracion_php",id:"Tasks/migracion_php",title:"Instalaci\xf3n/migraci\xf3n de aplicaciones web PHP",description:"Escenario",source:"@site/docs/Tasks/migracion_php.md",sourceDirName:"Tasks",slug:"/Tasks/migracion_php",permalink:"/docs/Tasks/migracion_php",draft:!1,editUrl:"https://github.com/belennazareth/ottershell/blob/main/docs/Tasks/migracion_php.md",tags:[],version:"current",sidebarPosition:16,frontMatter:{sidebar_position:16},sidebar:"tutorialSidebar",previous:{title:"Desplegando aplicaciones flask con apache2 + mod_wsgi",permalink:"/docs/Tasks/apache_wsgi"},next:{title:"Markdown Features",permalink:"/docs/Tasks/markdown-features"}},s={},p=[{value:"Escenario",id:"escenario",level:2},{value:"Instalaci\xf3n de un CMS PHP en mi servidor local",id:"instalaci\xf3n-de-un-cms-php-en-mi-servidor-local",level:3},{value:"Instalaci\xf3n de un CMS NextCloud",id:"instalaci\xf3n-de-un-cms-nextcloud",level:3},{value:"Migraci\xf3n a tu VPS",id:"migraci\xf3n-a-tu-vps",level:3},{value:"Entrega",id:"entrega",level:2},{value:"1. De la Tarea 1, entrega la configuraci\xf3n del virtualhost.",id:"1-de-la-tarea-1-entrega-la-configuraci\xf3n-del-virtualhost",level:3},{value:"2. De la Tarea 1, la configuraci\xf3n de resoluci\xf3n est\xe1tica.",id:"2-de-la-tarea-1-la-configuraci\xf3n-de-resoluci\xf3n-est\xe1tica",level:3},{value:"3. De la Tarea 1, una captura de pantalla donde se vea el acceso a la aplicaci\xf3n.",id:"3-de-la-tarea-1-una-captura-de-pantalla-donde-se-vea-el-acceso-a-la-aplicaci\xf3n",level:3},{value:"4. De la Tarea 1, indica que plugin has instalado.",id:"4-de-la-tarea-1-indica-que-plugin-has-instalado",level:3},{value:"5. De la Tarea 2, una captura de pantalla donde se vea el acceso a la aplicaci\xf3n.",id:"5-de-la-tarea-2-una-captura-de-pantalla-donde-se-vea-el-acceso-a-la-aplicaci\xf3n",level:3},{value:"6. De la Tarea 3, documenta de la forma m\xe1s precisa posible cada uno de los pasos que has dado para migrar una de las dos aplicaciones.",id:"6-de-la-tarea-3-documenta-de-la-forma-m\xe1s-precisa-posible-cada-uno-de-los-pasos-que-has-dado-para-migrar-una-de-las-dos-aplicaciones",level:3},{value:"7. De la Tarea 3, las URL de acceso a las aplicaciones.",id:"7-de-la-tarea-3-las-url-de-acceso-a-las-aplicaciones",level:3},{value:"8. Capturas de pantalla donde se demuestre que esta funcionando el cliente de NextCloud.",id:"8-capturas-de-pantalla-donde-se-demuestre-que-esta-funcionando-el-cliente-de-nextcloud",level:3},{value:"Notas",id:"notas",level:2}],d={toc:p};function c(e){let{components:a,...l}=e;return(0,r.kt)("wrapper",(0,t.Z)({},d,l,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"instalaci\xf3nmigraci\xf3n-de-aplicaciones-web-php"},"Instalaci\xf3n/migraci\xf3n de aplicaciones web PHP"),(0,r.kt)("h2",{id:"escenario"},"Escenario"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Crea un escenario con vagrant o kvm con las siguiente caracter\xedsticas:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Dos m\xe1quinas virtuales que se llamen servidor_web_tunombre y servidor_bd_tunombre."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"La m\xe1quina servidor_web_tunombre estar\xe1 conectada una red p\xfablica."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Las dos m\xe1quinas est\xe1n conectadas entre si por una red muy aislada.")))),(0,r.kt)("p",null,"Se ha creado un escenario con vagrant de tal manera que queda de la siguiente manera el fichero ",(0,r.kt)("inlineCode",{parentName:"p"},"Vagrantfile"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'Vagrant.configure("2") do |config|\n\n    config.vm.define :web do |web|\n      web.vm.box = "debian/bullseye64"\n      web.vm.hostname = "servidor-web-nazareth"\n      web.vm.synced_folder ".", "/vagrant", disabled: true\n\n    web.vm.network :private_network,\n      :libvirt__dhcp_enabled => false,\n      :ip => "10.0.0.2"\n\n    web.vm.network :public_network,\n      :dev => "virbr0",\n      :mode => "bridge",\n      :type => "bridge"\n\n    web.vm.network :private_network,\n      :libvirt__network_name => "red1",\n      :libvirt__dhcp_enabled => false,\n      :ip => "192.168.0.10",\n      :libvirt__forward_mode => "veryisolated"\n    end\n\n##################################################################\n\n    config.vm.define :bd do |bd|\n      bd.vm.box = "generic/ubuntu2010"\n      bd.vm.hostname = "servidor-bd-nazareth"\n      bd.vm.synced_folder ".", "/vagrant", disabled: true\n\n    bd.vm.network :private_network,\n      :libvirt__dhcp_enabled => false,\n      :ip => "10.0.0.4"\n\n    bd.vm.network :public_network,\n      :dev => "virbr0",\n      :mode => "bridge",\n      :type => "bridge"\n\n    bd.vm.network :private_network,\n      :libvirt__network_name => "red1",\n      :libvirt__dhcp_enabled => false,\n      :ip => "192.168.0.11",\n      :libvirt__forward_mode => "veryisolated"\n    end\n\nend\n')),(0,r.kt)("h3",{id:"instalaci\xf3n-de-un-cms-php-en-mi-servidor-local"},"Instalaci\xf3n de un CMS PHP en mi servidor local"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Selecciona un CMS escrito en PHP para desplegarlo en nuestra infraestructura. No se puede elegir ni WordPress (que lo hemos visto en un v\xeddeo, ni NextCloud que lo instalaremos a continuaci\xf3n)."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Configura en la m\xe1quina servidor_web_tunombre un servidor web apache2 que ejecute PHP, con un VirtualHost, para que el CMS sea accesible desde la direcci\xf3n: ",(0,r.kt)("a",{parentName:"strong",href:"http://www.nombrealumno.org"},"www.nombrealumno.org"),"."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Configura en la m\xe1quina servidor_bd_tunombre una base de datos. Crea un usuario con privilegios sobre la base de datos donde se van a guardar los datos del CMS. Configura la base de datos para que permita conexi\xf3n desde la otra m\xe1quina."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Descarga el CMS seleccionado y realiza la instalaci\xf3n."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Realiza una configuraci\xf3n m\xednima de la aplicaci\xf3n (Cambia la plantilla, crea alg\xfan contenido, \u2026)"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Instala un m\xf3dulo para a\xf1adir alguna funcionalidad al CMS.")))),(0,r.kt)("h3",{id:"instalaci\xf3n-de-un-cms-nextcloud"},"Instalaci\xf3n de un CMS NextCloud"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Instala el CMS PHP NextCloud en otro host virtual con el que accedemos con el nombre cloud.nombrealumno.org."))),(0,r.kt)("h3",{id:"migraci\xf3n-a-tu-vps"},"Migraci\xf3n a tu VPS"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Configura en tu VPS un servidor LEMP."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Configura un registro DNS en tu servidor DNS de tipo CNAME para que el nombre www apunte al nombre de vuestro servidor."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Realiza la migraci\xf3n de tus aplicaciones web a tu VPS. La primera aplicaci\xf3n debe ser accesible desde la URL ",(0,r.kt)("a",{parentName:"strong",href:"http://www.tudominio.algo/portal"},"www.tudominio.algo/portal"),", y el NextCloud con la URL ",(0,r.kt)("a",{parentName:"strong",href:"http://www.tudominio.algo/cloud"},"www.tudominio.algo/cloud"),". \xbfCu\xe1ntos virtual hosts tendr\xe1s que configurar en el servidor web de tu VPS?"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Al acceder a ",(0,r.kt)("a",{parentName:"strong",href:"http://www.tudominio.algo"},"www.tudominio.algo")," se debe hacer una redirecci\xf3n a ",(0,r.kt)("a",{parentName:"strong",href:"http://www.tudominio.algo/portal"},"www.tudominio.algo/portal"),"."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Instala en un ordenador el cliente de NextCloud y realiza la configuraci\xf3n adecuada para acceder a \u201ctu nube\u201d.")))),(0,r.kt)("h2",{id:"entrega"},"Entrega"),(0,r.kt)("h3",{id:"1-de-la-tarea-1-entrega-la-configuraci\xf3n-del-virtualhost"},"1. De la Tarea 1, entrega la configuraci\xf3n del virtualhost."),(0,r.kt)("p",null,"Antes de esto se ha instalado en el servidor ",(0,r.kt)("inlineCode",{parentName:"p"},"apache2"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"libapache2-mod-php")," y ",(0,r.kt)("inlineCode",{parentName:"p"},"libapache2-mpm-itk"),"(este es necesario para poder usar el CMS ",(0,r.kt)("strong",{parentName:"p"},"drupal"),")."),(0,r.kt)("p",null,"Para realizar la configuraci\xf3n del virtualhost se ha creado y modificado el fichero ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/apache2/sites-available/drupal.conf")," con contenido:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"<VirtualHost *:80>\n\n        ServerAdmin webmaster@localhost\n        DocumentRoot /var/www/html/drupal-9.4.8\n        ServerName www.belennazareth.org\n\n        <Directory /var/www/html/drupal-9.4.8/>\n            Options Indexes FollowSymLinks\n            AllowOverride All\n            Require all granted\n        </Directory>    \n\n        ErrorLog ${APACHE_LOG_DIR}/error.log\n        CustomLog ${APACHE_LOG_DIR}/access.log combined\n\n</VirtualHost>\n\n# vim: syntax=apache ts=4 sw=4 sts=4 sr noet\n")),(0,r.kt)("h3",{id:"2-de-la-tarea-1-la-configuraci\xf3n-de-resoluci\xf3n-est\xe1tica"},"2. De la Tarea 1, la configuraci\xf3n de resoluci\xf3n est\xe1tica."),(0,r.kt)("p",null,"En el fichero ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/hosts")," de nuestra m\xe1quina ponemos las siguientes l\xedneas:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# drupal\n\n192.168.122.168 www.belennazareth.org\n")),(0,r.kt)("p",null,"Y en el servidor web tambi\xe9n lo modificamos para que pueda acceder a la base de datos mediante resoluci\xf3n est\xe1tica:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# drupal\n\n192.168.0.11 mariadb\n")),(0,r.kt)("h3",{id:"3-de-la-tarea-1-una-captura-de-pantalla-donde-se-vea-el-acceso-a-la-aplicaci\xf3n"},"3. De la Tarea 1, una captura de pantalla donde se vea el acceso a la aplicaci\xf3n."),(0,r.kt)("p",null,"Primero creamos la base de datos y el usuario para ",(0,r.kt)("inlineCode",{parentName:"p"},"drupal"),":"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Term",src:n(4547).Z,width:"946",height:"595"})),(0,r.kt)("p",null,"Accedemos a la p\xe1gina escribiendo las credenciales de la base de datos:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Term",src:n(7515).Z,width:"992",height:"742"})),(0,r.kt)("p",null,"Instalamos las extensiones php necesarias para el funcionamiento de drupal"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"apt install php-common php-mysql php-gmp php-curl php-intl php-mbstring php-xmlrpc php-gd php-xml php-cli php-zip unzip -y\n")),(0,r.kt)("p",null,"Habilitamos el directorio de translations:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mkdir sites/default/files/translations\n")),(0,r.kt)("p",null,"Y damos permisos al servidor web cambiando roles:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"chown -R www-data:www-data /var/www/html/drupal-9.4.8\n")),(0,r.kt)("p",null,"En la aplicaci\xf3n web configuramos las credenciales hacia la base de datos:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Term",src:n(9149).Z,width:"992",height:"919"})),(0,r.kt)("p",null,"Al terminar la configuraci\xf3n aparecer\xe1 la siguiente p\xe1gina:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Term",src:n(7533).Z,width:"1440",height:"919"})),(0,r.kt)("p",null,"Y creamos un primer post:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Term",src:n(6144).Z,width:"1440",height:"1054"})),(0,r.kt)("h3",{id:"4-de-la-tarea-1-indica-que-plugin-has-instalado"},"4. De la Tarea 1, indica que plugin has instalado."),(0,r.kt)("p",null,"Se ha instalado el plugin para a\xf1adir un calendario y el plugin para a\xf1adir v\xeddeos de Youtube.\nPara esto se ha introducido la URL del m\xf3dulo en el apartado 'ampliar', de este modo se a\xf1adir\xe1 como otra opci\xf3n m\xe1s de ampliaci\xf3n.\nPor ejemplo:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Term",src:n(9459).Z,width:"1187",height:"1002"})),(0,r.kt)("p",null,"Al aceptar la instalaci\xf3n aparecer\xe1 un mensaje parecido al siguiente:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Term",src:n(7069).Z,width:"1187",height:"1002"})),(0,r.kt)("p",null,"Para poder a\xf1adir las extensiones a los art\xedculos o a las p\xe1ginas entramos en ",(0,r.kt)("inlineCode",{parentName:"p"},"inicio > Administraci\xf3n > Estructura > Tipos de contenido > [Art\xedculo/P\xe1gina] > Administrar campos")," y entramos en ",(0,r.kt)("inlineCode",{parentName:"p"},"A\xf1adir un campo"),", apareciendo algo similar a:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Term",src:n(658).Z,width:"1187",height:"1002"})),(0,r.kt)("p",null,"Se indican el n\xfamero de valores permitidos y se configuran los valores que va a tomar la extensi\xf3n en la p\xe1gina o art\xedculo:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Term",src:n(6767).Z,width:"1187",height:"1002"}),"\n",(0,r.kt)("img",{alt:"Term",src:n(8179).Z,width:"1920",height:"1053"})),(0,r.kt)("p",null,"Vemos como aparecen las opciones en la creaci\xf3n del art\xedculo:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Term",src:n(7311).Z,width:"1187",height:"746"})),(0,r.kt)("p",null,"Y el resultado:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Term",src:n(5676).Z,width:"1511",height:"1047"})),(0,r.kt)("h3",{id:"5-de-la-tarea-2-una-captura-de-pantalla-donde-se-vea-el-acceso-a-la-aplicaci\xf3n"},"5. De la Tarea 2, una captura de pantalla donde se vea el acceso a la aplicaci\xf3n."),(0,r.kt)("p",null,"El primer paso ser\xe1 instalar los m\xf3dulos de PHP exigidos por nextcloud:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," sudo apt install -y php php-gd php-curl php-zip php-dom php-xml php-simplexml php-mbstring\n")),(0,r.kt)("p",null,"Creamos el fichero para el virtualhost en ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/apache2/sites-available/")," como ",(0,r.kt)("inlineCode",{parentName:"p"},"nextcloud.conf")," a\xf1adiendo:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"<VirtualHost *:80>\n\n        ServerAdmin webmaster@localhost\n        DocumentRoot /var/www/html/nextcloud\n        ServerName cloud.belennazareth.org\n\n        <Directory /var/www/html/nextcloud/>\n            Options Indexes FollowSymLinks\n            AllowOverride All\n            Require all granted\n        </Directory>    \n\n        ErrorLog ${APACHE_LOG_DIR}/error.log\n        CustomLog ${APACHE_LOG_DIR}/access.log combined\n\n</VirtualHost>\n")),(0,r.kt)("p",null,"Cambiamos al usuario ",(0,r.kt)("inlineCode",{parentName:"p"},"www-data")," el directorio ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/www/html/nextcloud")," de forma recursiva:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"chown -R www-data: nextcloud/\n")),(0,r.kt)("p",null,"Para habilitar la configuraci\xf3n ejecutamos:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"a2ensite nextcloud.conf\n")),(0,r.kt)("p",null,"Y reiniciamos apache con ",(0,r.kt)("inlineCode",{parentName:"p"},"systemctl restart apache2"),"."),(0,r.kt)("p",null,"En el servidor de base de datos Mariadb creamos una base de datos y un usuario para nextcloud:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"create database nextcloud;\ncreate user nextcloud identified by 'nextcloud';\ngrant all privileges on nextcloud.* to nextcloud;\n")),(0,r.kt)("p",null,"Despu\xe9s para poder acceder a la p\xe1gina de forma local a\xf1adimos la siguiente l\xednea al fichero local ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/hosts"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# nextcloud\n\n192.168.122.168 cloud.belennazareth.org\n")),(0,r.kt)("p",null,"Al entrar a la direcci\xf3n ",(0,r.kt)("inlineCode",{parentName:"p"},"cloud.belennazareth.org")," aparecer\xe1 la p\xe1gina de configuraci\xf3n de nextcloud:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Term",src:n(8633).Z,width:"1190",height:"943"})),(0,r.kt)("p",null,"Aparecer\xe1 como sugerencia la instalaci\xf3n de varias aplicaciones dentro de nuestro nextcloud, y una vez que termine aparecer\xe1 el entorno:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Term",src:n(866).Z,width:"1190",height:"943"}),"\n",(0,r.kt)("img",{alt:"Term",src:n(9302).Z,width:"1190",height:"943"})),(0,r.kt)("h3",{id:"6-de-la-tarea-3-documenta-de-la-forma-m\xe1s-precisa-posible-cada-uno-de-los-pasos-que-has-dado-para-migrar-una-de-las-dos-aplicaciones"},"6. De la Tarea 3, documenta de la forma m\xe1s precisa posible cada uno de los pasos que has dado para migrar una de las dos aplicaciones."),(0,r.kt)("p",null,"Se realizar\xe1 la configuraci\xf3n de un servidor LEMP en la VPS instalando Apache y Mariadb, adem\xe1s de los m\xf3dulos necesarios para PHP tanto para drupal como para nextcloud:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"apt install apache2\napt install mariadb-server\n\napt install libapache2-mod-php libapache2-mpm-itk -y\n\napt install php-common php-mysql php-gmp php-curl php-intl php-mbstring php-xmlrpc php-gd php-xml php-cli php-zip unzip -y\n\napt install -y php php-gd php-curl php-zip php-dom php-xml php-simplexml php-mbstring\n")),(0,r.kt)("p",null,"Una vez instalado todo lo anterior se transfieren desde el servidor web los datos de ",(0,r.kt)("inlineCode",{parentName:"p"},"drupal")," y ",(0,r.kt)("inlineCode",{parentName:"p"},"nextcloud")," por scp a la m\xe1quina VPS:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"scp drupal-9.4.8 poke@ip:\nscp nextcloud poke@ip:\n")),(0,r.kt)("p",null,"Desde el servidor de la base de datos se transfieren los datos de ambas bases de datos (",(0,r.kt)("inlineCode",{parentName:"p"},"drupal")," y ",(0,r.kt)("inlineCode",{parentName:"p"},"nextcloud"),"), ejecutando primero el siguiente comando que guardar\xe1 en un fichero ",(0,r.kt)("inlineCode",{parentName:"p"},".sql")," todas las bases de datos:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mysqldump -u root -p --all-databases > alldb.sql\n")),(0,r.kt)("p",null,"Despu\xe9s, se transfieren por scp a la m\xe1quina VPS:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"scp alldb.sql poke@ip:\n")),(0,r.kt)("p",null,"Cuando tengamos todo copiado en la VPS pasamos los ficheros ",(0,r.kt)("inlineCode",{parentName:"p"},"drupal")," y ",(0,r.kt)("inlineCode",{parentName:"p"},"nextcloud")," al directorio ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/www/html")," y le asignamos como usuario ",(0,r.kt)("inlineCode",{parentName:"p"},"www-data")," para que puedan acceder a los recursos:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cp -r drupal-9.4.8/ /var/www/html/\ncp -r nextcloud/ /var/www/html/\n\nchown www-data: drupal-9.4.8/\nchown www-data: nextcloud/\n")),(0,r.kt)("p",null,"Dentro de la VPS se ejecuta el comando de restauraci\xf3n para meter los datos de la base de datos de la m\xe1quina anterior:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mysql -u root -p < alldb.sql\n")),(0,r.kt)("p",null,"Al copiarse, tal vez, no nos permita la entrada a la base de datos desde el usuario ",(0,r.kt)("inlineCode",{parentName:"p"},"drupal")," o ",(0,r.kt)("inlineCode",{parentName:"p"},"nextcloud"),", para ello recargamos los permisos de la base de datos entrando como root (",(0,r.kt)("inlineCode",{parentName:"p"},"mysql -u root -p"),") y ejecutando:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"flush privileges;\n")),(0,r.kt)("p",null,"Una vez restaurado todo, creamos los virtualhosts para ",(0,r.kt)("inlineCode",{parentName:"p"},"drupal")," y para ",(0,r.kt)("inlineCode",{parentName:"p"},"nextcloud"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# DRUPAL\n\n# NEXTCLOUD\n\n")),(0,r.kt)("h3",{id:"7-de-la-tarea-3-las-url-de-acceso-a-las-aplicaciones"},"7. De la Tarea 3, las URL de acceso a las aplicaciones."),(0,r.kt)("h3",{id:"8-capturas-de-pantalla-donde-se-demuestre-que-esta-funcionando-el-cliente-de-nextcloud"},"8. Capturas de pantalla donde se demuestre que esta funcionando el cliente de NextCloud."),(0,r.kt)("h2",{id:"notas"},"Notas"),(0,r.kt)("p",null,"Para permitir que la base de datos (Mariadb) tenga acceso desde cualquier ip se modifica el fichero ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/mysql/mariadb.conf.d/50-server.cnf")," a\xf1adiendo:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"bind-address            = 0.0.0.0\n")))}c.isMDXComponent=!0},7069:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/migracionPHPIAW2-10-57a9cd3bf4e3385e86dfc3f655e87a9e.png"},658:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/migracionPHPIAW2-11-8538d90a9ce52118b8ecc2cdb676986b.png"},6767:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/migracionPHPIAW2-12-939b38694ce5395caa20d07d20f4da7c.png"},8179:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/migracionPHPIAW2-13-c782676629fcea4e0bf31c0b752981d6.png"},7311:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/migracionPHPIAW2-15-9a51a58983ed755d3bacb9b2c762a32d.png"},5676:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/migracionPHPIAW2-16-68953319f9dbf9159d7823936142e100.png"},8633:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/migracionPHPIAW2-17-76e8bc935247ef00209cf9e6406712ce.png"},866:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/migracionPHPIAW2-18-17c7ba2f1123db8fe7f2207302d6a783.png"},9302:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/migracionPHPIAW2-19-893553afe6ed7e78abaf74c7d2d008ef.png"},4547:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/migracionPHPIAW2-2-c0e9c8fb0463d778d0bb0b2e458021ee.png"},9149:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/migracionPHPIAW2-3-2a660aa235151252f97a4fc792f47d8e.png"},7533:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/migracionPHPIAW2-4-23dc8fe4a13cd85939c58a6a230b9a26.png"},6144:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/migracionPHPIAW2-5-adbd7eccf513bf6d704f6dd04369bc45.png"},9459:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/migracionPHPIAW2-9-eda6e2e25661f0d5bc0747e3975f1df1.png"},7515:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/migracionPHPIAW2-aecc823f31fab2ce687974f54a007359.png"}}]);