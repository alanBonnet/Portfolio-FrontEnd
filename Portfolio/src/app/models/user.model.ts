export class user{
    id?:number;
    username:string;
    name:string;
    password:string;
    email:string;

    constructor(username:string, name:string,password:string,email:string){
        this.username = username;
        this.name = name;
        this.email = email;
        this.password = password;
    }
}