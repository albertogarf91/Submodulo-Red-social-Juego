[![Build Status](https://travis-ci.org/albertogarf91/Submodulo-Red-social-Juego.svg?branch=master)](https://travis-ci.org/albertogarf91/Submodulo-Red-social-Juego)



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
