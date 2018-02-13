<h2 class="western" align="left">¿Qué es Yarn?</h2>
<p align="justify">	Yarn
es un administrador de dependencias relativamente nuevo, es open
source y fue creado por miembros de Facebook y Google, su principal
característica es la rápidez.</p>
<p align="justify"><br/>

</p>
<h2 class="western" align="left">¿Porqué existe?</h2>
<p align="justify">	Antes
de la llegada de Yarn, teníamos muchos problemas para administrar
las dependencias de un proyecto, debido a que la instalación de
dependencias era muy lenta, tediosa y también generaba muchos
fallos, por lo cual llevar a cabo la instalación de dependencias de
un proyecto era una tarea muy engorrosa, muchas veces el tamaño del
proyecto era proporcional a los problemas que teníamos.</p>
<p align="justify">	Yarn
resuelve todos estos problemas debido a que nos ofrece una
administración eficiente de dependencias.</p>
<p style="margin-bottom: 0cm; line-height: 100%"><br/>

</p>
<h2 class="western" align="left">Comandos principales</h2>
<h4 class="western">Yarn init</h4>
<p align="justify">	Se utiliza para inicializar un proyecto de
NodeJS. Al ejecutarlo nos preguntaráel nombre de nuestro proyecto,
versión, descripción, archivo inicial, repositorio, autor y el tipo
de licencia de nuestro proyecto. Una vez hecho esto habrá generado
el “package.json”</p>
<h4 class="western">Yarn add &lt;package_name&gt;</h4>
<p align="justify">	Se utiliza para añadir dependecias al proyecto
(parecido a añadirlas en el “pom.xml” en Maven). Tiene
modificadores, por ejemplo “--dev”, para elegir la versión de la
dependencia a añadir.</p>
<h4 class="western">Yarn upgrade | yarn upgrade &lt;package_name&gt;</h4>
<p align="justify">	Se emplea para actualizar las dependecias del
proyecto en general o para actualizar una sola de ellas.</p>
<h4 class="western">Yarn remove &lt;package_name&gt;</h4>
<p>	Se utiliza para eliminar una dependencia del proyecto sin entrar
a modificar manualmente el “package.json”.</p>
<h4 class="western">Yarn (install)</h4>
<p>	Se emplea para instalar todas las dependencias del proyecto.
Genera la carpeta “node_modules” dentro de la estructura del
proyecto.</p>
<h4 class="western">Yarn (run) &lt;<span style="text-decoration: none">script_name</span>&gt;</h4>
<p>	Se utiliza para ejecutar un script indicado en el “package.json”.
Se suele utilizar para encadenar comandos. Parecido a los “alias”
en bash.</p>