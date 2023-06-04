---
sidebar_position: 50
---

# Docker: Implantación de aplicaciones web PHP en docker

Imaginemos que el equipo de desarrollo de nuestra empresa ha desarrollado una aplicación PHP que se llama BookMedik (https://github.com/evilnapsis/bookmedik).

Queremos crear una imagen Docker para implantar dicha aplicación.

Tenemos que tener en cuenta los siguientes aspectos:

**Contenedor mariadb**

* Es necesario que nuestra aplicación guarde su información en un contenedor docker mariadb.
* El script para generar la base de datos y los registros lo encuentras en el repositorio y se llama `schema.sql`. Debes crear un usuario con su contraseña en la base de datos. La base de datos se llama bookmedik y se crea al ejecutar el script.
* Ejecuta el contenedor mariadb y carga los datos del script `schema.sql`. Para más [información](https://gist.github.com/spalladino/6d981f7b33f6e0afe6bb).
* El contenedor mariadb debe tener un volumen para guardar la base de datos.


**Contenedor bookmedik**

* Vamos a crear tres versiones de la imagen que nos permite implantar la aplicación PHP.
* La imagen debe crear las variables de entorno necesarias con datos de conexión por defecto.
* Al crear un contenedor a partir de estas imágenes se ejecutará un script bash que realizará las siguientes tareas:
    * Modifique el fichero core\controller\Database.php para que lea las variables de entorno. Para obtener las variables de entorno en PHP usar la función getenv. [Para más información](https://www.php.net/manual/es/function.getenv.php).
    * Inicialice la base de datos con el fichero `schema.sql`.
    * Ejecute el servidor web.
* El contenedor que creas debe tener un volumen para guardar los logs del servidor web.
* La imagen la tienes que crear en tu entorno de desarrollo con el comando `docker build`.

## Tarea 1: Creación de una imagen docker con una aplicación web desde una imagen base

* Vamos a crear una imagen que se llame `usuario/bookmedik:v1`.
* Crea una imagen docker con la aplicación desde una imagen base de debian o ubuntu.

Primero clonamos el repositorio de la aplicación bookmedik:

```bash
git clone https://github.com/evilnapsis/bookmedik.git
```

Modificamos el fichero `schema.sql` y quitamos las primeras líneas que son las que crean y usan la base de datos `bookmedik` para que no nos de error al crear la base de datos en el contenedor:

```sql
CREATE DATABASE bookmedik;
USE bookmedik;
```

Modificamos las variables de entorno en el fichero `core\controller\Database.php` para que lea las que vamos a darle en el script de mysql:

```php
        function Database(){
                $this->user=getenv('bookmedik_user');$this->pass=getenv('bookmedik_passwd');$this->host=getenv('host_database');$this->ddbb=getenv('db_name');
        }
```

Creamos el fichero `Dockerfile` con las instrucciones para crear la imagen:

```dockerfile
FROM debian:bullseye
MAINTAINER Belen Nazareth Duran "belennazareth29@gmail.com"
RUN apt-get update && apt-get upgrade -y && apt-get install apache2 libapache2-mod-php php php-mysql mariadb-client -y && apt-get clean && rm -rf /var/lib/apt/lists/*
COPY bookmedik /var/www/html/
ADD script.sh /opt/
RUN chmod +x /opt/script.sh && rm /var/www/html/index.html
ENTRYPOINT ["/opt/script.sh"]
```

Creamos el fichero `script.sh` con las instrucciones para ejecutar el contenedor:

```s
#! /bin/sh

mysql -u $bookmedik_user --password=$bookmedik_passwd -h $host_database $db_name < /var/www/html/schema.sql

/usr/sbin/apache2ctl -D FOREGROUND
```

Creamos la imagen:

```bash
docker build -t belennazareth/bookmedik:v1 .
```

Comprobamos que se ha creado correctamente:

```bash
docker images
```

![DOCKER](/img/IAW/dockerPHPIAW6.png)


### Entrega

1. Entrega la url del repositorio GitHub donde tengas los ficheros necesarios para hacer la construcción de la imagen.

https://github.com/belennazareth/Docker_PHP/tree/main/tarea1

2. Entrega una captura de pantalla donde se vea la imagen en el registro de tu entorno de desarrollo.

![DOCKER](/img/IAW/dockerPHPIAW6.png)



## Tarea 2: Despliegue en el entorno de desarrollo

* Crea un script con `docker-compose` que levante el escenario con los dos contenedores.
* Recuerda que para acceder a la aplicación: Usuario: **admin**, contraseña: **admin**.

Creamos el fichero `docker-compose.yml` con las instrucciones para levantar el escenario:

```yml
version: '3.7'
services:
  bookmedik:
    container_name: bn-bookmedik
    image: belennazareth/bookmedik:v1
    restart: always
    environment:
      bookmedik_user: admin
      bookmedik_passwd: admin
      host_database: bn-mariadb
      db_name: bookmedik
    ports:
      - 8081:80
    depends_on:
      - db
  db:
    container_name: bn-mariadb
    image: mariadb
    restart: always
    environment:
      MARIADB_ROOT_PASSWORD: root
      MARIADB_DATABASE: bookmedik
      MARIADB_USER: admin
      MARIADB_PASSWORD: admin
    volumes:
      - mariadb_data:/var/lib/mysql
volumes:
    mariadb_data:
```

Levantamos el escenario:

```bash
docker-compose up -d 
```

Comprobamos que se ha levantado correctamente:

```bash
docker ps
```

![DOCKER](/img/IAW/dockerPHPIAW6-2.png)

Si accedemos a la aplicación en el puerto 8081, `localhost:8081`, podemos ver que se ha creado correctamente:

![DOCKER](/img/IAW/dockerPHPIAW6-3.png)


### Entrega

1. Entrega la url del repositorio GitHub donde hayas añadido el fichero docker-compose.yml.

https://github.com/belennazareth/Docker_PHP/tree/main/tarea2

2. Entrega la instrucción para ver los dos contenedores del escenario funcionando.

3. Entrega una captura de pantalla donde se vea funcionando la aplicación, una vez que te has logueado.

## Tarea 3: Creación de una imagen docker con una aplicación web desde una imagen PHP

* Vamos a crear una imagen que se llame `usuario/bookmedik:v2`.
* Realiza la imagen docker de la aplicación a partir de la imagen oficial [PHP](https://hub.docker.com/_/php/) que encuentras en docker hub. Lee la documentación de la imagen para configurar una imagen con apache2 y php, además seguramente tengas que instalar alguna extensión de php.
* Modifica el fichero `docker-compose.yml` para probar esta imagen.

### Entrega

1. Entrega la url del repositorio GitHub donde tengas los ficheros necesarios para hacer la construcción de la imagen.

https://github.com/belennazareth/Docker_PHP/tree/main/tarea3

2. Entrega una captura de pantalla donde se vea la imagen en el registro de tu entorno de desarrollo.

3. Entrega la instrucción para ver los dos contenedores del escenario funcionando.

4. Entrega una captura de pantalla donde se vea funcionando la aplicación, una vez que te has logueado.

## Tarea 4: Ejecución de una aplicación PHP en docker con nginx (OPTATIVA)

* Vamos a crear una imagen que se llame usuario/bookmedik:v3.
* En este caso queremos usar un contenedor que utilice nginx para servir la aplicación PHP. Puedes crear la imagen desde una imagen base debian o ubuntu o desde la imagen oficial de nginx.
* Vamos a crear otro contenedor que sirva php-fpm.
* Para que funcione de forma adecuada el php-fpm tiene que tener acceso al directorio donde se encuentra la aplicación.
* Y finalmente nuestro contenedor con la aplicación.
* Crea un script con docker compose que levante el escenario con los tres contenedores.

A lo mejor te puede ayudar el siguiente enlace: [Dockerise your PHP application with Nginx and PHP7-FPM](http://geekyplatypus.com/dockerise-your-php-application-with-nginx-and-php7-fpm/)

### Entrega

1. Entrega la url del repositorio GitHub donde tengas los ficheros necesarios para hacer la construcción de la imagen.

https://github.com/belennazareth/Docker_PHP/tree/main/tarea4

2. Entrega una captura de pantalla donde se vea la imagen en el registro de tu entorno de desarrollo.

3. Entrega la instrucción para ver los tres contenedores del escenario funcionando.

4. Entrega una captura de pantalla donde se vea funcionando la aplicación, una vez que te has logueado.

## Tarea 5: Puesta en producción de nuestra aplicación

* Elige una de las tres imágenes y súbela a Docker Hub.
* En tu VPS instala Docker y utilizando el `docker-compose.yml` correspondiente, crea un contenedor en ella de la aplicación.
* Configura el nginx de tu VPS para que haga de proxy inverso y nos permita acceder a la aplicación con `https://bookmedik.tudominio.xxx`.

### Entrega

1. Entrega una captura de pantalla de Docker Hub donde se vea tu imagen subida.
2. Entrega la configuración de nginx.

https://github.com/belennazareth/Docker_PHP/tree/main/tarea5

3. Entrega una captura de pantalla donde se vea funcionando la aplicación, una vez que te has logueado.

## Tarea 6: Modificación de la aplicación

* En el entorno de desarrollo vamos a hacer una modificación de la aplicación. Por ejemplo modifica el fichero `core/app/view/login-view.php` y pon tu nombre en la línea `<h4 class="title">Acceder a BookMedik</h4>`.
* Vamos a trabajar con la primera imagen que construimos. Vuelve a crear la imagen con la etiqueta `v1_2`.
* Cambia el `docker-compose` para probar el cambio.
* Modifica la aplicación en producción.

### Entrega

1. Entrega una captura de pantalla de Docker Hub donde se vea tu imagen subida.

2. Entrega una captura de pantalla donde se vea funcionando la aplicación, una vez que te has logueado.