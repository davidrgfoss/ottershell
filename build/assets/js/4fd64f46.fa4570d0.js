"use strict";(self.webpackChunkotter_shell=self.webpackChunkotter_shell||[]).push([[8348],{3905:(e,a,n)=>{n.d(a,{Zo:()=>p,kt:()=>g});var o=n(67294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function t(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?t(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):t(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,o,r=function(e,a){if(null==e)return{};var n,o,r={},t=Object.keys(e);for(o=0;o<t.length;o++)n=t[o],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(o=0;o<t.length;o++)n=t[o],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),c=function(e){var a=o.useContext(i),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},p=function(e){var a=c(e.components);return o.createElement(i.Provider,{value:a},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return o.createElement(o.Fragment,{},a)}},m=o.forwardRef((function(e,a){var n=e.components,r=e.mdxType,t=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,g=d["".concat(i,".").concat(m)]||d[m]||u[m]||t;return n?o.createElement(g,l(l({ref:a},p),{},{components:n})):o.createElement(g,l({ref:a},p))}));function g(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var t=n.length,l=new Array(t);l[0]=m;var s={};for(var i in a)hasOwnProperty.call(a,i)&&(s[i]=a[i]);s.originalType=e,s[d]="string"==typeof e?e:r,l[1]=s;for(var c=2;c<t;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6416:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>t,metadata:()=>s,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const t={sidebar_position:50},l="Docker: Implantaci\xf3n de aplicaciones web Python en docker",s={unversionedId:"Tasks/docker_PYTHON",id:"Tasks/docker_PYTHON",title:"Docker: Implantaci\xf3n de aplicaciones web Python en docker",description:"Despliegue en docker Django",source:"@site/docs/Tasks/docker_PYTHON.md",sourceDirName:"Tasks",slug:"/Tasks/docker_PYTHON",permalink:"/docs/Tasks/docker_PYTHON",draft:!1,editUrl:"https://github.com/belennazareth/ottershell/blob/main/docs/Tasks/docker_PYTHON.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{sidebar_position:50},sidebar:"tutorialSidebar",previous:{title:"Docker: Implantaci\xf3n de aplicaciones web PHP en docker",permalink:"/docs/Tasks/docker_PHP"},next:{title:"Markdown Features",permalink:"/docs/Tasks/markdown-features"}},i={},c=[{value:"Despliegue en docker Django",id:"despliegue-en-docker-django",level:2},{value:"Entrega",id:"entrega",level:2},{value:"1. Crea una imagen docker para poder desplegar un contenedor con la aplicaci\xf3n. La imagen la puedes hacer desde una imagen base o desde la imagen oficial de python.",id:"1-crea-una-imagen-docker-para-poder-desplegar-un-contenedor-con-la-aplicaci\xf3n-la-imagen-la-puedes-hacer-desde-una-imagen-base-o-desde-la-imagen-oficial-de-python",level:3},{value:"2. Crea un docker-compose para desplegar los contenedores necesarios. Configura los vol\xfamenes que creas necesarios para que la aplicaci\xf3n sea persistente.",id:"2-crea-un-docker-compose-para-desplegar-los-contenedores-necesarios-configura-los-vol\xfamenes-que-creas-necesarios-para-que-la-aplicaci\xf3n-sea-persistente",level:3},{value:"3. Una vez probada en el entorno de desarrollo, despliega la aplicaci\xf3n en tu VPS usando el docker-compose y configurando el nginx como proxy inveso para acceder por nombre a la aplicaci\xf3n.",id:"3-una-vez-probada-en-el-entorno-de-desarrollo-despliega-la-aplicaci\xf3n-en-tu-vps-usando-el-docker-compose-y-configurando-el-nginx-como-proxy-inveso-para-acceder-por-nombre-a-la-aplicaci\xf3n",level:3}],p={toc:c},d="wrapper";function u(e){let{components:a,...t}=e;return(0,r.kt)(d,(0,o.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"docker-implantaci\xf3n-de-aplicaciones-web-python-en-docker"},"Docker: Implantaci\xf3n de aplicaciones web Python en docker"),(0,r.kt)("h2",{id:"despliegue-en-docker-django"},"Despliegue en docker Django"),(0,r.kt)("p",null,"Queremos desplegar en docker la aplicaci\xf3n escrita en python django: tutorial de django, que desplegamos en la tarea Despliegue de aplicaciones python."),(0,r.kt)("p",null,"Tienes que tener en cuenta los siguientes aspectos:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"La aplicaci\xf3n debe guardar los datos en una base de datos mariadb.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"La aplicaci\xf3n se podr\xe1 configurar para indicar los par\xe1metros de conexi\xf3n a la base de datos: usuario, contrase\xf1a, host y base de datos.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"La aplicaci\xf3n deber\xe1 tener creado un usuario administrador para el acceso."))),(0,r.kt)("p",null,"Primero vamos a clonar el repositorio de la aplicaci\xf3n:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/josedom24/django_tutorial.git\n")),(0,r.kt)("p",null,"En el entorno de desarrollo, creamos la red para los contenedores:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker network create django_net\n")),(0,r.kt)("p",null,"Creamos el contenedor de la base de datos:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -d --name mariadb -v vol_polls:/var/lib/mysql --network django_net -e MARIADB_ROOT_PASSWORD=admin -e MARIADB_USER=django -e MARIADB_PASSWORD=admin -e MARIADB_DATABASE=django mariadb\n")),(0,r.kt)("p",null,"Modificamos el fichero ",(0,r.kt)("inlineCode",{parentName:"p"},"settings.py")," de la aplicaci\xf3n para que se conecte a la base de datos:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# import os\n\nimport os\n\nBASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))\n\n# base de datos\n\nDATABASES = {\n    'default': {\n        'ENGINE': 'django.db.backends.mysql',\n        'NAME': os.environ.get(\"BASE_DATOS\"),\n        'USER': os.environ.get('USUARIO'),\n        'PASSWORD': os.environ.get(\"CONTRA\"),\n        'HOST': os.environ.get('HOST'),\n        'PORT': '3306',\n    }\n}\n\n# host permitidos\n\nALLOWED_HOSTS = [os.environ.get(\"ALLOWED_HOSTS\")]\n\n# urls\n\nSTATIC_ROOT = os.path.join(BASE_DIR, 'static')\nSTATIC_URL = '/static/'\nCSRF_TRUSTED_ORIGINS = ['http://*.ottershell.es','http://*.127.0.0.1','https://*.ottershell.es','https://*.127.0.0.1']\n")),(0,r.kt)("p",null,"Creamos el fichero ",(0,r.kt)("inlineCode",{parentName:"p"},"polls.sh"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"#! /bin/sh\n\nsleep 2\npython3 manage.py makemigrations\npython3 manage.py migrate\npython3 manage.py createsuperuser --noinput\npython3 manage.py collectstatic --noinput\npython3 manage.py runserver 0.0.0.0:8006\n")),(0,r.kt)("p",null,"Creamos el fichero ",(0,r.kt)("inlineCode",{parentName:"p"},"Dockerfile"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dockerfile"},'FROM python:3\nWORKDIR /usr/src/app\nMAINTAINER Belen Nazareth Duran "belennazareth29@gmail.com"\nRUN pip install --root-user-action=ignore --upgrade pip && pip install --root-user-action=ignore django mysqlclient && git clone https://github.com/belennazareth/docker_django_tutorial.git /usr/src/app && mkdir static\nADD polls.sh /usr/src/app/\nRUN chmod +x /usr/src/app/polls.sh\nENTRYPOINT ["/usr/src/app/polls.sh"]\n')),(0,r.kt)("p",null,"Creamos la imagen:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker build -t belennazareth/django:v1 .\n")),(0,r.kt)("p",null,"Creamos el fichero ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yml"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"version: '3.3'\nservices:\n  django-tutorial:\n    container_name: django-tutorial\n    image: belennazareth/django:v1\n    restart: always\n    environment:\n      ALLOWED_HOSTS: \"*\"\n      HOST: bd_mariadb_django\n      USUARIO: django\n      CONTRA: django\n      BASE_DATOS: django\n      DJANGO_SUPERUSER_PASSWORD: admin\n      DJANGO_SUPERUSER_USERNAME: admin\n      DJANGO_SUPERUSER_EMAIL: admin@admin.org\n    ports:\n      - 8084:8006\n    depends_on:\n      - db_django\n  db_django:\n    container_name: bd_mariadb_django\n    image: mariadb:10.5\n    restart: always\n    environment:\n      MARIADB_ROOT_PASSWORD: root\n      MARIADB_DATABASE: django\n      MARIADB_USER: django\n      MARIADB_PASSWORD: django\n    volumes:\n      - mariadb_data_django:/var/lib/mysql\nvolumes:\n    mariadb_data_django:\n")),(0,r.kt)("p",null,"Levantamos los contenedores:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose up -d\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"DOCKER",src:n(49134).Z,width:"1012",height:"1039"}),"\n",(0,r.kt)("img",{alt:"DOCKER",src:n(21697).Z,width:"1012",height:"1039"})),(0,r.kt)("p",null,"Ahora que ya hemos comprobado que funciona, vamos a subir la imagen a docker hub:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker push belennazareth/django:v1\n")),(0,r.kt)("p",null,"Para pasarlo al entorno de producci\xf3n, hay que a\xf1adir un registro de tipo A en el DNS que apunte a la IP del servidor. Adem\xe1s, con certbot, generamos un certificado para el dominio:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo certbot certonly --standalone -d django.ottershell.es\n")),(0,r.kt)("p",null,"Una vez hecho esto, en el entorno de producci\xf3n (VPS), creamos el proxy inverso con nginx:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"nano /etc/nginx/sites-available/django.ottershell.es.conf\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"server {\n        listen 80;\n        listen [::]:80;\n\n        server_name django.ottershell.es;\n\n        return 301 https://$host$request_uri;\n}\n\nserver {\n        listen 443 ssl http2;\n        listen [::]:443 ssl http2;\n\n        ssl    on;\n        ssl_certificate    /etc/letsencrypt/live/django.ottershell.es/fullchain.pem;\n        ssl_certificate_key    /etc/letsencrypt/live/django.ottershell.es/privkey.pem;\n\n        index index.html index.php index.htm index.nginx-debian.html;\n\n        server_name django.ottershell.es;\n\n        location / {\n                proxy_pass http://localhost:8084;\n                include proxy_params;\n        }\n}\n")),(0,r.kt)("p",null,"Generamos el enlace simb\xf3lico:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ln -s /etc/nginx/sites-available/django.ottershell.es.conf /etc/nginx/sites-enabled/\n")),(0,r.kt)("p",null,"Reiniciamos nginx:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl restart nginx\n")),(0,r.kt)("p",null,"Hacemos un pull de la imagen de docker hub:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull belennazareth/django:v1\n")),(0,r.kt)("p",null,"Y copiamos el fichero ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," descrito anteriormente en el VPS. Lo levantamos:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose up -d\n")),(0,r.kt)("h2",{id:"entrega"},"Entrega"),(0,r.kt)("h3",{id:"1-crea-una-imagen-docker-para-poder-desplegar-un-contenedor-con-la-aplicaci\xf3n-la-imagen-la-puedes-hacer-desde-una-imagen-base-o-desde-la-imagen-oficial-de-python"},"1. Crea una imagen docker para poder desplegar un contenedor con la aplicaci\xf3n. La imagen la puedes hacer desde una imagen base o desde la imagen oficial de python."),(0,r.kt)("h3",{id:"2-crea-un-docker-compose-para-desplegar-los-contenedores-necesarios-configura-los-vol\xfamenes-que-creas-necesarios-para-que-la-aplicaci\xf3n-sea-persistente"},"2. Crea un docker-compose para desplegar los contenedores necesarios. Configura los vol\xfamenes que creas necesarios para que la aplicaci\xf3n sea persistente."),(0,r.kt)("h3",{id:"3-una-vez-probada-en-el-entorno-de-desarrollo-despliega-la-aplicaci\xf3n-en-tu-vps-usando-el-docker-compose-y-configurando-el-nginx-como-proxy-inveso-para-acceder-por-nombre-a-la-aplicaci\xf3n"},"3. Una vez probada en el entorno de desarrollo, despliega la aplicaci\xf3n en tu VPS usando el docker-compose y configurando el nginx como proxy inveso para acceder por nombre a la aplicaci\xf3n."))}u.isMDXComponent=!0},21697:(e,a,n)=>{n.d(a,{Z:()=>o});const o=n.p+"assets/images/dockerPYTHONIAW6-2-e932a194979a12ff572f211e60f06bac.png"},49134:(e,a,n)=>{n.d(a,{Z:()=>o});const o=n.p+"assets/images/dockerPYTHONIAW6-e87d04c50a91b7f5255a563f1497a29b.png"}}]);