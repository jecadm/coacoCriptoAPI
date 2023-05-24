# CoACoCriptoAPI
Codo a Codo - Comisión 23031
TPO Desarrollo Web
HTML, CSS y Javascript

| Integrantes: |
------------
| Nombre | Apellido | DNI | E-mail | 
| ------------ | ------------ | ------------ | ------------ | 
| Jerónimo | Costa | *****705 | je********@gmail.com |
| Roberto | Luccas|*****297 |  r.*********@gmail.com | 
| Leonel|  Días |  *****291 |  es***********@gmail.com | 
| Adriana|  Rojas |  ***** | ad***********@gmail.com | 


************************
***  CoACoCriptoAPI  ***
************************

Descripción:
------------

Página que permite obtener en tiempo real la cotización de diferentes criptomonedas. En particular trabaja con 4 de ellas, Bitcoin, Ethereum, Litecoin y Kava. Los datos los obtiene en línea aplicando una API-rest y se actualizan al momento según información disponible en la red.

La págna principal tiene una sección de presentación con un breve texto descriptivo, a continuación una sección con botones que redireccionan a la cotización de cada una de las 4 criptomonedas, para finalmente mostrar dos secciones enlazadas entre sí donde se describe a los autores/responsables de la página y el objetivo de la misma en una breve frase, adosando un formulario de contacto.

En la cabecera de la página encontramos una barra de navegación, que se replica en cada una de las 4 páginas que ofrecen las cotizaciones de las criptomonedas, que nos redirecciona a cada una de las secciones antes mencionadas: la presentación de la página, la sección de botones para ir a las cotizaciones de las criptomonedas correspondientes, esta dividida en las 4 criptomonedas con las que se trabaja, y la sección de contacto.

Trabajo:
--------

El presente trabajo presenta 5 páginas del tipo .html, una principal y 4 relacionadas con las correspondientes criptomonedas.

Utiliza etiquetas semánticas para estructurar el sitio: header, nav, main, section, footer.

Contiene un formulario de contacto con validación realizada mediante Javascript.

No contiene ningún i-frame

Utiliza íconos de Fontawesome conectándose a una base de datos en línea mediante un script en el head de los archivos .html que redirecciona a un repositorio en línea (all.min.js, Fontawesome V6.4.0).

Utiliza fuentes locales, de Google Fonts o similar.

Las páginas son totalmente responsives con 3 puntos de corte: libre, 768 px y 480 px. Cabe destacar en este punto que la barra de navegación en la cabecera (nav dentro de header) no es responsive.

No se ha incorporado ninguna animación, transición o transformación en la página.

Está maquetado con Flexbox.

Consume la API-rest CoinGecko API V3 (https://www.coigecko.com) consultando para cada caso solo los valores de la criptomoneda correspondiente, en AR$ y en castellano.

No se desarrolló con ningún Framework de CSS.

Participación:
--------------

JC propuso la idea del TPO, generó el repositorio GitHub para alojar el proyecto, generó el repositorio Jira para organizar la distribución del trabajo, organizó y dió formato a la idea, generó el código base del index.html con todas las secciones (header, inicio, cryptos, about, contacto y footer), generó el archivo base style.css, dio estilos al archivo index.html con CSS, aportó en los estilos de los 4 archivos .html de las criptomonedas correspondientes con CSS, generó el archivo form.js y escribió el código del formulario de contacto. RL generó el código de los 4 archivos .html de las criptomonedas correspondientes, implementó la API-rest para estos 4 archivos .html con sus respectivas variaciones para cada uno de ellos, dio estilos a los 4 archivos .html de las criptomonedas correspondientes con CSS, aportó en los estilos del index.html con CSS, implementó  los íconos en los 5 archivos .html, generó el redireccionamiento desde el archivo index.html a cada uno de los 4 archivos .html de las criptomonedas correspondientes, generó el redireccionamiento desde el header de los 5 archivos .html a cada una de las secciones del index.html y redactó el archivo readme.md. Todos los autores participaron en la discusión de ideas y corrección de este trabajo.

22 de mayo de 2023. Bajo licencia Creative Commons by-nc-nd.

