"use strict";(self.webpackChunkotter_shell=self.webpackChunkotter_shell||[]).push([[9653],{3905:(e,a,n)=>{n.d(a,{Zo:()=>c,kt:()=>k});var r=n(67294);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,r,t=function(e,a){if(null==e)return{};var n,r,t={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var s=r.createContext({}),p=function(e){var a=r.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},c=function(e){var a=p(e.components);return r.createElement(s.Provider,{value:a},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(e,a){var n=e.components,t=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=t,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(k,i(i({ref:a},c),{},{components:n})):r.createElement(k,i({ref:a},c))}));function k(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l[d]="string"==typeof e?e:t,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},40098:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(87462),t=(n(67294),n(3905));const o={sidebar_position:16},i="Desplegando aplicaciones flask con apache2 + mod_wsgi",l={unversionedId:"Tasks/apache_wsgi",id:"Tasks/apache_wsgi",title:"Desplegando aplicaciones flask con apache2 + mod_wsgi",description:"Ejercicio: Ejecuci\xf3n de aplicaciones python flask",source:"@site/docs/Tasks/apache_wsgi.md",sourceDirName:"Tasks",slug:"/Tasks/apache_wsgi",permalink:"/docs/Tasks/apache_wsgi",draft:!1,editUrl:"https://github.com/belennazareth/ottershell/blob/main/docs/Tasks/apache_wsgi.md",tags:[],version:"current",sidebarPosition:16,frontMatter:{sidebar_position:16},sidebar:"tutorialSidebar",previous:{title:"Desplegando aplicaciones flask con apache2/nginx + uwsgi",permalink:"/docs/Tasks/apache_uwsgi"},next:{title:"Cifrado asim\xe9trico con gpg y openssl",permalink:"/docs/Tasks/criptografia1"}},s={},p=[{value:"Ejercicio: Ejecuci\xf3n de aplicaciones python flask",id:"ejercicio-ejecuci\xf3n-de-aplicaciones-python-flask",level:2},{value:"Procedimiento",id:"procedimiento",level:2},{value:"Configuraci\xf3n de apache2 para servir una aplicaci\xf3n web flask",id:"configuraci\xf3n-de-apache2-para-servir-una-aplicaci\xf3n-web-flask",level:3},{value:"Creaci\xf3n del fichero wsgi",id:"creaci\xf3n-del-fichero-wsgi",level:3},{value:"Configuraci\xf3n de apache2",id:"configuraci\xf3n-de-apache2",level:3},{value:"Entrega",id:"entrega",level:2},{value:"1. Entrega la configuraci\xf3n del virtualhost.",id:"1-entrega-la-configuraci\xf3n-del-virtualhost",level:3},{value:"2. Entrega una captura de pantalla accediendo a la aplicaci\xf3n web.",id:"2-entrega-una-captura-de-pantalla-accediendo-a-la-aplicaci\xf3n-web",level:3}],c={toc:p},d="wrapper";function u(e){let{components:a,...o}=e;return(0,t.kt)(d,(0,r.Z)({},c,o,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"desplegando-aplicaciones-flask-con-apache2--mod_wsgi"},"Desplegando aplicaciones flask con apache2 + mod_wsgi"),(0,t.kt)("h2",{id:"ejercicio-ejecuci\xf3n-de-aplicaciones-python-flask"},"Ejercicio: Ejecuci\xf3n de aplicaciones python flask"),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"1. Crea una m\xe1quina en OpenStack con la que vamos a trabajar los ejercicios y talleres de esta unidad.")),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"2. Clona el repositorio de la aplicaci\xf3n ",(0,t.kt)("a",{parentName:"strong",href:"https://github.com/josedom24/guestbook"},"guestbook"),".")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"git clone {direcci\xf3n del repositorio}\n")),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"3. ",(0,t.kt)("inlineCode",{parentName:"strong"},"guestbook")," es una aplicaci\xf3n escrita en python flask. Es una aplicaci\xf3n donde podemos dejar guardados mensajes en un "),"\u201clibro de visita\u201d",(0,t.kt)("strong",{parentName:"p"},". Los mensajes se van a guardar en una base de datos no relacional llamada ",(0,t.kt)("inlineCode",{parentName:"strong"},"redis"),". ",(0,t.kt)("inlineCode",{parentName:"strong"},"redis")," es una base de datos clave-valor y necesitamos instalarla:")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"apt install redis\n")),(0,t.kt)("p",null,"Para m\xe1s informaci\xf3n sobre ",(0,t.kt)("inlineCode",{parentName:"p"},"redis")," puedes leer este interesante art\xedculo: ",(0,t.kt)("a",{parentName:"p",href:"https://www.josedomingo.org/pledin/2015/02/redis-base-de-datos-no-relacional/"},"Redis, base de datos no relacional"),"."),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"4. Crea un entorno virtual donde vamos a instalar las librer\xedas necesarias para que funcione nuestra aplicaci\xf3n (fichero requirements.txt).")),(0,t.kt)("p",null,"Para esto hemos creado el directorio venv y dentro un directorio flask:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"mkdir -p venv/flask\ncd venv/flask\npython3 -m venv .\nsource bin/activate\npip install -r /home/debian/guestbook/app/requirements.txt\n")),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"5. Ejecuta el servidor web de desarrollo ejecutando la siguientes instrucci\xf3n: python3 app.py. Recuerda abrir el puerto 5000 en el grupo de seguridad y accede desde el navegador a la URL ",(0,t.kt)("a",{parentName:"strong",href:"http://172.22.X.X:5000"},"http://172.22.X.X:5000"),".")),(0,t.kt)("p",null,"Para abrir el puerto 5000 desde el panel de control de OpenStack debes ir a la pesta\xf1a de seguridad y a\xf1adir una regla de entrada para el puerto 5000. Para que se aplique la regla debes reiniciar la m\xe1quina. Despu\xe9s, para acceder a la p\xe1gina web desde el navegador debes poner la direcci\xf3n IP de la m\xe1quina seguido de :5000."),(0,t.kt)("p",null,"Si te interesa, puedes ver en el c\xf3digo del programa c\xf3mo conectamos a redis en la direcci\xf3n ",(0,t.kt)("inlineCode",{parentName:"p"},"127.0.0.1")," en el puerto ",(0,t.kt)("inlineCode",{parentName:"p"},"6379"),". Los mensajes se guardan en una clave que es una lista que se llama ",(0,t.kt)("inlineCode",{parentName:"p"},"lista"),". Puedes acceder a la base de datos y ver el contenido de esa clave:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},'$ redis-cli \n127.0.0.1:6379> lrange lista 0 -1\n1) "Hola"\n')),(0,t.kt)("h2",{id:"procedimiento"},"Procedimiento"),(0,t.kt)("p",null,"Podemos seguir trabajando en la m\xe1quina de OpenStack del ejercicio anterior. Suponemos que ya tienes clonado el repositorio de la aplicaci\xf3n guestbook, y que has creado un entorno virtual donde has instalado las librer\xeda para que la aplicaci\xf3n funcione."),(0,t.kt)("h3",{id:"configuraci\xf3n-de-apache2-para-servir-una-aplicaci\xf3n-web-flask"},"Configuraci\xf3n de apache2 para servir una aplicaci\xf3n web flask"),(0,t.kt)("p",null,"Lo primero que tenemos que hacer es instalar el m\xf3dulo de apache2 wsgi:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"apt install libapache2-mod-wsgi-py3\n")),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},"Suponemos que tenemos un servidor web apache2 con el m\xf3dulo wsgi activado.")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},"Suponemos que nuestra aplicaci\xf3n se encuentra en ",(0,t.kt)("inlineCode",{parentName:"p"},"/home/debian/guestbook"),".")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},"Suponemos que hemos creado un entorno virtual con los paquetes instalados en ",(0,t.kt)("inlineCode",{parentName:"p"},"/home/debian/venv/flask"),"."))),(0,t.kt)("h3",{id:"creaci\xf3n-del-fichero-wsgi"},"Creaci\xf3n del fichero wsgi"),(0,t.kt)("p",null,"Lo primero que vamos a hacer es crear el fichero WSGI, que vamos a llamar ",(0,t.kt)("inlineCode",{parentName:"p"},"wsgi.py")," estar\xe1 en ",(0,t.kt)("inlineCode",{parentName:"p"},"/home/debian/guestbook/")," y tendr\xe1 el siguiente contenido:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"from app import prog as application\n")),(0,t.kt)("p",null,"Veamos:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"El ",(0,t.kt)("inlineCode",{parentName:"li"},"app")," corresponde con el nombre del m\xf3dulo, es decir, el fichero del programa, en nuestro caso se llama ",(0,t.kt)("inlineCode",{parentName:"li"},"app.py"),"."),(0,t.kt)("li",{parentName:"ul"},"El ",(0,t.kt)("inlineCode",{parentName:"li"},"prog")," corresponde a la aplicaci\xf3n flask creada en ",(0,t.kt)("inlineCode",{parentName:"li"},"app.py: prog = Flask(__name__)"),"."),(0,t.kt)("li",{parentName:"ul"},"Importamos la aplicaci\xf3n flask, pero la llamamos application necesario para que el servidor web pueda enviarle peticiones.")),(0,t.kt)("h3",{id:"configuraci\xf3n-de-apache2"},"Configuraci\xf3n de apache2"),(0,t.kt)("p",null,"Crea un virtualhost que se acceda con el nombre ",(0,t.kt)("inlineCode",{parentName:"p"},"flask.tunombre.org"),", esta configuraci\xf3n ir\xe1 en el fichero correspondiente:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"DocumentRoot /home/debian/guestbook\nWSGIDaemonProcess flask_guestbook python-path=/home/debian/guestbook:/home/debian/venv/flask/lib/python3.9/site-packages\nWSGIProcessGroup flask_guestbook\nWSGIScriptAlias / /home/debian/guestbook/wsgi.py process-group=flask_guestbook\n<Directory /home/debian/guestbook>\n        Require all granted\n</Directory>\n")),(0,t.kt)("p",null,"Para crear un virtualhost en apache2 debes crear un fichero en ",(0,t.kt)("inlineCode",{parentName:"p"},"/etc/apache2/sites-available/")," con el nombre del dominio que quieres usar. En este caso vamos a crear el fichero ",(0,t.kt)("inlineCode",{parentName:"p"},"flask.nazareth.org.conf")," con el siguiente contenido:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"<VirtualHost *:80>\n\n    ServerName flask.nazareth.org\n    DocumentRoot /home/debian/guestbook\n\n    <Directory /home/debian/guestbook>\n            Require all granted\n    </Directory>\n\n    WSGIDaemonProcess flask_guestbook python-path=/home/debian/guestbook:/home/debian/venv/flask/lib/python3.9/site-packages\n    WSGIProcessGroup flask_guestbook\n    WSGIScriptAlias / /home/debian/guestbook/wsgi.py process-group=flask_guestbook\n\n</VirtualHost>\n")),(0,t.kt)("p",null,"Vamos a explicar la configuraci\xf3n:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},"El ",(0,t.kt)("inlineCode",{parentName:"p"},"DocumentRoot")," se indica el directorio donde est\xe1 la aplicaci\xf3n. Realmente el servidor web siempre va a llamar al fichero WSGI ",(0,t.kt)("inlineCode",{parentName:"p"},"wsgi.py"),", pero el DocumentRoot es necesario para servir el contenido est\xe1tico.")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},"La directiva ",(0,t.kt)("inlineCode",{parentName:"p"},"WSGIDaemonProcess"),": Se define un grupo de procesos que se van a encargar de ejecutar la aplicaci\xf3n (servidor de aplicaciones). A estos procesos se le ponen un nombre (",(0,t.kt)("inlineCode",{parentName:"p"},"flask_guestbook"),") y se indica los directorios donde se encuentran la aplicaci\xf3n y los paquetes necesarios (",(0,t.kt)("inlineCode",{parentName:"p"},"python-path"),"), como puedes observar se pone el directorio donde esta la aplicaci\xf3n y el directorio donde se encuentran los paquetes en el entorno virtual, separados por dos puntos.")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},(0,t.kt)("inlineCode",{parentName:"p"},"WSGIProcessGroup"),": Nos permite agrupar procesos. Se pone el mismo nombre que hemos definido en la directiva anterior.")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},"La directiva ",(0,t.kt)("inlineCode",{parentName:"p"},"WSGIScriptAlias")," nos permite indicar que programa se va a ejecutar (el fichero WSGI: ",(0,t.kt)("inlineCode",{parentName:"p"},"/home/debian/guestbook/wsgi.py"),") cuando se haga una petici\xf3n a la url / y que proceso lo va a ejecutar."))),(0,t.kt)("p",null,"Reinicia el servicio web y prueba el funcionamiento. Si te da alg\xfan error 500 puedes ver los errores, en ",(0,t.kt)("inlineCode",{parentName:"p"},"/var/log/apache2/error.log"),"."),(0,t.kt)("p",null,"Para que el servidor web pueda acceder a la aplicaci\xf3n debemos activar el virtualhost:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"a2ensite flask.nazareth.org.conf\na2enmod wsgi\n")),(0,t.kt)("p",null,"En local, editamos el fichero ",(0,t.kt)("inlineCode",{parentName:"p"},"/etc/hosts")," y a\xf1adimos la siguiente l\xednea:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"172.22.200.117 flask.nazareth.org\n")),(0,t.kt)("p",null,"Reiniciamos el servicio web y probamos el funcionamiento en el navegador:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"systemctl restart apache2\n")),(0,t.kt)("p",null,"Dar\xe1 un error 500, ya que app es un directorio y no un fichero. Para esto hay que indicarle al servidor web que el fichero WSGI se encuentra en el directorio ",(0,t.kt)("inlineCode",{parentName:"p"},"app")," editando el fichero ",(0,t.kt)("inlineCode",{parentName:"p"},"wsgi.py"),":"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"from app.app import prog as application\n")),(0,t.kt)("p",null,"Con esto ya aparecer\xe1 la p\xe1gina web:"),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"wsgi",src:n(81495).Z,width:"859",height:"631"})),(0,t.kt)("h2",{id:"entrega"},"Entrega"),(0,t.kt)("h3",{id:"1-entrega-la-configuraci\xf3n-del-virtualhost"},"1. Entrega la configuraci\xf3n del virtualhost."),(0,t.kt)("p",null,"La configuraci\xf3n del virtualhost es la siguiente:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"<VirtualHost *:80>\n\n    ServerName flask.nazareth.org\n    DocumentRoot /home/debian/guestbook\n\n    <Directory /home/debian/guestbook>\n            Require all granted\n    </Directory>\n\n    WSGIDaemonProcess flask_guestbook python-path=/home/debian/guestbook:/home/debian/venv/flask/lib/python3.9/site-packages\n    WSGIProcessGroup flask_guestbook\n    WSGIScriptAlias / /home/debian/guestbook/wsgi.py process-group=flask_guestbook\n\n</VirtualHost>\n")),(0,t.kt)("h3",{id:"2-entrega-una-captura-de-pantalla-accediendo-a-la-aplicaci\xf3n-web"},"2. Entrega una captura de pantalla accediendo a la aplicaci\xf3n web."),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"wsgi",src:n(18512).Z,width:"859",height:"631"})))}u.isMDXComponent=!0},18512:(e,a,n)=>{n.d(a,{Z:()=>r});const r=n.p+"assets/images/taller1IAW4-2-13452ed6a32e93af6e038dcd6d479a0a.png"},81495:(e,a,n)=>{n.d(a,{Z:()=>r});const r=n.p+"assets/images/taller1IAW4-9d243d72a720e9a77da729a53ea77f10.png"}}]);