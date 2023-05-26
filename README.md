# CoACoCriptoAPI
Codo a Codo - Comisión 23031
TPO Desarrollo Web
HTML, CSS y Javascript

<<<<<<< HEAD
=======
| Integrantes: |
------------
| Nombre | Apellido | DNI | E-mail | 
| ------------ | ------------ | ------------ | ------------ | 
| Jerónimo | Costa | *****705 | je********@gmail.com |
| Roberto | Luccas|*****297 |  r.*********@gmail.com | 
| Leonel|  Días |  *****291 |  es***********@gmail.com | 
| Adriana|  Rojas |  ***** | ad***********@gmail.com | 

>>>>>>> 3b853329fa9e1e322ccb8585ac2ff21ca2cd123e

************************
***  CoACoCriptoAPI  ***
************************


Integrantes:
------------
 __________ __________ __________ _________________________
| Nombre   | Apellido | DNI      | E-mail                  |
|----------|----------|----------|-------------------------|
| Jerónimo | Costa    | *****705 | je********@gmail.com    |
| Roberto  | Luccas   | *****297 | r.*********@gmail.com   |
| Leonel   | Días     | *****291 | es***********@gmail.com |
| Adriana  | Rojas    | *****279 | ad***********@gmail.com |
 ---------- ---------- ---------- -------------------------


Descripción:
------------

Página que permite obtener, en tiempo real, la cotización de diferentes criptomonedas. En particular trabaja con 4 de ellas, Bitcoin, Ethereum, Litecoin y Kava. Los datos los obtiene en línea aplicando una API-rest y se actualizan al momento de solicitarlos según información disponible en la página web de la propia API-rest.


Secciones:
----------

La página principal tiene una cabecera con una barra de navegación superior, luego una sección de presentación con un breve texto descriptivo, a continuación una sección con botones animados que redireccionan a la cotización de cada una de las 4 criptomonedas con las que se trabaja, posteriormente dos secciones enlazadas entre sí donde se describe a los autores/responsables de la página y el objetivo de la misma en una breve frase, adosando un mapa con su ubicación y un formulario de contacto, y finalmente un pié de página con una leyenda sobre derechos de autor de la página web creada.

* Barra de Navegación:

La barra de navegación en la cabecera de la página web creada, se replica en cada una de las 4 páginas que ofrecen las cotizaciones de las criptomonedas. Esta barra de navegación nos redirecciona a cada una de las secciones antes mencionadas: la presentación de la página ("INICIO"), la sección de botones para ir a las cotizaciones de las criptomonedas correspondientes (4 botones "CRIPTOMONEDA" acompañados por el logo de cada una de las criptomonedas correspnodientes) y la sección de contacto. Los íconos empleados en esta barra, al igual que el ícono en la solapa del navegador, se rescatan en línea de la página web FontAwesome.com.

* Presentación:

La sección de presentación de la página web creada tiene de fondo una imagen que se carga con la propia página web. Esta sección muestra un título y una descripción de la página. Ambos son breves y concisos, apuntando a la usabilidad del potencial usuario de la misma. Debajo de ambos textos hay un botón para obtener más información que simplemente redirecciona al usuario al formulario de contacto al final de la página. Este botón cuenta con una animación que le cambia el color al posicionar el puntero encima del mismo.

* Botonera para información de criptomonedas:

La sección a continuación permite obtener los datos de las criptomonedas correspondientes. La misma muestra un título breve con 4 botones debajo del mismo. Los botones poseen dos animaciones: por un lado al posar el cursor encima de ellos los mismos se desplazan sutilmente hacia arriba; por otro lado, al posar el cursor encima de ellos el texto cambia de color de negro a azul al igual que los íconos en ellos. Para esto se utilizaron íconos de la página web FontAwesome.com así como se procuró mantener la paleta de colores propuesta para toda la página, la cuál se respeta en los fondos de pantalla utilizados a lo largo de toda la página web creada.

  - Páginas relacionadas con cada una de las criptomonedas:

Las 4 páginas referidas a cada una de las 4 criptomonedas con las que opera la página web creada trabajan de la misma manera. En ellas se muestra la barra de navegación superior (la misma que en la página principal), el logo de una criptomoneda y un botón que muestra el nombre de la criptomoneda y permite obtener información relacionada con la misma. La barra de navegación superior replica casi idénticamente a la barra de navegación de la página principal, con la única diferencia de redirigir a la propia barra de navegación de la página principal al tocar el botón de "INICIO" en lugar de redireccionar a la descripción de la página como funciona esta barra de navegación en la página principal. El botón que solicita información de las criptomonedas correspondientes utiliza una API-rest que brinda la página web "coingecko.com". Para cada una de las 4 páginas de criptomonedas se utiliza de diferente manera, solicitando solo los datos de esa moneda en particular, en pesos argentinas y en castellano. El logo que se muestra para las criptomonedas, a diferencia de los logos que se muestran en la barra de navegación y en los botones de la página principal, se obtuvo en cada caso de la mísma página que la API-rest.

* Responsables del proyecto:

La sección siguiente está compuesta por dos secciones estrechamente conectadas, en esta se habla de las personas responsables de esta página web. En la primer sección encontramos el título "Quienes somos" con una descripción debajo que detalla, muy resumidamente, quién está detrás de este proyecto y cuál es el objetivo del mismo. Debajo, una segunda sección se divide en 2 elementos bien diferenciados, por un lado un mapa inscrustado y a continuación un formulario. Detrás de ambas partes se empleó un único fondo de pantalla que se carga junto con la página web y que mantiene la paleta de colores empleada en todo el trabajo. El mapa es un plano genérico de una pequeña porción de la ciudad de Buenos Aires que no indica ninguna dirección en particular. Para incrustarlo en la página web creada se utilizó iframe llamando a un plano específico de Google Maps con dimenciones que brindan responsividad a la página. El formulario de contacto presenta 4 campos, de los cuales uno de ellos exclusivamente numérico, una casilla de verificación y un botón para el envío de la información. El botón presenta una animación simple con un leve cambio de color. El tipo de información ingresada en los campos no se revisa hasta presionar el botón de envío.

* Pié de página:

Al final de la página web creada un pié de página anuncia simplemente información de derechos de autor de la misma.


Requerimientos del Trabajo:
---------------------------

El presente trabajo presenta 5 páginas del tipo .html, una principal y 4 relacionadas con las correspondientes criptomonedas.

Utiliza etiquetas semánticas para estructurar el sitio: header, nav, main, section, footer.

Contiene un formulario de contacto con validación realizada mediante Javascript.

Emplea iframe para incrustar un mapa generico extraido de Google Maps

Utiliza íconos de Fontawesome conectándose a una base de datos en línea mediante un script en el head de los archivos .html que redirecciona a un repositorio en línea (all.min.js, Fontawesome V6.4.0).

Utiliza fuentes locales y de Google Fonts.

Las páginas son totalmente responsives con 3 puntos de corte: libre, 768 px y 480 px de ancho respectivamente. Cabe destacar en este punto que la barra de navegación en la cabecera (nav dentro de header) no es responsive.

La página web creada cuenta con animaciones en diferentes puntos, todos ellos en botones presentes en la página. El botón en la sección de presentación (cambio de color), los botones en la botonera de criptomonedas (cambio de color de fuente y animación de movimiento en los botones) y el botón del formulario (cambio de color).

Está maquetado con Flexbox.

Consume la API-rest CoinGecko API V3 (https://www.coingecko.com) en 4 puntos distintos del trabajo: las 4 páginas de información de criptomonedas. Para cada caso siendo llamada de diferente manera, consultando solo los valores de la criptomoneda correspondiente, en AR$ y en castellano.

No se desarrolló con ningún Framework de CSS.

Estéticamente se trabajó con una paleta de colores relacionada con el móndo de criptomonedas, con mucha simetría en juego para las formas y con colores obscuros combinados con el negro. Se pueden encontrar tanto formas relacionadas con este universo en los fondos de pantalla (redes grafeno, triangulaciones de Delaunay, colapsos de supernovas) como colores a juego en cada fuente, botón o imágen. En particular se trabajó en los azules obscuros que resuleven tanto hacia el blanco con temática luz o hacia el azul con temática universo.


Participación:
--------------

JC propuso la idea del TPO, generó el repositorio GitHub para alojar el proyecto, generó el repositorio Jira para organizar la distribución del trabajo, organizó y dió formato a la idea, generó el código base del archivo index.html con todas las secciones (header, inicio, cryptos, about, contacto y footer), generó el archivo base style.css, dio estilos al archivo index.html con CSS, incluyó las animaciones, aportó en los estilos de los 4 archivos .html de las criptomonedas correspondientes con CSS, generó el archivo form.js y escribió el código del formulario de contacto. RL generó el código de los 4 archivos .html de las criptomonedas correspondientes, implementó la API-rest para estos 4 archivos .html con sus respectivas variaciones para cada uno de ellos, dio estilos a los 4 archivos .html de las criptomonedas correspondientes con CSS, implementó iframe para incrustar un elemento (mapa) en el archivo index.html, propuso la estética mantenida a partir de los fondos de pantalla, aportó en los estilos del index.html con CSS, implementó los íconos desde FontAwesome en los 5 archivos .html, generó el redireccionamiento desde el archivo index.html a cada uno de los 4 archivos .html de las criptomonedas correspondientes, generó el redireccionamiento desde el header de los 5 archivos .html a cada una de las secciones del index.html, corrigió estilos en la redacción para la no discriminación de género, redactó el archivo readme.md y realizó la revisión final del trabajo. Las 4 personas integrantes del grupo participaron en la discusión de ideas para la selección de la temática del trabajo. Las 4 personas integrantes del grupo están de acuerdo en la presentación del presente trabajo en las condiciones en las que se encuentra en un 100%.

26 de mayo de 2023. Bajo licencia Creative Commons by-nc-nd.

