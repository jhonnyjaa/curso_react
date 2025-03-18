// Funciones en JS

// Funcion tradicional o normal
const saludar = function saludar (nombre){
    return 'hola, '+ nombre;
}

// Funcion de fecha simplificada
const saludar2 =  (nombre) => 'hola, '+ nombre;


// Funcion de fecha simplificada sin argumentos, no es necesario el argumento
// Solo aplica cuando es un solo argumento, js entiende de manera implicita
const saludar3 =  () => 'hola, '+ nombre;

const nombre = 'Jhonnyx';


// Ejemplo para retornar un objeto usando una funcion de flecha:
const getUser = () => ({
    uid : 232323 ,
    username : 'jhonny',
});

const user = getUser();


console.log('saludar',saludar(nombre))
console.log('saludar2',saludar2(nombre))
console.log('saludar3',saludar3(nombre))
console.log(user)


// Tarea
// 1. Transformar a una funcion de flecha
// 2. Tiene que retornar un objeto implicito
// 3. Pruebas

function getUsuarioActivo () {

    return {

        uid: 'asadas',
        username: 'JhonnyJaa'


    }

}

// Resolviendo1
const getUsuarioActivo2 = (nombre) => ({
    uid: 'asadas',
    username: 'JhonnyJaa',
});
const getUsuarioActivo5 = () => ({
    uid: 'asadas',
    username: 'JhonnyJaa',
});

// Resolviendo2
const getUsuarioActivo3 = getUsuarioActivo2();



console.log(getUsuarioActivo3)