// Arreglos en JS

// const arreglo = new Array();
const arreglo = [1,2,3,4,]; // Es la forma correcta de inicializar el array (objeto)
// arreglo.push(1); // No se debe hacer por que modifica el objeto origial,
// arreglo.push(2); // No se debe hacer por que modifica el objeto origial,
// arreglo.push(3); // No se debe hacer por que modifica el objeto origial,
// arreglo.push(4); // No se debe hacer por que modifica el objeto origial,

let arreglo2 = [...arreglo, 5];

const arreglo3 = arreglo2.map((x) => x * 2) ;


console.log('arreglo:',arreglo);
console.log('arreglo2:',arreglo2);
console.log('arreglo3:',arreglo3);