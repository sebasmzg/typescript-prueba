const form = <HTMLFormElement> document.getElementById('form-login')
const email = <HTMLInputElement> document.getElementById("email-login");
const password = <HTMLInputElement> document.getElementById("password-login")

form.addEventListener('submit',async (e: Event)=>{
    e.preventDefault();
    const dataToLogin: IBodyRequestLogin = {
        email: email.value,
        password: password.value
    }
    
    const usersController: UsersController = new UsersController(domain);
    try {
        const resultLogin = await usersController.postLogin(dataToLogin);
        if(resultLogin.data.token){
            localStorage.setItem('token',resultLogin.data.token);
            
            window.location.href = 'books.html'
            form.reset();
        }
    } catch (error){
        console.error('Login failed ',error);
    }
})