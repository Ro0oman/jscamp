
export type UserType = {
    readonly name: string,
    age: number,
    email? : string,
    role? : "admin"| "user"| "editor"
}

interface Persona{
    readonly name:string,
    readonly age: number
}

interface User extends Persona {
    readonly name: string,
    age: number,
    email? : string,
    role? : "admin"| "user"| "editor"
}


interface Admin extends User{
    adminLevel: number
}




//Difference between type and interface, use them only with objects

const user2: User = {
    name: "Paco",
    age: 3102,
    email: "paco@paco",
}


