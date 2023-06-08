"use strict";(self.webpackChunkotter_shell=self.webpackChunkotter_shell||[]).push([[3577],{3905:(e,n,a)=>{a.d(n,{Zo:()=>p,kt:()=>g});var i=a(67294);function o(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function t(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?t(Object(a),!0).forEach((function(n){o(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):t(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,i,o=function(e,n){if(null==e)return{};var a,i,o={},t=Object.keys(e);for(i=0;i<t.length;i++)a=t[i],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(i=0;i<t.length;i++)a=t[i],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=i.createContext({}),c=function(e){var n=i.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):r(r({},n),e)),a},p=function(e){var n=c(e.components);return i.createElement(s.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var a=e.components,o=e.mdxType,t=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(a),m=o,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||t;return a?i.createElement(g,r(r({ref:n},p),{},{components:a})):i.createElement(g,r({ref:n},p))}));function g(e,n){var a=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var t=a.length,r=new Array(t);r[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:o,r[1]=l;for(var c=2;c<t;c++)r[c]=a[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}m.displayName="MDXCreateElement"},88400:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>t,metadata:()=>l,toc:()=>c});var i=a(87462),o=(a(67294),a(3905));const t={sidebar_position:50},r="Jenkins: Corrector ortogr\xe1fico de documentos markdown (test)",l={unversionedId:"Tasks/jenkins_corrector",id:"Tasks/jenkins_corrector",title:"Jenkins: Corrector ortogr\xe1fico de documentos markdown (test)",description:"Imaginemos que estamos escribiendo documentos markdown y lo guardamos en un repositorio de github. Queremos que cada vez que hagamos una modificaci\xf3n (commit - push) se pruebe (test) de forma autom\xe1tica si tienes alguna falta de ortograf\xeda. Ese proceso lo vamos a hacer de forma autom\xe1tica y continua con Jenkins. Recuerda que el repositorio es https://github.com/josedom24/ic-diccionario",source:"@site/docs/Tasks/jenkins_corrector.md",sourceDirName:"Tasks",slug:"/Tasks/jenkins_corrector",permalink:"/docs/Tasks/jenkins_corrector",draft:!1,editUrl:"https://github.com/belennazareth/ottershell/blob/main/docs/Tasks/jenkins_corrector.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{sidebar_position:50},sidebar:"tutorialSidebar",previous:{title:"Docker: Implantaci\xf3n de aplicaciones web Python en docker",permalink:"/docs/Tasks/docker_PYTHON"},next:{title:"Markdown Features",permalink:"/docs/Tasks/markdown-features"}},s={},c=[{value:"Definici\xf3n del pipeline",id:"definici\xf3n-del-pipeline",level:2},{value:"Disparador del pipeline",id:"disparador-del-pipeline",level:2},{value:"Notificaciones del pipeline",id:"notificaciones-del-pipeline",level:2},{value:"Entrega",id:"entrega",level:2},{value:"1.La URL del tu repositorio GitHub.",id:"1la-url-del-tu-repositorio-github",level:3},{value:"2. El contenido de la tu fichero Jenkinfile.",id:"2-el-contenido-de-la-tu-fichero-jenkinfile",level:3},{value:"3. Una captura de pantalla donde se vea la configuraci\xf3n del disparador del pipeline.",id:"3-una-captura-de-pantalla-donde-se-vea-la-configuraci\xf3n-del-disparador-del-pipeline",level:3},{value:"4. Una captura de un correo electr\xf3nico recibido sin ning\xfan error, y otro con alg\xfan error en al ejecuci\xf3n del pipeline.",id:"4-una-captura-de-un-correo-electr\xf3nico-recibido-sin-ning\xfan-error-y-otro-con-alg\xfan-error-en-al-ejecuci\xf3n-del-pipeline",level:3}],p={toc:c},d="wrapper";function u(e){let{components:n,...t}=e;return(0,o.kt)(d,(0,i.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"jenkins-corrector-ortogr\xe1fico-de-documentos-markdown-test"},"Jenkins: Corrector ortogr\xe1fico de documentos markdown (test)"),(0,o.kt)("p",null,"Imaginemos que estamos escribiendo documentos markdown y lo guardamos en un repositorio de github. Queremos que cada vez que hagamos una modificaci\xf3n (commit - push) se pruebe (test) de forma autom\xe1tica si tienes alguna falta de ortograf\xeda. Ese proceso lo vamos a hacer de forma autom\xe1tica y continua con Jenkins. Recuerda que el repositorio es ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/josedom24/ic-diccionario"},"https://github.com/josedom24/ic-diccionario")),(0,o.kt)("h2",{id:"definici\xf3n-del-pipeline"},"Definici\xf3n del pipeline"),(0,o.kt)("p",null,"Hasta ahora al definir un pipeline lo hemos escrito directamente en la configuraci\xf3n. Otra forma de hacerlo es tener definido el pipeline en un fichero llamado Jenkinsfile que estar\xe1 en un repositorio. Al crear el pipeline lo indicaremos de la siguiente forma:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://fp.josedomingo.org/iaw2223/7_ic/img/pipe6.png",alt:"jenkins"})),(0,o.kt)("p",null,"El fichero Jenkinfile tiene el siguiente contenido:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-groovy"},"pipeline {\n    agent {\n        docker { image 'debian'\n        args '-u root:root'\n        }\n    }\n    stages {\n        stage('Clone') {\n            steps {\n                git branch:'master',url:'https://github.com/josedom24/ic-travis-diccionario.git'\n            }\n        }\n        stage('Install') {\n            steps {\n                sh 'apt-get update && apt-get install -y aspell-es ' \n            }\n        }\n        stage('Test')\n        {\n            steps {\n                sh '''\n                export LC_ALL=C.UTF-8\n                OUTPUT=`cat doc/*.md | aspell list -d es -p ./.aspell.es.pws`; if [ -n \"$OUTPUT\" ]; then echo $OUTPUT; exit 1; fi'''\n            }\n        }\n    }\n}\n")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Vamos a crear un contenedor con debian, y vamos a usar el usuario root en la imagen."),(0,o.kt)("li",{parentName:"ol"},"Hemos clonado el repositorio con el comando git en el stage Clone."),(0,o.kt)("li",{parentName:"ol"},"En el stage Install actualizamos e instalamos la herramienta que vamos a utilizar. Podr\xedamos partir de una imagen construida por nosotros donde tuvi\xe9ramos ya esta herramienta instalada, y no har\xeda falta este paso."),(0,o.kt)("li",{parentName:"ol"},"En el stage Test hacemos la comprobaci\xf3n, hemos configurado el contenedor para que use UTF8.")),(0,o.kt)("p",null,"Primero instalamos Jenkins siguiendo los pasos de la p\xe1gina oficial: ",(0,o.kt)("a",{parentName:"p",href:"https://www.jenkins.io/doc/book/installing/linux/#debianubuntu"},"https://www.jenkins.io/doc/book/installing/linux/#debianubuntu")),(0,o.kt)("p",null,"Pedira que reiniciemos el servicio de Jenkins: "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"DOCKER",src:a(48338).Z,width:"834",height:"628"})),(0,o.kt)("p",null,"A continuaci\xf3n, accedemos a la interfaz web de Jenkins:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"DOCKER",src:a(21119).Z,width:"849",height:"904"}),"\n",(0,o.kt)("img",{alt:"DOCKER",src:a(10476).Z,width:"849",height:"904"})),(0,o.kt)("p",null,"Una vez completado todo el registro, nos aparecer\xe1 la siguiente pantalla:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"DOCKER",src:a(25915).Z,width:"1122",height:"894"})),(0,o.kt)("h2",{id:"disparador-del-pipeline"},"Disparador del pipeline"),(0,o.kt)("p",null,"Tenemos varias formas de activar de forma autom\xe1tica la ejecuci\xf3n del pipeline:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://fp.josedomingo.org/iaw2223/7_ic/img/pipe7.png",alt:"jenkins"})),(0,o.kt)("p",null,"En este ejercicio vamos a usar la opci\xf3n Consultar repositorio (SCM). Esta opci\xf3n no es exactamente cuando se hace un push en el repositorio, sino que se pone un programador cron indicando cada cuanto tiempo se mira el repositorio, si ha cambiado el repositorio se lanza el pipeline. Nosotros vamos a poner: ",(0,o.kt)("inlineCode",{parentName:"p"},"* * * * *"),", miraremos el repositorio cada minuto:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://fp.josedomingo.org/iaw2223/7_ic/img/pipe8.png",alt:"jenkins"})),(0,o.kt)("h2",{id:"notificaciones-del-pipeline"},"Notificaciones del pipeline"),(0,o.kt)("p",null,"Vamos a aprender como podemos hacer que el pipeline mande un correo al finalizar. Para ello lo primero instala un servidor de correo de forma adecuada en la m\xe1quina que tiene Jenkins. Lo siguiente es configurar Jenkins en ",(0,o.kt)("inlineCode",{parentName:"p"},"Administrar Jenkins -> Configurar el sistema"),":"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://fp.josedomingo.org/iaw2223/7_ic/img/pipe9.png",alt:"jenkins"})),(0,o.kt)("p",null,"Y al pipeline le a\xf1adimos las siguientes l\xedneas:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-groovy"},'...\n    stages {\n    ...\n    }\n    post {\n         always {\n          mail to: \'usuario@example.com\',\n          subject: "Status of pipeline: ${currentBuild.fullDisplayName}",\n          body: "${env.BUILD_URL} has result ${currentBuild.result}"\n        }\n      }\n}\n')),(0,o.kt)("h2",{id:"entrega"},"Entrega"),(0,o.kt)("h3",{id:"1la-url-del-tu-repositorio-github"},"1.La URL del tu repositorio GitHub."),(0,o.kt)("h3",{id:"2-el-contenido-de-la-tu-fichero-jenkinfile"},"2. El contenido de la tu fichero Jenkinfile."),(0,o.kt)("h3",{id:"3-una-captura-de-pantalla-donde-se-vea-la-configuraci\xf3n-del-disparador-del-pipeline"},"3. Una captura de pantalla donde se vea la configuraci\xf3n del disparador del pipeline."),(0,o.kt)("h3",{id:"4-una-captura-de-un-correo-electr\xf3nico-recibido-sin-ning\xfan-error-y-otro-con-alg\xfan-error-en-al-ejecuci\xf3n-del-pipeline"},"4. Una captura de un correo electr\xf3nico recibido sin ning\xfan error, y otro con alg\xfan error en al ejecuci\xf3n del pipeline."))}u.isMDXComponent=!0},21119:(e,n,a)=>{a.d(n,{Z:()=>i});const i=a.p+"assets/images/taller1IAW7-2-a6b8cc1c2b2380b7d858a23c3a9d2aa7.png"},10476:(e,n,a)=>{a.d(n,{Z:()=>i});const i=a.p+"assets/images/taller1IAW7-3-3561e044d40588847b4ca447e2106a3e.png"},25915:(e,n,a)=>{a.d(n,{Z:()=>i});const i=a.p+"assets/images/taller1IAW7-4-d0684beb0ea3c52bc4601c8cbbe46661.png"},48338:(e,n,a)=>{a.d(n,{Z:()=>i});const i=a.p+"assets/images/taller1IAW7-c6145e6f7401a4ea62ac55455386615f.png"}}]);