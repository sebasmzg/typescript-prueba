import { UsersController } from "./users.controllers";
import { IBodyRequestRegister } from "../models/user.model";
import { BASE_URL } from "./URL-base";
import Swal from "sweetalert2";

//dom elements register
const form = <HTMLFormElement> document.getElementById("form-register");
const email = <HTMLInputElement> document.getElementById("email-register")
const password = <HTMLInputElement> document.getElementById("password-register");
const confirmPassword = <HTMLInputElement> document.getElementById("confirm-password-register");




//form event listener register
form.addEventListener('submit', async (e: Event)=>{
    e.preventDefault();
    
    if(password.value === confirmPassword.value){
        const data: IBodyRequestRegister = {
            email: email.value,
            password: password.value,
        }
        const userController: UsersController = new UsersController(BASE_URL);
        try {
            const resultRegister = await userController.resgister(data);
            console.log('user:',resultRegister);
            Swal.fire({
                title: 'User created',
                text: 'User created successfully',
                icon: 'success',
                background: '#181818',
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Ok',
                color: '#fff'
            });
            
            form.reset();
        } catch (error) {
            console.error('Create user failed');   
        }
    } else {
        Swal.fire({
            title: 'Error',
            text: 'Passwords do not match',
            icon: 'error',
            background: '#181818',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ok',
            color: '#fff'
        });
    }

})


