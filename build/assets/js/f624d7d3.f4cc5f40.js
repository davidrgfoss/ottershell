"use strict";(self.webpackChunkotter_shell=self.webpackChunkotter_shell||[]).push([[1968],{3905:(e,n,o)=>{o.d(n,{Zo:()=>m,kt:()=>p});var a=o(7294);function r(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function t(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,a)}return o}function s(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?t(Object(o),!0).forEach((function(n){r(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function l(e,n){if(null==e)return{};var o,a,r=function(e,n){if(null==e)return{};var o,a,r={},t=Object.keys(e);for(a=0;a<t.length;a++)o=t[a],n.indexOf(o)>=0||(r[o]=e[o]);return r}(e,n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(a=0;a<t.length;a++)o=t[a],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var i=a.createContext({}),u=function(e){var n=a.useContext(i),o=n;return e&&(o="function"==typeof e?e(n):s(s({},n),e)),o},m=function(e){var n=u(e.components);return a.createElement(i.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var o=e.components,r=e.mdxType,t=e.originalType,i=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=u(o),p=r,b=d["".concat(i,".").concat(p)]||d[p]||c[p]||t;return o?a.createElement(b,s(s({ref:n},m),{},{components:o})):a.createElement(b,s({ref:n},m))}));function p(e,n){var o=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var t=o.length,s=new Array(t);s[0]=d;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var u=2;u<t;u++)s[u]=o[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,o)}d.displayName="MDXCreateElement"},4498:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>t,metadata:()=>l,toc:()=>u});var a=o(7462),r=(o(7294),o(3905));const t={},s=void 0,l={unversionedId:"Tasks/plsql_basica",id:"Tasks/plsql_basica",title:"plsql_basica",description:"Seg\xfan el esquema Scott, hacer los siguientes procedimientos:",source:"@site/docs/Tasks/plsql_basica.md",sourceDirName:"Tasks",slug:"/Tasks/plsql_basica",permalink:"/docs/Tasks/plsql_basica",draft:!1,editUrl:"https://github.com/belennazareth/ottershell/blob/main/docs/Tasks/plsql_basica.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Markdown Features",permalink:"/docs/Tasks/markdown-features"},next:{title:"Extras",permalink:"/docs/category/extras"}},i={},u=[{value:"1. Hacer un procedimiento que muestre el nombre y el salario del empleado cuyo c\xf3digo es 7782",id:"1-hacer-un-procedimiento-que-muestre-el-nombre-y-el-salario-del-empleado-cuyo-c\xf3digo-es-7782",level:3},{value:"2. Hacer un procedimiento que reciba como par\xe1metro un c\xf3digo de empleado y devuelva su nombre",id:"2-hacer-un-procedimiento-que-reciba-como-par\xe1metro-un-c\xf3digo-de-empleado-y-devuelva-su-nombre",level:3},{value:"3. Hacer un procedimiento que devuelva los nombres de los tres empleados m\xe1s antiguos",id:"3-hacer-un-procedimiento-que-devuelva-los-nombres-de-los-tres-empleados-m\xe1s-antiguos",level:3},{value:"4. Hacer un procedimiento que reciba el nombre de un tablespace y muestre los nombres de los usuarios que lo tienen como tablespace por defecto (Vista DBA_USERS)",id:"4-hacer-un-procedimiento-que-reciba-el-nombre-de-un-tablespace-y-muestre-los-nombres-de-los-usuarios-que-lo-tienen-como-tablespace-por-defecto-vista-dba_users",level:3},{value:"5. Modificar el procedimiento anterior para que haga lo mismo pero devolviendo el n\xfamero de usuarios que tienen ese tablespace como tablespace por defecto. Nota: Hay que convertir el procedimiento en funci\xf3n",id:"5-modificar-el-procedimiento-anterior-para-que-haga-lo-mismo-pero-devolviendo-el-n\xfamero-de-usuarios-que-tienen-ese-tablespace-como-tablespace-por-defecto-nota-hay-que-convertir-el-procedimiento-en-funci\xf3n",level:3},{value:"6. Hacer un procedimiento llamado mostrar_usuarios_por_tablespace que muestre por pantalla un listado de los tablespaces existentes con la lista de usuarios de cada uno y el n\xfamero de los mismos, as\xed: (Vistas DBA_TABLESPACES y DBA_USERS)",id:"6-hacer-un-procedimiento-llamado-mostrar_usuarios_por_tablespace-que-muestre-por-pantalla-un-listado-de-los-tablespaces-existentes-con-la-lista-de-usuarios-de-cada-uno-y-el-n\xfamero-de-los-mismos-as\xed-vistas-dba_tablespaces-y-dba_users",level:3},{value:"7. Hacer un procedimiento llamado mostrar_codigo_fuente  que reciba el nombre de otro procedimiento y muestre su c\xf3digo fuente. (DBA_SOURCE)",id:"7-hacer-un-procedimiento-llamado-mostrar_codigo_fuente--que-reciba-el-nombre-de-otro-procedimiento-y-muestre-su-c\xf3digo-fuente-dba_source",level:3},{value:"8. Hacer un procedimiento llamado mostrar_privilegios_usuario que reciba el nombre de un usuario y muestre sus privilegios de sistema y sus privilegios sobre objetos. (DBA_SYS_PRIVS y DBA_TAB_PRIVS)",id:"8-hacer-un-procedimiento-llamado-mostrar_privilegios_usuario-que-reciba-el-nombre-de-un-usuario-y-muestre-sus-privilegios-de-sistema-y-sus-privilegios-sobre-objetos-dba_sys_privs-y-dba_tab_privs",level:3},{value:"9. Realiza un procedimiento llamado listar_comisiones que nos muestre por pantalla un listado de las comisiones de los empleados agrupados seg\xfan la localidad donde est\xe1 ubicado su departamento con el siguiente formato:",id:"9-realiza-un-procedimiento-llamado-listar_comisiones-que-nos-muestre-por-pantalla-un-listado-de-las-comisiones-de-los-empleados-agrupados-seg\xfan-la-localidad-donde-est\xe1-ubicado-su-departamento-con-el-siguiente-formato",level:3},{value:"10. Realiza un procedimiento que reciba el nombre de una tabla y muestre los nombres de las restricciones que tiene, a qu\xe9 columna afectan y en qu\xe9 consisten exactamente. (DBA_TABLES, DBA_CONSTRAINTS, DBA_CONS_COLUMNS)",id:"10-realiza-un-procedimiento-que-reciba-el-nombre-de-una-tabla-y-muestre-los-nombres-de-las-restricciones-que-tiene-a-qu\xe9-columna-afectan-y-en-qu\xe9-consisten-exactamente-dba_tables-dba_constraints-dba_cons_columns",level:3},{value:"PL/PgSQL",id:"plpgsql",level:2},{value:"11.1. Hacer un procedimiento que muestre el nombre y el salario del empleado cuyo c\xf3digo es 7782 usando PL/pgSQL.",id:"111-hacer-un-procedimiento-que-muestre-el-nombre-y-el-salario-del-empleado-cuyo-c\xf3digo-es-7782-usando-plpgsql",level:3},{value:"11.2. Hacer un procedimiento que reciba como par\xe1metro un c\xf3digo de empleado y devuelva su nombre usando PL/pgSQL.",id:"112-hacer-un-procedimiento-que-reciba-como-par\xe1metro-un-c\xf3digo-de-empleado-y-devuelva-su-nombre-usando-plpgsql",level:3}],m={toc:u};function c(e){let{components:n,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Seg\xfan el esquema Scott, hacer los siguientes procedimientos:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE DEPT\n(\n DEPTNO NUMBER(2),\n DNAME VARCHAR2(14),\n LOC VARCHAR2(13),\n CONSTRAINT PK_DEPT PRIMARY KEY (DEPTNO)\n);\n\nCREATE TABLE EMP\n(\n EMPNO NUMBER(4),\n ENAME VARCHAR2(10),\n JOB VARCHAR2(9),\n MGR NUMBER(4),\n HIREDATE DATE,\n SAL NUMBER(7, 2),\n COMM NUMBER(7, 2),\n DEPTNO NUMBER(2),\n CONSTRAINT FK_DEPTNO FOREIGN KEY (DEPTNO) REFERENCES DEPT (DEPTNO),\n CONSTRAINT PK_EMP PRIMARY KEY (EMPNO)\n);\n\nINSERT INTO DEPT VALUES (10, 'ACCOUNTING', 'NEW YORK');\nINSERT INTO DEPT VALUES (20, 'RESEARCH', 'DALLAS');\nINSERT INTO DEPT VALUES (30, 'SALES', 'CHICAGO');\nINSERT INTO DEPT VALUES (40, 'OPERATIONS', 'BOSTON');\n\nINSERT INTO EMP VALUES(7369, 'SMITH', 'CLERK', 7902,TO_DATE('17-DIC-1980', 'DD-MON-YYYY'), 800, NULL, 20);\nINSERT INTO EMP VALUES(7499, 'ALLEN', 'SALESMAN', 7698,TO_DATE('20-FEB-1981', 'DD-MON-YYYY'), 1600, 300, 30);\nINSERT INTO EMP VALUES(7521, 'WARD', 'SALESMAN', 7698,TO_DATE('22-FEB-1981', 'DD-MON-YYYY'), 1250, 500, 30);\nINSERT INTO EMP VALUES(7566, 'JONES', 'MANAGER', 7839,TO_DATE('2-ABR-1981', 'DD-MON-YYYY'), 2975, NULL, 20);\nINSERT INTO EMP VALUES(7654, 'MARTIN', 'SALESMAN', 7698,TO_DATE('28-SEP-1981', 'DD-MON-YYYY'), 1250, 1400, 30);\nINSERT INTO EMP VALUES(7698, 'BLAKE', 'MANAGER', 7839,TO_DATE('1-MAY-1981', 'DD-MON-YYYY'), 2850, NULL, 30);\nINSERT INTO EMP VALUES(7782, 'CLARK', 'MANAGER', 7839,TO_DATE('9-JUN-1981', 'DD-MON-YYYY'), 2450, NULL, 10);\nINSERT INTO EMP VALUES(7788, 'SCOTT', 'ANALYST', 7566,TO_DATE('09-DIC-1982', 'DD-MON-YYYY'), 3000, NULL, 20);\nINSERT INTO EMP VALUES(7839, 'KING', 'PRESIDENT', NULL,TO_DATE('17-NOV-1981', 'DD-MON-YYYY'), 5000, NULL, 10);\nINSERT INTO EMP VALUES(7844, 'TURNER', 'SALESMAN', 7698,TO_DATE('8-SEP-1981', 'DD-MON-YYYY'), 1500, 0, 30);\nINSERT INTO EMP VALUES(7876, 'ADAMS', 'CLERK', 7788,TO_DATE('12-ENE-1983', 'DD-MON-YYYY'), 1100, NULL, 20);\nINSERT INTO EMP VALUES(7900, 'JAMES', 'CLERK', 7698,TO_DATE('3-DIC-1981', 'DD-MON-YYYY'), 950, NULL, 30);\nINSERT INTO EMP VALUES(7902, 'FORD', 'ANALYST', 7566,TO_DATE('3-DIC-1981', 'DD-MON-YYYY'), 3000, NULL, 20);\nINSERT INTO EMP VALUES(7934, 'MILLER', 'CLERK', 7782,TO_DATE('23-ENE-1982', 'DD-MON-YYYY'), 1300, NULL, 10);\n")),(0,r.kt)("p",null,"*",(0,r.kt)("strong",{parentName:"p"},"* Lo primero sera ejecutar el siguiente comando ",(0,r.kt)("inlineCode",{parentName:"strong"},"'set serveroutput on'"),", adem\xe1s de ",(0,r.kt)("inlineCode",{parentName:"strong"},"'startup'")," para arrancar el servicio de oracle. **")),(0,r.kt)("h3",{id:"1-hacer-un-procedimiento-que-muestre-el-nombre-y-el-salario-del-empleado-cuyo-c\xf3digo-es-7782"},"1. Hacer un procedimiento que muestre el nombre y el salario del empleado cuyo c\xf3digo es 7782"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"create or replace procedure mostrar_sal_empleado \nas\n    v_nombre emp.ename%type;\n    v_sal emp.sal%type;\n\nbegin\n\n    select ename, sal into v_nombre, v_sal\n    from emp\n    where empno = 7782;\n    dbms_output.put_line('Nombre: ' || v_nombre);\n    dbms_output.put_line('Salario: ' || v_sal);\n\nexception\n    when no_data_found then\n        dbms_output.put_line('No se ha encontrado el empleado');\nend;\n/\n\nexec mostrar_sal_empleado;\n")),(0,r.kt)("h3",{id:"2-hacer-un-procedimiento-que-reciba-como-par\xe1metro-un-c\xf3digo-de-empleado-y-devuelva-su-nombre"},"2. Hacer un procedimiento que reciba como par\xe1metro un c\xf3digo de empleado y devuelva su nombre"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"create or replace procedure mostrar_ename (p_empno emp.empno%type) \nas \n    v_nombre emp.ename%type;\n\nbegin\n\n    select ename into v_nombre\n    from emp\n    where empno = p_empno;\n    dbms_output.put_line('Nombre: ' || v_nombre);\n\nexception\n    when no_data_found then\n        dbms_output.put_line('No se ha encontrado el empleado');\nend;\n/\n\nexec mostrar_ename(7566);\n")),(0,r.kt)("h3",{id:"3-hacer-un-procedimiento-que-devuelva-los-nombres-de-los-tres-empleados-m\xe1s-antiguos"},"3. Hacer un procedimiento que devuelva los nombres de los tres empleados m\xe1s antiguos"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"create or replace procedure emp_mas_antiguos\nas\n    cursor c_emp_antiguos is\n        select ename\n        from emp\n        order by hiredate\n        fetch first 3 rows only;\n\n    v_nombre emp.ename%type;\n\nbegin\n\n    dbms_output.put_line('Nombres:');\n    for v_nombre in c_emp_antiguos \n    loop\n        dbms_output.put_line(v_nombre.ename);\n    end loop;\nend;\n/\n\nexec emp_mas_antiguos;\n")),(0,r.kt)("h3",{id:"4-hacer-un-procedimiento-que-reciba-el-nombre-de-un-tablespace-y-muestre-los-nombres-de-los-usuarios-que-lo-tienen-como-tablespace-por-defecto-vista-dba_users"},"4. Hacer un procedimiento que reciba el nombre de un tablespace y muestre los nombres de los usuarios que lo tienen como tablespace por defecto (Vista DBA_USERS)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"create or replace procedure usuarios_tablespace (p_tablespace dba_users.default_tablespace%type)\nas\n    cursor c_usuarios_tablespace is\n        select username\n        from dba_users\n        where default_tablespace = p_tablespace;\n\n    v_nombre dba_users.username%type;\n\nbegin\n    \n        dbms_output.put_line('Nombres para este tablespace:');\n        for v_nombre in c_usuarios_tablespace \n        loop\n            dbms_output.put_line(v_nombre.username);\n        end loop;\n\nend;\n/\n\nexec usuarios_tablespace('USERS');\n")),(0,r.kt)("h3",{id:"5-modificar-el-procedimiento-anterior-para-que-haga-lo-mismo-pero-devolviendo-el-n\xfamero-de-usuarios-que-tienen-ese-tablespace-como-tablespace-por-defecto-nota-hay-que-convertir-el-procedimiento-en-funci\xf3n"},"5. Modificar el procedimiento anterior para que haga lo mismo pero devolviendo el n\xfamero de usuarios que tienen ese tablespace como tablespace por defecto. Nota: Hay que convertir el procedimiento en funci\xf3n"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"create or replace function function_usuarios_tablespace (p_tablespace dba_users.default_tablespace%type) return number\nas\n    v_number number;\n\nbegin\n\n    select count(username) into v_number\n    from dba_users\n    where default_tablespace = p_tablespace;\n    return v_number;\n\nend;\n/\n\nselect function_usuarios_tablespace('USERS') from dual;\nselect function_usuarios_tablespace('SYSTEM') from dual;\n")),(0,r.kt)("h3",{id:"6-hacer-un-procedimiento-llamado-mostrar_usuarios_por_tablespace-que-muestre-por-pantalla-un-listado-de-los-tablespaces-existentes-con-la-lista-de-usuarios-de-cada-uno-y-el-n\xfamero-de-los-mismos-as\xed-vistas-dba_tablespaces-y-dba_users"},"6. Hacer un procedimiento llamado mostrar_usuarios_por_tablespace que muestre por pantalla un listado de los tablespaces existentes con la lista de usuarios de cada uno y el n\xfamero de los mismos, as\xed: (Vistas DBA_TABLESPACES y DBA_USERS)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Tablespace xxxx:\n\n    Usr1\n    Usr2\n    ...\n\nTotal Usuarios Tablespace xxxx: n1\n\nTablespace yyyy:\n\n    Usr1\n    Usr2\n    ...\n\nTotal Usuarios Tablespace yyyy: n2\n....\nTotal Usuarios BD: nn\n")),(0,r.kt)("h3",{id:"7-hacer-un-procedimiento-llamado-mostrar_codigo_fuente--que-reciba-el-nombre-de-otro-procedimiento-y-muestre-su-c\xf3digo-fuente-dba_source"},"7. Hacer un procedimiento llamado mostrar_codigo_fuente  que reciba el nombre de otro procedimiento y muestre su c\xf3digo fuente. (DBA_SOURCE)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"create or replace procedure mostrar_codigo_fuente (p_proc_name dba_source.name%type)\nis\n    cursor c_codigo is\n        select text\n        from dba_source\n        where name = p_proc_name;\n\nbegin\n\n    for v_text in c_codigo\n    loop\n        dbms_output.put_line(v_text.text);\n    end loop;\n\nend;\n/\n\nexec mostrar_codigo_fuente('USUARIOS_TABLESPACE');\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"NOTA: El nombre del procedimiento debe ser en may\xfasculas, ya que en la vista DBA_SOURCE est\xe1 en may\xfasculas. Si no, no lo encuentra. ")),(0,r.kt)("h3",{id:"8-hacer-un-procedimiento-llamado-mostrar_privilegios_usuario-que-reciba-el-nombre-de-un-usuario-y-muestre-sus-privilegios-de-sistema-y-sus-privilegios-sobre-objetos-dba_sys_privs-y-dba_tab_privs"},"8. Hacer un procedimiento llamado mostrar_privilegios_usuario que reciba el nombre de un usuario y muestre sus privilegios de sistema y sus privilegios sobre objetos. (DBA_SYS_PRIVS y DBA_TAB_PRIVS)"),(0,r.kt)("h3",{id:"9-realiza-un-procedimiento-llamado-listar_comisiones-que-nos-muestre-por-pantalla-un-listado-de-las-comisiones-de-los-empleados-agrupados-seg\xfan-la-localidad-donde-est\xe1-ubicado-su-departamento-con-el-siguiente-formato"},"9. Realiza un procedimiento llamado listar_comisiones que nos muestre por pantalla un listado de las comisiones de los empleados agrupados seg\xfan la localidad donde est\xe1 ubicado su departamento con el siguiente formato:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Localidad NombreLocalidad\n\nDepartamento: NombreDepartamento\n\n        Empleado1 \u2026\u2026. Comisi\xf3n 1\n        Empleado2 \u2026\u2026. Comisi\xf3n 2\n        .   \n        .\n        .\n        Empleadon \u2026\u2026. Comision n\n\n    Total Comisiones en el Departamento NombreDepartamento: SumaComisiones\n\n    Departamento: NombreDepartamento\n\n        Empleado1 \u2026\u2026. Comisi\xf3n 1\n        Empleado2 \u2026\u2026. Comisi\xf3n 2\n        .   \n        .       .\n        Empleadon \u2026\u2026. Comision n\n\n    Total Comisiones en el Departamento NombreDepartamento: SumaComisiones\n    .   \n    .\nTotal Comisiones en la Localidad NombreLocalidad: SumaComisionesLocalidad\n\nLocalidad NombreLocalidad\n.\n.\n\nTotal Comisiones en la Empresa: TotalComisiones\n")),(0,r.kt)("p",null,"Nota: Los nombres de localidades, departamentos y empleados deben aparecer por orden alfab\xe9tico."),(0,r.kt)("p",null,"Si alguno de los departamentos no tiene ning\xfan empleado con comisiones, aparecer\xe1 un mensaje informando de ello en lugar de la lista de empleados."),(0,r.kt)("p",null,"El procedimiento debe gestionar adecuadamente las siguientes excepciones:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"a) La tabla Empleados est\xe1 vac\xeda.\nb) Alguna comisi\xf3n es mayor que 10000.\n")),(0,r.kt)("h3",{id:"10-realiza-un-procedimiento-que-reciba-el-nombre-de-una-tabla-y-muestre-los-nombres-de-las-restricciones-que-tiene-a-qu\xe9-columna-afectan-y-en-qu\xe9-consisten-exactamente-dba_tables-dba_constraints-dba_cons_columns"},"10. Realiza un procedimiento que reciba el nombre de una tabla y muestre los nombres de las restricciones que tiene, a qu\xe9 columna afectan y en qu\xe9 consisten exactamente. (DBA_TABLES, DBA_CONSTRAINTS, DBA_CONS_COLUMNS)"),(0,r.kt)("h2",{id:"plpgsql"},"PL/PgSQL"),(0,r.kt)("p",null,"Para los siguientes apartados se ha usado ",(0,r.kt)("strong",{parentName:"p"},"postgresql")," creando la siguiente base de datos:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"create table dept (\n  deptno integer,\n  dname  text,\n  loc    text,\n  constraint pk_dept primary key (deptno)\n);\n\ncreate table emp (\n  empno    integer,\n  ename    text,\n  job      text,\n  mgr      integer,\n  hiredate date,\n  sal      integer,\n  comm     integer,\n  deptno   integer,\n  constraint pk_emp primary key (empno),\n  constraint fk_mgr foreign key (mgr) references emp (empno),\n  constraint fk_deptno foreign key (deptno) references dept (deptno)\n);\n\ninsert into dept (deptno,  dname,        loc)\n       values    (10,     'ACCOUNTING', 'NEW YORK'),\n                 (20,     'RESEARCH',   'DALLAS'),\n                 (30,     'SALES',      'CHICAGO'),\n                 (40,     'OPERATIONS', 'BOSTON');\n\ninsert into emp (empno, ename,    job,        mgr,   hiredate,     sal, comm, deptno)\n       values   (7369, 'SMITH',  'CLERK',     7902, '1980-12-17',  800, NULL,   20),\n                (7499, 'ALLEN',  'SALESMAN',  7698, '1981-02-20', 1600,  300,   30),\n                (7521, 'WARD',   'SALESMAN',  7698, '1981-02-22', 1250,  500,   30),\n                (7566, 'JONES',  'MANAGER',   7839, '1981-04-02', 2975, NULL,   20),\n                (7654, 'MARTIN', 'SALESMAN',  7698, '1981-09-28', 1250, 1400,   30),\n                (7698, 'BLAKE',  'MANAGER',   7839, '1981-05-01', 2850, NULL,   30),\n                (7782, 'CLARK',  'MANAGER',   7839, '1981-06-09', 2450, NULL,   10),\n                (7788, 'SCOTT',  'ANALYST',   7566, '1982-12-09', 3000, NULL,   20),\n                (7839, 'KING',   'PRESIDENT', NULL, '1981-11-17', 5000, NULL,   10),\n                (7844, 'TURNER', 'SALESMAN',  7698, '1981-09-08', 1500,    0,   30),\n                (7876, 'ADAMS',  'CLERK',     7788, '1983-01-12', 1100, NULL,   20),\n                (7900, 'JAMES',  'CLERK',     7698, '1981-12-03',  950, NULL,   30),\n                (7902, 'FORD',   'ANALYST',   7566, '1981-12-03', 3000, NULL,   20),\n                (7934, 'MILLER', 'CLERK',     7782, '1982-01-23', 1300, NULL,   10);\n")),(0,r.kt)("h3",{id:"111-hacer-un-procedimiento-que-muestre-el-nombre-y-el-salario-del-empleado-cuyo-c\xf3digo-es-7782-usando-plpgsql"},"11.1. Hacer un procedimiento que muestre el nombre y el salario del empleado cuyo c\xf3digo es 7782 usando PL/pgSQL."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"create or replace procedure mostrar_sal_empleado_pg (p_emp_no integer)\nlanguage plpgsql\nas $$\ndeclare\n\n    v_salario integer;\n    v_nombre text;\n\nbegin\n    \n        select sal, ename into v_salario, v_nombre from emp where empno = p_emp_no;\n    \n        raise notice 'El salario del empleado % es %', v_nombre, v_salario;\n    \nend; $$;\n\ncall mostrar_sal_empleado_pg(7782);\n")),(0,r.kt)("h3",{id:"112-hacer-un-procedimiento-que-reciba-como-par\xe1metro-un-c\xf3digo-de-empleado-y-devuelva-su-nombre-usando-plpgsql"},"11.2. Hacer un procedimiento que reciba como par\xe1metro un c\xf3digo de empleado y devuelva su nombre usando PL/pgSQL."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"create or replace procedure mostrar_ename_pg (p_emp_no integer)\nlanguage plpgsql\nas $$\ndeclare\n\n    v_nombre text;\n\nbegin\n    \n        select ename into v_nombre from emp where empno = p_emp_no;\n    \n        raise notice 'El nombre del empleado % es %', p_emp_no, v_nombre;\n\nend; $$;\n\ncall mostrar_ename_pg (7566);\n")))}c.isMDXComponent=!0}}]);