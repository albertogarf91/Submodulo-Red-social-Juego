A continuación veremos el ciclo completo de despliegue del proyecto en un PaaS. Primero se hace un 'commit' en nuestro repositorio y veremos como ese mismo código aparece tanto en la herramienta de CI Travis y en la 'Activity' de Heroku.

[Commit](https://github.com/albertogarf91/Submodulo-Red-social-Juego/commit/7d987ffdabd2c06da05e45d859e41313bafc7585) con el que se hará la prueba.

Github, aquí podemos ver el commit de prueba que se hará para este ejemplo:

![img2](https://dl.dropboxusercontent.com/s/z4f76hlw4b1s4cb/despliegueAutomatico2.png?dl=0)

Travis CI, en la herramienta de integración continua vemos el commit anterior y pasa todas las pruebas:

![img3](https://dl.dropboxusercontent.com/s/xk30mgmmz7yub1y/despliegueAutomatico3.png?dl=0)

Heroku, en la parte de 'Activity' vemos el mismo commit e indica que ha sido desplegado correctamente:

![img4](https://dl.dropboxusercontent.com/s/0kawye2b8taorfg/despliegueAutomatico4.png?dl=0)

