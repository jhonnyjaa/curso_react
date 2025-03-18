import heroes from "./bases/08-imp-export";
import getHeroesByOwner from './bases/08.1-imp-export'

getHeroesByOwner
// Promesas



const promesa = new Promise( (resolve , reject) => {
    setTimeout(()=>{
        resolve();
    },2000)  ;   
});


promesa.then(() => {
    console.log('Then de la promesa')
});

console.log(getHeroesByOwner('Marvel'));
