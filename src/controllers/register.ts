const form = <HTMLFormElement> document.getElementById("form-register");
const email = <HTMLInputElement> document.getElementById("email-register")
const password = <HTMLInputElement> document.getElementById("password-register");
const confirmPassword = <HTMLInputElement> document.getElementById("confirm-password-register");

form.addEventListener('submit', async (e: Event)=>{
    e.preventDefault();

    if(password.value === confirmPassword.value){
        const data: IBodyRequestRegister = {
            email: email.value,
            password: password.value,
        }
        const userController: UsersController = new UsersController(domain);
        try {
            const resultRegister = await userController.createUSer(data);
            form.reset();
        } catch (error) {
            console.error('Create user failed');   
        }
    } else {
        alert('Passwords don’t match')
    }

})