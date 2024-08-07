import { UsersController } from "./users.controllers";
import Swal from "sweetalert2";
import { IBodyRequestLogin } from "../models/user.model";
import { BASE_URL } from "./URL-base";
import { showLoading } from "./loadingPage";


//dom elements login
const form = <HTMLFormElement> document.getElementById('form-login')
const email = <HTMLInputElement> document.getElementById("email-login");
const password = <HTMLInputElement> document.getElementById("password-login")
//form event listener login

form.addEventListener('submit',async (e: Event)=>{
    e.preventDefault();
    
    const dataToLogin: IBodyRequestLogin = {
    email: email.value,
    password: password.value
    }

    try {
        
        const loginUserControllers: UsersController = new UsersController(BASE_URL);
        const resultLogin = await loginUserControllers.login(dataToLogin);

        
        form.reset();
        if(resultLogin.message === 'Login successful'){
            sessionStorage.setItem('email', dataToLogin.email);
            sessionStorage.setItem('password', dataToLogin.password);
            showLoading();
            setTimeout(() => {
                window.location.href = './src/views/home/home.html';
            }, 1500);
        } else {
            Swal.fire({
                title: "Oops!",
                text: "Login failed, please check your email and password",
                icon: "error"
            });
        }
        
    } catch (error) {
        if(!email.value || !password.value){
            Swal.fire({
              title: "Oops!",
              text: "Login failed, please fill in all the fields",
              icon: "error"
            });
        }
    }
     
});