// ----------  USERS INTERFACER  ----------


//login

export interface IBodyRequestLogin {
    email:	string
    password:	string
}

export interface IBodyResponseLogin{
    message: string
}

//register

export interface IBodyRequestRegister {
    email:	string
    password:	string
}

export interface IBodyResponseRegister {
    email:    string;
    password: string;
    id:       number;
}
