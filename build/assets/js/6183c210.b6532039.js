"use strict";(self.webpackChunkotter_shell=self.webpackChunkotter_shell||[]).push([[5365],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),d=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l=function(e){var n=d(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=d(t),m=a,b=p["".concat(c,".").concat(m)]||p[m]||u[m]||o;return t?r.createElement(b,s(s({ref:n},l),{},{components:t})):r.createElement(b,s({ref:n},l))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=p;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var d=2;d<o;d++)s[d]=t[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},2457:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var r=t(7462),a=(t(7294),t(3905));const o={sidebar_position:15},s="Interconexi\xf3n de Servidores de Bases de Datos",i={unversionedId:"Tasks/interconexion_bbdd",id:"Tasks/interconexion_bbdd",title:"Interconexi\xf3n de Servidores de Bases de Datos",description:"Descripci\xf3n de la actividad",source:"@site/docs/Tasks/interconexion_bbdd.md",sourceDirName:"Tasks",slug:"/Tasks/interconexion_bbdd",permalink:"/docs/Tasks/interconexion_bbdd",draft:!1,editUrl:"https://github.com/belennazareth/ottershell/blob/main/docs/Tasks/interconexion_bbdd.md",tags:[],version:"current",sidebarPosition:15,frontMatter:{sidebar_position:15},sidebar:"tutorialSidebar",previous:{title:"Escenario en OpenStack",permalink:"/docs/Tasks/escenario_openstack"},next:{title:"Migraci\xf3n CentOS",permalink:"/docs/Tasks/migracion_centos"}},c={},d=[{value:"Descripci\xf3n de la actividad",id:"descripci\xf3n-de-la-actividad",level:2},{value:"Puntos a tratar",id:"puntos-a-tratar",level:2}],l={toc:d};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"interconexi\xf3n-de-servidores-de-bases-de-datos"},"Interconexi\xf3n de Servidores de Bases de Datos"),(0,a.kt)("h2",{id:"descripci\xf3n-de-la-actividad"},"Descripci\xf3n de la actividad"),(0,a.kt)("p",null,"Las interconexiones de servidores de bases de datos son operaciones que pueden ser muy \xfatiles en diferentes contextos. B\xe1sicamente, se trata de acceder a datos que no est\xe1n almacenados en nuestra base de datos, pudiendo combinarlos con los que ya tenemos."),(0,a.kt)("p",null,"En esta pr\xe1ctica veremos varias formas de crear un enlace entre distintos servidores de bases de datos."),(0,a.kt)("h2",{id:"puntos-a-tratar"},"Puntos a tratar"),(0,a.kt)("p",null,"Se pide:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u2022 Realizar un enlace entre dos servidores de bases de datos ORACLE, explicando la configuraci\xf3n necesaria en ambos extremos y demostrando su funcionamiento.\n  \n\u2022 Realizar un enlace entre dos servidores de bases de datos Postgres, explicando la configuraci\xf3n necesaria en ambos extremos y demostrando su funcionamiento.\n  \n\u2022 Realizar un enlace entre un servidor ORACLE y otro Postgres o MySQL empleando Heterogeneus Services, explicando la configuraci\xf3n necesaria en ambos extremos y demostrando su funcionamiento.\n")))}u.isMDXComponent=!0}}]);