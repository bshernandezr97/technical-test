## Prueba técnica Backend

Para correr el ambiente de desarrollo debes clonar el repositorio y ejecutar npm i para instalar los paquetes necesarios para ejecutar la aplicación.

Una vez instalado debes actualizar el archivo .env añadiendo la variable de entorno DB_URI con el link de conexión de tu base de datos mongo. En este caso la build generada por la aplicación web frontend se aloja en la carpeta public, debes verificar que las variables de entorno en el frontend correspondan a la uri del backend, en este caso http://localhost:8081/api, la rutas que no se encuentren serán redireccionadas al front end en donde sus paginas principales se encuentran en /movies y /clasification. Para correr el entorno de desarrollo basta con ejecutar npm run dev en una terminal ubicada en la carpeta root del proyecto.

En el despliegue a heroku se usaron variables de entorno para el link de conección de la base de datos alojada en Mongo Atlas. Para asociar heroku y github, heroku brinda la opción de asociar el repositorio y elegir sobre cual rama se desea hacer el despliegue, solo debes crear un nuevo proyecto, asociarlo al repositorio y seleccionar la rama que quieres que se despliegue. Es importante actualizar la variable de entorno situada en el frontEnd que da acceso a los endpoints del backend, ya que esta será dada por heroku una vez crees el proyecto.