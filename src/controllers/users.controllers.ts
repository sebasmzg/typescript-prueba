import { IBodyRequestLogin, IBodyResponseLogin, IBodyRequestRegister, IBodyResponseRegister } from "../models/user.model";

export class UsersController {
    url: string;
    constructor(url: string) {
        this.url = url;
    }

    async login(data: IBodyRequestLogin): Promise<IBodyResponseLogin> {
        const headers: Headers = new Headers({
            "Content-Type": "application/json",
            "Content-Length": "<calculated when request is sent>",
            "Host": "<calculated when request is sent>",
            "User-Agent": "PostmanRuntime/7.37.3",
            "accept": "*/*",
            "Accept-Encoding": "gzip, deflate, br",
            "connection": "keep-alive"
        });
        const reqOptions: RequestInit = {
            method: "POST",
            headers,
            body: JSON.stringify(data)
        };
        const res: Response = await fetch(`${this.url}auth/login`, reqOptions);
        console.log(res.statusText);
        
        if(res.status !== 201){
            throw new Error(`Error: ${res.status}`);
        }
        return await res.json();
    }

    async resgister(data: IBodyRequestRegister): Promise<IBodyResponseRegister> {
        const headers: Headers = new Headers({
            "Content-Type": "application/json",
            "Content-Length": "<calculated when request is sent>",
            "Host": "<calculated when request is sent>",
            "User-Agent": "PostmanRuntime/7.37.3",
            "accept": "*/*",
            "Accept-Encoding": "gzip, deflate, br",
            "connection": "keep-alive"

        });
        const reqOptions: RequestInit = {
            method: "POST",
            headers,
            body: JSON.stringify(data)
        };
        const res: Response = await fetch(`${this.url}users/register`, reqOptions);
        console.log(res.status);
        
        if(res.status !== 201){
            throw new Error(`Error: ${res.status}`);
        }
        return await res.json();
    }
}