
// Variables en JS

const  nombre = 'Jhonny';
const segundo_nombre = 'jairo';


/* se pueden crear variables con un nombre ya reservado, pero dentro del scope de
 la condicional
*/

if (nombre == 'Jhonny') {
    const nombre = 'Nombre2';

    console.log('Si es mi monmbre', nombre);
}   else {
    console.log('No es mi nombre');
}