"use strict";(self.webpackChunkotter_shell=self.webpackChunkotter_shell||[]).push([[3723],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(a),m=r,b=u["".concat(s,".").concat(m)]||u[m]||p[m]||i;return a?n.createElement(b,o(o({ref:t},d),{},{components:a})):n.createElement(b,o({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1381:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:15},o="Migraci\xf3n CentOS",l={unversionedId:"Tasks/migracion_centos",id:"Tasks/migracion_centos",title:"Migraci\xf3n CentOS",description:"Descripci\xf3n de la actividad",source:"@site/docs/Tasks/migracion_centos.md",sourceDirName:"Tasks",slug:"/Tasks/migracion_centos",permalink:"/docs/Tasks/migracion_centos",draft:!1,editUrl:"https://github.com/belennazareth/ottershell/blob/main/docs/Tasks/migracion_centos.md",tags:[],version:"current",sidebarPosition:15,frontMatter:{sidebar_position:15},sidebar:"tutorialSidebar",previous:{title:"Instalaci\xf3n de un servidor LEMP",permalink:"/docs/Tasks/lemp"},next:{title:"Desplegando aplicaciones flask con apache2 + mod_wsgi",permalink:"/docs/Tasks/apache_wsgi"}},s={},c=[{value:"Descripci\xf3n de la actividad",id:"descripci\xf3n-de-la-actividad",level:2},{value:"Puntos a tratar",id:"puntos-a-tratar",level:2}],d={toc:c};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"migraci\xf3n-centos"},"Migraci\xf3n CentOS"),(0,r.kt)("h2",{id:"descripci\xf3n-de-la-actividad"},"Descripci\xf3n de la actividad"),(0,r.kt)("p",null,"Debido al anuncio del fin de soporte por parte de Red Hat de Centos8 el pasado 31 de diciembre de 2021, y teniendo en cuentas que el fin de vida de centos 7 est\xe1 programada para el 30 de junio de 2024. Han salido m\xfaltiples distribuciones que cubren el hueco dejado por esta distribuci\xf3n tan extendida y tan usada en el \xe1mbito de servidores."),(0,r.kt)("p",null,"En la presente pr\xe1ctica, analiza posibles versiones candidatas y opciones desplegadas para la migraci\xf3n de tus servidores CentOS."),(0,r.kt)("p",null,"El espectro es amplio:"),(0,r.kt)("p",null,"-"," Cambiar el rumbo a una nueva distribuci\xf3n, debian, opensuse, slakware, etc."),(0,r.kt)("p",null,"-"," Soluciones aportadas por Red Hat: Red Hat Enterprise Linux, CentOS Stream."),(0,r.kt)("p",null,"-"," Soluci\xf3n aportada por Oracle Linux"),(0,r.kt)("p",null,"Nuevas distribuciones surgidas para paliar el hueco dejado:"),(0,r.kt)("p",null,"-"," AlmaLinux"),(0,r.kt)("p",null,"-"," Rocky Linux"),(0,r.kt)("p",null,"-"," VZLinux"),(0,r.kt)("p",null,"-"," euroLinux"),(0,r.kt)("h2",{id:"puntos-a-tratar"},"Puntos a tratar"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Analiza el desencadenante de la retirada de centOS 8 del mercado. \xbfQu\xe9 opini\xf3n tienes al respecto?")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Crea una cuenta en Red Hat y desc\xe1rgate la iso de Red Hat Enterprise Linux (REL) y eval\xfaa el producto. Comenta el procedimiento de alta.")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Descarga la iso de CentOS Stream y eval\xfaa el producto.")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Descarga iso de una de las otras distribuciones candidatas, indica criterios para la elecci\xf3n de la nueva distribuci\xf3n y eval\xfaa el producto.")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Instala CentOS 7, y eval\xfaa la herramientas que ofrecen la distribuci\xf3n del punto 3.")))}p.isMDXComponent=!0}}]);