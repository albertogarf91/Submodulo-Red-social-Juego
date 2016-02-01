[![Build Status](https://travis-ci.org/albertogarf91/Submodulo-Red-social-Juego.svg?branch=master)](https://travis-ci.org/albertogarf91/Submodulo-Red-social-Juego)

[![Heroku](https://www.herokucdn.com/deploy/button.png)](http://juegoetsiit.herokuapp.com/)

# Submódulo de la Red Social: Juego

Este proyecto participará en el certamen de proyectos libres de la oficina de Software libre de la Universidad de Granada: [Red Social](https://github.com/albertogarf91/Red-social-ETSIIT). 

Las bases del certamen [aquí](https://docs.google.com/document/d/16UsdUV_XXuPUh-Imz4PSgh-2ES_YaAJpZ8fNrbTVpMA/edit)

## Descripción

Se tratará de crear un juego para la red social. Los usuarios de la red social tendrán la opción de jugar a este juego. Se jugará desde el navegador, es decir, no es una aplicación de escritorio. Para ello se hará uso de los gráficos en la web, en nuestro caso se usará HTML5 y WebGL, las últimas tecnologías de gráficos en la web.

## Herramientas de desarrollo

Para la parte del servidor se usará Node.js y Socket.io .

El servidor extraerá datos de los jugadores que jueguen al juego y se almacenarán en una base de datos MongoDB. Otro módulo encargado del Analytics se encargará de analizarlos con herramientas de análisis de datos tales como Rstudio o Knime. El módulo del juego solo almacenará los datos.

El grueso de este módulo es la parte del cliente que es un frontal en HTML5 donde se incluirá todo el módulo del juego. Dentro de éste frontal estará el Canvas donde se pondrá la aplicación o juego en WebGL.

WebGL es una especificación estándar que está siendo desarrollada actualmente para mostrar gráficos en 3D en navegadores web. El WebGL permite mostrar gráficos en 3D acelerados por hardware (GPU) en páginas web, sin la necesidad de plug-ins en cualquier plataforma que soporte OpenGL 2.0 u OpenGL ES 2.0. Técnicamente es un API para javascript que permite usar la implementación nativa de OpenGL ES 2.0 que será incorporada en los navegadores.

Para las pruebas unitarias se usará Mocha y para la integración continua Travis CI.

Como se trata de desplegar una aplicación en la nube usaremos Azure de Microsoft.

## Despliegue en PaaS
La plataforma PaaS elegida ha sido Heroku, principalmente debido a su relativa facilidad de uso. La configurción a nivel de despliegue en Heroku es mediante un archivo lamado Procfile, cuya definición en mi caso es con una ejecución del servidor.

[Procfile](https://github.com/albertogarf91/Submodulo-Red-social-Juego/blob/master/Procfile)

Este PaaS soporta Node.js, lenguaje utilizado para la implementación de mi aplicación, esto ha hecho que el archivo de configuración anterior sea simple.

Otro de los motivos de utilización es que heroku dispone de un método de despliegue automático que funciona con repositorios de Github. Para configurarlo solo tenemos que ingresar nuestra cuenta de Github y seleccionar el repositorio del proyecto. A continuación seleccionamos la casilla de esperar a la integración continua antes del despliegue y seleccionar la rama 'master' del repositorio. De esta manera cada vez que se haga un commit en nuestro repositorio del proyecto, se hará la integración continua y se desplegará en heroku de manera automatica.

![img1](https://dl.dropboxusercontent.com/s/fhia7ltkcua1o98/despliegueAutomatico1.png?dl=0)

En el siguiente enlace se puede ver el ciclo completo de despliegue en un PaaS con un [ejemplo](https://github.com/albertogarf91/Submodulo-Red-social-Juego/blob/master/docs/pruebaDespliegue.md).

Vemos como la aplicación ha sido desplegada correctamente en la siguiente URL: [http://juegoetsiit.herokuapp.com/](http://juegoetsiit.herokuapp.com/).


## Instalación

  * Código
  ```
  git clone https://github.com/albertogarf91/Submodulo-Red-social-Juego.git
  
  cd Submodulo-Red-social-Juego
  ```

  * Instalación de dependencias
  `npm install`

  * Ejecución
  `npm start`

  Si has hecho lo anterior estará disponible en [http://localhost:5000/](http://localhost:5000/)
  
## Docker

En este [enlace](https://hub.docker.com/r/albertogarf91/submodulo-red-social-juego/) preparamos el automatic build para que cuando haya cambios en Github se actualice en Docker.
