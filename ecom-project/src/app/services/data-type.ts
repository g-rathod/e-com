export interface signUp{
    firstName:string,
    lastName:string,
    userName:string,
    email: string,
    password:string
}

export interface login{
    userName:string,
    password:string
}

export interface product{
    name:string,
    price:string,
    category:string,
    color:string,
    image:string,
    description:string,
    id:number
}
