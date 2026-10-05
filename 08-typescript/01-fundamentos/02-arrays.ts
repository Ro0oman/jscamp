//Sintaxis 1
const numeros:number[] = [1, 2, 3, 4, 5];
numeros.push(8)


//Sintaxis 2

const numerosAlt: Array<number> = [10,20,30]
numerosAlt.push(3)

const frutas: [string, string, string]= ['Hola','Hola','Hola'] //Tupla por que decimos el tipo y cada uno de los valores

const empty = [] //Avoid the type "ANY"
empty.push(1)

//-------------

let strings : string[] = []

//-------

const mixto : (string | number)[] = [1,"1","1",1]
const mixtoUndefined : (string | undefined)[] = [undefined,"undefined","undefined",undefined]