Se requiere desarrollar un programa con JavaScript, que al ser ejecutado en la consola del navegador web, muestre los primeros 20 títulos de álbumes ofrecidos por una URL en la nube, esto se puede lograr mediante el ?id? que tiene cada objeto, que entrega la URL.
Igualmente, después de pasar 3 segundos, se debe mostrar un mensaje en la consola del navegador web indicando que la información fue enviada.
El procedimiento de manera general para lograr lo solicitado será:
? Crear una función asíncrona que contenga la URL en una variable.
? Luego mediante el bloque de try/catch conectarse a la URL indicada anteriormente con el método fetch, utilizando a la vez await para que retorne directamente el valor de la promesa.
? Utilizando métodos para iterar arreglos, como por ejemplo el forEach, solamente mostrar los primeros 20 títulos de álbumes de acuerdo al número de id indicados por la URL.
? Se debe crear otra función que retorne una promesa, la cual debe tardar tres (3) segundos en resolver la promesa para retornar el mensaje: ?Información Enviada?. Esta promesa debe ser recibida por una función asíncrona, que mediante el uso del await reciba directamente el valor y lo muestra por la consola del navegador web.

Requerimientos
1. Implementar ES6 para toda la estructura del código.
(1 Puntos)
2. Crear una función asíncrona para obtener los datos de la URL.
(2 Puntos)
3. Dentro de un bloque Try/Catch, utilizar el método fetch mediante la instrucción await para recibir el valor directamente de la promesa.
(1 Puntos)
4. Utilizar un método de iteración de arreglos (por ejemplo: forEach) para mostrar solamente los primeros 20 títulos de los datos recibidos.
(2 Puntos)
5. Crear una función que retorne una promesa después de tres (3) segundos utilizando setTimeout. El mensaje a retornar debe ser un string que indique: ?Información Enviada?.
(2 Puntos)
6. Crear una función asíncrona que permita recibir el mensaje de la promesa creada en el requerimiento cinco (5), de forma directa con await, para ser mostrado en la consola del navegador, agregando el llamado a las dos funciones principales.
(2 Puntos)

ADICIONALES:
* URL API: https://jsonplaceholder.typicode.com/photos