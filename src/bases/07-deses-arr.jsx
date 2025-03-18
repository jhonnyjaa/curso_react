// Desestructuracion de arreglos

const personajes = ['Goku', 'Vegueta', 'Trumks'];

const [ ,,personaje3] = personajes;

// console.log(personaje3);


// Con funciones
const retornaArreglo = () => {
    return ['ABC',123];
};

const [letras,numeros] = retornaArreglo();
// console.log(letras, numeros)

// Tarea
// 1. el primer valor del arr se llamará nombre
// 2. se llamará setNombre

const useState = (valor) => {
    return [valor, () => {console.log('Hola mundo')}];
}

const [nombre,setNombre] = useState('Goku');



console.log(nombre);
setNombre();