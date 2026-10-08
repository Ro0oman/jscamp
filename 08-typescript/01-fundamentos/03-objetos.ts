import type {User} from './00-types.ts'

const user: {name: string; age: number} = { //No esta del todo bien hecho asi
    name: "Roman",
    age: 290
}

// type User = {
//     name: string,
//     age: number
// }

const user2: User = {
    name: "Paco",
    age: 3102,
    email: "paco@paco"
}//as const 


// user2.name = 'Miguel' won't work

type Translations = {
    [key: string]: string
}

const dictionary:Translations = {
    hello: "Hola",
    goodbye: "Adios",
    cherry: "c"
}

