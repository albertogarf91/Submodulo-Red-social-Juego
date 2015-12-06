#!/bin/bash

#Descargamos el repositorio
echo 'Descargando repositorio...'
git clone https://github.com/albertogarf91/Submodulo-Red-social-Juego.git

#Nos colocamos en el repositorio
cd Submodulo-Red-social-Juego

#Creamos la aplicación
echo 'Creando aplicación...'
heroku apps:create --region eu juegoetsiit

#Desplegamos la aplicación a Heroku
echo 'Desplegando aplicación...'
git push heroku master

#Abrimos el navegador
echo 'Abriendo navegador...'
heroku open
