export type Company= {
    name: string,
    address: string,
    phone?:string
}
export type User = {
    readonly name: string,
    age: number,
    email? : string,
    //company?:{
    //    name: string,
    //    address: string,
    //    phone?:string
    //} 
    company?: Company,
    role? : "admin"| "user"| "editor"
}