Se requiere desarrollar un programa con JavaScript, que al ser ejecutado en la consola del navegador web, muestre los primeros 20 t�tulos de �lbumes ofrecidos por una URL en la nube, esto se puede lograr mediante el ?id? que tiene cada objeto, que entrega la URL.
Igualmente, despu�s de pasar 3 segundos, se debe mostrar un mensaje en la consola del navegador web indicando que la informaci�n fue enviada.
El procedimiento de manera general para lograr lo solicitado ser�:
? Crear una funci�n as�ncrona que contenga la URL en una variable.
? Luego mediante el bloque de try/catch conectarse a la URL indicada anteriormente con el m�todo fetch, utilizando a la vez await para que retorne directamente el valor de la promesa.
? Utilizando m�todos para iterar arreglos, como por ejemplo el forEach, solamente mostrar los primeros 20 t�tulos de �lbumes de acuerdo al n�mero de id indicados por la URL.
? Se debe crear otra funci�n que retorne una promesa, la cual debe tardar tres (3) segundos en resolver la promesa para retornar el mensaje: ?Informaci�n Enviada?. Esta promesa debe ser recibida por una funci�n as�ncrona, que mediante el uso del await reciba directamente el valor y lo muestra por la consola del navegador web.

Requerimientos
1. Implementar ES6 para toda la estructura del c�digo.
(1 Puntos)
2. Crear una funci�n as�ncrona para obtener los datos de la URL.
(2 Puntos)
3. Dentro de un bloque Try/Catch, utilizar el m�todo fetch mediante la instrucci�n await para recibir el valor directamente de la promesa.
(1 Puntos)
4. Utilizar un m�todo de iteraci�n de arreglos (por ejemplo: forEach) para mostrar solamente los primeros 20 t�tulos de los datos recibidos.
(2 Puntos)
5. Crear una funci�n que retorne una promesa despu�s de tres (3) segundos utilizando setTimeout. El mensaje a retornar debe ser un string que indique: ?Informaci�n Enviada?.
(2 Puntos)
6. Crear una funci�n as�ncrona que permita recibir el mensaje de la promesa creada en el requerimiento cinco (5), de forma directa con await, para ser mostrado en la consola del navegador, agregando el llamado a las dos funciones principales.
(2 Puntos)

ADICIONALES:
* URL API: https://jsonplaceholder.typicode.com/photos