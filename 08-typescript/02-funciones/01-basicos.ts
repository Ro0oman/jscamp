function sumar(a:number, b:number){ // No need to tell TS that the result is a number
    return a + b
}

const multiplu = (a: number, b:number):number=> a*b

function saludar(nombre: string, apellido?:string):string{
    if(apellido){
        return`Hola ${nombre}, ${apellido}`
    }
    return `Hola ${nombre}`
}

//Default params
function crearUsuario(nombre: string, rol:string = 'admin'):{nombre:string; rol:string}{
    return{
        nombre,
        rol
    }
}


console.log(crearUsuario("paco"));



//Rest params
function sumarNumeros(...numeros:number[]):number{ //Undefined ammount of numbers
    return numeros.reduce((acc, curr)=> acc+curr,0)
}

console.log(sumarNumeros(1,2));
console.log(sumarNumeros(1,2,3,4,5,6,7,8,9));


//Function types
type OperacionMatematica = (a:number, b:number) => number

const division: OperacionMatematica = (a, b) => a/b
const resta: OperacionMatematica = (a, b) => a-b
