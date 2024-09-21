/**
 * lógicas 
 */

/* funcion principal que obtiene los 20 primeros datos de la API*/
const obtenerDatos = async () => {
    const url = 'https://jsonplaceholder.typicode.com/photos';
    
    try {
        const respuesta = await fetch(url);
        const datos = await respuesta.json();
        
        datos.slice(0, 20).forEach(item => {
            console.log(item.title);
        });
        
        const mensaje = await mostrarMensaje();
        console.log(mensaje);
        
    } catch (error) {
        console.error('Error al obtener los datos:', error);
    }
};

/* funcion mostrar mensaje luejo de 3 segundos */
const mostrarMensaje = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Información Enviada");
        }, 3000);
    });
};

/* llamada principal */
obtenerDatos();
