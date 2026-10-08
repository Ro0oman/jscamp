//Make a generic type to a smaller one with checks

function procesar(valor: number|string){
    //number|string
    if (typeof valor === 'number') {
        //Number
    }else{
        //Has to be string
    }
}

function printMessage(message: string|null|undefined){
    //string|null|undefined
    if(message){
        message.charAt(1) //String only
    }
}

//Operator narrowing
type Pez = { nombre: string; nadar: () => void }
type Pajaro = { nombre: string; volar: () => void }
type Perro = { nombre: string; ladrar: () => void }
type Animal = Pez | Pajaro | Perro

function mover(animal: Animal) {  
    if ('nadar' in animal) {    
    // animal es Pez    
        animal.nadar()    
        return  
    }  
    if ('volar' in animal) {    
        // animal es Pajaro    
        animal.volar()    
        return      
    }  
    // animal es Perro  
     animal.ladrar()
}

//Instance of narrowing

function formatDate(value: Date|string):string{
    if(value instanceof Date){
        return value.toUTCString()
    }
    return new Date(value).toUTCString()
}