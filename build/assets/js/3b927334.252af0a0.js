"use strict";(self.webpackChunkotter_shell=self.webpackChunkotter_shell||[]).push([[3723],{3905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>g});var n=t(67294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function r(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=n.createContext({}),c=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},d=function(e){var a=c(e.components);return n.createElement(o.Provider,{value:a},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,s=e.originalType,o=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),p=c(t),m=i,g=p["".concat(o,".").concat(m)]||p[m]||u[m]||s;return t?n.createElement(g,l(l({ref:a},d),{},{components:t})):n.createElement(g,l({ref:a},d))}));function g(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var s=t.length,l=new Array(s);l[0]=m;var r={};for(var o in a)hasOwnProperty.call(a,o)&&(r[o]=a[o]);r.originalType=e,r[p]="string"==typeof e?e:i,l[1]=r;for(var c=2;c<s;c++)l[c]=t[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},81381:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var n=t(87462),i=(t(67294),t(3905));const s={sidebar_position:15},l="Migraci\xf3n CentOS",r={unversionedId:"Tasks/migracion_centos",id:"Tasks/migracion_centos",title:"Migraci\xf3n CentOS",description:"Descripci\xf3n de la actividad",source:"@site/docs/Tasks/migracion_centos.md",sourceDirName:"Tasks",slug:"/Tasks/migracion_centos",permalink:"/docs/Tasks/migracion_centos",draft:!1,editUrl:"https://github.com/belennazareth/ottershell/blob/main/docs/Tasks/migracion_centos.md",tags:[],version:"current",sidebarPosition:15,frontMatter:{sidebar_position:15},sidebar:"tutorialSidebar",previous:{title:"Instalaci\xf3n de un servidor LEMP",permalink:"/docs/Tasks/lemp"},next:{title:"PRIMER BOLET\xcdN PL/SQL",permalink:"/docs/Tasks/plsql_basica"}},o={},c=[{value:"Descripci\xf3n de la actividad",id:"descripci\xf3n-de-la-actividad",level:2},{value:"Puntos a tratar",id:"puntos-a-tratar",level:2},{value:"1.- Analiza el desencadenante de la retirada de centOS 8 del mercado. \xbfQu\xe9 opini\xf3n tienes al respecto?",id:"1--analiza-el-desencadenante-de-la-retirada-de-centos-8-del-mercado-qu\xe9-opini\xf3n-tienes-al-respecto",level:3},{value:"2.- Crea una cuenta en Red Hat y desc\xe1rgate la iso de Red Hat Enterprise Linux (REL) y eval\xfaa el producto. Comenta el procedimiento de alta.",id:"2--crea-una-cuenta-en-red-hat-y-desc\xe1rgate-la-iso-de-red-hat-enterprise-linux-rel-y-eval\xfaa-el-producto-comenta-el-procedimiento-de-alta",level:3},{value:"3.- Descarga la iso de CentOS Stream y eval\xfaa el producto.",id:"3--descarga-la-iso-de-centos-stream-y-eval\xfaa-el-producto",level:3},{value:"4.- Descarga la iso de una de las otras distribuciones candidatas, indica criterios para la elecci\xf3n de la nueva distribuci\xf3n y eval\xfaa el producto.",id:"4--descarga-la-iso-de-una-de-las-otras-distribuciones-candidatas-indica-criterios-para-la-elecci\xf3n-de-la-nueva-distribuci\xf3n-y-eval\xfaa-el-producto",level:3},{value:"4.1.- Migraci\xf3n de Centos 6 a Eurolinux",id:"41--migraci\xf3n-de-centos-6-a-eurolinux",level:4}],d={toc:c},p="wrapper";function u(e){let{components:a,...s}=e;return(0,i.kt)(p,(0,n.Z)({},d,s,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"migraci\xf3n-centos"},"Migraci\xf3n CentOS"),(0,i.kt)("h2",{id:"descripci\xf3n-de-la-actividad"},"Descripci\xf3n de la actividad"),(0,i.kt)("p",null,"Debido al anuncio del fin de soporte por parte de Red Hat de Centos8 el pasado 31 de diciembre de 2021, y teniendo en cuentas que el fin de vida de centos 7 est\xe1 programada para el 30 de junio de 2024. Han salido m\xfaltiples distribuciones que cubren el hueco dejado por esta distribuci\xf3n tan extendida y tan usada en el \xe1mbito de servidores."),(0,i.kt)("p",null,"En la presente pr\xe1ctica, analiza posibles versiones candidatas y opciones desplegadas para la migraci\xf3n de tus servidores CentOS."),(0,i.kt)("p",null,"El espectro es amplio:"),(0,i.kt)("p",null,"-"," Cambiar el rumbo a una nueva distribuci\xf3n, debian, opensuse, slakware, etc."),(0,i.kt)("p",null,"-"," Soluciones aportadas por Red Hat: Red Hat Enterprise Linux, CentOS Stream."),(0,i.kt)("p",null,"-"," Soluci\xf3n aportada por Oracle Linux"),(0,i.kt)("p",null,"Nuevas distribuciones surgidas para paliar el hueco dejado:"),(0,i.kt)("p",null,"-"," AlmaLinux"),(0,i.kt)("p",null,"-"," Rocky Linux"),(0,i.kt)("p",null,"-"," VZLinux"),(0,i.kt)("p",null,"-"," euroLinux"),(0,i.kt)("h2",{id:"puntos-a-tratar"},"Puntos a tratar"),(0,i.kt)("h3",{id:"1--analiza-el-desencadenante-de-la-retirada-de-centos-8-del-mercado-qu\xe9-opini\xf3n-tienes-al-respecto"},"1.- Analiza el desencadenante de la retirada de centOS 8 del mercado. \xbfQu\xe9 opini\xf3n tienes al respecto?"),(0,i.kt)("p",null,"Seg\xfan Red Hat, el motivo de la retirada de CentOS 8 es que sintieron la necesidad de innovar en el desarrollo de centos y buscar una estabilidad resolviendo los problemas que se les presentaron en el pasado.\nAdem\xe1s, vieron que reconstruir o clonar lo que ya estaba hecho no era la mejor opci\xf3n para seguir avanzando.\nPor lo tanto, decicidieron realizar un cambio de recursos e invertir en el desarrollo de CentOS Stream, que es la versi\xf3n de desarrollo de RHEL 8. Como consecuencia, CentOS 8 no recibir\xe1 m\xe1s actualizaciones de seguridad, ni correcciones de errores, ni actualizaciones de software."),(0,i.kt)("h3",{id:"2--crea-una-cuenta-en-red-hat-y-desc\xe1rgate-la-iso-de-red-hat-enterprise-linux-rel-y-eval\xfaa-el-producto-comenta-el-procedimiento-de-alta"},"2.- Crea una cuenta en Red Hat y desc\xe1rgate la iso de Red Hat Enterprise Linux (REL) y eval\xfaa el producto. Comenta el procedimiento de alta."),(0,i.kt)("p",null,"Despu\xe9s de registrarnos en la p\xe1gina de Red Hat, nos descargamos la iso de RHEL y la instalamos en una m\xe1quina virtual:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"cent",src:t(20053).Z,width:"1360",height:"961"})),(0,i.kt)("p",null,"Instalaci\xf3n:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Primero aparecer\xe1 el siguiente menu donde podremos elegir entre iniciar la instalaci\xf3n, entrar en el modo de recuperaci\xf3n o probar el sistema sin instalarlo:")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"cent",src:t(42444).Z,width:"1044",height:"892"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Despu\xe9s de seleccionar el idioma, aparece el men\xfa de instalaci\xf3n:")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"cent",src:t(17475).Z,width:"1044",height:"892"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Rellenamos todos los campos e iniciamos la instalaci\xf3n:")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"cent",src:t(63124).Z,width:"1044",height:"892"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Al finalizar la instalaci\xf3n, reiniciamos la m\xe1quina virtual y entramos en el sistema:")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"cent",src:t(49804).Z,width:"1044",height:"892"}),"\n",(0,i.kt)("img",{alt:"cent",src:t(74131).Z,width:"1044",height:"892"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Entramos en la terminal y ejecutamos, como administrador, el siguiente comando para registrarnos con nuestra cuenta de Red Hat:"),(0,i.kt)("p",{parentName:"li"},"  subscription-manager register"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"cent",src:t(75209).Z,width:"1024",height:"876"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Con esto ya estar\xedamos registrados y podremos instalar paquetes de Red Hat Enterprise Linux. Actualizamos para poder tener todos los paquetes actualizados:"),(0,i.kt)("p",{parentName:"li"},"  yum update"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"cent",src:t(59432).Z,width:"1044",height:"892"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Podemos comprobar que tenemos acceso a los repositorios de Red Hat Enterprise Linux con el siguiente comando:"),(0,i.kt)("p",{parentName:"li"},"  yum repolist"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"cent",src:t(26981).Z,width:"1044",height:"892"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Podemos instalar paquetes de Red Hat Enterprise Linux con el siguiente comando:"),(0,i.kt)("p",{parentName:"li"},"  yum install {paquete}")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Por ejemplo, instalamos el paquete de apache:"),(0,i.kt)("p",{parentName:"li"},"  yum install httpd"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"cent",src:t(18110).Z,width:"1044",height:"892"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Comprobamos que se ha instalado correctamente ejecutando el siguiente comando:"),(0,i.kt)("p",{parentName:"li"},"  systemctl status httpd"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"cent",src:t(61979).Z,width:"1044",height:"892"})),(0,i.kt)("p",null,"Con este an\xe1lisis podemos ver que RHEL es una distribuci\xf3n muy completa y que tiene una gran variedad de paquetes que podemos instalar. Adem\xe1s, podemos instalar paquetes de Red Hat Enterprise Linux que no est\xe1n disponibles en otras distribuciones."),(0,i.kt)("p",null,"\u3164\u3164\u3164\u3164\u3164\u3164\u3164\u3164\u3164\u3164\u3164\u3164\u3164\u3164\u3164\u3164\u3164\u3164\u3164\u3164\u3164\u3164\u3164\u3164\u3164\u3164\u3164\ud83d\udcab\u200a                 \ud83d\udcab\u200a                    \ud83d\udcab\u200a                     \ud83d\udcab\u3164\u3164\u3164\u3164\u3164\u3164\u3164\u3164\u3164\u3164\u3164\u3164\u3164\u3164\u3164\u3164\u3164\u3164\u3164\u3164\u3164\u3164\u3164\u3164\u3164\u3164\u3164\u3164\u3164\u3164"),(0,i.kt)("h3",{id:"3--descarga-la-iso-de-centos-stream-y-eval\xfaa-el-producto"},"3.- Descarga la iso de CentOS Stream y eval\xfaa el producto."),(0,i.kt)("p",null,"Lo primero ser\xe1 descargar la iso de CentOS Stream desde la p\xe1gina oficial de ",(0,i.kt)("a",{parentName:"p",href:"https://www.centos.org/centos-stream/"},"CentOS"),", al ejecutar la iso en una m\xe1quina virtual, nos aparecer\xe1 el siguiente men\xfa:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"cent",src:t(22762).Z,width:"1044",height:"892"})),(0,i.kt)("p",null,'Despu\xe9s de seleccionar "Install CentOS Stream", nos aparecer\xe1 la selecci\xf3n del idioma. Al seleccionar el idioma, nos aparecer\xe1 el siguiente men\xfa muy parecido al de RHEL:'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"cent",src:t(89145).Z,width:"1044",height:"892"})),(0,i.kt)("p",null,"Rellenamos todos los campos y comenzamos la instalaci\xf3n:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"cent",src:t(35658).Z,width:"1044",height:"892"})),(0,i.kt)("p",null,"Al finalizar la instalaci\xf3n, reiniciamos la m\xe1quina virtual y entramos en el sistema:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"cent",src:t(57992).Z,width:"1044",height:"892"})),(0,i.kt)("p",null,"Podemos comprobar la version de centos que tenemos instalada con el siguiente comando:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cat /etc/centos-release\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"cent",src:t(81532).Z,width:"1044",height:"892"})),(0,i.kt)("p",null,"Actualizamos para poder tener todos los paquetes actualizados:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"yum update\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"cent",src:t(91701).Z,width:"1044",height:"892"})),(0,i.kt)("p",null,"Podemos comprobar que tenemos acceso a los repositorios de CentOS Stream con el siguiente comando:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"yum repolist\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"cent",src:t(72144).Z,width:"1044",height:"892"})),(0,i.kt)("p",null,"Al igual que en RHEL, podemos instalar paquetes de CentOS Stream con el siguiente comando:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"yum install {paquete}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Por ejemplo, instalamos el paquete de apache:"),(0,i.kt)("p",{parentName:"li"},"  yum install httpd"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"cent",src:t(60255).Z,width:"1044",height:"892"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Comprobamos que se ha instalado correctamente ejecutando el siguiente comando:"),(0,i.kt)("p",{parentName:"li"},"  systemctl status httpd"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"cent",src:t(53154).Z,width:"1044",height:"892"})),(0,i.kt)("p",null,"CentOS Stream es una distribuci\xf3n de Linux de c\xf3digo abierto que se basa en RHEL y ofrece actualizaciones de software continuas. Est\xe1 dise\xf1ado para usuarios que desean estar a la vanguardia de las actualizaciones de software.\nLa ventaja es que se puede utilizarse tanto en servidores como en estaciones de trabajo, y que es compatible con paquetes de software RHEL.\nA diferencia de RHEL, CentOs Stream ofrece actualizaciones de software continuas, por lo que no es necesario actualizar la distribuci\xf3n cada cierto tiempo. Adem\xe1s, CentOs Stream no ofrece soporte oficial, mientras que RHEL ofrece soporte t\xe9cnico y de actualizaciones de seguridad."),(0,i.kt)("h3",{id:"4--descarga-la-iso-de-una-de-las-otras-distribuciones-candidatas-indica-criterios-para-la-elecci\xf3n-de-la-nueva-distribuci\xf3n-y-eval\xfaa-el-producto"},"4.- Descarga la iso de una de las otras distribuciones candidatas, indica criterios para la elecci\xf3n de la nueva distribuci\xf3n y eval\xfaa el producto."),(0,i.kt)("p",null,"En este caso vamos a descargar la iso ",(0,i.kt)("inlineCode",{parentName:"p"},"Eurolinux"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"Eurolinux")," es una distribuci\xf3n de software libre y de c\xf3digo abierto basada en ",(0,i.kt)("inlineCode",{parentName:"p"},"RHEL")," (Red Hat Enterprise Linux) que est\xe1 dise\xf1ada para ofrecer soporte t\xe9cnico y actualizaciones de seguridad a largo plazo. La decisi\xf3n de utilizar Eurolinux como alternativa a otras distribuciones que ya no cuentan con soporte, como CentOS, puede resultar muy beneficioso para las organizaciones, ya que garantiza la continuidad operativa y la seguridad de los sistemas."),(0,i.kt)("p",null,"La migraci\xf3n de ",(0,i.kt)("inlineCode",{parentName:"p"},"RHEL 6")," a ",(0,i.kt)("inlineCode",{parentName:"p"},"Eurolinux")," es un proceso relativamente sencillo que no requiere demasiado esfuerzo ni tiempo, y que puede realizarse mediante un script espec\xedfico proporcionado por ",(0,i.kt)("inlineCode",{parentName:"p"},"Eurolinux"),". Este script se encarga de la migraci\xf3n de los paquetes y datos de la m\xe1quina, y asegura la compatibilidad con los paquetes de software de ",(0,i.kt)("inlineCode",{parentName:"p"},"RHEL"),", se recomienda hacer una copia de seguridad de los datos antes de realizar la migraci\xf3n para evitar la p\xe9rdida de informaci\xf3n en caso de alg\xfan error."),(0,i.kt)("p",null,"Empezamos descargando la iso de ",(0,i.kt)("inlineCode",{parentName:"p"},"Eurolinux")," desde la p\xe1gina oficial de ",(0,i.kt)("a",{parentName:"p",href:"https://en.euro-linux.com/eurolinux/download/"},"Eurolinux"),", al ejecutar la iso en una m\xe1quina virtual, nos aparecer\xe1 el siguiente men\xfa donde despu\xe9s de rellenar los campos, comenzaremos la instalaci\xf3n:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"cent",src:t(19596).Z,width:"1044",height:"892"})),(0,i.kt)("p",null,"Pedir\xe1 reiniar la m\xe1quina virtual para poder entrar en el sistema:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"cent",src:t(18290).Z,width:"1044",height:"892"})),(0,i.kt)("p",null,"Iniciamos sesi\xf3n y ejecutamos el comando ",(0,i.kt)("inlineCode",{parentName:"p"},"cat /etc/redhat-release")," para comprobar la versi\xf3n de Eurolinux que tenemos instalada:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"cent",src:t(57413).Z,width:"612",height:"272"})),(0,i.kt)("p",null,"Actualizamos para poder tener todos los paquetes actualizados e instalamos un programa cualquiera para usarlo de ejemplo:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"yum update\nyum install httpd #instalamos apache\nsudo yum install bind-utils #herraienta para hacer consultas DNS\n")),(0,i.kt)("p",null,"Inicializamos el servicio de apache y comprobamos que se ha instalado correctamente:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"systemctl start httpd\nsystemctl status httpd\n")),(0,i.kt)("p",null,"Vamos a montar un servidor apache sencillo para comprobar que funciona correctamente:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo firewall-cmd --add-service=http --permanent #abrimos el puerto 80\nsudo firewall-cmd --reload #recargamos el firewall\n")),(0,i.kt)("p",null,"En el navegador ponemos la ip de la m\xe1quina virtual y nos aparecer\xe1 la p\xe1gina de apache:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"cent",src:t(70999).Z,width:"1088",height:"915"})),(0,i.kt)("p",null,"Realmente usar ",(0,i.kt)("inlineCode",{parentName:"p"},"eurolinux")," es muy parecido a usar ",(0,i.kt)("inlineCode",{parentName:"p"},"RHEL"),", ya que es una distribuci\xf3n basada en ",(0,i.kt)("inlineCode",{parentName:"p"},"RHEL")," y ofrece soporte t\xe9cnico y actualizaciones de seguridad a largo plazo. La ventaja de usar ",(0,i.kt)("inlineCode",{parentName:"p"},"eurolinux")," es que es una distribuci\xf3n de c\xf3digo abierto y gratuita, mientras que ",(0,i.kt)("inlineCode",{parentName:"p"},"RHEL")," es de pago."),(0,i.kt)("h4",{id:"41--migraci\xf3n-de-centos-6-a-eurolinux"},"4.1.- Migraci\xf3n de Centos 6 a Eurolinux"),(0,i.kt)("p",null,"Como se ha explicado anteriormente, ofrece un script para migrar de ",(0,i.kt)("inlineCode",{parentName:"p"},"RHEL")," a ",(0,i.kt)("inlineCode",{parentName:"p"},"eurolinux")," de forma sencilla y r\xe1pida, y adem\xe1s es compatible con los paquetes de software de ",(0,i.kt)("inlineCode",{parentName:"p"},"RHEL"),". As\xed que a continuaci\xf3n se va a exponer un ejemplo de migraci\xf3n de ",(0,i.kt)("inlineCode",{parentName:"p"},"RHEL 6")," a ",(0,i.kt)("inlineCode",{parentName:"p"},"eurolinux"),"."),(0,i.kt)("p",null,"Primero montamos una m\xe1quina virtual instalando el sistema operativo ",(0,i.kt)("inlineCode",{parentName:"p"},"Centos 6")," y comprobamos la versi\xf3n de ",(0,i.kt)("inlineCode",{parentName:"p"},"Centos")," que tenemos instalada:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Aparecer\xe1 el siguiente men\xfa, seleccionamos la opci\xf3n ",(0,i.kt)("inlineCode",{parentName:"li"},"Install or upgrade an existing system"),":")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"cent",src:t(65158).Z,width:"1044",height:"892"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Seleccionamos ",(0,i.kt)("inlineCode",{parentName:"li"},"skip")," para omitir la comprobaci\xf3n de los medios de instalaci\xf3n:")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"cent",src:t(13146).Z,width:"1044",height:"892"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Aparecer\xe1 la siguiente pantalla, pulsamos en ",(0,i.kt)("inlineCode",{parentName:"li"},"Next")," y seleccionamos el idioma:")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"cent",src:t(93792).Z,width:"1044",height:"892"}),"\n",(0,i.kt)("img",{alt:"cent",src:t(48259).Z,width:"1044",height:"892"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Despu\xe9s, nos dar\xe1 dos opciones de instalaci\xf3n, seleccionamos ",(0,i.kt)("inlineCode",{parentName:"li"},"Dispositivos de almacenamiento b\xe1sicos"),":")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"cent",src:t(59036).Z,width:"1044",height:"892"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Le asignamos un nombre a la m\xe1quina, asignamos la zona horaria y la contrase\xf1a de root (m\xednimo 6 caracteres, en mi caso he puesto ",(0,i.kt)("inlineCode",{parentName:"li"},"localhost")," ya que es una m\xe1quina virtual de pruebas):")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"cent",src:t(27107).Z,width:"1044",height:"892"}),"\n",(0,i.kt)("img",{alt:"cent",src:t(69562).Z,width:"1044",height:"892"}),"\n",(0,i.kt)("img",{alt:"cent",src:t(71114).Z,width:"1044",height:"892"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Seleccionamos el tipo de instalaci\xf3n, en este caso la que viene por defecto y comenzar\xe1 la instalaci\xf3n:")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"cent",src:t(33755).Z,width:"1044",height:"892"}),"\n",(0,i.kt)("img",{alt:"cent",src:t(21024).Z,width:"1044",height:"892"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Una vez finalizada la instalaci\xf3n, reiniciamos la m\xe1quina y comprobamos que se ha instalado correctamente:")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"cent",src:t(50013).Z,width:"1044",height:"892"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"5.- Instala CentOS 7, y eval\xfaa la herramientas que ofrecen la distribuci\xf3n del punto 3.")))}u.isMDXComponent=!0},18110:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/centosASO-10-250b4a6ed782b9ccfbfcc2b803d59878.png"},61979:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/centosASO-11-6e3fcf7d791c7ed952eec0bb0efb77f6.png"},22762:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/centosASO-12-0b6c0736b62a3d91bd3f94b19045d851.png"},89145:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/centosASO-13-d4c5ed6bff3bfbe3c2e95d058135b73b.png"},35658:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/centosASO-14-b19ffbdc23a809cd5b1108f735c62698.png"},57992:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/centosASO-15-e20e5e085244484ddbd823687d144fa3.png"},81532:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/centosASO-16-60dbd41d571107eef003f3372bf90ba0.png"},91701:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/centosASO-17-6e340a518816dd1628ed2b73c1799ab6.png"},72144:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/centosASO-18-4834ae3543e727b7649bdd2a06b0df5d.png"},60255:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/centosASO-19-a2142b31800606f57fb72b1853e73e4c.png"},42444:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/centosASO-2-80830c18221833df22c45a948c71578e.png"},53154:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/centosASO-20-b3d61615319a6b210c865b36483bdea6.png"},19596:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/centosASO-21-2e046c91767db351551c79e58342d287.png"},18290:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/centosASO-22-3f086445accb048edea8d2b5352376b6.png"},57413:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/centosASO-23-cb691516629d7dc5fafd82cb8ce6f255.png"},70999:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/centosASO-24-b639665ca7a73cbc481c1d15b60c5b68.png"},65158:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/centosASO-25-d04a2cac9ddd16e5933483e9dd01efb2.png"},13146:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/centosASO-26-b7b700cbc86a8ac085c52d90f069f6d6.png"},93792:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/centosASO-27-1450616598ab9afbcd715d82d72c1124.png"},48259:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/centosASO-28-26935c9dd417a4d90b0573cb33d53141.png"},59036:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/centosASO-29-d1bb76e358a122bee52abe6db2fc9add.png"},17475:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/centosASO-3-d8b79c0aecf7cfd5be44d0e080adc997.png"},27107:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/centosASO-30-4cded0ab26070260b6abf3440524bc96.png"},69562:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/centosASO-31-3e741b43e5b9718ac04e191dcee1becb.png"},71114:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/centosASO-32-c70498c91a9b870e63ea26e0878f44d5.png"},33755:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/centosASO-33-75bc84de7e45586df3ea5a5989e28164.png"},21024:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/centosASO-34-b24228ad48babdfb16c179c70a301be9.png"},50013:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/centosASO-35-7edc2d2e667fd4a6822f9a6770e3b7fc.png"},63124:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/centosASO-4-edc6996b56b7a7933f056e1519103637.png"},49804:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/centosASO-5-ff7f77a7a357be3ce7a0cb5ab0163cd3.png"},74131:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/centosASO-6-649655952be624b8aeb2da49a96168e3.png"},75209:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/centosASO-7-1ca0eba60e98a473bf448f9f31735e12.png"},59432:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/centosASO-8-3eb03ec6d819eb97d22a9d85ea0f3085.png"},26981:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/centosASO-9-e9a7c92329431c56c17a5c32102a56a3.png"},20053:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/centosASO-b6814551ec17072296dac5165af720e9.png"}}]);