//  Objetos literales

const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad:'New york',
        zip: 232323,
        lat: 123123,
        lng: 232323,
    }
};

// Crear una copia literal del objeto, se debe hacer para objetos y arrays,
// Sino se realiza una copia, las modificaciones se realizan al objeto original
const persona2 = {...persona};

persona2.nombre = 'Peter';


console.log( 'persona',persona);
console.log( 'persona2',persona2);
