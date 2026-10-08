//Any -> AVOID IT

import { log } from "node:console";

let cualquierCosa: any = "Hola";

cualquierCosa = 1212;
cualquierCosa = true;
cualquierCosa.filter();

const result = cualquierCosa + 6; // === Result : any

//Any use cases
//1. Migrations from js to TS
//2. Libraries from thirds without types

//Secure alternative to any
//Unknown

let valorUnknown: unknown = "hola";
//valorUnknown.saludo() -> Error
//valorUnknown.+10 -> Error

if (typeof valorUnknown === "number") {
  // Good :)
  const result = valorUnknown + 8;
  console.log(result);
} else if (typeof valorUnknown === "string") {
  console.log(valorUnknown.toLocaleLowerCase());
}

function parseJSON(jsonString: string): unknown {
  return JSON.parse(jsonString);
}

const datos = parseJSON('{"nombre":"midudev","edad":30}');

if(typeof datos === 'object' && datos !==null && 'nombre' in datos){
    console.log((datos as {nombre : string}).nombre); //Datos is an object with a name attribute
}

//Void
function saludar(): void{
    console.log('Hola');
}

function logError(errorMessage:string): void{
    if (errorMessage.length===0) {
        return undefined
    }
    console.log('Hola');
}

const resultado: void = saludar() // Would be empty

//Never imposible value that will never happen

function infiniteLoop():never{
    while (true) {
        //Loooooooooop  maybe in a game that loops every tick        
    }
}


function throwError(message: string):never{
    throw new Error(message)
}
