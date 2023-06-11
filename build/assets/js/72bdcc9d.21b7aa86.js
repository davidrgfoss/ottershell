"use strict";(self.webpackChunkotter_shell=self.webpackChunkotter_shell||[]).push([[9103],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>g});var r=t(67294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=r.createContext({}),u=function(e){var a=r.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},c=function(e){var a=u(e.components);return r.createElement(i.Provider,{value:a},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},p=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(t),p=n,g=d["".concat(i,".").concat(p)]||d[p]||m[p]||l;return t?r.createElement(g,s(s({ref:a},c),{},{components:t})):r.createElement(g,s({ref:a},c))}));function g(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var l=t.length,s=new Array(l);s[0]=p;var o={};for(var i in a)hasOwnProperty.call(a,i)&&(o[i]=a[i]);o.originalType=e,o[d]="string"==typeof e?e:n,s[1]=o;for(var u=2;u<l;u++)s[u]=t[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},15210:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=t(87462),n=(t(67294),t(3905));const l={sidebar_position:20},s="Recolecci\xf3n centralizada de logs del sistema",o={unversionedId:"Tasks/journald",id:"Tasks/journald",title:"Recolecci\xf3n centralizada de logs del sistema",description:"En esta ocasi\xf3n, se va a realizar un sistema de recogida de logs de sistema, para ello se va a utilizar el servicio de journald, que se encarga de recoger los logs de los servicios del sistema, y de los servicios que se ejecutan en el mismo. En mi caso, voy a usar el escenario montado en OpenStack compuesto por alfa, bravo, charlie y delta. Para esto, se van a seguir los siguientes pasos:",source:"@site/docs/Tasks/journald.md",sourceDirName:"Tasks",slug:"/Tasks/journald",permalink:"/docs/Tasks/journald",draft:!1,editUrl:"https://github.com/belennazareth/ottershell/blob/main/docs/Tasks/journald.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"Servidor de correo en los servidores de clase",permalink:"/docs/Tasks/correo"},next:{title:"Servidor de correos",permalink:"/docs/Tasks/correo_vps"}},i={},u=[],c={toc:u},d="wrapper";function m(e){let{components:a,...l}=e;return(0,n.kt)(d,(0,r.Z)({},c,l,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"recolecci\xf3n-centralizada-de-logs-del-sistema"},"Recolecci\xf3n centralizada de logs del sistema"),(0,n.kt)("p",null,"En esta ocasi\xf3n, se va a realizar un sistema de recogida de logs de sistema, para ello se va a utilizar el servicio de ",(0,n.kt)("inlineCode",{parentName:"p"},"journald"),", que se encarga de recoger los logs de los servicios del sistema, y de los servicios que se ejecutan en el mismo. En mi caso, voy a usar el escenario montado en OpenStack compuesto por alfa, bravo, charlie y delta. Para esto, se van a seguir los siguientes pasos:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Instalamos en todas las m\xe1quinas el paquete ",(0,n.kt)("inlineCode",{parentName:"li"},"sytemd-journal-remote"),", que es el que nos permite enviar los logs a un servidor remoto:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install systemd-journal-remote\nsudo sudo dnf install systemd-journal-remote #para bravo\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"En el servidor, que en mi caso es alfa, se va a configurar el servicio editando el fichero ",(0,n.kt)("inlineCode",{parentName:"li"},"/lib/systemd/system/systemd-journal-remote.service")," modificando la l\xednea ",(0,n.kt)("inlineCode",{parentName:"li"},"ExecStart")," para que quede de la siguiente forma:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"ExecStart=/lib/systemd/systemd-journal-remote --listen-http=-3 --output=/var/log/journal/remote/\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Iniciamos y habilitamos el servicio:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl enable --now systemd-journal-remote.socket\nsudo systemctl enable --now systemd-journal-remote.service\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Configuramos journal para que en la funcionalidad de registro remoto no se apliquen medidas de seguridad adicionales a los registros y que se dividan en funci\xf3n del servidor:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"nano /etc/systemd/journald-remote.conf\n\n[Remote]\nSplitMode=host\nSeal=false\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Reiniciamos el servicio:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl restart systemd-journal-remote.service\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"En los clientes, charlie, delta y bravo, modificamos el fichero ",(0,n.kt)("inlineCode",{parentName:"li"},"/etc/systemd/journal-upload.conf")," para que quede de la siguiente forma:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"URL=http://alfa.nazareth.gonzalonazareno.org:19532\n")),(0,n.kt)("p",null,"*Nota: Se puede usar la IP en vez del nombre del servidor."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Reiniciamos el servicio:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl restart systemd-journal-upload.service\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Para ver los logs en el servidor de los clientes, se ejecuta el siguiente comando:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo journalctl --file /var/log/journal/remote/remote-[IP].journal\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Bravo:")),(0,n.kt)("p",null,(0,n.kt)("img",{src:t(78229).Z,width:"1104",height:"585"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Charlie:")),(0,n.kt)("p",null,(0,n.kt)("img",{src:t(84891).Z,width:"1104",height:"340"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Delta:")),(0,n.kt)("p",null,(0,n.kt)("img",{src:t(56366).Z,width:"1106",height:"341"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Para ver todos los ficheros de log:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo ls -la /var/log/journal/remote/\n")),(0,n.kt)("p",null,(0,n.kt)("img",{src:t(58578).Z,width:"906",height:"182"})))}m.isMDXComponent=!0},84891:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/journalASO-2-8f85cadceb2e94f5177aabe899a43a5f.png"},78229:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/journalASO-3-676f464e28914835b1aa5b14d2811a4d.png"},58578:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/journalASO-4-37b5d1fca0cbb6e6646a04b2ddfd9658.png"},56366:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/journalASO-146c5595b9afc47af024ab4077efe56d.png"}}]);