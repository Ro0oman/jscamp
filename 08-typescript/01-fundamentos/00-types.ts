export type Company= {
    name: string,
    address: string,
    phone?:string
}
export type User = {
    readonly name: string,
    age: number,
    email? : string,
    company?: Company,
    role? : "admin"| "user"| "editor"
}


// Intersection Types
type UserId = {
    readonly id: string|number
}

type UserEntity = User & UserId & UserWithBithDate

const user2: UserEntity = {
    id: 11221,
    name: "Paco",
    age: 3102,
    email: "paco@paco",
    birthdate: new Date("2002-07-02")
}


type UserWithBithDate = {
    birthdate: Date
}

