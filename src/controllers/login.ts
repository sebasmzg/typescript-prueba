import { UsersController } from "./users.controllers";
import { IBodyRequestLogin, IBodyResponseLogin } from "../models/user.model";
import { BASE_URL } from "./URL-base";

const form = <HTMLFormElement> document.getElementById('form-login')
const email = <HTMLInputElement> document.getElementById("email-login");
const password = <HTMLInputElement> document.getElementById("password-login")



form.addEventListener('submit',async (e: Event)=>{
    e.preventDefault();
    const dataToLogin: IBodyRequestLogin = {
        email: email.value,
        password: password.value
    }
    
    const usersController: UsersController = new UsersController(BASE_URL);
    try {
        const resultLogin = await usersController.login(dataToLogin);
        console.log(resultLogin);
    } catch (error){
        console.error('Login failed ',error);
    }
})