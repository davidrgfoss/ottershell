"use strict";(self.webpackChunkotter_shell=self.webpackChunkotter_shell||[]).push([[209],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=s(n),u=a,k=c["".concat(p,".").concat(u)]||c[u]||m[u]||o;return n?r.createElement(k,l(l({ref:t},d),{},{components:n})):r.createElement(k,l({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},48472:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:2},l="Introducci\xf3n a Markdown",i={unversionedId:"Tasks/markdown",id:"Tasks/markdown",title:"Introducci\xf3n a Markdown",description:"IMPLANTACI\xd3N DE APLICACIONES WEB (2022-2023)",source:"@site/docs/Tasks/markdown.md",sourceDirName:"Tasks",slug:"/Tasks/markdown",permalink:"/docs/Tasks/markdown",draft:!1,editUrl:"https://github.com/belennazareth/ottershell/blob/main/docs/Tasks/markdown.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introducci\xf3n a git y GitHub",permalink:"/docs/Tasks/intro_git"},next:{title:"Git. Trabajando con ramas y uniones",permalink:"/docs/Tasks/ramas_uniones"}},p={},s=[{value:"IMPLANTACI\xd3N DE APLICACIONES WEB (2022-2023)",id:"implantaci\xf3n-de-aplicaciones-web-2022-2023",level:2}],d={toc:s};function m(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introducci\xf3n-a-markdown"},"Introducci\xf3n a Markdown"),(0,a.kt)("h2",{id:"implantaci\xf3n-de-aplicaciones-web-2022-2023"},"IMPLANTACI\xd3N DE APLICACIONES WEB (2022-2023)"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Markdown")," es un lenguaje simple que se utiliza para crear texto enriquecido (por ejemplo, HTML) con un editor de texto sin formato. Te permite darle un formato b\xe1sico al texto, utilizando s\xedmbolos conocidos y accesibles en todos los teclados. El tama\xf1o de fuente, el color y otras opciones m\xe1s avanzadas no est\xe1n disponibles con Markdown."),(0,a.kt)("p",null,"Con este editor podemos poner palabras en ",(0,a.kt)("strong",{parentName:"p"},"negrita"),", ",(0,a.kt)("em",{parentName:"p"},"cursiva")," o tambi\xe9n ",(0,a.kt)("inlineCode",{parentName:"p"},"como c\xf3digo")," o lineas de c\xf3digo m\xe1s largas como:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"from flask import Flask, render_template, abort, redirect\nimport os\napp = Flask(__name__)\nfilms = ()  \n@app.route('/')\ndef inicio():\n    return render_template(\"base.html\",films=films)\n@app.route('/base')\ndef biblioteca():\n    return render_template(\"base.html\", films=films)\n@app.route('/error')\ndef error():\n    return abort(404)\nport=os.environ[\"PORT\"]\napp.run('0.0.0.0',int(port), debug=True)\n")),(0,a.kt)("p",null,"Adem\xe1s, se pueden a\xf1adir listas tanto ordenadas:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Elemento 1"),(0,a.kt)("li",{parentName:"ol"},"Elemento 2"),(0,a.kt)("li",{parentName:"ol"},"Elemento 3")),(0,a.kt)("p",null,"como desordenadas:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Elemento 1"),(0,a.kt)("li",{parentName:"ul"},"Elemento 2"),(0,a.kt)("li",{parentName:"ul"},"Elemento 3")),(0,a.kt)("p",null,"Se pueden a\xf1adir enlaces URL:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://fp.josedomingo.org/iaw2223/1_introduccion/t2.html"},"IMPLANTACI\xd3N DE APLICACIONES WEB")),(0,a.kt)("p",null,"O tambi\xe9n enlaces a otros ficheros dentro del repositorio:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/Tasks/intro_git"},"Fichero markdown")),(0,a.kt)("p",null,"Podemos crear tablas:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Lunes"),(0,a.kt)("th",{parentName:"tr",align:null},"Viernes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"IAW"),(0,a.kt)("td",{parentName:"tr",align:null},"HLC")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"IAW"),(0,a.kt)("td",{parentName:"tr",align:null},"IAW")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"EMP"),(0,a.kt)("td",{parentName:"tr",align:null},"IAW")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"***"),(0,a.kt)("td",{parentName:"tr",align:null},"***")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"EMP"),(0,a.kt)("td",{parentName:"tr",align:null},"SRI")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"SRI"),(0,a.kt)("td",{parentName:"tr",align:null},"SRI")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"SRI"),(0,a.kt)("td",{parentName:"tr",align:null},"BBDD")))),(0,a.kt)("p",null,"E incluso a\xf1adir im\xe1genes alojadas en otro directorio:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Imagen",src:n(34347).Z,width:"1920",height:"816"})))}m.isMDXComponent=!0},34347:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/taller2IAW-1a4f3f7879f0d78abbc181ec225a5a9c.jpg"}}]);