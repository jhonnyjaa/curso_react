// Desestructuracion
// Asignacion desestructurante


const persona = {
    nombre: 'Jhonny',
    edad: 30,
    clave: 'Ironman',
}


// Por asignacion desestructurante
const {nombre, edad, clave} = persona;

const useContext = ({clave,nombre, edad, rango ='capitan'}) => {

    // console.log(nombre,rango);

    return {
      nombreClave: clave,
      anios:edad,  
      latlng: {
        lat: 23232,
        lng: -23232,
      }
    }

};

const {nombreClave, anios, latlng:{lat,lng}} = useContext(persona);

console.log(nombreClave, anios);
console.log(lat, lng);