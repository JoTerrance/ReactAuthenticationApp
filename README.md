#ReactJS + Yarn

##¿Qué es Yarn?
Yarn es un administrador de dependencias relativamente nuevo, es open source y fue creado por miembros de Facebook y Google, su principal característica es la rápidez.

##¿Porqué existe?
Antes de la llegada de Yarn, teníamos muchos problemas para administrar las dependencias de un proyecto, debido a que la instalación de dependencias era muy lenta, tediosa y también generaba muchos fallos, por lo cual llevar a cabo la instalación de dependencias de un proyecto era una tarea muy engorrosa, muchas veces el tamaño del proyecto era proporcional a los problemas que teníamos.
	Yarn resuelve todos estos problemas debido a que nos ofrece una administración eficiente de dependencias.

##Comandos principales
###Yarn init
Se utiliza para inicializar un proyecto de NodeJS. Al ejecutarlo nos preguntará el nombre de nuestro proyecto, versión, descripción, archivo inicial, repositorio, autor y el tipo de licencia de nuestro proyecto. Una vez hecho esto habrá generado el “package.json”.

###Yarn add <package_name>
Se utiliza para añadir dependecias al proyecto (parecido a añadirlas en el “pom.xml” en Maven). Tiene modificadores, por ejemplo “--dev”, para elegir la versión de la dependencia a añadir.

###Yarn upgrade | yarn upgrade <package_name>
Se emplea para actualizar las dependecias del proyecto en general o para actualizar una sola de ellas.

###Yarn remove <package_name>
Se emplea para eliminar las dependencias del proyecto.	

###Yarn (install)
Se emplea para instalar todas las dependencias del proyecto. Genera la carpeta “node_modules” dentro de la estructura del proyecto.

###Yarn (run) <script_name>
Se utiliza para ejecutar un script indicado en el “package.json”. Se suele utilizar para encadenar comandos. Parecido a los “alias” en bash.